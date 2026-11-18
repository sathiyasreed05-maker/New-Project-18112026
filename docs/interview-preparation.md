# Interview preparation

These are documentation-based answer drafts, not claims about tests executed or defects found. Replace statements about testing outcomes with the candidate's own verified observations before the interview.

1. **What is this application?**  
   WholeCart is a B2B marketplace where restaurants purchase food, drinks, and supplies from multiple sellers. A checkout can split into one seller sub-order per seller.

2. **What are the user roles?**  
   Buyers shop and manage orders/financial documents; sellers maintain their products and fulfill orders; operators manage marketplace settings, seller approvals, and logistics export.

3. **What are the major workflows?**  
   Buyer browse-to-checkout and order lifecycle; seller catalogue/order/refund processing; operator settings, approvals, and logistics export. Exceptions include cancel, slot change, redelivery, refund, and exchange.

4. **How did you approach testing?**  
   The planned approach starts with the specification and release-note precedence, maps requirements to cases, then covers roles, positive/negative/boundary paths, integrations, business calculations, and performance. I have not executed these cases in this preparation; explain the actual run and evidence only after doing it.

5. **How did you identify defects?**  
   A defect requires an applicable expected result, observed differing behavior, reproducible steps, and evidence. No defect has been verified in this preparation.

6. **What was the most critical defect you found?**  
   No verified defect is available to report yet. Do not invent one; answer this after candidate-led execution or explain that the run found none if that is what the evidence supports.

7. **How did you determine severity?**  
   Assess impact on business workflow, data integrity, security/permissions, and availability, then distinguish severity from priority. Use the assignment's classification consistently and explain evidence.

8. **How did you test role-based access?**  
   Planned cases compare visible menus and direct access to buyer-, seller-, and operator-scoped functions, and verify buyers' and sellers' own-resource restrictions. Actual results must be supplied by the candidate.

9. **How did you test negative scenarios?**  
   The specification includes invalid login, quantity bounds, per-seller minimum, unavailable slots, invalid status actions, over-refunding/exchanging, malformed CSV rows, and unauthorized access. State which were actually executed and their evidence.

10. **How did you validate requirements?**  
    The traceability matrix maps BR-01–24, IF-01–03, NF-01–03, and release changes to cases. CR-07 overrides the earlier minimum; CR-09 adds invoice supply fields; CR-11 is deferred.

11. **How would you perform regression testing?**  
    Re-run the impacted role-specific flow and high-risk end-to-end smoke suite after changes; include stock, order lifecycle, totals, invoice/statement, integrations, and permission checks, prioritizing the changed requirement and dependencies.

12. **What risks did you identify?**  
    Concurrent stock oversell/duplicate checkout, time/capacity boundaries, tax rounding, shared test-data impact, incomplete API response contracts, and load-test impact. Mitigations are in the test plan.

13. **What additional tests would you perform?**  
    After core coverage, add cross-browser/responsive, accessibility, localization/Unicode buyer name, resilience, data-retention, and broader performance tests where supported and in scope.

14. **If developers disagree with your defect, how would you handle it?**  
    Review the linked requirement and release-note precedence together, reproduce with controlled data, share sanitized evidence, clarify assumptions with the product owner, and update classification or close the issue transparently if expected behavior differs.

15. **How would you automate this application?**  
    Use API checks for deterministic business rules and ownership, plus UI smoke tests for critical user journeys. Keep test data isolated, credentials outside source, and scripts readable/reviewed.

16. **What would you automate first and why?**  
    Authentication/role boundaries, catalogue availability, cart/checkout totals and order splitting, seller status transitions, invoices, CSV/API integration, and regression of the highest-risk release changes. Keep concurrency/performance in a controlled, approved load tool.

## Candidate completion checklist

- Add three evidence-backed findings only if actually found; otherwise state that accurately.
- Record role, test data, steps, expected/actual, environment, severity, and evidence.
- Be ready to demonstrate a regression run without AI agents operating the application.
- Include one specific instance of an AI-generated assumption/error you noticed and corrected, as requested by the brief; do not fabricate one. This preparation itself cannot establish such a testing incident.
