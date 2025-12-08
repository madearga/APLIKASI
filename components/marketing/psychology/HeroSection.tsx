"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="overflow-hidden border-b [--color-border:var(--border-illustration)]"
    >
      <div className="relative">
        <div className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-28 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="relative text-center lg:text-left">
              <h1 className="head-text-lg text-balance text-foreground">
                Transformasikan Praktik
                <br />
                <span className="">
                  Psikologi
                </span>
                <span className="relative">
                  {" "}
                  <span className="relative">
                    Anda
                  </span>
                </span>
              </h1>
              <p className="text-muted-foreground mb-9 mt-7 text-balance text-lg">
                Platform terintegrasi untuk profesional kesehatan mental. Kelola pasien, assessment,
                sesi terapi, dan billing dengan aman dan efisien — semua dalam satu dashboard.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 border-transparent px-6 text-sm shadow-lg"
              >
                <Link href="/sign-up">
                  Mulai Trial Gratis
                </Link>
              </Button>
              <span className="text-muted-foreground mt-3 block text-center lg:text-left text-sm">
                14 hari trial gratis • Tidak perlu kartu kredit
              </span>
            </div>

            {/* Right: Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-border">
                  <Image
                    src="/agni.JPG"
                    alt="Andrea M. Agniwijaya, M.Psi., Psikolog"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                  {/* Overlay gradient for better readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Decorational badges */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-lg px-4 py-3 shadow-lg ring-1 ring-border">
                  <div className="text-sm font-semibold text-foreground">Andrea M. Agniwijaya</div>
                  <div className="text-xs text-muted-foreground">Psikolog Klinis</div>
                </div>

                <div className="absolute -top-4 -right-4 bg-card rounded-full w-16 h-16 flex items-center justify-center shadow-lg ring-1 ring-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Tahun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
