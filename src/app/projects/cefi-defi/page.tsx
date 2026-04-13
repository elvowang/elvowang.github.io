import basePath from "@/lib/basePath";
export default function CefiDefiPage() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="cs-detail-hero" data-section="cf-intro">
        <a href="/" className="cs-back">&larr; Back to work</a>
        <h1 className="reveal">Cefi &lt;&gt; Defi Integration</h1>
        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Exchange-end Lead Designer</span>
          </div>
          <div className="cs-meta-item">
            <label>Duration</label>
            <span>2024</span>
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

      {/* Hero Image */}
      <div className="cs-detail-image">
        <div className="cefi-hero-banner reveal">
          <img
            src={basePath + "/images/cefi-hero-screens.jpg"}
            alt="CeFi DeFi wallet linking screens"
            style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'block' }}
          />
        </div>
      </div>

      <div className="cs-body-content">
        {/* Outcome */}
        <section className="cs-results">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Outcome</h2>
          <div className="result-cards">
            <div className="result-card reveal">
              <div className="number">284k</div>
              <div className="label">Linked Cefi accounts</div>
            </div>
            <div className="result-card reveal">
              <div className="number">260k</div>
              <div className="label">Linked Defi wallets</div>
            </div>
            <div className="result-card reveal">
              <div className="number">246k</div>
              <div className="label">Linked devices</div>
            </div>
            <div className="result-card reveal">
              <div className="number">219.8m</div>
              <div className="label">Assets transfer</div>
            </div>
          </div>
        </section>

        {/* Background & Objective */}
        <section className="cs-step" data-section="cf-overview">
          <h2 className="reveal">Background & Objective</h2>
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <p style={{ maxWidth: 'none' }}>To enable small-amount no-auth withdrawals and future referral scenarios, the account binding project links OKX accounts with Web3 wallets through a unified mechanism, streamlining business needs and enhancing user experience across the product ecosystem.</p>
            </div>
            <div className="cs-two-col-right">
              <div className="cs-info-block">
                <strong>Role</strong>
                <span>Exchange-end lead designer</span>
              </div>
              <div className="cs-info-block">
                <strong>Business line</strong>
                <span>Account, Assets, Web3 and Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Challenges */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Project Challenges</h3>
            </div>
            <div className="cs-two-col-right">
              <ul className="cs-bullet-list">
                <li>Fast launch and industry leader without PRD and benchmark</li>
                <li>Cross-team cooperation including Account, Assets, Wallet, and Growth</li>
                <li>Quick digest on new knowledge for Exchange designers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Target Users */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Target Users</h3>
            </div>
            <div className="cs-two-col-right">
              <ul className="cs-bullet-list">
                <li>Exchange users who have needs to transfer the assets to DeFi wallet</li>
                <li>DeFi users who have needs to transfer the assets from Exchange</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Goal */}
        <section className="cs-step cs-step-sub">
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <h3>Goal</h3>
            </div>
            <div className="cs-two-col-right">
              <p>Build an account binding mechanism that enables the connection between Exchange accounts and Web3 wallets, streamlining business needs and enhancing user experience across the product ecosystem.</p>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="cs-step" data-section="cf-context">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Industry Context</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>At the time of this project, CeFi–DeFi account linking was largely uncharted territory. Understanding the industry landscape was critical to defining our approach.</p>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🏦</div>
            <h3>Coinbase</h3>
            <p>Smart Wallet approach — unified identity layer but limited to Coinbase's own L2 (Base). Users still experienced friction when bridging to external chains. No true CeFi-to-DeFi wallet binding.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔶</div>
            <h3>Binance</h3>
            <p>Web3 wallet built into the app but operated as a separate product. Asset transfer between CeFi and DeFi required manual withdrawal/deposit flows — no seamless account linking.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">💳</div>
            <h3>Revolut / Robinhood</h3>
            <p>Crypto as a feature within traditional finance apps. No DeFi wallet integration at all — users couldn't access Web3 functions. Served as a reference for simplicity but not for our binding use case.</p>
          </div>
        </div>

        <section className="cs-step cs-step-sub">
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>No major platform had solved seamless CeFi-DeFi account binding with no-auth withdrawal capability. This positioned the project as an industry-first — with no established pattern to follow, which made the design exploration both higher-risk and higher-impact.</p>
        </section>

        {/* My Contribution */}
        <section className="cs-step" data-section="cf-contribution">
          <h2 className="reveal">My Contribution</h2>
          <div className="cs-two-col reveal">
            <div className="cs-two-col-left">
              <p>As the Exchange-end lead designer, I owned the end-to-end design of the wallet binding flow — from the initial confirmation screen through wallet selection to the linked-wallets management page.</p>
            </div>
            <div className="cs-two-col-right">
              <ul className="cs-bullet-list">
                <li>Defined the interaction model for connecting CeFi accounts to Web3 wallets with minimal friction</li>
                <li>Designed the trust layer: confirmation screens, wallet verification, and security copy that reduced user hesitation</li>
                <li>Coordinated with Assets, Wallet, and Growth teams to align 4 business lines on a single, coherent flow</li>
                <li>Led design reviews and stakeholder alignment without a formal PRD — driving from ambiguity to shipped product</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cross-functional Collaboration */}
        <section className="cs-step" data-section="cf-collab">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Cross-functional Collaboration</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>Four business lines, no PRD, tight timeline. Here's how I navigated the collaboration across teams to ship a coherent product.</p>
        </section>

        <div className="cs-annotations" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="cs-annotation reveal" style={{ background: '#F0F9FF', borderColor: '#BAE6FD' }}>
            <div className="cs-annotation-screen" style={{ color: '#0369A1' }}>Account Team</div>
            <p>Primary stakeholder. Owned the user identity layer. I aligned with their PM on what data the binding confirmation screen needed to display, and negotiated scope — pushing back on a 6-screen flow to ship a 4-screen MVP.</p>
          </div>
          <div className="cs-annotation reveal" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
            <div className="cs-annotation-screen" style={{ color: '#15803D' }}>Assets Team</div>
            <p>Owned the withdrawal and transfer logic. I worked with their engineers to understand no-auth withdrawal limits and designed the trust layer copy around those constraints — ensuring users understood exactly what "no authentication needed" meant.</p>
          </div>
          <div className="cs-annotation reveal" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
            <div className="cs-annotation-screen" style={{ color: '#C2410C' }}>Web3 / Wallet Team</div>
            <p>Owned wallet infrastructure and chain support. As an Exchange designer, DeFi wallet concepts were new territory. I ran knowledge-sharing sessions with their team to learn wallet architecture, then translated technical constraints into user-friendly interaction patterns.</p>
          </div>
          <div className="cs-annotation reveal" style={{ background: '#FAF5FF', borderColor: '#E9D5FF' }}>
            <div className="cs-annotation-screen" style={{ color: '#7E22CE' }}>Growth Team</div>
            <p>Joined in phase 2 for referral rewards. I proactively designed the binding flow to be extensible — so when Growth needed to attach referral incentives to wallet linking, it required minimal redesign of the core flow.</p>
          </div>
        </div>

        {/* Design Principles */}
        <section className="cs-step" data-section="cf-principles">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Design Principles</h2>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">🔗</div>
            <h3>Minimize Cognitive Load</h3>
            <p>Users shouldn't need to understand blockchain mechanics to link a wallet. Abstract away chain selection, address formats, and key management behind familiar patterns.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🛡️</div>
            <h3>Trust Through Transparency</h3>
            <p>Every binding action shows exactly what will happen — which wallet, which account, what permissions. No hidden steps. Security copy is human-readable, not legalese.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔄</div>
            <h3>Progressive Disclosure</h3>
            <p>Start simple (one wallet, one account), then reveal complexity only when users need it — multi-wallet management, device linking, and payout configurations.</p>
          </div>
        </div>

        {/* Step 1: Exploration & Problem Define */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="cf-process">
          <div className="step-label reveal">Step 1</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Exploration & Problem Define</h2>
        </section>

        <section className="cs-step cs-step-sub">
          <p className="reveal">Mapped the existing fragmented flow between Exchange and Web3 wallet interfaces. Benchmarked competitor approaches and identified that most platforms forced users through complex multi-step verification with little contextual guidance — creating a trust gap at the most critical moment of asset linking.</p>
        </section>

        {/* Step 2: Design Solution */}
        <section className="cs-step" style={{ textAlign: 'center' }}>
          <div className="step-label reveal">Step 2</div>
          <h2 className="reveal" style={{ textAlign: 'center' }}>Design Solution</h2>
        </section>

        <section className="cs-step cs-step-sub">
          <img
            src={basePath + "/images/cedefi-solution-web.jpg"}
            alt="Final design solution screens"
            className="reveal"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
          />
        </section>

        {/* Key Design Decisions */}
        <section className="cs-step" style={{ textAlign: 'center' }} data-section="cf-decisions">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Key Design Decisions</h2>
        </section>

        <div className="cs-annotations">
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Confirmation Screen</div>
            <p>Show wallet address, account email, and chain icons upfront so users verify the binding before committing. One-tap confirm with Face ID reduces friction while maintaining security.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Wallet Selection</div>
            <p>Group wallets by source (Private key, Wallet A, Wallet C) rather than by chain. Users think in terms of "which wallet" not "which blockchain" — reducing selection errors.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Account Picker</div>
            <p>Show all linked accounts with truncated addresses and chain badges. Users can quickly identify the right account without needing to memorise full addresses.</p>
          </div>
          <div className="cs-annotation reveal">
            <div className="cs-annotation-screen">Linked Wallets Hub</div>
            <p>Post-binding management page with clear hierarchy: wallet name, address preview, and chain indicator. "Link another wallet" CTA positioned at the bottom to encourage expansion without overwhelming first-time users.</p>
          </div>
        </div>

        {/* Iteration (Phase 2) */}
        <section className="cs-step" data-section="cf-iteration">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Iteration</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 32px' }}>After the success of phase 1 (cefi and defi integration), phase 2 added referral rewards assignment on defi wallets, expanding design across Account and Growth team, in order to nudge Exchange users more on the defi wallets ecosystem.</p>
          <img
            src={basePath + "/images/cedefi-iteration.jpg"}
            alt="Phase 2 iteration screens"
            className="reveal"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
          />
        </section>

        {/* Learnings & Reflection */}
        <section className="cs-step" data-section="cf-learnings">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Learnings & Reflection</h2>
        </section>

        <div className="cs-pillars">
          <div className="pillar reveal">
            <div className="pillar-icon">💡</div>
            <h3>Shipping Without a PRD Can Be a Strength</h3>
            <p>With no formal spec, design became the de facto product document. I learned that producing high-fidelity flows early forced alignment faster than waiting for a written PRD — the visual artifact became the shared language across 4 teams.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🔍</div>
            <h3>Design for the Next Feature, Not Just This One</h3>
            <p>Building the binding flow as a modular system — rather than a one-off feature — paid off when phase 2 (referral rewards) arrived. The extensible design saved weeks of rework. I now treat every V1 as a platform, not a page.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">🤝</div>
            <h3>Cross-Domain Learning Multiplies Impact</h3>
            <p>As an Exchange designer entering DeFi territory, the learning curve was steep. But investing time in understanding wallet architecture — not just the UI layer — enabled me to challenge technical assumptions and propose simpler interaction models that engineers hadn't considered.</p>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="cs-next">
        <a href="/projects/security">Next project: OKX Security Centre →</a>
      </div>
    </div>
  );
}
