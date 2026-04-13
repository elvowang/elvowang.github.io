'use client';

import { useState } from 'react';

const tabs = [
  {
    id: 'discovery',
    num: '01',
    label: 'Discovery',
    title: 'Discovery',
    subtitle: 'Research & Empathy',
    body: 'We gathered insights from multiple sources to deeply understand user pain points across the deposit and withdrawal journeys.',
    items: [
      'VOC (Voice of Customer) data analysis — 2,400+ CS tickets reviewed',
      'Stakeholder interviews with Product, Engineering, and CS teams',
      'Heuristic evaluation of current deposit & withdrawal flows',
      'Competitor benchmarking across major crypto exchanges',
      'User behavior analytics — funnel drop-off and session recordings',
    ],
  },
  {
    id: 'define',
    num: '02',
    label: 'Define',
    title: 'Define',
    subtitle: 'Problem Framing',
    body: 'We synthesized research findings into three core problem statements that guided our design direction.',
    items: [
      'New user access barrier — no clear CTA on deposit page for first-time users',
      'Breakpoint in withdrawal flow — users lose tracking after submitting a withdrawal',
      'Missing critical information — no network guidance, no address book for repeat transfers',
      'Opportunity mapping across user segments: new, active, and power users',
    ],
  },
  {
    id: 'ideation',
    num: '03',
    label: 'Ideation',
    title: 'Ideation',
    subtitle: 'Workshops & Concepts',
    body: 'Cross-functional design workshops brought together Product, Design, and Engineering to brainstorm and evaluate solutions.',
    items: [
      'Crazy-8s sketching sessions for rapid concept generation',
      'Dot-voting to prioritize solutions by impact and feasibility',
      'Concept sketches for guided deposit onboarding flow',
      'Withdrawal tracking prototype with real-time blockchain status',
      'Address book and network recommendation system concepts',
    ],
  },
  {
    id: 'implementation',
    num: '04',
    label: 'Implementation',
    title: 'Implementation',
    subtitle: 'Ship & Iterate',
    body: 'We moved from validated prototypes to production, working closely with engineering through iterative design-dev sprints.',
    items: [
      'Design specs delivered via Figma with detailed component annotations',
      'Weekly design QA sessions during development sprints',
      'A/B testing framework for key flow variations',
      'Post-launch monitoring of deposit completion rate and withdrawal tracking usage',
      'Iterative refinement based on real user data and feedback',
    ],
  },
];

export default function DTTabs() {
  const [activeTab, setActiveTab] = useState('discovery');

  return (
    <div className="dt-tabs-container reveal">
      <div className="dt-tab-list">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`dt-tab-item${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="dt-tab-num">{tab.num}</div>
            <div className="dt-tab-label">{tab.label}</div>
          </div>
        ))}
      </div>
      <div className="dt-content-area">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`dt-content-panel${activeTab === tab.id ? ' active' : ''}`}
          >
            <h3>{tab.title}</h3>
            <div className="dt-subtitle">{tab.subtitle}</div>
            <p>{tab.body}</p>
            <ul>
              {tab.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
