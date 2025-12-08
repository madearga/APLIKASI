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
        <section id="pricing" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Paket Harga</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pilih paket yang sesuai kebutuhan
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Semua paket termasuk trial gratis 14 hari. Ubah atau batalkan kapan saja.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex flex-col rounded-3xl bg-white shadow-lg ring-1 ring-gray-200 xl:p-10 p-8 ${plan.isPopular ? 'ring-2 ring-indigo-600 shadow-indigo-200' : ''}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={plan.id}
                        className={`text-lg font-semibold leading-8 ${plan.isPopular ? "text-indigo-600" : "text-gray-900"}`}
                      >
                        {plan.name}
                      </h3>
                      {plan.isPopular ? (
                        <span className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                          Paling Populer
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>

                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {plan.price.displayAmount}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /{plan.price.interval === 'month' ? 'bln' : 'thn'}
                      </span>
                    </p>

                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex gap-x-3">
                          <svg
                            className={`h-6 w-5 flex-none ${feature.included ? "text-indigo-600" : "text-gray-400"}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`mt-8 block w-full rounded-md py-2 px-3 text-sm font-semibold leading-6 text-center ${
                      plan.isPopular
                        ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                        : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                    }`}
                    onClick={() => {
                      window.location.href = '/sign-up';
                    }}
                  >
                    Mulai Trial Gratis
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
