"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, Building2, Users, Hospital } from "lucide-react";

interface UseCaseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const UseCasesSection = () => {
  const useCases: UseCaseCard[] = [
    {
      icon: <UserCircle className="h-8 w-8" />,
      title: "Praktisi Individu",
      description:
        "Untuk psikolog, konselor, dan terapis yang praktik mandiri.",
      features: [
        "Manajemen hingga 20 pasien",
        "Assessment otomatis",
        "Video call terintegrasi",
        "Billing dan invoicing",
        "Kalender personal",
      ],
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Klinik Kelompok",
      description:
        "Untuk klinik dengan beberapa praktisi yang bekerja sama.",
      features: [
        "Maksimum 100 pasien",
        "5 user konselor/psikolog",
        "Koordinasi tim",
        "Shared calendar",
        "Supervisor dashboard",
      ],
    },
    {
      icon: <Hospital className="h-8 w-8" />,
      title: "Jaringan Klinik",
      description:
        "Untuk organisasi kesehatan mental dengan multiple locations.",
      features: [
        "Pasien tidak terbatas",
        "User tidak terbatas",
        "White-label telehealth",
        "Integrasi EHR kustom",
        "Support 24/7+",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">
            Untuk Semua Skala Praktik
          </h2>
          <p className="head-text-md text-balance text-foreground mt-2">
            Solusi yang fleksibel untuk setiap kebutuhan
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Dari praktisi individu hingga jaringan klinik besar
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="flex flex-col border-border">
              <CardHeader>
                <div className="text-muted-foreground">{useCase.icon}</div>
                <CardTitle className="font-heading text-xl text-foreground mt-6">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{useCase.description}</p>
                <ul className="mt-6 space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary text-xs font-semibold">
                          ✓
                        </div>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { UseCasesSection };
