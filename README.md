# Satya Fabricators Pvt Ltd — Official Website

> Leading manufacturer of industrial dished ends for pressure vessels, heat exchangers, boilers, and reactors. Cold pressing capacity from 150 to 1200 Tons. Located in Hyderabad, India.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Table of Contents

- [Overview](#overview)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Features](#features)
- [Products](#products)
- [Manufacturing Capabilities](#manufacturing-capabilities)
- [Certifications & Standards](#certifications--standards)
- [Getting Started](#getting-started)
- [Browser Support](#browser-support)
- [Contact](#contact)

---

## Overview

A modern, production-ready static website for **Satya Fabricators Pvt Ltd**, a well-established manufacturer of dished ends based in Hyderabad, India. The site is built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks or build tools required.

**Key Highlights:**
- 7 hydraulic presses (150T – 1200T capacity)
- Spinning up to 4200mm diameter (Blue Valley USA Model 10)
- Crown & Petal construction up to 10,000mm
- ASME, BS, IS, and IBR certified
- 48 industrial clients across India

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero banner, stats bar, capabilities, product grid, materials, certifications, lightbox gallery (9 images), customer list (48 clients), CTA |
| **About** | `about.html` | Company profile, press capacities table, spinning machine specs, facilities (list format with highlighted Heat Treatment Furnace), quality control, inspection agencies |
| **Products** | `products.html` | Detailed specs for Hemisphere, Semi-Ellipsoidal & Torispherical dished ends, plus 7 additional product types, lightbox gallery (17 images), materials, manufacturing codes |
| **Contact** | `contact.html` | Office address, phone, email, Google Maps embed, inquiry form with Google Apps Script backend (emails + Google Sheet logging) |

---

## Project Structure

```
satyafab-new/
├── index.html              # Home page
├── about.html              # About Us page
├── products.html           # Products & specifications
├── contact.html            # Contact information & inquiry form
├── css/
│   ├── styles.css          # Full design system & component styles (~1100 lines)
│   └── pages.css           # Page-specific styles for About, Products, Contact (~440 lines)
├── js/
│   └── script.js           # Interactions, animations, lightbox, form submission (~310 lines)
├── google-apps-script.js       # Google Apps Script backend (deploy to Google Sheets)
├── images/
│   ├── logo.jpg            # Company logo
│   ├── flash.jpg           # Hero banner & page header background
│   ├── hemispherical-dish-end.jpg
│   ├── ellipsoidal-dish-end.jpg
│   ├── torispherical-dish-end.jpg
│   ├── conical-dish-end.jpg
│   ├── flat-dish-end.jpg
│   ├── Flat-dish.jpeg
│   ├── flat-bottoms.jpg
│   ├── expansion-bellow.jpg
│   ├── inverted-heads.jpg
│   ├── dish-disc.jpg / dish-end.jpg
│   ├── super-duplex-dish-end.jpg
│   ├── carbon-steel-dish-end.jpg / stainless-steel-dish-end.jpg
│   ├── alloy-steel-dish-end.jpg / duplex-pipe-dish-end.jpg
│   ├── cupro-nickel-dish-end.jpg / monel-dish-end.jpg
│   ├── nickel-dish-end.jpg / hastelloy-dish-end.jpg
│   ├── inconel-dish-end.jpg / titanium-dish-end.jpg
│   ├── steel-factory.jpg
│   ├── HEMISPHERE-BY-PETAL-CONSTRUCTION.jpeg
│   ├── 5meter-ID-Dish-by-petal-&-Crown-construct.jpeg
│   ├── 5-meter-ID-Dish-by-petal-&-Crown-construction.jpeg
│   ├── Cone-by-petal-construction.jpeg / Cone.jpeg / cone1.jpeg
│   ├── assebled_petal_construction.jpeg     # Workshop gallery
│   ├── Dish-end_underprogress.jpeg          # Workshop gallery
│   ├── Hydraulic_Pressing_progress.jpeg     # Workshop gallery
│   ├── large_cone_inprogress.jpeg           # Workshop gallery
│   ├── moving_large_dishes_with builtin_and_external_crane_facilities.jpeg
│   ├── Multiple_orders_inprogress.jpeg      # Workshop gallery
│   ├── Petals_ready_to_deliver.jpeg         # Workshop gallery
│   ├── prepared_half_rings.jpeg             # Workshop gallery
│   ├── ready_half_rings.jpeg                # Workshop gallery
│   ├── Utilization_of_Crane_for_Large_Hydraulic_Press.jpeg
│   ├── List_of_Current_Customers.jpeg       # Reference document
│   ├── Available_Facilities_list.jpeg       # Reference document
│   ├── Inspection_agents_and_other_details.jpeg  # Reference document
│   ├── mobile_view_issue_observed.jpeg      # Bug reference screenshot
│   └── ... (46 images total)
├── .gitignore
└── README.md
```

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1a3a5c` | Steel blue — headers, nav, dark sections |
| `--color-primary-dark` | `#0f2640` | Darker variant for footer, overlays |
| `--color-accent` | `#d4630a` | Industrial orange — buttons, highlights, CTAs |
| `--color-accent-light` | `#f59e42` | Hover states, decorative accents |
| `--color-off-white` | `#f8fafc` | Alternate section backgrounds |
| Gray scale | `#f1f5f9` → `#0f172a` | 8 neutral shades for text and borders |

### Typography

- **Font Family:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Scale:** 0.75rem (xs) → 3rem (5xl) across 9 levels

### Spacing

13-step spacing scale from `0.25rem` (4px) to `6rem` (96px) using CSS custom properties.

### Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `1024px` | Tablets / small desktops |
| `768px` | Tablets portrait / large phones |
| `480px` | Mobile phones |

---

## Features

### UI & Interactions
- **Sticky header** with scroll-triggered background transition
- **Mobile navigation** — hamburger menu with slide-in sidebar, overlay, and ESC key close
- **Smooth scroll** for anchor links with header offset compensation
- **Scroll-reveal animations** — elements fade in as they enter the viewport
- **Counter animation** — stats bar values animate from 0 with easeOut easing
- **Responsive header** — logo and text scale down gracefully on mobile to prevent overlap with banner content
- **Lightbox modal** — full-screen image viewer with prev/next navigation and keyboard support
- **"Learn More About Us" button** — links from home capabilities section to full About page

### Lightbox Gallery
- **Index page:** 9-image thumbnail grid with full-screen lightbox modal viewer
- **Products page:** 17-image gallery covering petal construction, crane handling, pressing, half-ring components, and delivery
- Keyboard navigation (arrow keys, ESC to close)
- Click-outside-to-close, previous/next buttons, image counter
- Smooth transitions and responsive grid layout

### Capability & Certification Cards
- Image-free card design with orange top accent border
- Clean focus on technical content without visual clutter

### Facilities Section (About page)
- Heat Treatment Furnace displayed as a professional highlighted card with left accent border and approval badge
- Remaining facilities (Material Handling, Welding, Cutting, Grinding, Inspection) shown as compact list cards with arrow markers

### Page Headers
- Full-bleed background image (`flash.jpg`) with dark gradient overlay on About, Products, and Contact pages

### CTA Section
- Full-bleed product image background (`flat-dish-end.jpg`) with overlay for dramatic call-to-action

### Contact Form
- **Backend:** Google Apps Script — submissions saved to Google Sheet + email notification to client
- Client-side validation for required fields (name, email, subject, message)
- Email format regex validation
- Real-time error clearing on input
- Professional SVG success confirmation with "Back to Home" button
- Loading state on submit button ("Sending...")
- Country dropdown (India, USA, UK, UAE, Saudi Arabia, Germany, Japan, Other)
- Subject categories: Quote Request, General Inquiry, Technical Question, Factory Visit, Other

### Google Maps
- Embedded iframe pinned to exact factory location in Jeedimetla, Hyderabad

---

## Products

### Dished End Types

| Type | Max Diameter | Max Thickness | Method |
|------|-------------|---------------|--------|
| **Hemisphere** | 10,000mm | 100mm | Cold Pressing, Crown & Petal |
| **Semi-Ellipsoidal (2:1)** | 10,000mm | 100mm (CS) / 60mm (SS) | Cold Pressing, Crown & Petal |
| **Torispherical** | 10,000mm | 100mm | Cold Pressing, Crown & Petal |
| **Conical** | Custom | Custom | Custom cone angles |
| **Flat** | — | — | Low-pressure applications |
| **Inverted Special** | — | — | Custom configurations |
| **End Caps** | — | — | Standard & custom |
| **Flat Bottom** | — | — | Tanks & storage vessels |
| **Cone** | Custom | Custom | Specialized cone designs |
| **Super Duplex** | — | — | Offshore & chemical processing |

### Materials

- Carbon Steel
- Stainless Steel
- Cladded Steel
- Aluminum
- Super Duplex Steel
- Inconel
- Titanium

---

## Manufacturing Capabilities

### Press Capacities

| Press | Max Thickness | Span Diameter |
|-------|--------------|---------------|
| 150 Ton | 12mm | 3500mm |
| 250 Ton | 20mm | 4000mm |
| 400 Ton | 36mm | 4500mm |
| 600 Ton | 50mm | 5500mm |
| 800 Ton | 63mm | 5000mm |
| 1000 Ton | 80mm | 5500mm |
| 1200 Ton | 100mm | 3000mm |

### Spinning Machine

- **Model:** Blue Valley (USA) Model 10 — imported computerized
- **Diameter:** Up to 4200mm
- **Thickness:** 25mm MS / 20mm SS
- **Knuckle Rollers:** 90KR, 150KR, 200KR, 250KR, 300KR, 350KR, 400KR
- **OCF:** Computerized for identical dishes

### Heat Treatment Furnace

- Oil-fired: 4.2M × 4.5M × 2.0M (Height)
- Capacity: 15 Tons
- Approved by Lloyd's, IBR, EIL, BVI

### Quality Control (NDT)

- Penetrant Testing
- Ultrasonic Testing
- 100% Radiography on weld joints
- Magnetic Particle Testing
- Chemical & mechanical testing from recognized labs
- Calibration records maintained

---

## Certifications & Standards

### Manufacturing Codes

- ASME Section VIII, Division I & II
- BS 5500 & 1515
- IS 2825 & IS 4049
- Indian Boiler Regulations (IBR)

### Inspection Agencies

| # | Agency |
|---|--------|
| 1 | Lloyd's Register Asia |
| 2 | Bureau Veritas India (BVI) |
| 3 | Indian Boiler Regulations (IBR) |
| 5 | Engineers India Ltd (EIL) |
| 6 | TUV |
| 7 | NTPC |
| 8 | TPL |
| 9 | Indian Register of Shipping |

---

## Getting Started

No build tools required — this is a static website.

### Option 1: Open directly
```
Open index.html in any modern web browser.
```

### Option 2: Local server (recommended for proper asset loading)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy
This site can be deployed to any static hosting provider:
- **GitHub Pages** — Enable in repo Settings → Pages
- **Netlify** — Drag & drop the folder
- **Vercel** — Import from GitHub
- **Any web server** — Upload all files via FTP/SFTP

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Chrome | ✅ Latest |
| Mobile Safari | ✅ Latest |

---

## Contact

**Satya Fabricators Private Limited**

📍 Plot No: 1-B, Sy. No 308, Sri Venkateshwara Co-op Industrial Estate, Jeedimetla, Hyderabad – 500055, India

📞 040-2309 6737 / 040-2309 0432

📱 Managing Director (G.S. Reddy): +91 99490 98821

✉️ dishedend@satyafab.com | satyafab@bharatmail.co.in

🌐 [satyafab.com](http://www.satyafab.com)

📍 [View on Google Maps](https://maps.app.goo.gl/zT3RbiYQ4x1naDBF8)

---

© 2026 Satya Fabricators Pvt Ltd. All Rights Reserved.

---

## Recent Changes (May 2026)

- **SEO:** Added "Telangana, India" to all page `<title>` tags for better local search visibility
- **Customers:** Reordered customer list with priority clients at the top (BHEL, MEIL, ISGEC, Ashwini, Thermal Systems, Precision Equipments, Dynepro, KCP, Pennar)
- **Customers:** Added new clients — KRR Engg Pvt Ltd (#11) and Sakthi Hi-Tech Fabrications (#12)
- **Icons:** Replaced all emoji icons (📍📞📱✉️) with professional inline SVG icons (Feather style) in contact page details and footer across all pages
- **CSS:** Added `.contact-icon` styling with circular accent-colored badges for contact section headings
- **CSS:** Added `.footer__contact-item svg` styling for proper icon alignment in footer
- **Products Section:** Redesigned "Dished End Shapes & Types" cards to gallery-style layout matching the Workshop Gallery — full-bleed images with gradient overlay, hover zoom effect, and 4-column responsive grid
- **Products Page:** Added overlay structure to "Other Product Types" grid for consistent gallery-style display
- **About Page:** Replaced spinning machine card grid with single actual machine image (`spinning_machine.jpeg`) and detailed specs layout (diameter, thickness, knuckle rollers, OCF)
