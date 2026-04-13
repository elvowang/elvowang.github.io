"use client";
import basePath from "@/lib/basePath";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteNav = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = pathname.startsWith("/my-ai-explore");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/my-ai-explore", label: "My AI Explore" },
    { href: "/about", label: "About me" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  /* ── colour tokens driven by isDark ── */
  const scrolledBg = isDark
    ? "rgba(10,10,10,0.8)"
    : "rgba(255,255,255,0.8)";
  const scrolledBorder = isDark
    ? "rgba(255,255,255,0.08)"
    : "rgba(229,231,235,0.5)";

  const logoStyles: React.CSSProperties = isDark
    ? { backgroundColor: "#ededed", color: "#0a0a0a" }
    : { backgroundColor: "#111827", color: "#ffffff" };

  const linkColor = isDark ? "#ededed" : "#111827";
  const linkHoverColor = isDark ? "#a0a0a0" : "#6b7280";

  const activePillBg = isDark ? "#ededed" : "#111827";
  const activePillText = isDark ? "#0a0a0a" : "#ffffff";

  const cvBorderColor = isDark ? "#ededed" : "#111827";
  const cvTextColor = isDark ? "#ededed" : "#111827";
  const cvHoverBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.03)";

  const hamburgerColor = isDark ? "#ededed" : "#111827";

  const mobileBg = isDark ? "#1a1a1a" : "#ffffff";
  const mobileActiveText = isDark ? "#ededed" : "#111827";
  const mobileActiveBg = isDark ? "rgba(255,255,255,0.08)" : "#f3f4f6";
  const mobileInactiveText = isDark ? "#a0a0a0" : "#6b7280";
  const mobileCvBorder = isDark ? "#ededed" : "#111827";
  const mobileCvText = isDark ? "#ededed" : "#111827";

  return (
    <>
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          isScrolled
            ? {
                backgroundColor: scrolledBg,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: `1px solid ${scrolledBorder}`,
              }
            : { backgroundColor: "transparent" }
        }
      >
        <div
          className="py-4 flex items-center justify-between"
          style={{
            paddingLeft: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
            paddingRight: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
              style={logoStyles}
            >
              E
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full"
                style={
                  isActive(link.href)
                    ? { backgroundColor: activePillBg, color: activePillText }
                    : { color: linkColor }
                }
                onMouseEnter={(e) => {
                  if (!isActive(link.href))
                    e.currentTarget.style.color = linkHoverColor;
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href))
                    e.currentTarget.style.color = linkColor;
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* CV Link */}
            <a
              href={basePath + "/YingzhuWang_DesignLead_2026.pdf"}
              download
              className="text-sm font-medium px-4 py-2 rounded-full transition-colors"
              style={{
                color: cvTextColor,
                border: `1px solid ${cvBorderColor}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = cvHoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: hamburgerColor,
                transform: isMobileMenuOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <span
              className="w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: hamburgerColor,
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: hamburgerColor,
                transform: isMobileMenuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed right-0 top-0 h-screen w-64 z-40 transform transition-transform duration-300 overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: mobileBg }}
        >
          <div className="pt-20 px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium transition-all duration-200 px-4 py-2 rounded-lg"
                style={
                  isActive(link.href)
                    ? { color: mobileActiveText, backgroundColor: mobileActiveBg }
                    : { color: mobileInactiveText }
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CV Link */}
            <a
              href={basePath + "/YingzhuWang_DesignLead_2026.pdf"}
              download
              className="text-base font-medium px-4 py-2 rounded-lg text-center transition-colors"
              style={{
                color: mobileCvText,
                border: `1px solid ${mobileCvBorder}`,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* No spacer — nav floats over hero background */}
    </>
  );
};

export default SiteNav;
