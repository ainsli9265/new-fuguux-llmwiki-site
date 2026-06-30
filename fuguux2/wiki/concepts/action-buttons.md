---
type: concept
title: Action Buttons
tags: [affordance, visual-design, navigation, design-pattern]
related: [web-design-patterns, process-funnel, ebay, amazon, vanduyne-2006-web-design-patterns, fitts-law, affordance, form-design, loading-states, fuguux-2026-information-hierarchy-for-usability, govuk-2026-design-system]
sources: [vanDuyne_02_3PP_019-038.pdf, fuguux-2026-information-hierarchy-for-usability.pdf, "https://design-system.service.gov.uk/components/button/"]
created: 2026-06-23
updated: 2026-06-30
---

# Action Buttons

**Problem:** customers can't tell what is and isn't clickable on a page.

**Solution:** give an otherwise flat button a shaded, three-dimensional appearance. This works as a perceivable [[affordance]] because it borrows two sources of prior knowledge: familiarity with physical three-dimensional buttons (keyboards, remote controls), and the learned behavior, from graphical user interfaces generally, that raised-looking elements can be pressed with a mouse. Both [[ebay]] and [[amazon]] use this technique for key calls to action on their homepages (e.g., eBay's "Register Now," Amazon's "Find Gifts").

There are two implementations: **HTML buttons**, rendered by the browser with limited control over appearance, and **graphical buttons**, implemented as one or more images, which give full design control at the cost of slower downloads.

**Forces:** larger buttons are easier to see and click (per [[fitts-law]]) but consume more page space; an image-based button may warrant a redundant text link for the same destination; image-heavy buttons slow page load.

Action buttons help complete a [[process-funnel]] by giving each step of a multi-step task a clear, unambiguous call to action. This pattern is also the worked example used to introduce the six-part pattern format in [[web-design-patterns]].

**Label text** matters as much as visual appearance. Button labels should be **action-oriented verbs** or verb phrases describing what happens when the button is pressed — "Save Changes," "Delete Account," "Send Invite" — rather than nouns that describe a destination or concept ("Settings," "Account"). Verb labels make the consequence of clicking legible before clicking; noun labels require the user to infer an action from a category name.

**Signaling further choices**: when a button will open a further set of options rather than immediately executing a single action, signal this with a "+" icon (for add-type flows) or a **chevron "›"** (for menus, selectors, or branching choices). The icon distinguishes "this will do something now" from "this will show me more options," reducing surprise.

**Grouped buttons and selection state**: when multiple buttons represent mutually exclusive states — a view-mode toggle, a filter selector, a button group — the currently active choice must be visually distinct from inactive options (pressed, highlighted, or otherwise differentiated in a way that is perceivable without relying on color alone). A group where selected and deselected states are visually identical leaves users unable to tell what is currently active.

## Button hierarchy

Most interfaces need more than one button type. A consistent hierarchy prevents users from having to decide which button carries more weight:

**Primary (default) button**: the main call to action on a page. Use one per page or per form section. Makes the next step unambiguous. Labels should be action verbs describing what happens: "Save and continue," "Submit application," "Start now."

**Start button**: reserved for the primary call to action on a service's start page or first step. Often includes a directional icon (arrow or chevron) to signal progression rather than submission.

**Secondary button**: for alternative, lower-priority actions available alongside the primary action (e.g., "Save as draft" alongside "Submit"). Keep secondary buttons visually lighter than the primary button. Do not use so many secondary buttons that they compete with the primary action.

**Warning button**: for destructive actions with serious, hard-to-reverse consequences — deleting an account, clearing all data, permanent removal. Conventionally red. Critical rule: do not rely on the red color alone to communicate the destructive nature; pair the warning button with a confirmation step and explain the consequence in the button's context. Red-green color deficiency affects 8% of men; color-blind users read labels, not colors.

**Disabled buttons**: avoid. A button that users cannot click gives no information about why. The better pattern is to allow the click and show specific error messages explaining what is missing or wrong — see [[form-design]]. If research shows disabled buttons genuinely improve usability in a specific context, use them, but ensure the disabled state has sufficient contrast to be perceivable.

**Alignment**: align primary action buttons to the left edge of the form or content region. Left-aligned buttons are read before content to their right, and are within easier reach on touch screens for right-handed users.

**Double-click prevention**: submit buttons on slow or consequential actions (payments, form submissions) should prevent double-submission — either via server-side idempotency, client-side disabling after first click, or a loading state. See [[loading-states]].

## Further reading

Victor Ponamariov's *50 Tips to Improve User Interface* (self-published ebook, no stated license — not ingested into this wiki; see `raw/copyrighted/50_ui_tips.pdf`) adds one constraint: only one primary button should appear per form or view, since multiple competing primary buttons undermine the visual hierarchy that makes a call to action findable — see [[form-design]] for more.
