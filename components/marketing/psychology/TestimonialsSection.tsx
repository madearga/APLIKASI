"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Platform ini mengubah cara saya mengelola praktik. Assessment otomatis menghemat 5 jam per minggu dan pasien saya merasa lebih terlibat dengan progress tracking visual.",
      author: "Dr. Sari Wulandari, M.Psi.",
      role: "Psikolog Klinis, Jakarta",
      rating: 5,
    },
    {
      quote:
        "Pasien saya suka fitur secure messaging. Mereka merasa lebih terhubung antar sesi dan lebih nyaman berbagi pemikiran sebelum pertemuan berikutnya.",
      author: "Budi Santoso, S.Psi.",
      role: "Terapis Perkawinan, Surabaya",
      rating: 5,
    },
    {
      quote:
        "Sistem billing asuransi yang terintegrasi mengurangi 80% waktu saya di paperwork. Sekarang saya bisa fokus pada yang terpenting — pasien.",
      author: "Dr. Dewi Lestari, M.Psi.",
      role: "Konselor Trauma, Bandung",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">
            Dipercaya oleh Profesional
          </h2>
          <p className="head-text-md text-balance text-foreground mt-2">
            Apa Kata Pengguna Kami
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Lebih dari 500+ profesional kesehatan mental telah meningkatkan praktik mereka
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card p-10 shadow-xl shadow-primary/10 ring-1 ring-border rounded-2xl"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-muted-foreground" />

              <div className="pt-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-lg font-medium text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4 border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm mt-1">Profesional Terdaftar</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10.000+</div>
              <div className="text-sm mt-1">Sesi Terapi Dikelola</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm mt-1">Rating Rata-Rata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
