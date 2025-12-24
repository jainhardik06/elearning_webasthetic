## Web & Mobile Application for Learning + Affiliate System

This project is an Onlearn-branded landing/front-end scaffold for a two-module platform:
- E-Learning module: students browse, buy, and complete courses.
- Affiliate module: promoters earn commissions with links/QRs and dashboards.
- Admin panel: centralized controls for courses, users, affiliates, payouts, and analytics.

### User journeys (at a glance)
- Aditi (student): explores categories, reviews, preview video → buys → gets "My Learning" access with video lessons, notes, progress, quizzes, certificate.
- Arjun (affiliate): registers + KYC → gets referral link/QR/creatives → tracks sales, PCSV/LCSV, team, rewards → requests monthly payouts.

### Core capabilities
**E-Learning**
- Discovery: categories, filters, trending, search; rich course detail (overview, instructor, structure, duration, students, preview video, pricing/discounts).
- Purchase & enrollment: cart + secure payments (UPI/cards/netbanking); instant course activation.
- Player: high-quality video, lesson navigation, resume, downloads (PDF/notes/slides).
- Assessment & certificates: MCQs/assignments, auto-grading where possible, auto-generated certificates (course, student, instructor, completion date).
- Instructor tools (admin/instructor-controlled): upload videos/materials, pricing, modules, enrollment/analytics.

**Affiliate**
- Registration/KYC with bank details and admin approval.
- Referral toolkit: unique link, QR, creatives; tracked sales and commissions.
- Dashboard: total earnings, sales, PCSV/LCSV, team size/performance, rewards, monthly payouts, career status.
- Career levels: Affiliate → Senior → Manager with increasing commissions/bonuses.
- Rewards (BRP): points on direct sales and team activity redeemable for gifts/gadgets/vouchers.
- Monthly payouts: request → admin verifies → bank transfer.

**Admin**
- Course management: approve, edit, categorize, price, disable.
- User/instructor/affiliate management: accounts, KYC, approvals.
- Commission config: PCSV/LCSV structure, performance tracking, payouts.
- Finance: payments, refunds, hold periods, commission audit.
- Reporting: sales, payouts, course analytics, affiliate earnings, top performers, growth.

### Tech stack & integrations (proposed)
- Frontend: Next.js (web), React Native (mobile).
- Backend: Node.js + Express.js.
- Database: MongoDB.
- Hosting: Hostinger / AWS / Azure.
- Integrations: Payment Gateway (Cashfree/Razorpay), Cashfree KYC, Firebase Notifications, AWS/Cloudflare for video hosting.

### Delivery roadmap
- Phase 1 – UI/UX (10–14 days): flows, web/mobile screens, course + affiliate + admin layouts; iterate until approved.
- Phase 2 – Frontend (12–15 days): implement Figma screens (web, mobile), responsive, animations; staging previews.
- Phase 3 – Backend & integration (12–15 days): auth/OTP, KYC, purchase flow, player backend, referrals, commissions, payouts, admin, notifications, deployment/testing.
- Total: ~30–40 days.

### Maintenance
- 1 year of maintenance (percentage basis): bug fixes, minor UI adjustments, backend stability improvements.

### Run locally (current web app)
```bash
npm install
npm run dev
# open http://localhost:3000
```

### Build & lint
```bash
npm run lint
npm run build
```

### Design implementation notes (current landing)
- Fonts: Manrope (sans) and Playfair Display (titles) via `next/font`.
- Palette: teal `#1aa6a0`, warm orange `#f15b2a`, mint backgrounds, dotted/gradient accents.
- Remote imagery: served from `images.unsplash.com` (allowed in `next.config.ts`). Replace with branded assets as needed in `src/app/page.tsx`.
