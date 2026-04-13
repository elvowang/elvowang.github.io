'use client';
import basePath from "@/lib/basePath";

export default function TelematicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="cs-detail-hero" data-section="tele-intro">
        <a href="/" className="cs-back">&larr; Back to work</a>
        <h1 className="reveal">Telematics One App</h1>
        <p className="reveal" style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '8px' }}>Connected car experience for millions</p>
        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Design Lead</span>
          </div>
          <div className="cs-meta-item">
            <label>Scope</label>
            <span>0-to-1 Product</span>
          </div>
          <div className="cs-meta-item">
            <label>Duration</label>
            <span>~8 months</span>
          </div>
          <div className="cs-meta-item">
            <label>Company</label>
            <span>SAIC Volkswagen</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="cs-detail-image">
        <img src={basePath + "/images/tele-cover.jpg"} alt="Telematics One App — isometric showcase of all app screens" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
      </div>

      <div className="cs-body-content">

        {/* Overview */}
        <section className="cs-step" data-section="tele-overview">
          <h2 className="reveal">The Challenge</h2>
          <p className="reveal">As China's #1 OEM by sales volume, SAIC Volkswagen had millions of customers but no unified digital touchpoint. Most telematics apps at the time designed for one user — "the car owner." In reality, the customer base spanned prospective buyers, primary owners, secondary drivers, second-hand buyers, and exchange seekers — each with fundamentally different mental models and needs.</p>
          <p className="reveal" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>I led the end-to-end UX vision — from research through delivery — for a companion app that would unify these fragmented user needs into a single, coherent product.</p>
        </section>

        {/* My Approach */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-approach">
          <h2 className="reveal" style={{ textAlign: 'center' }}>My Approach</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>I shaped the entire UX strategy from the ground up — not from a requirements doc, but from real customer voices.</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-num">01</div>
            <h3>Research</h3>
            <p>Focus groups with real customers across the ownership lifecycle</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">02</div>
            <h3>Synthesis</h3>
            <p>Personas, journey maps, and "How Might We" opportunity statements</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">03</div>
            <h3>Prioritisation</h3>
            <p>Feature evaluation framework and information architecture</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">04</div>
            <h3>Design</h3>
            <p>Wireframes, component library, and final visual UI</p>
          </div>
        </div>

        {/* Step 1: User Research */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-research">
          <div className="step-label reveal">Step 1</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>User Research — Focus Groups</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Before any design work, I needed ground truth from real customers — their frustrations, barriers, needs, and satisfaction across the SAIC Volkswagen ecosystem.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-research-focus-group.jpg"} alt="Focus group research — team workshops and 6-step process" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Focus group sessions with 16 participants: collaborative workshops (left) and the structured 6-step research process (right).</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-num">Plan & Recruit</div>
            <h3>Define & Source</h3>
            <p>Collaboratively defined discussion topics with the UX team, then recruited 16 participants internally — controlling for role diversity across customer groups.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Prepare & Guide</div>
            <h3>Facilitate</h3>
            <p>Set up 4 group tables with A1 paper and post-its. Designed topic cards around real life-cycle scenarios: Buy, Own, Sell, and Exchange a car.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Conduct & Analyse</div>
            <h3>Synthesise</h3>
            <p>Participants discussed and presented real experiences. The UX team grouped themes and extracted motivation, needs, satisfaction, and frustration patterns into personas.</p>
          </div>
        </div>

        {/* Step 2: Personas */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-personas">
          <div className="step-label reveal">Step 2</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Personas & Scenarios</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Six distinct personas mapping the complete vehicle ownership lifecycle — not a generic "primary user / secondary user" split.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-personas.jpg"} alt="Persona cards and scenario sketches" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Detailed persona card for Shuheng (left), all 6 persona avatars with roles (centre), and hand-drawn scenario sketches (right).</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-icon">🔍</div>
            <h3>Browsers & Buyers</h3>
            <p><strong>Ziyu</strong> — anonymous browser exploring via QR codes. <strong>Shuheng</strong> — potential buyer comparing 3-4 models, wants to try telematics features before committing.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🚗</div>
            <h3>Owners & Drivers</h3>
            <p><strong>Xin</strong> — daily commuter with family, needs vehicle health monitoring. <strong>Shuru</strong> — secondary driver frustrated by key dependency, wants keyless access.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔄</div>
            <h3>Second-Hand & Exchange</h3>
            <p><strong>Shanguo</strong> — used car owner needing maintenance reminders and car locating. <strong>Siyan</strong> — looking for exchange discounts and modern infotainment.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <p className="reveal" style={{ fontStyle: 'italic', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>By mapping six distinct relationships to the vehicle, I ensured the app could serve the full customer lifecycle — from brand discovery through ownership, to resale and re-purchase.</p>
        </section>

        {/* Step 3: Journey Map */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-journey">
          <div className="step-label reveal">Step 3</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>User Journey Map & Opportunity Framing</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Mapping the complete ownership journey across 5 macro phases and 10 key activities — from awareness to re-purchase.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-journey-map.jpg"} alt="End-to-end user journey map with phases, activities, emotion curve, pain points, desires, and HMW statements" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Full journey map: 5 phases (Aware → Purchase → Use → Leave → Evolve), emotion curve, pain points, latent desires, and 11 HMW opportunity statements.</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-icon">😤</div>
            <h3>Pain Points Uncovered</h3>
            <p>"I don't know when to charge or where stations are" · "Finding the car in a large parking lot is impossible" · "I forget to lock my car!" · "Typing destinations to navigate is annoying" · "I don't want traffic violations!"</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">✨</div>
            <h3>Latent Desires</h3>
            <p>"Send phone search to car directly" · "Unlock without the key" · "Continue audio from home to car" · "Connect with smart home" · "Request car by voice" · "Transfer personalised settings to any car"</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>11 "How Might We" Statements</h3>
            </div>
            <div className="cs-two-col-right">
              <p>I translated journey insights into actionable opportunity areas — from solving battery nervousness and simplifying navigation, to preparing in-car atmosphere in advance, predicting traffic lights, and enabling community trip sharing.</p>
            </div>
          </div>
        </section>

        {/* Step 4: Prioritisation */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-matrix">
          <div className="step-label reveal">Step 4</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Feature Prioritisation</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>A rigorous Impact × Consumption matrix to turn 11 opportunity areas into a phased roadmap.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-matrix.jpg"} alt="Feature prioritisation matrix — Impact vs Consumption with Phase 1/2/3" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">2D matrix mapping features by impact (value delivered) vs. consumption (engineering effort) — producing a clear Phase 1 / 2 / 3 roadmap.</p>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-num">Phase 1</div>
            <h3>Must Have</h3>
            <p>High impact, low effort — remote charging status and POI send-to-car. Ship first in MVP.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Phase 2</div>
            <h3>Should Have</h3>
            <p>High impact, higher effort — features requiring deeper integration but delivering strong user value.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-num">Phase 3</div>
            <h3>Nice to Have</h3>
            <p>Incremental value — suitable for later iterations once the core experience is proven.</p>
          </div>
        </div>

        {/* Step 5: Information Architecture */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-ia">
          <div className="step-label reveal">Step 5</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Information Architecture</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Card sorting to group features into logical categories aligned with users' mental models — not internal org silos.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-ia.jpg"} alt="Information architecture — card sorting results, hierarchical sitemap, and screen-level flowchart" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Complete IA: card sorting results (top) and detailed sitemap with screen-level flowchart mapping every page, state, and navigation path.</p>
        </section>

        {/* Step 6: Wireframes */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-wireframes">
          <div className="step-label reveal">Step 6</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Wireframes & Component Library</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Dual approach — paper sketches for fast alignment, digital wireframes for full documentation.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-wireframes.jpg"} alt="Digital wireframes with flow connections and paper sketches" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Digital wireframes with connected screen flows (left) and paper sketches for rapid ideation (right). A wireframe component library ensured consistency across dozens of screens.</p>
        </section>

        {/* Step 7: Visual Design */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-visual">
          <div className="step-label reveal">Step 7</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Visual Design — Look & Feel</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>All strategic and structural work brought together into a polished, brand-aligned experience.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-look-and-feel.jpg"} alt="Isometric showcase of multiple app screens — final visual design" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">Final UI: home dashboard with 3D car render, remote controls, vehicle management, smart home integration, map navigation, and membership services.</p>
        </section>

        <div className="cs-pillars" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="pillar reveal">
            <div className="pillar-icon">🏠</div>
            <h3>Home Dashboard</h3>
            <p>3D car render, mileage, quick-access remote controls, real-time location</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔧</div>
            <h3>Vehicle Mgmt</h3>
            <p>Remote controls, health reports, dashboard, trip statistics</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🏡</div>
            <h3>Smart Home</h3>
            <p>Home automation scenes connected with vehicle triggers</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🗺️</div>
            <h3>Map & Services</h3>
            <p>POI discovery, parking, maintenance booking, community content</p>
          </div>
        </div>

        {/* Next Steps */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="tele-next">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Data-Driven Iteration</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Launch wasn't the finish line. I designed tracking frameworks and engagement systems for continuous improvement.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <img src={basePath + "/images/tele-next-steps.jpg"} alt="Analytics tracking framework and festival theme changing system" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          <p className="cs-img-caption reveal">User behaviour tracking framework (top) and Festival Operation — Theme Changing system for seasonal engagement (bottom).</p>
        </section>

        {/* Reflection */}
        <section className="cs-results" data-section="tele-reflection">
          <h2 className="reveal">What I Demonstrated</h2>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🎯</div>
            <h3>Strategic Ownership</h3>
            <p>Shaped product strategy end-to-end — from user research through analytics framework — owning the complete UX vision.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔬</div>
            <h3>Research Leadership</h3>
            <p>Designed, recruited, facilitated, and synthesised a multi-session focus group program with 16 participants.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🧩</div>
            <h3>Systematic Thinking</h3>
            <p>6 personas → 11 HMW statements → phased prioritisation matrix. Turned messy qualitative insights into actionable product decisions.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal" style={{ gap: '40px' }}>
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Cross-Functional Influence</p>
            </div>
            <div className="cs-two-col-right">
              <p>The Impact × Consumption matrix gave PMs and engineers a shared decision-making tool. The wireframe component library gave developers predictable patterns. I designed artifacts that empowered the whole team.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{ gap: '40px', marginTop: '1.5rem' }}>
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Scalable Craft</p>
            </div>
            <div className="cs-two-col-right">
              <p>Component library, comprehensive IA, and behavioural analytics framework — the moves of someone thinking about the product system, not just individual screens.</p>
            </div>
          </div>
        </section>

      </div>

      <div className="cs-next">
        <a onClick={() => window.location.href = '/projects/avacar'}>Next project: AVACAR (众e联) &rarr;</a>
      </div>
    </>
  );
}
