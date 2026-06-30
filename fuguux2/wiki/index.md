# Wiki Index

## Entities

- [[yahoo]] — search/portal site cited as a customer-centered-design success story (fast, simple, research-driven)
- [[amazon]] — e-commerce site cited for effective action buttons, stable patterns, virtual/A-B testing, and organized search results
- [[google]] — search site cited for word-of-mouth growth, stable patterns, virtual/A-B testing, and an accessible, minimalist search-results design
- [[ebay]] — e-commerce/auction site cited for effective action buttons and stable patterns
- [[ibm]] — cited for a customer-centered redesign's sales jump, and for search-term synonym handling
- [[wai]] — the W3C's Web Accessibility Initiative: produces WCAG and its sibling specifications (ATAG, UAAG, WAI-ARIA, XAG), founded 1997
- [[walmart]] — e-commerce site cited as the worked example for multiple-address shipping and gift-giving checkout options
- [[lands-end]] — clothing retailer cited as the worked example for preference-interview-driven personalized recommendations
- [[barnes-and-noble]] — bookseller cited in Pattern Groups F and G for wish list design (persistent saved-item list, easy cart transfer)

---

## Delight

*How a site looks, reads, navigates, and responds to input.*

### Visual Design

**Consistent visual design**
- [[page-template]] — reusable structural layout per page type (homepage, category, detail, results) that holds navigation and content regions in fixed, predictable positions across all pages of that class

**Organized grid layout**
- [[grid-layout]] — dividing a page into a consistent row/column structure so customers can predict where things live
- [[above-the-fold]] — keeping the most important content visible without scrolling, despite unknowable screen sizes

**Clear visual hierarchy**
- [[clear-first-reads]] — giving each page one dominant visual element, via color/size/font/position, that unifies it
- [[visual-hierarchy]] — ordering elements by importance using color, size, alignment, and character contrast; Von Restorff (isolation) effect; squint test for evaluation

**Harmonious color theory**
- [[color-theory]] — color mixing (RGB/CMYK), color-wheel schemes (complementary, analogous, triadic), Chevreul's three contrast types, and the cultural limits of color harmony and symbolism as universal design rules

**Effective multimedia content**
*(no concept page yet)*

**Logically grouped elements**
- [[gestalt-psychology]] — the perceptual-organization principles (proximity, similarity, closure, continuity, common fate, symmetry, figure-ground, law of past experience) behind grouping and focal-point design

**Readable text and typography**
- [[typography]] — legibility vs. readability distinction; typeface selection by content category; text composition (line length, leading, justification, tracking); display vs. text typography; typeface as tone signal

**Relevant images**
*(no concept page yet)*

### Content Design

**Consistent header and footer**
- [[site-header-and-footer]] — the persistent header (brand identity, primary nav, utility links) and footer (legal links, copyright, secondary nav) that bracket every page; design and consistency principles

**High quality text content**
*(no concept page yet)*

**Impactful key pages**
- [[homepage-portal]] — the homepage as highest-leverage page, balancing brand, content, personalization, navigation, and download speed
- [[up-front-value-proposition]] — a persuasive, unique one-sentence promise, arrived at via team brainstorming and customer testing

### Navigation

**Standard navigation placements**
- [[multiple-ways-to-navigate]] — supporting both intention- and impulse-driven navigation (search/browse/next-step vs. relate/promote), placed according to which motivator each tool serves
- [[search-action-module]] — a simple, consistently-placed search box + button on every page, with an optional category selector for large sites
- [[straightforward-search-forms]] — avoiding Boolean syntax and exact-match dead ends so search forms forgive imprecise queries
- [[organized-search-results]] — relevant summaries, grouping, log-tuned terms, and task support on a search-results page

**Consistent navigation links**
- [[consistent-sidebars-of-related-content]] — surfacing related links in a consistently-placed, length-capped sidebar
- [[browsable-content]] — organizing content for browsing rather than searching, information scent, and finding-your-way-back cues

**Consistent navigation branding**
- [[category-pages]] — keeping a site's distinct sections recognizably part of one whole, via consistent layout and a clear "arrival" signal

**Cohesive menu groupings**
- [[hicks-law]] — William Hick's 1952 law relating decision time to the number of choices (logarithmically, and only when the choices are organized), with implications for menu design and progressive disclosure
- [[content-organization-schemes]] — five combinable schemes (hierarchical, task-based, alphabetical, chronological, popularity-based) for grouping browsable content
- [[navigation-menus]] — menu structure reflecting site IA; signaling current page; flyout/dropdown design constraints; visual conventions; mobile menus

**Functional back button**
- [[breadcrumb-navigation]] — hierarchical trail showing location in site structure; three types (location, attribute, path); placement conventions; when breadcrumbs fail and tags are better; ARIA implementation

**Obvious links and buttons**
- [[affordance]] — what an environment/object makes possible and perceivable (Gibson vs. Norman), signifiers, and the perceivable/hidden/false split

### Human-Facing Inputs

- [[interface-design-principles]] — seven principles (consistency, feedback, recognition over recall, error recovery, control and freedom, accelerators, minimalism) for applying patterns across all input categories below
- [[cognitive-load]] — working memory capacity limits (Miller's 7±2, Cowan's 4±1); intrinsic vs. extraneous vs. germane load; the psychological mechanism underlying Hick's Law, progressive disclosure, and Gestalt grouping

**User-centric modal dialogue boxes**
- [[modal-dialogs]] — on-screen positioning, Escape/close/focus conventions, context-specific button labels, and when a full page is preferable

**Easy-to-use forms**
- [[form-design]] — visible labels, input-width affordance, option selectors, validation placement, progress indicators, and modal form tradeoffs

**Standard interface inputs**
- [[action-buttons]] — shading a button to signal it's clickable, leveraging real-world and learned-GUI knowledge
- [[fitts-law]] — Paul Fitts's 1954 law relating target-selection time to distance and target size, plus its design implications (infinite edges, magic corners, touchscreen sizing) and related laws (Hick's Law, the steering law)
- [[loading-states]] — empty states, skeleton screens vs. spinners, button loading state stability, and timing patterns for fast and slow operations

**Interpretable error messages**
- [[seven-stages-of-action]] — Norman's action-cycle model (four execution + three evaluation stages), the gulf of execution and gulf of evaluation, and the four design principles it distills to

**Friction for error prevention**
- [[progressive-disclosure]] — revealing only what is needed for the current step and deferring additional detail on demand, to reduce decision load and cognitive overhead

**Reversible input actions**
- [[auto-save]] — automatically persisting user input without an explicit save action, with save-state status indicators

---

## Approachability

*How a site serves the full range of users, contexts, and devices.*

### Accessible Content

**Internationalized content**
- [[internationalization]] — i18n/l10n: URL structure for multi-locale sites, hreflang, designing for text expansion/RTL, and localized date/currency/time formats

**Accessible design and development**
- [[accessibility]] — designing so perceptual/physical variation among customers (e.g., color vision deficiency) doesn't lock anyone out
- [[wcag]] — the W3C's Web Content Accessibility Guidelines: POUR principles, guideline/success-criteria/conformance structure, version history (1.0–3.0 draft), and jurisdiction-specific legal mandates
- [[wai-aria]] — WAI-ARIA: roles/states/properties metadata for custom dynamic widgets, the accessibility tree, and the Five Rules of ARIA (prefer native HTML first)

### Website Discoverability

**Search engine entry points**
- [[seo-basics]] — how crawlers discover pages; XML sitemaps; robots.txt and noindex; internal linking depth

**Human-readable URLs**
- [[seo-basics]] — descriptive hyphenated URL slugs; URL canonicalization; avoiding parameter-based URLs

**Well-designed favicons**
- [[favicon]] — brand recognition at small sizes; credibility and performance implications of missing favicons; formats (ICO/PNG/SVG), standard sizes, and mobile home-screen icons

**Search-engine optimized site**
- [[seo-basics]] — title tags; meta descriptions; heading hierarchy; content quality and freshness; white/black/grey hat distinction; mobile-first indexing; algorithm stability

**Credible website content**
- [[trust-and-credibility]] — earning and re-earning customer trust via legitimacy signals, data protection, reliability, and honest communication

### Standards and Compliance

**Basic web privacy**
*(out of scope — implementation-level; see purpose.md)*

**Basic security compliance**
*(out of scope — implementation-level; see purpose.md)*

### Responsive Design

**Responsive screen sizes and orientation**
- [[responsive-web-design]] — making pages render usably across all screen sizes via fluid grids, flexible images, and breakpoint-driven layout shifts
- [[mobile-first-design]] — sequencing strategy: design for the smallest, most constrained device first, then progressively enhance for larger screens
- [[expanding-and-fixed-screen-width]] — letting a layout stretch to fill the browser vs. holding it to a fixed, readable width

**Web browser compatibility**
*(out of scope — implementation-level)*

**Standard touchscreen gestures**
*(out of scope — implementation-level)*

**Touchscreen design**
*(no concept page yet)*

---

## Functionality

*How a site performs, personalizes, and maintains technical integrity.*

### Performance

**Fast loading time**
*(perceived performance and loading feedback covered under Standard interface inputs — see [[loading-states]])*

**Fast network performance**
*(out of scope — implementation-level; see purpose.md)*

### HTML
*(out of scope — implementation-level; see purpose.md)*

### CSS
*(out of scope — implementation-level; see purpose.md)*

### Javascript
*(out of scope — implementation-level; see purpose.md)*

### Standard Browser Functionality
*(out of scope — browser internals; see purpose.md)*

### User-Tailored Content

**Manageable individualized content**
- [[personalized-recommendations]] — recommendations from deliberate signals (ratings, preference interviews) rather than noisy inferred browsing data, with privacy disclosure
- [[featured-products]] — curated, editorialized product lists (Best-Sellers, Editors' Picks, On Sale) for browsing-minded customers
- [[recommendation-community]] — customer reviews: a write/preview funnel, use policies and filtering, and meta-ratings for surfacing trustworthy reviews

**Manageable notifications**
- [[notifications]] — toast/banner/modal severity taxonomy; alert fatigue; opt-in vs. opt-out defaults; per-channel user control; push notification permission timing

### Valid Content
*(out of scope — technical QA; see purpose.md)*

---

## E-commerce Patterns

*Domain-specific application of Delight and Functionality concepts to transactional sites.*

- [[process-funnel]] — a step-by-step page sequence (e.g., checkout) designed to minimize distraction and drop-off
- [[quick-flow-checkout]] — distraction-free checkout funnel: deal-breakers upfront, guest path, address/shipping/payment steps, pre-submission order summary, confirmation
- [[clean-product-details]] — product page template: above-fold decision elements (thumbnail, price, Add to Cart) and below-fold research elements (full description, reviews, related products)
- [[shopping-cart]] — holding area for items before checkout: persistent carts, item details, wish lists, cross-sell, localized terminology
- [[easy-returns]] — return policy visibility on every page and a self-service return funnel with trackable labels
- [[cross-selling-and-up-selling]] — recommending accessories or upgrades related to a customer's current choice, kept visually secondary and repeated at checkout
- [[multiple-destinations]] — shipping different items in one order to different addresses, with a destination-grouped order summary
- [[gift-giving]] — price-hiding packing slips, per-item gift notes and wrap pricing, and a gift-finder recommendation flow
- [[order-tracking-and-history]] — self-service order history, modification, and shipment tracking

---

## Research & Process

*Design methodology: how to learn about users and run a design project. Not represented in the output hierarchy above.*

- [[web-design-patterns]] — reusable problem/solution pairs for UI/UX, organized into an interconnected pattern language and grouped A–M by design-process stage
- [[customer-centered-design]] — building design decisions around customers' existing expectations and validating them through direct observation
- [[design-centering-styles]] — competing design philosophies (company-, technology-, designer-centered) contrasted against customer-centered design; nine common organizational objections rebutted
- [[know-your-customers]] — balancing people, tasks, technology, and social context before designing anything
- [[task-analysis]] — cataloging what customers currently do and want to do before designing a solution
- [[personas-and-scenarios]] — fictional customers and context-rich stories used to sanity-check design decisions early
- [[customer-research-methods]] — observation, interviews, surveys, and focus groups for learning about customers
- [[card-sorting]] — affinity diagramming and card sorting (open/closed/reverse/Modified-Delphi variants, semantic/syntactic analysis), turning raw research into a candidate information architecture
- [[iterative-design]] — the design-prototype-evaluate cycle, why late fixes are costly, and the right-feature/right-implementation framework
- [[rapid-prototyping]] — site maps, storyboards, schematics, and the low-to-high-fidelity prototyping spectrum
- [[usability-evaluation-methods]] — expert/heuristic review, informal think-aloud testing, and formal bottom-line usability studies
- [[ab-testing]] — comparing two live versions of a page differing by one variable to measure which produces better behavioral outcomes; quantitative complement to qualitative usability testing
- [[usability-engineering]] — the research-focused discipline behind usability testing: its 1988/1993 origins, the five usability attributes, ISO 9241's definition, and the slip/mistake error taxonomy
- [[web-site-development-process]] — the seven-phase project process (Discovery, Exploration, Refinement, Production, Implementation, Launch, Maintenance) that embeds iterative design and customer-centered design at every stage

---

## Sources

- [[vanduyne-2006-customer-centered-web-design]] — Ch. 1 of *The Design of Sites*: the business case for customer-centered design, contrasted with competing design styles and common myths
- [[vanduyne-2006-web-design-patterns]] — Ch. 2 of *The Design of Sites*: what Web design patterns are, their six-part format, and a worked customer-centered redesign example
- [[vanduyne-2006-knowing-your-customers]] — Ch. 3 of *The Design of Sites*: principles and techniques for understanding customers before designing for them
- [[vanduyne-2006-involving-customers]] — Ch. 4 of *The Design of Sites*: iterative design, rapid prototyping, and usability evaluation methods
- [[vanduyne-2006-developing-customer-centered-sites]] — Ch. 5 of *The Design of Sites*: the seven-phase process for designing, building, and maintaining a customer-centered Web site
- [[vanduyne-2006-creating-powerful-homepage]] — Pattern Group C of *The Design of Sites*: the HOMEPAGE PORTAL and UP-FRONT VALUE PROPOSITION patterns, in full
- [[vanduyne-2006-creating-navigation-framework]] — Pattern Group B of *The Design of Sites*: multiple ways to navigate, browsable content, five content-organization schemes, and category pages, in full; site accessibility folded into [[accessibility]]
- [[vanduyne-2006-glossary]] — the book's full glossary (A–X): a terminology cross-check against existing pages, with a few minor refinements folded in
- [[vanduyne-2006-designing-effective-page-layouts]] — Pattern Group I of *The Design of Sites*: grid layout, above the fold, clear first reads, expanding/fixed screen width, and sidebars, in full
- [[vanduyne-2006-making-site-search-fast-and-relevant]] — Pattern Group J of *The Design of Sites*: the search box, the search form, and the search-results page, in full
- [[vanduyne-2006-speeding-up-your-site]] — Pattern Group L of *The Design of Sites*: mostly out-of-scope implementation technique, except the perceived-speed/progress-indicator content folded into [[interface-design-principles]]
- [[uswds-2025-design-principles]] — the wiki's first non-book source: USWDS's five design principles, cited live (no local file) at designsystem.digital.gov
- [[digitalgov-2026-usability-testing]] — Digital.gov's plain-language guide to running a usability test: session structure, recruiting, and scenario writing
- [[digitalgov-2026-interviews]] — Digital.gov's human-centered design guide to running research interviews: team roles, the 5 Whys, and word-mirroring
- [[digitalgov-2026-content-introduction]] — Digital.gov's six practices for useful digital content, including annual content audits and authoritativeness signals
- [[wikipedia-2026-web-accessibility]] — Wikipedia's overview of Web accessibility: the POUR principles, WCAG's structure and history, assistive technologies, and global legislation
- [[wikipedia-2026-web-content-accessibility-guidelines]] — Wikipedia's dedicated WCAG article: version history through 2.2 and the 3.0 draft, exact success-criteria counts, and jurisdiction-specific legal mandates
- [[wikipedia-2026-web-accessibility-initiative]] — Wikipedia's article on WAI: founding history, the five specification families it produces, and the 71% visitor-abandonment statistic
- [[wikipedia-2026-wai-aria]] — Wikipedia's article on WAI-ARIA: the roles/states/properties model, the accessibility tree, the Five Rules of ARIA, and version history (2006–2023)
- [[wikipedia-2026-fittss-law]] — Wikipedia's article on Fitts's Law: the movement-time formula, design applications, and related laws
- [[wikipedia-2026-hicks-law]] — Wikipedia's article on Hick's Law: the decision-time formula, menu-design implications, and its relationship to Fitts's Law
- [[wikipedia-2026-stroop-effect]] — Wikipedia's article on the Stroop effect: the automaticity explanation for why conflicting color/text cues create friction; no dedicated concept page yet (single source, below the entity threshold)
- [[wikipedia-2026-gestalt-psychology]] — Wikipedia's article on Gestalt psychology: the eight perceptual-organization principles and their interface-design applications
- [[wikipedia-2026-usability-engineering]] — Wikipedia's article on usability engineering: its 1988/1993 origins, the five usability attributes, ISO 9241, the slip/mistake error taxonomy, and the RITE method
- [[wikipedia-2026-usability-testing]] — Wikipedia's article on usability testing: guerrilla/remote/A-B testing, the five-users claim and the Nielsen-Landauer formula, and sampling-bias limitations (disability underrepresentation, WEIRD bias); folded into [[usability-evaluation-methods]] rather than a new page
- [[wikipedia-2026-card-sorting]] — Wikipedia's article on card sorting: open/closed/reverse/Modified-Delphi variants and semantic/syntactic analysis methods; folded into [[card-sorting]] rather than a new page
- [[wikipedia-2026-affordance]] — Wikipedia's article on affordance: Gibson's original sense, Norman's 1988 design narrowing, the 2013 "signifiers" split, and Gaver's perceivable/hidden/false categories
- [[vanduyne-2006-advanced-e-commerce]] — Pattern Group G of *The Design of Sites*: featured products, cross-selling, personalized recommendations, recommendation communities, multiple destinations, gift giving, and order tracking, in full
- [[vanduyne-2006-basic-e-commerce]] — Pattern Group F of *The Design of Sites*: quick-flow checkout, clean product details, shopping cart, address/shipping/payment steps, order summary, order confirmation, and easy returns, in full
- [[wikipedia-2026-design-of-everyday-things]] — Wikipedia's article on Don Norman's *The Design of Everyday Things*: the seven-stages-of-action model, both gulfs, and the book's role as the origin of Norman's affordance/signifier theory
- [[wikipedia-2026-color-theory]] — Wikipedia's article on color theory: additive/subtractive mixing models, color-wheel schemes and contrast types, and cultural limits of color harmony and symbolism
- [[wikipedia-2026-typography]] — Wikipedia's article on typography: legibility/readability distinction, typeface selection by content category, text composition principles, display vs. text typography, and typography as mood/tone signal
- [[wikipedia-2026-visual-hierarchy]] — Wikipedia's article on visual hierarchy: Gestalt foundation, Von Restorff effect, four physical characteristics (color, size, alignment, character), and UX application
- [[wikipedia-2026-responsive-web-design]] — Wikipedia's article on responsive web design: definition, three technical pillars, historical timeline (2001–2015), mobile-first design, and UI plasticity
- [[wikipedia-2026-web-colors]] — Wikipedia's article on web colors: hex notation, named colors, CSS color models (RGB/HSL), web-safe palette history, and WCAG contrast ratios
- [[wikipedia-2026-web-typography]] — Wikipedia's article on web typography: web-safe fonts, font stack fallback mechanism, generic families, web fonts vs. performance, image replacement anti-pattern
- [[wikipedia-2026-progressive-disclosure]] — Wikipedia's article on progressive disclosure: definition, macOS print dialog as the canonical example, theme park queue as a physical-world analogy
- [[fuguux-2026-information-hierarchy-for-usability]] — FuguUX internal heuristics checklist for web sites: eight web design sections plus mobile, accessibility, QA, and first-impressions checklists; new content folded into [[modal-dialogs]], [[internationalization]], [[accessibility]], [[action-buttons]], [[form-design]], [[typography]], [[trust-and-credibility]], [[interface-design-principles]], and [[browsable-content]]
- [[wikipedia-2026-search-engine-optimization]] — Wikipedia's SEO article: crawling/indexing/ranking, on-page factors, mobile-first indexing, white/black/grey hat distinction, international SEO, PageRank; new content in [[seo-basics]]
- [[wikipedia-2026-favicon]] — history (IE5, 1999), formats (ICO/PNG/SVG), sizes, mobile home-screen icons, performance/security implications; new content in [[favicon]]
- [[wikipedia-2026-breadcrumb-navigation]] — three breadcrumb types (location, attribute, path), placement, separator conventions, usability limits; new content in [[breadcrumb-navigation]]
- [[wai-2026-tutorials]] — W3C WAI tutorials (CC BY 4.0): Images, Forms, Menus, Page Structure, Carousels; new content in [[accessibility]], [[form-design]], [[navigation-menus]], [[interface-design-principles]]
- [[govuk-2026-design-system]] — GOV.UK Design System (OGL v3.0): components and patterns for accessible government services; new content in [[form-design]], [[action-buttons]], [[notifications]], [[site-header-and-footer]], [[breadcrumb-navigation]]

## Queries

## Comparisons

## Synthesis
