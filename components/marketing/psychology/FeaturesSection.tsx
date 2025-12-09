"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Calendar, FileText, BarChart3, Video } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="text-muted-foreground">{children}</div>
);

const FeaturesSection = () => {
  const features: FeatureCard[] = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Manajemen Pasien Terenkripsi",
      description:
        "Simpan profil pasien dengan enkripsi end-to-end. HIPAA-compliant dan aman dengan backup otomatis.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Assessment Otomatis",
      description:
        "PHQ-9, GAD-7, Beck Depression, MMSE, dan 20+ tes psikologi lainnya dengan scoring otomatis.",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Telehealth Terintegrasi",
      description:
        "Video call aman built-in dengan enkripsi end-to-end. Tidak perlu Zoom atau Skype terpisah.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Penjadwalan Cerdas",
      description:
        "Booking online dengan reminder otomatis via email dan SMS. Kalender terintegrasi dengan Google/Outlook.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Progress Tracking Visual",
      description:
        "Grafik progress pasien secara visual. Bandingkan hasil assessment sepanjang waktu untuk evaluasi treatment.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vault Dokumen HIPAA",
      description:
        "Penyimpanan dokumen dengan enkripsi AES-256. Audit trail lengkap untuk kepatuhan regulasi.",
    },
  ];

  return (
    <section id="features" className="pt-8 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">Fitur Unggulan</h2>
          <p className="head-text-md text-balance text-foreground mt-2">
            Semua yang Anda butuhkan dalam satu platform
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Dirancang khusus untuk profesional kesehatan mental dengan fitur terintegrasi
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow">
              <CardHeader>
                <FeatureIcon>{feature.icon}</FeatureIcon>
              </CardHeader>
              <CardTitle className="font-heading text-xl text-foreground mt-6">{feature.title}</CardTitle>
              <CardContent className="mt-3 px-0">
                <p className="text-base leading-7 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
