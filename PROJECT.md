# Rixos Lounge — Project Documentation

## Overview

A luxury digital menu web app for **Rixos Club & Lounge**, a restaurant/lounge in Ibadan, Nigeria. Built as a QR-code-scannable menu experience with premium aesthetics and smooth animations.

**Live URL:** `https://rixoslounge.com`  
**Physical Location:** Opp OMOOKE Hotel, Bravo, Akala Exp Road, Ibadan, NG

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Motion (Framer Motion v12) |
| Icons | Lucide React |
| Fonts | Playfair Display (serif), Satoshi (sans) via Fontshare |
| Package Manager | pnpm |

---

## Project Structure

```
lounge/
├── app/
│   ├── layout.tsx              # Root layout, fonts, global metadata
│   ├── globals.css             # Design tokens, Tailwind theme, utilities
│   ├── page.tsx                # Intro animation → redirects to /lounge
│   ├── sitemap.ts              # XML sitemap for SEO
│   ├── lounge/
│   │   └── page.tsx            # Lounge menu page
│   └── restaurant/
│       └── page.tsx            # Steakhouse menu page
├── components/
│   ├── layout/
│   │   ├── Intro.tsx           # Fullscreen logo splash (2.5s)
│   │   ├── Navbar.tsx          # Scroll-aware sticky nav
│   │   ├── Hero.tsx            # Page header with bg image + greeting
│   │   └── Footer.tsx          # Contact, hours, social links
│   └── menu/
│       ├── MenuSection.tsx     # Tab filter + category grid
│       ├── CollapsibleCategory.tsx  # Animated accordion category
│       └── MenuItem.tsx        # Individual item (name, price, description)
├── data/
│   └── menu.ts                 # All menu data (~57KB, static)
└── types/
    └── menu.ts                 # TypeScript interfaces
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Animated intro splash screen → auto-pushes to `/lounge` after 2.5s |
| `/lounge` | Lounge menu — Drinks, Food, Shisha tabs |
| `/restaurant` | Steakhouse menu — Drinks, Food tabs |

---

## Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `rixos-black` | `#0b0b0b` | Primary background |
| `rixos-gold` | `#f4ef0e` | Accent, active states, price text |
| `rixos-white` | `#f5f5f5` | Primary text |

### Typography
- **Serif** — Playfair Display (headings, section titles, item names)
- **Sans** — Satoshi (body, labels, navigation)

### Utilities
- `.grain` — Fixed SVG noise texture overlay at 5% opacity for premium texture
- `.no-scrollbar` — Hides scrollbar cross-browser
- Scroll progress bar — 2px gold line at top of viewport using `useScroll` + `useSpring`

---

## Key Components

### `Intro`
- Fullscreen black splash with logo fade-in + gold hairline animation
- Triggered on `/`, fires `onComplete` callback when exit animation finishes

### `Navbar`
- Fixed, transparent by default
- Becomes `bg-rixos-black/40 backdrop-blur-xl` after scrolling 50px
- Active route highlighted in `rixos-gold`

### `Hero`
- 450px header with blurred background image (Unsplash)
- Time-aware greeting: Good Morning / Afternoon / Evening
- Bouncing `ChevronDown` scroll indicator

### `MenuSection`
- Tab group: **All / Drinks / Food** (+ **Shisha** on Lounge only)
- Selecting a tab auto-opens the first category in that group
- 2-column grid on `lg+`, single column on mobile
- `AnimatePresence` with `popLayout` for smooth category transitions

### `CollapsibleCategory`
- Accordion-style expand/collapse with height animation
- Gold left-border title, rotates chevron on open/close
- Items separated by subtle `divide-white/5`

### `MenuItem`
- Name (serif, hover → gold), price (auto-prefixed with `₦`), italic description
- `whileInView` entrance animation (once)

---

## Data Model

```ts
interface MenuItem {
  id: string;
  name: string;
  price: string;       // stored without ₦ prefix, added at render time
  description: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface MenuSection {
  title: string;           // e.g. "Lounge" | "Restaurant"
  backgroundTitle: string; // large watermark text behind heading
  categories: MenuCategory[];
}
```

Exported constants from `data/menu.ts`:
- `LOUNGE_MENU` — Full lounge menu (Drinks, Food, Shisha)
- `RESTAURANT_MENU` — Steakhouse menu (Drinks, Food)

---

## SEO

- **Metadata** — Title template, description, OG tags, Twitter card in `layout.tsx`
- **Sitemap** — `/sitemap.xml` via `app/sitemap.ts` (3 URLs, weekly frequency)
- **JSON-LD** — `Restaurant` schema on both `/lounge` and `/restaurant` pages
- **metadataBase** — `https://rixoslounge.com`
- **Locale** — `en_NG`

---

## Social & Contact

| Channel | Link |
|---|---|
| Instagram | [@rixosclubandlounge](https://www.instagram.com/rixosclubandlounge) |
| WhatsApp | [wa.me/message/R3UL7H26XEG4I1](https://wa.me/message/R3UL7H26XEG4I1) |
| Google Maps | [Get Directions](https://maps.app.goo.gl/BwhEJN4XpxDfGgZF7) |
| Hours | Opens daily at 10:00 AM |

---

## Development

```bash
# Install
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Start production
pnpm start
```
