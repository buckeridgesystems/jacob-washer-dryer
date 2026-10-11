# DESIGN.md

This file has two parts:

- **Part 1: Workflow.** The steps for every new site, in order. Each project's answers get filled in here.
- **Part 2: Standards.** Rules that apply at every step. Don't edit them per client.

Claude Code: read the whole file before starting. Work through Part 1 in order, and stop where it says to stop. Check every decision against Part 2.

---

## Part 1: Workflow (fill in per site)

### Step 1: Facts

Ask Hunter for anything missing here before going further.

- **Business name:** Gammill Global (placeholder until the owner confirms the real name; find and replace site-wide)
- **What they do (one sentence):** Rents used washers and dryers month to month, and delivers, installs, and maintains the machines he rents out. (Delivery confirmed from his Marketplace listings.)
- **Service area:** Greater Colorado Springs, CO, within about a 30-minute drive. Do not name the exact origin address or street.
- **Primary visitor:** Someone in the Colorado Springs area who needs to rent a washer and dryer, arriving on a phone. Currently finds the owner through Facebook Marketplace.
- **Primary action:** Text (call also works). No form. Needs information and a quick way to reach him.
- **Tier:** Foundation (just the site). Note: not one of the template tiers; confirm which it maps to.
- **Real assets supplied:** Photos of his machines from Marketplace listings (`assets/photos/`), prices and terms copied from his listings ($50/month set, $35/month single unit, free delivery and install in Colorado Springs, no credit check, month to month), and two real Facebook reviews (DeeTha, July 30, 2026; Mikel, February 16, 2026). Everything else is filler.
- **Missing assets:** Logo, real business name, photos of the machines, real phone number, hours, reviews, rental pricing and terms, delivery and install details, license or insurance info if any.

**Notes from Hunter:**
- Machines are used, mostly Whirlpool, but brand is not a selling point. Don't feature it.
- Owner rents only his own machines. He does not repair other people's machines, so don't imply repair for the public.
- Phone number is a dummy (`555-01xx` range) until the owner supplies a real one.

### Step 2: Brand colors (stop and ask)

**Ask Hunter for the client's colors before proposing anything.** Ask:

1. Does the client have brand colors? (logo, truck wrap, signage, uniforms, business cards)
2. If yes, what are they? Hex codes, or a photo or file to pull them from.
3. Are any colors off-limits? (a competitor's colors, colors the client dislikes)

Then:

- **If the client has colors:** build the palette from them. Assign each a role: ground, text, primary action, and any supporting color. Check contrast for every text and background pair. If a brand color fails 4.5:1 as text or as a button, say so and propose the closest adjusted shade. Don't silently change it.
- **If the client has no colors:** propose three palettes that fit the business and its visitors, each shown as swatches with hex codes and roles. Don't default to neutrals, and don't pick colors only because they're associated with the trade. Stop and wait for Hunter to choose.

Record the final palette:

- **Ground:** `#FFFFFF` white (green `#367C2B` is allowed as a full-width band, with white text only)
- **Text:** `#1A1A1A` near-black on white and on yellow; `#FFFFFF` on green
- **Primary action:** `#FFDE00` yellow button with `#1A1A1A` text (13.0:1). Reserved for the text/call button. Sits on a green band, or has a 2px `#1A1A1A` border on white, because yellow vs white is only 1.34:1.
- **Supporting (optional):** `#367C2B` green for headings, bands, and links (5.15:1 on white). `#2A5E21` dark green if a darker tone is needed (7.72:1 on white).
- **Source:** client brand, "John Deere green and yellow". Hex values are the commonly published approximations, not from a brand file. Confirm or replace.

Contrast checks (WCAG ratios):

| Pair | Ratio | Result |
|---|---|---|
| `#FFFFFF` on `#367C2B` | 5.15 | Pass |
| `#367C2B` on `#FFFFFF` | 5.15 | Pass |
| `#1A1A1A` on `#FFDE00` | 13.01 | Pass |
| `#FFDE00` on `#2A5E21` | 5.77 | Pass |
| `#FFDE00` on `#367C2B` | 3.85 | **Fails 4.5 as text.** OK only for large text (24px+) or non-text UI. |
| `#367C2B` on `#FFDE00` | 3.85 | **Fails 4.5 as text.** Use `#1A1A1A` on yellow instead. |
| `#1A1A1A` on `#367C2B` | 3.38 | **Fails.** Use white on green. |
| `#FFDE00` on `#FFFFFF` | 1.34 | **Fails.** Never use yellow as text or a borderless shape on white. |

Trademark note: use the colors only. No John Deere name, logo, leaping deer, or "Nothing Runs Like" phrasing anywhere on the site.

### Step 3: Type (stop and ask)

Hunter doesn't need to know font names. **Propose 3–4 type options and render them**, rather than listing names. For each option:

- The heading font and body font (or one family used for both), with weights.
- One sentence on why it fits this business.
- A rendered specimen in a single static HTML file: the business name as a headline, a sample subheading, a paragraph of body text, a button, and the phone number, all in the chosen palette from Step 2.
- Where it comes from (Google Fonts or self-hosted, and the license).

Make the options clearly different from each other, for example: a sturdy sans, a sans with personality, a serif heading with a sans body, a condensed display face. Skip anything on the avoid list in Part 2.

**Stop and wait for Hunter to pick one.**

- **Type picked:** Public Sans, one family, confirmed by Hunter ("leave the original in"). Hunter first called it too casual, was shown three alternatives in direction C (`directions/type-option-1.html` IBM Plex Sans, `type-option-2.html` Archivo, `type-option-3.html` Source Serif 4 with Source Sans 3), then chose to keep Public Sans. Details: 800 for headings, 600 for subheadings and buttons, 400 for body. Body 17px, line height 1.55, measure capped at 65ch. Google Fonts, SIL Open Font License. Self-host woff2 in `/fonts` with the license for the final build. Chosen by Claude at Hunter's direction ("pick one that makes sense"); only one option was rendered. Specimen: `specimen-type.html`.

### Step 4: Directions (stop and ask)

Using the chosen colors and type, propose **three layout directions that are clearly different from each other**, for example in density, tone, and how the photos are used. For each:

- One paragraph on the feel and why it suits this business and visitor.
- The homepage first screen only, mocked up as static HTML at 1440px and 390px wide.

Don't build any pages yet. **Stop and wait for Hunter to pick one or ask for changes.**

- **Direction picked:** C, photo-led. Green header bar, headline and button on the left, 4:3 photo on the right (below the button on phones). Mockup: `directions/direction-c.html`.
- **Spacing scale:** 8, 16, 24, 40, 64, 104
- **The one distinctive idea (if any) and where it comes from:** None. The text button opens a message with "Hi, I'd like to rent a washer and dryer" pre-filled, a convenience that comes from his text-first way of getting customers.

### Step 5: Page plan

- **Pages:** Home (one page). Privacy (short, required by the footer rule; placeholder text until the owner supplies policy wording).
- **Homepage section order, with the purpose of each section:**
  1. **Header bar:** business name and tappable phone number, so the number is always visible.
  2. **First screen (direction C):** headline, "Text us" button with pre-filled message, call link, photo. Purpose: let someone text in under five seconds.
  3. **Rental prices:** $50 set, $35 single unit, plus what is included. Purpose: answer the first question people ask. The old "What we do" list was folded into the Included list.
  4. **Our machines:** three real photos (washer, dryer, garage stock). Hunter does not want an "available" list, so no inventory claims.
  5. **Reviews:** two real Facebook reviews, verbatim.
  6. **Service area:** Colorado Springs and the surrounding area; free delivery in the city, $50 outside (see open items).
  7. **Closing text/call:** the same button and number, plus `[HOURS]`. Purpose: the final prompt after reading.
  8. **Footer:** name, phone, service area, hours, privacy link. Nothing decorative.
- **Form fields:** None. The primary action is a tap-to-text link (`sms:`) with call as the second option, as Hunter specified.

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
