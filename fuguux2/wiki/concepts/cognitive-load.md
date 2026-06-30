---
type: concept
title: Cognitive Load
tags: [cognitive-psychology, ux-principles, working-memory, decision-making]
related: [hicks-law, progressive-disclosure, gestalt-psychology, seven-stages-of-action, fitts-law, interface-design-principles]
created: 2026-06-30
updated: 2026-06-30
---

# Cognitive Load

Cognitive load is the total mental effort being used by working memory at any given moment. Because working memory has a hard capacity limit, interface decisions that add unnecessary load — surplus choices, unfamiliar patterns, visual clutter, inconsistent layouts — directly consume capacity that the user needs to perform the task the interface is supposed to support.

## Working memory limits

Working memory holds only a small number of items simultaneously. George Miller's 1956 paper put this at 7±2 "chunks." Nelson Cowan's 2001 research revised the number down to roughly 4±1 items when chunking strategies are not available — that is, when items cannot be compressed into meaningful groups by the observer. The practical implication for design is that an interface presenting more than four to seven independent items simultaneously — choices, labels, competing calls to action, navigation options — is contending with working memory rather than supporting it. Each additional item beyond the limit does not just slow users down; it causes the earlier items to be dropped entirely.

## Three types (Sweller's model)

John Sweller's cognitive load theory (1988) distinguishes three kinds:

**Intrinsic load** — the inherent complexity of the task itself, independent of how it is presented. Filing a tax return is intrinsically complex; toggling a setting is not. Interface design cannot eliminate intrinsic load, but it can avoid compounding it with unnecessary interface complexity.

**Extraneous load** — complexity introduced by the presentation or interface beyond what the task requires. A form that asks for information in a counterintuitive sequence, navigation labels that don't match user vocabulary, an error message that describes the failure without explaining recovery — all impose load that has nothing to do with the underlying task. Extraneous load is the primary target of good UX: minimize it.

**Germane load** — mental effort spent building understanding or mental models. Learning how a site's navigation works on the first visit is germane load: it is not task-relevant in the moment, but it enables faster subsequent use. Consistent patterns reduce germane load across visits: once a pattern is learned, applying it costs nothing. This is the underlying mechanism behind [[interface-design-principles]]'s consistency principle (principle 1) — consistency amortizes the germane load of learning over many uses — and recognition over recall (principle 3), which offloads working memory onto the visible interface.

## How it connects to other concepts in this wiki

Several concepts documented elsewhere are cognitive-load reduction strategies in specific contexts:

- **[[hicks-law]]** — decision time grows logarithmically with the number of choices presented simultaneously. Fewer simultaneous options means lower extraneous load at a decision point, even when the total option count doesn't change — because an organized set of options can be traversed with a binary-search-like process rather than a linear scan.
- **[[progressive-disclosure]]** — metering information so only what is needed for the current step is visible. Directly manages extraneous load by reducing the number of items competing for working memory at once; the total content remains available, just deferred until it is relevant.
- **[[gestalt-psychology]]** — perceptual grouping (proximity, similarity, closure) reduces the load of parsing a layout. Elements that are visually grouped can be held as a single chunk rather than as individual competing items, expanding the effective working-memory capacity for a given page.
- **[[seven-stages-of-action]]** — the gulf of execution and gulf of evaluation are cognitive-load failures. When an interface fails to communicate what it can do (gulf of execution), the user must hold uncertainty in working memory while figuring it out. When it fails to communicate what just happened (gulf of evaluation), the user cannot form the next intention without expending extra mental effort.
- **[[fitts-law]]** — smaller or more distant targets require greater motor precision, which adds a secondary attentional cost to the physical effort of aiming. Targets that demand close attention to hit split cognitive resources between the current task and the physical act of pointing.

## Design application

Reducing extraneous load does not mean making interfaces simpler at the cost of functionality — it means making the interface's complexity independent from the task's inherent complexity. A feature-rich tool with consistent organization and learnable patterns can have lower extraneous load than a sparse interface with opaque labels and unpredictable behavior.

Practical reductions:
- No more than five to seven choices visible at a navigation decision point — beyond this, [[hicks-law]]'s logarithmic benefit degrades unless the options are well-organized
- Error messages explain recovery, not only failure — an unrecovered error leaves uncertainty in working memory until the user resolves it
- Labels use the user's vocabulary, not the system's — vocabulary mismatch forces translation, which occupies working memory
- Consistent layout across pages — familiar structure is processed automatically, freeing capacity for content
- Visual grouping reflects logical grouping — see [[gestalt-psychology]]; a layout that groups by visual affinity rather than logical relationship imposes a translation step at every read
