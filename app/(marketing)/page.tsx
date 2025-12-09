import { billingService } from "@/lib/billing";
import { PLANS } from "@/config/plans";
import { HeroSection } from "@/components/marketing/psychology/HeroSection";
import { FeaturesSection } from "@/components/marketing/psychology/FeaturesSection";
import { UseCasesSection } from "@/components/marketing/psychology/UseCasesSection";
import { AssessmentSection } from "@/components/marketing/psychology/AssessmentSection";
import { TestimonialsSection } from "@/components/marketing/psychology/TestimonialsSection";
import { StatsSection } from "@/components/marketing/psychology/StatsSection";
import { CTASection } from "@/components/marketing/psychology/CTASection";
import { TrustBadges } from "@/components/marketing/psychology/TrustBadges";
import { BentoFeatures } from "@/components/marketing/psychology/BentoFeatures";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      <TrustBadges />

      <FeaturesSection />

      <UseCasesSection />

      <AssessmentSection />

      <TestimonialsSection />

      <StatsSection />


      {billingService.isEnabled() && (
        <motion.section
          id="pricing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-28 sm:py-40"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-secondary border border-border text-xs font-bold tracking-wider text-primary uppercase">
                Harga Transparan
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
                Pilih paket yang <span className="text-muted-foreground/70 font-serif italic">sesuai kebutuhan</span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground/90 leading-relaxed font-medium">
                Semua paket termasuk trial gratis 14 hari. Ubah atau batalkan kapan saja.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {PLANS.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  custom={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`flex flex-col rounded-3xl bg-background border border-border p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.isPopular ? 'ring-2 ring-primary shadow-primary/20 scale-[1.02]' : ''}`}
                >
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="flex items-center justify-between gap-x-4 mb-5"
                    >
                      <h3
                        id={plan.id}
                        className={`text-xl md:text-2xl font-heading font-bold leading-8 ${plan.isPopular ? "text-primary" : "text-foreground"}`}
                      >
                        {plan.name}
                      </h3>
                      {plan.isPopular ? (
                        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold leading-5 text-primary">
                          Paling Populer
                        </span>
                      ) : null}
                    </motion.div>

                    <p className="text-md text-muted-foreground/80 mb-8 font-medium">{plan.description}</p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1), type: "spring", stiffness: 200 }}

                      className="mb-10 inline-flex items-baseline gap-x-1.5 bg-secondary px-3 py-2 rounded-lg"
                    >
                      <span className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                        {plan.price.displayAmount}
                      </span>
                      <span className="text-lg font-semibold leading-6 text-muted-foreground">
                        /{plan.price.interval === 'month' ? 'bln' : 'thn'}
                      </span>
                    </motion.div>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      role="list" className="space-y-4 text-md leading-7 text-muted-foreground/80"
                    >
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature.text}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) + (featureIndex * 0.05) }}
                          className="flex gap-x-4 items-center hover:text-foreground transition-colors"
                        >
                          <svg
                            className={`h-7 w-6 flex-none ${feature.included ? "text-primary" : "text-muted-foreground/40"}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-medium">{feature.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1), ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`mt-10 block w-full rounded-xl py-4 px-4 text-lg font-bold leading-7 text-center transition-all duration-300 active:scale-[0.98] ${plan.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/95 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
                      : "bg-secondary text-primary hover:bg-secondary/80 hover:-translate-y-0.5"
                      }`}
                    onClick={() => {
                      window.location.href = '/sign-up';
                    }}
                  >
                    Mulai Trial Gratis
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      <BentoFeatures />

      <CTASection />
    </main>
  );
}
