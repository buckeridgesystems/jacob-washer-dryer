# DESIGN.md

This file has two parts:

- **Part 1: Workflow.** The steps for every new site, in order. Each project's answers get filled in here.
- **Part 2: Standards.** Rules that apply at every step. Don't edit them per client.

Claude Code: read the whole file before starting. Work through Part 1 in order, and stop where it says to stop. Check every decision against Part 2.

---

## Part 1: Workflow (fill in per site)

### Step 1: Facts

Ask Hunter for anything missing here before going further.

- **Business name:**
- **What they do (one sentence):**
- **Service area:**
- **Primary visitor:** (who arrives, on what device, in what situation)
- **Primary action:** (call / quote request / booking / visit)
- **Tier:** (Starter Presence / Growth Engine / Full Stack Partner)
- **Real assets supplied:** (logo, photos, reviews, licenses, hours)
- **Missing assets:**

### Step 2: Brand colors (stop and ask)

**Ask Hunter for the client's colors before proposing anything.** Ask:

1. Does the client have brand colors? (logo, truck wrap, signage, uniforms, business cards)
2. If yes, what are they? Hex codes, or a photo or file to pull them from.
3. Are any colors off-limits? (a competitor's colors, colors the client dislikes)

Then:

- **If the client has colors:** build the palette from them. Assign each a role: ground, text, primary action, and any supporting color. Check contrast for every text and background pair. If a brand color fails 4.5:1 as text or as a button, say so and propose the closest adjusted shade. Don't silently change it.
- **If the client has no colors:** propose three palettes that fit the business and its visitors, each shown as swatches with hex codes and roles. Don't default to neutrals, and don't pick colors only because they're associated with the trade. Stop and wait for Hunter to choose.

Record the final palette:

- **Ground:**
- **Text:**
- **Primary action:**
- **Supporting (optional):**
- **Source:** (client brand / adjusted from client brand / proposed and chosen)

### Step 3: Type (stop and ask)

Hunter doesn't need to know font names. **Propose 3–4 type options and render them**, rather than listing names. For each option:

- The heading font and body font (or one family used for both), with weights.
- One sentence on why it fits this business.
- A rendered specimen in a single static HTML file: the business name as a headline, a sample subheading, a paragraph of body text, a button, and the phone number, all in the chosen palette from Step 2.
- Where it comes from (Google Fonts or self-hosted, and the license).

Make the options clearly different from each other, for example: a sturdy sans, a sans with personality, a serif heading with a sans body, a condensed display face. Skip anything on the avoid list in Part 2.

**Stop and wait for Hunter to pick one.**

- **Type picked:**

### Step 4: Directions (stop and ask)

Using the chosen colors and type, propose **three layout directions that are clearly different from each other**, for example in density, tone, and how the photos are used. For each:

- One paragraph on the feel and why it suits this business and visitor.
- The homepage first screen only, mocked up as static HTML at 1440px and 390px wide.

Don't build any pages yet. **Stop and wait for Hunter to pick one or ask for changes.**

- **Direction picked:**
- **Spacing scale:**
- **The one distinctive idea (if any) and where it comes from:**

### Step 5: Page plan

- **Pages:**
- **Homepage section order, with the purpose of each section:**
- **Form fields:**

Show this to Hunter, then build.

### Step 6: Before handing back

- [ ] Every Part 2 rule checked, with any exceptions listed and explained
- [ ] Screenshots at 360px, 390px, 576px, 768px, 992px, 1200px, and 1440px
- [ ] Every placeholder listed for Hunter
- [ ] Every stock photo listed with its source, and marked for replacement before delivery

---

## Part 2: Standards (every build)

### 1. Start from the visitor's task, not the industry

Every site exists so a specific person can do a specific thing, such as call, request a quote, book, or check hours and location. The design serves that. The industry is context, not a theme.

### 2. No themed decoration

Don't decorate the page with the trade. That means no roofline shapes, pipe or wrench icons, water drops, lightning bolts, tool silhouettes, hazard stripes, blueprint grids, or "job site" textures. Photos of the client's real work carry the industry.

### 3. Restraint

- **Color:** use the palette from Step 2. The primary action color is reserved for the main action (phone number, main button). Use supporting colors sparingly.
- **Type:** one family, or two at most. Use a clear scale with no near-duplicate sizes. Body text is at least 17px, with line height 1.5–1.6 and a measure of 60–75 characters.
- **Space:** use one spacing scale (for example 4, 8, 16, 24, 40, 64, 104). Be generous between sections. Crowding looks cheap faster than anything else.
- **Effects:** no gradients, glows, glass, heavy shadows, or scroll-triggered animations. Hover and focus feedback only.
- **One idea per site.** If the design has a distinctive move, there is exactly one, and it comes from the client's actual business, not the trade in general.

### 4. Copy

- Plain and specific. Say what the business does, where, and how to reach them.
- No fear framing ("Disaster struck?"), no tough-guy slogans, no hype words (elevate, unleash, seamless, transform, cutting-edge).
- No em dashes.
- Never invent facts. No made-up statistics, years in business, review counts, certifications, warranties, awards, or outcomes. Anything not supplied by the client is a clearly marked placeholder: `[YEARS IN BUSINESS]`.
- Never promise results: no lead counts, rankings, savings, or insurance outcomes.
- Reviews: real reviews only on live client sites. Until real ones exist, and on Buckeridge demo sites, review text is lorem ipsum with a placeholder name like `[CUSTOMER NAME]`. Never write a realistic-sounding fake review.

### 5. Photos

- **Drafts:** stock photos are allowed so layouts can be judged with realistic images. Use only free-license sources (Unsplash, Pexels). Keep a list of every stock photo used, with its source URL. Name the files with a `stock-` prefix so they're easy to find.
- **Deliverables:** no stock photos. Every stock image is replaced with the client's real photos, or with a neutral labeled placeholder, before the site goes live. Search the project for `stock-` before handing back.
- Plan the layout so it still works if the client's photos are average phone pictures.

### 6. Details that make it feel finished

- Phone number is a `tel:` link and visible without scrolling on mobile.
- Every form field has a visible label, not just placeholder text. Errors are written in plain words next to the field.
- All interactive elements have hover, focus-visible, active, and disabled states.
- Tap targets are at least 44px. Text contrast is at least 4.5:1.
- Consistent alignment. Use left-aligned text by default, and center only short, isolated lines.
- Images have fixed dimensions so nothing jumps while loading. Use modern formats and lazy-load below the fold.
- **Responsive, mobile-first.** The base CSS is the phone layout. Wider layouts are added with `min-width` media queries at Bootstrap's standard breakpoints:

  | Name | Min width | Typical device |
  |---|---|---|
  | (base) | 0 | Phones |
  | sm | 576px | Large phones, landscape |
  | md | 768px | Tablets |
  | lg | 992px | Small laptops, landscape tablets |
  | xl | 1200px | Laptops and desktops |
  | xxl | 1400px | Large desktops |

  Store the breakpoints as CSS custom properties or comments in one place so every stylesheet uses the same values. Layouts must stay fluid between breakpoints (use `clamp()`, percentages, and `minmax()`), not just look right at them.
- Check at 360px, 390px, 576px, 768px, 992px, 1200px, and 1440px, with no horizontal scroll at any of them. The phone widths get the most scrutiny, since most visitors arrive on a phone.
- Footer has name, phone, service area, hours, and a privacy link. Nothing decorative.

### 7. Defaults to avoid

These read as generic or AI-made:

- Fonts: Inter, Roboto, Poppins, Montserrat, Open Sans, Space Grotesk, Plus Jakarta Sans, Geist, Fraunces.
- Palettes (when proposing, not when the client's brand uses them): cream backgrounds, cream and brown, purple or purple gradients, navy and orange, near-black with one neon accent.
- Layouts: a centered hero with a big headline over a photo, a row of three identical icon cards, alternating left-right image and text blocks down the whole page, a small "eyebrow" label above every heading.
- Decoration: pulsing dots, floating blobs, fade-in on every section, emoji in headings.

Avoiding these is not enough to look good. The choices in Steps 2–4 are what produce a good result.
