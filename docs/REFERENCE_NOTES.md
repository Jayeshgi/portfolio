# Portfolio video reference notes

Source: the user-provided `WhatsApp Video 2026-10-11 at 9.46.57 PM.mp4`.
Inspected locally with OpenCV. Duration: 28.6 seconds; 30 fps; 576 × 1024 pixels.

This is a portrait phone recording of a desktop website. The room lighting, monitor angle, social-media captions, watermarks, and music are recording context, not requested website elements. Any claims in the recording belong to its creator and are not facts about the user.

## Verified observations

| Approximate time | Visible design and behavior |
| --- | --- |
| 0–1 s | A mostly blank pale screen transitions into the opening composition. The recording does not establish whether this is a loader or an entrance effect. |
| 1–8 s | A full-height hero uses very large, heavy, condensed black `PORTFOLIO` lettering on an ivory background. A dark monochrome cutout portrait overlaps the letters. Small navigation and identity text sit along the top. The portrait changes orientation near the end of this interval; the underlying mechanism is not visible. Some letter edges appear distorted in certain frames. |
| 9–13 s | A selected-work introduction leads into large, colorful project imagery, including a wide first image and a two-column grid with uneven image heights. Thin captions and generous pale margins keep the imagery dominant. |
| 14–16 s | A near-black, deep-green section titled `FAN DECK // DISCIPLINES` displays overlapping cards arranged in a fan. Small filter-like pills appear above the cards. Card order/content changes during the recording. Exact pointer and keyboard behavior cannot be determined. |
| 17–19 s | An ivory `BEYOND DESIGN` section shows a horizontal collection of overlapping photographs, with the center image larger and adjacent images receding. The prominent image changes across sampled frames. |
| Around 20 s | A compact `ABOUT ME` text block appears beside a portrait image, maintaining a large amount of empty space. |
| 21–24 s | The contact section uses large stacked `LET’S CREATE SOMETHING.` text and a sparse row of contact/social links. The final word is lighter than the first two lines. |
| 25–28.6 s | The recording fades under its social-media outro. This is not evidence of a website feature. |

## Direction for this portfolio

The user is a computer science student focused on AI and machine learning. Adapt the reference's typography, spacing, portrait overlap, image-led project presentation, and card interactions to their actual engineering work.

- **Hero:** an oversized identity statement, short CS / AI & ML introduction, clear project and contact links, and the user's own portrait when supplied. Until then, show an intentional placeholder without inventing their appearance.
- **Selected projects:** feature three to six real projects with screenshots, the problem addressed, personal contribution, stack, outcome, repository, and live demo where available. AI/ML work should include its task, data source, evaluation method, actual metric and limitations when supplied.
- **Four-year journey:** adapt the fan deck into four accessible year cards. Each year can reveal real milestones, projects, skills learned, and a brief reflection. Use neutral labels such as Year 01–04 until the user's dates and current year are confirmed. Planned future milestones must be labeled as plans.
- **Skills:** organize technical skills around areas such as programming, web/software engineering, machine learning, data, and tools. Populate only with skills the user confirms; avoid invented proficiency percentages.
- **Beyond code / about:** use genuine interests, learning notes, communities, talks, hackathons, or activities when provided. A photograph strip is optional.
- **Contact:** an oversized closing statement with real email, GitHub, LinkedIn, and resume links once supplied.

## Implementation and evidence limits

- The exact fonts, original source code, colors, easing curves, and interaction triggers cannot be established from this recording. Use a similar heavy condensed display face and a legible sans-serif body face, rather than claim an exact match.
- Native CSS transforms, transitions, and a small amount of JavaScript are sufficient for the initial fan cards and entrance effects. No paid plugin, 3D engine, video generation, or large animation library is required for the scaffold.
- The filmed site appears to be a visual designer's portfolio. Its project images, portrait, name, copy, and achievement claims must not be reused as the user's identity or work.
- Use transform/opacity animation, responsive image sizes, lazy loading below the fold, and a static first render to keep the page fast. A looping portrait video should remain optional and can be considered only after the user supplies suitable footage.
- Card content must also work through buttons, keyboard focus, and touch. On small screens, use readable stacked or horizontally scrollable cards. Respect `prefers-reduced-motion` and retain readable contrast for muted text.
- A pixel-perfect match and mobile behavior cannot be verified from this reference alone; no mobile version of the source site is shown.

## Inspection artifacts

- [Contact sheet](../reference/contact-sheet.jpg): frames sampled every three seconds.
- [Detail sequence](../reference/detail-sequence.jpg): cropped screen samples at additional timestamps; crops are approximate because the camera moves.
- Individual sampled frames are stored under `reference/frame_*.jpg` for local review. These are reference material, not assets to publish on the portfolio.


## Redesign update

The subsequent supplied brief and Ghost Note, Thomas Barrial, and Keny Zachelin reference images informed the current React redesign. The earlier static-stack and fan-card recommendations above describe the first draft. Current decisions and actual rendered review are recorded in DESIGN_REVIEW.md and TECH_STACK.md.
