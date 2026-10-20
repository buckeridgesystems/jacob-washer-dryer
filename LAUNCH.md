# Launch checklist: Purely Global

The site lives at jacob.buckeridgesystems.com with `noindex` until Jacob has his own domain. Do the work below when that domain is ready.

## Before launch (can do now)

- [ ] Jacob sets up a Google Business Profile: name "Purely Global", phone (719) 827-9063, service area Colorado Springs, CO. Leave the website field blank until launch.
- [ ] Name, phone and "Colorado Springs, CO" match exactly on the profile, Facebook and the site.
- [ ] Replace stock photos (`garage-stock.webp` and any other `stock-` files) with real ones.
- [ ] Add the real logo files and the favicon and apple-touch-icon.
- [ ] Jacob confirms the open questions: brands and "cleaned and tested," business name, phone, terms, short-term pricing, privacy wording.

## Launch day (on Jacob's domain)

- [ ] Point the new domain at Cloudflare Pages and confirm HTTPS works.
- [ ] Remove `X-Robots-Tag: noindex` from `public/_headers`.
- [ ] Remove `<meta name="robots" content="noindex">` from `public/privacy.html` only if Jacob wants the privacy page indexed (leaving it is fine).
- [ ] Change `url` in the LocalBusiness JSON-LD in `public/index.html` to the new domain.
- [ ] Add `<link rel="canonical">` to every page, using the new domain.
- [ ] Add `public/robots.txt` with a `Sitemap:` line, and `public/sitemap.xml` listing index, about, faq, contact.
- [ ] Add Open Graph tags and a social preview image once the icon file exists.
- [ ] Add the site in Google Search Console, submit the sitemap, and request indexing of the home page.
- [ ] Put the new domain in the Google Business Profile website field.
- [ ] Re-run `npx impeccable detect` on the served URL and check the structured data in Google's Rich Results Test.

## After launch

- [ ] Redirect jacob.buckeridgesystems.com to the new domain with 301s, page by page, if it was ever indexed. If it stayed `noindex` the whole time, a plain redirect is enough.
- [ ] Ask happy customers for Google reviews. Do not offer anything in return.
- [ ] Check Search Console after 2 to 4 weeks for indexing errors.
