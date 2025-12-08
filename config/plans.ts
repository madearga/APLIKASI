export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    interval: "month" | "year" | "one_time";
    displayAmount: string;
  };
  features: PlanFeature[];
  polarProductId?: string;
  stripePriceId?: string;
  isPopular?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "professional-monthly",
    name: "Professional",
    description: "Untuk praktik psikologi yang berkembang dan klinik kelompok.",
    price: {
      amount: 799000, // Rupiah value (will be converted to appropriate format)
      currency: "IDR",
      interval: "month",
      displayAmount: "Rp 799.000/bln",
    },
    features: [
      { text: "Maksimum 100 pasien", included: true },
      { text: "Semua assessment (PHQ-9, GAD-7, dll)", included: true },
      { text: "Video call terintegrasi", included: true },
      { text: "Support prioritas", included: true },
      { text: "5 user untuk tim klinik", included: true },
    ],
    isPopular: true,
    polarProductId: process.env.NEXT_PUBLIC_POLAR_PRO_PRODUCT_ID,
  },
  {
    id: "starter-monthly",
    name: "Starter",
    description: "Sempurna untuk praktisi individu dan konselor independen.",
    price: {
      amount: 299000,
      currency: "IDR",
      interval: "month",
      displayAmount: "Rp 299.000/bln",
    },
    features: [
      { text: "Maksimum 20 pasien", included: true },
      { text: "Assessment dasar (PHQ-9, GAD-7)", included: true },
      { text: "Video call terintegrasi", included: true },
      { text: "Support via email (48 jam)", included: true },
      { text: "1 user konselor", included: true },
    ],
    polarProductId: process.env.NEXT_PUBLIC_POLAR_STARTER_PRODUCT_ID,
  },
  {
    id: "enterprise-monthly",
    name: "Enterprise",
    description: "Untuk klinik besar dan jaringan layanan kesehatan mental.",
    price: {
      amount: 1999000,
      currency: "IDR",
      interval: "month",
      displayAmount: "Rp 1.999.000/bln",
    },
    features: [
      { text: "Pasien tidak terbatas", included: true },
      { text: "Semua assessment premium", included: true },
      { text: "Telehealth dengan white-label", included: true },
      { text: "Support prioritas 24/7 dan onboarding", included: true },
      { text: "User tidak terbatas", included: true },
      { text: "Integrasi EHR kustom", included: true },
    ],
    polarProductId: process.env.NEXT_PUBLIC_POLAR_ENTERPRISE_PRODUCT_ID,
  },
];
