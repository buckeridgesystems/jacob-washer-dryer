# Buckeridge Systems Design Lab

Client sites for Buckeridge Systems: plain HTML/CSS/JS, GitHub → Cloudflare Pages, everything client-owned. No page builders, no frameworks unless Hunter says so. Hunter reviews every build.

## How this repo works

`DESIGN.md` is a template. It holds the workflow (Part 1) and the design standards (Part 2) for every site. **Do not replace or rewrite it.** Fill in Part 1 one step at a time, and stop at every step marked "stop and ask" until Hunter answers. Never skip ahead to building.

If anything in this file seems to conflict with DESIGN.md, ask Hunter before choosing.

## Skills in this project

| Skill | Use it for | Don't use it for |
|---|---|---|
| `frontend-design` (Anthropic plugin) | Type scale, plain-language copy, CSS structure, and self-critique with screenshots | **Concept and theming.** Ignore its instructions to draw visual ideas from the trade's materials or vernacular, to open with "the most characteristic thing in the subject's world," and to take aesthetic risks. That produced a roofline-shaped hero and safety-yellow job-site styling in testing. Also ignore its own two-pass plan format (named hex list, ASCII wireframe, single direction). DESIGN.md Part 1 replaces it. |
| `impeccable` | `critique`, `audit`, `polish`, and the deterministic detector | Overriding the client's DESIGN.md |
| `design-taste-frontend` | Its AI-tells list (section 9) as a pre-flight check | Its stack defaults (React/Tailwind). We ship plain HTML/CSS. |

## Pipeline for every new client site

1. **Plan.** Work through DESIGN.md Part 1, Steps 1–5, with every stop.
2. **Build** in plain HTML/CSS, mobile-first, using the breakpoints in DESIGN.md Part 2, section 6. Self-host fonts in the final build (woff2 in `/fonts`, include the license). Google Fonts links are fine in Step 3 specimens and drafts. Read impeccable's `reference/craft-floor.md` before editing UI.
3. **Detect.** Run the impeccable detector on the project (`npx impeccable detect .`), then on the served page by URL, which is more accurate than the static scan. Fix every real finding. Record any false positive in DESIGN.md.
4. **Look at it.** Take screenshots at the widths listed in DESIGN.md Part 2, section 6, fix what's wrong in one batch, check once more, and stop.
5. **Report to Hunter:** what you built, detector results, open placeholders (photos, reviews, license number, form endpoint), and every stock photo still in the project.

## Hard rules (Buckeridge-specific)

- **Photos:** stock photos are allowed during drafting (free-license sources, `stock-` file prefix, tracked in a list), as described in DESIGN.md Part 2, section 5. Every stock photo is replaced before a site is delivered. Never AI-generated people.
- **Reviews:** real reviews only on live client sites. Until real ones exist, and on Buckeridge demo sites, review text is lorem ipsum with a placeholder name like `[CUSTOMER NAME]`. Never write a realistic-sounding fake review.
- Never promise rankings, lead counts, insurance outcomes, or response times the client hasn't committed to.
- Fonts, palettes, and layout patterns to avoid are listed in DESIGN.md Part 2, section 7. The palette list applies only to colors you propose. If the client's own brand colors include purple, cream, navy and orange, or anything else on that list, use them.
- The Buckeridge Systems logo comes only from the locked brand spec. Never redraw it. Client logos come only from files the client supplies.
