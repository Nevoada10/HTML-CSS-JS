# Shopify Handoff Mapping

This static prototype is ready to be adapted into a custom Shopify theme.

## Section Mapping

- Homepage Hero (homepage.html)
  - Shopify section: `hero-editorial.liquid`
  - Settings: kicker, heading, lead, primary CTA, secondary CTA, hero image, caption

- Homepage Manifesto + Story Notes
  - Shopify section: `brand-story-dual.liquid`
  - Settings: manifesto text lines, intro copy, bullet list items

- Collection Cards (home + collection pages)
  - Shopify section: `drop-product-grid.liquid`
  - Data source: products by collection tag `drop-01`
  - Settings: featured product, badge text, scarcity line, card style variant

- Product Metadata Panel (product pages)
  - Shopify section: `product-meta-panel.liquid`
  - Data source: product metafields
  - Required metafields: fabric, weight, monogram, fit, edition_note, scarcity

- Notify Form Block (home, prelaunch, product)
  - Shopify section: `notify-form.liquid`
  - For Shopify: replace prototype submit handler with Shopify form endpoint or app integration
  - Keep hidden context fields: source, sku, colorway

- Philosophy / About blocks
  - Shopify section: `philosophy-editorial.liquid`
  - Settings: manifesto lines, story copy, stats values, lifestyle image

- Contact block
  - Shopify section: `contact-routing.liquid`
  - Settings: email, social links, support text

- Legal Footer + Cookie Prompt
  - Snippets: `site-footer-links.liquid`, `cookie-consent-banner.liquid`
  - Include links to Privacy and Impressum pages from first launch

## Template Mapping

- `homepage.html` -> `templates/index.json` + sections
- `collection.html` -> `templates/collection.json`
- `product-pp01-bone.html` (pattern) -> `templates/product.json`
- `about.html` -> `templates/page.about.json`
- `contact.html` -> `templates/page.contact.json`
- `prelaunch.html` -> `templates/page.waitlist.json`
- `privacy.html` -> `templates/page.privacy.json`
- `impressum.html` -> `templates/page.impressum.json`

## Data/Schema Recommendations

- Use section schema blocks for:
  - `manifesto_line`
  - `metadata_row`
  - `drop_card`
  - `cta_link`
- Keep static phrase tokens consistent:
  - `DROP 01 · SS26 · MUNICH`
  - `100 pieces only`
  - `Not from here. Not from there. From both.`

## Production Notes

- Replace all placeholder legal text with approved copy.
- Integrate real waitlist backend (Shopify form app, Klaviyo, Mailchimp, etc.).
- Replace placeholder stock photos with brand-owned assets and optimized image sizes.
- Preserve reduced-motion behavior and focus-visible styles during Liquid migration.
