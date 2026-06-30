---
type: concept
title: Notifications
tags: [feedback, ux-patterns, alerts, interface-design, user-preferences]
related: [interface-design-principles, modal-dialogs, loading-states, auto-save, seven-stages-of-action, form-design, govuk-2026-design-system]
sources: ["https://design-system.service.gov.uk/components/notification-banner/", "https://design-system.service.gov.uk/components/error-message/", "https://design-system.service.gov.uk/components/error-summary/"]
created: 2026-06-30
updated: 2026-06-30
---

# Notifications

Notifications communicate system events to users outside the normal flow of interaction — status changes, confirmations, warnings, and prompts that need attention without necessarily interrupting ongoing work. The core design variables are: how urgent is the information? Does it require a response before work can continue? And how long should it persist?

## Patterns by urgency

Three patterns cover most cases, distinguished by urgency and whether a response is required:

**Toasts / snackbars** — transient, low-priority messages that appear briefly at the edge of the screen and auto-dismiss after a short timeout (typically 3–5 seconds). Used for confirmations and non-critical status updates: "Item added to cart," "Settings saved," "Message sent." Because they disappear automatically, they must not require a user response, and must not carry information the user will need again — if a toast is missed, no harm results. They should still be manually dismissible. Position is conventionally bottom-left or bottom-center on desktop; consistency matters more than the specific edge chosen.

**Banners / inline alerts** — persistent messages that remain visible until the user explicitly dismisses them or until the triggering condition resolves. Used for warnings or states that require action before the user can proceed safely: "Your session expires in 5 minutes," "Payment method declined," "Storage limit reached." Because banners persist, they suit information it would be harmful to miss. They should include a clear action or dismiss affordance and should not block content unnecessarily.

**Modal dialogs** — see [[modal-dialogs]]. Used only when a response is required before work can continue: destructive confirmations, authentication prompts, critical errors that block the current flow. The highest-friction pattern; reserve it for cases where a non-response is itself unacceptable.

The status indicator cycle in [[auto-save]] ("Saving…" → "All changes saved" → "Save failed — Retry") is a toast/banner pattern applied to a specific domain: routine progress is a quiet transient toast; failure is a persistent, actionable banner.

## Alert fatigue

When too many notifications fire — or when non-urgent notifications are presented at the same visual weight as urgent ones — users begin dismissing without reading. This degrades the signal value of all notifications, including urgent ones, because the brain learns that dismissing is the right response. The corrective is consistent severity routing: low-priority events get toasts, warnings get banners, blocked states get modals. Using a modal for a routine confirmation, or a banner for a passing status message, trains the wrong dismiss reflex.

See [[interface-design-principles]] (principle 2) for the underlying framing: notifications are system feedback, and the same principle that requires feedback to be informative also implies it must be selective. Feedback that fires constantly becomes noise; [[seven-stages-of-action]]'s gulf of evaluation opens whenever notifications are so frequent or poorly timed that users can no longer tell meaningful signal from background chatter.

## User control over notifications

Manageable notifications give users control over which events trigger notifications and through which channels. Patterns:

- **Opt-out defaults**: notifications enabled by default, with a settings panel to disable categories. Appropriate when the default value is high for most users (order tracking, security alerts).
- **Opt-in defaults**: notifications disabled until the user enables them. Appropriate for high-frequency or high-interruption channels (email, push), where unsolicited notifications consistently produce negative reactions.
- **Digest mode**: daily or weekly summaries rather than real-time per-event messages. Reduces interruption for categories where recency matters less than coverage.
- **Per-channel control**: the same event routed to multiple channels (in-app + email + push) compounds interruption for the same information. Giving users independent control per channel avoids both over-notification and missed notifications.

Notification settings buried deep in an account panel are rarely discovered. A contextual preference prompt — surfaced inline immediately after the first notification fires — is more likely to be acted on than a buried settings page. The prompt itself should not be a modal dialog; an inline banner or tooltip is sufficient for a non-urgent preference question.

## Notification banners (page-level alerts)

Notification banners are page-level persistent alerts positioned above the page heading, used for service-wide information that is unrelated to the user's current task — processing delays, deadline reminders, overdue actions. They differ from inline banners (which relate to the current page's task) and error messages (which relate to a specific form field).

Two modes reflect urgency and role:
- **Neutral** (typically blue): informational, no focus shift on load. Used for service problems and background context the user should be aware of.
- **Success** (typically green): confirms the expected outcome of a user action from a previous step. Moves keyboard focus to the banner on load so the confirmation is announced. Must be removed when the user navigates to a new page — a success banner left on subsequent pages becomes confusing context.

Key limitation: there is strong evidence (NNGroup research on banner blindness) that users often miss page-level banners, and the more frequently they appear the less they are read. Use sparingly; never substitute a notification banner for content the user actively needs to complete their current task — for that, use inline content, inset text, or warning text within the page body.

Do not use notification banners simultaneously with an error summary on the same page.

## Error notifications in forms

Error notification in forms follows a dual-track pattern (see [[form-design]] for placement detail):

1. **Error summary** at the top of the page — a single block headed "There is a problem" listing every validation error as a link to the affected field. Always displayed on any page that has errors, even when there is only one error, because users may have already scrolled past the problem field.
2. **Inline error messages** adjacent to each field — positioned between the label and the input so message and field are read as a pair.

Both tracks must use identical wording for the same error. The page `<title>` should be prefixed with "Error:" so screen readers announce the error state before the user reads anything else.

## Push notifications (browser and mobile)

Browser and native push notifications operate outside the site context and require explicit permission — a browser-level dialog the user cannot undo without going into browser settings. Requesting this permission immediately on page load (before the user has any context for why it would be useful) consistently produces high rejection rates, training users to deny reflexively. A better trigger: surface the permission request from a user action that makes the value obvious — completing a purchase that generates a tracking event, subscribing to content, or enabling a feature that depends on push. The request should follow, not precede, the moment of perceived value.
