# WholeCart marketplace test plan

## Objective and scope

Determine whether the marketplace release conforms to WC-FDD-1.0-434d and approved WC-RN-1.0-434d changes. Cover buyer, seller, and operator web workflows; role access; documented API/CSV integrations; core business calculations; and the published performance targets. Functional rules and release changes are mapped in the [traceability matrix](requirements-traceability.md).

Out of scope: attacks against hosting infrastructure, destructive testing outside the isolated application copy, legal/tax advice, and inquiry attachments (CR-11 is deferred).

## Approach

1. Candidate reviews current account, product, stock, and operator-setting state using the authorized application screens.
2. Execute the test specification with positive, negative, boundary, and role-based cases. Start with low-risk read-only checks, then use controlled data for state-changing flows.
3. Use the fixed store clock (BR-24) for deterministic cut-off and cancellation-window boundaries where supported. Record the clock, timezone, settings, test data, and environment for each run.
4. Validate order totals independently from line data: per-tax-rate half-up rounding, delivery fee and its tax, and seller-specific minimums.
5. Test integrations using documented interfaces only. Keep load testing within 50 requests/second and first agree on profile, duration, and data with the environment owner.
6. Re-run failed cases to establish reproducibility. Capture sanitized screenshots or request/response evidence only after observing the behavior directly.

## Environment and test accounts

Use the assignment copy at `http://13.200.185.1/c/sathiya-555f4a/` and the test accounts listed in its design document. The shared password is intentionally omitted from this repository. Do not put credentials, session tokens, or personal data in evidence or commits. Record browser/OS, run time, account role, store clock, and relevant settings during actual execution.

## Entry criteria

- Documentation and release precedence reviewed.
- Candidate has authorized access to the isolated assignment copy.
- Suitable seller products, buyer profiles, and test data identified.
- Test run can be performed without impacting other users; a cleanup/reset path is understood for any intended state changes.
- Current operator settings and store clock are recorded before changing them.

## Exit criteria

- All in-scope planned cases have an explicit result: Passed, Failed, Blocked, or Not Run.
- Each failure is reproduced where practical, mapped to a requirement, and supported with sanitized evidence.
- Open risks, blocked cases, and deviations are documented.
- No claim of release readiness is made while critical flows or required evidence remain untested.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Checkout races may oversell stock or duplicate orders | Coordinate two buyers and verify both orders and resulting stock; avoid uncontrolled concurrent traffic. |
| Time-based behavior is nondeterministic | Record store time/timezone and use BR-24 clock control when possible; restore prior settings. |
| Money rounding differs by line or tax bucket | Recalculate independently with decimal arithmetic and test multiple lines at each tax rate. |
| Test actions change shared state | Confirm isolation, use low-impact products, capture baseline, and use an approved reset path. |
| API description leaves response bodies under-specified | Treat FDD and observed authorized behavior as the oracle; record ambiguity rather than inventing response contracts. |
| Load testing can affect service availability | Obtain approval, use a measured ramp, and never exceed 50 RPS. |
| AI use conflicts with assignment rules | AI may assist documentation/code only; candidate must run/review all application tests and export/link AI sessions. |

## Deliverables and current status

Test design and traceability are drafted. Application execution, API/UI automation, load test, defect evidence, five-minute recording, and release recommendation are pending candidate work. See [results report](results-report.md) and [automation status](../automation/README.md).
