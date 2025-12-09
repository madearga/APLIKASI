import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { constructMetadata } from "@/lib/constructMetadata";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cn } from "@/lib/utils";

const fontHeading = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          GeistSans.variable,
          GeistMono.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <div className="min-h-screen bg-background">
              <main>{children}</main>
            </div>
            <Toaster />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
