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

  **Rebrand, 2026-10-12 (Hunter's brief):** business name **Purely Global**, phone **(719) 827-9063** (`+17198279063` in every `tel:` and `sms:` link and in `contact.vcf`; download name `Purely-Global.vcf`), owner **Jacob Gammill**. Both name and phone come from the sign and are still on the open-questions list for Jacob to confirm.

  | Value | Status on the site | Where |
  |---|---|---|
  | Business hours | Not supplied. Footer shows installation hours (5–7 PM) instead | Footer |
  | Owner story | Meet the owner section removed (Hunter, 2026-10-12) | About |
  | 1–3 month rates | Not published: "Need it for less time? Text us to ask about shorter rentals." (Text us links to sms) | Home, FAQ, About |
  | Privacy wording | Placeholder line removed; Stripe invoice paragraph added; an HTML comment asks the owner to confirm | Privacy |
- **Claims:** (each time, count, price, or guarantee claim, with its source)

  | Claim | Source |
  |---|---|
  | $50 a month for a washer and dryer set, 4-month minimum | Jacob's standard reply to new clients (Hunter's brief, 2026-10-12) |
  | $35 a month for a single washer or dryer, 4-month minimum | Jacob's reply |
  | $50 refundable deposit at installation, returned if no major damage | Jacob's reply |
  | Free delivery and installation in Colorado Springs | Jacob's reply; Marketplace listings |
  | Installation as early as Monday | Jacob's reply |
  | Installation hours 5–7 PM | Hunter, 2026-10-12 |
  | Service area is Colorado Springs only | Hunter, 2026-10-12. Replaces "and surrounding area" and the outside-city delivery question |
  | Monthly invoices through Stripe, by email or text | Jacob's reply |
  | Contract signed at installation; digital copy on request | Jacob's reply |
  | Machines are used | Hunter, listings ("Used - like new") |
  | "We drop it off and hook it up" | Marketplace listing, owner's own phrasing ("We drop it off, hook it up"). Used on the FAQ page |
  | Both reviews are 5 stars | Hunter ("both 5 stars, copy/paste didn't capture that") |
  | Review dates: July 30, 2026 (DeeTha), February 16, 2026 (Mikel) | Review text as pasted by Hunter |

  **Removed 2026-10-12**, because they conflict with the 4-month minimum or aren't in Jacob's reply: month to month, cancel anytime, no credit check, no long-term commitment, no big upfront cost, usually the same week, $50 delivery outside the city, "we maintain the machines we rent" and free maintenance. Ask Jacob before putting maintenance back.

**Notes from Hunter:**
- Machines are used, mostly Whirlpool, but brand is not a selling point. Don't feature it.
- Owner rents only his own machines. He does not repair other people's machines, so don't imply repair for the public.
- ~~Phone number is a dummy (`555-01xx` range) until the owner supplies a real one.~~ Replaced 2026-10-12 with (719) 827-9063 from the sign.

### Step 2: Brand colors (stop and ask)

**Ask Hunter for the client's colors before proposing anything.** Ask:

1. Does the client have brand colors? (logo, truck wrap, signage, uniforms, business cards)
2. If yes, what are they? Hex codes, or a photo or file to pull them from.
3. Are any colors off-limits? (a competitor's colors, colors the client dislikes)

Then:

- **If the client has colors:** build the palette from them. Assign each a role: ground, text, primary action, and any supporting color. Check contrast for every text and background pair. If a brand color fails 4.5:1 as text or as a button, say so and propose the closest adjusted shade. Don't silently change it.
- **If the client has no colors:** propose three palettes that fit the business and its visitors, each shown as swatches with hex codes and roles. Don't default to neutrals, and don't pick colors only because they're associated with the trade. Stop and wait for Hunter to choose.

Record the final palette:

- **Source:** the Purely Global sign and poster (`IMG_3438.PNG`, `purely_global_sign_24x18.pdf`), via Hunter's brief, 2026-10-12. Replaces the earlier John Deere green and yellow.
- **Ground:** `#FFFFFF` white; `#F1F9EA` pale mint tint for alternating sections and tiles.
- **Primary green (hero, page heroes, closing band, footer):** `#4B8468`, set by Hunter on 2026-10-12. **White on it is 4.38:1, below the 4.5 AA minimum for body text** (hero subhead, closing band text, footer). It passes for large text (24px+, or 18.66px+ bold). An earlier pass used `#4A8068` (white 4.59). The logo files keep `#4E876D`.
- **Deep green:** `#2F5246`, for headings and links on white (8.69), text on gold (4.77), step numerals, and photo mats.
- **Mint:** `#E1F8D0` (set by Hunter), for the footer rule and large text only (the closing heading). The logo files keep `#DCF1CA`. It's 3.86:1 on the green, which passes for large text only.
- **Primary action:** `#F4B640` (set by Hunter) gold pill button with `#2F5246` text (4.81) and a 2px `#2F5246` border, because gold on white is only 1.82.
- **Text:** `#1A1A1A` on white and tint; `#FFFFFF` on green.

Contrast checks (WCAG ratios):

| Pair | Ratio | Result |
|---|---|---|
| `#FFFFFF` on `#4B8468` | 4.38 | **Fails 4.5 for body text.** Passes for large text. Set by Hunter. |
| `#FFFFFF` on `#4E876D` (brand, unadjusted) | 4.19 | **Fails 4.5.** This is why the green was nudged. |
| `#E1F8D0` on `#4B8468` | 3.86 | Large text and graphics only |
| `#2F5246` on `#F4B640` | 4.81 | Pass |
| `#2F5246` on `#FFFFFF` | 8.69 | Pass |
| `#2F5246` on `#F1F9EA` | 8.06 | Pass |
| `#1A1A1A` on `#F1F9EA` | 16.14 | Pass |
| `#F4B640` on `#FFFFFF` | 1.81 | **Fails.** The button always has the deep green border. |

### Step 3: Type (stop and ask)

Hunter doesn't need to know font names. **Propose 3–4 type options and render them**, rather than listing names. For each option:

- The heading font and body font (or one family used for both), with weights.
- One sentence on why it fits this business.
- A rendered specimen in a single static HTML file: the business name as a headline, a sample subheading, a paragraph of body text, a button, and the phone number, all in the chosen palette from Step 2.
- Where it comes from (Google Fonts or self-hosted, and the license).

Make the options clearly different from each other, for example: a sturdy sans, a sans with personality, a serif heading with a sans body, a condensed display face. Skip anything on the avoid list in Part 2.

**Stop and wait for Hunter to pick one.**

- **Type picked (2026-10-12):** Oswald 600, uppercase, for h1, h2, prices, and step numerals. It's a condensed bold sans like the poster headline, as Hunter's brief asked ("similar to Bebas Neue / Oswald"). Public Sans stays for everything else (400 body, 600 subheads, 800 for h3 and buttons). Both are SIL Open Font License and self-hosted in `/fonts` with their licenses (Oswald from Fontsource 5.3.0). No alternatives were rendered: Hunter said "Continue" after being told type was still open. History below.
- **Previously:** Public Sans, one family, confirmed by Hunter ("leave the original in"). Hunter first called it too casual, was shown three alternatives in direction C (`directions/type-option-1.html` IBM Plex Sans, `type-option-2.html` Archivo, `type-option-3.html` Source Serif 4 with Source Sans 3), then chose to keep Public Sans. Details: 800 for headings, 600 for subheadings and buttons, 400 for body. Body 17px, line height 1.55, measure capped at 65ch. Google Fonts, SIL Open Font License. Self-host woff2 in `/fonts` with the license for the final build. Chosen by Claude at Hunter's direction ("pick one that makes sense"); only one option was rendered. Specimen: `specimen-type.html`.

### Step 4: Directions (stop and ask)

Using the chosen colors and type, propose **three layout directions that are clearly different from each other**, for example in density, tone, and how the photos are used. For each:

- One paragraph on the feel and why it suits this business and visitor.
- The homepage first screen only, mocked up as static HTML at 1440px and 390px wide.

Don't build any pages yet. **Stop and wait for Hunter to pick one or ask for changes.**

- **Direction picked:** C, photo-led. Green header bar, headline and button on the left, 4:3 photo on the right (below the button on phones). Mockup: `directions/direction-c.html`.
- **Spacing scale:** 8, 16, 24, 40, 64, 104
- **The one distinctive idea (if any) and where it comes from:** None. Every text link opens a message pre-filled with "Hi Purely Global! I'm interested in renting. Here is my name and address:" (links next to the 4-month minimum say "renting for less than 4 months"), a convenience that comes from his text-first way of getting customers.

### Step 5: Page plan

- **Pages:** Home, About, FAQ, Contact, Privacy.
- **Homepage section order, with the purpose of each section:**
  1. **Header bar:** business name and tappable phone number, so the number is always visible.
  2. **First screen (direction C):** headline, "Text us" button with pre-filled message, call link, photo. Purpose: let someone text in under five seconds.
  3. **Rental prices:** $50 set and $35 single unit, each with the 4-month minimum, plus "Good to know": free delivery and installation in Colorado Springs, the $50 refundable deposit, and "ask about 1–3 month rates."
  4. **How it works (added 2026-10-12):** text us, we reply, install as early as Monday, contract and deposit at install, monthly Stripe invoices.
  5. **Where we deliver:** Colorado Springs only; delivery and installation free.
  6. **Reviews:** two real Facebook reviews, verbatim. Trust, after the questions are answered.
  7. **Our machines:** real photos (washer, dryer, set). No inventory claims, because Hunter does not want an "available" list.
  8. **Closing text:** the same button, a call link, and the save-contact link. Hours removed until supplied.
  9. **Footer:** stacked mint lockup, phone, service area, privacy link. Hours removed until supplied.
- **Form fields:** None. The primary action is a tap-to-text link (`sms:`) with call as the second option, as Hunter specified.

Show this to Hunter, then build.

### Step 6: Before handing back

- [ ] Every Part 2 rule checked, with any exceptions listed and explained
  - **Exception, Part 2 §3 (no scroll-triggered animation):** the sticky header slides away on scroll down and returns on scroll up (`public/js/header.js`, 0.2s, disabled under `prefers-reduced-motion`, visible without JavaScript). Requested by Hunter.
  - **Exception, Part 2 §6 (contrast):** the header's gold bottom border is decorative, not text or a control (1.82:1 against white). Intentional.
  - **Exception, Part 2 §6 (footer hours):** hours are removed from the footer until Jacob supplies them (Hunter's brief: "remove or get hours").
  - **Exception, Part 2 §2 (no themed decoration):** the "Good to know" list uses a small washing-machine icon as its bullet, an authored SVG in the deep green. Requested by Hunter.
  - **Built:** About, FAQ, and Contact pages exist (FAQ replaced Services, which duplicated the home page; accordions are native `<details>`) and share the header, hero band, tiles, photo mat, washer bullets, and closing band with the home page.
  - **Logo (2026-10-12):** the supplied lockup PNGs were clipped (the wordmark read "ELY GLO"). Rebuilt from the vector logo in Jacob's `purely_global_sign_24x18.pdf`, with the artwork unchanged: stacked lockups (`purely-global-logo-lockup-{dark,light,white}.svg` and `.png`) and a horizontal arrangement for the header (`purely-global-logo-horizontal-{dark,light}.svg`: the mark, plus the wordmark scaled to 1/2.6 of the mark's height). The clipped originals are in `public/assets/photos/archive/`.
  - **Detector false positive:** the static scan (`npx impeccable detect public`) flags the mint on green (`#E1F8D0` on `#4B8468`, 3.86:1) on index, about, and faq. That's the closing h2, at 36px or larger, which is large text (3:1 needed). The served-page scan doesn't flag it.
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
