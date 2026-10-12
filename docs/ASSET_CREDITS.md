# Asset sources and usage

| Asset | Source | Treatment |
| --- | --- | --- |
| reference/chrome-sculpture.png | Original image generated for an earlier version on 11 October 2026 | Archived artwork; replaced by Jayesh's photographs and excluded from the active site |
| public/images/personal/in-transit.jpg | Jayesh's supplied 1.jpeg | Unchanged source photograph for the foreground cutout |
| public/images/personal/jayesh-cutout.png | Background-extraction edit of in-transit.jpg, made with the built-in imagegen tool on 12 October 2026 | Transparent foreground portrait, 1086 × 1448 RGBA; used with CSS edge blending and scroll-driven perspective rotation |
| public/images/personal/sunset.jpg | Jayesh's supplied WhatsApp image ending in (3).jpeg | Hilltop photograph used for the moving background and personal reel |
| public/images/personal/on-the-water.jpg | Jayesh's supplied WhatsApp image ending in (1).jpeg | Personal photo reel; original file copied unchanged |
| public/images/personal/open-air.jpg | Jayesh's supplied 3.jpeg | Personal photo reel; original file copied unchanged |
| public/images/ocean.jpg | [Bernd Dittrich on Unsplash](https://unsplash.com/photos/a-black-and-white-photo-of-the-ocean-VsP0Pz3B7t8) | Aerial ocean photograph for the Ocean Hazard composition |
| public/images/apple.jpg | [Maria Lysenko on Unsplash](https://unsplash.com/photos/green-apple-fruit-on-black-background-JTOfU0H8paA) | Green apple photograph, cropped by CSS and desaturated, used as an illustrative classification input |
| src/Visuals.tsx | Original HTML/CSS/SVG compositions | Illustrative project concepts, not application screenshots or live data |
| public/resume.pdf | Jayesh's supplied PDF | Copied unchanged; email discrepancy recorded in RESUME_NOTES.md |
| public/favicon.svg | Original JS initials mark | Portfolio favicon |

Unsplash source pages identify these photographs as free under the [Unsplash License](https://unsplash.com/license). Photos are bundled locally to avoid runtime image-host requests. The illustration and editorial photos do not prove project performance, deployments, or model outputs.

Typography: [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), loaded from Google Fonts. Icons come from Lucide React. Keep package licenses with their dependencies.

## Project context photographs — 12 October 2026

The personal photo reel has been removed from the website. Its original image files remain available locally; only the sunset background and portrait cutout are used by the current hero.

These photographs are locally bundled at 1400 px wide (approximately 1.02 MiB combined), lazy-loaded, and cropped/graded with CSS. Source pages identify them as free under the Unsplash License. They provide illustrative subject context, not real project users, app screenshots, endorsements, or detected audit findings.

| Local file | Photographer / source | Context |
| --- | --- | --- |
| public/images/projects/health.jpg | [Vitaly Gariev](https://unsplash.com/photos/doctor-wearing-a-stethoscope-at-his-desk-7ONjxCll0L8) | Clinical documentation |
| public/images/projects/study.jpg | [Vitaly Gariev](https://unsplash.com/photos/diverse-group-of-students-gathered-around-a-laptop-EA0-iajPYFE) | Student collaboration |
| public/images/projects/library.jpg | [Priscilla Du Preez](https://unsplash.com/photos/shallow-focus-photography-of-bookshelfs-ggeZ9oyI-PE) | Library discovery |
| public/images/projects/audit.jpg | [Daniel Korpai](https://unsplash.com/photos/person-holding-black-smartphone-aUmq85-2V7I) | General device/interface context; the pictured app was not audited |
| public/images/projects/writing.jpg | [Kit](https://unsplash.com/photos/a-person-typing-on-a-laptop-with-their-hands-on-the-keyboard-GvEK_mHiH4g) | Writing in a browser |

FruitLens retains Maria Lysenko's credited apple photo with a larger crop. Ocean Hazard retains Bernd Dittrich's credited ocean photo.

Reference images and video remain in reference/ or their original supplied locations; they were used for design study and are not included in public/ or dist/.

The supplied 4.mp4, 5.mp4, and =sample.mp4 were inspected. The original photographs remain unchanged. The hero uses a separate imagegen background-extraction edit; it is a 2D cutout with perspective transforms, not a reconstructed 3D head or body. The videos are reference material and are not shipped.

## Foreground cutout edit record

Mode: built-in imagegen edit, transparent background enabled. Input: public/images/personal/in-transit.jpg. Final saved output: [jayesh-cutout.png](../public/images/personal/jayesh-cutout.png). Alpha was checked: RGBA, range 0–255, approximately 39.5% fully transparent pixels.

Exact prompt:

> Use case: background-extraction. Edit target: the attached black-and-white photograph of Jayesh wearing a light shirt and looking to the right. Create a precise transparent PNG cutout for his portfolio website. Remove ONLY the auto-rickshaw, roof, street, seat and all other background. Keep the existing person, visible upper body, face, hair, beard, shirt, pose, proportions, expression, grayscale tones and lighting exactly as in the source photograph. Preserve the original identity and facial details; do not beautify, repaint, restyle, change clothes or invent anatomy. Keep fine natural hair edges, retain the full existing silhouette of the person, preserve transparent gaps around the arms, and keep the source framing. Output just this person on actual transparent alpha, without a background, frame, border, shadow, text or checkerboard.
