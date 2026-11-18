# Questions and assumptions log

The assignment says product-owner answers are unavailable during the exercise. Questions are recorded with a conservative working assumption; assumptions are not defects or confirmed product behavior.

| ID | Question for product owner | Working assumption / action |
|---|---|---|
| Q-01 | For the revised minimum order, does the ₹2,000 net minimum apply independently to every seller sub-order? | Yes. CR-07 explicitly replaces BR-04 with ₹2,000 net per seller. Verify boundary at ₹1,999.99 and ₹2,000.00 per seller. |
| Q-02 | Which buyer profile field is the source of state name and code for CR-09 invoices? | The signed change request says the place of supply is taken from the buyer's GSTIN. Verify actual invoice output against the buyer's registered GSTIN and do not infer missing GSTIN behavior. |
| Q-03 | What are the exact valid GSTIN formats and how should invalid or absent GSTIN be handled? | Not specified in the reviewed docs. Record observed validation and raise a clarification; do not assert a format requirement without an authoritative rule. |
| Q-04 | What are the configured same-day cut-off, per-slot capacity, and current operator settings? | Design defaults are 10:00 and 5 orders per slot, but settings are operator-controlled. Read current values before time/capacity tests and restore them after testing if changed. |
| Q-05 | Does "today" use the application store clock, a specific timezone, or the test runner's local timezone? | Use the operator's store clock where available (BR-24); establish and record the displayed timezone before testing time boundaries. |
| Q-06 | What test products, product IDs, stocks, tax rates, and sellers are initially seeded? | Discover these through authorized UI use during candidate execution. Use disposable, known-stock products and record IDs; do not guess IDs. |
| Q-07 | Is there a supported cleanup/reset procedure for test orders, requests, or settings? | None is documented in the reviewed pages. Avoid irreversible test data changes; ask the environment owner or use only the isolated assignment copy. |
| Q-08 | What user-facing outcomes are expected for empty search, invalid credentials, unauthorized routes, and API validation errors? | Verify against screen behavior and API responses; no exact copy or status code beyond the OpenAPI schemas is specified. |
| Q-09 | What does the release consider a valid invoice for input-tax-credit purposes beyond the CR-09 details? | CR-09 mandates supply type `B2B` and place of supply (state name and code from buyer GSTIN). Other legal/tax interpretation is out of scope unless confirmed. |
| Q-10 | Are attachments supported for inquiries in this release? | No. CR-11 is deferred. Do not treat absence of inquiry attachment functionality as a release defect. |
| Q-11 | What load profile, duration, and success thresholds should be used beyond NF-01, NF-02, and the 50-RPS ceiling? | Use the published percentile/latency thresholds; agree on ramp, duration, and data setup with the environment owner before running. Never exceed 50 requests per second. |
| Q-12 | Which release-note change governs behavior when the specification conflicts with it? | Approved release notes take precedence. Track CR-07, CR-09, and CR-11 explicitly. |

