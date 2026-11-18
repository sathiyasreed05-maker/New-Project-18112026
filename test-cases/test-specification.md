# WholeCart test specification

**Status:** AI-assisted draft for review, not candidate-authored test design. Every case is Not Run; do not treat expected results as observed behavior. The assignment says test design must be your own, so independently review, revise, and be prepared to explain or replace these cases before submission.

## Common setup and data

- Use the assignment's authorized buyer, seller, and operator accounts; credentials must be entered only by the candidate and must not be stored in this repository.
- Discover product IDs, stock, categories, tax rates, buyer GSTIN/address, seller GSTIN, and settings through the permitted screens. Record the actual chosen data in the execution log.
- For monetary cases, use products that allow clear totals at both 5% and 18% tax. Use a multi-seller basket for seller split/minimum checks.
- Use a controlled store clock for time boundaries if available. Restore original settings after testing.
- Unless a case states otherwise, expected outcomes come from the design document, with CR-07 and CR-09 taking precedence where applicable.

| ID | Test and steps | Data / expected result |
|---|---|---|
| TC-01 | Log in with one valid buyer, seller, and operator account; log out and repeat. | Each valid account reaches its permitted area; logout ends the authenticated session. Exact screen behavior to record. |
| TC-02 | Attempt login with an unknown username, incorrect password, and empty fields. | Authentication is denied; no protected content is exposed; record error and validation behavior. |
| TC-03 | As each role, inspect menus and attempt a known restricted resource through normal navigation and a direct authorized application URL/API route. | Buyer sees only own orders/invoices/statements; seller sees only own orders/products; operator-only settings/approval/export are not available to buyer or seller. Record status and response; do not probe unrelated infrastructure. |
| TC-04 | As buyer, search a known product by full/partial name and SKU; browse its category; move across result pages. | Correct matches/category and stable pagination; products with zero stock do not appear in browse or search. |
| TC-05 | Add a product in piece and case units; change and remove cart lines; inspect empty cart. | Line and net totals update; quantity is constrained to 1–99 per line; cart screen dropdown is 1–20; checkout action is hidden for an empty cart. |
| TC-06 | Attempt quantity 0, negative, 100, and a very large value through normal UI controls/API contract test under candidate control. | Invalid quantities are rejected and do not produce an order or corrupt cart. Record actual validation; no undocumented error text assumed. |
| TC-07 | Build a one-seller basket whose net is ₹1,999.99, then ₹2,000.00; attempt checkout. | CR-07 minimum is ₹2,000 net per seller: below minimum cannot be placed; exactly minimum satisfies minimum-order rule, subject to valid stock/slot. |
| TC-08 | Build a multi-seller basket; make one seller sub-order under ₹2,000 while total basket exceeds ₹2,000. Then make both sellers meet the minimum. | Minimum is applied per seller; basket is split into one sub-order per seller. The first checkout is blocked; qualifying checkout creates expected sub-orders and order-number format. |
| TC-09 | Calculate checkout for several lines at both tax rates, including a sub-order below ₹3,000; compare displayed totals. | Tax is grouped by rate, rounded half-up once per rate; fee is ₹100 plus 18% tax for each seller order below ₹3,000; checkout displays per-seller and grand totals. |
| TC-10 | Submit a valid checkout once, then attempt a rapid duplicate submit (e.g. double-click) using controlled test data. | One checkout/order set only; confirmation uses the documented success message and seller sub-order numbers. |
| TC-11 | From two buyer accounts, coordinate checkout of the last available pieces of a product. | Combined accepted quantity never exceeds available stock; no oversell, including simultaneous checkouts. |
| TC-12 | Query/select delivery dates before today, today, today + 7, and today + 8; inspect all slot choices and capacity. | Only today through today + 7 are bookable; available slots are 08–11, 11–14, 14–17, 17–20; full slots disabled with reason; capacity follows current operator setting (default 5). |
| TC-13 | With store time controlled, inspect same-day slots before, at, and after configured cut-off; select each slot. | Same-day only 14–17 and 17–20, and only before cut-off (design default 10:00). Record inclusive/exclusive boundary from observed behavior and confirm setting. |
| TC-14 | As buyer, cancel a placed order immediately, at 5:00, and after 5:00; repeat with an accepted and a shipped order. | Cancellation allowed through 5 minutes 0 seconds only while not shipped; cancelled order remains in history, status is Cancelled, stock is returned. |
| TC-15 | As seller, execute each valid order action for the status; also try invalid/out-of-order actions; have buyer verify status. | Only status-valid actions are available/accepted. Seller cancellation updates buyer status immediately. Follow documented lifecycle. |
| TC-16 | As buyer, change slot on placed/accepted order, then attempt after shipping; request redelivery after delivery failure with valid and invalid slots. | Slot can be changed until shipped. Redelivery requires a failed delivery and a new slot satisfying date/capacity/cut-off rules. |
| TC-17 | Reorder a past order twice and inspect cart. | Every line is added on each invocation; repeated reorder is allowed. Handle unavailable stock according to observed documented behavior and record any ambiguity. |
| TC-18 | Request full refund and exchange on a delivered order; attempt on a non-delivered order. | Requests apply only to delivered orders; full refund covers all lines; exchange returns no money and represents replacement goods. |
| TC-19 | Request partial refund/exchange for selected lines and quantities, then exceed ordered quantity across repeated requests. | Partial requests cover selected lines/quantities; cumulative requested/approved quantity cannot exceed ordered quantity. Refund amount includes tax for refunded quantities. |
| TC-20 | As seller, approve and reject refund/exchange requests; as buyer, inspect result. | Seller can decide each request; buyer-visible state and refund amount match decision and applicable tax. |
| TC-21 | Deliver an order and inspect its invoice; compare line/tax/fee totals to checkout and order. | Invoice includes seller name/GSTIN, buyer name/GSTIN/address, invoice date/order number, lines, tax by rate, delivery-fee line when applicable, total equal to order total, `Supply type: B2B`, and place of supply (state name and code derived from buyer GSTIN). |
| TC-22 | Inspect invoice availability before delivery and after delivery. | Invoice is issued when the order is delivered; pre-delivery availability is not asserted beyond that rule. |
| TC-23 | Inspect monthly statements for a month with delivered, refunded, and cancelled orders. | Includes orders delivered in that month minus approved refunds; cancelled orders are excluded. |
| TC-24 | Create and list an inquiry, with and without a valid order association; attempt missing required subject/body. | Inquiry supports subject/body and optional order ID; required values are validated. Do not expect attachments in this release (CR-11 deferred). |
| TC-25 | As each seller, list, update, and deactivate own product using supported fields; attempt to access another seller's product. | Seller's product list is scoped to seller; supported price/stock/active changes persist; unauthorized cross-seller access is denied. |
| TC-26 | Import the provided sample CSV; then import rows with malformed fields, duplicate same-seller SKU, and a SKU used by a different seller. | Valid UTF-8 rows create/update by seller-local SKU; every invalid row reports line number and reason; no row is silently dropped; SKU uniqueness is per seller. |
| TC-27 | As operator, inspect pending seller approvals and approve one; verify result as seller and in buyer catalogue where appropriate. | Seller approval is restricted to operator; approval state takes effect as designed. Exact catalogue gating should be verified and recorded. |
| TC-28 | As operator, change a non-destructive setting (record baseline), verify effect through the corresponding buyer/seller flow, then restore it. | Settings are restricted to operator and changes take effect immediately (BR-23); clock controls use BR-24. |
| TC-29 | Generate logistics export with accepted, shipped, redelivery-requested, and unrelated-status orders; inspect downloaded/latest CSV. | UTF-8 CSV contains only specified statuses, exact column order `order_number,buyer_name,delivery_address,delivery_date,slot_start,slot_end,pieces`; hourly/export behavior documented by IF-02. |
| TC-30 | Using seller partner API credentials supplied for the test account, read all pages of orders and products, then update an offer in controlled data. | `X-Api-Key` required; orders paginate 20/page and every seller order appears exactly once; offer price/stock update affects the intended seller product only. |
| TC-31 | Measure search response times under a representative approved profile. | p95 search latency <=2 seconds (NF-02); record sample size, client, network, and response-time distribution. |
| TC-32 | With 30 buyers checking out simultaneously under a prepared valid workload, measure order submission latency. | p95 completion <=3 seconds (NF-01); verify no duplicate orders or stock oversell. Keep aggregate traffic at or below 50 requests/second, coordinate the load profile, and obtain approval before execution. |
| TC-33 | Observe `/api/metrics` and test the approved request-rate profile, staying at or below 50 requests/second. | Capture monitoring data and rate-limit behavior only under explicit test approval. Do not exceed the application copy's 50-RPS limit. |

## Execution record template

For each run, record: case ID, date/time and timezone, environment/browser, role/account label (not password), test data/product/order references, store-clock/settings baseline, result, actual behavior, evidence filename, defect ID if verified, and tester.

Result values: **Passed**, **Failed**, **Blocked**, **Not Run**. Keep the current status Not Run until the candidate executes the case.
