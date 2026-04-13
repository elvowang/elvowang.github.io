"use client";
import basePath from "@/lib/basePath";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <style>{`
        @keyframes aurora {
          from { background-position: 50% 50%, 50% 50%; }
          to   { background-position: 350% 50%, 350% 50%; }
        }

        .hero-aurora {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          overflow: hidden;
        }

        .hero-aurora::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(to bottom, transparent, white);
          z-index: 2;
          pointer-events: none;
        }

        .aurora-bg {
          position: absolute;
          inset: -10px;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.50;
          will-change: transform;
          background-image:
            repeating-linear-gradient(100deg, white 0%, white 7%, transparent 10%, transparent 12%, white 16%),
            repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #e9d5ff 25%, #60a5fa 30%);
          background-size: 300% 200%;
          background-position: 50% 50%;
          filter: blur(10px) invert(1);
          mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
        }

        .aurora-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(100deg, white 0%, white 7%, transparent 10%, transparent 12%, white 16%),
            repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #e9d5ff 25%, #60a5fa 30%);
          background-size: 200% 100%;
          background-attachment: fixed;
          mix-blend-mode: difference;
          animation: aurora 60s linear infinite;
        }

        .hero {
          position: relative;
          z-index: 1;
          padding: 120px 40px 80px;
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-label {
          font-family: 'Courier New', monospace;
          font-size: 13px;
          color: #9ca3af;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -1.5px;
          color: #111827;
          max-width: 800px;
          margin-bottom: 28px;
        }

        .hero h1 span {
          color: #9ca3af;
        }

        .hero-bio {
          font-size: 17px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 620px;
        }

        .section {
          padding: 80px 40px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .section-label {
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: 700;
          color: #374151;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .cs-featured {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .cs-card {
          border-radius: 12px;
          overflow: hidden;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #f3f4f6;
        }

        .cs-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-2px);
        }

        .cs-featured .cs-card {
          display: grid;
          grid-template-columns: 1.073fr 1fr;
        }

        .cs-featured .cs-card-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px;
        }

        .cs-featured .cs-card-tag {
          font-size: 13px;
          margin-bottom: 16px;
        }

        .cs-featured .cs-card-title {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.8px;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .cs-featured .cs-card-desc {
          font-size: 16px;
          line-height: 1.6;
        }

        .cs-featured .cs-card-image {
          border-radius: 0;
          aspect-ratio: 1.227;
          background: #f2f3f5;
          overflow: hidden;
        }

        .cs-featured .cs-card-image img {
          border-radius: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cs-card-image {
          width: 100%;
          aspect-ratio: 16/9;
          background: #f9fafb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 14px;
          font-family: 'Courier New', monospace;
          position: relative;
          overflow: hidden;
        }

        .cs-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
        }

        .cs-card-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.03) 100%);
        }

        .cs-card-body {
          padding: 28px 32px 32px;
        }

        .cs-card-tag {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .cs-card-title {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
          color: #111827;
        }

        .cs-card-desc {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
        }

        .cs-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .cs-grid-2 .cs-card-image {
          aspect-ratio: 2.24;
        }

        .cs-grid-2 .cs-card-body {
          padding: 20px 24px 24px;
        }

        .cs-grid-2 .cs-card-title {
          font-size: 18px;
        }

        .cs-grid-2 .cs-card-desc {
          font-size: 14px;
        }

        .cs-grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }

        .cs-grid-3 .cs-card-image {
          aspect-ratio: 4/3;
        }

        .cs-grid-3 .cs-card-body {
          padding: 20px 24px 24px;
        }

        .cs-grid-3 .cs-card-title {
          font-size: 18px;
        }

        .cs-grid-3 .cs-card-desc {
          font-size: 14px;
        }

        .contact-section {
          text-align: center;
          padding: 80px 40px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .contact-section h2 {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -1px;
          color: #111827;
          margin-bottom: 16px;
        }

        .contact-section p {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 32px;
        }

        .contact-links {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .contact-link {
          padding: 12px 28px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          color: #111827;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        @media (max-width: 900px) {
          .cs-featured .cs-card {
            grid-template-columns: 1fr;
          }

          .cs-grid-2 {
            grid-template-columns: 1fr;
          }

          .cs-grid-3 {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 80px 24px 80px;
          }

          .hero h1 {
            letter-spacing: -1px;
          }

          .section {
            padding: 60px 24px;
          }

          .cs-featured .cs-card-body {
            padding: 32px 24px;
          }

          .cs-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero with Aurora Background */}
      <div className="hero-aurora">
        <div className="aurora-bg"></div>
        <section className="hero">
          <h1 className="reveal">
            Hey, I'm Elvo Wang. <span>a passionate product design lead.</span>
          </h1>
          <p className="hero-bio reveal">
            With 11 years experience through various cities, I've now settled in
            Hong Kong. I hold a strong passion on crafting an exceptional user
            experience, turning business needs into solutions, and simplifying
            life for users. By spearheading a thriving team and fostering their
            growth, I am able to find the value of myself.
          </p>
        </section>
      </div>

      {/* Case Studies (2021–2026) */}
      <section className="section case-studies" style={{ paddingTop: "0" }}>
        <div className="section-label">Case Studies &middot; 2021–2026</div>

        {/* Featured: 4 Large cards (reverse chronological) */}
        <div className="cs-featured">
          {/* Card 1: CeFi & DeFi Integration */}
          <Link href="/projects/cefi-defi">
            <div className="cs-card reveal">
              <div className="cs-card-body">
                <div className="cs-card-tag">
                  OKX &middot; App &middot; 2025
                </div>
                <div className="cs-card-title">Cefi & Defi Integration</div>
                <div className="cs-card-desc">
                  Integrate Centralised-financial and Decentralised-financial
                  platforms to thrive the users for both sides
                </div>
              </div>
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/cefi-defi-card-media.jpg"}
                  alt="CeFi DeFi Integration screens"
                  width={400}
                  height={326}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>

          {/* Card 2: MFA Module */}
          <Link href="/projects/security">
            <div className="cs-card reveal">
              <div className="cs-card-body">
                <div className="cs-card-tag">
                  OKX &middot; App &middot; 2024
                </div>
                <div className="cs-card-title">MFA module</div>
                <div className="cs-card-desc">
                  Multi-factor authenticator module widely used in all journeys
                  in OKX app
                </div>
              </div>
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/home-mfa-card.jpg"}
                  alt="MFA Module screens"
                  width={400}
                  height={326}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>

          {/* Card 3: User Onboarding Revamp */}
          <Link href="/projects/onboarding">
            <div className="cs-card reveal">
              <div className="cs-card-body">
                <div className="cs-card-tag">
                  OKX &middot; App &middot; 2023
                </div>
                <div className="cs-card-title">User Onboarding Revamp</div>
                <div className="cs-card-desc">
                  A cross-functional initiative to redesign the end-to-end new
                  user onboarding journey
                </div>
              </div>
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/onboarding-card-wide.jpg"}
                  alt="User Onboarding screens"
                  width={400}
                  height={326}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>

          {/* Card 4: Assets Deposit & Withdrawal */}
          <Link href="/projects/assets-dw">
            <div className="cs-card reveal">
              <div className="cs-card-body">
                <div className="cs-card-tag">
                  OKX &middot; App &middot; 2023
                </div>
                <div className="cs-card-title">
                  Design Thinking Project in Assets Deposit & Withdrawal
                </div>
                <div className="cs-card-desc">
                  Upgrade Assets deposit and withdrawal journeys through leading
                  design thinking
                </div>
              </div>
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/home-assets-card.jpg"}
                  alt="Assets Deposit & Withdrawal screens"
                  width={400}
                  height={326}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Full-width: HSBC Design System (2020–2022) */}
        <div className="section-label reveal" style={{ marginTop: "60px" }}>
          Design System &middot; 2020–2022
        </div>
        <div className="cs-featured">
          <Link href="/projects/hsbc">
            <div className="cs-card reveal">
              <div className="cs-card-body">
                <div className="cs-card-tag">HSBC &middot; Design System</div>
                <div className="cs-card-title">Global IA Guideline</div>
                <div className="cs-card-desc">
                  Build up Information Architecture guideline in design system
                  team for HSBC One App globally
                </div>
              </div>
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/hsbc-cover.png"}
                  alt="HSBC IA Guideline cover"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>
        </div>

        {/* 2-col: Past Projects (2015–2020) */}
        <div className="section-label reveal" style={{ marginTop: "60px" }}>
          Past Projects &middot; 2015–2020
        </div>
        <div className="cs-grid-2">
          <Link href="/projects/telematics">
            <div className="cs-card reveal">
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/tele-cover.jpg"}
                  alt="Telematics One App"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">SAIC Volkswagen &middot; App</div>
                <div className="cs-card-title">Telematics One App</div>
                <div className="cs-card-desc">
                  Connected car companion app serving millions of vehicle owners
                  across China.
                </div>
              </div>
            </div>
          </Link>

          <Link href="/projects/avacar">
            <div className="cs-card reveal">
              <div className="cs-card-image">
                <Image
                  src={basePath + "/images/avacar-cover.jpg"}
                  alt="AVACAR"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">
                  SAIC Volkswagen &middot; App + Hardware
                </div>
                <div className="cs-card-title">AVACAR</div>
                <div className="cs-card-desc">
                  OBD telematics companion app for millions of existing vehicle
                  owners.
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section reveal">
        <h2>Get in touch</h2>
        <p>
          I'm open to design leadership roles, advisory, and collaboration
          opportunities.
        </p>
        <div className="contact-links reveal">
          <a className="contact-link" href="mailto:yzwang04@gmail.com">
            Email
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/elvo-yingzhu-wang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
