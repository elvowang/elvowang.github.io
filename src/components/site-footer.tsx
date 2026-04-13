"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const linkStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#9ca3af",
  textDecoration: "none",
  transition: "color 0.3s ease",
  display: "block",
  lineHeight: "2.2",
};

const columnTitleStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#e5e7eb",
  marginBottom: "8px",
  lineHeight: "2.2",
};

const SiteFooter = () => {
  const pathname = usePathname();
  const isDark = pathname.startsWith("/my-ai-explore");

  const footerBg = isDark ? "#0a0a0a" : "#111827";
  const topBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "none";

  return (
    <footer
      style={{
        background: footerBg,
        borderTop: topBorder,
        color: "white",
        padding: "64px max(40px, calc((100vw - 1440px) / 2 + 40px)) 48px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "48px",
        }}
      >
        {/* Left side */}
        <div style={{ maxWidth: "420px" }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.3px",
              marginBottom: "16px",
            }}
          >
            Elvo Wang
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            More projects and experiences are always on the way. Let&apos;s keep
            in touch!
          </p>
          <p style={{ fontSize: "13px", color: "#6b7280" }}>
            &copy; 2026 Elvo Wang. All Rights Reserved.
          </p>
        </div>

        {/* Right side — link columns */}
        <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
          {/* Connect */}
          <div>
            <div style={columnTitleStyle}>Connect</div>
            <a
              href="mailto:yzwang04@gmail.com"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/elvo-yingzhu-wang/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              LinkedIn
            </a>
          </div>

          {/* About */}
          <div>
            <div style={columnTitleStyle}>About</div>
            <Link
              href="/about"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              About Me
            </Link>
            <Link
              href="/contact"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              Contact
            </Link>
          </div>

          {/* Explore */}
          <div>
            <div style={columnTitleStyle}>Explore</div>
            <Link
              href="/my-ai-explore"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              AI Explore
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
