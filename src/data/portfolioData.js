export const projects = [
  {
    id: 'transit-delay-llm',
    title: 'Transit Delay LLM Predictor',
    category: 'AI',
    xyz: {
      accomplished: 'Improved rider decision support for delay-prone routes in NYC transit.',
      measuredBy: '78% intent-level accuracy on real-time delay explanations and 35% faster route insight retrieval.',
      byDoing: 'Building GTFS-Realtime ingestion, storing cleaned snapshots in SQLite, and integrating Gemini-driven reasoning.',
    },
    why: 'Commuters frequently lack clear context for service disruptions. This project was designed to turn noisy operational feed data into understandable delay predictions and suggestions.',
    execution: {
      summary: 'Implemented a real-time ingestion pipeline and an inference layer that translates raw transit events into rider-friendly output.',
      features: [
        'GTFS-Realtime feed polling with normalized storage snapshots.',
        'Prompt orchestration for delay-cause explanations and route recommendations.',
        'Lightweight analytics layer to compare predictions against observed outcomes.',
      ],
      tools: ['Python', 'SQLite', 'Gemini API', 'REST APIs'],
    },
    impact: {
      summary: 'The system improved clarity and response time for transit disruption decisions.',
      metrics: [
        '35% reduction in time-to-insight during delay checks.',
        '78% explanation relevance score across sampled prompts.',
        'Improved user trust through clearer incident context framing.',
      ],
    },
  },
  {
    id: 'better-apply',
    title: 'Better Apply',
    category: 'Web',
    xyz: {
      accomplished: 'Reduced friction in job application preparation workflows.',
      measuredBy: 'Cut manual resume tailoring time by 40% in early user tests.',
      byDoing: 'Creating a web app for role-specific resume adaptation and application tracking.',
    },
    why: 'Students often spend excessive time editing resumes and tracking submissions manually, leading to inconsistent quality and missed opportunities.',
    execution: {
      summary: 'Designed a guided workflow that pairs job descriptions with tailored resume suggestions and progress tracking.',
      features: [
        'Resume adaptation workflow mapped to job posting requirements.',
        'Application status tracking board for pipeline visibility.',
        'Fast, mobile-friendly interaction model for high-frequency use.',
      ],
      tools: ['React', 'Vite', 'Node.js', 'SQLite'],
    },
    impact: {
      summary: 'The project improved consistency and throughput in applications.',
      metrics: [
        '40% faster tailoring cycles in pilot sessions.',
        'Higher application consistency through structured prompts.',
        'Centralized status tracking replaced fragmented spreadsheets.',
      ],
    },
  },
  {
    id: 'transit-for-all',
    title: 'Transit For All',
    category: 'Accessibility',
    xyz: {
      accomplished: 'Made accessible transit discovery easier for riders with mobility constraints.',
      measuredBy: 'Enabled station accessibility checks in under 10 seconds during hackathon demos.',
      byDoing: 'Integrating MTA API data into an accessibility-first search and filtering experience.',
    },
    why: 'Riders with accessibility needs often struggle to quickly identify stations that support elevators and other accommodations.',
    execution: {
      summary: 'Built a rapid station lookup tool with clear accessibility status indicators and directional context.',
      features: [
        'Station-level accessibility status cards and route context.',
        'Fast location-based filtering for nearby options.',
        'Simple visual hierarchy for high-clarity mobile usage.',
      ],
      tools: ['JavaScript', 'MTA API', 'HTML/CSS', 'Figma'],
    },
    impact: {
      summary: 'The experience reduced uncertainty and improved navigation confidence.',
      metrics: [
        'Sub-10-second accessibility lookup in user demo flows.',
        'Clearer route planning for mobility-constrained riders.',
        'Strong positive hackathon review feedback on usability.',
      ],
    },
  },
  {
    id: 'easy-verify',
    title: 'Easy Verify',
    category: 'Impact',
    xyz: {
      accomplished: 'Streamlined secure local verification workflows on Windows.',
      measuredBy: 'Reduced verification setup steps from 6 to 2 for first-time users.',
      byDoing: 'Packaging a Python app with PyInstaller and registering a custom URI protocol handler.',
    },
    why: 'Users needed a simpler way to launch verification actions without repeated manual setup or command-line friction.',
    execution: {
      summary: 'Delivered a packaged desktop workflow that handles URI registration and trusted invocation paths.',
      features: [
        'Custom URI scheme registration for one-click invocation.',
        'Installer-friendly distribution with PyInstaller.',
        'Validation checks to reduce malformed launch requests.',
      ],
      tools: ['Python', 'PyInstaller', 'Windows Registry'],
    },
    impact: {
      summary: 'Onboarding became faster and support burden dropped.',
      metrics: [
        '67% fewer setup steps for first run.',
        'Lower user error rate during launch sequence.',
        'Improved adoption due to one-click verification entry point.',
      ],
    },
  },
]

export const experience = [
  {
    title: 'AI Fellow',
    org: 'Handshake AI',
    summary: 'Contributed to prompt training quality, dataset evaluation, and long-horizon task design for agent reliability.',
  },
  {
    title: 'Student IT Support Technician',
    org: 'NYIT',
    summary: 'Resolved technical requests across help desk channels and improved support turnaround for student and faculty issues.',
  },
]

export const skills = [
  {
    name: 'Languages',
    items: ['JavaScript', 'Python', 'C++', 'Java', 'HTML/CSS'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Accessibility'],
  },
  {
    name: 'Backend + Data',
    items: ['Node.js', 'SQLite', 'REST APIs', 'Prompt Engineering'],
  },
]
