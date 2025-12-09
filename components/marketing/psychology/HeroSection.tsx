"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Calendar } from "lucide-react";

const WarmBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none bg-background overflow-hidden">
    {/* Soft warm gradient mesh */}
    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-secondary/80 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#e8e1d9]/60 rounded-full blur-[100px] mix-blend-multiply opacity-50" />

    {/* Grid Lines (Craft Signal) - Subtle warm grey */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#78461c08_1px,transparent_1px),linear-gradient(to_bottom,#78461c08_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
  </div>
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden"
    >
      <WarmBackground />

      {/* Craft Signal: Numbering */}
      <div className="absolute top-40 left-6 md:left-12 hidden lg:block">
        <span className="font-mono text-xs text-muted-foreground/60 tracking-widest writing-vertical-rl rotate-180">01 / HOME</span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-primary/20 to-transparent mt-4 mx-auto" />
      </div>

      <div className="container px-6 mx-auto md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* LEFT: Text Content */}
          <div className="text-center lg:text-left">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/10 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 group">
              <span className="flex w-2 h-2 bg-primary/70 rounded-full animate-pulse group-hover:animate-none" />
              <span className="text-xs font-bold tracking-wider text-primary uppercase">
                Platform Kesehatan Mental
              </span>
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.12] mb-7 tracking-tight">
              Transformasikan <br className="hidden md:block" />
              <span className="text-muted-foreground/80 font-serif italic font-normal hover:text-muted-foreground transition-colors duration-300">Praktik Psikologi</span> <br className="hidden md:block" />
              Anda
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 mb-10 text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-medium">
              Platform terintegrasi untuk profesional kesehatan mental.
              Kelola pasien, assessment, sesi terapi, dan billing dengan aman dan efisien — semua dalam satu dashboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Button
                asChild
                size="lg"
                className="relative group overflow-hidden rounded-xl bg-primary text-primary-foreground px-10 py-6 font-semibold transition-all hover:bg-primary/95 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/25 active:translate-y-0 active:scale-[0.99]"
              >
                <Link href="/sign-up">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-3">
                    Mulai Trial Gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="px-10 py-6 rounded-xl text-foreground hover:bg-secondary/60 hover:text-primary transition-all duration-300 font-semibold"
              >
                Lihat Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground font-medium">
              14 hari trial gratis • Tidak perlu kartu kredit
            </p>
          </div>

          {/* RIGHT: Visual Content (Profile Card) */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto perspective-1000">
              <motion.div
                className="animate-float"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/50 shadow-2xl shadow-primary/20 bg-white/50 backdrop-blur-md group">
                  {/* The Image */}
                  <Image
                    src="/agni.JPG"
                    alt="Andrea M. Agniwijaya, M.Psi., Psikolog"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 448px"
                  />

                  {/* Soft Gradient Overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#452912]/90 via-transparent to-transparent opacity-95" />

                  {/* Floating Badge: Years */}
                  <div className="absolute top-6 right-6 flex items-center justify-center w-20 h-20 rounded-full bg-[#faf7f5]/95 backdrop-blur-xl border border-white/60 shadow-xl shadow-primary/10">
                    <div className="text-center text-primary">
                      <div className="text-2xl font-heading font-bold">5+</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans">Tahun</div>
                    </div>
                  </div>

                  {/* Card Content (Bottom) */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#faf7f5]/95 backdrop-blur-xl border border-white/60 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-secondary rounded-full text-primary shadow-lg">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h3 className="text-foreground font-heading font-bold text-xl leading-tight mb-1">Andrea M. Agniwijaya</h3>
                        <p className="text-muted-foreground text-sm font-semibold tracking-wide">M.Psi., Psikolog Klinis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Blobs behind */}
              <motion.div
                initial={{ scale: 0, x: 50, y: -50 }}
                animate={{ scale: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 80 }}
                className="absolute -top-8 -right-8 w-40 h-40 bg-[#e8e1d9] rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"
              />
              <motion.div
                initial={{ scale: 0, x: -50, y: 50 }}
                animate={{ scale: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, delay: 0.6, type: "spring", stiffness: 80 }}
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"
              />

              {/* Craft Signal: Noodle */}
              <motion.svg
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-10 w-24 h-24 text-primary/10"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path d="M10,10 Q50,90 90,10" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
              </motion.svg>
            </div>

            {/* Background decorative typography behind image (Subtle Watermark) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.02 }}
              transition={{ duration: 2, delay: 1.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 whitespace-nowrap opacity-[0.02] select-none pointer-events-none"
            >
              <span className="text-[10rem] md:text-[12rem] font-serif italic text-foreground">Joy</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
