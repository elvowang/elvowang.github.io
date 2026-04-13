'use client';

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: 'white', color: '#111827', flex: '1' }}>
      <style>{`
        .contact-hero {
          position: relative;
          z-index: 1;
          padding: 140px 40px 80px;
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
        }

        .contact-hero .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #9ca3af;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-hero h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -1.5px;
          color: #111827;
          max-width: 800px;
          margin-bottom: 28px;
        }

        .contact-hero h1 span {
          color: #9ca3af;
        }

        .contact-hero .hero-bio {
          font-size: 17px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 620px;
          margin-bottom: 40px;
        }

        .contact-links {
          display: flex;
          gap: 24px;
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

        @media (max-width: 600px) {
          .contact-hero {
            padding: 60px 24px 80px;
          }
        }
      `}</style>

      <section className="contact-hero">
        <div className="hero-label reveal">Get in touch</div>
        <h1 className="reveal">Let's create <span>something great together.</span></h1>
        <p className="hero-bio reveal">
          Whether you have a project in mind, a design challenge to solve, a job opportunity, or just want to connect — I'd love to hear from you.
        </p>
        <div className="contact-links reveal">
          <a className="contact-link" href="mailto:yzwang04@gmail.com">yzwang04@gmail.com</a>
          <a className="contact-link" href="https://www.linkedin.com/in/elvo-yingzhu-wang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

      </section>
    </main>
  );
}
