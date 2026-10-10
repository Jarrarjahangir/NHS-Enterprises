# NHS Enterprises (NHS ENT Accounting & Tax Consultancy)

[![Website Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://github.com/Jarrarjahangir/NHS-Enterprises)
[![Design System](https://img.shields.io/badge/Aesthetic-Dubai%20Private%20Banking%20Luxury-B89A62)](https://github.com/Jarrarjahangir/NHS-Enterprises)
[![Vite](https://img.shields.io/badge/Build-Vite%20%2B%20React-blue)](https://vitejs.dev/)
[![Images](https://img.shields.io/badge/Assets-100%25%20WebP%20Optimized-success)](https://github.com/Jarrarjahangir/NHS-Enterprises)

An institutional-grade digital experience and web application for **NHS Enterprises** (*legal entity: NHS ENT Accounting & Tax Consultancy*), an established Dubai accounting, audit, corporate tax, and financial advisory firm based in Port Saeed, Deira, United Arab Emirates.

---

## 🏛️ Official Corporate Profile

- **Legal Entity**: NHS ENT Accounting & Tax Consultancy
- **Primary Brand**: NHS Enterprises
- **Headquarters**: Office 302-4, Al Babtain Building, Port Saeed, Deira, Dubai, United Arab Emirates
- **Postal Code Reference**: 282952
- **Direct Landline**: [+971 4 254 3004](tel:+97142543004)
- **Direct Mobile / WhatsApp**: [+971 50 691 3880](tel:+971506913880)
- **Official Domain**: [nhsenterprises.com](https://nhsenterprises.com)

---

## ✨ Key Platform Features & Luxury Interactive Controls

### 1. Bespoke Luxury Form Controls
- **Accessible Custom Select (`CustomSelect.jsx`)**: Designed in accordance with WAI-ARIA combobox/listbox specifications. Replaces generic OS bright-blue select dropdowns with a curated palette of warm ivory, thin borders (`#E7E1D7`), gold checkmarks, and champagne-gold accent selection.
- **Enterprise Turnover Range Slider (`TurnoverRangeSlider.jsx`)**: Interactive continuous range control for business qualification. Features active champagne-gold fill, polished circular thumb with gold inner dot, formatted AED currency badges (`< AED 3M`, `AED 3M – 15M`, `AED 15M – 50M`, `AED 50M+`), and keyboard/touch navigation.
- **Unified Text Inputs & Textareas**: Consistent 48px baseline height, subtle focus rings, high-contrast typography, and accessible error handling.

### 2. Interactive Executive Carousel (`TestimonialsSection.jsx`)
- Client testimonial carousel with previous/next controls, active slide index counter (`01 / 03`), pagination dots, and native mobile touch swipe gestures.

### 3. High-Performance WebP Asset Pipeline
- 100% of photographic and hero imagery across services, industries, and insights converted to `.webp` format for sub-second page loads and optimal mobile performance.

### 4. Technical SEO & Local Business Structured Data
- Complete Schema.org `AccountingService` JSON-LD configuration in `index.html`.
- Dynamic sitemap (`/sitemap.xml`) and search crawler directives (`/robots.txt`).

---

## 🎨 Luxury Design System Tokens

```css
:root {
  --color-primary: #101C2C;       /* Midnight Navy */
  --color-primary-dark: #0A121D;  /* Deep Navy */
  --color-bg: #FAF8F3;            /* Warm Ivory */
  --color-accent: #B89A62;        /* Champagne Gold */
  --color-accent-hover: #9E814D;  /* Rich Gold */
  --color-border: #E7E1D7;        /* Soft Ivory Border */
  --color-border-subtle: #F0EAE1; /* Hairline Border */
  --color-hover-bg: #F5F1E9;      /* Subtle Neutral Hover */
  --color-text-secondary: #667085;/* Muted Slate */
  --color-text-primary: #111214;  /* Deep Charcoal Text */
  --radius-sm: 4px;
  --transition-fast: 160ms cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-dropdown: 0 12px 32px rgba(16, 28, 44, 0.12), 0 2px 6px rgba(16, 28, 44, 0.04);
}
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Routing**: React Router DOM 7
- **Styling**: Vanilla CSS Design System Tokens (No ad-hoc utility clutter)
- **Icons**: Lucide React
- **Image Optimization**: Sharp (WebP @ 85% quality)
- **Linting**: Oxlint

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Jarrarjahangir/NHS-Enterprises.git

# Navigate to the project root
cd NHS-Enterprises

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License & Attribution

Copyright © 2026 NHS Enterprises (NHS ENT Accounting & Tax Consultancy). All rights reserved. Office 302-4, Al Babtain Building, Port Saeed, Deira, Dubai, UAE.
