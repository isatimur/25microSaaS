# 25 MicroSaaS Challenge

Welcome to the 25 MicroSaaS Challenge website! This is where we're building and launching 25 micro-SaaS projects in 50 weeks. Our journey has just begun with our first project - the Daily Affirmations Chrome Extension!

## 🚀 Live Projects

1. **Daily Affirmations Chrome Extension** (Week 1-2)
   - [Chrome Web Store](https://chromewebstore.google.com/detail/daily-affirmations/nhhicimcipdgjckacooendaikhjhenle)
   - [Project Page](https://25microsaas.vercel.app/projects/daily-affirmations)
   - [Source Code](https://github.com/25microsaas/daily-affirmations)

## 🌟 Features

- 🎯 Project Progress Tracker
- 📧 Newsletter Integration
- 📝 Challenge Documentation
- 🎨 Modern UI with Tailwind CSS
- 🌐 SEO Optimized
- 📱 Fully Responsive Design

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** 
  - Radix UI
  - Shadcn/ui
  - Lucide Icons
- **Fonts:** Geist Font Family
- **Analytics:** Vercel Analytics
- **Database:** Neon (Serverless Postgres)
- **Deployment:** Vercel
- **Email:** Resend

## 📦 Project Structure

```
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── projects/       # Project pages
│   └── about/          # Static pages
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature components
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/           # Global styles
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/25microsaas/landing25microsaas.git
   cd landing25microsaas
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables:
   ```env
   RESEND_API_KEY=
   NEXT_PUBLIC_GA_MEASUREMENT_ID=
   DATABASE_URL=
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 🔧 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID | Yes |
| `DATABASE_URL` | Neon database connection URL | Yes |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification | No |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- Twitter: [@25microsaas](https://twitter.com/25microsaas)
- GitHub: [25microsaas](https://github.com/25microsaas)
- Website: [25microsaas.vercel.app](https://25microsaas.vercel.app)

## 🗂️ Project Repositories

All our projects are open source and available on GitHub:

1. [landing25microsaas](https://github.com/25microsaas/landing25microsaas) - Main website
2. [daily-affirmations](https://github.com/25microsaas/daily-affirmations) - Chrome Extension (Week 1-2)

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for hosting
- [Neon](https://neon.tech) for database
- [Resend](https://resend.com) for email service
- [Shadcn/ui](https://ui.shadcn.com) for UI components
- [Lucide](https://lucide.dev) for icons
