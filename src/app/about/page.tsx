'use client';
import basePath from "@/lib/basePath";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}>
      <style>{`
        .about-hero {
          padding: 140px 40px 60px;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 80px;
          align-items: start;
        }

        .about-photo {
          aspect-ratio: 3 / 4;
          background: linear-gradient(135deg, rgb(243, 244, 246), rgb(229, 231, 235));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(156, 163, 175);
          font-family: monospace;
          font-size: 14px;
        }

        .about-content h1 {
          font-size: 42px;
          font-weight: 700;
          letter-spacing: -1px;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .bio {
          font-size: 17px;
          color: rgb(107, 114, 128);
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 560px;
        }

        .about-quote {
          font-size: 20px;
          font-weight: 500;
          font-style: italic;
          color: rgb(55, 65, 81);
          border-left: 3px solid rgb(17, 24, 39);
          padding-left: 24px;
          margin-bottom: 40px;
          max-width: 500px;
          line-height: 1.6;
        }

        .served-at {
          padding: 0 40px 60px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .served-at h3 {
          font-size: 13px;
          font-family: monospace;
          color: rgb(156, 163, 175);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .company-logos {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .company-item {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: default;
          transition: opacity 0.25s ease;
          opacity: 0.45;
        }

        .company-item:hover {
          opacity: 1;
        }

        .company-item img {
          height: 26px;
          width: 26px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .company-item span {
          font-size: 16px;
          font-weight: 700;
          color: rgb(17, 24, 39);
          white-space: nowrap;
          letter-spacing: -0.3px;
        }

        .timeline-section {
          padding: 60px 40px 80px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .timeline-section h2 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 48px;
        }

        .timeline {
          border-left: 2px solid rgb(229, 231, 235);
          margin-left: 20px;
        }

        .timeline-item {
          padding: 0 0 40px 40px;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgb(17, 24, 39);
          border: 4px solid white;
        }

        .timeline-date {
          font-family: monospace;
          font-size: 12px;
          color: rgb(156, 163, 175);
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .timeline-role {
          font-size: 18px;
          font-weight: 600;
          color: rgb(17, 24, 39);
          margin-bottom: 4px;
        }

        .timeline-company {
          font-size: 15px;
          color: rgb(107, 114, 128);
        }

        .timeline-desc {
          font-size: 14px;
          color: rgb(107, 114, 128);
          margin-top: 8px;
          line-height: 1.6;
          max-width: 480px;
        }

        .education-section {
          padding: 60px 40px 80px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .education-section h2 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 48px;
        }

        .edu-item {
          padding-top: 24px;
          border-top: 1px solid rgb(243, 244, 246);
        }

        .edu-degree {
          font-size: 18px;
          font-weight: 600;
          color: rgb(17, 24, 39);
          margin-bottom: 8px;
        }

        .edu-school {
          font-size: 15px;
          color: rgb(107, 114, 128);
          margin-bottom: 8px;
        }

        .edu-year {
          font-family: monospace;
          font-size: 12px;
          color: rgb(156, 163, 175);
          letter-spacing: 1px;
        }

        @media (max-width: 900px) {
          .about-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 120px 40px 40px;
          }

          .about-photo {
            max-width: 280px;
          }

          .about-content h1 {
            font-size: 32px;
          }

          .about-quote {
            font-size: 17px;
          }
        }

        @media (max-width: 600px) {
          .about-hero {
            padding: 100px 20px 32px;
            gap: 32px;
          }

          .about-photo {
            max-width: 200px;
          }

          .about-content h1 {
            font-size: 26px;
            letter-spacing: -0.5px;
          }

          .bio {
            font-size: 15px;
          }

          .about-quote {
            font-size: 16px;
            padding-left: 16px;
          }

          .served-at {
            padding: 0 20px 40px;
          }

          .company-logos {
            gap: 24px;
          }

          .timeline-section {
            padding: 40px 20px 60px;
          }

          .timeline-section h2 {
            font-size: 24px;
            margin-bottom: 32px;
          }

          .education-section {
            padding: 40px 20px 60px;
          }

          .education-section h2 {
            font-size: 24px;
            margin-bottom: 32px;
          }
        }

      `}</style>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-photo reveal"><img src={basePath + "/images/ElvoWang.png"} alt="Elvo Wang" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} /></div>
        <div className="about-content">
          <h1 className="reveal">
            Hi, this is <span style={{ color: 'rgb(17, 24, 39)' }}>Elvo Wang</span>, a product designer in{' '}
            <span style={{ color: '#00C853' }}>Hong Kong</span>
          </h1>
          <p className="bio reveal">
            With 11 years of experience in UX/UI design, I'm passionate about creating user-centered experiences and
            leading design teams to deliver impactful digital products. Currently serving as Design Lead at OKX, shaping
            Web3 and crypto product experiences used by millions of users globally.
          </p>
          <div className="about-quote reveal">"Design is not just how it looks — it's how it works, at scale, for everyone."</div>
        </div>
      </div>

      {/* Served At */}
      <div className="served-at reveal">
        <h3>Served at</h3>
        <div className="company-logos">
          <div className="company-item"><img src={basePath + "/images/okx-logo.png"} alt="OKX logo" /><span>OKX</span></div>
          <div className="company-item"><img src={basePath + "/images/HSBClogo.png"} alt="HSBC logo" /><span>HSBC</span></div>
          <div className="company-item"><img src={basePath + "/images/Volkswagen-logo.png"} alt="SAIC Volkswagen logo" /><span>SAIC Volkswagen</span></div>
          <div className="company-item"><img src={basePath + "/images/epam-logo.png"} alt="EPAM Systems logo" /><span>EPAM Systems</span></div>
          <div className="company-item"><img src={basePath + "/images/FDM-logo.png"} alt="FDM Group logo" /><span>FDM Group</span></div>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className="timeline-section">
        <h2 className="reveal">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-date">Jan 2024 — Present</div>
            <div className="timeline-role">Design Lead</div>
            <div className="timeline-company">OKX — Hong Kong</div>
            <div className="timeline-desc">
              Led 5 designers across Account and Risk squads, driving cross-business-line projects including onboarding, user center, and security center revamps.
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">Feb 2022 — Jan 2024</div>
            <div className="timeline-role">Senior UI/UX Designer</div>
            <div className="timeline-company">OKX — Hong Kong</div>
            <div className="timeline-desc">
              Owned end-to-end UX/UI for assets overview, crypto withdrawal, deposit, and transfer flows across Web and App.
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">Sep 2020 — Nov 2021</div>
            <div className="timeline-role">UX Information Architect (Sr. level)</div>
            <div className="timeline-company">HSBC — Hong Kong</div>
            <div className="timeline-desc">
              Defined global IA guardrails and led a research project to uncover user mental models across markets within the design system team.
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">Sep 2017 — Jun 2020</div>
            <div className="timeline-role">UX / Product Designer</div>
            <div className="timeline-company">SAIC Volkswagen — Shanghai</div>
            <div className="timeline-desc">
              Led end-to-end design for the SVW All-in-one App, from research through UI specs to developer hand-off, collaborating with VW Germany and China teams.
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">May 2015 — Jul 2017</div>
            <div className="timeline-role">UX Developer / Software Engineer</div>
            <div className="timeline-company">EPAM Systems — Shenzhen</div>
            <div className="timeline-desc">
              Full-lifecycle consultant for e-commerce projects covering cross-culture UX analysis, IA design, prototyping, and front-end development.
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">Nov 2014 — Jul 2017</div>
            <div className="timeline-role">IT Consultant</div>
            <div className="timeline-company">FDM Group — London & Shenzhen</div>
            <div className="timeline-desc">
              Built account management systems and client-facing applications for financial services clients.
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="education-section reveal">
        <h2>Education</h2>
        <div className="edu-item">
          <div className="edu-degree">MSc Social Media & Interactive Technologies</div>
          <div className="edu-school">University of York, UK</div>
          <div className="edu-year">2013 — 2014</div>
        </div>
        <div className="edu-item" style={{ marginTop: '24px' }}>
          <div className="edu-degree">BEng Digital Media Technology</div>
          <div className="edu-school">Xi'an University of Technology, China</div>
          <div className="edu-year">2009 — 2013</div>
        </div>
      </div>
    </main>
  );
}
