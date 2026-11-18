const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 0,
  workers: 1,
  reporter: [["list"], ["html", { open: "never", outputFolder: "test-results/html" }]],
  use: {
    baseURL: "http://13.200.185.1/c/sathiya-555f4a",
    browserName: "chromium",
    headless: false,
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  },
  outputDir: "./test-results/artifacts"
});
