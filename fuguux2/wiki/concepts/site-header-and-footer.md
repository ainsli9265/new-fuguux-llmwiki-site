---
type: concept
title: Site Header and Footer
tags: [navigation, content-design, branding, wayfinding, design-pattern]
related: [page-template, navigation-menus, multiple-ways-to-navigate, trust-and-credibility, breadcrumb-navigation, accessibility, govuk-2026-design-system]
sources: ["https://design-system.service.gov.uk/components/header/", "https://design-system.service.gov.uk/components/footer/"]
created: 2026-06-30
updated: 2026-06-30
---

# Site Header and Footer

The header and footer are the persistent structural regions that bracket every page's content. They anchor user orientation — the header establishes where the user is and how to navigate; the footer provides secondary utility and institutional context. Together they are among the strongest consistency signals a site can offer: users rely on finding them in the same position with the same content on every page.

## Header

The site header sits at the top of every page and contains:

**Organization identity**: logo and/or site name, functioning as a link to the homepage. This is the primary "I'm lost — take me to the start" escape hatch and should always be present.

**Primary navigation**: the top-level menu giving access to the site's main sections. In large or complex services, this is often separated from the brand identity into a distinct service navigation bar immediately below the masthead — keeping branding and navigation as distinct regions rather than intermixed.

**Global utility links**: search, account/sign-in, language toggle, and cart — items that are relevant across the entire site rather than tied to a section. Conventionally placed at the far right (or far top-right in a two-row header).

The header must appear identically on every page. Inconsistency — different headers on different sections, or a missing header on landing pages that came from an ad — breaks the user's trust that the site is a unified whole. See [[page-template]] for how a consistent header fits into a consistent page template.

## Footer

The footer sits at the bottom of every page and contains:

**Legal and policy links**: Privacy policy, Terms and conditions, Accessibility statement, Cookie policy. These are rarely navigated but must be discoverable — the footer is where users look for them. Consistent footer placement means the user knows where to look regardless of which page they arrived on.

**Copyright and licensing notice**: clarifies ownership and reuse rights. For public-sector sites, an explicit open license (e.g. Open Government Licence) may apply; for commercial sites, a standard copyright notice suffices.

**Secondary navigation** (optional): links to key sections, contact information, or department/team pages. Useful on large sites where the footer is a last-resort navigation fallback. For linear transactional flows (checkout, application forms), secondary navigation in the footer is a distraction — users mid-task should not be tempted to navigate away.

**Help and support links**: contact, help center, or feedback form. These serve users who failed their primary task and need a human path out.

## Design principles

**Consistent position**: header top, footer bottom, every page, no exceptions. Users who encounter a page that breaks this pattern experience a mild disorientation that erodes confidence in the site.

**Minimal footprint**: the header should not use excessive vertical space. A header that pushes significant content below the fold on mobile imposes a layout cost on every page. Similarly, an over-long footer with dozens of links dilutes the utility of the links that actually matter.

**Don't hide primary navigation in the footer**: footer navigation is supplementary. If users are finding primary navigation only in the footer, the primary navigation placement has failed.

**Accessible structure**: the header must be wrapped in a `<header>` landmark element and the footer in a `<footer>` landmark, so screen reader users can navigate directly to them. See [[accessibility]].
