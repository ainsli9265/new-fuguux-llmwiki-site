---
type: concept
title: Modal Dialogs
tags: [interaction-design, accessibility, design-pattern, navigation]
related: [form-design, accessibility, action-buttons, wai-aria, interface-design-principles, fuguux-2026-information-hierarchy-for-usability]
sources: [fuguux-2026-information-hierarchy-for-usability.pdf]
created: 2026-06-30
updated: 2026-06-30
---

# Modal Dialogs

A modal dialog interrupts the main flow to collect input or confirm a decision before the user can continue. Done poorly, modals are disorienting and inaccessible; done well, they are efficient for focused tasks that don't warrant a full page.

## Positioning and visibility

The dialog must appear fully on screen, not partially off-view or occluded by the browser chrome. On small screens this requires explicit position constraints — a dialog that appears partially off-screen cannot be interacted with by mouse or keyboard users, and cannot be discovered at all by screen reader users.

## Keyboard behavior

- **Escape must close the dialog** — this is a near-universal UI convention and a keyboard-nav requirement; breaking it surprises and traps users.
- **The close button must be visually inside the modal**, not floating outside the dialog boundary. A close button that appears outside the modal is easy to miss and breaks the spatial model of "what belongs to this dialog."
- **Keyboard focus must move to the dialog when it opens**, and must be trapped inside it while it is open — so Tab cycles within the modal rather than reaching the page content behind it. See [[wai-aria]] for the `aria-modal`, `role="dialog"`, and focus-management attributes that communicate this to assistive technology.
- **When the dialog closes** (via Escape, the close button, or a confirming action), keyboard focus must return to the element that triggered the modal, so the user's position in the page is preserved.

## Button labels

Buttons inside a modal should use **context-specific labels** that describe the action precisely — "Move to Trash," "Discard Changes," "Send Invite" — rather than generic labels like "OK," "Yes," or "No." Generic labels require users to reread the dialog body to understand what they are agreeing to; specific labels make the consequence of each choice self-evident. This matters most for irreversible or destructive actions, where a misread or misclick is costly. For destructive actions, spatial separation and color hierarchy (see [[action-buttons]]) reinforce the label.

## Forms in modals

Embedding a multi-field form inside a modal creates tradeoffs: no stable URL, potential scroll conflicts with content behind the modal, and reduced screen space on mobile — see [[form-design]] for the full treatment. For substantial forms, a dedicated page is more reliable.

## Attention cost

Modals interrupt whatever the user was doing; overusing them trains users to dismiss without reading. Reserve modals for situations that genuinely require the user's attention before continuing — a destructive action, a mandatory decision point, a quick focused input. For informational notices that do not require action, a non-interrupting notification (toast, banner) is less costly — see [[interface-design-principles]].
