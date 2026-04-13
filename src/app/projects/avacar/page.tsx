'use client';
import basePath from "@/lib/basePath";

export default function AVACARPage() {
  return (
    <>
      {/* Hero */}
      <section className="cs-detail-hero" data-section="avacar-intro">
        <a href="/" className="cs-back">&larr; Back to work</a>
        <h1 className="reveal">AVACAR (众e联)</h1>
        <p className="reveal" style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '640px', marginTop: '8px' }}>OBD telematics for existing vehicle owners</p>
        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Design Lead</span>
          </div>
          <div className="cs-meta-item">
            <label>Scope</label>
            <span>Hardware + Software</span>
          </div>
          <div className="cs-meta-item">
            <label>Hardware</label>
            <span>VW DataPlug by TEXA</span>
          </div>
          <div className="cs-meta-item">
            <label>Company</label>
            <span>SAIC Volkswagen</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="cs-detail-image">
        <img src={basePath + "/images/avacar-cover.jpg"} alt="AVACAR — isometric showcase of all app screens" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
      </div>

      <div className="cs-body-content">

        {/* The Challenge */}
        <section className="cs-step" data-section="avacar-challenge">
          <h2 className="reveal">The Challenge</h2>
          <p className="reveal">SAIC Volkswagen had millions of existing vehicles on the road with no native connected features. The Telematics One App (my other project) served new-generation vehicles — but existing owners needed a solution too. The answer was an OBD-II Bluetooth dongle that plugs into any vehicle's diagnostics port, paired with AVACAR as its companion app.</p>
          <p className="reveal" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>How do you design an experience that feels valuable and complete — when the hardware can only transmit specific data types, the Bluetooth connection is fragile, and different car models have varying OBD support?</p>
        </section>

        {/* Why this demanded design leadership */}
        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🔧</div>
            <h3>Hardware Constraints</h3>
            <p>OBD-II could only transmit specific data via Bluetooth. Features had to map to what the hardware actually supported — no wishful thinking.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🏁</div>
            <h3>Crowded Market</h3>
            <p>Dozens of third-party OBD apps existed, but none had achieved significant adoption. The market was fragmented with no clear leader.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">⏳</div>
            <h3>Transitional Product</h3>
            <p>AVACAR would eventually be superseded by the full telematics platform. It needed to deliver immediate value without over-engineering.</p>
          </div>
        </div>

        {/* Phase 1: Competitive Analysis */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="avacar-competitive">
          <div className="step-label reveal">Phase 1</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Competitive Analysis</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Surveying the OBD app ecosystem to find market gaps — before touching any design tool.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/avacar-competitor-analysis.jpg"} alt="Competitive analysis — 5 OBD app screenshots with feature comparison matrix and Baidu Index user data" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">5 competing OBD apps analysed across feature categories (top), plus Baidu Index data validating target user profile: male, 20–29, tech-savvy (bottom).</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-icon">📊</div>
            <h3>Feature Landscape</h3>
            <p>All 5 competitors offered driving behaviour and health reports — table stakes. But after-sales, navigation, and entertainment were sparse. No single app covered all five categories. Clear opportunity: build the most complete experience.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">👤</div>
            <h3>User Validation via Baidu Index</h3>
            <p>Quantitative data confirmed the primary target: male, aged 20–29, with highest OBD interest (TGI well above average). This shaped visual language, tone, and feature prioritisation downstream.</p>
          </div>
        </div>

        {/* Phase 2: Strategic Framing */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="avacar-strategy">
          <div className="step-label reveal">Phase 2</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Strategic Framing — SWOT & Function Ideation</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Confronting technical reality and defining what to build, what to defer, and where to push beyond hardware limits.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/avacar-swot-radar.jpg"} alt="Radar chart comparing OBD capability vs app ambition, SWOT analysis, and product target with 3 design pillars" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Radar chart mapping OBD hardware capability (orange) vs. app function ambition (blue) across 5 axes. SWOT analysis and product target: "A driving assistant with safety control" — Simple, Emotion, Safety.</p>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-num">Pillar 1</div>
            <h3>Simple</h3>
            <p>Easy to use, clear information. No cognitive overload from raw OBD data — transform diagnostics into understandable insights.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Pillar 2</div>
            <h3>Emotion</h3>
            <p>Enhance fun and social functions. Make driving data engaging — gamified achievements, community features, not clinical readouts.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Pillar 3</div>
            <h3>Safety</h3>
            <p>Provide data and services around safety. Vehicle health monitoring, driving behaviour scoring, and actionable maintenance alerts.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <p className="reveal" style={{ fontStyle: 'italic', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>The radar chart made a crucial point visible to the whole team: OBD could strongly support Driving Behaviour and Health Reports, but Entertainment and Social had to be pure app-layer innovations — a key architectural decision.</p>
        </section>

        {/* Phase 3: Production Design */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="avacar-production">
          <div className="step-label reveal">Phase 3</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Production Design</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Information architecture, state chart, and wireframes — documenting every screen, state, and edge case.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/avacar-ia-wireframe.jpg"} alt="Information architecture mind map, comprehensive state chart, and annotated wireframe screens" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">IA with 4 primary modules (left), full state chart covering hardware-specific edge cases (centre-left), and annotated wireframes for all screens (right).</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-num">Module 1</div>
            <h3>Home</h3>
            <p>Vehicle dashboard, parking location, trip info, vehicle details — the Safety pillar via real-time OBD data</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Module 2</div>
            <h3>Service</h3>
            <p>Online booking, dealer locator, warranty, insurance — the competitive After-Sales opportunity</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Module 3</div>
            <h3>Drive</h3>
            <p>Driving data, behaviour scoring, history — core OBD value transformed into actionable insights</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Module 4</div>
            <h3>Social</h3>
            <p>Forum, passby places, trip sharing — the Emotion pillar, built entirely at the app layer</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Why the State Chart Mattered</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Unlike pure software apps, AVACAR had to handle "OBD device disconnected," "Bluetooth interrupted," "data recording paused due to background kill," and model-specific OBD support variations. The state chart documented every edge case before engineering began.</p>
            </div>
          </div>
        </section>

        {/* Phase 4: Usability Testing */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="avacar-testing">
          <div className="step-label reveal">Phase 4</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Usability Testing — Agile Iteration</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Two rounds of testing with external users — paper prototypes first, then interactive MoDao prototype after UI design.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/avacar-usability-test.jpg"} alt="Usability testing — paper prototype session photo, Version 1 wireframe screens, Version 2 polished UI screens" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Paper prototype testing (left), V1 wireframe screens (top-right), and V2 polished screens with map-based trips, gamified achievements, and diagnostic explanations (bottom-right).</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-num">V1 — Paper Prototype</div>
            <h3>Structure Validation</h3>
            <p>Tested core navigation, information hierarchy, and task flows at low fidelity with 2 external users. Caught structural issues before any visual polish could bias feedback.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">V2 — MoDao Prototype</div>
            <h3>Experience Refinement</h3>
            <p>Full visual design applied. Key improvements: map-based trip visualization replaced flat data, gamified achievement badges, and the dashboard indicator screen evolved from simple icons to a diagnostic system with causes and solutions.</p>
          </div>
        </div>

        {/* Phase 5: Visual Design */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="avacar-visual">
          <div className="step-label reveal">Phase 5</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Visual Design — Look & Feel</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Balancing data clarity with emotional engagement — making an OBD diagnostics app feel premium and fun.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/avacar-look-and-feel.jpg"} alt="Isometric showcase of all final AVACAR app screens on dark navy background" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Final UI: home dashboard, driving behaviour with rankings, vehicle details with 3D render, parking location, dealer locator, social achievements, driving tips, and OBD DataPlug pairing flow.</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-icon">📊</div>
            <h3>Data-Forward Home</h3>
            <p>Fuel, mileage, maintenance, battery voltage — vehicle as hero element</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🏆</div>
            <h3>Gamified Social</h3>
            <p>Achievements, rankings, passby places — raw data made competitive and shareable</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">💡</div>
            <h3>Actionable Insights</h3>
            <p>Weather-based fuel tips, driving scores, diagnostic explanations — not just numbers</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔌</div>
            <h3>Hardware Onboarding</h3>
            <p>Clean PIN entry flow for DataPlug pairing — making setup approachable</p>
          </div>
        </div>

        {/* Reflection */}
        <section className="cs-results" data-section="avacar-reflection">
          <h2 className="reveal">What I Demonstrated</h2>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🔧</div>
            <h3>Hardware + Software Thinking</h3>
            <p>Mapped OBD capability against user needs (the radar chart) and made strategic decisions about where to extend beyond hardware data — a different discipline than pure app design.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🎯</div>
            <h3>Strategic Product Framing</h3>
            <p>The SWOT revealed AVACAR was transitional — it would be replaced by the full telematics platform. This shaped every decision: build for immediate value, keep architecture lean.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔬</div>
            <h3>Market-Driven Design</h3>
            <p>Competitive analysis of 5 apps + quantitative user validation via Baidu Index before touching any design tool. Feature strategy emerged from market gaps, not assumptions.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal" style={{ gap: '40px' }}>
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Cross-Product Vision</p>
            </div>
            <div className="cs-two-col-right">
              <p>Leading both the Telematics One App (new vehicles) and AVACAR (existing vehicles) simultaneously gave me a rare perspective — I was designing the full telematics ecosystem for SAIC Volkswagen, serving customers across the entire vehicle fleet.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{ gap: '40px', marginTop: '1.5rem' }}>
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Agile Craft</p>
            </div>
            <div className="cs-two-col-right">
              <p>Two rounds of usability testing (paper → mobile prototype) with external users. The V1→V2 improvements weren't cosmetic — they reflected real usability findings, like evolving the dashboard from a simple icon grid to a diagnostic system with causes and solutions.</p>
            </div>
          </div>
        </section>

      </div>

      <div className="cs-next">
        <a onClick={() => window.location.href = '/'}>← Back to all projects</a>
      </div>
    </>
  );
}
