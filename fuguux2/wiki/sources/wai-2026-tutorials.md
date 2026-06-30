---
type: source
title: "WAI Web Accessibility Tutorials (W3C)"
tags: [accessibility, forms, navigation, page-structure, images, carousels]
related: [accessibility, form-design, navigation-menus, wai, wcag, wai-aria]
created: 2026-06-30
updated: 2026-06-30
authors: [W3C Web Accessibility Initiative]
year: 2024
url: "https://www.w3.org/WAI/tutorials/"
venue: W3C WAI (CC BY 4.0)
---

# WAI Web Accessibility Tutorials (W3C)

The W3C Web Accessibility Initiative's tutorial series: practical design and development guidance for building accessible websites. Six tutorial areas: Images, Tables, Forms, Menus, Page Structure, and Carousels. Licensed CC BY 4.0.

Raw HTML snapshots: `raw/safe/wai-tutorial-index.html`, `wai-tutorial-images.html`, `wai-tutorial-forms.html`, `wai-tutorial-menus.html`, `wai-tutorial-page-structure.html`, `wai-tutorial-carousels.html`.

## Key design guidance extracted

**Images** → [[accessibility]]: five image categories (informative, decorative, functional, complex, image groups/maps) with distinct alt text requirements; complex images (graphs, diagrams, charts) must have complete text equivalents conveying all data.

**Forms** → [[form-design]]: group related controls structurally; provide per-control instructions; divide long forms into logical steps with progress communication; validate on input submission, not mid-type; notify success alongside errors.

**Menus** → [[navigation-menus]]: menu structure should reflect site structure; convey current page clearly; flyout menus must not close immediately on mouse-leave; use recognizable, consistent visual patterns for menu states.

**Page Structure** → [[accessibility]]: heading hierarchy should logically nest; landmark regions (header, nav, main, footer) enable screen reader navigation; skip links bypass repeated navigation; properly structured content improves mobile reader mode and SEO indexing.

**Carousels** → [[interface-design-principles]]: carousels are disputed on usability grounds — content is hard to discover. If used: users must be able to pause movement; navigation must work via keyboard; item changes must be communicated to all users.

## Excluded

- Tables tutorial: accessible table markup (headers, scope attributes, captions) — implementation detail; no design principle beyond "use appropriate structure," which is already covered in [[accessibility]].
- All ARIA attribute syntax — implementation, out of scope per purpose.md.
- Code examples (HTML/CSS snippets) throughout all tutorials — implementation.
- Browser compatibility tables — implementation.
- WAI-ARIA authoring-practice specifics beyond design principle level — covered by [[wai-aria]].
