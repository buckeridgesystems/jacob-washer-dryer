# DESIGN.md

This file has two parts:

- **Part 1: Workflow.** The steps for every new site, in order. Each project's answers get filled in here.
- **Part 2: Standards.** Rules that apply at every step. Don't edit them per client.

Claude Code: read the whole file before starting. Work through Part 1 in order, and stop where it says to stop. Check every decision against Part 2.

---

## Part 1: Workflow (fill in per site)

### Step 1: Facts

Send Hunter one intake message that covers every missing item below and the asset list. Don't go further until it's answered.

**Assets to request, all in one message:**
- Photos of the business or product, sent as originals (not screenshots)
- Reviews, as pasted text
- Listing text, as pasted text, if the business has listings
- Logo, if any
- Hours and phone number
- How the owner describes the work, in their own words (a few sentences, or a voice memo transcript)
- The questions customers ask most before hiring

- **Business name:**
- **What they do (one sentence):**
- **Service area:**
- **Primary visitor:** (who arrives, on what device, in what situation)
- **Primary action:** (text / call / quote request / booking / visit)
- **Tier:** (Foundation only / Starter Presence / Growth Engine / Full Stack Partner). Foundation only means the site and the Foundation package, with no tier add-ons.
- **Real assets supplied:** (logo, photos, reviews, licenses, hours)
- **Missing assets:**
- **Top customer questions:** (these set the homepage section order). **Proposed, not confirmed by the owner.** Based on his Marketplace listings and the two reviews.
  1. How much is it per month? (listings lead with the price; review: "Great rate")
  2. Is delivery and installation included, and what does it cost? (listings: free in Colorado Springs, $50 outside; review: "GET INSTALLED TODAY")
  3. Is there a credit check or a contract? (listings: "No credit check", "Cancel anytime")
  4. How soon can I get it? (listing: "usually the same week"; review: "BOOK TODAY")
  5. Do you come to my area? (listings: "Serving all of Colorado Springs & surrounding areas")
- **Placeholders:** (each unconfirmed value, with the exact string used on the site)

  | Value | Exact string | Where it appears |
  |---|---|---|
  | Business name | `Gammill Global` | Every page: title, header, footer, About, meta; also `contact.vcf` (FN and ORG) |
  | Phone | `(719) 555-0100` visible; `+17195550100` in every `sms:` link and in `contact.vcf` | Header, footer, every page |
  | Hours | `[HOURS]` | Footer on every page, closing band (`Hours: [HOURS]`), Contact |
  | Owner name | `[OWNER NAME]` | About |
  | Owner story | `[OWNER STORY: two or three sentences from the owner, in his own words.]` | About |
  | Privacy policy | `[PRIVACY POLICY: placeholder. The owner should confirm or replace this wording before launch.]` | Privacy |

  Not yet unified: the contact-card download name is `Gammill-Global.vcf` (hyphen) while the site uses `Gammill Global`. One more find-and-replace at handoff.
- **Claims:** (each time, count, price, or guarantee claim, with its source)

  | Claim | Source |
  |---|---|
  | $50 a month for a washer and dryer set | Marketplace listing ("Rent a washer and dryer for just $50 a month") |
  | $35 a month for a single washer or dryer | Marketplace listing ("Washer OR Dryer Rental, $35/Month") |
  | Free delivery and installation in Colorado Springs | Marketplace listings |
  | $50 delivery outside Colorado Springs | Marketplace listing; Hunter: "It's fine" (another listing says "surrounding areas" without a fee) |
  | Usually delivered and installed the same week | Marketplace listing ("usually the same week"); Hunter: keep it |
  | No credit check | Marketplace listings |
  | Month to month, cancel anytime | Marketplace listings |
  | Owner maintains the machines he rents | Marketplace listing ("free delivery, installation, and maintenance"); Hunter notes |
  | Machines are used | Hunter, listings ("Used - like new") |
  | Both reviews are 5 stars | Hunter ("both 5 stars, copy/paste didn't capture that") |
  | Review dates: July 30, 2026 (DeeTha), February 16, 2026 (Mikel) | Review text as pasted by Hunter |

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
- **Supporting (optional):** `#367C2B` green for headings, bands, and links (5.15:1 on white). `#2A5E21` dark green if a darker tone is needed (7.72:1 on white). `#EDF4EB` pale green tint, used only as an alternating section background (ink 15.5:1, dark green 6.9:1 on it). Added in the polish pass.
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
  3. **Rental prices:** $50 set, $35 single unit, plus what is included (no credit check, month to month, maintenance). Answers question 1 in full and question 3.
  4. **Where we deliver:** Colorado Springs and the surrounding area; free delivery and installation in the city, usually the same week; $50 outside. Answers questions 2, 4, and 5. Moved up from the bottom in the copy pass.
  5. **Reviews:** two real Facebook reviews, verbatim. Trust, after the questions are answered.
  6. **Our machines:** real photos (washer, dryer, set). No inventory claims, because Hunter does not want an "available" list. Moved down: it answers none of the top questions.
  7. **Closing text:** the same button and number, plus `[HOURS]`. Purpose: the final prompt after reading.
  8. **Footer:** name, phone, service area, hours, privacy link. Nothing decorative.
- **Form fields:** None. The primary action is a tap-to-text link (`sms:`) with call as the second option, as Hunter specified.

Show this to Hunter, then build.

### Step 6: Before handing back

- [ ] Every Part 2 rule checked, with any exceptions listed and explained
  - **Exception, Part 2 §3 (no scroll-triggered animation):** the sticky header slides away on scroll down and returns on scroll up (`js/header.js`, 0.2s, disabled under `prefers-reduced-motion`, visible without JavaScript). Requested by Hunter.
  - **Exception, Part 2 §6 (contrast):** the header's yellow bottom border is decorative, not text or a control, and is 1.34:1 against white. Intentional.
  - **Exception, Part 2 §2 (no themed decoration):** the "Included" list uses a small washing-machine icon as its bullet, an authored SVG in the dark green. Requested by Hunter.
  - **Built:** About, Services, and Contact pages exist and share the header, hero band, tiles, photo mat, washer bullets, and closing band with the home page. Open placeholders on them: `[OWNER NAME]`, `[OWNER STORY]`, `[HOURS]`.
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

Visitors scan rather than read. Write for someone on a phone who wants one answer and a way to reach the business.

**Structure**
- Order the homepage by the visitor's questions (Step 1, Top customer questions). Answer the most-asked one on the first screen.
- Headings say what the section tells the visitor. A plain label is fine when the content below is short and obvious, such as Reviews or Hours.
- Front-load. The first two or three words of every heading, list item, and paragraph carry the meaning.
- Use a list for three or more parallel items. Write numbers as digits.

**Length**
- One idea per sentence. Keep most sentences under 20 words, and paragraphs to one to three sentences.
- Cut any line that doesn't help the visitor decide or act.
- Each fact appears once, in the section where it answers a question. The phone number and the primary action are the exceptions, and they repeat.

**Every line carries a fact**
- Each line gives the visitor something usable: a price, a place, a time, a service, or a condition.
- Test: could a visitor check it or act on it? A line that states a price, place, time, service, or condition passes, even if competitors could say the same. A line that is only adjectives or a promise of a feeling ("quality you can count on," "service that goes above and beyond") fails. Rewrite it with a fact from intake, or cut it. Headings, buttons, and labels are exempt.
  - Weak: "Quality service you can count on." Strong: "We maintain every machine we rent."
  - Weak: "Fast, reliable plumbing." Strong: "Licensed plumber in Tyler and Longview. Same-day visits when you call before noon."
- No praise words (best, top-rated, premier, quality, trusted, reliable) unless a fact on the same line backs them.
- Use plain, common words, at roughly a 5th to 7th grade reading level. Avoid long or uncommon words where a short one works. Use the words customers use, taken from intake, listings, and reviews.

**Voice**
- Write as the owner talking to a customer. Use "we" and "you." Contractions are fine.
- Borrow the client's own phrasing from intake and listings when it's clear and specific.
- No fear framing ("Disaster struck?"), no tough-guy slogans, no hype words (elevate, unleash, seamless, transform, cutting-edge).
- No em dashes.

**Buttons and links**
- Buttons use the verb of the action: Call, Text us, Get a quote, Book.
- Avoid labels that don't say what happens: Get started, Learn more, Submit, Click here.
- Link text makes sense on its own.

**Honesty**
- Never invent facts. No made-up statistics, years in business, review counts, certifications, warranties, awards, or outcomes. Anything not supplied by the client is a clearly marked placeholder: `[YEARS IN BUSINESS]`.
- Time, count, price, and guarantee claims come only from the client's own words, listings, or posts. Record each in Step 1 under Claims.
- Never promise results: no lead counts, rankings, savings, or insurance outcomes.

**Reviews**
- Real reviews only on live client sites. Until real ones exist, and on Buckeridge demo sites, review text is lorem ipsum with a placeholder name like `[CUSTOMER NAME]`. Never write a realistic-sounding fake review.
- Show reviews exactly as written, including the reviewer's spelling and capitalization. Never polish them.
- Put detailed reviews first, and show the date.
- Reviewer names: show first name and last initial unless the client confirms that full names are public on their profile.

**Placeholders**
- Every unconfirmed value (business name, phone, hours, email) is recorded once in Step 1 under Placeholders, with the exact string used on the site. Use that exact string everywhere, so handoff is one find-and-replace per value.
- Dummy phone numbers use the client's area code with a number from 555-0100 to 555-0199, the range reserved for fictional use.

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
