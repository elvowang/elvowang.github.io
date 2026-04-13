'use client';
import basePath from "@/lib/basePath";

export default function HSBCPage() {
  return (
    <>
      {/* Hero */}
      <section className="cs-detail-hero" data-section="hsbc-intro">
        <a href="/" className="cs-back">&larr; Back to work</a>
        <h1 className="reveal">HSBC Global IA Guideline</h1>
        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Information Architect (Sr.)</span>
          </div>
          <div className="cs-meta-item">
            <label>Team</label>
            <span>Global Design System</span>
          </div>
          <div className="cs-meta-item">
            <label>Platform</label>
            <span>MobileX — iOS & Android</span>
          </div>
          <div className="cs-meta-item">
            <label>Company</label>
            <span>HSBC</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="cs-detail-image">
        <img
          src={basePath + "/images/hsbc-cover.png"}
          alt="HSBC Global IA Guideline cover"
          className="reveal"
          style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
        />
      </div>

      <div className="cs-body-content">

        {/* Overview */}
        <section className="cs-step" data-section="hsbc-overview">
          <h2 className="reveal">Overview</h2>
          <p className="reveal">By 2020, HSBC launched MobileX — a global convergence platform to unify its mobile banking app across countries and customer tiers. Within the Global Design System team, I established the foundational IA principles and guidelines governing how content, features, and navigation were structured across the entire app. This was not a single-feature project — it was IA governance infrastructure for every product team and market.</p>
        </section>

        {/* The Problem */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="hsbc-problem">
          <h2 className="reveal" style={{ textAlign: 'center' }}>The Problem</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>Each market had designed its mobile app independently for nearly a decade. No shared IA guardrails existed.</p>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🏷️</div>
            <h3>Inconsistent Taxonomy</h3>
            <p>The same banking feature was labelled and categorised differently across Hong Kong, the UK, and Singapore — making cross-market consistency impossible.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🧭</div>
            <h3>Fragmented Navigation</h3>
            <p>Navigation structures varied by market. Customers with multi-country accounts couldn't build transferable mental models.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">📝</div>
            <h3>No IA Methodology</h3>
            <p>No codified process for how IA decisions should be made — leading to ad-hoc, opinion-driven structures rather than research-backed ones.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <p className="reveal" style={{ fontStyle: 'italic', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>How do you create a consistent, research-backed information architecture that works globally — across languages, markets, regulations, and two distinct customer tiers — while remaining intuitive for each local user?</p>
        </section>

        {/* Research & Discovery - Step 1 */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="hsbc-research">
          <div className="step-label reveal">Step 1</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Research & Discovery</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: 'var(--text-secondary)' }}>Defining research objectives, co-designing studies with a dedicated user researcher, and translating findings into actionable IA principles.</p>
        </section>

        {/* Understanding Mental Models */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Understanding Mental Models</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Mental models — the internal representations people carry about how things work — are the foundation of effective IA. If the app's structure doesn't match how users think, they won't find what they need. Before restructuring anything, we needed to understand how customers conceptualise their banking features, tasks, and the relationships between them.</p>
            </div>
          </div>
          <img src={basePath + "/images/hsbc-mental-models-methodology.jpg"} alt="Mental models theory and IA design approach" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2rem' }} />
          <p className="cs-img-caption reveal">Mental models framework (top) and the IA design methodology: Preparation → Conduction → Validation (bottom).</p>
        </section>

        {/* Tree Testing */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Tree Testing</h3>
            </div>
            <div className="cs-two-col-right">
              <p>We ran tree testing studies — a text-only research method that isolates IA structure from visual design — to evaluate how users associate banking tasks with top-level categories. We measured two signal types:</p>
              <p style={{ marginTop: '0.75rem' }}><strong>Strong Association (20%+ visits)</strong> — a clear, confident mapping to a category.<br /><strong>Weak Association (10–20% visits)</strong> — a secondary mapping indicating a task could reasonably live in multiple places.</p>
            </div>
          </div>
        </section>

        {/* Key Findings as pillar cards */}
        <section className="cs-step cs-step-sub">
          <h3 className="reveal" style={{ marginBottom: '1.5rem' }}>Key Findings</h3>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">📊</div>
            <h3>Accounts — Gravitational Centre</h3>
            <p>Strongest density of associations. Users expected core banking tasks here — but also insurance, spending tracking, and reward shops. Their mental model of "Accounts" was broader than transactions: it meant managing their financial life.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔄</div>
            <h3>Profile & Support — Overlap Zone</h3>
            <p>Far fewer strong associations and significant overlap. Tasks like Upload Passport and Financial Health Assessment split across both — indicating user uncertainty. Investment tasks distributed across all three sections, needing their own dedicated space.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">💡</div>
            <h3>The Critical Insight</h3>
            <p>The tree test revealed the shape of users' mental models — not just the "correct" categorisation. Some categories were strongly anchored; others had porous boundaries that required careful design decisions about where to draw the line.</p>
          </div>
        </div>

        {/* Tree test images */}
        <section className="cs-step cs-step-sub">
          <div className="cs-exploration-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="cs-exploration-item reveal">
              <img src={basePath + "/images/hsbc-tree-test-association-map-account.png"} alt="Tree Test Association Map — Accounts" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <p className="cs-img-caption">Accounts — strong associations (orange) radiating outward from core banking tasks.</p>
            </div>
            <div className="cs-exploration-item reveal">
              <img src={basePath + "/images/hsbc-tree-test-association-map-porfile.png"} alt="Tree Test Association Map — Profile & Support" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <p className="cs-img-caption">Profile & Support — weaker, overlapping associations revealing user uncertainty.</p>
            </div>
          </div>
        </section>

        {/* Experience Architecture Framework - Step 2 */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="hsbc-framework">
          <div className="step-label reveal">Step 2</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Experience Architecture Framework</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>I developed the Experience Architecture Guidelines — four pillars governing all IA decisions across the global app.</p>
        </section>

        {/* Four Pillars overview image */}
        <section className="cs-step cs-step-sub">
          <div className="img-placeholder reveal" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>[ Four-pillar overview card layout · Slide 2 ]</div>
        </section>

        {/* Pillar 1: Hierarchy */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>1. Hierarchy</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The structure and priority given to information — which content goes to which level. Website hierarchy is typically top-down and shallow; mobile apps are bottom-up and deep. MobileX needed to accommodate deep task flows while keeping top-level structure shallow for quick access.</p>
            </div>
          </div>
          <img src={basePath + "/images/hsbc-hierarchy-guideline.jpg"} alt="Hierarchy Do/Don't guidelines" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2rem' }} />
          <p className="cs-img-caption reveal">Do: Build IA matching users' mental models. Provide permanent entry points. Don't: Go against user understanding or let entry points disappear.</p>
        </section>

        {/* Pillar 2: Navigation */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>2. Navigation</h3>
            </div>
            <div className="cs-two-col-right">
              <p>How users move through the app to fulfil their goals. A key distinction: Hierarchy defines where things live; Navigation defines how users get there. These are two essential but different components — and untangling them was one of the framework's most impactful contributions.</p>
            </div>
          </div>
          <img src={basePath + "/images/hsbc-navigation-guideline.jpg"} alt="Navigation Do/Don't guidelines" className="reveal" style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2rem' }} />
          <p className="cs-img-caption reveal">Do: Always offer next actions. Allow going back to the entry point. Don't: Create dead-ends or block the return path.</p>
        </section>

        {/* Pillar 3 & 4 */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>3. Page Information Layout</h3>
            </div>
            <div className="cs-two-col-right">
              <p>How information is organised on a single screen — top bar, main content, bottom bar. This ensured information density and content prioritisation stayed consistent even as markets added local features.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{ marginTop: '2rem' }}>
            <div className="cs-two-col-left">
              <h3>4. Copy</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Taxonomy, category names, and feature labels across the app. Critical for a global product — the tree test findings directly informed copy guidelines, as association maps showed where existing labels were creating confusion.</p>
            </div>
          </div>
        </section>

        {/* IA Design Methodology - Step 3 */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="hsbc-methodology">
          <div className="step-label reveal">Step 3</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>IA Design Methodology</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>A repeatable process any product team across HSBC's global markets could follow when making IA decisions.</p>
        </section>

        {/* Three Phases as pillar cards */}
        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">📋</div>
            <h3>Phase 1: Preparation</h3>
            <p>Define the problem. Creating a new IA requires research from ideation; improving existing IA focuses on performance comparison between proposals and the current structure.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔬</div>
            <h3>Phase 2: Conduction</h3>
            <p>Content Inventory → User Research → Taxonomies & Labelling → Creating Hierarchy → Prototype. Five steps to build a research-backed IA proposal.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">✅</div>
            <h3>Phase 3: Validation</h3>
            <p>Test the proposed IA with users to confirm it matches their mental models and supports task completion. Research-driven, not opinion-driven.</p>
          </div>
        </div>

        {/* Impact & Reflection */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="hsbc-impact">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Impact & Reflection</h2>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🏛️</div>
            <h3>Governance at Scale</h3>
            <p>The four-pillar framework gave every market a shared vocabulary for IA decisions — replacing subjective debate with research-backed guidelines.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🧠</div>
            <h3>Mental Models Made Actionable</h3>
            <p>Tree test association maps became reference tools for feature categorisation. Strong/weak association data provided evidence-based rationale, reducing cross-market inconsistency.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔁</div>
            <h3>Repeatable Process</h3>
            <p>The Preparation → Conduction → Validation methodology gave teams not just guidelines for what IA should look like, but how to arrive at good IA decisions.</p>
          </div>
        </div>

        {/* Lessons Learned */}
        <section className="cs-step cs-step-sub">
          <h3 className="reveal" style={{ marginBottom: '1.5rem' }}>Lessons Learned</h3>
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Process over outcomes</p>
            </div>
            <div className="cs-two-col-right">
              <p>A good process scales; a good structure serves only one moment in time. The bigger lever for a global organisation is creating the right process for arriving at IA decisions.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{ marginTop: '1.5rem' }}>
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>The shape of ambiguity</p>
            </div>
            <div className="cs-two-col-right">
              <p>The most valuable finding wasn't the "correct" categorisation — it was understanding where users were genuinely uncertain. The Profile/Support overlap was a signal that the distinction itself needed rethinking.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{ marginTop: '1.5rem' }}>
            <div className="cs-two-col-left">
              <p style={{ fontWeight: 600, color: 'var(--gray-900)' }}>Hierarchy ≠ Navigation</p>
            </div>
            <div className="cs-two-col-right">
              <p>Explicitly separating "where something lives" from "how users get there" was one of the most impactful contributions. Most teams conflate the two — untangling them led to clearer IA decisions.</p>
            </div>
          </div>
        </section>

      </div>

      <div className="cs-next">
        <a onClick={() => window.location.href = '/projects/telematics'}>Next project: Telematics One App &rarr;</a>
      </div>
    </>
  );
}
