---
type: concept
title: Navigation Menus
tags: [navigation, information-architecture, design-pattern, wayfinding]
related: [multiple-ways-to-navigate, hicks-law, content-organization-schemes, affordance, interface-design-principles, cognitive-load, breadcrumb-navigation, site-header-and-footer, wai-2026-tutorials]
sources: ["https://www.w3.org/WAI/tutorials/menus/"]
created: 2026-06-30
updated: 2026-06-30
---

# Navigation Menus

A navigation menu is a collection of links that represents the site's structure and lets users move between sections. Menu design governs how structure is communicated, how the user's current position is signaled, and how multi-level hierarchies are exposed without overwhelming.

## Structure reflects site structure

A well-designed menu directly mirrors the site's information architecture — categories at the top level, subcategories nested beneath them. This correspondence matters: when the visual grouping of menu items doesn't match the underlying IA, users develop an inaccurate mental model of where things live and predict wrong locations. See [[content-organization-schemes]] for how to decide what top-level categories to expose.

The number of top-level items is a [[hicks-law]] decision: more items slow navigation decisions logarithmically, but consolidating too aggressively hides destinations users need. The practical resolution is grouping by [[gestalt-psychology|Gestalt proximity]] and keeping category labels mutually exclusive enough that a user can predict which heading their destination falls under.

## Signaling current page

Every menu item representing the current page must be visually distinct — typically via a different background, font weight, or border — from inactive items. This serves two populations: users with attention or memory limitations who need an ambient reminder of where they are, and anyone who entered mid-hierarchy (from a search engine or direct link) and is orienting themselves. The current-page indicator should not rely on color alone; pair it with position, weight, or a non-color style change so it's perceivable without color vision.

## Flyout and dropdown menus

Flyout (hover-triggered) and dropdown (click-triggered) menus expose subcategories without requiring a full page transition. Design constraints:

- **Dwell time**: flyout menus that close immediately when the cursor leaves the trigger create failures for users with fine motor difficulties and anyone whose cursor path briefly crosses outside the menu boundary. Allow a short dwell delay (100–200 ms) before closing.
- **Touch and keyboard access**: hover-only flyouts are inaccessible to keyboard and touch users. Flyouts must also respond to keyboard focus (Tab to open, arrow keys to navigate, Escape to close) and touch tap.
- **Depth limit**: each additional level of nesting adds a [[cognitive-load|cognitive-load]] cost. Two levels (top-level + one flyout) are common; three levels are rarely justified.

## Visual conventions

Use recognizable, commonly understood patterns rather than novel menu designs. Conventions users already know:
- Horizontal navigation bar across the top (primary site navigation)
- Vertical sidebar (section navigation, filters)
- Hamburger icon `≡` (collapsed mobile menu) — though this icon alone has lower discoverability than a labeled button ("Menu")

Convey information through multiple channels beyond color: active states via position or typography weight, inactive states via visual lightness. Sufficient contrast between menu text and background is a baseline; sufficient contrast between *active* and *inactive* states is equally important and often overlooked.

## Mobile menus

On small screens, horizontal navigation bars typically collapse into a hidden menu triggered by an icon or button. The collapsed state must be clearly labeled (icon + "Menu" is more discoverable than icon alone). When the mobile menu is open, focus should enter and be managed within it, and closing the menu should return focus to the trigger.

## Relationship to other patterns

[[site-header-and-footer]] establishes the structural region where primary navigation lives. [[breadcrumb-navigation]] and [[multiple-ways-to-navigate]] are the complementary orientation and recovery tools for users who navigate deeply and need to retrace steps.
