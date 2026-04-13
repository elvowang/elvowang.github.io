'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { darkThemeStyle } from '@/lib/dark-theme';

const fadeIn = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: { opacity: 1, transform: 'translateY(0)' },
};

export default function CompetitorGapPage() {
  return (
    <main className="dark-theme min-h-screen" style={darkThemeStyle}>

      <div className="mx-auto px-10" style={{ maxWidth: '1440px' }}>
        {/* Back Nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="pt-24 mb-12"
        >
          <Link href="/my-ai-explore">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              Back to My AI Explore
            </div>
          </Link>
        </motion.nav>

        {/* Hero */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Claude Skill
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Competitor Gap<br />Analysis
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            Automated competitive intelligence for any business line. Scans competitors, pulls internal feedback, cross-checks your roadmap, and outputs an interactive HTML dashboard with gaps, prototypes, and action items.
          </p>
        </motion.header>

        {/* Download Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16 px-12 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-8">
            Download the Skill
          </div>

          <div className="max-w-xl">
            <div className="border border-gray-700 rounded-lg bg-gray-950 p-8 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Gap Analysis Skill</h3>
                  <div className="text-xs text-gray-500 font-mono mt-1">.skill · 25 KB</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Complete 3-phase pipeline with report template, competitor reference lists, priority matrix, and search query templates. Domain-agnostic — works for any product area.
              </p>
              <a href="downloads/competitor-gap-analysis-report.skill" download className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-white transition-colors">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download .skill
              </a>
            </div>
          </div>
        </motion.div>

        {/* The Pipeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            How It Works
          </div>
          <h2 className="text-3xl font-bold mb-4">3-phase pipeline</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
            Each phase feeds the next. The skill runs autonomously after initial configuration — just specify your domain and competitors.
          </p>

          <div className="space-y-1">
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">01</span>
              <span className="font-semibold text-gray-200">Outside Scan</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Web, Twitter/X, Reddit — competitor launches, trends, AI features</span>
            </div>
            <div className="text-center text-gray-600 text-xs font-mono py-2">feeds into ↓</div>
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">02</span>
              <span className="font-semibold text-gray-200">Inside Pull</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Jira internal feedback — user complaints, feature requests</span>
            </div>
            <div className="text-center text-gray-600 text-xs font-mono py-2">cross-checked by ↓</div>
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">03</span>
              <span className="font-semibold text-gray-200">Cross Check</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Deduplicate against roadmap, OKX features, public mentions</span>
            </div>
            <div className="text-center text-gray-600 text-xs font-mono py-2">outputs ↓</div>
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">★</span>
              <span className="font-semibold text-gray-200">Interactive Dashboard</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Self-contained HTML with all sections below</span>
            </div>
          </div>
        </motion.section>

        {/* Intelligence Sources */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Intelligence Sources
          </div>
          <h2 className="text-3xl font-bold mb-4">Where data comes from</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
            Each phase pulls from multiple sources and cross-references findings across at least two before including them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🌐', title: 'Web Search', desc: 'Competitor blogs, changelogs, product announcements, and industry publications. Parameterized query templates adapt to any domain.' },
              { emoji: '🐦', title: 'Twitter / X', desc: 'Official competitor accounts, domain experts, product launch threads. Surfaces real-time competitive signals.' },
              { emoji: '💬', title: 'Reddit', desc: 'User sentiment from crypto and fintech subreddits. What people love, hate, and wish existed — unfiltered.' },
              { emoji: '📋', title: 'Jira (Internal)', desc: 'Internal user and staff feedback tickets. Surfaces pain points and feature requests from your own audience.' },
              { emoji: '🔍', title: 'Self-Scan', desc: "Checks OKX's own site, help center, blog, and social mentions to filter out features you already have." },
              { emoji: '📊', title: 'Roadmap Check', desc: 'Cross-references Jira boards for planned, in-progress, and shipped work — eliminating false positives.' },
            ].map((source, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
                <h3 className="text-lg font-semibold mb-3">
                  {source.emoji} {source.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {source.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Dashboard Output */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Output
          </div>
          <h2 className="text-3xl font-bold mb-4">What the dashboard contains</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            A single interactive HTML file with 8 sections — filterable, searchable, and ready for stakeholder review.
          </p>

          <div className="overflow-x-auto border border-gray-800 rounded-lg">
            <table>
              <thead className="bg-gray-950">
                <tr>
                  <th>#</th>
                  <th>Section</th>
                  <th>What It Shows</th>
                </tr>
              </thead>
              <tbody className="bg-gray-950 bg-opacity-50">
                {[
                  { num: 0, name: 'Executive Summary', desc: 'Critical findings, top trends, urgency level — 3-5 sentence narrative overview' },
                  { num: 1, name: 'Gap List', desc: 'KPI cards + searchable sortable table with priority, status, source tags, and competitor attribution' },
                  { num: 2, name: 'Competitor Spotlights', desc: 'Horizontal-scroll cards per competitor — activity count, key highlights, source links' },
                  { num: 3, name: 'Feature Matrix', desc: 'Consolidated table: all findings × all competitors with status icons and gap highlighting' },
                  { num: 4, name: 'Analysis & Suggestions', desc: 'Per-finding cards with business impact, competitive context, effort estimate, and recommended approach' },
                  { num: 5, name: 'Trend Radar', desc: 'Emerging pattern cards with signal strength, key players, and implications' },
                  { num: 6, name: 'Design Prototypes', desc: 'Interactive React prototypes for each gap — mobile-first, design-system compliant, with context panels' },
                  { num: 7, name: 'Action Items', desc: 'Priority-grouped action list with owner suggestions, effort sizing, and deadline recommendations' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td><span className="font-mono font-semibold text-gray-200">{row.num}</span></td>
                    <td>{row.name}</td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Priority Matrix */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Prioritisation
          </div>
          <h2 className="text-3xl font-bold mb-4">Priority scoring</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
            Each finding scores 1-3 on three dimensions — competitive urgency, user impact, and frequency signal. The total determines priority tier.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'P0', name: 'Critical', desc: 'Score 8-9. Multiple competitors have it, high user impact. Act now.', color: 'text-red-500' },
              { label: 'P1', name: 'High', desc: 'Score 6-7. Strong competitive or user signal. Roadmap this quarter.', color: 'text-orange-500' },
              { label: 'P2', name: 'Medium', desc: 'Score 4-5. Worth tracking. Consider for next quarter.', color: 'text-blue-500' },
              { label: 'P3', name: 'Low', desc: 'Score 3. Early signal. Monitor but don\'t prioritise yet.', color: 'text-gray-500' },
            ].map((priority, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg bg-gray-950 p-6 hover:bg-gray-900 transition-colors text-center">
                <div className={`text-3xl font-bold mb-2 ${priority.color}`}>
                  {priority.label}
                </div>
                <div className="text-sm font-semibold mb-2">{priority.name}</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {priority.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How to Use Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Getting Started
          </div>
          <h2 className="text-3xl font-bold mb-10">How to use</h2>

          <div className="space-y-6">
            {[
              { num: 1, title: 'Install the Skill', desc: 'Drop the .skill file into your Claude Code skills directory.' },
              { num: 2, title: 'Trigger a Scan', desc: 'Say something like scan competitors for Trading. The skill asks for your domain, competitors, and focus areas on first use.' },
              { num: 3, title: 'Autonomous Execution', desc: 'The skill runs all 3 phases automatically — scanning external sources, pulling internal feedback, and cross-checking your roadmap.' },
              { num: 4, title: 'Review the Dashboard', desc: 'Open report.html — browse gaps, check the feature matrix, review prototypes, and share with stakeholders.' },
              { num: 5, title: 'Take Action', desc: 'Use the priority-ranked action items to feed your roadmap. Each item links back to its source evidence.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center font-mono text-sm text-gray-500 flex-shrink-0 mt-1">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Domain Coverage */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Domain Coverage
          </div>
          <h2 className="text-3xl font-bold mb-4">Works for any business line</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Pre-configured focus areas for 10 domains, plus custom domain support. Competitor tiers span CEX, DEX, and fintech.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Trading', 'Wallet', 'Earn / Staking', 'Security', 'Account', 'Risk', 'Payments', 'NFT / Web3', 'DEX', 'Custom'].map((domain) => (
              <span key={domain} className="font-mono text-xs px-3 py-2 rounded-full border border-gray-700 text-gray-400 bg-gray-950">
                {domain}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Compatibility Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Works With
          </div>
          <h2 className="text-3xl font-bold mb-8">Compatibility</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            Connects to external search and internal tools for full-pipeline execution.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Claude Code', 'Claude Cowork', 'Web Search', 'Jira', 'Figma', 'React Prototypes'].map((compat) => (
              <span key={compat} className="font-mono text-xs px-3 py-2 rounded-full border border-gray-700 text-gray-400 bg-gray-950">
                {compat}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="py-16 text-center border-t border-gray-800"
        >
          <Link href="/my-ai-explore">
            <div className="inline-block font-mono text-sm text-gray-600 hover:text-gray-400 transition-colors">
              ← Back to My AI Explore
            </div>
          </Link>
        </motion.footer>
      </div>
    </main>
  );
}
