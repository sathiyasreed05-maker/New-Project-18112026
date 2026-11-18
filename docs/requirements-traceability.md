# Requirements traceability matrix

Requirements are sourced from design WC-FDD-1.0-434d unless marked as a release change. Test cases are planned only; results remain Not Run.

| Requirement | Summary | Test cases | Status | Defect |
|---|---|---|---|---|
| BR-01 | Stock in pieces; case conversion; no oversell during concurrent orders | TC-05, TC-11 | Not Run | — |
| BR-02 | No-stock products excluded from catalogue/search | TC-04 | Not Run | — |
| BR-03 | Cart-line quantity 1–99 | TC-05, TC-06 | Not Run | — |
| BR-04 / CR-07 | Minimum ₹2,000 net per seller (CR-07 overrides ₹1,500) | TC-07, TC-08 | Not Run | — |
| BR-05 | Slots, date range, capacity; operator-controlled cap | TC-12 | Not Run | — |
| BR-06 | Same-day slot/cut-off restrictions | TC-13 | Not Run | — |
| BR-07 | Tax grouped by rate and rounded half-up once per rate | TC-09, TC-21 | Not Run | — |
| BR-08 | ₹100 delivery fee plus 18% tax below ₹3,000 per seller order | TC-09, TC-21 | Not Run | — |
| BR-09 | Checkout/sub-order number format | TC-08, TC-10 | Not Run | — |
| BR-10 | Duplicate checkout submission creates one order | TC-10 | Not Run | — |
| BR-11 | Buyer cancellation <=5 minutes, not shipped; history and stock restore | TC-14 | Not Run | — |
| BR-12 | Seller cancellation is immediately visible to buyer | TC-15 | Not Run | — |
| BR-13 | Order status lifecycle and cancellation states | TC-14, TC-15 | Not Run | — |
| BR-14 | Redelivery after failure, with valid new slot | TC-16 | Not Run | — |
| BR-15 | Slot change until shipment | TC-16 | Not Run | — |
| BR-16 | Reorder adds every past-order line each time | TC-17 | Not Run | — |
| BR-17 | Refund/exchange only for delivered; quantity caps | TC-18, TC-19 | Not Run | — |
| BR-18 | Refund tax treatment; exchange returns no money; seller decision | TC-19, TC-20 | Not Run | — |
| BR-19 / CR-09 | Invoice contents/totals plus mandatory B2B and buyer-GSTIN-derived place of supply | TC-21, TC-22 | Not Run | — |
| BR-20 | Monthly delivered orders less approved refunds; exclude cancelled | TC-23 | Not Run | — |
| BR-21 | Buyer own orders/invoices/statements; seller own orders | TC-03, TC-25 | Not Run | — |
| BR-22 | Catalogue excludes tax; checkout shows seller tax/fee | TC-04, TC-09 | Not Run | — |
| BR-23 | Operator setting changes apply immediately | TC-28 | Not Run | — |
| BR-24 | Operator can fix store clock | TC-13, TC-28 | Not Run | — |
| IF-01 | Seller CSV import schema, seller-local SKU, row-level errors | TC-26 | Not Run | — |
| IF-02 | Logistics export statuses, encoding, column order, hourly behavior | TC-29 | Not Run | — |
| IF-03 | Partner API key, pagination, exactly-once seller orders, offer update | TC-30 | Not Run | — |
| NF-01 | 30 concurrent checkouts; p95 <=3s | TC-32 | Not Run | — |
| NF-02 | Search p95 <=2s | TC-31 | Not Run | — |
| NF-03 | Up to 50 RPS; metrics available | TC-33 | Not Run | — |
| CR-11 | Inquiry attachments deferred to next release | TC-24 | Not applicable as a feature test | — |
| Role table / API | Buyer, seller, operator permissions and workflows | TC-01–03, TC-15, TC-18–20, TC-24–30 | Not Run | — |

