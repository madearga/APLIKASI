import { siteConfig } from "@/lib/config";
import Link from "next/link";

const links = [
  {
    group: "Tentang",
    items: [
      {
        title: "Tentang Kami",
        href: "/#tentang",
      },
      {
        title: "Profil Psikolog",
        href: "/#profil",
      },
      {
        title: "Layanan",
        href: "/#layanan",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    group: "Konten",
    items: [
      {
        title: "Artikel Kesehatan Mental",
        href: "/blog",
      },
      {
        title: "Tips & Edukasi",
        href: "/#resources",
      },
      {
        title: "Cerita Inspiratif",
        href: "/#stories",
      },
      {
        title: "Help Center",
        href: "/help",
      },
    ],
  },
  {
    group: "Legal",
    items: [
      {
        title: "Kebijakan Privasi",
        href: "/privacy",
      },
      {
        title: "Syarat & Ketentuan",
        href: "/terms",
      },
      {
        title: "Kode Etik",
        href: "/code-of-ethics",
      },
    ],
  },
];

export function FooterSection() {
  return (
    <footer role="contentinfo" className="py-8 sm:py-20 lg:pt-32">
      <div className="mx-auto max-w-6xl space-y-16 px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2 md:space-y-12">
            <Link href="/" aria-label="go home" className="block size-fit">
              <span className="h-5 flex items-center text-foreground font-semibold">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-muted-foreground text-balance text-sm">
              {siteConfig.description}
            </p>
          </div>

          <div className="col-span-3 grid gap-6 sm:grid-cols-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>

                <div className="flex flex-wrap gap-4 sm:flex-col">
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block duration-150"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-4">
              <span className="block font-medium">Hubungi Kami</span>
              <div className="flex flex-col text-sm text-muted-foreground gap-2">
                <Link href="mailto:counseling.iwannabringjoy@gmail.com" className="hover:text-primary">
                  Email: counseling.iwannabringjoy@gmail.com
                </Link>
                <Link href="mailto:iwannabringjoy@gmail.com" className="hover:text-primary">
                  Email: iwannabringjoy@gmail.com
                </Link>
                <Link href="/help" className="hover:text-primary">
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="bg-size-[6px_1px] h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-repeat-x opacity-25"
        />
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {siteConfig.name}, All rights
            reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}
