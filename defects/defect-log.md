# Defect log

No defects have been verified because the application was not tested during this preparation. This is not a claim that the application is defect-free.

| ID | Title | Module | Role | Severity | Priority | Reproducibility | Evidence | Status |
|---|---|---|---|---|---|---|---|---|
| — | No verified findings yet | — | — | — | — | — | — | Not assessed |

Create a detailed report only after confirming expected behavior from a requirement, observing different actual behavior, reproducing it, and capturing sanitized evidence. Do not use this empty log to imply a passed test run.

## Verified defect entry format

Copy this row for each verified defect:

| DEF-### | `<professional defect title>` | `<module>` | `<buyer/seller/operator>` | `<Critical/High/Medium/Low>` | `<High/Medium/Low>` | `<Always/Sometimes/Once>` | `evidence/DEF-###/` | `<Open/Fixed/Retest/Closed>` |

## Defect rules

- Record every defect with an applicable requirement or release change.
- Include the environment, account role, preconditions, test data, exact steps, expected result, actual result, evidence, and severity reason.
- Reproduce at least twice when practical.
- Exclude passwords, bearer tokens, cookies, personal data, and sensitive information from screenshots or text.
- Do not add duplicate, theoretical, undocumented, or AI-suspected defects.
- When behavior is not verifiable, mark it **Unable to Verify** rather than Failed.

## Detailed report template

Use [DEF-TEMPLATE.md](detailed-defects/DEF-TEMPLATE.md) for every defect.
