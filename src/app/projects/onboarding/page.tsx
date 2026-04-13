import basePath from "@/lib/basePath";
export default function OnboardingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="cs-detail-hero reveal">
        <a href="/" className="cs-back">← Back to work</a>

        <h1 className="reveal">User Onboarding UXUI Revamp</h1>

        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Account Lead Designer</span>
          </div>
          <div className="cs-meta-item">
            <label>Duration</label>
            <span>2023</span>
          </div>
          <div className="cs-meta-item">
            <label>Platform</label>
            <span>iOS, Android</span>
          </div>
          <div className="cs-meta-item">
            <label>Company</label>
            <span>OKX</span>
          </div>
        </div>
      </section>

      {/* Screen Flow Image */}
      <div className="cs-detail-image">
        <img
          src={basePath + "/images/onboarding-card-wide.jpg"}
          alt="Onboarding screen flow"
          className="reveal"
          style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
        />
      </div>

      {/* Body Content */}
      <div className="cs-body-content">

        {/* Outcome */}
        <section className="cs-results reveal">
          <h2 style={{ textAlign: 'center' }}>Outcome</h2>
          <div className="result-cards">
            <div className="result-card reveal">
              <div className="number">13→7</div>
              <div className="label">Signup screens cut from 13 to 7, fewest among all benchmarked competitors</div>
            </div>
            <div className="result-card reveal">
              <div className="number">+2.9%</div>
              <div className="label">Signup-to-KYC intent rate, validated through sequential AB tests</div>
            </div>
            <div className="result-card reveal">
              <div className="number">6</div>
              <div className="label">Projects shipped in one pipeline: flow revamp, passkey, SMS, captcha, CTA split, EEA</div>
            </div>
            <div className="result-card reveal">
              <div className="number">10+</div>
              <div className="label">Regional variants with tailored compliance, ToS, and passkey flows</div>
            </div>
          </div>
        </section>

        {/* Background & Objective */}
        <section className="cs-step reveal">
          <h2>Background & Objective</h2>
          <p>With expanding regulatory requirements, increasing friction in the registration flow and driving measurable conversion drops. Redundant verification steps and fragmented UX across modules further amplified early-stage user abandonment. In parallel, a full brand upgrade introduced new design system standards that the onboarding experience no longer supported. The revamp focused on reducing unnecessary steps, restructuring the registration flow, and aligning UX/UI with the new brand—directly targeting improved registration completion and faster first-time activation.</p>
        </section>

        {/* 3 Pillars */}
        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">📋</div>
            <h3>Compliance Needs</h3>
            <p>Adding compliance requirements on more users data collection.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">📈</div>
            <h3>Conversion Rate</h3>
            <p>Increasing new user registration conversion rate</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🎨</div>
            <h3>Product Branding Upgrade</h3>
            <p>Upgrading new branding of colour, fonts, illustration and components</p>
          </div>
        </div>

        {/* Team */}
        <section className="cs-step reveal">
          <h2>Team</h2>
          <div className="cs-team-info reveal">
            <ul>
              <li>The big project contains Account, Compliance and Assets teams to cover from app launch to KYC filled and first deposit</li>
              <li>My role is Account Lead designer to cover from app launch to registration finish</li>
            </ul>
          </div>
        </section>

        {/* STEP 1: Problem Define */}
        <section className="cs-step reveal" style={{ textAlign: 'center' }}>
          <div className="step-label">Step 1</div>
          <h2>Problem Define</h2>
        </section>

        {/* Sub: Production Issues */}
        <section className="cs-step cs-step-sub reveal">
          <h3>Production Issues</h3>
          <img
            src={basePath + "/images/onboarding-production-issues.jpg"}
            alt="Production issues analysis"
            className="reveal"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', aspectRatio: 'auto' }}
          />
        </section>

        {/* Sub: Competitor Analysis */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Competitor Analysis</h3>
            </div>
            <div className="cs-two-col-right">
              <p>A comprehensive competitor analysis was conducted to inform the redesign of the OKX onboarding experience. The benchmark included four leading financial and crypto platforms: Coinbase, Bybit, Robinhood, and Revolut. The objective was to identify industry best practices, evaluate onboarding patterns, and uncover opportunities to strengthen OKX's clarity, trust, and early user activation.</p>
              <a href="/projects/onboarding/competitor-analysis" className="cs-ref-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Onboarding experience competitor analysis
              </a>
            </div>
          </div>
        </section>

        {/* STEP 2: Ideation */}
        <section className="cs-step reveal" style={{ textAlign: 'center' }}>
          <div className="step-label">Step 2</div>
          <h2>Ideation</h2>
        </section>

        <section className="cs-step cs-step-sub">
          <p className="reveal">We ran proposal workshops with cross-functional stakeholders to generate and evaluate solutions. The team explored simplified verification flows, progressive disclosure of compliance requirements, and region-adaptive onboarding paths.</p>
          <img
            src={basePath + "/images/onboarding-ideation-screens.jpg"}
            alt="Ideation proposal screens"
            className="step-image reveal"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', aspectRatio: 'auto' }}
          />
        </section>

        {/* STEP 3: Design Solution */}
        <section className="cs-step reveal" style={{ textAlign: 'center' }}>
          <div className="step-label">Step 3</div>
          <h2>Design Solution</h2>
        </section>

        <section className="cs-step cs-step-sub">
          <img
            src={basePath + "/images/onboarding-design-solution.jpg"}
            alt="Design solution screens"
            className="step-image reveal"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', aspectRatio: 'auto' }}
          />
        </section>

        {/* Design Annotations */}
        <div className="cs-annotations">
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 1 — Welcome</div>
            <p>Allow the user access to the app and get first glance at all functions, which successfully nudge the new user continue on registration. Upgrade the new branding to express more modern style.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 2 — Location</div>
            <p>Reorganise the information, put the user's main task on the top and rewards information as a subtle tip above the action button. Upgrade the new branding of input/selection components with background colour, to increase the focus of user's attention.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 3 — Terms</div>
            <p>Introduce more visual way to show the COI/country of residence. Put policy as a separate page but don't need the user to click checkbox one by one, which reduce the clicks and keep information layout clean.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 4 — Email</div>
            <p>Shrink the third-party signup/login buttons to stand out the main signup button. Re-write the title to describe a clear action in more human language style.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 5 — Verification</div>
            <p>Re-write the title to describe a clear action in more human language style. Provide clear copy for referral code and more intuitive interaction for code input.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 6 — Passkey</div>
            <p>Remove the animation which distract the user's attention. Re-organise and re-write the title and bullet points to show clear benefits that the user can get by setting up passkey.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Screen 7 — Post-login</div>
            <p>Direct the user to the post-login home page to have a break on onboarding journey, and show more functions or product interests to motivate the user to continue on KYC and deposit.</p>
          </div>
        </div>

      </div>

      {/* Next Project */}
      <div className="cs-next">
        <a href="/projects/assets-dw">Next project: Assets Design Thinking →</a>
      </div>
    </>
  );
}
