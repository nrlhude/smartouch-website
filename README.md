# Smart Touch Technology — Official Website

![Smart Touch Technology](public/logo.png)

> **Building Smarter Workforces, Safer Operations.**  
> PAL is always with you.

A modern, fully responsive company website for **Smart Touch Technology Sdn Bhd** — Malaysia's leading provider of integrated HRMS, payroll automation, biometric attendance, access control, and workforce management solutions.

---

## Live Preview

```
npm install && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [React Router DOM v6](https://reactrouter.com/) | Client-side routing |
| [Font Awesome 6](https://fontawesome.com/) | Icons (CDN) |
| [Inter](https://fonts.google.com/specimen/Inter) | Typography (Google Fonts) |
| Plain CSS | Styling — no UI library |

---

## Project Structure

```
smartouch-website/
├── public/
│   └── logo.png                  # Smart Touch brand logo
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Router + layout wrapper
│   ├── index.css                 # Global design system (CSS variables)
│   ├── components/
│   │   ├── Navbar.jsx / .css     # Sticky navbar with dropdowns + mobile menu
│   │   ├── Footer.jsx / .css     # Footer with links, contact info & socials
│   │   └── WhatsAppWidget.jsx    # Floating WhatsApp chat button
│   └── pages/
│       ├── Home.jsx / .css       # Homepage — hero, products, FAQ, CTA
│       ├── Products.jsx / .css   # Full product catalogue (14 products)
│       ├── Solutions.jsx / .css  # Solutions by category + biometric types
│       ├── TimeClock.jsx / .css  # Time attendance deep-dive + phone mockup
│       ├── Pricing.jsx / .css    # Custom quote form + pricing FAQ
│       ├── Blog.jsx / .css       # Blog listing + newsletter signup
│       ├── About.jsx / .css      # Company story, timeline, philosophy
│       └── Contact.jsx / .css    # Contact form + live Google Maps embed
├── index.html
├── vite.config.js
└── package.json
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, stats, all product cards, industries, Why Choose Us, FAQ |
| `/products` | **Products** | 14 products across 5 categories with features list |
| `/solutions` | **Solutions** | HR, biometric, access control & construction solutions |
| `/time-clock` | **Time Clock** | Attendance methods, comparison table, SmartGoGo phone demo |
| `/pricing` | **Pricing** | Custom quote form, modular pricing explainer, FAQ |
| `/blog` | **Blog** | Featured article, 8 posts, category filter, newsletter |
| `/about` | **About Us** | Company story, mission, BAS platform, 8-milestone timeline |
| `/contact` | **Contact** | Contact form, office details, live Google Maps embed |

---

## Features

- **Responsive design** — mobile-first, tested at 1280px / 1024px / 768px / 480px
- **Sticky navbar** with mega-menu dropdowns (Products) and simple dropdown (Solutions)
- **Mobile hamburger menu** with smooth slide-in animation
- **Floating WhatsApp widget** with pre-filled message
- **Live Google Maps embed** of company office (Masai, Johor)
- **FAQ accordion** with open/close animation
- **Contact form** with React state validation and success state
- **Custom quote form** on Pricing page
- **Blog newsletter signup** form
- **CSS custom properties** — full design system in one place (`src/index.css`)
- **Scroll-to-top** on every route change
- **Zero external UI libraries** — 100% custom CSS

---

## Design System

Brand colours defined in `src/index.css`:

```css
--primary:       #CC1414   /* Smart Touch red  */
--primary-dark:  #a30f0f   /* Hover red        */
--primary-light: #fde8e8   /* Light red tint   */
--secondary:     #00B894   /* Green (CTA/check)*/
--navy:          #0A1628   /* Dark backgrounds */
--dark:          #1E293B   /* Body text        */
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/nrlhude/smartouch-website.git
cd smartouch-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy to any static host (Netlify, Vercel, cPanel, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

This is a static React SPA. Deploy the `dist/` folder to:

- **Netlify** — drag & drop `dist/` or connect GitHub repo
- **Vercel** — import GitHub repo, framework preset: Vite
- **cPanel / shared hosting** — upload contents of `dist/` to `public_html/`

> **Important:** For cPanel/Apache deployment, add a `.htaccess` file in `public_html/` to handle client-side routing:
> ```apache
> <IfModule mod_rewrite.c>
>   RewriteEngine On
>   RewriteBase /
>   RewriteRule ^index\.html$ - [L]
>   RewriteCond %{REQUEST_FILENAME} !-f
>   RewriteCond %{REQUEST_FILENAME} !-d
>   RewriteRule . /index.html [L]
> </IfModule>
> ```

---

## Company Information

**Smart Touch Technology Sdn Bhd**  
36-02 & 36-03, Jalan Permas 10,  
Bandar Baru Permas Jaya,  
81750 Masai, Johor, Malaysia

| Channel | Details |
|---|---|
| Phone | +607-388 9903 |
| Mobile | +6011-5354 9903 |
| Fax | +607-388 0628 |
| Email | sales@smartouch.com.my |
| Sales Contact | Mr Kenny — 012-7883383 |
| YouTube | [@smartime01](https://www.youtube.com/@smartime01) |
| WhatsApp | [Chat with us](https://wa.me/60127883383) |

---

## Products Covered

- Payroll System (EPF, SOCSO, EIS, PCB compliant)
- Time Attendance System
- Leave Management System
- Claims Management System
- Schedule System
- SmartGoGo Mobile App
- Biometric Authentication System (BAS)
- Visitor Management System (VMS)
- Canteen Subsidy Management
- Dormitory Management System
- Job Costing System
- Construction Site System
- Access Control System
- Barrier Solutions (Turnstile, Swing Barrier, Speed Gate)

---

## License

© 2026 Smart Touch Technology Sdn Bhd. All rights reserved.
