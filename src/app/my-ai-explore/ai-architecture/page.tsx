'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { darkThemeStyle } from '@/lib/dark-theme';

const fadeIn = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: { opacity: 1, transform: 'translateY(0)' },
};

export default function AIArchitecturePage() {
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
            Open-Source Tool
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Architecture Builder
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            Structure your design system into layered AI skills. Go from scattered Figma files and wiki pages to a fully indexed architecture in one session.
          </p>
        </motion.header>

        {/* Downloads Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16 px-12 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-8">
            Download the Toolkit
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Builder Skill Card */}
            <div className="border border-gray-700 rounded-lg bg-gray-950 p-8 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Builder Skill</h3>
                  <div className="text-xs text-gray-500 font-mono mt-1">.skill · 15.8 KB</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Interactive wizard that collects your sources, scaffolds folders, creates skills, and indexes everything automatically.
              </p>
              <a href="downloads/ai-architecture-builder.skill" download className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-white transition-colors">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download .skill
              </a>
            </div>

            {/* Playbook Card */}
            <div className="border border-gray-700 rounded-lg bg-gray-950 bg-opacity-50 p-8 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center text-2xl">
                  📖
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Architecture Playbook <span className="text-xs text-gray-600 font-normal font-mono ml-2">Optional</span>
                  </h3>
                  <div className="text-xs text-gray-500 font-mono mt-1">.md · 34.0 KB</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Reference material — layer model, skill format, templates, and checklist. The Builder Skill already includes this knowledge, so you only need the Playbook if you want to read the methodology yourself.
              </p>
              <a href="downloads/AI-Architecture-Playbook.md" download className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-900 hover:border-gray-500 transition-colors">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download .md
              </a>
            </div>
          </div>
        </motion.div>

        {/* Layer Model Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Architecture
          </div>
          <h2 className="text-3xl font-bold mb-6">The three-layer model</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Every skill sits in one of three layers. Dependencies flow downward only.
          </p>

          <div className="space-y-1">
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">02</span>
              <span className="font-semibold text-gray-200">Functional Skills</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Active agents — Ideation, Critic, QA</span>
            </div>
            <div className="text-center text-gray-600 text-xs font-mono py-2">reads from 00 + 01</div>
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">01</span>
              <span className="font-semibold text-gray-200">Domain Knowledge</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Business-line flows & logic</span>
            </div>
            <div className="text-center text-gray-600 text-xs font-mono py-2">extends 00</div>
            <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors">
              <span className="font-mono text-gray-600 font-semibold min-w-12">00</span>
              <span className="font-semibold text-gray-200">Foundation Knowledge Base</span>
              <span className="text-gray-500 text-sm ml-auto hidden md:inline">Tokens, components, principles, brand</span>
            </div>
          </div>

          <p className="text-gray-400 text-base leading-relaxed mt-10">
            Separate <em>what the AI knows</em> from <em>what the AI does</em>. Build knowledge first.
          </p>
        </motion.section>

        {/* Purpose Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Why This Exists
          </div>
          <h2 className="text-3xl font-bold mb-6">The problem it solves</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-2xl">
            Without structure, every AI prompt starts from scratch. Designers re-explain their system every time. Outputs are inconsistent and off-brand.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            With this architecture, your tokens, components, and principles are pre-loaded. Every output is grounded in your real design system from the start.
          </p>
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
              { num: 1, title: 'Read the Playbook', desc: 'Understand the layer model, skill format, and extraction methodology.' },
              { num: 2, title: 'Install the Builder Skill', desc: 'Drop the .skill file into your Claude Code skills directory.' },
              { num: 3, title: 'Run the Discovery Interview', desc: 'Paste your Figma URLs, wiki links, and design principles. The Builder asks one question at a time.' },
              { num: 4, title: 'Automated Build', desc: 'The Builder scaffolds folders, creates every SKILL.md, and wires up the dependency graph.' },
              { num: 5, title: 'Build functional skills', desc: 'Create agents for ideation, critique, and QA — all grounded in your actual system.' },
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

        {/* Expected Output Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-gray-600 mb-6">
            Expected Output
          </div>
          <h2 className="text-3xl font-bold mb-6">What the Builder creates</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            After running the Builder, you get this folder structure — ready to use.
          </p>

          <div className="border border-gray-800 rounded-lg bg-gray-950 p-8 overflow-x-auto">
            <pre className="font-mono text-sm text-gray-400 leading-relaxed whitespace-pre">
{`skills/
├── foundation/            ← Layer 0: "What" + "Why" (universal, company-wide)
│   ├── foundation-tokens/
│   ├── app-components/
│   ├── web-components/
│   ├── {extra-libraries}/
│   ├── design-principles/
│   ├── content-guidelines/
│   └── brand-guidelines/
│
├── domain/                ← Layer 1: Business-line specific knowledge
│   ├── {your-product-area}/
│   ├── {your-user-flow}/
│   └── {other-domains}/
│
└── functional/            ← Layer 2: Active agents
    ├── {your-ideation-agent}/
    ├── {your-critic-agent}/
    └── {your-qa-agent}/`}
            </pre>
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
            Platform-agnostic methodology. Builder skill designed for Claude Code.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Claude Code', 'Claude Cowork', 'Custom GPTs', 'Any LLM', 'Design Systems', 'Figma'].map((pill) => (
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
