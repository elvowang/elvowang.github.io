'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { darkThemeStyle } from '@/lib/dark-theme';

const fadeIn = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: { opacity: 1, transform: 'translateY(0)' },
};

export default function MultiAgentTeamPage() {
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
            Claude Plugin
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ship Crew
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            An AI product team simulator. 10 specialized agents debate, design, build, and ship features through a structured lifecycle or freeform War Room. Every stage produces a self-contained interactive HTML deliverable ready for handoff to your real team.
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
            Download the Plugin
          </div>

          <div className="max-w-xl">
            <div className="border border-gray-700 rounded-lg bg-gray-950 p-8 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ship Crew Plugin</h3>
                  <div className="text-xs text-gray-500 font-mono mt-1">.plugin · 93 KB</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Full multi-agent system with 10 specialist roles, War Room mode, 7 lifecycle commands, deliverable templates, veto system, and state continuity. Ready to install.
              </p>
              <a href="downloads/ship-crew.plugin" download className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-white transition-colors">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download .plugin
              </a>
            </div>
          </div>
        </motion.div>

        {/* The Crew Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            The Crew
          </div>
          <h2 className="text-3xl font-bold mb-4">10 specialist agents</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
            Each agent has a distinct voice, priorities, and domain expertise. Four agents hold veto power in their specialty — a veto blocks progress until the team redesigns or the concern is resolved.
          </p>

          <div className="overflow-x-auto border border-gray-800 rounded-lg">
            <table>
              <thead className="bg-gray-950">
                <tr>
                  <th>Agent</th>
                  <th>Role</th>
                  <th>Focus</th>
                  <th>Veto</th>
                </tr>
              </thead>
              <tbody className="bg-gray-950 bg-opacity-50">
                {[
                  { agent: 'PM', role: 'Product Manager', focus: 'Scoping, prioritisation, success metrics', veto: 'SCOPE · BUSINESS' },
                  { agent: 'PD', role: 'Product Designer', focus: 'User flows, mental models, interaction patterns', veto: 'USABILITY · DESIGN' },
                  { agent: 'CW', role: 'Content Designer', focus: 'Microcopy, terminology, tone consistency', veto: '—' },
                  { agent: 'FE', role: 'Front-End Developer', focus: 'Feasibility, performance, component structure', veto: 'TECH FEASIBILITY' },
                  { agent: 'SA', role: 'Solution Architect', focus: 'System design, data models, scalability', veto: '—' },
                  { agent: 'QA', role: 'QA Engineer', focus: 'Edge cases, failure modes, stress testing', veto: '—' },
                  { agent: 'DC', role: 'Design Critic', focus: 'Craft quality, benchmarks, accessibility', veto: '—' },
                  { agent: 'VX', role: 'Visual Experience', focus: 'Layout, colour, typography, motion, design system', veto: '—' },
                  { agent: 'NB', role: 'Novice User', focus: 'First-time comprehension, anxiety, onboarding', veto: 'COMPREHENSIBILITY' },
                  { agent: 'OG', role: 'Power User', focus: 'Efficiency, information density, advanced features', veto: '—' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td><span className="font-mono font-semibold text-gray-200">{row.agent}</span></td>
                    <td>{row.role}</td>
                    <td>{row.focus}</td>
                    <td>
                      {row.veto === '—' ? (
                        <span className="text-gray-600">—</span>
                      ) : (
                        <span className="font-mono text-xs px-2 py-1 rounded bg-gray-800 text-gray-100">{row.veto}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Two Modes Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Two Modes
          </div>
          <h2 className="text-3xl font-bold mb-10">How the team works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-lg bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
              <h3 className="text-lg font-semibold mb-2">War Room</h3>
              <div className="text-xs font-mono text-gray-600 mb-4">Natural Language</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Describe any product idea in plain language. All 10 agents debate it through 4+ rounds, raise vetoes, resolve conflicts, and produce a consensus report with verdict, evidence, and risks.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Lifecycle Commands</h3>
              <div className="text-xs font-mono text-gray-600 mb-4">Structured Pipeline</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Structured stage-by-stage pipeline. Each command activates specific agents, passes context forward via state files, and produces a self-contained deliverable. Run in order or jump to any stage.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Lifecycle Commands */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Lifecycle Pipeline
          </div>
          <h2 className="text-3xl font-bold mb-4">7 commands</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            Each stage has a lead agent and a focused team. State saves automatically between stages. Run in order or jump to any stage — the system adapts.
          </p>

          <div className="overflow-x-auto border border-gray-800 rounded-lg">
            <table>
              <thead className="bg-gray-950">
                <tr>
                  <th>Command</th>
                  <th>Stage</th>
                  <th>Lead</th>
                  <th>Active Agents</th>
                </tr>
              </thead>
              <tbody className="bg-gray-950 bg-opacity-50">
                {[
                  { cmd: '/plan', stage: 'Plan', lead: 'PM', agents: 'PM, SA, NB, OG' },
                  { cmd: '/design', stage: 'Design', lead: 'PD', agents: 'PD, CW, VX, DC, NB, OG' },
                  { cmd: '/review', stage: 'Review', lead: 'DC', agents: 'DC, PM, CW, VX' },
                  { cmd: '/build', stage: 'Build', lead: 'FE', agents: 'FE, SA' },
                  { cmd: '/test', stage: 'QA', lead: 'QA', agents: 'QA, NB, OG, FE' },
                  { cmd: '/retro', stage: 'Learn', lead: 'PM', agents: 'All 10' },
                  { cmd: '/report', stage: 'Snapshot', lead: 'PM', agents: 'PM' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td><code className="text-sm bg-gray-800 px-2 py-1 rounded text-gray-100">{row.cmd}</code></td>
                    <td>{row.stage}</td>
                    <td>{row.lead}</td>
                    <td>{row.agents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { num: 1, title: 'Install the Plugin', desc: 'Drop the .plugin file into Claude Code or Cowork. The crew activates automatically.' },
              { num: 2, title: 'Start a War Room', desc: 'Describe any product idea in natural language — all 10 agents debate it through 4+ rounds and produce a consensus report.' },
              { num: 3, title: 'Or Run the Lifecycle', desc: 'Use /plan → /design → /review → /build → /test → /retro. Each command activates the right agents and saves state for the next stage.' },
              { num: 4, title: 'Resolve Vetoes', desc: 'Four agents hold hard veto power. A veto blocks progress until the team redesigns or the concern is withdrawn — forcing real trade-off decisions.' },
              { num: 5, title: 'Get the Deliverable', desc: 'Every stage produces a self-contained interactive HTML ready for handoff. Run /report at any point for an executive brief.' },
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

        {/* Deliverables Section */}
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
          <h2 className="text-3xl font-bold mb-4">What each stage produces</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            Every stage generates a self-contained deliverable. Ready for handoff to your real team.
          </p>

          <div className="overflow-x-auto border border-gray-800 rounded-lg">
            <table>
              <thead className="bg-gray-950">
                <tr>
                  <th>Stage</th>
                  <th>Template</th>
                  <th>What It Produces</th>
                </tr>
              </thead>
              <tbody className="bg-gray-950 bg-opacity-50">
                {[
                  { stage: 'War Room / /report', template: 'war-room-report', produces: 'Executive decision brief with verdict, approver decisions, and risks' },
                  { stage: '/plan', template: 'plan-prd', produces: 'PRD with problem, requirements, preserved elements, acceptance criteria' },
                  { stage: '/design', template: 'design-deliverable', produces: 'Before/after visual comparison with changes and reasons' },
                  { stage: '/build', template: 'build-spec', produces: 'Technical spec with component tree, API contracts, complexity' },
                  { stage: '/review', template: 'review-scorecard', produces: 'Quality gate scorecard with scores, critiques, revision requests' },
                  { stage: '/test', template: 'qa-report', produces: 'Validation matrix, user walkthroughs, fix log' },
                  { stage: '/retro', template: 'retro-report', produces: 'What went well, what to improve, plugin improvement proposals' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.stage}</td>
                    <td><code className="text-sm text-gray-400">{row.template}</code></td>
                    <td>{row.produces}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Built as a Claude plugin. Works anywhere Claude runs.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Claude Code', 'Claude Cowork', 'Multi-Agent', 'War Room', 'Lifecycle Pipeline', 'State Continuity', 'HTML Deliverables'].map((pill) => (
              <span key={pill} className="font-mono text-xs px-3 py-2 rounded-full border border-gray-700 text-gray-400 bg-gray-950">
                {pill}
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
