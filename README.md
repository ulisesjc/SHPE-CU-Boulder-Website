# SHPE CU Boulder — Chapter Website

Official website for the **Society of Hispanic Professional Engineers, University of Colorado Boulder Chapter**.

Live site: [cushpe.com](https://cushpe.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build tool | Vite 5 (SWC compiler) |
| Styling | Tailwind CSS 3 + CSS custom properties |
| UI components | shadcn/ui (Radix UI primitives) |
| Routing | React Router v6 |
| Icons | Lucide React |
| Notifications | Sonner |

---

## Project Structure

```
shpe-sparkle-site/
├── public/
│   ├── images/          # Board member photos, event photos, conference images
│   ├── medtroniclogo.png
│   ├── Trimblelogo.jpg
│   ├── eaton-logo-mobile.png
│   ├── corporate-packet.pdf
│   └── favicon.ico
└── src/
    ├── assets/          # Hero background images, SHPE logo
    ├── components/
    │   ├── Navigation.tsx   # Fixed top nav with mobile hamburger menu
    │   ├── Footer.tsx       # Site footer with links and contact info
    │   └── ui/              # shadcn/ui component library (Radix UI based)
    ├── hooks/
    │   ├── use-mobile.tsx   # Mobile breakpoint detection
    │   └── use-toast.ts     # Toast notification state
    ├── lib/
    │   └── utils.ts         # cn() class name utility (clsx + tailwind-merge)
    ├── pages/
    │   ├── Index.tsx        # Home — hero, mission, carousels, calendar, sponsors
    │   ├── About.tsx        # Chapter info — professional dev, service, familia
    │   ├── Board.tsx        # Board member gallery with social links
    │   ├── Events.tsx       # Google Calendar embed + Instagram posts
    │   └── NotFound.tsx     # 404 page
    ├── App.tsx              # Root — routing, providers, lazy page loading
    ├── index.css            # Tailwind directives + CSS custom properties + animations
    └── main.tsx             # React entry point
```

---

## Architecture

### Routing & Code Splitting

All pages are loaded via `React.lazy()` wrapped in a single `<Suspense>` boundary in [App.tsx](src/App.tsx). This means each page is its own JS chunk that is only downloaded when the user navigates to it, keeping the initial bundle small.

```
/ → Index (lazy)
/about → About (lazy)
/board → Board (lazy)
/events → Events (lazy)
* → NotFound (lazy)
```

### Pages

**[Index.tsx](src/pages/Index.tsx)**
- Hero section with fixed parallax background (`/images/MainConf2024.jpeg`)
- Mission section with three pillar cards (Awareness, Development, Support)
- Dual image carousel section — "Fun Moments" (auto-advances every 5s) and "Upcoming Events" (manual arrows), both powered by the shared `ImageCarousel` component defined in the same file
- Google Calendar iframe embed (URL stored in `GOOGLE_CALENDAR_URL` constant)
- Sponsor banner with CSS infinite scroll animation; sponsors defined in a single `sponsors` array and rendered twice for a seamless loop

**[About.tsx](src/pages/About.tsx)**
- Alternating image/card grid layout for Professional Development, Community Service, and Familia sections
- All images use `loading="lazy"`
- Link to national SHPE organization

**[Board.tsx](src/pages/Board.tsx)**
- Static `boardMembers` array defined at module level (not inside the component)
- 3-column responsive grid of member cards with profile photo, name, position, major, year
- Email and LinkedIn buttons only render when the field is populated
- All profile images use `loading="lazy"`

**[Events.tsx](src/pages/Events.tsx)**
- Google Calendar iframe in a 2/3-width column
- Instagram embed in the sidebar — script loaded once via `useEffect`, with a guard to avoid duplicate injection
- "Stay Connected" card with Instagram follow link

### Shared Components

**[Navigation.tsx](src/components/Navigation.tsx)**
- `navItems` array defined at module level (static, never recreated)
- Active route highlighted via `useLocation()`
- Mobile hamburger menu with CSS slide animation

**[Footer.tsx](src/components/Footer.tsx)**
- SHPE branding, quick links, contact info, social media links

### Styling

- **Tailwind CSS** for all layout and utility classes
- **CSS custom properties** in `index.css` for the color system, gradients, shadows, and transitions
- **Color palette**: primary grey `hsl(220 9% 25%)`, accent gold `hsl(45 70% 65%)` (CU Boulder brand)
- **Custom animations**: `fade-in`, `slide-in-right`, `slide-up`, `float`, `scroll` (sponsor banner)
- Dark mode variables defined but not currently active

### Build & Bundling

Vite is configured with `manualChunks` to split the output into logical cache groups:

| Chunk | Contents |
|---|---|
| `vendor` | `react`, `react-dom` |
| `router` | `react-router-dom` |
| `ui` | `@radix-ui/react-tooltip`, `lucide-react` |
| `[page-name]` | Each lazy page as its own chunk |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```sh
# Clone the repo
git clone https://github.com/ulisesjc/shpe-sparkle-site.git
cd shpe-sparkle-site

# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Updating Content

### Adding a sponsor
Open [src/pages/Index.tsx](src/pages/Index.tsx) and add an entry to the `sponsors` array:
```ts
const sponsors = [
  { src: "/medtroniclogo.png", alt: "Medtronic" },
  { src: "/your-new-logo.png", alt: "Company Name" }, // add here
];
```
Place the logo file in `public/`.

### Updating board members
Open [src/pages/Board.tsx](src/pages/Board.tsx) and edit the `boardMembers` array at the top of the file. Add the member's photo to `public/images/`.

### Updating the photo gallery (home page)
Edit the `galleryImages` or `upcomingEventsImages` arrays at the top of [src/pages/Index.tsx](src/pages/Index.tsx).

### Updating the Google Calendar
Replace the `GOOGLE_CALENDAR_URL` constant in [src/pages/Index.tsx](src/pages/Index.tsx) and the `googleCalendarUrl` variable in [src/pages/Events.tsx](src/pages/Events.tsx) with your calendar's public embed URL.
*(Google Calendar > Settings > Integrate calendar > copy the iframe `src`)*

### Adding Instagram posts to the Events page
Add post IDs to the `instagramPosts` array in [src/pages/Events.tsx](src/pages/Events.tsx):
```ts
const instagramPosts = [
  "POST_ID_HERE", // from https://www.instagram.com/p/POST_ID_HERE/
];
```

---

## Deployment

The site is configured for static hosting (a `_redirects` file is included for Netlify/Vercel SPA routing).

```sh
npm run build   # outputs to dist/
```

Deploy the `dist/` folder to Netlify, Vercel, or any static host.
