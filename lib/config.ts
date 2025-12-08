export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "I WANNA BRING JOY",
  title: process.env.NEXT_PUBLIC_APP_NAME
    ? `${process.env.NEXT_PUBLIC_APP_NAME} – Ruang berbagi dan edukasi kesehatan mental`
    : "I WANNA BRING JOY – Ruang berbagi dan edukasi kesehatan mental",
  description:
    process.env.NEXT_PUBLIC_APP_TAGLINE ||
    "Ruang berbagi keluh kesah tentang kehidupan dan edukasi tentang kesehatan mental. Kami ingin membantu dalam membangun kesadaran dan empati yang mendalam.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og.png",
  upgrade: {
    label: process.env.NEXT_PUBLIC_APP_NAME
      ? `Upgrade ${process.env.NEXT_PUBLIC_APP_NAME}`
      : "Upgrade",
    href: "/dashboard/billing",
  },
  links: {
    twitter: undefined,
    linkedin: undefined,
  },
  keywords: [
    "i wanna bring joy",
    "kesehatan mental",
    "konseling psikologi",
    "edukasi kesehatan mental",
    "ruang berbagi keluh kesah",
    "konseling online",
    "psikologi klinis",
    "terapi remaja",
    "terapi dewasa",
    "konselor sebaya",
  ],
  authors: [
    {
      name: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME || "I WANNA BRING JOY Team",
      url: process.env.NEXT_PUBLIC_APP_AUTHOR_URL || "https://iwannabringjoy.com",
    },
  ],
  creator: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME || "I WANNA BRING JOY Team",
  publisher: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME || "I WANNA BRING JOY Team",
  twitterHandle: undefined,
  locale: "id_ID",
  category: "Healthcare",
  // Email branding configuration
  email: {
    brandName: process.env.NEXT_PUBLIC_APP_NAME || "I WANNA BRING JOY",
    tagline:
      process.env.NEXT_PUBLIC_APP_TAGLINE ||
      "Ruang berbagi keluh kesah tentang kehidupan dan edukasi tentang kesehatan mental.",
    supportEmail:
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
      process.env.NEXT_PUBLIC_FROM_EMAIL ||
      "counseling.iwannabringjoy@gmail.com",
    fromEmail:
      process.env.NEXT_PUBLIC_FROM_EMAIL || "counseling.iwannabringjoy@gmail.com",
    fromName: process.env.NEXT_PUBLIC_APP_NAME || "I WANNA BRING JOY",
  },
};

export type SiteConfig = typeof siteConfig;
