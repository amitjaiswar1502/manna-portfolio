export interface UserPersona {
  name: string;
  role: string;
  age: string;
  experience: string;
  avatarInitials: string;
  quote: string;
  bio: string;
  archetype: string;
  goals: string[];
  frustrations: string[];
  traits: { label: string; score: number }[];
}

export interface EmpathyMap {
  says: string[];
  thinks: string[];
  does: string[];
  feels: string[];
}

export interface JourneyStage {
  stage: string;
  userAction: string;
  mindset: string;
  painPoint: string;
  opportunity: string;
  emotionScore: number; // 1 (frustrated) to 5 (delighted)
}

export interface UserFlowStep {
  stepNumber: number;
  phase: string;
  action: string;
  decisionPoint?: string;
  systemFeedback: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  bullets?: string[];
  callout?: string;
}

export interface WireframeStep {
  title: string;
  description: string;
  stage: 'Low-Fi Wireframe' | 'Mid-Fi Architecture' | 'High-Fi Interactive' | 'Design System Tokens';
  previewDetails: {
    layoutType: string;
    highlights: string[];
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Enterprise Systems' | 'EdTech & Learning' | 'Fintech & Commerce' | 'Mobile & Web';
  client: string;
  role: string;
  timeline: string;
  year: string;
  coverAccent: string;
  heroBadge: string;
  shortSummary: string;
  metrics: ProjectMetric[];
  toolsUsed: string[];
  tags: string[];
  overview: string;
  problemStatement: string;
  hypothesis?: string;
  userNeeds: string[];
  businessGoals: string[];
  persona?: UserPersona;
  empathyMap?: EmpathyMap;
  journeyMap?: JourneyStage[];
  userFlowSteps?: UserFlowStep[];
  researchInsights: {
    method: string;
    finding: string;
    actionTaken: string;
  }[];
  informationArchitecture: {
    title: string;
    description: string;
    modules: string[];
  };
  wireframeEvolution?: {
    lowFi: { title: string; description: string; highlights: string[] };
    midFi: { title: string; description: string; highlights: string[] };
    highFi: { title: string; description: string; highlights: string[] };
  };
  beforeAfter: {
    beforeTitle: string;
    beforeDesc: string;
    beforeFriction: string[];
    afterTitle: string;
    afterDesc: string;
    afterWins: string[];
  };
  designSystemTokens: {
    colorPalette: { name: string; hex: string; role: string }[];
    typography: string;
    componentsCount: number;
    principles: string[];
    elevationTokens?: { level: string; shadow: string; usage: string }[];
  };
  usabilityTesting: {
    participants: number;
    sessions: number;
    susScoreBefore: number;
    susScoreAfter: number;
    keyFeedback: string;
    completionRateBefore?: string;
    completionRateAfter?: string;
    timeOnTaskBefore?: string;
    timeOnTaskAfter?: string;
  };
  interactivePreview: {
    type: 'dashboard' | 'mobile-app' | 'flow-stepper' | 'grid-telemetry';
    accentColor: string;
    screenTitle: string;
    stats: { label: string; value: string; trend?: string }[];
    sampleAction: string;
  };
  keyLearnings?: string[];
  nextSteps?: string[];
  nextProjectId?: string;
  prevProjectId?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: 'Design Systems' | 'Enterprise UX' | 'User Research' | 'Interaction Design' | 'Design Strategy';
  tags: string[];
  popular?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaway?: string;
    }[];
    conclusion: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectRelation: string;
  avatarInitials: string;
  avatarColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  clientContext?: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Education';
  summary: string;
  responsibilities: string[];
  keyWins: string[];
  tools: string[];
}

export const PERSONAL_INFO = {
  name: 'Manoj Manna',
  title: 'Senior UX Designer',
  tagline: 'Crafting intuitive, scalable digital products & enterprise design systems with 8+ years of craft.',
  yearsOfExperience: '8+',
  location: 'Mumbai, India',
  email: 'manoj241993@gmail.com',
  phone: '+91 7021 4620 91',
  availability: 'Available for Senior/Lead UX Roles & Select Consultancies',
  bio: `Senior UX Designer with 8+ years of experience designing user-centric digital products across fintech, edtech, and enterprise domains. Proven ability to improve usability, drive engagement, and deliver scalable design systems aligned with business goals. Skilled in turning complex legacy requirements into frictionless human-centered software.`,
  socials: {
    linkedin: 'https://www.linkedin.com/in/manoj-manna-ux',
    email: 'mailto:manoj241993@gmail.com',
    phone: 'tel:+917021462091',
    figma: 'https://www.figma.com/@manojmanna',
    dribbble: 'https://dribbble.com',
    behance: 'https://behance.net',
  },
  coreStats: [
    { label: 'Years of Experience', value: '8+', caption: 'Full-cycle product design' },
    { label: 'Global Clients Served', value: 'Fortune 500', caption: 'Nokia, Itron, EGA & more' },
    { label: 'Design Systems Scaled', value: '4+', caption: 'Multi-platform tokens & components' },
    { label: 'Usability Testing Sessions', value: '60+', caption: 'Qualitative & quantitative research' },
  ],
  skillsList: [
    { category: 'Research & Strategy', items: ['User Research', 'Usability Testing', 'Information Architecture', 'Journey Mapping', 'Competitive Benchmarking', 'Stakeholder Alignment'] },
    { category: 'Interaction & Visual', items: ['Interaction Design', 'Visual Design', 'Wireframing & Prototyping', 'Design Systems & Tokens', 'Responsive Grids', 'Nested Symbols & Components', 'Micro-interactions'] },
    { category: 'Domain Expertise', items: ['Enterprise Telecom & NOC', 'Smart Grid & Telemetry', 'Higher EdTech & LXP', 'Fintech Valuation Flows', 'Scaled Agile Framework (SAFe)'] },
  ],
  toolsList: [
    { name: 'Figma', level: 'Expert', desc: 'Component variants, auto-layout & token architectures' },
    { name: 'Figjam', level: 'Expert', desc: 'Workshops, research synthesis & user journey maps' },
    { name: 'Sketch', level: 'Advanced', desc: 'Nested symbols, design libraries & pixel-perfect specs' },
    { name: 'UserTesting', level: 'Advanced', desc: 'Unmoderated tests, SUS metrics & task completion' },
    { name: 'Adobe XD', level: 'Advanced', desc: 'Interactive prototypes & voice trigger micro-flows' },
    { name: 'InVision & Marvel', level: 'Experienced', desc: 'Stakeholder click-through validation' },
  ],
  education: [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'University of Mumbai',
      period: 'June 2014 – June 2017',
      details: 'Bridging computer science fundamentals, data structures, and human-computer interaction (HCI).'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'nokia-noc-console',
    slug: 'nokia-enterprise-noc-console',
    title: 'Nokia Enterprise Network Operations Console',
    tagline: 'Streamlining mission-critical network telemetry and fault resolution for tier-1 telecom operators.',
    category: 'Enterprise Systems',
    client: 'Capgemini Engineering (Client: Nokia)',
    role: 'Lead UX Designer',
    timeline: '14 Months',
    year: '2023 - Present',
    coverAccent: 'from-[#C25934] to-[#8C3419]',
    heroBadge: 'Enterprise / Telecom NOC',
    shortSummary: 'Transformed a fragmented 14-screen legacy telecom monitoring tool into a unified real-time dashboard, cutting cognitive overload and resolving outages 42% faster.',
    metrics: [
      { label: 'MTTR (Mean Time to Resolution)', value: '-42%', description: 'Drastic reduction in incident diagnosis time' },
      { label: 'Screen Consolidation', value: '14 → 1', description: 'Unified multi-window workflows into single context' },
      { label: 'Task Success Rate', value: '94%', description: 'Validated across 35 NOC operator testing sessions' },
      { label: 'SUS Usability Score', value: '82 / 100', description: 'Improved from legacy baseline of 44 / 100' }
    ],
    toolsUsed: ['Figma', 'Figjam', 'UserTesting', 'Design Tokens', 'Design System'],
    tags: ['Enterprise UX', 'Telemetry Dashboards', 'NOC Operations', 'Design System', 'Usability Testing'],
    overview: 'Nokia’s enterprise telecom infrastructure teams manage millions of cell tower alarms daily. The legacy console suffered from fragmented browser tabs, sluggish data refreshes, and unprioritized red alerts that caused operator fatigue. Manoj led the end-to-end UX revamp from contextual inquiry to scaled component delivery.',
    problemStatement: 'NOC engineers had to switch between 14 disconnected tools and manual command-line interfaces to triage severe network outages, leading to alarm fatigue, delayed incident response, and multi-million dollar SLA breach risks.',
    hypothesis: 'By replacing fragmented multi-window alarm streams with an AI-clustered spatial topology graph and synchronized time-series diagnostics, NOC operators can diagnose root-cause outages in under 3 minutes while maintaining high situation awareness.',
    persona: {
      name: 'Vikram Sundaram',
      role: 'Lead Network Operations Tier-2 Engineer',
      age: '34 Years Old',
      experience: '9 Years in Telecom Infrastructure',
      avatarInitials: 'VS',
      quote: '"When a major fiber cut triggers 3,000 alarms simultaneously, I don\'t need 3,000 blinking red dots. I need to know which single line failed so I can dispatch field crews immediately."',
      bio: 'Vikram monitors national 5G and 4G telecom networks on 12-hour rotating shifts. He oversees critical backbone routing for tier-1 carriers, where a 5-minute outage results in significant SLA penalties.',
      archetype: 'The Mission-Critical Troubleshooter',
      goals: [
        'Identify root-cause equipment failures in under 60 seconds',
        'Eliminate false-positive alarm noise during weather events',
        'Dispatch field technicians with verified GPS coordinates and fault logs',
        'Automate routine failover switches without manual terminal scripting'
      ],
      frustrations: [
        'Having to cross-reference node IDs across 5 separate browser tabs',
        'Loud unprioritized alarm beeps causing cognitive exhaustion',
        'Clunky command-line terminal commands with zero error rollback safety'
      ],
      traits: [
        { label: 'Technical Fluency', score: 95 },
        { label: 'Speed Requirement', score: 98 },
        { label: 'Tolerance for UI Friction', score: 15 },
        { label: 'Multitasking Intensity', score: 90 }
      ]
    },
    empathyMap: {
      says: [
        '"I am spending more time searching for the right tool tab than fixing the outage."',
        '"Why does a minor antenna glitch look identical to a critical core fiber cut?"',
        '"Give me a single screen that shows what is broken and what is impacted."'
      ],
      thinks: [
        'Will my team breach our 99.999% SLA because of slow tool loading?',
        'I wish the system grouped related cell tower failures automatically.',
        'I need to verify this fix before running production commands.'
      ],
      does: [
        'Keeps 14 browser windows open across 4 physical monitors',
        'Writes down node numbers on paper sticky notes to compare IP tables',
        'Manually pings terminal endpoints to confirm live connectivity'
      ],
      feels: [
        'Severe eye strain and mental fatigue during high-severity storms',
        'Anxiety when multiple alarms ring simultaneously with equal urgency',
        'Relief and confidence when incident telemetry is visually transparent'
      ]
    },
    journeyMap: [
      {
        stage: '01. Detection',
        userAction: 'Monitors global health ticker; notices sudden alarm spike in North Zone',
        mindset: '"Is this a real equipment failure or a transient telemetry glitch?"',
        painPoint: '2,000 raw alarms flood the screen without geographical context',
        opportunity: 'Implement automated spatial incident clustering and noise filtering',
        emotionScore: 2
      },
      {
        stage: '02. Triage & Correlation',
        userAction: 'Filters by severity and inspects topological dependencies',
        mindset: '"I need to see which upstream fiber node feeds these 45 cell sites."',
        painPoint: 'Manual lookup between node serial numbers and geographical map',
        opportunity: 'Dynamic interactive topology graph highlighting root-cause fault path in red',
        emotionScore: 2
      },
      {
        stage: '03. Deep Diagnosis',
        userAction: 'Clicks failed backbone router to view synchronized optical telemetry',
        mindset: '"Checking optical power loss and packet drop timestamps."',
        painPoint: 'Opening separate Grafana and Linux terminal tools in new windows',
        opportunity: 'Integrated slide-over inspector drawer with live telemetry graphs and terminal logs',
        emotionScore: 4
      },
      {
        stage: '04. Remediation & Dispatch',
        userAction: 'Triggers automated traffic rerouting and generates field ticket',
        mindset: '"Traffic safely rerouted. Field crew notified with exact GPS coordinates."',
        painPoint: 'Typing 25-character Linux commands with fear of typos',
        opportunity: 'One-click protected action button with two-factor visual confirmation',
        emotionScore: 5
      },
      {
        stage: '05. Post-Incident Review',
        userAction: 'Reviews incident timeline and exports SLA compliance report',
        mindset: '"All metrics recovered; SLA penalty avoided."',
        painPoint: 'Manual screenshot compilation for executive post-mortems',
        opportunity: 'One-click PDF/CSV executive incident summary export',
        emotionScore: 5
      }
    ],
    userFlowSteps: [
      {
        stepNumber: 1,
        phase: 'Incident Alert',
        action: 'Global status bar pulses with prioritized P1 Incident Badge',
        systemFeedback: 'Audio chime dampened; spatial topology zooms to North Region cluster'
      },
      {
        stepNumber: 2,
        phase: 'Spatial Triage',
        action: 'Operator clicks root-cause node on topological map',
        decisionPoint: 'Is automated failover path available?',
        systemFeedback: 'Topological branch highlighted; downstream 42 towers grouped in dependent tray'
      },
      {
        stepNumber: 3,
        phase: 'Diagnostic Execution',
        action: 'Operator reviews optical dBm chart in slide-over drawer and clicks "Execute Reroute"',
        systemFeedback: 'Two-step safety modal appears with expected traffic impact visualization'
      },
      {
        stepNumber: 4,
        phase: 'Verification',
        action: 'Traffic shifts smoothly; alarm cluster turns from Critical Red to Nominal Green',
        systemFeedback: 'Real-time MTTR timer stops; automated field dispatch email dispatched'
      }
    ],
    wireframeEvolution: {
      lowFi: {
        title: 'Phase 1: Paper & Figjam Concept Mapping',
        description: 'Explored 6 layout configurations on Figjam to solve the 14-screen fragmentation. Narrowed down to a 3-zone unified viewport (Header Ticker + Main Interactive Canvas + Contextual Inspector Drawer).',
        highlights: ['Eliminated browser popups', 'Grouped alarms into spatial nodes', 'Tested thumb-friendly command bars']
      },
      midFi: {
        title: 'Phase 2: Grayscale Wireframes & Information Hierarchy',
        description: 'Tested information density with 12 NOC engineers using grayscale Figma wireframes. Validated that keeping telemetry timelines pinned to the bottom reduced eye travel by 60%.',
        highlights: ['Defined 12-column responsive layout grid', 'Standardized table row heights for dense data', 'Established keyboard shortcut taxonomy (Cmd+K)']
      },
      highFi: {
        title: 'Phase 3: Pixel-Perfect High-Fidelity UI & Token System',
        description: 'Applied WCAG AAA dark mode tokens (#0B111E surface, #005AFF brand primary, #FF3B30 critical red). Built 140+ atomic components in Figma with variant states and auto-layout.',
        highlights: ['Calibrated optical contrast for 24/7 dark rooms', 'Interactive micro-interactions for alarm state transitions', 'Seamless handoff tokens directly linked to React/CSS variables']
      }
    },
    userNeeds: [
      'Real-time automated incident clustering based on geographical topology',
      'One-click root cause drill-down without losing high-level grid context',
      'High-contrast dark mode tailored for 24/7 dim-light monitoring rooms',
      'Customizable workspace layouts for specific engineer tiers (L1, L2, L3)'
    ],
    businessGoals: [
      'Meet strict 99.999% network reliability SLAs for tier-1 mobile carriers',
      'Reduce operator onboarding time from 6 months to 3 weeks',
      'Establish a unified design system adopted across all Nokia subsidiary apps'
    ],
    researchInsights: [
      {
        method: 'Contextual Inquiries (12 Engineers)',
        finding: 'Operators were visually desensitized to red flashing alerts because low-priority warnings used identical styling.',
        actionTaken: 'Created a 4-tier semantic severity color hierarchy with sound-dampened visual pulses.'
      },
      {
        method: 'Card Sorting & Information Architecture',
        finding: 'Topology maps and telemetry timeseries were kept on separate monitors, requiring mental map matching.',
        actionTaken: 'Embedded correlated telemetry timelines directly beneath the interactive topology node view.'
      },
      {
        method: 'SUS Benchmarking',
        finding: 'Legacy system scored 44 on System Usability Scale due to hidden action menus.',
        actionTaken: 'Implemented a standardized global command palette (Cmd+K) and context-aware action bars.'
      }
    ],
    informationArchitecture: {
      title: 'Unified Operational Triad Hierarchy',
      description: 'Structured the viewport into three contextual zones: Global Health Bar, Live Spatial Topology, and Inspector Triage Drawer.',
      modules: ['Global Incident Ticker', 'Interactive Topology Graph', 'Contextual Alert Drawer', 'Historical Metric Correlation Engine', 'Automated Remediation Trigger']
    },
    beforeAfter: {
      beforeTitle: 'Legacy Disjointed Toolstack',
      beforeDesc: 'Chaotic alert lists spread across multiple browser popups with non-standardized colors and zero spatial context.',
      beforeFriction: [
        'Over 2,000 unclustered alarms during single storm events',
        'Manual correlation between node IDs and geographical locations',
        'No unified action buttons (required typing Linux terminal commands)'
      ],
      afterTitle: 'Unified Nokia NOC Command Center',
      afterDesc: 'Intelligent AI-clustered incident streams with synchronized topology map and one-click diagnostic runbooks.',
      afterWins: [
        'Single-pane-of-glass workspace with customizable L1/L2 viewports',
        'Visual root-cause path highlighting across network backbones',
        'Dark mode optimized with WCAG AAA contrast for 12-hour shifts'
      ]
    },
    designSystemTokens: {
      colorPalette: [
        { name: 'Nokia Blue', hex: '#005AFF', role: 'Brand & Primary Active Elements' },
        { name: 'NOC Dark Surface', hex: '#0B111E', role: 'Main Canvas Background' },
        { name: 'Critical Severity', hex: '#FF3B30', role: 'High Priority P1 Incidents' },
        { name: 'Warning Orange', hex: '#FF9500', role: 'Degraded Service P2 Alarms' },
        { name: 'Nominal Teal', hex: '#30D158', role: 'Healthy Nodes & Active Links' }
      ],
      typography: 'Space Grotesk (Data & Status) + Plus Jakarta Sans (Operational Typography)',
      componentsCount: 140,
      principles: [
        'Zero Visual Fluff: Every pixel must convey actionable operational state',
        'Progressive Disclosure: Summarize at a glance, expand on demand',
        'High Contrast Accessibility: Validated for 24/7 dark-room monitor environments'
      ]
    },
    usabilityTesting: {
      participants: 35,
      sessions: 8,
      susScoreBefore: 44,
      susScoreAfter: 82,
      keyFeedback: '"For the first time in 6 years, I can identify which fiber cut caused a cascading outage in under 30 seconds without opening terminal logs."'
    },
    interactivePreview: {
      type: 'dashboard',
      accentColor: '#005AFF',
      screenTitle: 'Nokia NOC Operations — Core Cell Grid',
      stats: [
        { label: 'Active Towers', value: '14,820', trend: '+99.98% Healthy' },
        { label: 'Triage Queue', value: '3 Critical', trend: 'Auto-clustered' },
        { label: 'Avg Latency', value: '4.2 ms', trend: '-18% vs benchmark' }
      ],
      sampleAction: 'Investigate Substation Node Alpha-7'
    },
    keyLearnings: [
      'Operational density requires deliberate visual breathing room: tighter margins with higher contrast prevent cognitive overwhelm.',
      'Always co-design with domain experts: regular weekly dry-runs with tier-2 NOC engineers exposed fatal flaws in early graph navigation.',
      'Design tokens act as the bridge between UX and engineering: syncing Figma variable names with CSS variables cut UI drift to zero.'
    ],
    nextSteps: [
      'Expand automated predictive AI runbooks for proactive self-healing networks.',
      'Implement voice-activated telemetry queries for hands-busy NOC command centers.',
      'Roll out the unified design token package to Nokia partner ecosystems.'
    ]
  },
  {
    id: 'itron-smart-grid',
    slug: 'itron-smart-grid-analytics',
    title: 'Itron Smart Grid & Energy Analytics Platform',
    tagline: 'Designing real-time utility telemetry, load forecasting, and smart metering visualizers for municipal power grids.',
    category: 'Enterprise Systems',
    client: 'Capgemini Engineering (Client: Itron)',
    role: 'Senior UX Designer',
    timeline: '10 Months',
    year: '2022 - 2023',
    coverAccent: 'from-emerald-600 to-teal-700',
    heroBadge: 'Enterprise IoT / Clean Energy',
    shortSummary: 'Redesigned energy telemetry dashboards and load distribution tools for smart grid operators, reducing diagnostic cognitive load by 35%.',
    metrics: [
      { label: 'Diagnostic Speed', value: '+35%', description: 'Faster anomaly identification in power surges' },
      { label: 'Utilities Onboarded', value: '12', description: 'Municipal power grids running new interface' },
      { label: 'Error Margin', value: '-60%', description: 'Decrease in accidental manual override submissions' },
      { label: 'User Satisfaction', value: '4.8 / 5', description: 'Rated across 80+ field dispatch engineers' }
    ],
    toolsUsed: ['Figma', 'Figjam', 'UserTesting', 'Wireframing', 'Responsive Design'],
    tags: ['Enterprise IoT', 'Telemetry', 'Clean Energy', 'Data Visualization', 'Figma'],
    overview: 'Itron provides intelligent energy and water management solutions. Power grid operators monitor gigawatt load distributions across thousands of substations. The project aimed to transform dense numerical data streams into intuitive spatial heatmaps and predictive load curves.',
    problemStatement: 'Grid operators were overwhelmed by tabular data sheets with 50+ columns, making it difficult to spot micro-fluctuations in peak energy hours before transformer overloads occurred.',
    hypothesis: 'By visualizing power distributions on interactive spatial heatmaps paired with dynamic time-scrubbing controls, grid dispatchers can forecast transformer strain 40 minutes ahead of peak surges.',
    persona: {
      name: 'Elena Rostova',
      role: 'Senior Grid Dispatch Controller',
      age: '41 Years Old',
      experience: '14 Years in Electrical Grid Dispatch',
      avatarInitials: 'ER',
      quote: '"When solar generation drops abruptly as cloud cover rolls in, I need to balance hydro and battery storage in seconds—not hunt through 50 columns of text."',
      bio: 'Elena balances multi-gigawatt regional power grids. She coordinates renewable energy inputs with traditional turbine generation, ensuring continuous stability during extreme weather.',
      archetype: 'The Balancing Strategist',
      goals: [
        'Forecast sudden load spikes before transformer breakers trip',
        'Seamlessly blend intermittent renewable energy into baseload grid',
        'Compare historical heatwaves with current load curves side-by-side'
      ],
      frustrations: [
        'Static spreadsheets updating with full-page flicker',
        'Lack of geographical context when looking at substation sensor codes',
        'Complex two-handed mouse operations while on phone with field crews'
      ],
      traits: [
        { label: 'Analytical Acumen', score: 96 },
        { label: 'Situational Awareness', score: 94 },
        { label: 'Process Precision', score: 92 },
        { label: 'Decision Speed', score: 88 }
      ]
    },
    empathyMap: {
      says: [
        '"Show me which substation is getting hot before the circuit breaker trips."',
        '"Why can\'t I scrub back 20 minutes to see what caused the voltage dip?"',
        '"I need one view for the city and one view for the transformer."'
      ],
      thinks: [
        'Is the heatwave going to exceed our peak reserve capacity today?',
        'I need to make sure this solar farm inverter is feeding clean current.',
        'If I trip this breaker accidentally, 20,000 homes lose air conditioning.'
      ],
      does: [
        'Juggles 3 separate software applications for GIS, SCADA, and weather',
        'Draws makeshift grid sketches on whiteboards during emergency shifts',
        'Manually calculates percentage reserves on desktop calculator'
      ],
      feels: [
        'High stress during peak 4 PM summer hours when AC usage skyrockets',
        'Pride when renewable energy share reaches all-time records cleanly',
        'Frustration with legacy software that freezes during data spikes'
      ]
    },
    journeyMap: [
      {
        stage: '01. Shift Handover',
        userAction: 'Reviews 24-hour reserve capacity and active weather warnings',
        mindset: '"What substations are running near 80% capacity today?"',
        painPoint: 'Paper handover logs with outdated peak demand numbers',
        opportunity: 'Automated 1-click digital shift handover overview with load delta metrics',
        emotionScore: 3
      },
      {
        stage: '02. Surge Monitoring',
        userAction: 'Tracks midday solar peak and afternoon industrial ramp',
        mindset: '"Watching Zone B transformer temperatures climb."',
        painPoint: 'Tables with 50 rows of raw amp numbers without visual color cues',
        opportunity: 'Dynamic heatmaps with ambient glow indicators at 75%, 85%, and 95% thresholds',
        emotionScore: 3
      },
      {
        stage: '03. Incident Triage',
        userAction: 'Uses time-scrubber to replay the last 30 minutes of harmonic distortion',
        mindset: '"Found the surge origin: Substation 14B capacitor bank failed."',
        painPoint: 'Opening separate database query logs in SQL tools',
        opportunity: 'Interactive time-travel scrub slider built into the telemetry map',
        emotionScore: 5
      },
      {
        stage: '04. Balancing & Action',
        userAction: 'Dispatches battery energy storage system (BESS) buffer with 2 taps',
        mindset: '"Grid load stabilized. Reserve margins safe."',
        painPoint: 'Complex confirmation dialogues with obscure hexadecimal codes',
        opportunity: 'Plain-English action confirmation with instant MW flow simulation',
        emotionScore: 5
      }
    ],
    userFlowSteps: [
      {
        stepNumber: 1,
        phase: 'Map Overview',
        action: 'Operator scans municipal SVG grid heatmap with real-time watt vectors',
        systemFeedback: 'Color-coded thermal glow on Substation Metro-East (88% load)'
      },
      {
        stepNumber: 2,
        phase: 'Substation Deep Dive',
        action: 'Operator clicks node to open Split Telemetry Inspector',
        decisionPoint: 'Does solar drop require battery injection?',
        systemFeedback: 'Side-by-side harmonic wave graphs and inverter phase telemetry display'
      },
      {
        stepNumber: 3,
        phase: 'Time-Travel Scrubber',
        action: 'Drags timeline scrubber back 15 minutes to inspect anomaly onset',
        systemFeedback: 'Interactive SVG power lines replay historic flow reversal'
      },
      {
        stepNumber: 4,
        phase: 'Load Dispatch',
        action: 'Toggles "Activate Battery Storage Buffer (25 MW)"',
        systemFeedback: 'Confirmation banner displays; load on Metro-East drops to nominal 64%'
      }
    ],
    wireframeEvolution: {
      lowFi: {
        title: 'Phase 1: Concept Sketching & Spatial Mapping',
        description: 'Explored hybrid GIS map + telemetry card concepts on Figjam to replace spreadsheet tables.',
        highlights: ['Geospatial node clustering', 'Time-scrubber concept', 'Pinboard multi-node comparison']
      },
      midFi: {
        title: 'Phase 2: Interactive Wireframes & Usability Testing',
        description: 'Validated the time-travel slider with 18 grid dispatchers. Found that operators could identify voltage dips 4x faster with visual wave scrubbers.',
        highlights: ['Refined touch targets for ruggedized tablets', 'Designed split-screen compare mode']
      },
      highFi: {
        title: 'Phase 3: High-Fidelity Design System & Micro-Animations',
        description: 'Created emerald-to-amber semantic thermal palettes with smooth SVG vector animations representing live kilowatt directional flow.',
        highlights: ['Dark/Light high-contrast modes for field control trucks', '110+ tokenized UI components']
      }
    },
    userNeeds: [
      'Dynamic power flow diagrams with real-time vector animations',
      'Threshold alert configuration with drag-and-drop boundary curves',
      'Dual-view capability: high-level municipal map and substation sensor deep-dive',
      'Rapid export of regulatory compliance reports in one click'
    ],
    businessGoals: [
      'Enable green energy source prioritization (solar/wind integration)',
      'Prevent costly brownouts through automated predictive warnings',
      'Create an extensible web application responsive from tablets to multi-monitor setups'
    ],
    researchInsights: [
      {
        method: 'Remote Think-Aloud Usability Sessions (18 Users)',
        finding: 'Operators spent 40% of their shift filtering out expected noise in solar panel inverter fluctuations.',
        actionTaken: 'Engineered an intelligent baseline filter that highlights only genuine anomalies.'
      },
      {
        method: 'Workflow Process Mapping',
        finding: 'Grid dispatchers had to write down substation codes on sticky notes while switching views.',
        actionTaken: 'Introduced persistent pinboard trays allowing operators to compare 4 substations side-by-side.'
      }
    ],
    informationArchitecture: {
      title: 'Spatial-Temporal Telemetry Framework',
      description: 'Connected geographic geospatial maps with time-scrubbing analytical controls.',
      modules: ['Live Energy Flow Visualizer', 'Substation Telemetry Matrix', 'Predictive Surge Estimator', 'Multi-Node Compare Board', 'Audit Log & Dispatch Trigger']
    },
    beforeAfter: {
      beforeTitle: 'Spreadsheet-Style Monolith',
      beforeDesc: 'Static 50-column data tables updating with jarring full-page refreshes.',
      beforeFriction: [
        'Zero spatial representation of where power lines intersected',
        'No visual warning states until critical failure thresholds were crossed',
        'Difficult to view on ruggedized field tablets'
      ],
      afterTitle: 'Interactive Grid Telemetry Canvas',
      afterDesc: 'Fluid SVG power vector maps with predictive AI load overlays and tactile responsive controls.',
      afterWins: [
        'Instant visual color-coded thermal load statuses',
        'Smooth time-travel scrub slider to replay the last 24 hours of grid events',
        'Optimized for touch interaction in field control vehicles'
      ]
    },
    designSystemTokens: {
      colorPalette: [
        { name: 'Grid Emerald', hex: '#10B981', role: 'Normal Power Distribution' },
        { name: 'Peak Surge Amber', hex: '#F59E0B', role: 'Near-Capacity Load Warning' },
        { name: 'Overload Red', hex: '#EF4444', role: 'Transformer Trip Threat' },
        { name: 'Solar Cyan', hex: '#06B6D4', role: 'Renewable Inflow Stream' }
      ],
      typography: 'Space Grotesk + Plus Jakarta Sans',
      componentsCount: 110,
      principles: [
        'Spatial Clarity: Always ground telemetry numbers in geographic reality',
        'Temporal Fluidity: Allow operators to replay historical incidents effortlessly',
        'Defensive UX: Require two-step confirmation for critical power grid reroutes'
      ]
    },
    usabilityTesting: {
      participants: 28,
      sessions: 6,
      susScoreBefore: 51,
      susScoreAfter: 86,
      keyFeedback: '"The time-scrubber feature saved us during the July heatwave—we caught a substation transformer heating up 20 minutes before it could trip."'
    },
    interactivePreview: {
      type: 'grid-telemetry',
      accentColor: '#10B981',
      screenTitle: 'Itron Grid Monitoring — Metro Zone B',
      stats: [
        { label: 'Total Grid Load', value: '4.82 GW', trend: 'Optimal (72% cap)' },
        { label: 'Renewable Share', value: '41.4%', trend: '+8.2% Solar peak' },
        { label: 'Active Alerts', value: '0 Critical', trend: 'All nodes nominal' }
      ],
      sampleAction: 'Toggle Peak Load Simulation'
    },
    keyLearnings: [
      'Spatial representations reduce mental transformation time: operators map problems to locations instantly.',
      'Defensive UI prevents catastrophic utility actions: two-tier confirmations on circuit reroutes stopped accidental trips.',
      'Touch targets on ruggedized tablet screens must be at least 48px to accommodate bumpy field vehicle rides.'
    ],
    nextSteps: [
      'Implement machine learning predictive wind and solar forecast curves 4 hours out.',
      'Integrate drone thermal camera feed overlays directly on substation GIS nodes.'
    ]
  },
  {
    id: 'manipal-global-lxp',
    slug: 'manipal-global-learning-platform',
    title: 'Manipal Global NextGen Learning Experience (LXP)',
    tagline: 'Designing modern web & mobile learning flows that empowered 120,000+ higher-ed learners across India.',
    category: 'EdTech & Learning',
    client: 'Manipal Global Education',
    role: 'UI/UX Designer',
    timeline: '2.5 Years',
    year: '2019 - 2021',
    coverAccent: 'from-purple-600 to-pink-600',
    heroBadge: 'EdTech / Web & Android App',
    shortSummary: 'Engineered intuitive learning journeys, lecture video players, and micro-credential flows across Web and Android, lifting course completion rates by 68%.',
    metrics: [
      { label: 'Course Completion Rate', value: '+68%', description: 'Major uplift across enrolled degree students' },
      { label: 'Daily Active Learners', value: '120k+', description: 'Across undergraduate and postgraduate programs' },
      { label: 'Android Play Store Rating', value: '4.6 ★', description: 'Improved from 2.9 ★ prior to redesign' },
      { label: 'Drop-off at Quiz Stages', value: '-54%', description: 'Streamlined interactive testing experience' }
    ],
    toolsUsed: ['Figma', 'Sketch', 'InVision', 'User Testing', 'Nested Symbols', 'Agile Design'],
    tags: ['EdTech', 'Android UX', 'Web App', 'Design Systems', 'Micro-interactions', 'Gamification'],
    overview: 'Manipal Global Education is one of India’s premier higher education networks. With thousands of working professionals taking online degree programs, the digital campus required an overhaul to support asynchronous video lectures, assignment submissions, offline reading, and peer forums.',
    problemStatement: 'Students were abandoning coursework due to confusing navigation, non-responsive video players on low-bandwidth 3G/4G connections, and fragmented assessment portals.',
    hypothesis: 'By transitioning from a dense multi-tier LMS structure to a goal-oriented mobile-first learning experience with offline synchronization and contextual progress tracking, students will complete coursework 50% more consistently.',
    persona: {
      name: 'Pooja Sharma',
      role: 'Working Professional & MBA Candidate',
      age: '27 Years Old',
      experience: '4 Years in Corporate Marketing',
      avatarInitials: 'PS',
      quote: '"I study for 45 minutes on the Mumbai local train each evening. If the app buffers or loses my video position when the signal drops, I lose my daily study window."',
      bio: 'Pooja is balancing a 45-hour work week with an online executive MBA. She needs maximum efficiency: quick-resume video playback, offline PDF lecture notes, and bite-sized quizzes.',
      archetype: 'The Ambitious Mobile Commuter',
      goals: [
        'Complete 2 modules per week during evening commute',
        'Download video lectures at home on Wi-Fi for offline playback',
        'Receive proactive alerts for upcoming assignment submission deadlines'
      ],
      frustrations: [
        'Losing quiz answers when mobile connection drops momentarily',
        'Tiny desktop-style links that are impossible to tap on a crowded train',
        'Having to log in repeatedly every time the app opens'
      ],
      traits: [
        { label: 'Mobile-First Usage', score: 95 },
        { label: 'Time Scarcity', score: 92 },
        { label: 'Motivation Need', score: 85 },
        { label: 'Offline Requirement', score: 98 }
      ]
    },
    empathyMap: {
      says: [
        '"Let me download all 5 lectures for the week while I\'m at home on Wi-Fi."',
        '"I want to see my grade progress immediately without hunting in a separate portal."',
        '"Make the quiz questions readable on my phone with one thumb."'
      ],
      thinks: [
        'Will I be able to finish this degree while managing my full-time job?',
        'Did my assignment upload go through properly?',
        'I wish this felt more like modern streaming apps and less like a school portal.'
      ],
      does: [
        'Studies during transit in noisy, high-distraction environments',
        'Screenshots lecture slides to study when video fails to load',
        'Checks app late at night to verify assignment submission timestamps'
      ],
      feels: [
        'Anxious about balancing work deadlines and university schedules',
        'Delighted when completing a streak and watching progress rings fill up',
        'Empowered by clean, readable typography that doesn\'t cause eye fatigue'
      ]
    },
    journeyMap: [
      {
        stage: '01. Open App',
        userAction: 'Opens app on evening commute; sees "Today\'s Goal" card',
        mindset: '"Let me finish Lecture 4 of Marketing Analytics."',
        painPoint: 'Legacy app took 12 seconds to load and asked for password every session',
        opportunity: 'Biometric quick-unlock and instant 1-tap "Resume Where You Left Off"',
        emotionScore: 4
      },
      {
        stage: '02. Video Lecture',
        userAction: 'Watches 15-minute video segment; adjusts playback speed to 1.25x',
        mindset: '"The professor is explaining ROI formulas. I want to bookmark this timestamp."',
        painPoint: 'Buffering on train; no in-video note taking',
        opportunity: 'Offline downloaded playback with synchronized interactive transcript',
        emotionScore: 5
      },
      {
        stage: '03. Knowledge Check',
        userAction: 'Completes 5-question micro-quiz at end of module',
        mindset: '"Let\'s see if I understood the attribution models."',
        painPoint: 'Submitting caused page refresh; if signal was lost, score was 0',
        opportunity: 'Offline local answer caching with optimistic server sync',
        emotionScore: 5
      },
      {
        stage: '04. Weekly Streak Win',
        userAction: 'Sees confetti animation and 14-day study streak badge',
        mindset: '"2 of 3 weekly modules completed. On track for distinction."',
        painPoint: 'Zero positive reinforcement or achievement tracking',
        opportunity: 'Bite-sized micro-rewards and progress ring gamification',
        emotionScore: 5
      }
    ],
    userFlowSteps: [
      {
        stepNumber: 1,
        phase: 'Launch',
        action: 'Student launches mobile app; biometric token automatically authenticates',
        systemFeedback: 'Hero card highlights current course with "Resume 18:24" button'
      },
      {
        stepNumber: 2,
        phase: 'Playback',
        action: 'Taps play; adaptive streaming selects cached high-bitrate video stream',
        decisionPoint: 'Offline mode active?',
        systemFeedback: 'Local storage engine serves video without cellular data usage'
      },
      {
        stepNumber: 3,
        phase: 'Quiz Check',
        action: 'Module ends; floating quiz prompt slides up smoothly from bottom',
        systemFeedback: 'Single-tap answer selector with instant explanatory rationale'
      },
      {
        stepNumber: 4,
        phase: 'Progress Celebration',
        action: 'Submits quiz; score of 100% animates weekly progress bar to 80%',
        systemFeedback: 'Micro-haptic vibration triggers; syllabus badge marked complete'
      }
    ],
    wireframeEvolution: {
      lowFi: {
        title: 'Phase 1: Bottom-Nav Architecture Sketching',
        description: 'Shifted from complex 9-level hamburger menus to a clean 4-tab bottom bar (Today, Courses, Classroom, Profile).',
        highlights: ['Eliminated buried syllabus screens', 'Designed 1-tap video resume hero', 'Tested thumb-zone ergonomics']
      },
      midFi: {
        title: 'Phase 2: Wireframe Testing with 45 Online Students',
        description: 'Prototyped the interactive video player with embedded transcript search. Tested question card sizing for one-handed train holding.',
        highlights: ['Standardized 48px minimum tap targets', 'Added sticky autosave banner for quizzes']
      },
      highFi: {
        title: 'Phase 3: Design Tokens & Micro-Interactions',
        description: 'Built comprehensive Manipal Purple & Amber token library with dark focus mode and crisp typography for high-density academic papers.',
        highlights: ['160+ reusable React/Flutter component tokens', 'Play Store rating jumped from 2.9 to 4.6 stars']
      }
    },
    userNeeds: [
      'Offline video download & bite-sized lesson chunks for mobile commuters',
      'Clear progress bars and weekly milestone reminders',
      'Distraction-free focus mode for reading long academic papers',
      'Seamless assignment submission with drag-and-drop & camera scanner integration'
    ],
    businessGoals: [
      'Increase student retention and semester re-enrollment rates',
      'Provide faculty with real-time student engagement analytics',
      'Create a shared, modular design system for Manipal’s 4 universities'
    ],
    researchInsights: [
      {
        method: 'Student Shadowing & Diary Studies (45 Students)',
        finding: 'Over 65% of students studied during train commutes with intermittent mobile network connections.',
        actionTaken: 'Designed an offline-first mobile sync engine with automatic background quality degradation.'
      },
      {
        method: 'Usability Testing on Quiz Interfaces',
        finding: 'Accidental back-button taps submitted incomplete tests, causing severe anxiety.',
        actionTaken: 'Introduced sticky autosave with persistent question jump-navigators and confirmation sheets.'
      }
    ],
    informationArchitecture: {
      title: 'Learner Progression Journey Model',
      description: 'Organized into 4 intuitive tabs: Today’s Goals, Course Modules, Live Classroom, and Career Portfolio.',
      modules: ['Adaptive Video Player with Notes', 'Interactive Quiz & Code Sandbox', 'Weekly Streak & XP Gamification', 'Peer Discussion Threads', 'Degree Transcript Hub']
    },
    beforeAfter: {
      beforeTitle: 'Clunky Legacy LMS',
      beforeDesc: 'Generic Moodle-like skin with tiny un-clickable links on mobile screens.',
      beforeFriction: [
        'Hidden syllabus links requiring 6 clicks to find lecture recordings',
        'PDF assignments opened in unreadable external windows',
        'Zero progress feedback or motivation hooks'
      ],
      afterTitle: 'Modern Manipal LXP Experience',
      afterDesc: 'Spotify-inspired intuitive media player with embedded transcript search and automated study habit reminders.',
      afterWins: [
        'Single-click resume playback from any device',
        'Integrated in-video timestamp bookmarks and note sharing',
        'Snappy Android interface with full offline lesson storage'
      ]
    },
    designSystemTokens: {
      colorPalette: [
        { name: 'Manipal Purple', hex: '#7C3AED', role: 'Primary Action & Progression' },
        { name: 'Achievement Amber', hex: '#F59E0B', role: 'Streak Counters & Badges' },
        { name: 'Focus Charcoal', hex: '#1E1B4B', role: 'Deep Reading Canvas' },
        { name: 'Success Green', hex: '#10B981', role: 'Module Completion State' }
      ],
      typography: 'Plus Jakarta Sans (All UI Levels)',
      componentsCount: 160,
      principles: [
        'Friction-Free Study: Reduce barriers between opening app and starting a lesson to under 2 seconds',
        'Celebrate Progress: Visual micro-rewards for completing modules',
        'Bandwidth Resilience: Flawless layout behavior on any connection speed'
      ]
    },
    usabilityTesting: {
      participants: 60,
      sessions: 12,
      susScoreBefore: 48,
      susScoreAfter: 89,
      keyFeedback: '"The mobile app feels as smooth as Netflix now. Being able to download lectures before my evening train ride changed how I study."'
    },
    interactivePreview: {
      type: 'mobile-app',
      accentColor: '#7C3AED',
      screenTitle: 'Manipal LXP — Advanced UX Design Masterclass',
      stats: [
        { label: 'Weekly Streak', value: '14 Days 🔥', trend: 'Top 5% of class' },
        { label: 'Progress', value: '78% Complete', trend: '4 modules left' },
        { label: 'Avg Quiz Score', value: '94 / 100', trend: 'Distinction' }
      ],
      sampleAction: 'Resume Lecture 06: Design Systems'
    }
  },
  {
    id: 'buyback-bazaar',
    slug: 'buyback-bazaar-fintech-valuation',
    title: 'BuyBack Bazaar Instant Valuation Engine',
    tagline: 'Streamlining device trade-ins and instant cash appraisal flows for consumer electronics.',
    category: 'Fintech & Commerce',
    client: 'BuyBack Bazaar',
    role: 'UX Associate',
    timeline: '8 Months',
    year: '2017 - 2018',
    coverAccent: 'from-amber-500 to-orange-600',
    heroBadge: 'Fintech / Consumer Web & Mobile',
    shortSummary: 'Transformed a multi-step device valuation funnel into a friction-free 3-step appraisal engine, tripling instant buyback conversions.',
    metrics: [
      { label: 'Conversion Jump', value: '3.2x', description: 'Increase in completed quote requests' },
      { label: 'Form Completion Time', value: '90 sec', description: 'Down from 4.5 minutes previously' },
      { label: 'Cart Abandonment', value: '-48%', description: 'Fewer drop-offs during condition selection' },
      { label: 'Customer Trust Rating', value: '92%', description: 'Positive feedback on transparent pricing breakdown' }
    ],
    toolsUsed: ['Sketch', 'InVision', 'Marvel App', 'Nested Symbols', 'Grid System', 'Wireframing'],
    tags: ['Fintech', 'E-commerce', 'Funnel Optimization', 'Responsive Design', 'Conversion UX'],
    overview: 'BuyBack Bazaar allowed users to trade in used smartphones and electronics for instant cash. The original funnel lost over 70% of visitors due to confusing technical terminology regarding device battery health and scratch ratings. Manoj redesigned the interactive valuation wizard from the ground up.',
    problemStatement: 'Customers were unsure how to categorize their phone’s cosmetic condition, creating decision paralysis and quote abandonment.',
    userNeeds: [
      'Visual photographic examples of screen condition (e.g. Fair vs Good vs Flawless)',
      'Live price ticker showing how each condition toggle affects the cash payout in real time',
      'Transparent doorstep pickup scheduling without hidden inspection deduction fears',
      'Clean mobile layout optimized for one-thumb scrolling'
    ],
    businessGoals: [
      'Maximize completed valuation submissions',
      'Reduce customer service inquiries regarding payout calculations',
      'Establish a scalable nested symbol library in Sketch for rapid feature launches'
    ],
    researchInsights: [
      {
        method: 'Guerilla Usability Testing (20 Local Shoppers)',
        finding: 'Users feared that selecting "Minor Scratches" would slash their valuation by half.',
        actionTaken: 'Created transparent live price breakdown showing exact $5 deduction instead of vague penalties.'
      },
      {
        method: 'Click-stream Funnel Heatmaps',
        finding: 'Users repeatedly clicked the phone model dropdown and failed to find recent models.',
        actionTaken: 'Built intelligent auto-suggest search with instant photo previews of phone models.'
      }
    ],
    informationArchitecture: {
      title: '3-Step Frictionless Funnel',
      description: 'Model Selection → Visual Diagnostic Check → Instant Offer & Free Doorstep Pickup.',
      modules: ['Instant Device Search', 'Visual Cosmetic Condition Matrix', 'Live Dynamic Cash Offer Bar', 'Doorstep Slot Picker', 'Instant UPI / Bank Payout Selector']
    },
    beforeAfter: {
      beforeTitle: '7-Page Complex Questionnaire',
      beforeDesc: 'Wall of text asking for obscure hardware details like IMEI numbers before showing a price.',
      beforeFriction: [
        'Users forced to find obscure serial numbers in phone settings',
        'Confusing jargon like "OEM Digitizer Defect"',
        'Static non-responsive tables'
      ],
      afterTitle: 'Visual 3-Card Instant Appraisal',
      afterDesc: 'Tap-to-select visual cards with immediate live price quotes.',
      afterWins: [
        '3-step rapid flow completed in under 90 seconds',
        'Visual icons for camera, screen, and battery health',
        'Transparent guaranteed price lock for 7 days'
      ]
    },
    designSystemTokens: {
      colorPalette: [
        { name: 'Bazaar Orange', hex: '#F97316', role: 'Primary CTA & Instant Offer' },
        { name: 'Trust Navy', hex: '#0F172A', role: 'Headers & Security Badges' },
        { name: 'Cash Green', hex: '#16A34A', role: 'Live Payout Numbers' }
      ],
      typography: 'Plus Jakarta Sans + System UI',
      componentsCount: 75,
      principles: [
        'Transparency First: Show exact pricing breakdowns upfront',
        'Visual over Verbal: Use illustrations instead of technical jargon',
        'Thumb-Friendly: All primary tap targets within easy lower-screen reach'
      ]
    },
    usabilityTesting: {
      participants: 25,
      sessions: 5,
      susScoreBefore: 53,
      susScoreAfter: 87,
      keyFeedback: '"I got a real cash price for my iPhone in under a minute without having to answer 20 complicated tech questions."'
    },
    interactivePreview: {
      type: 'flow-stepper',
      accentColor: '#F97316',
      screenTitle: 'BuyBack Instant Valuation — iPhone 14 Pro',
      stats: [
        { label: 'Instant Cash Offer', value: '₹42,500', trend: 'Guaranteed 7 Days' },
        { label: 'Pickup Time', value: 'Today, 4 PM', trend: 'Free Doorstep Inspection' },
        { label: 'Time Taken', value: '45 Seconds', trend: '3 Easy Steps' }
      ],
      sampleAction: 'Lock Offer & Schedule Pickup'
    }
  },
  {
    id: 'ega-industrial-portal',
    slug: 'ega-industrial-operations-portal',
    title: 'EGA Industrial Operations & Smelter Portal',
    tagline: 'Safety-critical monitoring and logistics tracking for global aluminium smelting plants.',
    category: 'Enterprise Systems',
    client: 'Capgemini Engineering (Client: EGA)',
    role: 'UX Designer',
    timeline: '12 Months',
    year: '2021 - 2022',
    coverAccent: 'from-slate-700 to-zinc-900',
    heroBadge: 'Industrial Enterprise / Safety UX',
    shortSummary: 'Designed plant-floor touch screens and fleet management consoles for high-temperature smelting lines, achieving zero operator incident errors post-launch.',
    metrics: [
      { label: 'Safety Incidents', value: '0 Errors', description: 'Zero human-error misroutings post deployment' },
      { label: 'Potline Throughput', value: '+14%', description: 'Optimized aluminium ingot crane dispatch' },
      { label: 'Operator Adoption', value: '98%', description: 'Transitioned 450+ plant technicians seamlessly' },
      { label: 'Shift Handover Time', value: '-50%', description: 'Digital audit logs replaced paper clipboards' }
    ],
    toolsUsed: ['Figma', 'Sketch', 'UserTesting', 'Wireframing', 'High Contrast Design'],
    tags: ['Industrial UX', 'Safety Critical', 'Plant Floor UX', 'Enterprise', 'Figma'],
    overview: 'Emirates Global Aluminium (EGA) operates world-scale smelting facilities. In industrial environments with molten metal at 950°C, operator interfaces must be legible through safety visors and operable with heavy work gloves.',
    problemStatement: 'Technicians relied on manual paper logs and legacy terminal screens with low contrast, causing delays in potline temperature audits.',
    userNeeds: [
      'Oversized 64px+ touch targets operable while wearing industrial gloves',
      'Ultra-high contrast color palette visible in bright desert sunlight and dim potrooms',
      'Audio-visual dual verification for high-risk valve controls',
      'Fast shift-handover summaries that highlight active maintenance tickets'
    ],
    businessGoals: [
      'Eliminate safety protocol non-compliance',
      'Digitize end-to-end ingot casting traceability',
      'Reduce shift handover briefing from 40 minutes to 15 minutes'
    ],
    researchInsights: [
      {
        method: 'On-site Plant Floor Shadowing (Safety Gear Inspection)',
        finding: 'Technicians wearing polycarbonate face shields had 30% reduced peripheral vision and color discrimination.',
        actionTaken: 'Enforced high-contrast typography, bold iconography, and distinct geometric shape tags.'
      }
    ],
    informationArchitecture: {
      title: 'Plant-Floor Safety Matrix',
      description: 'Zoned into Potline Live Status, Anode Rod Lifecycle, and Urgent Safety Interlocks.',
      modules: ['Smelter Potline Heatmap', 'Glove-Friendly Action Drawer', 'Shift Log Handover Terminal', 'Crane Dispatch Queue']
    },
    beforeAfter: {
      beforeTitle: 'Clipboard & CRT Monitors',
      beforeDesc: 'Manual paper checklists with illegible handwriting and delayed database syncing.',
      beforeFriction: ['Lost logs', 'Slow hazard escalation', 'No visual crane collision warnings'],
      afterTitle: 'Ruggedized Industrial Touch Console',
      afterDesc: 'High-contrast digital portal with real-time temperature telemetry and instant safety lockout triggers.',
      afterWins: ['100% digitized compliance', 'Instant safety lockout verification', 'Operable with thick gloves']
    },
    designSystemTokens: {
      colorPalette: [
        { name: 'Industrial Amber', hex: '#D97706', role: 'Active Potline Operation' },
        { name: 'Safety Hazard Orange', hex: '#EA580C', role: 'Thermal Anomaly Alert' },
        { name: 'High-Vis Slate', hex: '#0F172A', role: 'Anti-Glare Background' }
      ],
      typography: 'Space Grotesk (High Legibility Numbers)',
      componentsCount: 85,
      principles: [
        'Safety Above All: Zero ambiguous states or accidental trigger clicks',
        'Glove-First Geometry: All buttons minimum 64x64px touch bounds',
        'Sunlight Legibility: WCAG AAA contrast ratio across all lighting levels'
      ]
    },
    usabilityTesting: {
      participants: 22,
      sessions: 4,
      susScoreBefore: 39,
      susScoreAfter: 84,
      keyFeedback: '"The huge buttons and bright hazard tags made shift handovers effortless even in the hot potroom."'
    },
    interactivePreview: {
      type: 'dashboard',
      accentColor: '#D97706',
      screenTitle: 'EGA Potline Operations — Line 04 Smelter',
      stats: [
        { label: 'Pot Temperature', value: '954°C', trend: 'Nominal Range' },
        { label: 'Active Ingot Pots', value: '184 / 184', trend: '100% Operational' },
        { label: 'Safety Index', value: '100%', trend: 'Zero Flags' }
      ],
      sampleAction: 'Authorize Anode Replacement'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'scaling-design-systems-enterprise',
    slug: 'scaling-multi-tenant-design-systems',
    title: 'Scaling Design Systems Across Multi-Tenant Enterprise Applications',
    excerpt: 'How to build token architectures, component libraries, and governance workflows that scale across multiple enterprise clients like Nokia and Itron.',
    readTime: '7 min read',
    date: 'Jan 14, 2026',
    category: 'Design Systems',
    tags: ['Design Systems', 'Design Tokens', 'Figma', 'Enterprise Architecture', 'Governance'],
    popular: true,
    content: {
      intro: 'When designing enterprise platforms deployed across multiple subsidiary brands and client environments, a rigid component library breaks within weeks. Here is how we engineered scalable, tokenized design systems at Capgemini Engineering that supported Nokia, Itron, and EGA without fragmenting codebases.',
      sections: [
        {
          heading: '1. The Pitfall of Hardcoded Values in Scaled Teams',
          body: [
            'In complex enterprise systems with 100+ screens, inconsistencies creep in rapidly when designers hardcode hex values, border radii, or typography styles directly into Figma frames.',
            'By abstracting design decisions into a three-tier token hierarchy (Global Foundation → Semantic Intent → Component Scoped), we enabled instant re-theming for high-contrast dark rooms, light plant offices, and custom partner brandings with zero code duplication.'
          ],
          keyTakeaway: 'Tokens are design decisions encoded in machine-readable variables. Never let a designer or developer touch a raw hex code in production.'
        },
        {
          heading: '2. Structuring Component Variants for Low Cognitive Load',
          body: [
            'Enterprise data tables and telemetry gauges require extreme density flexibility. We designed components with explicit density modes: Compact (for 24/7 NOC operators with 4 monitors), Balanced (for tablet inspection), and Spacious (for executive summary reports).',
            'Using Figma’s nested component properties and auto-layout rules, design handoff time dropped from 3 days per sprint to under 4 hours.'
          ],
          keyTakeaway: 'Build density variants into your core tokens from day one rather than retrofitting spacing later.'
        },
        {
          heading: '3. Bridging the Designer-Developer Chasm with Token CI/CD',
          body: [
            'A design system is only as good as its coded equivalent. We aligned our Figma variable names 1:1 with CSS variables and Tailwind utility configurations.',
            'Whenever our team updated a focus ring or semantic status color in Figma, our automated token exporter synced JSON definitions into the engineering repository, eliminating manual styling discrepancies.'
          ],
          keyTakeaway: 'When designer Figma tokens match CSS variable keys verbatim, QA design review rounds decrease by over 70%.'
        }
      ],
      conclusion: 'A scalable design system is not just a UI kit; it is a shared language between product owners, UX researchers, visual designers, and engineers. Investing early in tokenized semantic architectures pays compounding dividends as your product suite grows.'
    }
  },
  {
    id: 'designing-for-high-stress-noc-dashboards',
    slug: 'designing-for-high-stress-noc-telemetry',
    title: 'Designing for High-Stress NOC & Real-Time Telemetry Dashboards',
    excerpt: 'Key UX principles for reducing cognitive fatigue, alert blindness, and incident resolution times for mission-critical monitoring teams.',
    readTime: '6 min read',
    date: 'Dec 02, 2025',
    category: 'Enterprise UX',
    tags: ['Enterprise UX', 'Telemetry', 'Cognitive Load', 'Dark Mode', 'Information Hierarchy'],
    popular: true,
    content: {
      intro: 'When a severe fiber cut strikes a tier-1 telecom network, thousands of alarms explode on screen in seconds. If your UI design treats every alert as a flashing red beacon, operators freeze. Designing for high-stress environments requires ruthless visual prioritization and defensive interface patterns.',
      sections: [
        {
          heading: '1. Defeating Alert Fatigue with Spatial Clustering',
          body: [
            'During our research at Capgemini with telecom NOC engineers, we discovered that 80% of alarms during an outage were secondary symptoms of a single root-cause power outage at a core backbone node.',
            'Instead of presenting a linear chronological firehose of 2,000 alerts, we designed an automated topology cluster that groups dependent errors underneath the primary failure node. Operators saw 1 critical incident card instead of 2,000 panicking rows.'
          ],
          keyTakeaway: 'Group symptoms under root causes visually. Never make human operators mentally untangle cascading dependencies in a crisis.'
        },
        {
          heading: '2. High-Contrast Dark Canvas & Optical Ergonomics',
          body: [
            'NOC control rooms operate 24 hours a day under dimmed ambient lighting. Bright white backgrounds cause severe retinal fatigue, while saturated pure-black (#000000) creates harsh optical halation around glowing text.',
            'We calibrated our canvas to a deep slate neutral (#0B111E) with WCAG AAA compliant text contrast (7:1+) and soft-glowing status badges, ensuring operators could monitor telemetry for 12-hour shifts comfortably.'
          ],
          keyTakeaway: 'Dark mode for operations is an ergonomic necessity, not an aesthetic trend. Avoid pure #000 and harsh neon saturated primaries.'
        }
      ],
      conclusion: 'Great enterprise UX doesn’t just make software look cleaner—it prevents outages, protects multimillion-dollar SLAs, and keeps the engineers who power our global infrastructure calm and effective.'
    }
  },
  {
    id: 'usability-testing-in-scaled-agile',
    slug: 'usability-testing-in-scaled-agile-sprints',
    title: 'Pragmatic Usability Testing in 2-Week Scaled Agile Sprints',
    excerpt: 'A repeatable framework for integrating rapid user research and usability benchmarking without slowing down feature delivery.',
    readTime: '5 min read',
    date: 'Oct 28, 2025',
    category: 'User Research',
    tags: ['User Testing', 'Agile UX', 'Research Methods', 'Benchmarking', 'Product Strategy'],
    popular: false,
    content: {
      intro: 'In scaled agile environments (SAFe / Scrum), design often feels squeezed between sprint planning and rapid engineering commits. UX research is frequently discarded under the false pretense that "we don’t have time to test." Here is how we ran weekly testing cycles across Manipal Global and Capgemini without delaying sprint velocity.',
      sections: [
        {
          heading: '1. The "Continuous Friday" Testing Cadence',
          body: [
            'Instead of scheduling giant quarterly research initiatives, we booked 3 recurring unmoderated usability sessions every second Friday with a rotating cohort of real end-users.',
            'By Wednesday, wireframes and interactive prototypes were ready; by Monday morning sprint planning, we presented concise 3-slide video snippet reels to product managers and engineers with prioritized friction points.'
          ],
          keyTakeaway: 'Make user testing a continuous operational heartbeat, not a special event. 3 users tested every 2 weeks beats 30 users tested once a year.'
        },
        {
          heading: '2. Quantitative Metrics Engineers Respect: SUS & Task Completion',
          body: [
            'To get engineering and product management buy-in, qualitative quotes like "I found this confusing" must be paired with measurable benchmarks.',
            'We tracked two core metrics on every release candidate: Task Completion Time (seconds) and System Usability Scale (SUS) score. Demonstrating that a revamped navigation increased SUS from 48 to 86 earned design immediate credibility.'
          ],
          keyTakeaway: 'Quantify UX impact with standardized metrics to align engineering and executive leadership.'
        }
      ],
      conclusion: 'Usability testing in agile doesn’t require weeks of academic research. Rapid, iterative feedback loops de-risk development and ensure engineers only spend time building features that genuinely work for humans.'
    }
  },
  {
    id: 'micro-interactions-in-edtech',
    slug: 'micro-interactions-that-drive-edtech-engagement',
    title: 'Micro-Interactions that Drive Learner Engagement in EdTech',
    excerpt: 'How subtle haptic feedback, streak animations, and progress cues boosted student course completion by 68% at Manipal Global.',
    readTime: '6 min read',
    date: 'Aug 19, 2025',
    category: 'Interaction Design',
    tags: ['EdTech', 'Micro-interactions', 'Mobile UX', 'Gamification', 'Motion Design'],
    popular: false,
    content: {
      intro: 'Online education suffers from notorious drop-off rates. When learners study alone on a mobile phone during a crowded evening commute, tiny moments of delight and friction can mean the difference between quitting and finishing a degree.',
      sections: [
        {
          heading: '1. The Psychology of Immediate Completion Feedback',
          body: [
            'When a student finishes a difficult 45-minute coding quiz or lecture module, a plain static text message saying "Done" feels anticlimactic.',
            'We implemented a tactile completion sequence: an elastic progress ring fill, subtle haptic vibration on mobile devices, and an updated weekly streak counter. This small 1.2-second interaction stimulated dopamine and increased next-lesson initiation by 34%.'
          ],
          keyTakeaway: 'Celebrate learner effort immediately with micro-delight. Reward loops reinforce positive study habits.'
        },
        {
          heading: '2. Frictionless Resume: The 1-Tap Playback Gateway',
          body: [
            'We placed a persistent floating "Continue where you left off" pill right on the app dashboard, auto-scrubbed to the exact second of the last watched video lecture with downloadable notes pre-cached.',
            'Removing the need to dig through semester folders cut the friction of starting a study session to under two seconds.'
          ],
          keyTakeaway: 'Eliminate every unnecessary click between app launch and active learning.'
        }
      ],
      conclusion: 'Thoughtful micro-interactions are not decorative eye candy; they are cognitive guide rails that motivate, clarify, and reassure users across their digital journeys.'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'nokia-director',
    quote: 'Manoj possesses a rare superpower: he can look at an impossibly complex, chaotic enterprise network architecture and distill it into a clean, intuitive interface that our NOC engineers love using every single day. His work on the console revamp cut our diagnostic times by 42%.',
    author: 'Rajeev Sharma',
    role: 'Senior Product Director, Global Telecom Operations',
    company: 'Nokia Partner Solutions',
    projectRelation: 'Collaborated on Nokia NOC Console Revamp',
    avatarInitials: 'RS',
    avatarColor: 'bg-[#C25934]'
  },
  {
    id: 'manipal-lead',
    quote: 'Working with Manoj during the Manipal NextGen Learning Platform rollout was a breeze. He brought deep empathy for students studying under tough bandwidth conditions, established our multi-university design system, and spearheaded usability testing that lifted course completions by 68%.',
    author: 'Ananya Deshmukh',
    role: 'Head of Product & Learning Experience',
    company: 'Manipal Global Education',
    projectRelation: 'Lead UI/UX on Web & Android LXP',
    avatarInitials: 'AD',
    avatarColor: 'bg-amber-700'
  },
  {
    id: 'capgemini-strategist',
    quote: 'Manoj’s attention to pixel perfection, design tokens, and stakeholder alignment is world-class. Whether presenting to C-suite executives at Itron or running testing workshops with plant engineers at EGA, he always grounds design choices in business value and user needs.',
    author: 'Siddharth Iyer',
    role: 'Principal Design Strategist & UX Lead',
    company: 'Capgemini Engineering',
    projectRelation: 'Design Leadership & Enterprise Systems',
    avatarInitials: 'SI',
    avatarColor: 'bg-emerald-600'
  },
  {
    id: 'clay-founder',
    quote: 'From his early days with us, Manoj demonstrated immense dedication to design rigor—meticulously structuring nested symbols, responsive grid systems, and intuitive wireframes. A true craftsman with a relentless focus on usability.',
    author: 'Pooja Mehta',
    role: 'VP of Product Design',
    company: 'Clay Consulting',
    projectRelation: 'Mentored on Web & Mobile Client Apps',
    avatarInitials: 'PM',
    avatarColor: 'bg-amber-600'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'capgemini-engineering',
    company: 'Capgemini Engineering',
    clientContext: 'Key Enterprise Clients: Nokia, Itron, EGA (Emirates Global Aluminium)',
    role: 'UX Designer / Senior UX Designer',
    period: 'Dec 2021 – Present',
    location: 'Mumbai, India',
    type: 'Full-time',
    summary: 'Leading UX strategy, design systems, wireframing, high-fidelity prototyping, and stakeholder alignment for Fortune 500 enterprise clients across telecom, clean energy IoT, and heavy industrial automation.',
    responsibilities: [
      'Collaborating with global stakeholders, users, and product managers to understand intricate business needs and translate complex technical requirements into intuitive UX roadmaps.',
      'Revamping legacy enterprise software from scratch—conducting user research, wireframing, responsive UI design, and interactive prototyping.',
      'Facilitating design reviews, cross-functional workshops, and rigorous user testing sessions to iterate and validate design solutions.',
      'Building, maintaining, and scaling enterprise multi-brand design systems with tokenized component libraries for web and mobile.'
    ],
    keyWins: [
      'Reduced MTTR (Mean Time to Resolution) for Nokia NOC telecom engineers by 42% through unified spatial alert clustering.',
      'Engineered real-time telemetry grid visualizers for Itron adopted across 12 municipal energy providers.',
      'Zero safety-critical operator error incidents post-launch on the EGA potline industrial touch console.'
    ],
    tools: ['Figma', 'Figjam', 'UserTesting', 'Design Tokens', 'Agile (SAFe)', 'Wireframing', 'Prototyping']
  },
  {
    id: 'manipal-global',
    company: 'Manipal Global Education',
    role: 'UI/UX Designer',
    period: 'Jan 2019 – Nov 2021',
    location: 'Bangalore / Mumbai, India',
    type: 'Full-time',
    summary: 'Designed end-to-end learning journeys, mobile interfaces, and digital campus portals for over 120,000 enrolled higher education and vocational students.',
    responsibilities: [
      'Designed wireframes, interactive prototypes, and pixel-perfect visual designs for mobile (Android) and web-based educational products.',
      'Conducted iterative usability testing sessions with diverse student cohorts and iterated designs based on quantitative and qualitative feedback.',
      'Worked within scaled agile sprint teams to deliver responsive UX flows, analyzing business objectives and customer retention metrics.',
      'Architected a multi-portal design system ensuring visual coherence across 4 Manipal university web properties.'
    ],
    keyWins: [
      'Boosted course completion rates by 68% through streamlined mobile video players and micro-credential flows.',
      'Elevated Android application Play Store rating from 2.9 ★ to 4.6 ★.',
      'Reduced quiz drop-off rates by 54% with autosave and interactive question navigators.'
    ],
    tools: ['Sketch', 'Figma', 'InVision', 'Marvel App', 'UserTesting', 'Nested Symbols', 'Responsive Grids']
  },
  {
    id: 'clay-consulting',
    company: 'Clay Consulting',
    role: 'UX Associate',
    period: 'Jun 2018 – Dec 2018',
    location: 'Mumbai, India',
    type: 'Full-time',
    summary: 'Delivered customer-centric UX solutions for multiple digital startups and enterprise clients, establishing structured design methodologies.',
    responsibilities: [
      'Involved in gathering client requirements, understanding domain nuances, and analyzing end-user workflows from scratch.',
      'Designed web and mobile applications following rigorous design processes: pixel perfection, nested symbols, responsive grid systems, organized layers, and interactive wireframing.',
      'Conducted usability testing and rapid iterations based on feedback cycles.'
    ],
    keyWins: [
      'Shipped 4 end-to-end client applications with standardized symbol libraries.',
      'Authored reusable UI grid frameworks that cut front-end developer handoff questions in half.'
    ],
    tools: ['Sketch', 'InVision', 'Marvel App', 'Grid System', 'Nested Symbols', 'Prototyping']
  },
  {
    id: 'buyback-bazaar',
    company: 'BuyBack Bazaar',
    role: 'UX Associate',
    period: 'Nov 2017 – Jun 2018',
    location: 'Mumbai, India',
    type: 'Full-time',
    summary: 'Focused on consumer conversion funnel optimization, instant device valuation UX, and checkout friction reduction.',
    responsibilities: [
      'Gathered business requirements, analyzed funnel drop-off analytics, and mapped consumer trade-in journeys.',
      'Improved product user interfaces and checkout experiences through visual clarity and transparent pricing breakdowns.'
    ],
    keyWins: [
      'Tripled completed valuation submissions (3.2x conversion jump) by replacing a 7-step form with a visual 3-step appraisal wizard.',
      'Reduced average valuation time from 4.5 minutes to 90 seconds.'
    ],
    tools: ['Sketch', 'Marvel App', 'Wireframing', 'Usability Audits', 'Mobile UX']
  }
];

export const UX_PROCESS_STEPS = [
  {
    phase: '01. Discover & Research',
    tag: 'Empathy & Inquiry',
    icon: 'Search',
    description: 'Immersion into real user context, stakeholder alignment, and quantitative analytics to diagnose true root-cause friction.',
    methods: ['Contextual Inquiries', 'User Shadowing', 'Stakeholder Workshops', 'Competitive Benchmarking', 'Data & Funnel Audits'],
    deliverables: ['User Personas', 'Empathy Maps', 'Research Findings Deck', 'Problem Statements']
  },
  {
    phase: '02. Define & Structure',
    tag: 'Information Architecture',
    icon: 'Layers',
    description: 'Transforming messy functional requirements into coherent conceptual models, mental maps, and scalable navigation hierarchies.',
    methods: ['Card Sorting', 'Task Flow Mapping', 'Information Architecture', 'User Journey Mapping', 'Service Blueprints'],
    deliverables: ['Sitemap Diagrams', 'Screen Flow Blueprints', 'Functional Specs', 'Scope Matrix']
  },
  {
    phase: '03. Design & Prototype',
    tag: 'Craft & Iteration',
    icon: 'Figma',
    description: 'Iterating rapidly from low-fidelity structural sketches to pixel-perfect, tokenized interactive prototypes in Figma.',
    methods: ['Rapid Wireframing', 'Design Tokens Setup', 'Component Variants', 'High-Fi Interactive Prototypes', 'Micro-interaction Timing'],
    deliverables: ['Clickable Figma Prototypes', 'Design System Library', 'Handoff Specs', 'Responsive Breakpoints']
  },
  {
    phase: '04. Test & Validate',
    tag: 'Empirical Verification',
    icon: 'CheckCircle2',
    description: 'Putting interactive prototypes in front of real domain users to measure usability scores, error rates, and qualitative satisfaction.',
    methods: ['Unmoderated UserTesting', 'Think-Aloud Protocols', 'SUS (System Usability Scale) Scoring', 'A/B Variant Testing', 'Accessibility Audits'],
    deliverables: ['Usability Scorecards', 'Task Completion Video Reels', 'Iterative Fixes Backlog', 'Readiness Report']
  },
  {
    phase: '05. Scale & Deliver',
    tag: 'Engineering Alignment',
    icon: 'Cpu',
    description: 'Collaborating in scaled agile sprints with frontend engineers to ensure 100% fidelity to design systems and responsive states.',
    methods: ['Token CI/CD Sync', 'Sprint Grooming', 'Design QA Signoffs', 'Component Documentation', 'Post-Launch Analytics'],
    deliverables: ['Design Tokens JSON', 'Production UI Polish', 'Living Style Guides', 'Design System Release Notes']
  }
];
