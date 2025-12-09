"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Card Variants for Reusable Styling
const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }),
    hover: {
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const BentoFeatures = () => {
    return (
        <section className="py-28 sm:py-40 bg-background relative overflow-hidden">
            {/* Section Header */}
            <div className="container px-6 mx-auto md:px-12 max-w-7xl relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-secondary border border-border text-xs font-bold tracking-wider text-primary uppercase">
                        Fitur Unggulan
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
                        Platform yang <span className="text-muted-foreground/70 font-serif italic">Mengerti Kebutuhan Anda</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground/90 leading-relaxed font-medium">
                        Solusi komprehensif yang dirancang khusus untuk meningkatkan efisiensi praktik psikologi Anda.
                    </p>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] opacity-70"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[100px] opacity-60"
                />
            </div>

            <div className="container px-6 mx-auto md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(300px,auto)]">

                    {/* Main Block (Large) - Assessment */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-2 row-span-1 md:row-span-1 rounded-3xl bg-secondary/60 border border-border p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="relative z-10 max-w-lg">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-white/60 border border-black/5 text-xs font-bold tracking-wider text-primary uppercase hover:bg-white/80 transition-all duration-300">
                                <Zap size={16} className="text-orange-500" /> Insight
                            </div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                                Assessment Psikologi Komprehensif
                            </h3>
                            <p className="text-lg text-muted-foreground/90 mb-10 text-balance leading-relaxed font-medium">
                                Lebih dari sekadar skor. Dapatkan gambaran utuh kondisi pasien dengan alat tes terstandarisasi yang terintegrasi langsung.
                            </p>

                            <Button variant="ghost" className="group/btn p-0 hover:bg-transparent hover:text-primary md:mb-0 text-base font-semibold">
                                Pelajari Assessment
                                <ArrowRight className="ml-3 w-5 h-5 transition-all group-hover/btn:translate-x-1" />
                            </Button>
                        </div>

                        {/* Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 0.9, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                            className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[450px] opacity-90 transition-transform duration-700 group-hover:scale-105"
                        >
                            <Image
                                src="/assets/bento-assessment.png"
                                alt="Psychological Assessment Illustration"
                                width={500}
                                height={500}
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Side Block (Tall) - Security */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-1 row-span-1 md:row-span-2 rounded-3xl bg-[#1e1e1e] border border-black/10 p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group"
                    >
                        {/* Dark theme specifically for this card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                                className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-8 text-orange-500"
                            >
                                <ShieldCheck size={28} />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 leading-snug">
                                Aman &<br />Rahasia
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-10 text-lg font-medium">
                                Data pasien dilindungi dengan enkripsi tingkat bank. Kepatuhan HIPAA & regulasi lokal terjamin.
                            </p>
                            <div className="flex flex-col gap-5 mt-auto">
                                {[
                                    { label: "AES-256 Encryption" },
                                    { label: "Audit Logs Lengkap" },
                                    { label: "Auto-Backup" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                                        className="flex items-center gap-4 text-base text-white/70 hover:text-white/90 transition-colors"
                                    >
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, delay: 1 + (i * 0.3), repeat: Infinity }}
                                            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                        />
                                        <span>{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Abstract circular decorative lines */}
                        <motion.svg
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                            className="absolute -bottom-12 -right-12 text-white/10 w-72 h-72 animate-spin-slow duration-[30s]"
                            viewBox="0 0 100 100"
                            fill="none"
                        >
                            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                        </motion.svg>
                    </motion.div>

                    {/* Bottom Block - Connection */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:col-span-2 row-span-1 rounded-3xl bg-[#f0e7db] border border-border p-8 md:p-12 relative overflow-hidden flex items-center group"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 w-full">
                            <div>
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-wider text-primary uppercase hover:bg-primary/20 transition-all duration-300">
                                    <Heart size={16} /> Care Logic
                                </div>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                                    Koneksi Tanpa Batas
                                </h3>
                                <p className="text-muted-foreground/90 text-balance text-lg leading-relaxed font-medium">
                                    Telehealth terintegrasi, penjadwalan otomatis, dan pengingat sesi. Fokus pada pasien, bukan administrasi.
                                </p>
                            </div>

                            {/* Visual Representation - Chat bubbles */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative h-[220px] w-full flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    {/* Connection lines */}
                                    <svg className="absolute inset-0 w-full h-full text-primary/20" viewBox="0 0 200 100" preserveAspectRatio="none">
                                        <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <path d="M0,70 Q50,20 100,70 T200,70" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                                    </svg>

                                    {/* Floating 'Chat' bubbles simulations - with typing animation */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-[20%] left-[20%] bg-white p-4 rounded-2xl rounded-bl-sm shadow-xl border border-primary/10 max-w-[140px]"
                                    >
                                        <div className="flex gap-1 mb-2">
                                            <motion.div
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                                className="w-2 h-2 bg-med bg-muted rounded-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                                className="w-2 h-2 bg-muted rounded-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                                className="w-2 h-2 bg-muted rounded-full"
                                            />
                                        </div>
                                        <div className="h-2 w-20 bg-muted rounded-full mb-2" />
                                        <div className="h-2 w-12 bg-muted rounded-full" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-[20%] right-[20%] bg-primary text-primary-foreground p-4 rounded-2xl rounded-br-sm shadow-xl max-w-[140px]"
                                    >
                                        <div className="h-2 w-24 bg-white/40 rounded-full mb-2" />
                                        <div className="h-2 w-16 bg-white/40 rounded-full" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Pulse effect */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export { BentoFeatures };
