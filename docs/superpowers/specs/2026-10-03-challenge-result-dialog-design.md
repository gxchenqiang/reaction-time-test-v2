# Challenge result feedback and sharing

The user approved the proposed result dialog and requested implementation with all seven existing locales (en, zh, ja, ko, de, fr, vi).

## Behavior

- A newly completed friend challenge opens one result dialog for that run. It shows success, loss, or tie from the challenger’s perspective and both scores, using the existing comparator. Advanced mode compares accuracy first, then speed.
- Classic false starts and timeouts show an invalid-run dialog with the specific reason and retry. Advanced completion without any green hits shows an unscorable dialog with retry. Interrupted sessions remain distinct and offer retry. These cases cannot share incomplete results.
- Solo tests and viewing saved results do not open the friend-challenge dialog. Incoming result links retain the neutral comparison page.
- Success, loss, and tie all support sending the two-player result back and creating a fresh invitation using the challenger’s score. Retry preserves the original target.
- The dialog contains the optional nickname field and existing validation. Sharing requires a user click, uses native share where available, and always offers a copy/manual-link fallback via SharePanel. It remains open on share cancellation or error. No automatic notifications are added.
- Closing the dialog retains the comparison and sharing controls on the page. It must not reopen from nickname edits, share state changes, or rerenders. New attempts can open a new result dialog.

## UI and accessibility

Use a native modal dialog with a localized heading, explanatory text, both scores and actions. Its content scrolls on small screens, long names wrap, and close/Escape restore focus to a useful result-page control. Retry focuses the test surface. Ensure keyboard focus stays within the modal and the background cannot receive clicks.

## Implementation boundaries

Keep the engine, codec, scoring rules, and payload format intact. A focused ChallengeResultDialog component presents outcomes and receives callbacks/state from ChallengeApp. Reuse ResultComparison and SharePanel. Add typed outcome/action strings to all seven dictionaries. Existing page sharing stays available and errors clear when starting or changing context.

## Verification

Run challenge unit tests, lint, TypeScript and a production export. Browser tests cover win/loss/tie, accuracy-first advanced comparison, invalid/no-hit runs, retry/close/Escape/focus, no accidental reopen, both sharing payload types, cancellation/failure/manual copying, all locales and mobile layout. Native share is simulated at the browser API boundary; no messages are sent externally.
