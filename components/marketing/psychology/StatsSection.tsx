"use client";

import { Users, FileText, ShieldCheck, Video } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatsSection = () => {
  const stats: StatItem[] = [
    {
      icon: <Users className="h-6 w-6 text-muted" />,
      value: "500+",
      label: "Profesional Terdaftar",
    },
    {
      icon: <FileText className="h-6 w-6 text-muted" />,
      value: "50.000+",
      label: "Assessment Terselesaikan",
    },
    {
      icon: <Video className="h-6 w-6 text-muted" />,
      value: "25.000+",
      label: "Sesi Telehealth",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-muted" />,
      value: "99.9%",
      label: "Uptime & Secure",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-primary to-muted-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-sm text-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { StatsSection };
