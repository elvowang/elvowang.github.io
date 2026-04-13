"use client";
import basePath from "@/lib/basePath";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Layers, Brain, Share2, Telescope, Search, Compass, Database, Bot, Puzzle, Boxes, BookOpen, PenTool, Palette, Sparkles, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs tracking-[3px] uppercase text-foreground/40">
      {children}
    </span>
  );
}

function Pillar({
  icon,
  label,
  title,
  description,
  footnote,
  href,
  delay = 0,
}: {
  icon?: string;
  label?: string;
  title: string;
  description: string;
  footnote?: string;
  href?: string;
  delay?: number;
}) {
  const card = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`h-full flex flex-col p-8 rounded-xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-sm hover:border-foreground/20 hover:bg-foreground/[0.06] transition-all duration-300${href ? " cursor-pointer" : ""}`}
    >
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      {label && (
        <span className="font-mono text-[11px] tracking-[2px] uppercase text-foreground/35 block mb-3">
          {label}
        </span>
      )}
      <h3 className="text-base font-semibold text-foreground/90 mb-2">{title}{href && <span className="ml-2 text-foreground/30 text-sm">→</span>}</h3>
      <p className="text-sm text-foreground/50 leading-relaxed flex-1">{description}</p>
      {footnote && <p className="text-xs text-foreground/30 mt-3">{footnote}</p>}
    </motion.div>
  );
  if (href) {
    return <a href={href} className="no-underline" style={{ textDecoration: "none", color: "inherit" }}>{card}</a>;
  }
  return card;
}

function TwoCol({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12"
    >
      <h3 className="text-base font-semibold text-foreground/90">{title}</h3>
      <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-20 px-6 border-t border-foreground/10"
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-5 tracking-tight">
        {title}
      </h2>
      <p className="text-foreground/50 max-w-3xl mx-auto text-lg leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-foreground/10">
      {children}
    </div>
  </div>
);

const skillTags = [
  "Critique & QA",
  "Research",
  "IA & Structure",
  "Workflow Automation",
  "Documentation",
  "UX Writing",
];

export default function IASections() {
  return (
    <div className="relative z-10 bg-background">
      {/* ===== INTRO ===== */}
      <div className="border-b border-foreground/10">
        <div className="max-w-[1440px] mx-auto px-10 py-20 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-12"
          >
            The AI era demands a new kind of design leadership, which is not just pushes pixels, but explores emerging tools, builds repeatable systems with them, and orchestrates how a team works together at a higher level. I believe the future belongs to three kinds of people — or those who balance all three.
          </motion.p>

          {/* Pure SVG Ternary Triangle */}
          <motion.div
            className="relative max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox="0 0 500 480" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Glow filter for center */}
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
                {/* Animated dash for triangle edges */}
                <style>{`
                  @keyframes drawLine {
                    from { stroke-dashoffset: 400; }
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes pulseDot {
                    0%, 100% { opacity: 0.4; r: 4; }
                    50% { opacity: 0.8; r: 6; }
                  }
                  @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                  }
                  .tri-edge {
                    stroke-dasharray: 400;
                    animation: drawLine 2s ease-out forwards;
                  }
                  .tri-edge-1 { animation-delay: 0.2s; stroke-dashoffset: 400; }
                  .tri-edge-2 { animation-delay: 0.6s; stroke-dashoffset: 400; }
                  .tri-edge-3 { animation-delay: 1.0s; stroke-dashoffset: 400; }
                  .vertex-pulse {
                    animation: pulseDot 3s ease-in-out infinite;
                  }
                  .center-pulse {
                    animation: pulseGlow 4s ease-in-out infinite;
                  }
                `}</style>
              </defs>

              {/* --- Triangle edges --- */}
              <line x1="250" y1="60" x2="60" y2="370" stroke="rgba(255,255,255,0.12)" strokeWidth="1" className="tri-edge tri-edge-1" />
              <line x1="250" y1="60" x2="440" y2="370" stroke="rgba(255,255,255,0.12)" strokeWidth="1" className="tri-edge tri-edge-2" />
              <line x1="60" y1="370" x2="440" y2="370" stroke="rgba(255,255,255,0.12)" strokeWidth="1" className="tri-edge tri-edge-3" />

              {/* --- Dashed axis lines to center --- */}
              <line x1="250" y1="60" x2="250" y2="267" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="60" y1="370" x2="250" y2="267" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="440" y1="370" x2="250" y2="267" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />

              {/* --- Center glow + dot --- */}
              <circle cx="250" cy="267" r="48" fill="url(#centerGlow)" className="center-pulse" />
              <circle cx="250" cy="267" r="3" fill="rgba(255,255,255,0.5)" />
              <text x="250" y="290" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="3">BALANCE</text>

              {/* --- Top vertex: Explorer --- */}
              <circle cx="250" cy="60" r="4" fill="rgba(255,255,255,0.5)" className="vertex-pulse" />
              <circle cx="250" cy="60" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              {/* Telescope icon (simplified) */}
              <g transform="translate(242, 52)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 13l6-11 4 2-6 11z" />
                <path d="M12 2l4 2" />
                <path d="M4 8l2 1" />
                <path d="M8 16v-1" />
              </g>
              <text x="250" y="22" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">The Explorer</text>
              <text x="250" y="38" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="var(--font-sans)">Curious, hands-on, finding what&apos;s next</text>

              {/* --- Bottom-left vertex: Scout --- */}
              <circle cx="60" cy="370" r="4" fill="rgba(255,255,255,0.5)" className="vertex-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="60" cy="370" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              {/* Search icon (simplified) */}
              <g transform="translate(52, 362)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11l3 3" />
              </g>
              <text x="60" y="410" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">The Scout</text>
              <text x="60" y="426" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="var(--font-sans)">Turns ideas into things that run</text>

              {/* --- Bottom-right vertex: Navigator --- */}
              <circle cx="440" cy="370" r="4" fill="rgba(255,255,255,0.5)" className="vertex-pulse" style={{ animationDelay: "2s" }} />
              <circle cx="440" cy="370" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              {/* Compass icon (simplified) */}
              <g transform="translate(432, 362)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="7" />
                <polygon points="5.5,10.5 8,5 10.5,10.5 8,11" fill="rgba(255,255,255,0.25)" />
              </g>
              <text x="440" y="410" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">The Navigator</text>
              <text x="440" y="426" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="var(--font-sans)">Orchestrates the whole, multiplies the team</text>

              {/* --- Subtle decorative dots along edges --- */}
              <circle cx="155" cy="215" r="1.5" fill="rgba(255,255,255,0.1)" />
              <circle cx="345" cy="215" r="1.5" fill="rgba(255,255,255,0.1)" />
              <circle cx="250" cy="370" r="1.5" fill="rgba(255,255,255,0.1)" />
            </svg>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-sm text-foreground/35 italic"
          >
            The best AI-era teammates balance all three — or a team covers them together.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10">
        {/* ===== PRINCIPLES ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-20 border-t border-foreground/10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Principles
          </h2>
          <p className="text-foreground/50 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            After closely working with AI tools across real projects, I&apos;ve distilled three principles that guide how I design, build, and lead in this new era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
          {[
            {
              icon: <Layers className="size-6" aria-hidden />,
              title: "Structure Before Surface",
              description:
                "AI can generate pixels, but it can\u2019t replace the structural thinking underneath. If the architecture doesn\u2019t match how users think, no amount of generated UI will save it.",
              delay: 0,
            },
            {
              icon: <Brain className="size-6" aria-hidden />,
              title: "Human Judgment, AI Leverage",
              description:
                "The best outcomes come from designers who use AI to amplify their judgment \u2014 not replace it. AI handles the volume; you bring taste, empathy, and clarity.",
              delay: 0.1,
            },
            {
              icon: <Share2 className="size-6" aria-hidden />,
              title: "Share What You Build",
              description:
                "Knowledge compounds when shared. Every skill, workflow, and methodology here is meant to be borrowed, adapted, and improved by other designers.",
              delay: 0.2,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card className="group border-0 bg-muted shadow-none text-center">
                <CardHeader className="pb-3">
                  <CardDecorator>{item.icon}</CardDecorator>
                  <h3 className="mt-6 font-medium text-foreground">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ===== 01 — AI ARCHITECTURE ===== */}
        <SectionHeader
          label="01 — What I Know"
          title="AI Architecture for Design Orgs"
          subtitle="A layered skill architecture that turns scattered design knowledge into structured, machine-readable systems any AI assistant can consume."
        />

        {/* Core Insight callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 px-8 py-6 rounded-xl border border-foreground/10 bg-foreground/[0.03] text-center"
        >
          <p className="text-foreground/60 text-base sm:text-lg leading-relaxed">
            <span className="text-foreground/90 font-semibold">The core insight:</span>{" "}
            Separate <em>what the AI knows</em> from <em>what the AI does</em>, and build the knowledge layer first.
          </p>
        </motion.div>

        {/* ── Architecture Layers ── */}
        <div className="mb-20 space-y-16 max-w-4xl mx-auto">

          {/* ─── LAYER 2 ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-sm text-foreground/25">02</span>
              <h3 className="text-lg font-semibold text-foreground/90">Functional Skills</h3>
              <div className="flex-1 h-px bg-foreground/[0.08]" />
              <span className="text-xs text-foreground/30">Active agents that do real design work</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Sparkles className="size-4" />, name: "Design Ideation", desc: "Generates concepts grounded in your system" },
                { icon: <Search className="size-4" />, name: "Design Critic", desc: "Reviews against principles and component rules" },
                { icon: <Zap className="size-4" />, name: "Design QA", desc: "Checks tokens, accessibility, content compliance" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="p-4 rounded-xl border border-foreground/[0.08] bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-colors duration-200"
                >
                  <div className="size-8 rounded-lg bg-foreground/[0.06] flex items-center justify-center text-foreground/50 mb-3">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground/80 mb-1">{item.name}</p>
                  <p className="text-xs text-foreground/40 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── LAYER 1 ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-sm text-foreground/25">01</span>
              <h3 className="text-lg font-semibold text-foreground/90">Domain Knowledge</h3>
              <div className="flex-1 h-px bg-foreground/[0.08]" />
              <span className="text-xs text-foreground/30">Product-specific flows, rules, edge cases</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Task Centre Flows", "Onboarding Sequences", "Trading Patterns", "Payment Rules"].map((name) => (
                <span key={name} className="px-4 py-2.5 rounded-lg border border-foreground/[0.08] bg-foreground/[0.03] text-sm text-foreground/60 hover:bg-foreground/[0.05] transition-colors duration-200">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ─── LAYER 0 ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-sm text-foreground/25">00</span>
              <h3 className="text-lg font-semibold text-foreground/90">Foundation</h3>
              <div className="flex-1 h-px bg-foreground/[0.08]" />
              <span className="text-xs text-foreground/30">Passive knowledge the AI draws from</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WHAT */}
              <div className="p-5 rounded-xl border border-foreground/[0.08] bg-foreground/[0.03]">
                <p className="text-xs font-semibold tracking-wide uppercase text-foreground/40 mb-4">What — Component Libraries</p>
                <div className="space-y-3">
                  {[
                    { icon: <Palette className="size-4" />, label: "Foundation Tokens", detail: "Colours, typography, spacing, icons, grids" },
                    { icon: <Boxes className="size-4" />, label: "App Components", detail: "Mobile component library & variants" },
                    { icon: <Layers className="size-4" />, label: "Web Components", detail: "Desktop component library & patterns" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="shrink-0 size-7 rounded-lg bg-foreground/[0.06] flex items-center justify-center text-foreground/40">{item.icon}</div>
                      <div>
                        <p className="text-sm text-foreground/70 font-medium">{item.label}</p>
                        <p className="text-xs text-foreground/35">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* WHY */}
              <div className="p-5 rounded-xl border border-foreground/[0.08] bg-foreground/[0.03]">
                <p className="text-xs font-semibold tracking-wide uppercase text-foreground/40 mb-4">Why — Principles & Guidelines</p>
                <div className="space-y-3">
                  {[
                    { icon: <BookOpen className="size-4" />, label: "Design Principles", detail: "Philosophical heuristics for decisions" },
                    { icon: <PenTool className="size-4" />, label: "Content Guidelines", detail: "Voice, tone, grammar, formatting rules" },
                    { icon: <Database className="size-4" />, label: "Brand Guidelines", detail: "Visual identity, logo usage, brand voice" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="shrink-0 size-7 rounded-lg bg-foreground/[0.06] flex items-center justify-center text-foreground/40">{item.icon}</div>
                      <div>
                        <p className="text-sm text-foreground/70 font-medium">{item.label}</p>
                        <p className="text-xs text-foreground/35">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-foreground/30 shrink-0">Extracted from</span>
            <div className="flex-1 h-px bg-foreground/[0.06]" />
            <div className="flex flex-wrap gap-2">
              {["Figma Files", "Wiki Docs", "Slide Decks", "Screenshots"].map((src) => (
                <span key={src} className="px-3 py-1.5 rounded-full text-xs text-foreground/40 border border-foreground/[0.08]">
                  {src}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Build Phases + Key Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl border border-foreground/10 bg-foreground/[0.03]"
          >
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-foreground/30 block mb-5">Build Order</span>
            <div className="space-y-5">
              {[
                { num: "01", title: "Foundation KB", desc: "Start with Figma components — they're the most structured source. Then extract principles and guidelines." },
                { num: "02", title: "Domain Knowledge", desc: "Encode how your specific product works — user flows, business rules, edge cases for each product area." },
                { num: "03", title: "Functional Skills", desc: "Build AI agents that consume layers 0+1. Start with Ideation (builds buy-in), then Critic, then QA." },
              ].map((phase) => (
                <div key={phase.num} className="flex gap-4">
                  <span className="font-mono text-sm text-foreground/25 mt-0.5 shrink-0">{phase.num}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground/80">{phase.title}</p>
                    <p className="text-xs text-foreground/40 leading-relaxed mt-1">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl border border-foreground/10 bg-foreground/[0.03]"
          >
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-foreground/30 block mb-5">Key Properties</span>
            <div className="space-y-5">
              {[
                { title: "Modular", desc: "Each skill is independent, self-contained, and portable — works with Claude, GPTs, or any LLM." },
                { title: "Layered", desc: "Dependencies flow in one direction only (downward). Skills may reference same-layer or below, never upward." },
                { title: "Evolvable", desc: "Add new domain skills or functional agents without restructuring existing ones. The architecture grows with your org." },
              ].map((prop) => (
                <div key={prop.title} className="flex gap-4">
                  <div className="shrink-0 mt-1.5 size-1.5 rounded-full bg-foreground/25" />
                  <div>
                    <p className="text-sm font-medium text-foreground/80">{prop.title}</p>
                    <p className="text-xs text-foreground/40 leading-relaxed mt-1">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== 02 — WHAT I'VE BUILT ===== */}
        <SectionHeader
          label="02 — What I've Built"
          title="Things I've Built"
          subtitle="AI tools, multi-agent systems, and reusable skills — built from real design workflows and shipped for teams to use."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-12">
          <Pillar icon="📊" label="Skill" title="Competitor Gap Analysis" description="Scans competitors, pulls internal feedback, and cross-checks your roadmap. Outputs an interactive dashboard with prioritised gaps and action items." footnote="Competitive Analysis · Gap Detection · Prototyping" href="/my-ai-explore/competitor-gap" />
          <Pillar icon="🏗️" label="Skill" title="AI Architecture Setup" description="Scaffolds a three-layer AI skill architecture for any design org. Collects your sources, builds every skill file, and indexes the system in one session." footnote="Architecture · Skill System · Team Enablement" href="/my-ai-explore/ai-architecture" delay={0.1} />
          <Pillar icon="🤖" label="Plugin" title="Ship Crew — AI Product Team" description="10 specialist AI agents that debate, design, build, and ship features through a structured lifecycle or freeform War Room. Two modes: natural-language brainstorming and a 7-stage pipeline with veto power and HTML deliverables." footnote="Multi-Agent · War Room · Lifecycle Commands · Claude Plugin" href="/my-ai-explore/multi-agent-team" delay={0.2} />
        </div>

        <div className="space-y-8 pb-12">
          <TwoCol title="What Makes a Good Skill" description="A well-crafted skill is more than a long prompt — it loads the right context at the right time, enforces guardrails so the output stays on-brand, and is modular enough to compose with other skills. The best ones feel invisible: the user describes what they need, and the skill handles structure, formatting, and domain knowledge behind the scenes." />
          <TwoCol title="How I Build & Iterate" description="I start by noticing a workflow I repeat more than twice — competitive scans, PRD drafts, design critiques. I draft the skill, run it against real tasks, compare output quality across runs, and refine until the variance drops. Every skill gets a trigger description so it activates automatically when the context matches." />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-16"
        >
          <h3 className="text-base font-semibold text-foreground/80 mb-5">
            Skill Categories
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full text-sm text-foreground/50 border border-foreground/10 bg-foreground/[0.03] hover:bg-foreground/[0.06] hover:text-foreground/70 transition-all duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ===== 03 — HOW I WORK ===== */}
        <SectionHeader
          label="03 — How I Work"
          title="AI-Native Design Workflow"
          subtitle="How the design process changes when AI is a working partner — from pre-design research through delivery."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-6"
        >
          <div className="rounded-xl border border-foreground/10 overflow-hidden">
            <img
              src={basePath + "/images/AI-native-design-workflow.png"}
              alt="AI-native design workflow showing three phases: Pre-Design, In-Design, and After Design with PM, AI/Claude, and Designer swim lanes"
              className="w-full"
            />
          </div>
          <p className="text-foreground/50 text-base leading-relaxed mt-6 max-w-3xl">
            This workflow maps out how PM, Designer, and AI (Claude) collaborate across three phases — Pre-Design, In-Design, and After Design. AI handles research synthesis, screen generation, and iteration support, while the designer focuses on judgment calls, Figma craft, and final review. The result is a faster loop where AI does the heavy lifting on volume and the designer stays in control of quality.
          </p>
        </motion.div>

        {/* ===== FOOTER ===== */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-foreground/30 italic text-sm pb-16 max-w-3xl mx-auto"
        >
          This is a living page. I&apos;ll keep adding what I learn as I build, teach, and practice.
        </motion.p>

        <div className="text-center pb-20">
          <a
            href="/"
            className="text-sm text-foreground/30 hover:text-foreground/60 transition-colors font-mono tracking-wider uppercase"
          >
            &larr; Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
