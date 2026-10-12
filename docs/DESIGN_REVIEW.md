# Rendered design review — 12 October 2026

## Findings and implemented fixes

| Finding | Change |
| --- | --- |
| Initial layout relied on similar tiles and generic section rhythms | Rebuilt selected work as an asymmetric gallery with a wide opening project, offset paired projects, editorial books, dark evidence UI, and distinct subject-specific compositions |
| Display type lacked a strong central idea | Introduced the four-line Designing Intelligence / Building What's Next hero, condensed display headings, restrained geometric body text, and occasional serif accents |
| Abstract opening lacked personal identity | Replaced the chrome artwork with Jayesh's original black-and-white portrait and name, then a sunset scene revealed by scrolling |
| Concept visuals needed more depth | Added detailed custom interface compositions and sourced ocean/fruit photography; every mockup remains labeled as illustrative |
| Hero felt cramped or empty at phone sizes | Gave mobile its own stacked type/sculpture composition and responsive spacing |
| Ocean title overlapped the phone's interface on mobile | Repositioned and resized the heading and phone at mobile widths |
| The fruit experiment looked like a generic CSS placeholder | Replaced the shape with a photographed apple and a restrained classification frame |
| Repetition between lower sections | Used an open editorial About, a selectable journey, dark experiments, and an oversized glass-accented contact closing |
| Interactions needed preservation | Retained project filtering, native dialogs, resume download, contact/profile links, mobile navigation, and four-year selection; added a keyboard-operable signal study |
| Motion risked being decorative noise | Kept brief one-time entrances and gentle response; respected reduced motion and fine-pointer capability |
| White and neon palette felt disconnected from the requested iOS-like feel | Reworked the site in deep navy, slate blue, and subdued periwinkle; added frosted navigation, layered glass details, and dark case-study dialogs |
| The bridge from hero to project gallery lacked personal material | Added a reel of Jayesh's outdoor photographs, with scroll-linked movement on desktop and horizontal swipe/keyboard scrolling on mobile |
| Foreground photo rectangles looked detached from the cinematic background | Removed both foreground cards and replaced them with a transparent portrait cutout; preserved the meditation background |
| The reference used responsive text and subject rotation | Added local letter stretching near the pointer with spring return, plus perspective and in-plane rotation of the cutout while scrolling |
| “GOOD DESIGN” was almost invisible | Corrected the inherited foreground color on the audit visual and checked both headline colors against its dark background |
| The audit mockup covered the headline on mobile | Moved the mockup below the full headline and adjusted mobile type size |
| Continuous background motion needed visitor control | Added a pause/resume button and a static fallback for reduced motion, including live preference changes |

## Actual browser review

Latest photo pass: removed the entire personal reel component and its styles. Added five locally bundled context photographs to the healthcare, Study Sync, library, audit, and typo-correction cards, retaining case dialogs, filters, mockup hover transforms, and keyboard interaction. Replaced the oversized decorative book stack with the library photograph and a short title, and enlarged the existing apple crop. Photographic layers zoom subtly on hover only when reduced motion is not requested. The hero now leads directly into selected work. Sources and illustrative-use boundaries are recorded in ASSET_CREDITS.md.

Case-study and color refinement: replaced percentage-of-work wording with concrete implementation descriptions, and used plain-language problem/solution stories. The palette now uses charcoal, warm ivory, amber, teal, terracotta, and plum. Project artwork and dialogs share coordinated accents; the centered monochrome portrait remains intact. Reviewed desktop artwork and mobile library dialog at both its opening and contribution sections. The browser suite now includes seven content checks (52 checks total), including concrete problem, solution, and contribution copy. Jayesh subsequently confirmed chatbot/NLP/inventory ownership for the library and access-permission/student-data work for Study Sync; both dialogs now show those responsibilities.

Centered composition follow-up: the cutout now occupies the middle 64% of the desktop stage, with name typography on the left and a fuller introduction on the right. Browser-side grayscale/brightness/contrast processing and radial plus vertical alpha masks soften the clothing and silhouette into the landscape without regenerating the face or modifying the source asset. The hero now spans 125svh; project rows have no stagger, the photo reel is shorter on desktop, and gallery summaries include the existing implementation approach. Desktop introduction text remains visible through the scroll transition; mobile uses a compact biography above the bottom controls.

Latest refinement: mirrored the black-and-white cutout to face the introduction, moved it inward on desktop and centered it on mobile. The mobile crop leaves more space around the face below the name. Retained the existing perspective animation with a smaller sideways drift and a controlled turn. Shortened the hero from 190 to 155 viewport-height units (175 to 145 on mobile), reduced the project stagger and gallery gaps, and tightened padding through the reel, About, journey, experiments, and contact. No additional dependencies or decorative filler were added. The local Vite process needed a configuration reload to clear stale compiled Tailwind CSS; browser checks were repeated against the refreshed styles.

Ran the current site at http://127.0.0.1:4174 in local headless Chrome and inspected rendered desktop and mobile screenshots. The full page and individual hero, gallery, About, journey, experiments, and contact views were inspected. Follow-up captures checked the mobile corrections.

Evidence in .local/design-review/ includes desktop-full.png, desktop-hero.png, desktop-reel.png, desktop-work.png, desktop-gallery.png, desktop-library.png, desktop-about.png, desktop-lab.png, desktop-contact.png, mobile-hero.png, mobile-reel.png, mobile-work.png, mobile-ocean.png, mobile-about.png, mobile-journey.png, mobile-lab.png, mobile-contact.png, and mobile-dialog.png. Local QA script: .local/design-qa.mjs; assertion results: results.json.

Assertions cover rendering, asset loading, portrait rotation and scene reveal, background pause/resume, short-phone hero controls and label spacing, keyboard scrolling in the mobile photo reel, no horizontal overflow at 320/390/768/1024/1440/1920 px, AI/ML filtering, all seven dialogs, Escape closure and focus restoration, mobile menu/Escape, journey selection, PDF response, Gmail and external-link attributes, keyboard range interaction, live reduced-motion behavior, and no uncaught runtime errors.

The personal opening is also captured in desktop-hero-transition.png, desktop-hero-sunset.png, mobile-hero-sunset.png, small-mobile-hero.png, and desktop-text-hover.png. Audit contrast and composition are captured in desktop-audit.png and mobile-audit.png. Original personal photographs are preserved; the separate foreground cutout is an imagegen background-extraction edit documented in ASSET_CREDITS.md.

## Limits and remaining content

This is an original adaptation of the supplied direction, not a pixel-identical reproduction of three different websites. The project visuals are concept presentations; actual screenshots, dates, demos, and personal reflections can strengthen the portfolio. Study Sync comes from the supplied brief without independent code review. The portrait rotation uses a flat transparent cutout with perspective transforms; it does not reconstruct unseen angles of the person's face or body.

Browser review was in Chrome with emulated viewport sizes, not physical-device, Safari, screen-reader, or exhaustive accessibility testing. No Lighthouse score or award evaluation is claimed. The original resume's email mismatch remains documented. The build is local and unpublished; noindex remains until a deliberate public launch.

Production smoke check also passed at port 4175: the built React application rendered all seven projects; the page, resume, and all three images returned HTTP 200. The mobile case-study dialog was visually inspected (mobile-dialog.png).
