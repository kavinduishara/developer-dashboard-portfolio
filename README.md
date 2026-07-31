# Developer Portfolio

A modern, animated developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Responsive one-page portfolio with animated sections
- Sticky navigation and scroll progress indicator
- Project grid and individual project detail pages
- Contact form endpoint that posts to `/api/contact`
- Dark mode support with system preference by default

## Environment variables
- `RESEND_API_KEY` (optional): set this if you want the contact form to send real emails through Resend.

Example:
```bash
RESEND_API_KEY=your_key_here
```

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the optional `RESEND_API_KEY` environment variable if you want real email delivery.
