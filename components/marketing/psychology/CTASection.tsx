"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-r from-primary to-muted-foreground">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="head-text-md text-balance text-primary-foreground">
          Siap Transformasikan Praktik Anda?
        </h2>

        <p className="mt-6 text-lg leading-8 text-secondary">
          Mulai trial gratis 14 hari. Tidak perlu kartu kredit.
          <br className="hidden sm:block" />
          Dapatkan akses penuh ke semua fitur premium.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-primary hover:bg-secondary/90 px-8 font-semibold"
          >
            <Link href="/sign-up">
              Mulai Trial Gratis
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-primary px-8"
          >
            <Link href="/demo">
              Request Demo
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-secondary">
            Atau hubungi kami untuk paket Enterprise →
          </p>
        </div>
      </div>
    </section>
  );
};

export { CTASection };