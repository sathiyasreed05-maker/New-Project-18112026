# Test scenarios and coverage matrix

All cases below are **Planned / Not Run**. This matrix is a coverage index; execution steps and data are in the [test specification](../test-cases/test-specification.md).

| Scenario | Area | Roles / interface | Primary coverage | Requirement |
|---|---|---|---|---|
| TS-01 | Authentication | All roles / UI | Valid and invalid login, empty input, logout/session | Design; API auth |
| TS-02 | Role access | Buyer, seller, operator / UI + API | Own-resource boundaries and forbidden role actions | BR-21; role table |
| TS-03 | Catalogue/search | Buyer / UI + API | Search by name/SKU, categories, pagination, zero stock exclusion | BR-02; API |
| TS-04 | Cart | Buyer / UI + API | Piece/case units, quantity bounds, update/delete, empty-cart checkout | BR-03; cart screen |
| TS-05 | Multi-seller checkout | Buyer / UI + API | Split orders, per-seller minimum, taxes, fee, confirmation, duplicate submit | BR-04/07/08/09/10; CR-07 |
| TS-06 | Stock integrity | Two buyers / UI | Insufficient stock and simultaneous last-stock checkout | BR-01 |
| TS-07 | Delivery slots | Buyer + operator / UI + API | Date range, capacity, same-day cut-off, disabled reason | BR-05/06/23/24; CR-07 |
| TS-08 | Cancellation | Buyer / UI + API | 5-minute boundary, shipped restriction, status/history/stock restoration | BR-11/13 |
| TS-09 | Seller order lifecycle | Seller + buyer / UI + API | Accept, ship, deliver, fail, cancel, valid actions only | BR-12/13; seller screen |
| TS-10 | Slot change/redelivery | Buyer / UI + API | Before ship, post-failure new slot, slot rules | BR-14/15 |
| TS-11 | Reorder | Buyer / UI + API | All previous lines added repeatedly | BR-16 |
| TS-12 | Refund/exchange | Buyer + seller / UI + API | Delivered-only, full/partial quantities, tax-inclusive refund, decisions | BR-17/18 |
| TS-13 | Invoice | Buyer / UI + API | Delivered-only issue, parties, lines, taxes, fee, total, CR-09 fields | BR-07/08/19; CR-09 |
| TS-14 | Monthly statement | Buyer / UI + API | Delivery month, approved refunds, cancelled exclusion | BR-20 |
| TS-15 | Inquiries | Buyer / UI + API | Create/list, optional order relation; no attachment expectation | FDD role table; CR-11 |
| TS-16 | Seller products | Seller / UI + API | Own products, prices/stock/active state, pagination | FDD role table; API |
| TS-17 | CSV import | Seller / UI + API | UTF-8, required columns, duplicate SKU scope, invalid row line reporting | IF-01 |
| TS-18 | Partner API | Seller integration / API | API-key access, seller scoping, 20/page with no duplicates, offer update | IF-03 |
| TS-19 | Seller registration/approval | Seller + operator / UI + API | Registration and operator approval gate, where exposed | API; operator role |
| TS-20 | Operator settings | Operator / UI + API | Read/update; immediate effect; role restrictions | BR-23/24; operator role |
| TS-21 | Logistics export | Operator / UI + API | Status inclusion, column order, UTF-8, latest export | IF-02 |
| TS-22 | Performance | Buyer/API | 30 concurrent checkout p95 <=3s; search p95 <=2s | NF-01/02 |
| TS-23 | Request-rate limit | Authorized API client | Up to 50 RPS; verify documented behavior above limit only with approval | NF-03 |

## Coverage status

No scenarios have been executed as part of this AI-assisted preparation. See [results report](results-report.md) for counts.
