export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "My SaaS App",
  title: process.env.NEXT_PUBLIC_APP_NAME
    ? `${process.env.NEXT_PUBLIC_APP_NAME} – Production-ready SaaS boilerplate`
    : "SaaS Application – Production-ready boilerplate",
  description:
    process.env.NEXT_PUBLIC_APP_TAGLINE ||
    "A production-ready boilerplate for SaaS applications with authentication, billing, and modern UI components.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og.png",
  upgrade: {
    label: process.env.NEXT_PUBLIC_APP_NAME
      ? `Upgrade to ${process.env.NEXT_PUBLIC_APP_NAME} Pro`
      : "Upgrade to Pro",
    href: "/dashboard/billing",
  },
  links: {
    twitter: undefined,
    linkedin: undefined,
  },
  keywords: [
    "SaaS boilerplate",
    "Next.js starter kit",
    "subscription billing",
    "frontend design system",
    "authentication templates",
    "SaaS infrastructure",
    "productized boilerplate",
    "SaaS launch platform",
  ],
  authors: [
    {
      name: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME || "SaaS Team",
      url: process.env.NEXT_PUBLIC_APP_AUTHOR_URL || "https://example.com",
    },
  ],
  creator: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME || "SaaS Team",
  publisher: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME || "SaaS Team",
  twitterHandle: undefined,
  locale: "en_US",
  category: "Software",
  // Email branding configuration
  email: {
    brandName: process.env.NEXT_PUBLIC_APP_NAME || "My SaaS App",
    tagline:
      process.env.NEXT_PUBLIC_APP_TAGLINE ||
      "A production-ready SaaS application with authentication, billing, and modern UI.",
    supportEmail:
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
      process.env.NEXT_PUBLIC_FROM_EMAIL ||
      "support@example.com",
    fromEmail:
      process.env.NEXT_PUBLIC_FROM_EMAIL || "noreply@example.com",
    fromName: process.env.NEXT_PUBLIC_APP_NAME || "My SaaS App",
  },
};

export type SiteConfig = typeof siteConfig;
