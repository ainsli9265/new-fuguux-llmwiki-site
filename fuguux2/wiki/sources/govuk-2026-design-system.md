---
type: source
title: "GOV.UK Design System"
tags: [design-system, forms, buttons, navigation, error-handling, notifications]
related: [form-design, action-buttons, notifications, site-header-and-footer, breadcrumb-navigation, accessibility]
created: 2026-06-30
updated: 2026-06-30
authors: [GOV.UK Design System team]
year: 2026
url: "https://design-system.service.gov.uk/"
venue: GOV.UK (Open Government Licence v3.0)
---

# GOV.UK Design System

The UK Government's design system: research-backed components and patterns for building accessible, consistent government services. Licensed under the Open Government Licence v3.0.

Raw HTML snapshots (in `raw/safe/`): `govuk-design-system.html`, `govuk-error-message.html`, `govuk-error-summary.html`, `govuk-header.html`, `govuk-footer.html`, `govuk-breadcrumbs.html`, `govuk-button.html`, `govuk-radios.html`, `govuk-checkboxes.html`, `govuk-text-input.html`, `govuk-notification-banner.html`, `govuk-question-pages.html`, `govuk-validation.html`.

## Key design guidance extracted

**Error messages + error summary** → [[form-design]], [[notifications]]: position inline after label/hint before field; use red border to connect message to field; never clear form fields; write specifically per failure mode; pair inline messages with a page-top error summary ("There is a problem") linking to each field.

**Header** → [[site-header-and-footer]]: consistent masthead with organization identity; service name and navigation belong in a separate service navigation component, not the header itself; use the header on every page.

**Footer** → [[site-header-and-footer]]: contains copyright, licensing, and support links (Privacy, Accessibility, Cookies, Terms); secondary navigation only for sites where users should navigate elsewhere; avoid secondary nav in linear/transactional services.

**Buttons** → [[action-buttons]]: four types (default/primary, start, secondary, warning); one primary button per page; warning buttons pair with confirmation step; avoid disabled buttons — show errors instead; left-align in forms; sentence case labels.

**Radios + checkboxes** → [[form-design]]: order alphabetically (not by perceived frequency); never pre-select options; "none of the above" goes last with a divider; conditional reveals must stay simple; add "Select all that apply" hint for checkboxes.

**Text input** → [[form-design]]: fixed-width inputs signal expected answer length; labels above, in sentence case; avoid placeholder text (vanishes on type, fails contrast requirements); hint text is a single short sentence with no full stop.

**Notification banner** → [[notifications]]: two modes — neutral (blue, informational) and success (green, confirms action); position before page h1; use sparingly due to banner blindness; never for validation errors (use error summary instead).

**Question pages** → [[form-design]]: one-thing-per-page as default; every question page needs a back link, heading, and "Continue" button (not "Next"); pre-populate repeated information.

**Validation** → [[form-design]]: validate on submit, not on input; retain all user-entered values when re-displaying on error; ignore formatting variations (spaces, punctuation) unless genuinely ambiguous; never use validation to check eligibility.

**Breadcrumbs** → [[breadcrumb-navigation]]: start with home, end with parent section (omit current page); not for flat-structure sites or linear journeys; mobile collapse to first and last items only.

## Excluded

- Nunjucks/HTML code examples and macros throughout — implementation, out of scope.
- GOV.UK One Login integration specifics — service-specific governance, out of scope.
- GDS governance process (who approves components, contribution model) — process, not design guidance.
- Select component — limited design guidance beyond "use radios instead when possible"; implementation-heavy.
- Textarea component — no design guidance beyond labels/hints already covered by text-input.
- Date input component — form-specific implementation pattern, below concept-page threshold.
- File upload component — specialist interaction, below concept-page threshold.
- All component-specific WCAG 2.2 compliance checklists — implementation audit detail, out of scope.
