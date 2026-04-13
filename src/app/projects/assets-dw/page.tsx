import basePath from "@/lib/basePath";
import Link from 'next/link';
import DTTabs from '@/components/dt-tabs';

export default function AssetsDWPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="cs-detail-hero" data-section="dw-intro">
        <Link href="/" className="cs-back">← Back to work</Link>
        <h1 className="reveal">Design Thinking in Assets Deposit &amp; Withdrawal</h1>
        <p className="subtitle reveal">Leading a design thinking initiative to upgrade the deposit and withdrawal experience for OKX&apos;s Assets module — from problem discovery to validated solutions.</p>
        <div className="cs-meta reveal">
          <div className="cs-meta-item">
            <label>Role</label>
            <span>Design Lead</span>
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

      {/* Hero Image */}
      <div className="cs-detail-image">
        <img className="reveal" src={basePath + "/images/home-assets-card.jpg"} alt="Assets Deposit & Withdrawal screens" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
      </div>

      <div className="cs-body-content">

        {/* Outcome Section — at the top */}
        <section className="cs-results" data-section="dw-outcome">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Outcome</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>The design thinking approach led to measurable improvements across the deposit and withdrawal experience.</p>
          <div className="result-cards">
            <div className="result-card reveal">
              <div className="number">-40.2%</div>
              <div className="label">Deposit CS tickets reduce</div>
            </div>
            <div className="result-card reveal">
              <div className="number">-20.9%</div>
              <div className="label">Withdrawal CS tickets reduce</div>
            </div>
            <div className="result-card reveal">
              <div className="number">+7.2%</div>
              <div className="label">Withdrawal conversion rate increase</div>
            </div>
            <div className="result-card reveal">
              <div className="number">+4%</div>
              <div className="label">First deposit conversion rate increase</div>
            </div>
          </div>
        </section>

        {/* Design Thinking Approach — Interactive Tabs */}
        <section className="cs-step" data-section="dw-overview">
          <h2 className="reveal" style={{ textAlign: 'center' }}>Design Thinking Approach</h2>
          <p className="reveal" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            We adopted a structured design thinking framework to tackle these problems systematically — moving through four key phases from discovery to implementation.
          </p>
          <DTTabs />
        </section>

        {/* Current States */}
        <section className="cs-step" data-section="dw-current">
          <div className="problem-define-section reveal">
            <div className="problem-define-header">
              <div className="step-label">Project Context</div>
              <h2>Current States</h2>
              <p>Before applying the design thinking framework, we mapped where users were struggling. The OKX Assets deposit &amp; withdrawal experience had accumulated friction over time — three recurring pain points surfaced repeatedly across CS tickets, self-audits, and user feedback, forming the initial brief that drove the entire project.</p>
            </div>
            <div className="problem-define-cards">
              <div className="problem-card">
                <div className="problem-card-mockup">
                  <img src={basePath + "/images/assets-problem1.png"} alt="New user access barrier — deposit page and assets overview" />
                </div>
                <div className="problem-card-text">
                  <div className="problem-card-num">01</div>
                  <h3>New user access barrier</h3>
                  <p>Newbies arriving at OKX get lost on the Assets main page — no clear CTA on deposit, no guided next step.</p>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-card-mockup">
                  <img src={basePath + "/images/assets-problem2.png"} alt="Break point on user flow — withdrawal confirmation and detail" />
                </div>
                <div className="problem-card-text">
                  <div className="problem-card-num">02</div>
                  <h3>Break point on user flow</h3>
                  <p>After withdrawal submission, no blockchain confirmation tracking — causing anxiety. Statuses are unclear on result pages.</p>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-card-mockup">
                  <img src={basePath + "/images/assets-problem3.png"} alt="Lack of necessary information — network selection without context" />
                </div>
                <div className="problem-card-text">
                  <div className="problem-card-num">03</div>
                  <h3>Lack of necessary info &amp; functions</h3>
                  <p>No network difference info to help users choose. No address book to reduce repeated trust-address friction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase: 01 Discovery */}
        <div className="phase-wrapper" data-section="dw-discovery">
          <div className="phase-label reveal">01 — Discovery</div>
        </div>

        {/* Empathy Section */}
        <section className="cs-step">
          <div className="empathy-section reveal">
            <div className="problem-define-header">
              <div className="step-label">Research &amp; Empathy</div>
              <h2>How do we empathize?</h2>
              <p>We gathered insights from five research streams to deeply understand user pain points across deposit and withdrawal journeys.</p>
            </div>

            {/* Row 1 */}
            <div className="empathy-grid">
              <div className="empathy-card">
                <div className="empathy-card-text">
                  <h3>Secondary study</h3>
                  <p>We don&apos;t need to start everything from zero. In fact, existing industry reports, existing user research materials in company&apos;s internal system are good place to begin with</p>
                </div>
                <div className="empathy-card-media">
                  <img src={basePath + "/images/assets-empathy-secondarystudy.png"} alt="Secondary study — existing industry reports and internal research materials" />
                </div>
              </div>
              <div className="empathy-card">
                <div className="empathy-card-text">
                  <h3>Quantitative analysis</h3>
                  <p>By extracting the relevant data from a data platform called Amplitude, we are able to get the basic demographic information of our users, and basic adoption rates<br /><a href="/projects/assets-data-driven" style={{ color: '#3b82f6', fontWeight: 500, fontSize: '13px' }}>View full data report &rarr;</a></p>
                </div>
                <div className="empathy-card-media">
                  <img src={basePath + "/images/assets-empathy-quantitative.png"} alt="Quantitative analysis — OKX asset user behavioral data and segmentation from Amplitude" />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="empathy-grid">
              <div className="empathy-card">
                <div className="empathy-card-text">
                  <h3>CS (customer service) feedback</h3>
                  <p>With the help of CS teams and PMs, some top customer complains tickets are categorised into 5 different topics, which helps us to narrow the focus of resources later</p>
                </div>
                <div className="empathy-card-media">
                  <img src={basePath + "/images/assets-empathy-cs.png"} alt="CS feedback — top deposit and withdrawal complaint categories" />
                </div>
              </div>
              <div className="empathy-card">
                <div className="empathy-card-text">
                  <h3>Empathy by self-audit</h3>
                  <p>We are all users, as product designers, the team members stand in users&apos; shoes to go through the journeys to finish tasks, and mark down the experience gap</p>
                </div>
                <div className="empathy-card-media">
                  <img src={basePath + "/images/assets-empathy-audit.png"} alt="Empathy by self-audit — heuristic evaluation with user personas" />
                </div>
              </div>
            </div>

            {/* Row 3: Interviews — full width */}
            <div className="empathy-grid">
              <div className="empathy-card full-width">
                <div className="empathy-card-text">
                  <h3>Interviews</h3>
                  <p>Cooperating with user researcher, we defined the target users characteristics by demographic information from Amplitude and defined the users insights that we would like to find out, and also defined the questions list that we would like to ask the participants. In additional, we defined the scope of the flows that we want to ask:</p>
                  <ul>
                    <li>view your assets</li>
                    <li>finish one crypto deposit order</li>
                    <li>finish one crypto withdrawal order</li>
                  </ul>
                </div>
                <div className="empathy-card-media">
                  <img src={basePath + "/images/assets-empathy-interview.png"} alt="Interviews — affinity mapping from China and overseas users" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase: 02 Define */}
        <div className="phase-wrapper" data-section="dw-define">
          <div className="phase-label reveal">02 — Define</div>
        </div>

        {/* Define — Personas + Journey Map */}
        <section className="cs-step">
          <div className="define-section reveal">
            <div className="problem-define-header">
              <div className="step-label">User Understanding</div>
              <h2>Personas &amp; User Journey Map</h2>
              <p>Based on the user characteristics and insights found through interviews, two personas and a user journey map have come out.</p>
            </div>
            <div className="define-persona-grid">
              <div className="define-persona-card">
                <img src={basePath + "/images/assets-okx-china-user-persona-wip.png"} alt="Li Zhi Gang — mid-experienced OKX China user persona" />
              </div>
              <div className="define-persona-card">
                <img src={basePath + "/images/assets-newbie-persona.png"} alt="Vivek Patel — newbie user persona" />
              </div>
            </div>
            <div className="define-journey-map">
              <img src={basePath + "/images/assets-define-userjourneymap.png"} alt="Current user journey map — HODLr and Retail Trader crypto exchange engagement journey" />
            </div>
          </div>
        </section>

        {/* Phase: 03 Ideation */}
        <div className="phase-wrapper" data-section="dw-ideation">
          <div className="phase-label reveal">03 — Ideation</div>
        </div>

        {/* Ideation Section */}
        <section className="cs-step">
          <div className="ideation-section reveal">
            <div className="problem-define-header">
              <div className="step-label">Workshops &amp; Concepts</div>
              <h2>How might we solve this?</h2>
            </div>

            <div className="ideation-top">
              <div className="ideation-description">
                <p>Invited stakeholders (PMs, CDs, other teams&apos; PDs, upper management) to the brainstorming workshop, divided them into five different groups, and every group were assigned one journey stage to focus discussion and come up with possible solutions to all the pain points from the previous user journey map. All members from the same group then voted for the 3 ideas they think are most valuable. At the end, every group shared their conclusions with all participants.</p>
                <p>As the time was limited, all outcomes are sketches.</p>
              </div>
              <div className="ideation-board">
                <img src={basePath + "/images/assets-ideation.png"} alt="FigJam brainstorming workshop board — five groups across five journey stages" />
              </div>
            </div>

            <div className="ideation-highlights-label">Some highlights from the ideation results:</div>

            <div className="ideation-scroll">
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation1.png"} alt="Withdrawal asset type selection screen" /></div>
                <div className="sticky-note green">
                  <p>Select the withdraw asset type before go into withdrawal journey</p>
                  <div className="sticky-author">Elvo Wang</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation2.png"} alt="Withdraw crypto to screen" /></div>
                <div className="sticky-note green">
                  <p>One click withdrawal or trusted payee</p>
                  <div className="sticky-author">Elvo Wang</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation3.png"} alt="Crypto distribution overview" /></div>
                <div className="sticky-note green">
                  <p>Show the portion of cryptos distribution</p>
                  <div className="sticky-author">Elvo Wang</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation4.png"} alt="Withdrawal network selection" /></div>
                <div className="sticky-note green">
                  <strong>Selection rate for a network selection</strong>
                  <p>Showcasing users with the selection % of each network can help them make a decision easily, and also make them feel secured by the reference.</p>
                  <div className="sticky-author">Eddie CHAK</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation5.png"} alt="Deposit network selection" /></div>
                <div className="sticky-note green">
                  <p>May be provide the suggested network for them to choose and any reason behind.</p>
                  <div className="sticky-author">Yanss Tsang</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation6.png"} alt="2FA gamification concept" /></div>
                <div className="sticky-note blue">
                  <strong>Gamification</strong>
                  <p>The gamification of trading makes trading less intimidating for newbies, and it also fosters a community among advanced traders celebrating the achievements. Good examples like eToro, League of Traders, and Zignaly — make trading simple as a game.</p>
                  <div className="sticky-author">Mandy Wu</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation7.png"} alt="Biometric verification sketch" /></div>
                <div className="sticky-note green">
                  <p>really like biometric as a user to verify, quick easy, frictionless... would be amazing to use is as much as possible</p>
                  <div className="sticky-author">Bennett</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation8.png"} alt="2FA verification sketch" /></div>
                <div className="sticky-note green">
                  <strong>2FA</strong>
                  <p>With existing email and phone verifications, making use of biometrics verification can also help customers feel we&apos;re working on leveling up our security.</p>
                  <ul>
                    <li>Using Touch/Face ID when opening the app</li>
                    <li>Using Touch/Face ID for another verification approach before making transactions</li>
                    <li>Using Touch/Face ID for verification when users edit critical information such as address book</li>
                  </ul>
                  <div className="sticky-author">Eddie CHAK</div>
                </div>
              </div>
              <div className="ideation-card">
                <div className="ideation-card-img"><img src={basePath + "/images/assets-ideation9.png"} alt="2FA email confirmation sketch" /></div>
                <div className="sticky-notes-stack">
                  <div className="sticky-note pink">
                    <p>During 2FA — bottom sheet of suggested E-mail app appears</p>
                    <div className="sticky-author">Bennett</div>
                  </div>
                  <div className="sticky-note pink">
                    <p>Personify block confirmation with a live dial UI</p>
                    <div className="sticky-author">Bennett</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase: 04 Implementation */}
        <div className="phase-wrapper" data-section="dw-implementation">
          <div className="phase-label reveal">04 — Implementation</div>
        </div>

        {/* Implementation Section */}
        <section className="cs-step">
          <div className="implement-section reveal">
            <div className="problem-define-header">
              <div className="step-label">Design &amp; Delivery</div>
              <h2>Implementing the Solutions</h2>
            </div>

            <div className="implement-steps">
              <div className="implement-step">
                <div className="implement-step-num">1</div>
                <div className="implement-step-text">Vote for severity</div>
              </div>
              <div className="implement-step">
                <div className="implement-step-num">2</div>
                <div className="implement-step-text">Categorise into UX/UI improvements and product logic improvements</div>
              </div>
              <div className="implement-step">
                <div className="implement-step-num">3</div>
                <div className="implement-step-text">Prioritise all tasks and align with PMs</div>
              </div>
              <div className="implement-step">
                <div className="implement-step-num">4</div>
                <div className="implement-step-text">Plan in sprint pace, conduct competitor analysis, and deliver the design solutions</div>
              </div>
            </div>

            <div className="implement-flow-group">
              <div className="implement-ba-block before">
                <div className="implement-ba-label">
                  <span className="ba-tag">Before</span>
                  <span className="ba-title">Deposit</span>
                </div>
                <div className="implement-ba-image">
                  <img src={basePath + "/images/assets-implementation-depositbefore.png"} alt="Before — deposit flow screens" />
                </div>
              </div>
              <div className="implement-ba-connector">↓</div>
              <div className="implement-ba-block after">
                <div className="implement-ba-label">
                  <span className="ba-tag">After</span>
                  <span className="ba-title">Deposit</span>
                </div>
                <div className="implement-ba-image">
                  <img src={basePath + "/images/assets-implementation-depositafter.png"} alt="After — redesigned deposit flow screens" />
                </div>
              </div>
            </div>

            <div className="implement-flow-group">
              <div className="implement-ba-block before">
                <div className="implement-ba-label">
                  <span className="ba-tag">Before</span>
                  <span className="ba-title">Withdrawal</span>
                </div>
                <div className="implement-ba-image">
                  <img src={basePath + "/images/assets-implementation-withdrawalbefore.png"} alt="Before — withdrawal flow screens" />
                </div>
              </div>
              <div className="implement-ba-connector">↓</div>
              <div className="implement-ba-block after">
                <div className="implement-ba-label">
                  <span className="ba-tag">After</span>
                  <span className="ba-title">Withdrawal</span>
                </div>
                <div className="implement-ba-image">
                  <img src={basePath + "/images/assets-implementation-withdrawalafter.png"} alt="After — redesigned withdrawal flow screens" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase: Next Step */}
        <div className="phase-wrapper" data-section="dw-nextstep">
          <div className="phase-label reveal">Next Step</div>
        </div>

        {/* Next Step Section */}
        <section className="cs-step">
          <div className="nextstep-section reveal">
            <div className="problem-define-header">
              <div className="step-label">Beyond the Project</div>
              <h2>What Came Next</h2>
            </div>

            <p className="nextstep-body">Some of the ideations haven&apos;t reached the delivery stage when I was in Assets. The following design delivery was conducted after I left the Assets team, but the concept had come out in the design thinking project — the original ideas can be found in the sketches on the Ideation page.</p>

            <div className="nextstep-grid">
              <div className="nextstep-card">
                <div className="nextstep-card-title">Combine the buy and deposit</div>
                <div className="nextstep-card-img">
                  <img src={basePath + "/images/assets-next-step1.png"} alt="Combine buy and deposit screen" />
                </div>
              </div>
              <div className="nextstep-card">
                <div className="nextstep-card-title">Add help info</div>
                <div className="nextstep-card-img">
                  <img src={basePath + "/images/assets-next-step2.png"} alt="Add help info screen" />
                </div>
              </div>
              <div className="nextstep-card">
                <div className="nextstep-card-title">Crypto allocation visually</div>
                <div className="nextstep-card-img">
                  <img src={basePath + "/images/assets-next-step3.png"} alt="Crypto allocation visual screen" />
                </div>
              </div>
              <div className="nextstep-card">
                <div className="nextstep-card-title">Separate the verification and add biometrics</div>
                <div className="nextstep-card-img">
                  <img src={basePath + "/images/assets-next-step4.png"} alt="Separate verification and biometrics screens" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>{/* /cs-body-content */}

      <div className="cs-next">
        <Link href="/projects/hsbc">Next project: HSBC Global IA Guideline →</Link>
      </div>
    </>
  );
}
