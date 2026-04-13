'use client';
import basePath from "@/lib/basePath";

export default function CompetitorAnalysisPage() {
  return (
    <div className="cs-body-content" style={{ background: 'white', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="cs-detail-hero">
        <a href="/projects/onboarding" className="cs-back">← Back to Onboarding</a>
        <h1>Sign up happy flow — Competitor Analysis</h1>
      </section>

      {/* Content */}
      <section className="cs-step" style={{ paddingTop: 0 }}>

        {/* 1. OKX — 7 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">7</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">OKX</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-OKX.png"} alt="OKX sign-up flow" />
            </div>
          </div>
        </div>

        {/* 2. Binance — 4 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">4</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">Binance</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-binance.png"} alt="Binance sign-up flow" />
            </div>
          </div>
        </div>

        {/* 3. Coinbase — 27 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">27</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">Coinbase</div>
            <div className="competitor-sub-label">App</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-coinbase-app.png"} alt="Coinbase app sign-up flow" />
            </div>
            <div className="competitor-sub-label">Web</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-coinbase-web.png"} alt="Coinbase web sign-up flow" />
            </div>
          </div>
        </div>

        {/* 4. Bitvavo — 6 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">6</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">Bitvavo</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-bitvavo.png"} alt="Bitvavo sign-up flow" />
            </div>
          </div>
        </div>

        {/* 5. Robinhood — 12 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">12</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">Robinhood</div>
            <div className="competitor-sub-label">App</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-robinhood-app.png"} alt="Robinhood app sign-up flow" />
            </div>
            <div className="competitor-sub-label">Web</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-robinhood-web.png"} alt="Robinhood web sign-up flow" />
            </div>
          </div>
        </div>

        {/* 6. Revolut — 23 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">23</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">Revolut</div>
            <div className="competitor-sub-label">App (Part 1)</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-revolut1.png"} alt="Revolut sign-up flow part 1" />
            </div>
            <div className="competitor-sub-label">App (Part 2)</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-revolut2.png"} alt="Revolut sign-up flow part 2" />
            </div>
          </div>
        </div>

        {/* 7. Bybit — 2 steps */}
        <div className="competitor-row">
          <div className="competitor-step-count">
            <span className="step-number">2</span>
            <span className="step-label-text">steps</span>
          </div>
          <div className="competitor-flow">
            <div className="competitor-header">Bybit</div>
            <div className="competitor-sub-label">App</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-bybit-app.png"} alt="Bybit app sign-up flow" />
            </div>
            <div className="competitor-sub-label">Web</div>
            <div className="competitor-images">
              <img src={basePath + "/images/onboard-competitoranalysis/onboard-competitoranalysis-bybit-web.png"} alt="Bybit web sign-up flow" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
