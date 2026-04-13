import basePath from "@/lib/basePath";
export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="cs-detail-hero reveal">
        <a href="/" className="cs-back">← Back to work</a>

        <h1 className="reveal">OKX Security Centre</h1>

        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Lead Product Designer</span>
          </div>
          <div className="cs-meta-item">
            <label>Team</label>
            <span>2 Product Designers</span>
          </div>
          <div className="cs-meta-item">
            <label>Platform</label>
            <span>iOS, Android, Web</span>
          </div>
          <div className="cs-meta-item">
            <label>Company</label>
            <span>OKX</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="cs-detail-image">
        <img
          src={basePath + "/images/sec-hero.png"}
          alt="OKX Security Centre — MFA screens"
          className="reveal"
        />
      </div>

      {/* Body Content */}
      <div className="cs-body-content">

        {/* Overview */}
        <section className="cs-step">
          <h2 className="reveal">Overview</h2>
          <p className="reveal">
            As the Lead UX/UI Designer for the Account Team at OKX, I led the redesign of the platform's security authentication system. The project centred on two interconnected initiatives — a unified MFA (Multi-Factor Authentication) Module and a Reset MFA Module — transforming a fragmented, inconsistent security landscape into a cohesive, modular system that serves millions of users across multiple business lines including Account, Assets, and P2P.
          </p>
        </section>

        {/* Outcome */}
        <section className="cs-results">
          <h2 className="reveal" style={{textAlign: 'center'}}>Outcome</h2>
          <div className="result-cards">
            <div className="result-card reveal">
              <div className="number">3→1</div>
              <div className="label">Consolidated three separate MFA implementations into one unified module — adopted by Account, Assets, P2P, and Web3 Pay</div>
            </div>
            <div className="result-card reveal">
              <div className="number">62%</div>
              <div className="label">Passkey binding rate among high-value users, with 113K+ new activations since launch</div>
            </div>
            <div className="result-card reveal">
              <div className="number">−30%</div>
              <div className="label">MFA-related customer complaints after unhappy-flow optimizations</div>
            </div>
            <div className="result-card reveal">
              <div className="number">84%</div>
              <div className="label">MFA module overall pass-through rate, maintaining a stable upward trend</div>
            </div>
          </div>
        </section>

        {/* Purpose & Meaning */}
        <section className="cs-step">
          <h2 className="reveal">Purpose & Meaning</h2>
          <p className="reveal">
            In cryptocurrency, security is not just a feature — it is the product. Users entrust exchanges with real financial assets, and every authentication moment is a trust moment. A single weak link in the verification chain can mean irreversible financial loss.
          </p>
          <p className="reveal" style={{marginTop: '1rem'}}>
            This project exists because the platform had outgrown its original security architecture. As the business expanded into new product lines, each team built its own MFA logic independently — resulting in a patchwork of different verification flows, inconsistent user experiences, and growing blind spots that neither users nor the CS team could navigate confidently.
          </p>
          <p className="reveal" style={{marginTop: '1rem'}}>
            The deeper purpose was threefold: for users, replacing confusion and friction with a single, predictable security experience. For the business, building a scalable security foundation that absorbs new product lines without new fragmentation. And for the broader industry, setting a higher standard for how crypto platforms approach user-facing security design.
          </p>
        </section>

        {/* Design Principles */}
        <section className="cs-step">
          <h2 className="reveal">Design Principles</h2>
          <p className="reveal">Five principles guided every design decision throughout this project.</p>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🧩</div>
            <h3>Modularity Over Fragmentation</h3>
            <p>Security components should be self-contained, reusable building blocks — not bespoke implementations scattered across business lines. One module, built once, deployed everywhere.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔁</div>
            <h3>Consistency Builds Trust</h3>
            <p>Users develop mental models for how security works. When verification behaves differently depending on the feature, it erodes confidence. Every security touchpoint should feel like part of the same system.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🙋</div>
            <h3>Self-Service by Default</h3>
            <p>Users should be able to resolve their own security issues — resetting MFA, recovering access, verifying identity — without filing a support ticket. Every flow that forces CS contact is a flow that has failed.</p>
          </div>
        </div>

        {/* Problem Define - Step 1 */}
        <section className="cs-step" style={{textAlign: 'center'}}>
          <div className="step-label reveal">Step 1</div>
          <h2 className="reveal" style={{textAlign: 'center'}}>Problem Define</h2>
          <p className="reveal" style={{textAlign: 'center', maxWidth: '640px', margin: '0 auto'}}>The security experience on the platform had three compounding problems, each making the others worse.</p>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🔀</div>
            <h3>Fragmented MFA Logic</h3>
            <p>Different business lines — Account, Assets, P2P — each implemented their own authentication flows independently. The same action could trigger a different verification sequence depending on where in the app the user was.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">📉</div>
            <h3>Low Adoption of MFA Methods</h3>
            <p>The existing setup made it difficult for users to understand which methods were available, why they mattered, or how to enable them. Setup rates for authenticator apps remained stubbornly low, leaving many users on weaker protection.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🎫</div>
            <h3>Unsustainable CS Pressure</h3>
            <p>When users lost access to an MFA method or encountered an unfamiliar flow, their only recourse was to contact support. MFA-related ticket volume had become a significant operational burden that scaled linearly with user growth.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub reveal">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start'}}>
            <p style={{fontStyle: 'italic', color: 'var(--text-secondary)', margin: '0'}}>These three problems were not independent. Fragmentation drove confusion, confusion suppressed adoption, low adoption increased account vulnerability, and vulnerable accounts flooded CS. The system needed to be rebuilt from the foundation, not patched at the surface.</p>
            <div>
              <img
                src={basePath + "/images/sec-mfa-problem.png"}
                alt="Fragmented MFA UIs across business lines"
                style={{width: '100%', borderRadius: 'var(--radius-lg)'}}
              />
              <p className="cs-img-caption" style={{marginTop: '8px'}}>Fragmented MFA UIs across different business lines — each feature had its own verification pattern, layouts and flows.</p>
            </div>
          </div>
        </section>

        {/* Strategy - Step 2 */}
        <section className="cs-step" style={{textAlign: 'center'}}>
          <div className="step-label reveal">Step 2</div>
          <h2 className="reveal" style={{textAlign: 'center'}}>Strategy & Approach</h2>
        </section>

        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Modularise First</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Rather than fixing each business line's MFA implementation individually, the decision was to build a single, unified MFA module — supporting passkey, authenticator app, phone, and email verification — that every product line would share. One codebase, one design system, one user experience.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{marginTop: '2rem'}}>
            <div className="cs-two-col-left">
              <h3>Start Small, Prove the Model</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The team chose to introduce a Minimum Viable Product focused on a single process: changing password. Password change is high-frequency, well-understood, and touches the core MFA flow without the complexity of financial transactions. If the modular approach worked here, it would work everywhere.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{marginTop: '2rem'}}>
            <div className="cs-two-col-left">
              <h3>Iterate Outward</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Once the MVP validated the modular architecture, the plan was to extend it incrementally to additional processes — withdrawals, API key management, device authorisation — using an agile design iteration approach. Each extension would inherit proven patterns rather than reinvent them.</p>
            </div>
          </div>
        </section>

        {/* Part 1: MFA Module - Step 3 */}
        <section className="cs-step" style={{textAlign: 'center'}}>
          <div className="step-label reveal">Step 3</div>
          <h2 className="reveal" style={{textAlign: 'center'}}>Part 1 — MFA Module</h2>
          <p className="reveal" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>Building the unified authentication layer that would replace every fragmented implementation across the platform.</p>
        </section>

        {/* Modulisation Architecture */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Modulisation Architecture</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The new system needed to support four distinct verification methods — passkey, authenticator app, phone, and email — while presenting them through a single, consistent interface. The architecture was designed as a modular framework: each verification method is an independent component that plugs into a shared orchestration layer.</p>
              <p style={{marginTop: '0.75rem'}}>The orchestration layer handles the logic of which methods to present, in what order, and with what fallback options — based on the user's configured methods and the risk level of the action they are performing.</p>
            </div>
          </div>
        </section>

        {/* Design Exploration */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Design Exploration</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Three distinct approaches were explored for the verification flow. Each was evaluated for user experience quality, edge case handling, and how gracefully it degraded when authentication methods were unavailable. The liner flow emerged as the clear winner — after testing confirmed it produced the fewest errors and the most intuitive recovery paths.</p>
            </div>
          </div>
          <div className="cs-exploration-grid">
            <div className="cs-exploration-item reveal">
              <div className="cs-exploration-label">Approach 1 — Central Entry</div>
              <img
                src={basePath + "/images/sec-mfa-exploration1.png"}
                alt="Central Entry approach"
              />
            </div>
            <div className="cs-exploration-item reveal">
              <div className="cs-exploration-label">Approach 2 — All-in-One</div>
              <img
                src={basePath + "/images/sec-mfa-exploration2.png"}
                alt="All-in-One approach"
              />
            </div>
            <div className="cs-exploration-item reveal">
              <div className="cs-exploration-label">Approach 3 — Liner Flow ✓</div>
              <img
                src={basePath + "/images/sec-mfa-exploration3.png"}
                alt="Liner Flow"
              />
            </div>
          </div>
        </section>

        {/* Final Solution */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Final Solution</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The final design delivers a unified verification interface across all four methods — passkey, authenticator app, phone, and email. Each screen shares the same layout, progress affordance, and fallback path, so users never need to relearn how verification works regardless of which method they're using or which part of the app they're in.</p>
            </div>
          </div>
          <img
            src={basePath + "/images/sec-mfa-final-solution.png"}
            alt="Final solution — unified verification screens"
            className="reveal"
            style={{width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2rem'}}
          />
          <p className="cs-img-caption reveal">Unified verification screens — Passkey / Authenticator App / Phone / Email, all sharing the same interaction pattern and visual language.</p>
        </section>

        {/* Part 2: Reset MFA - Step 4 */}
        <section className="cs-step" style={{textAlign: 'center'}}>
          <div className="step-label reveal">Step 4</div>
          <h2 className="reveal" style={{textAlign: 'center'}}>Part 2 — Reset MFA Module</h2>
          <p className="reveal" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>Building a unified MFA system solved the verification problem. But security is a lifecycle, not a single moment.</p>
        </section>

        <section className="cs-step cs-step-sub">
          <div className="reveal" style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start'}}>
            <div>
              <h3 style={{fontSize: '20px', fontWeight: '600', color: 'var(--gray-900)', marginBottom: '16px'}}>Why Reset MFA Needed Its Own Design</h3>
              <p style={{fontSize: '15px', color: 'var(--gray-500)', lineHeight: '1.8', margin: '0'}}>Users lose phones. They switch devices. They forget which authenticator app they used. When any of these things happen, the MFA system that protects them becomes the barrier that locks them out.</p>
              <p style={{fontSize: '15px', color: 'var(--gray-500)', lineHeight: '1.8', marginTop: '0.75rem'}}>Resetting an authentication method is inherently adversarial territory. The system must simultaneously serve two opposing needs: making recovery possible for the legitimate account holder, and making it impossible for an attacker who has gained partial access. This tension required its own dedicated design work.</p>
            </div>
            <div>
              <img
                src={basePath + "/images/sec-resetmfa-problem.png"}
                alt="Reset MFA entry point"
                style={{width: '100%', borderRadius: 'var(--radius-lg)'}}
              />
              <p className="cs-img-caption" style={{marginTop: '8px'}}>Entry point: surfaces "Reset authentication methods" when the user can no longer verify.</p>
            </div>
          </div>
        </section>

        {/* Reset MFA Sub-Flow */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>The Reset MFA Sub-Flow</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The reset flow was designed around progressive identity verification. Rather than a single gate, the user moves through a layered sequence — remaining active MFA methods, email confirmation, identity document verification, and cooling-off periods calibrated to the risk level of the action.</p>
              <p style={{marginTop: '0.75rem'}}>The flow adapts based on what the user still has access to. A user who has lost their authenticator app but still has phone verification faces a lighter path than a user who has lost access to all methods — proportionate enough to deter abuse, navigable enough that a legitimate user resolves the issue in minutes rather than days.</p>
            </div>
          </div>
          <img
            src={basePath + "/images/sec-resetmfa-flow.png"}
            alt="Reset MFA decision flow chart"
            className="reveal"
            style={{width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2rem', background: '#fff', padding: '2rem', boxSizing: 'border-box'}}
          />
          <p className="cs-img-caption reveal">The complete Reset MFA decision tree — branching from authentication availability through KYC identity verification to final approval or rejection.</p>
        </section>

        {/* Final Design */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Final Design</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The Reset MFA Module was built on the same modular architecture as the MFA Module itself — verification components, UI patterns, and error handling all inherited from the shared system designed in Part 1. This was the first real proof that the modular strategy worked: a complex new flow built by composing existing components rather than designing from scratch.</p>
              <p style={{marginTop: '0.75rem'}}>The self-service reset path directly addressed the CS pressure problem — resolving in minutes what previously took days of manual support intervention.</p>
            </div>
          </div>
          <img
            src={basePath + "/images/sec-resetmfa-final-design.png"}
            alt="Reset MFA final design"
            className="reveal"
            style={{width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2rem'}}
          />
          <p className="cs-img-caption reveal">Reset MFA final design — the complete self-service recovery flow from identity verification through to confirmation.</p>
        </section>

        {/* Reflection */}
        <section className="cs-step">
          <h2 className="reveal">Reflection</h2>
        </section>

        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>What Changed</h3>
            </div>
            <div className="cs-two-col-right">
              <p>The most immediate shift was consistency. For the first time, every security verification moment across the platform — regardless of business line, regardless of action type — follows the same patterns, uses the same components, and speaks the same visual language.</p>
              <p style={{marginTop: '0.75rem'}}>The modular architecture proved its value beyond the initial scope. When new product lines needed MFA integration, they could adopt the existing module rather than building from scratch — collapsing what used to be weeks of design and engineering work into straightforward implementation.</p>
            </div>
          </div>
          <div className="cs-two-col reveal" style={{marginTop: '2.5rem'}}>
            <div className="cs-two-col-left">
              <h3>What I'd Do Differently</h3>
            </div>
            <div className="cs-two-col-right">
              <p>I would involve CS earlier in the design process. The support team had the deepest understanding of where users struggled, and their real-time insights could have shaped the reset flow even more effectively if embedded in the design sprint from day one.</p>
              <p style={{marginTop: '0.75rem'}}>I would also push harder for quantitative baseline measurement before launch — precise before-and-after metrics on ticket volume, setup completion rates, and time-to-recovery would have made the impact easier to communicate to stakeholders.</p>
              <p style={{marginTop: '0.75rem'}}>Finally, I would explore internationalisation earlier. Security language — "authenticator," "passkey," "verification" — carries different connotations across cultures. Starting localisation research in the design phase rather than post-launch would have produced a more globally confident experience from day one.</p>
            </div>
          </div>
        </section>

      </div>

      <div className="cs-next">
        <a href="/projects/onboarding">Next project: User Onboarding Revamp →</a>
      </div>
    </>
  );
}
