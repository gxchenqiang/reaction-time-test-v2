# Implementation plan

The approved design was reviewed with no blocking issues. The user has requested implementation; proceed with that authorization.

1. Add all outcome and dismissal copy to the seven typed locale dictionaries (locale subagent).
2. Build a focused native result dialog using the existing comparison and sharing components; support nickname validation and scrollable mobile content.
3. Connect terminal states to ChallengeApp: show once per friend attempt, reset on retry/navigation, retain page controls after dismissal, reuse payload generation for both share actions.
4. Verify rules and sharing through existing unit tests, lint, type checking and export; exercise actual dialog states, keyboard behavior, locale/mobile layouts and sharing API fallbacks in the browser.
5. Review the diff with a subagent and resolve actionable findings before delivery.
