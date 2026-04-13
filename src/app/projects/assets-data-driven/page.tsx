import basePath from "@/lib/basePath";
export default function AssetsDataDrivenPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ===== QUANTITATIVE REPORT ===== */

        .qr-page {
          max-width: 1440px;
          margin: 0 auto;
          padding: 100px 40px 60px;
        }

        .qr-back {
          display: inline-block;
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 40px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .qr-back:hover { color: #111827; }

        /* Header */
        .qr-header {
          margin-bottom: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid #e5e7eb;
        }

        .qr-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #dc2626;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .qr-header h1 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.15;
          color: #111827;
          margin-bottom: 16px;
          max-width: 800px;
        }

        .qr-header .qr-desc {
          font-size: 17px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 720px;
          margin-bottom: 24px;
        }

        .qr-meta-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #9ca3af;
        }
        .qr-meta-row span { color: #374151; font-weight: 500; }

        /* Blocks */
        .qr-block {
          margin-bottom: 56px;
        }

        .qr-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .qr-block h2 {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .qr-block h3 {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 12px;
          margin-top: 32px;
        }

        .qr-block > p, .qr-prose {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 720px;
          margin-bottom: 24px;
        }

        .qr-divider {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 56px 0;
        }

        /* KPI cards */
        .qr-kpi-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 28px;
        }

        .qr-kpi {
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 20px;
        }

        .qr-kpi.alert { background: #fef2f2; border-color: #fecaca; }
        .qr-kpi.alert .qr-kpi-val { color: #dc2626; }
        .qr-kpi.warn { background: #fffbeb; border-color: #fde68a; }
        .qr-kpi.warn .qr-kpi-val { color: #d97706; }

        .qr-kpi-val {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -1px;
          color: #111827;
          line-height: 1;
          margin-bottom: 6px;
        }

        .qr-kpi-label {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.4;
        }

        .qr-kpi-sub {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 3px;
        }

        /* ====== FUNNEL — true trapezoid funnel ====== */
        .qr-funnel-wrap {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 32px;
          align-items: start;
          margin-bottom: 28px;
        }

        .qr-funnel-stages {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-funnel-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          color: #fff;
          margin-top: -1px;
          min-width: 280px;
          position: relative;
          /* NO clip-path here — shape lives on ::before so text is never clipped */
        }

        /* Pseudo-element carries the trapezoid shape + color */
        .qr-funnel-stage::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 2px;
        }

        .qr-funnel-stage .fi {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 52px;
          position: relative;
          z-index: 1;
          gap: 12px;
        }

        .qr-funnel-stage .fl {
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          white-space: nowrap;
        }

        .qr-funnel-stage .fv {
          display: flex;
          align-items: baseline;
          gap: 8px;
          white-space: nowrap;
        }

        .qr-funnel-stage .fp {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        .qr-funnel-stage .fu {
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
        }

        /* Deposit funnel — blue to red gradient stages (shape on ::before) */
        /* Each stage: same height (60px), narrowing widths, gentle 3% taper per side */
        .qr-funnel-stage.d1 { width: 100%; }
        .qr-funnel-stage.d1::before { background: #3b82f6; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.d2 { width: 90%; }
        .qr-funnel-stage.d2::before { background: #3b82f6; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.d3 { width: 78%; }
        .qr-funnel-stage.d3::before { background: #2563eb; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.d4 { width: 66%; }
        .qr-funnel-stage.d4::before { background: #f59e0b; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.d5 { width: 52%; }
        .qr-funnel-stage.d5::before { background: #ef4444; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }

        /* On-chain withdrawal funnel — emerald stages (shape on ::before) */
        .qr-funnel-stage.oc1 { width: 100%; }
        .qr-funnel-stage.oc1::before { background: #059669; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.oc2 { width: 88%; }
        .qr-funnel-stage.oc2::before { background: #059669; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.oc3 { width: 78%; }
        .qr-funnel-stage.oc3::before { background: #047857; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.oc4 { width: 68%; }
        .qr-funnel-stage.oc4::before { background: #047857; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }
        .qr-funnel-stage.oc5 { width: 60%; }
        .qr-funnel-stage.oc5::before { background: #065f46; clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%); }

        .qr-fdrop {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 3px 0;
        }
        .qr-fdrop .dl { width: 36px; height: 1px; background: #fecaca; }
        .qr-fdrop .dt { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #ef4444; font-weight: 500; }

        .qr-fdrop-g .dl { background: #a7f3d0; }
        .qr-fdrop-g .dt { color: #059669; }
        .qr-fdrop-a .dl { background: #fde68a; }
        .qr-fdrop-a .dt { color: #d97706; }

        .qr-funnel-callout {
          padding-top: 40px;
        }
        .qr-callout-box {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          padding: 16px;
          font-size: 13px;
          color: #991b1b;
          line-height: 1.5;
        }
        .qr-callout-box.amber {
          background: #fffbeb;
          border-color: #fde68a;
          color: #92400e;
        }
        .qr-callout-box strong {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #dc2626;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .qr-callout-box.amber strong { color: #d97706; }

        /* Horizontal bar comparison */
        .qr-bar-group {
          margin-bottom: 28px;
          max-width: 600px;
        }

        .qr-bar-row {
          display: grid;
          grid-template-columns: 120px 1fr 60px;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .qr-bar-name {
          font-size: 13px;
          color: #374151;
          text-align: right;
        }

        .qr-bar-track {
          height: 28px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }

        .qr-bar-fill {
          height: 100%;
          border-radius: 4px;
        }

        .qr-bar-fill.blue { background: #3b82f6; }
        .qr-bar-fill.amber { background: #f59e0b; }
        .qr-bar-fill.red { background: #ef4444; }
        .qr-bar-fill.green { background: #059669; }

        .qr-bar-val {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
        }

        /* Regional grid */
        .qr-region-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .qr-region {
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 18px;
          text-align: center;
        }
        .qr-region.below { background: #fef2f2; border-color: #fecaca; }
        .qr-region.below .qr-region-val { color: #dc2626; }

        .qr-region-name {
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 6px;
        }

        .qr-region-val {
          font-size: 26px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
          margin-bottom: 3px;
        }

        .qr-region-tag {
          font-size: 11px;
          color: #9ca3af;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Table */
        .qr-table-wrap {
          overflow-x: auto;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          margin-bottom: 24px;
          max-width: 700px;
        }

        .qr-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .qr-table th { background: #f9fafb; padding: 10px 14px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb; }
        .qr-table td { padding: 10px 14px; border-bottom: 1px solid #f3f4f6; color: #374151; }
        .qr-table tr:last-child td { border-bottom: none; }
        .qr-table .hl { background: #fef2f2; color: #dc2626; font-weight: 600; }

        /* Image wrap */
        .qr-img-wrap {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          margin-bottom: 10px;
          background: #f9fafb;
        }
        .qr-img-wrap img { width: 100%; display: block; }

        .qr-img-caption {
          font-size: 12px;
          color: #9ca3af;
          margin-bottom: 24px;
        }

        /* Issue summary */
        .qr-issue-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }

        .qr-issue {
          padding: 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
        }

        .qr-issue .iid {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #dc2626;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .qr-issue h4 {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .qr-issue p {
          font-size: 12px;
          color: #991b1b;
          line-height: 1.4;
        }

        /* Volume cards */
        .qr-vol-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }

        .qr-vol-card {
          padding: 18px;
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          text-align: center;
        }

        .qr-vol-val {
          font-size: 26px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
          margin-bottom: 4px;
        }

        .qr-vol-label {
          font-size: 12px;
          color: #6b7280;
        }

        .qr-vol-sub {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 2px;
        }

        /* Problem cards (merged findings + issues) */
        .qr-problem {
          padding: 24px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .qr-problem-head {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 10px;
        }

        .qr-problem .iid {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #dc2626;
          font-weight: 600;
          background: #fecaca;
          padding: 3px 8px;
          border-radius: 4px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .qr-problem h4 {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }

        .qr-problem .qr-problem-metric {
          font-family: 'JetBrains Mono', monospace;
          font-size: 28px;
          font-weight: 700;
          color: #dc2626;
          line-height: 1;
          margin: 12px 0 8px;
        }

        .qr-problem .qr-problem-metric-label {
          font-size: 12px;
          color: #991b1b;
          margin-bottom: 12px;
        }

        .qr-problem .qr-problem-evidence {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.6;
          border-top: 1px solid #fecaca;
          padding-top: 12px;
        }

        .qr-problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .qr-page { padding: 80px 24px 40px; }
          .qr-kpi-row, .qr-region-grid, .qr-vol-grid { grid-template-columns: repeat(2, 1fr); }
          .qr-funnel-wrap { grid-template-columns: 1fr; }
          .qr-funnel-callout { padding-top: 12px; }
          .qr-funnel-stage { height: 52px; min-width: 220px; }
          .qr-funnel-stage .fi { padding: 0 36px; }
          .qr-funnel-stage .fl { font-size: 11px; }
          .qr-funnel-stage .fp { font-size: 14px; }
          .qr-funnel-stage .fu { font-size: 10px; }
          .qr-issue-grid { grid-template-columns: 1fr; }
          .qr-problem-grid { grid-template-columns: 1fr; }
          .qr-meta-row { gap: 16px; }
          .qr-bar-row { grid-template-columns: 80px 1fr 50px; }
        }
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `<div class="qr-page">

<a class="qr-back reveal" href="/projects/assets-dw/">← Back to Assets D&W</a>

<div class="qr-header reveal">
  <div class="qr-tag">Empathy · Quantitative Analysis</div>
  <h1>Deposit & Withdrawal: What the Data Revealed</h1>
  <p class="qr-desc">Before designing anything, we instrumented the full deposit and withdrawal funnels, pulled Amplitude behavioral data, ran regional deep-dives, audited CS tickets, and benchmarked competitors. This report documents what we found — and how bad things really were.</p>
  <div class="qr-meta-row">
    <div>Period: <span>Feb – Oct 2022</span></div>
    <div>Data: <span>Amplitude, CS Tickets, Twitter Survey (n=155)</span></div>
    <div>Author: <span>Elvo Wang, Senior Product Designer</span></div>
  </div>
</div>

<!-- ====== 01 — VOLUME SNAPSHOT ====== -->
<div class="qr-block reveal">
  <div class="qr-label">01 — Volume Snapshot</div>
  <h2>Scale of the Problem</h2>
  <p>These are large numbers. Any conversion improvement directly impacts tens of thousands of users and hundreds of millions in transaction volume.</p>
  <div class="qr-vol-grid">
    <div class="qr-vol-card"><div class="qr-vol-val">92k</div><div class="qr-vol-label">Deposit users</div><div class="qr-vol-sub">92% app, 8% web</div></div>
    <div class="qr-vol-card"><div class="qr-vol-val">$633M</div><div class="qr-vol-label">Deposit volume</div><div class="qr-vol-sub">40% app, 60% web</div></div>
    <div class="qr-vol-card"><div class="qr-vol-val">74k</div><div class="qr-vol-label">Withdrawal users</div><div class="qr-vol-sub">89% app, 11% web</div></div>
    <div class="qr-vol-card"><div class="qr-vol-val">$618M</div><div class="qr-vol-label">Withdrawal volume</div><div class="qr-vol-sub">38% app, 62% web</div></div>
  </div>
</div>

<!-- ====== 02 — DEPOSIT FUNNEL ====== -->
<div class="qr-block reveal">
  <div class="qr-label">02 — Deposit Funnel</div>
  <h2>Where Deposit Users Dropped Off</h2>
  <p>Only 22.7% of app users who started the deposit flow actually completed it. The steepest drop happened at network selection — users didn't know which network to choose and had no context to decide.</p>

  <div class="qr-kpi-row" style="margin-bottom:28px">
    <div class="qr-kpi alert"><div class="qr-kpi-val">22.7%</div><div class="qr-kpi-label">App deposit success</div><div class="qr-kpi-sub">75% reached detail, only 22.7% finished</div></div>
    <div class="qr-kpi warn"><div class="qr-kpi-val">41.5%</div><div class="qr-kpi-label">Overall deposit conversion</div><div class="qr-kpi-sub">Avg convert time: 37m 24s</div></div>
    <div class="qr-kpi warn"><div class="qr-kpi-val">34.5%</div><div class="qr-kpi-label">Biggest single drop-off</div><div class="qr-kpi-sub">Network → Deposit detail</div></div>
    <div class="qr-kpi"><div class="qr-kpi-val">92,995</div><div class="qr-kpi-label">Total deposit users</div><div class="qr-kpi-sub">Measured over sample period</div></div>
  </div>

  <div class="qr-funnel-wrap">
    <div class="qr-funnel-stages">
      <div class="qr-funnel-stage d1">
        <div class="fi"><span class="fl">View crypto list</span><div class="fv"><span class="fp">100%</span><span class="fu">92,995</span></div></div>
      </div>
      <div class="qr-fdrop"><span class="dl"></span><span class="dt">-18%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage d2">
        <div class="fi"><span class="fl">Select token</span><div class="fv"><span class="fp">82%</span><span class="fu">76,256</span></div></div>
      </div>
      <div class="qr-fdrop"><span class="dl"></span><span class="dt">-6%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage d3">
        <div class="fi"><span class="fl">Select network</span><div class="fv"><span class="fp">76%</span><span class="fu">70,676</span></div></div>
      </div>
      <div class="qr-fdrop"><span class="dl"></span><span class="dt">↓ -34.5%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage d4">
        <div class="fi"><span class="fl">Deposit detail page</span><div class="fv"><span class="fp">41.5%</span><span class="fu">38,593</span></div></div>
      </div>
      <div class="qr-fdrop"><span class="dl"></span><span class="dt">-18.8%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage d5">
        <div class="fi"><span class="fl">Success</span><div class="fv"><span class="fp">22.7%</span><span class="fu">21,110</span></div></div>
      </div>
    </div>
    <div class="qr-funnel-callout">
      <div class="qr-callout-box">
        <strong>Critical drop</strong>
        Network → Deposit detail: 34.5% lost. No fee comparison, no speed context, no recommended default. Users were paralysed by choice.
      </div>
    </div>
  </div>

  <h3>Deposit Conversion by Country</h3>
  <div class="qr-region-grid">
    <div class="qr-region below"><div class="qr-region-name">China</div><div class="qr-region-val">37.7%</div><div class="qr-region-tag">↓ below avg 41.5%</div></div>
    <div class="qr-region"><div class="qr-region-name">Russia</div><div class="qr-region-val">53.4%</div><div class="qr-region-tag">above avg</div></div>
    <div class="qr-region"><div class="qr-region-name">Turkey</div><div class="qr-region-val">52.2%</div><div class="qr-region-tag">above avg</div></div>
    <div class="qr-region"><div class="qr-region-name">South Korea</div><div class="qr-region-val">74.3%</div><div class="qr-region-tag">↑↑ well above</div></div>
  </div>

  <h3>The Deposit Experience at Baseline</h3>
  <div class="qr-img-wrap"><img src={basePath + "/images/assets-implementation-depositbefore.png"} alt="Deposit flow at baseline — network selection as modal, cluttered deposit detail page"/></div>
  <p class="qr-img-caption">Baseline deposit flow: assets page → crypto list → network selection bottom sheet (no context) → deposit detail with excessive guidance text → deposit history. Users navigated 5+ screens with no clear progress indication.</p>
</div>

<hr class="qr-divider"/>

<!-- ====== 03 — WITHDRAWAL FUNNEL ====== -->
<div class="qr-block reveal">
  <div class="qr-label">03 — Withdrawal Funnel</div>
  <h2>Where Withdrawal Users Dropped Off</h2>
  <p>On-chain withdrawal had a 74% overall conversion rate — reasonable on the surface, but the drop-offs were distributed across every step. With ~300 CS tickets per week driven by confusion rather than technical failure, the withdrawal experience still had significant room for improvement.</p>

  <div class="qr-kpi-row">
    <div class="qr-kpi warn"><div class="qr-kpi-val">74%</div><div class="qr-kpi-label">On-chain withdrawal overall</div><div class="qr-kpi-sub">Convert time: 1m 54s</div></div>
    <div class="qr-kpi alert"><div class="qr-kpi-val">~300</div><div class="qr-kpi-label">CS tickets / week</div><div class="qr-kpi-sub">Russia, UK, Nigeria top contributors</div></div>
    <div class="qr-kpi"><div class="qr-kpi-val">1m 54s</div><div class="qr-kpi-label">Avg completion time</div><div class="qr-kpi-sub">From crypto list to success</div></div>
    <div class="qr-kpi"><div class="qr-kpi-val">74,405</div><div class="qr-kpi-label">Total withdrawal users</div><div class="qr-kpi-sub">89% app, 11% web</div></div>
  </div>

  <!-- ON-CHAIN WITHDRAWAL FUNNEL -->
  <h3>On-chain Withdrawal Funnel</h3>
  <div class="qr-funnel-wrap">
    <div class="qr-funnel-stages">
      <div class="qr-funnel-stage oc1">
        <div class="fi"><span class="fl">Crypto list view</span><div class="fv"><span class="fp">100%</span><span class="fu">74,405</span></div></div>
      </div>
      <div class="qr-fdrop qr-fdrop-g"><span class="dl"></span><span class="dt">-12%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage oc2">
        <div class="fi"><span class="fl">Select token</span><div class="fv"><span class="fp">88%</span><span class="fu">65,476</span></div></div>
      </div>
      <div class="qr-fdrop qr-fdrop-g"><span class="dl"></span><span class="dt">-6%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage oc3">
        <div class="fi"><span class="fl">Choose on-chain method</span><div class="fv"><span class="fp">82%</span><span class="fu">61,012</span></div></div>
      </div>
      <div class="qr-fdrop qr-fdrop-g"><span class="dl"></span><span class="dt">-4%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage oc4">
        <div class="fi"><span class="fl">Enter details + 2FA</span><div class="fv"><span class="fp">78%</span><span class="fu">58,036</span></div></div>
      </div>
      <div class="qr-fdrop qr-fdrop-g"><span class="dl"></span><span class="dt">-3.9%</span><span class="dl"></span></div>
      <div class="qr-funnel-stage oc5">
        <div class="fi"><span class="fl">Success</span><div class="fv"><span class="fp">74.1%</span><span class="fu">55,132</span></div></div>
      </div>
    </div>
    <div class="qr-funnel-callout">
      <div class="qr-callout-box amber">
        <strong>Moderate friction</strong>
        On-chain was the healthier funnel. Drop-off was distributed across steps rather than concentrated at a single point. Avg time: 1m 54s.
      </div>
    </div>
  </div>

  <h3>On-chain Withdrawal by Country</h3>
  <div class="qr-region-grid">
    <div class="qr-region"><div class="qr-region-name">China</div><div class="qr-region-val">72.8%</div><div class="qr-region-tag">1m 36s</div></div>
    <div class="qr-region"><div class="qr-region-name">Russia</div><div class="qr-region-val">78.1%</div><div class="qr-region-tag">1m 38s</div></div>
    <div class="qr-region"><div class="qr-region-name">South Korea</div><div class="qr-region-val">77.9%</div><div class="qr-region-tag">1m 49s</div></div>
    <div class="qr-region"><div class="qr-region-name">Turkey</div><div class="qr-region-val">79.4%</div><div class="qr-region-tag">1m 57s</div></div>
  </div>

  <h3>The Withdrawal Experience at Baseline</h3>
  <div class="qr-img-wrap"><img src={basePath + "/images/assets-implementation-withdrawalbefore.png"} alt="Withdrawal flow at baseline — dual account selection, confusing verification steps"/></div>
  <p class="qr-img-caption">Baseline withdrawal flow: assets page → "Choose withdrawal" modal (funding vs trading account — confusing) → network selection → amount with "Borrow" option → multi-step verification → confirmation. 50% of users ended their session after viewing the details page.</p>
</div>

<hr class="qr-divider"/>

<!-- ====== 04 — COMPETITIVE BENCHMARKING ====== -->
<div class="qr-block reveal">
  <div class="qr-label">04 — Competitive Benchmarking</div>
  <h2>Address Book: OKX Had Nothing</h2>
  <p>We audited address book capabilities across major competitors. OKX scored 0 out of 6 on every feature. Users had to re-enter withdrawal addresses every single time — a friction point competitors had already solved.</p>
  <div class="qr-table-wrap">
    <table class="qr-table">
      <thead><tr><th>Feature</th><th>Bitget</th><th>Binance</th><th>Bybit</th><th>OKX</th></tr></thead>
      <tbody>
        <tr><td>Global address book</td><td>✓</td><td>✓</td><td>✓</td><td class="hl">✗</td></tr>
        <tr><td>Network auto-mapping</td><td>✓</td><td>✓</td><td>—</td><td class="hl">✗</td></tr>
        <tr><td>Filter, search & table UI</td><td>✓</td><td>✓</td><td>✓</td><td class="hl">✗</td></tr>
        <tr><td>Batch adding (>20)</td><td>✓</td><td>✓</td><td>—</td><td class="hl">✗</td></tr>
        <tr><td>CSV import</td><td>✓</td><td>—</td><td>—</td><td class="hl">✗</td></tr>
        <tr><td>Export addresses</td><td>✓</td><td>✓</td><td>—</td><td class="hl">✗</td></tr>
      </tbody>
    </table>
  </div>
  <p class="qr-prose">Binance's overall deposit and withdrawal UX was more refined — consistent design, better-placed prompts. OKX had inconsistencies across platforms that felt less professional in direct comparison. Adding an address on OKX took 3m 20s vs Binance's 2m 14s.</p>
</div>

<hr class="qr-divider"/>

<!-- ====== 05 — THE VERDICT ====== -->
<div class="qr-block reveal">
  <div class="qr-label">05 — The Verdict</div>
  <h2>6 Problems the Data Made Undeniable</h2>
  <p>Cross-referencing funnel data, session behavior, regional deep-dives, CS tickets, and the competitor audit — six problems kept surfacing. Each one had a measurable cost.</p>

  <div class="qr-problem-grid">
    <div class="qr-problem">
      <div class="qr-problem-head"><span class="iid">I-01</span><h4>Network selection paralyzed users</h4></div>
      <div class="qr-problem-metric">-34.5%</div>
      <div class="qr-problem-metric-label">Biggest single drop-off in the deposit funnel</div>
      <div class="qr-problem-evidence">Both deposit and withdrawal funnels showed major abandonment at network selection. No fee comparison, no speed context, no recommended default. Users with multiple network options simply left — they didn't know how to choose, so they didn't.</div>
    </div>

    <div class="qr-problem">
      <div class="qr-problem-head"><span class="iid">I-02</span><h4>App deposit was fundamentally broken</h4></div>
      <div class="qr-problem-metric">22.7%</div>
      <div class="qr-problem-metric-label">App deposit success rate (vs 48.4% on Web)</div>
      <div class="qr-problem-evidence">75% of app users reached the deposit detail page — the intent was there. But only 22.7% completed. Web converted at 48.4%, proving the problem was the app UX, not user motivation. Android consistently underperformed iOS across the entire flow, widening the gap further.</div>
    </div>

    <div class="qr-problem">
      <div class="qr-problem-head"><span class="iid">I-03</span><h4>Users withdrew blind — then left the app</h4></div>
      <div class="qr-problem-metric">50%</div>
      <div class="qr-problem-metric-label">Of users ended their session right after submitting withdrawal</div>
      <div class="qr-problem-evidence">No real-time blockchain tracking, no ETA, no progress indicator — just anxiety. Half of users closed the app immediately after submitting a withdrawal. A Twitter survey (n=155) confirmed that 60% of withdrawals went to other exchanges — we were losing users at the last touchpoint, and giving them no reason to come back.</div>
    </div>

    <div class="qr-problem">
      <div class="qr-problem-head"><span class="iid">I-04</span><h4>Verification was a wall, not a safeguard</h4></div>
      <div class="qr-problem-metric">&lt;20%</div>
      <div class="qr-problem-metric-label">Security settings completion for at-risk users (vs 45% for normal users)</div>
      <div class="qr-problem-evidence">Significant drop-off between withdrawal submit and OTP confirmation. Users struggled with multi-step verification — especially across platforms where the flow was inconsistent. The security feature designed to protect users was instead driving them away. CS tickets confirmed the confusion.</div>
    </div>

    <div class="qr-problem">
      <div class="qr-problem-head"><span class="iid">I-05</span><h4>Address book didn't exist</h4></div>
      <div class="qr-problem-metric">0 / 6</div>
      <div class="qr-problem-metric-label">Features vs every major competitor</div>
      <div class="qr-problem-evidence">Bitget, Binance, and Bybit all had address books with search, filtering, and batch management. OKX had nothing — users re-entered addresses every single time. 15.6% of users tapped "withdraw all" but couldn't even see balances across accounts. Basic table-stakes functionality was missing.</div>
    </div>

    <div class="qr-problem">
      <div class="qr-problem-head"><span class="iid">I-06</span><h4>~300 CS tickets per week — confusion, not bugs</h4></div>
      <div class="qr-problem-metric">~300</div>
      <div class="qr-problem-metric-label">Weekly support tickets driven by UX confusion</div>
      <div class="qr-problem-evidence">Russia, UK, and Nigeria were the top contributors. Tickets weren't about technical failures — they were about users not understanding the interface. 90% of withdrawal actions came from China, yet China's deposit conversion (37.7%) sat below the global average (41.5%). The UX was failing the largest user segment the hardest.</div>
    </div>
  </div>

  <p class="qr-prose" style="font-style:italic;color:#9ca3af">This quantitative analysis became the foundation for prioritising design interventions in the Ideation and Implementation phases of the design thinking project.</p>
</div>

</div>` }} />
    </>
  );
}
