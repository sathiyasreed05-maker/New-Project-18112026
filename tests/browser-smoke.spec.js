const { test, expect } = require("@playwright/test");

const password = process.env.WC_PASSWORD;
const buyer = process.env.WC_BUYER_USERNAME || "buyer1";
const seller = process.env.WC_SELLER_USERNAME || "seller1";
const operator = process.env.WC_OPERATOR_USERNAME || "operator";

async function openLogin(page) {
  await page.goto("/");
  await expect(page).toHaveURL(/sathiya-555f4a/);
}

async function fillLogin(page, username, secret) {
  const inputs = page.locator("input");
  await expect(inputs.first()).toBeVisible();

  const usernameField =
    page.locator('input[name="username"], input[name="user"], input[name="email"], input[type="text"]').first();
  const passwordField = page.locator('input[name="password"], input[type="password"]').first();
  await usernameField.fill(username);
  await passwordField.fill(secret);

  const submit = page
    .locator('button[type="submit"], input[type="submit"], button')
    .filter({ hasText: /login|sign in|submit/i })
    .first();
  await submit.click();
}

test.beforeEach(async ({ page }) => {
  test.skip(!password, "Set WC_PASSWORD before running application tests.");
  await openLogin(page);
});

test("buyer login, authenticated shell, and logout", async ({ page }) => {
  await fillLogin(page, buyer, password);
  await expect(page.locator("body")).toBeVisible();
  await expect(page).not.toHaveURL(/login/i);

  const logout = page.getByText(/logout|sign out/i).first();
  await expect(logout).toBeVisible();
  await logout.click();
  await expect(page).toHaveURL(/login|sathiya-555f4a\/?$/i);
});

test("seller login reaches an authenticated shell", async ({ page }) => {
  await fillLogin(page, seller, password);
  await expect(page.locator("body")).toBeVisible();
  await expect(page).not.toHaveURL(/login/i);
});

test("operator login reaches an authenticated shell", async ({ page }) => {
  await fillLogin(page, operator, password);
  await expect(page.locator("body")).toBeVisible();
  await expect(page).not.toHaveURL(/login/i);
});

test("unknown username is rejected", async ({ page }) => {
  await fillLogin(page, "unknown-qa-user", password);
  await expect(page.locator("body")).not.toContainText(/unexpectedly successful login/i);
  await expect(page).not.toHaveURL(/orders|dashboard|seller|admin/i);
});

test("incorrect password is rejected", async ({ page }) => {
  await fillLogin(page, buyer, "Incorrect-Password-For-QA");
  await expect(page.locator("body")).not.toContainText(/unexpectedly successful login/i);
  await expect(page).not.toHaveURL(/orders|dashboard|seller|admin/i);
});

test("empty credentials are validated", async ({ page }) => {
  await fillLogin(page, "", "");
  await expect(page.locator("body")).toBeVisible();
  await expect(page).not.toHaveURL(/orders|dashboard|seller|admin/i);
});
