# Peuls Project — Freelance Website Project Documentation

> **Status:** Discovery phase · Drop 01 SS26 · Munich  
> **Last updated:** June 2026

---

## 🧠 Project Overview

| Field | Details |
|---|---|
| Client | Peuls Project |
| Type | Brand website + future e-commerce |
| Drop | Drop 01 · SS26 · Munich |
| Stage | Pre-launch / Discovery |
| My role | Web developer + creative consultant |

---

## 🎯 Client Brief

Peuls Project is a premium slow-fashion brand based in Munich, currently in its early launch phase. The brand sits at the intersection of West African identity and modern European minimalism, guided by a clear philosophy: **Not From Here. Not From There. From Both.**

For Drop 01 (SS26), they want a website that communicates brand identity first, with e-commerce functionality planned for a future phase.

**What they want:**
- A bold, premium, fashion-forward brand experience with a dark visual base and high-contrast highlights.
- NOT a traditional online store feel (main priority is storytelling and brand presence).
- Strong storytelling and brand presence across all core pages.
- Foundation ready for future e-commerce activation.

### Client Direction Update (June 2026)

Client confirmed full alignment with the visual identity system and wants it preserved as the core of the experience.

**Locked (must stay close to concept):**
- Color palette.
- Typography direction.
- Brand tone and voice.
- Product presentation language.

**Open for creative improvement (developer/design freedom):**
- Layout composition.
- Spacing system and rhythm.
- Interaction patterns and motion.

**Primary UX priority (non-negotiable):**
- First impression must feel **premium, editorial, and rare**.
- Avoid standard storefront patterns if they reduce brand aura.
- Protect brand feeling over conventional e-commerce structure in Phase 1.

**Checklist (Phase 1 requirements):**
- [ ] Homepage with strong visual branding and storytelling.
- [ ] About Peuls Project / Brand Story page.
- [ ] Collection page (current and future drops).
- [ ] Product pages for garments (required in Phase 1).
- [ ] Contact page.
- [ ] Newsletter sign-up / waitlist.
- [ ] Instagram integration.
- [ ] Mobile-first responsive design.
- [ ] Compliance with GDPR and German legal requirements.

**Brand references:**
- [Nude Project](https://nude-project.com/en-de)
- [Jufure](https://jufure.com/en-de)

---

## 🎨 Brand Assets

| Asset | Status |
|---|---|
| Brand story / written content | ✅ Ready |
| Color palette | ✅ Defined |
| Logo | ✅ Available |
| Product concepts | ✅ Ready |
| Drop 01 samples | ✅ In hand |
| Product photography (professional) | ⚠️ Not available yet |
| Lifestyle photography | ✅ Available (outdoor, natural light) |
| Typography display (Lora Serif direction) | ✅ Defined |
| Communication tone of voice | ⚠️ Final copy system pending |
| Social media assets | ⚠️ Not available yet |

### Color Palette
- **Deep Black:** #0A0A09
- **Bone:** #E8E2D5
- **Gold (Fulani Gold):** #C9973A
- **Off-White:** #F0EBE0

### Drop 01 Products
- PP.01 Uniform Tee — Bone
- PP.01 Uniform Tee — Deep Black
- PP.02 Cropped Tee — Bone
- Limited to **100 pieces only**

---

## 🏗️ Proposed Site Structure

### Phase 1 — Brand Launch Site
> Build now. No checkout yet. Product pages are included in this phase.

| Page | Purpose |
|---|---|
| Home | Strong storytelling, hero visual, brand statement, highlighted products |
| Drop 01 Collection | Lookbook-style product presentation with drop metadata |
| Product Pages | Individual garment storytelling and specs for each SKU/colorway |
| About / Philosophy | Brand story, origin, identity, manifesto |
| Contact | Direct communication channel and social routing |
| Newsletter / Waitlist | Capture audience before launch |

### Phase 2 — E-commerce Activation
> Activate when product photography and operations are ready.

- Cart + checkout.
- Order management.
- Inventory and shipping operations.

---

## 📐 Concept Requirement Expansion (from Website Concept PDF)

### 1) Information Architecture and Scope Rules
- Phase 1 must include all core brand pages plus product detail pages.
- Collection architecture must support future drops/seasons (not only Drop 01).
- Product pages must be linkable from collection cards and homepage highlights.
- Newsletter/waitlist must be available as a section and may also exist as a dedicated page or modal.
- Footer must include legal links (Privacy Policy + Impressum) from first launch.

### 2) Homepage Requirements
- Hero must prioritize editorial lifestyle photography over storefront grid behavior.
- Primary composition should preserve dark base + image-led storytelling + gold accent CTA.
- Navigation should stay minimal: logo, key links, and clear CTA (Notify Me / Waitlist).
- Include recurring scarcity signal: **100 pieces only**.
- Include drop metadata line in consistent format: **DROP 01 · SS26 · MUNICH**.
- Include product preview area with at least one featured card and clear route to collection/product pages.
- Include one philosophy statement moment on homepage using brand motto.
- Include newsletter/waitlist capture section on homepage.

### 3) Product Page Requirements (Phase 1 Mandatory)
- Product hero area with strong lifestyle image and optional alternate detail images.
- Product metadata panel must include:
  - SKU naming (e.g., PP.01 Uniform Tee).
  - Colorway selector/swatches.
  - Fabric and weight details (where available).
  - Fit guidance.
  - Monogram/detail notes.
  - Scarcity statement (100 pieces only).
- Primary CTA in Phase 1 is **Notify me when available** (no checkout flow yet).
- Include clear return navigation to collection/drop context.
- Include alternative colorways for same product family when available.
- Include edition note language to reinforce limited release and no restock policy.

### 4) About / Philosophy Page Requirements
- Must prominently feature the manifesto:
  - Not from here.
  - Not from there.
  - From both.
- Include brand origin narrative (West African identity + European minimalism).
- Include short explanation of "uniform" concept and slow-fashion intent.
- Include proof points block (drop number, piece count, season).
- Use editorial layout with large typography and supporting lifestyle image.
- End with CTA toward newsletter/waitlist or collection exploration.

### 5) Collection Page Requirements
- Drop header must show drop code, season, and location.
- Must show piece limitation messaging.
- Product grid should mix a featured large card plus supporting cards.
- Product cards need hover/focus behavior with clear destination to product pages.
- Include visual badge system for status markers (e.g., New, Drop metadata).
- Structure must support archiving future drops without redesign.

### 6) Mobile Requirements
- Mobile-first navigation with compact header and accessible menu behavior.
- Full-bleed hero treatment on mobile where possible.
- Grids collapse into single-column rhythm with readable spacing.
- Product CTA remains visible and easy to tap on small screens.
- Touch targets minimum 48px for primary interactive controls.
- Inputs/buttons in newsletter and contact forms must be tap-friendly.
- Responsive image handling must preserve product legibility (no critical crop loss).

### 7) Interaction and Motion Requirements
- Subtle on-scroll reveal motion for section entrances.
- Card and button hover/focus states use gold accent for interaction feedback.
- Transition timing should feel intentional and premium (not overly fast).
- Smooth anchor scrolling allowed for editorial page flow.
- Motion must degrade gracefully on low-power devices.
- Add reduced-motion support via `prefers-reduced-motion`.

### 8) Content and Copy Tokens (Consistency Rules)
- Keep SKU pattern consistent: `PP.0X Name`.
- Reuse scarcity phrase consistently: **100 pieces only**.
- Reuse drop line consistently: **DROP 01 · SS26 · MUNICH**.
- Keep manifesto wording and punctuation consistent across pages.
- Use invitation language for CTA copy (Notify me, Discover, Learn), avoid aggressive sales wording.

### 9) Non-Functional Brand Constraints
- Visual tone must remain premium, editorial, and rare.
- Photography direction: outdoor, natural light, lifestyle-first until pro studio assets exist.
- Preserve whitespace and rhythm; avoid dense commerce-first compositions.
- Typography hierarchy must maintain elegant serif headline moments + clean body text support.
- Accessibility and readability cannot be sacrificed for aesthetics.
- Performance target: optimize media and lazy-load below-fold visuals where possible.

---

## 🛠️ Tech Stack

**Recommended: Shopify (custom theme approach)**

| Option | Pros | Cons |
|---|---|---|
| Shopify (custom theme) | E-commerce native, stable delivery path, code-friendly for HTML/CSS workflows | Design freedom depends on custom development quality |
| Webflow | Full visual design freedom, premium aesthetic | New learning curve + slower first delivery |
| Custom (Next.js) | Full control | Overkill for now, high risk |

**Decision:** Shopify is still the target platform for long-term e-commerce activation.

**Implementation order:**
1. Build and validate high-fidelity static HTML/CSS/JS experience first.
2. Adapt approved sections into Shopify (`.liquid` + CSS + JS) without losing visual direction.

**Shopify price reference:**
- First 3 months: 1€/month (trial)
- After trial: 22€/month (Basic)
- Custom domain: ~14€/year (extra)

---

## 💶 Budget Reference (internal — do not share yet)

| Scope | Market rate Spain | My range (first client) |
|---|---|---|
| Brand site only | 400€ – 800€ | ~500€ |
| Brand site + e-commerce | 800€ – 1.500€ | ~700€–900€ |

> ⚠️ Do not give price or timeline until scope is fully confirmed.

---

## 📅 Timeline

> No dates committed yet.

**Next steps before confirming timeline:**
1. Align final page list and Phase 1 deliverables with client.
2. Lock homepage + product + collection + philosophy layout direction.
3. Build HTML/CSS prototype for all required Phase 1 pages.
4. Validate mobile behavior, accessibility baseline, and performance baseline.
5. Then propose timeline + price based on confirmed scope.

---

## 💬 Communication Log

### Message sent (discovery close)

> *"For this, I'm thinking of using a setup that already supports e-commerce in the background (such as Shopify/Webflow-based architecture). This way, the foundation of the site is built in a way that makes future product launches and online sales much smoother, without needing major restructuring later on.*
>
> *It was actually very helpful that you mentioned the e-commerce plans early — this allows us to design the structure properly from the beginning, instead of adapting it later in a more limited way.*
>
> *Before moving into a final proposal with timeline and cost, I'd like to take a few days to explore the best setup and study your references in more detail. I also want to test and refine a few layout directions so I can suggest something that truly fits the brand.*
>
> *My idea would be to prepare a small initial direction (homepage concepts / visual structure ideas), so we can align early on the style and direction before building everything out."*

**Status:** Sent ✅ · Awaiting response

---

## ⚠️ Risk Log

| Risk | Level | Notes |
|---|---|---|
| No professional photography | 🟡 Medium | Lifestyle photos exist and are usable for Phase 1, but detail consistency risk remains |
| Shopify design quality risk | 🟡 Medium | Avoid generic outcome by building custom sections and visual rules |
| HTML/CSS adaptation effort | 🟡 Medium | Markup must be integrated into Liquid section structure |
| High aesthetic expectations | 🟡 Medium | References and concept set a premium editorial bar |
| Scope creep | 🟠 Medium-High | Keep Phase 1 and Phase 2 clearly separated in proposal |
| Accessibility vs. visual complexity | 🟡 Medium | Motion, contrast, and touch targets must be validated early |
| Performance pressure from image-heavy layout | 🟡 Medium | Optimize and lazy-load below-fold media |
| Pricing too early | 🟢 Managed | Holding price until scope confirmed |

---

## ✅ My Action Items

- [ ] Confirm concept copy tokens with client (manifesto, scarcity text, drop line format).
- [ ] Finalize Phase 1 sitemap and required templates (home, collection, product, about, contact, waitlist).
- [ ] Define reusable section inventory and component rules (badges, metadata rows, CTA blocks, image modules).
- [ ] Build complete HTML/CSS prototype for all Phase 1 pages.
- [ ] Validate mobile behavior, reduced-motion mode, and touch target baseline.
- [ ] Prepare legal pages and consent flow placeholders for GDPR/Impressum.
- [ ] After scope lock, prepare timeline and pricing proposal.

---

## ⚖️ Legal & Privacy (GDPR)

This project must comply with EU/German privacy requirements. As the developer, I will implement the technical privacy setup (legal pages, consent tooling, and third-party mapping). Final legal wording and sign-off must be provided or approved by the client or legal counsel.

Minimum launch items:
- Privacy Policy (Datenschutzerklaerung)
- Impressum (Germany)
- Cookie/consent banner that blocks non-essential scripts until consent
- Footer links to legal pages (privacy + impressum)
- Newsletter/waitlist form notice explaining data use
- List of third-party services (fonts, analytics, embeds) and how they are handled

Shopify note: Shopify provides templates and technical features to support compliance, but does not replace legal review for Germany/EU-specific requirements.

Action: request legal copy and review approval from client before go-live.
