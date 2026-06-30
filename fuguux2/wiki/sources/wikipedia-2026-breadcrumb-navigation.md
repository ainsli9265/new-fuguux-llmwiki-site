---
type: source
title: "Breadcrumb navigation (Wikipedia)"
tags: [navigation, breadcrumbs, information-architecture, wayfinding]
related: [breadcrumb-navigation, multiple-ways-to-navigate, content-organization-schemes, interface-design-principles]
created: 2026-06-30
updated: 2026-06-30
authors: [Wikipedia contributors]
year: 2026
url: "https://en.wikipedia.org/wiki/Breadcrumb_navigation"
venue: Wikipedia (CC BY-SA 4.0)
---

# Breadcrumb navigation (Wikipedia)

Wikipedia's article on breadcrumb navigation: a graphical control element showing users their location within a site or application hierarchy, named after the trail of breadcrumbs in the Hansel and Gretel fairy tale.

## Key points

- Three types: **location** (static, shows current position in the site hierarchy — most common on the web), **attribute** (categorizes the current page by its tags or metadata — suited to e-commerce and content libraries), **path** (shows the sequence of pages actually visited — rare, equivalent to browser history).
- Standard placement: a horizontal strip positioned below the site masthead/header and above the main content, so it's visible without scrolling but doesn't compete with primary navigation.
- Standard visual convention: levels separated by `>`, `›`, `/`, or graphical icons; each level except the current page is a clickable link.
- Limitation: location breadcrumbs work poorly for content that belongs to multiple categories simultaneously — in those cases, a tag system may complement or replace the breadcrumb, which can only show one path through the hierarchy.
- Alternative name in French/Spanish: *fil d'Ariane* (Ariadne's thread), referencing the mythological thread that guided Theseus back through the labyrinth — same concept, LIFO rather than FIFO metaphor.
- Research-backed usability: external links reference usability studies (Rogers & Chaparro 2003; Hull 2004) confirming breadcrumbs aid orientation, particularly when users arrive via search engines rather than navigating from the homepage.

## Images

- `breadcrumb-nav-example.png` — KDE Dolphin file manager showing location-based breadcrumb navigation with expandable dropdown arrows at each node; illustrates the pattern's core interaction model even in a desktop rather than web context

## Excluded

- Software file manager implementations (Windows Explorer, macOS Finder, GNOME, etc.) — desktop OS context, out of scope
- Alternative terms "cookie crumb" and "navigation path" — terminology trivia, not design-relevant
- Specific CSS/HTML implementation — out of scope per purpose.md
