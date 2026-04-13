import type { Metadata } from "next";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import ScrollReveal from "@/components/scroll-reveal";
import ThemeManager from "@/components/theme-manager";
import PasswordGate from "@/components/password-gate";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elvo Wang — Product Design Lead",
  description: "Product design lead specializing in UX/IA, AI workflows, and design systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2MK9HEZ2Z3"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2MK9HEZ2Z3');
        `}} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <PasswordGate>
          <GoogleAnalytics />
          <SiteNav />
          <ThemeManager />
          {children}
          <SiteFooter />
          <ScrollReveal />
          <div id="nav-overlay" />
        </PasswordGate>
      </body>
    </html>
  );
}
