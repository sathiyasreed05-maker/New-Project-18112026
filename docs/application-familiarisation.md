# Application familiarisation

## Overview

WholeCart is a B2B marketplace for restaurants buying food, beverages, and supplies from multiple sellers. Prices are in Indian rupees. A single buyer checkout may contain products from multiple sellers and is split into one sub-order per seller.

This overview is derived from the supplied brief, functional design, release notes, and API reference. Screens and application behavior have not been independently explored in this preparation.

## Roles

- **Buyer:** browse/search, cart, checkout, cancel, change a delivery slot, request redelivery, reorder, request refund or exchange, view invoices/statements, and create inquiries.
- **Seller:** manage product offers and stock through screens, CSV import, and partner API; process/cancel orders; mark delivery failure; and approve or reject refund/exchange requests.
- **Operator:** manage marketplace settings, approve sellers, and export logistics data.

The design identifies existing production behavior (buyer login, catalogue, cart, checkout/order history for WholeCart Direct products, operator settings) and marketplace-release additions (third-party sellers and workflows listed above).

## Core workflows from requirements

### Buyer purchase

`Login → browse/search in-stock catalogue → select piece/case units → cart → per-seller checkout summary → choose eligible slot → place order → seller sub-orders → track status`

### Fulfilment and exceptions

`Placed → accepted → shipped → delivered`

Alternative paths include cancellation before shipment; delivery failure followed by buyer redelivery request and a new eligible slot; buyer slot change before shipping; and delivered-order refund/exchange requests decided by the seller.

### Seller operations

`Login → manage own products/stock (screen, CSV, or partner API) → view own orders → accept/ship/deliver or mark failed/cancel → review refund/exchange requests`

### Operator operations

`Login → marketplace settings / seller approval / logistics export`

Operator setting updates take effect immediately. The store clock can be fixed for time-rule testing.

## Important business rules

- Stock is managed in pieces; a case maps to the product case size; concurrent checkouts must not oversell.
- Out-of-stock products are hidden from browse and search.
- Cart-line quantity is 1–99; cart dropdown shows 1–20.
- CR-07 supersedes BR-04: minimum is ₹2,000 net per seller per checkout.
- Delivery slots are 08:00–11:00, 11:00–14:00, 14:00–17:00, and 17:00–20:00; dates range from today through seven days ahead, subject to capacity.
- Same-day delivery uses only the last two slots and requires checkout before the configured cut-off (design default 10:00).
- Tax is calculated per rate on that rate's summed net value and rounded half-up once per rate.
- Below ₹3,000 net for a seller sub-order, a ₹100 delivery fee plus 18% tax applies.
- Buyer cancellation is available through five minutes after checkout if not shipped; cancellation remains in history and restores stock.
- Invoices are issued on delivery and must include CR-09 supply type `B2B` and place of supply (state name/code derived from buyer GSTIN).
- CR-11 inquiry attachments are deferred and are not an in-release expectation.

## Interfaces and performance

The API reference documents authenticated `/api` endpoints, seller partner endpoints using `X-Api-Key`, seller CSV import, operator logistics export, and `/api/metrics`. NF-01 requires 95th-percentile checkout completion within three seconds with 30 concurrent buyers; NF-02 requires search p95 within two seconds; NF-03 caps the test copy at 50 requests per second.
