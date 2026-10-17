export interface SchemeCategory {
  id: string;
  type: 'DESIGN' | 'R&D' | 'TALENT';
  typeLabel: string;
  categoryNumber: string;
  title: string;
  shortDesc: string;
  objective: string;
  targetSegment: string[];
  eligibility: string[];
  conditions: string[];
  fiscalSupport: {
    highlight: string;
    subtext: string;
    details: {
      label: string;
      value: string;
      mechanism: string;
    }[];
    exitOptions?: string[];
  };
  duration: string;
  quadAlignment: string;
}

export const SEMICON_PROGRAM_STATS = {
  nationalOutlay: '₹ 1,27,500 Crore',
  outlayNumeric: 127500,
  phase: 'Semicon India 2.0',
  cabinetApproval: 'Union Cabinet of India',
  focusAreas: ['Fabless Chip Design', 'Advanced R&D Packaging', 'Multi-Tiered Talent Ecosystem'],
  pDliMaxSeed: '₹ 15 Crore',
  dliReimbursementRate: '9% Net Sales',
  dliMaxPerApp: '₹ 30 Crore',
  dliAggregateCap: '₹ 120 Crore',
  rdSupportPercentage: 'Up to 75% Capex & Opex',
  talentSupportPercentage: 'Up to 75% Capex & Opex',
};

export const SEMICON_CATEGORIES: SchemeCategory[] = [
  {
    id: 'cat-01',
    type: 'DESIGN',
    typeLabel: 'Type 1: Design',
    categoryNumber: 'Category 01',
    title: 'Semiconductor IPs, Chips, SoCs, and Modules for National Importance & Strategic Priorities',
    shortDesc: 'Sovereign and trusted semiconductor technologies for national strategic and critical infrastructure.',
    objective: 'To build resilient, trusted, and sovereign semiconductor technologies by focusing on designing, development, and deployment of target segment technologies for national strategic and critical infrastructure.',
    targetSegment: [
      'Semiconductor Intellectual Property (IP) cores, Chips, System-on-Chips (SoCs), and Modules for electronic products identified for national strategic priorities',
      'Standard IP building blocks for Compute, Memory, RF, Power, Networking, and Sensors',
      'Mission-critical defense, aerospace, telecommunications, and sovereign power grid silicon'
    ],
    eligibility: [
      'Companies incorporated and headquartered in India with significant operational & manpower presence in the country',
      'Owned and controlled by Indian citizens',
      'Independent participation or in consortium mode with global companies, R&D organisations, and academic institutions'
    ],
    conditions: [
      'The implementing company shall be responsible for providing long-term upgrades, support, and maintenance of solutions developed',
      'Full compliance with Government of India directives on security, export control, foreign acquisition, or control',
      'IP rights will be co-owned by the applicant company and C-DAC (Centre for Development of Advanced Computing). C-DAC will not commercially use co-owned IP unless the applicant fails contractual obligations'
    ],
    fiscalSupport: {
      highlight: 'Strategic Nodal Co-Funding & DIS Grid',
      subtext: 'Direct project-linked grants, C-DAC co-development infrastructure, and centralized EDA & MPW fab support.',
      details: [
        {
          label: 'Strategic Co-Funding',
          value: 'Custom Milestone Grants',
          mechanism: 'Milestone-based disbursement linked to tapeout and post-silicon validation milestones.'
        },
        {
          label: 'EDA & MPW Access',
          value: 'Full Centralized Access',
          mechanism: 'Access through C-DAC and ISM to global foundries for Multi-Project Wafer runs.'
        },
        {
          label: 'IP Protection',
          value: 'Co-owned with C-DAC',
          mechanism: 'Commercial exclusivity retained by company while satisfying national security benchmarks.'
        }
      ]
    },
    duration: 'Determined on project-to-project basis, preferably up to 6 years.',
    quadAlignment: 'Quad Techtronix engineers sovereign 64-bit dual-core secure RISC-V processors (QT-Sovereign-1) with embedded cryptographic hardware root-of-trust for Indian critical infrastructure.'
  },
  {
    id: 'cat-02',
    type: 'DESIGN',
    typeLabel: 'Type 1: Design',
    categoryNumber: 'Category 02',
    title: 'Design of Semiconductor IPs, Chips, and SoCs for the Commercial Sector',
    shortDesc: 'Fabless chip design innovation, fiscal seed capital, centralized EDA tools, and VC co-investment.',
    objective: 'To position India as a globally competitive hub for fabless semiconductor chip design, fostering innovation, creation of intellectual property, and product ownership by way of extending fiscal and chip design infrastructure support, as well as catalysing venture capital funding.',
    targetSegment: [
      'Design and development of semiconductor IPs, Chips, and System-on-Chips (SoCs) for commercial electronic products',
      'Smart IoT, Edge AI accelerators, Automotive microcontrollers, Consumer electronics, and Telecommunications silicon'
    ],
    eligibility: [
      'Companies incorporated and headquartered in India with significant operational and manpower presence in the country',
      'Owned and controlled by Indian citizens or Overseas Citizens of India (OCIs)',
      'May participate independently or in consortium mode with global enterprises, R&D organizations, and universities'
    ],
    conditions: [
      'Full compliance with Government of India security, export control, and strategic directives',
      'IP rights and all associated design and development files will remain strictly within India',
      'Eligible applicants may also avail benefits under the Research, Development, and Innovation (RDI) Scheme'
    ],
    fiscalSupport: {
      highlight: 'Up to ₹15 Cr Seed + DIS Tools Grid + VC Co-Investment',
      subtext: 'Comprehensive two-tier support structure spanning Design Infrastructure and Product Design Linked Incentives.',
      details: [
        {
          label: 'Design Infrastructure Support (DIS)',
          value: 'Centralized EDA & MPW',
          mechanism: 'Access to critical EDA tools grid (Synopsys, Cadence, Siemens), MPW fabrication services, IP cores, Campus Sub-System (CSS), and post-silicon validation services.'
        },
        {
          label: 'P-DLI: Start-up & MSME Seed Funding',
          value: 'Up to ₹15 Crore',
          mechanism: 'Milestone-linked advance seed funding covering up to 50% of the project cost or ₹15 crore, whichever is lower.'
        },
        {
          label: 'P-DLI: Equity Co-Investment',
          value: 'Beyond ₹15 Crore',
          mechanism: 'Provided to companies that have raised funding from VC/PE investors on matching terms and conditions.'
        },
        {
          label: 'Non-MSME Royalty Financing',
          value: '5% Net Revenue Royalty',
          mechanism: 'Co-investment basis; beneficiary pays 5% of net revenues until 1.5x the financial support is recovered.'
        }
      ],
      exitOptions: [
        'Seed Funding / Equity Co-Investment Exit: Pay aggregate seed funding plus prevailing market value of government-held equity, or 1.5x total financial support, whichever is higher.',
        'Royalty Financing Exit: Repay 1.5x financial support if exited within 4 years from last disbursement, or 2.0x financial support if exited beyond 4 years.'
      ]
    },
    duration: 'Determined on project-to-project basis, preferably up to 6 years.',
    quadAlignment: 'Quad Techtronix leverages the centralized EDA grid and MPW shuttle allocation for the QT-EdgePulse sub-milliwatt neural processing SoC targeting consumer electronics and smart industrial sensors.'
  },
  {
    id: 'cat-03',
    type: 'DESIGN',
    typeLabel: 'Type 1: Design',
    categoryNumber: 'Category 03',
    title: 'Deployment-Linked Incentive (DLI) for Semiconductor IPs / Chips / SoCs',
    shortDesc: '9% reimbursement on net sales for 5 years to mitigate commercial cost disabilities.',
    objective: 'To promote the deployment of target segment technologies by mitigating cost disabilities to improve their global competitiveness.',
    targetSegment: [
      'Semiconductor IP cores, Chips, and System-on-Chips (SoCs) launched for the first time after scheme announcement',
      'Products with no prior commercial sales by the applicant prior to scheme announcement'
    ],
    eligibility: [
      'Applicants eligible under Categories 01 and 02 of the Semicon India Scheme may submit applications under Category 03'
    ],
    conditions: [
      'Applicable strictly to verified net commercial invoice sales of manufactured/licensed target silicon',
      'Audited quarterly certifications required by the Nodal Agency for disbursement'
    ],
    fiscalSupport: {
      highlight: '9% Reimbursement on Net Sales for 5 Years',
      subtext: 'Direct revenue-linked fiscal support with generous incentive caps.',
      details: [
        {
          label: 'Sales Reimbursement Rate',
          value: '9% on Net Sales',
          mechanism: 'Calculated on invoiced sales value of target segment chips deployed to tier-1 clients.'
        },
        {
          label: 'Tenure',
          value: '5 Consecutive Years',
          mechanism: 'Continuous five-year window starting from verified commercial shipment.'
        },
        {
          label: 'Per-Application Ceiling',
          value: '₹30 Crore Max',
          mechanism: 'Maximum cumulative deployment incentive for a single approved product application.'
        },
        {
          label: 'Aggregate Company Ceiling',
          value: '₹120 Crore Max',
          mechanism: 'Combined incentive cap across multiple products for the applicant and group companies.'
        }
      ]
    },
    duration: 'Determined on project-to-project basis, preferably up to 6 years.',
    quadAlignment: 'Commercial deployment roadmap for Quad Techtronix silicon directly triggers the 9% DLI reimbursement on sales to automotive and smart grid OEM partners.'
  },
  {
    id: 'cat-04',
    type: 'R&D',
    typeLabel: 'Type 2: R&D',
    categoryNumber: 'Category 04',
    title: 'R&D for Advanced Semiconductor & Display Technologies',
    shortDesc: 'Strengthening domestic manufacturing capabilities across CMOS, Silicon Photonics, and 2.5D/3D Chiplets.',
    objective: 'Strengthen the R&D capability in semiconductor and display manufacturing technologies in the country.',
    targetSegment: [
      'Advanced process technologies for CMOS-based fabrication',
      'Silicon Photonics integration for high-bandwidth optical interconnects',
      'Display fabrication technologies (Micro-LED, OLED backplanes)',
      'Chiplet-based technologies for advanced 2.5D/3D heterogeneous packaging',
      'Wide-bandgap semiconductors (Gallium Nitride, Silicon Carbide)'
    ],
    eligibility: [
      'Semiconductor companies, either on their own or in a consortium with academic institutions or R&D organisations'
    ],
    conditions: [
      'Proposals submitted to the Nodal Agency for technical scrutiny and milestone feasibility',
      'May include part-funding under the Research, Development, and Innovation (RDI) Scheme'
    ],
    fiscalSupport: {
      highlight: 'Up to 75% Project Cost (Capex & Opex)',
      subtext: 'High-level capital and operational co-funding including State incentives and RDI grants.',
      details: [
        {
          label: 'Fiscal Support Quantum',
          value: 'Up to 75% of Project Cost',
          mechanism: 'Covers eligible capital expenditures (cleanroom equipment, lithography testbeds) and operational expenses.'
        },
        {
          label: 'RDI Scheme Synergies',
          value: 'Blended Grant Funding',
          mechanism: 'Additional grant components integrated seamlessly through the national RDI framework.'
        },
        {
          label: 'IP & Patent Retention',
          value: 'Consortium Ownership',
          mechanism: 'Domestic retention of high-value patents and fabrication recipes.'
        }
      ]
    },
    duration: 'Determined on project-to-project basis, preferably up to 6 years.',
    quadAlignment: 'Quad Techtronix collaborates with premier Indian research institutes to develop 2.5D chiplet interposers and GaN-on-Silicon power micro-modules under the 75% Capex/Opex structure.'
  },
  {
    id: 'cat-10',
    type: 'TALENT',
    typeLabel: 'Type 3: Talent Development',
    categoryNumber: 'Category 10',
    title: 'Talent Development for the Semiconductor Ecosystem',
    shortDesc: 'Nurturing 85,000+ industry-ready engineers across design, fab, and packaging from undergraduate to PhD.',
    objective: 'Develop a robust, multi-tiered semiconductor talent ecosystem in India by nurturing skilled professionals across design, fabrication, and packaging domains, enabling self-reliance, global competitiveness, and sustained innovation.',
    targetSegment: [
      'Design: Advanced chip design EDA tools, MPW fabrication services, post-silicon validation tools, and capacity building projects',
      'Manufacturing: Dedicated training infrastructure for hands-on shop-floor manpower, and strengthening existing national nanofabrication and process laboratories to impart practical training',
      'Students across undergraduate (B.Tech ECE/EEE), postgraduate (M.Tech VLSI), doctoral, and technician levels'
    ],
    eligibility: [
      'Indian academic institutions, R&D organizations and laboratories, scientific societies, and domestic training institutions'
    ],
    conditions: [
      'Hands-on curriculum aligned with real fab workflows and verified industry standard tools',
      'Proposals considered for fiscal support directly by the Nodal Agency'
    ],
    fiscalSupport: {
      highlight: 'Up to 75% Support for Capex & Opex',
      subtext: 'Government co-funding for institutional VLSI design labs, testbenches, and student MPW tapeouts.',
      details: [
        {
          label: 'Fiscal Support Quantum',
          value: 'Up to 75% of Project Cost',
          mechanism: 'Capital expenditure for lab equipment and operational expenditure for trainer stipends and tapeout shuttles.'
        },
        {
          label: 'Design Grid Subsidies',
          value: 'Zero-Cost Student EDA Access',
          mechanism: 'Cloud-hosted EDA tool licenses distributed to engineering universities.'
        },
        {
          label: 'Shop-Floor Apprenticeships',
          value: 'Fabrication Cleanroom Stints',
          mechanism: 'Subsidized hands-on training at national nanofab facilities (CeNSE, SCL, IITs).'
        }
      ]
    },
    duration: 'Determined on project-to-project basis, preferably up to 6 years.',
    quadAlignment: 'Founded by a B.Tech ECE student, Quad Techtronix champions the "Campus-to-Wafer" initiative, mentoring student design teams and co-sponsoring university MPW tapeout runs.'
  }
];

export interface SiliconProduct {
  id: string;
  name: string;
  codename: string;
  category: 'Strategic' | 'Commercial' | 'Power' | 'Advanced Packaging';
  semiconCategory: string;
  tagline: string;
  processNode: string;
  dieArea: string;
  architecture: string;
  clockSpeed: string;
  keySpecs: string[];
  applications: string[];
  cdacCoOwnership: boolean;
  schematicBlocks: {
    name: string;
    description: string;
    type: 'compute' | 'memory' | 'crypto' | 'rf' | 'io' | 'power';
  }[];
}

export const QUAD_SILICON_PORTFOLIO: SiliconProduct[] = [
  {
    id: 'qt-sovereign-1',
    name: 'QT-Sovereign-1',
    codename: 'Agni-Core 64',
    category: 'Strategic',
    semiconCategory: 'Category 01: National Strategic',
    tagline: 'Dual-Core Sovereign RISC-V SoC with Military-Grade Hardware Root-of-Trust',
    processNode: '28nm High-K Metal Gate (HKMG)',
    dieArea: '14.2 mm²',
    architecture: 'Dual-Core 64-bit RV64GC with Custom Crypto ISA Extensions',
    clockSpeed: '1.2 GHz',
    keySpecs: [
      'Rad-hardened by design with ECC protection across all memory banks',
      'True Hardware Root-of-Trust (RoT) with side-channel resistant AES-256 and ECC',
      'Integrated Secure Boot ROM with physical unclonable function (PUF)',
      'Compliant with C-DAC co-ownership & Indian export security directives'
    ],
    applications: [
      'Critical National Power Grid Automation',
      'Defense Telecommunications & SDR',
      'Avionics Navigation Systems',
      'Secure High-Speed Railway Signaling'
    ],
    cdacCoOwnership: true,
    schematicBlocks: [
      { name: 'RV64GC Core A (Primary)', description: 'Out-of-order 64-bit pipeline with vector extensions', type: 'compute' },
      { name: 'RV64GC Core B (Lockstep)', description: 'Dual-redundant lockstep verification core', type: 'compute' },
      { name: 'Hardware PUF & RoT', description: 'Silicon physical unclonable key generator & crypto engine', type: 'crypto' },
      { name: '512 KB L2 SRAM + ECC', description: 'Zero-wait-state radiation-tolerant cache', type: 'memory' },
      { name: 'DDR4/LPDDR4 Controller', description: 'High-reliability memory bus interface', type: 'memory' },
      { name: 'Secure CAN-FD & Mil-1553', description: 'Avionics and industrial deterministic bus interfaces', type: 'io' },
      { name: 'Dynamic Voltage Regulation', description: 'Integrated on-chip LDO power gating', type: 'power' }
    ]
  },
  {
    id: 'qt-edgepulse',
    name: 'QT-EdgePulse NPU',
    codename: 'Prana-AI V1',
    category: 'Commercial',
    semiconCategory: 'Category 02: Commercial Fabless',
    tagline: 'Sub-Milliwatt Neuromorphic Accelerator for Distributed Smart Edge Devices',
    processNode: '22nm Fully Depleted SOI (FD-SOI)',
    dieArea: '6.8 mm²',
    architecture: 'Heterogeneous RISC-V 32-bit + 2.4 TOPS INT8/INT4 Tensor Engine',
    clockSpeed: '400 MHz (Dynamic DVFS)',
    keySpecs: [
      'Ultra-low power envelope: <15 mW active compute, 40 µW deep sleep',
      'Zero-latency acoustic keyword spotting and computer vision inference',
      'Eligible for ₹15 Cr P-DLI Milestone Advance Seed Support',
      'Centralized EDA Tools Grid and MPW multi-wafer fabrication verified'
    ],
    applications: [
      'Smart City Surveillance & Edge Cameras',
      'Wearable Medical Diagnostics & ECG Monitoring',
      'Industrial Predictive Vibration Sensors',
      'Consumer Smart Home Appliances'
    ],
    cdacCoOwnership: false,
    schematicBlocks: [
      { name: 'RV32IMC Control Core', description: 'Ultra-low leakage microcontroller supervisor', type: 'compute' },
      { name: '2.4 TOPS Tensor Matrix Engine', description: 'Systolic array for INT8/INT4 deep learning layers', type: 'compute' },
      { name: '1 MB On-Chip eSRAM', description: 'High-bandwidth zero-off-chip-energy model weights', type: 'memory' },
      { name: 'Sub-mW Audio DSP', description: 'Hardware VAD (Voice Activity Detection) coprocessor', type: 'compute' },
      { name: 'MIPI-CSI2 & I3C Bus', description: 'High-speed camera sensor and serial interface', type: 'io' },
      { name: 'Always-On Power Island', description: 'Sub-microamp state retention sleep controller', type: 'power' }
    ]
  },
  {
    id: 'qt-hypergan',
    name: 'QT-HyperGaN PMIC',
    codename: 'Shakti-Power 800',
    category: 'Power',
    semiconCategory: 'Category 01/02: High-Efficiency Power',
    tagline: '800V Gallium-Nitride Integrated Driver for EV Traction & High-Density Inverters',
    processNode: '0.18µm GaN-on-Silicon BCD Process',
    dieArea: '18.5 mm²',
    architecture: 'Monolithic GaN Half-Bridge with Integrated Isolated Gate Driver',
    clockSpeed: 'Up to 3.0 MHz Switching',
    keySpecs: [
      'Breakdown voltage: 800V with <35 mΩ ON-state resistance',
      '99.2% peak DC-DC efficiency at high thermal operational limits (175°C)',
      'Integrated over-current, over-temperature, and UVLO protection circuits',
      'Designed for automotive AEC-Q100 Grade 0 qualification'
    ],
    applications: [
      'Electric Vehicle (EV) On-Board Chargers (OBC)',
      'Solar Micro-Inverters and Battery Energy Storage',
      'High-Density AI Data Center Power Supplies',
      'High-Speed Railway Traction Auxiliary'
    ],
    cdacCoOwnership: false,
    schematicBlocks: [
      { name: 'High-Side GaN HEMT', description: '800V high-electron-mobility power transistor', type: 'power' },
      { name: 'Low-Side GaN HEMT', description: 'Ultra-low Rds(on) synchronous rectifier', type: 'power' },
      { name: 'Galvanic Isolation Barrier', description: '5 kVrms integrated capacitive isolation barrier', type: 'power' },
      { name: 'High-Speed Slew Driver', description: 'Sub-5ns propagation delay driver logic', type: 'io' },
      { name: 'Thermal & Current Sense', description: 'Real-time integrated junction prober and shunt', type: 'io' }
    ]
  },
  {
    id: 'qt-chiplethub',
    name: 'QT-OptiChiplet 2.5D',
    codename: 'Tarang-Interconnect',
    category: 'Advanced Packaging',
    semiconCategory: 'Category 04: Advanced R&D',
    tagline: 'Heterogeneous Silicon Interposer with Monolithic Photonic Waveguides',
    processNode: 'Advanced 2.5D / 3D Substrate with Micro-Bumps',
    dieArea: '65 mm² Interposer',
    architecture: 'Die-to-Die UCIe 2.0 Standard Compliant + Integrated Optical Transceiver',
    clockSpeed: '32 Gbps / Lane',
    keySpecs: [
      'UCIe (Universal Chiplet Interconnect Express) 2.0 interoperability',
      'Co-packaged Silicon Photonics for 800 Gbps optical fiber transmission',
      'Supported by 75% Capex & Opex fiscal outlay under Category 04',
      'Collaborative R&D with Indian academic nanofabrication centers'
    ],
    applications: [
      'High-Performance Supercomputing (HPC)',
      'AI Training Accelerators & Large Scale Data Centers',
      'Quantum-Classical Hybrid Co-Processors',
      'Next-Gen 6G Terahertz Backhaul Routing'
    ],
    cdacCoOwnership: false,
    schematicBlocks: [
      { name: 'UCIe 2.0 D2D Adapter', description: 'Low-latency die-to-die packet protocol engine', type: 'compute' },
      { name: 'Silicon Photonics Waveguide', description: 'On-chip sub-micron optical modulators and detectors', type: 'rf' },
      { name: 'High-Density Micro-Bump Array', description: '45-micron pitch copper micro-bump interconnect grid', type: 'io' },
      { name: 'Power Distribution TSVs', description: 'Through-Silicon Vias for vertical thermal and power dissipation', type: 'power' }
    ]
  }
];

export const TAPE_OUT_MILESTONES = [
  {
    step: '01',
    title: 'Architecture & System Modeling',
    desc: 'Instruction set architecture (ISA) customization, transaction-level modeling in SystemC/Python, and memory bus bandwidth simulation.',
    status: 'Completed',
    weeks: 'Weeks 1–6'
  },
  {
    step: '02',
    title: 'RTL Design & Functional Verification',
    desc: 'SystemVerilog RTL coding, UVM testbench verification, 100% code and functional coverage regression against randomized stimulus.',
    status: 'In Progress',
    weeks: 'Weeks 7–18'
  },
  {
    step: '03',
    title: 'Synthesis & Static Timing Analysis',
    desc: 'Logic synthesis using centralized EDA grid, clock-tree synthesis (CTS), multi-corner multi-mode (MCMM) timing closure.',
    status: 'Scheduled',
    weeks: 'Weeks 19–26'
  },
  {
    step: '04',
    title: 'Physical Design & DRC / LVS',
    desc: 'Floorplanning, automated place-and-route (P&R), design rule checking (DRC), and GDSII stream-out inspection.',
    status: 'Scheduled',
    weeks: 'Weeks 27–34'
  },
  {
    step: '05',
    title: 'MPW Shuttle Tapeout (Fabless)',
    desc: 'Wafer slot reservation via Semicon 2.0 MPW framework, multi-project photomask manufacturing, and front-end fab processing.',
    status: 'Targeted',
    weeks: 'Weeks 35–48'
  },
  {
    step: '06',
    title: 'Packaging & Post-Silicon Validation',
    desc: 'Ball grid array (BGA) wire bonding, wafer sort probing, temperature chamber validation, and compliance sign-off.',
    status: 'Targeted',
    weeks: 'Weeks 49–60'
  }
];

export const FOUNDER_STORY = {
  name: 'K. R. Hrishabh',
  role: 'Founder & Chief Architect',
  background: 'B.Tech Electronics & Communication Engineering (ECE)',
  institutionFocus: 'Next-Gen Indian Deep-Tech & Semiconductor Sovereignty',
  quote: 'India possesses 20% of the world’s finest chip design engineers, yet our domestic electronics ecosystem imports over 90% of its critical silicon. As an ECE student, I founded Quad Techtronix to prove that Indian undergraduate and young innovators can build sovereign, world-class RISC-V silicon and turn the ₹1,27,500 Crore Semicon 2.0 vision into silicon in hand.',
  corePillars: [
    {
      title: 'Four Wings of Techtronix',
      desc: 'Our four-leaf PCB emblem symbolizes the four convergence vectors of modern electronics: Compute, Memory, RF/Sensors, and High-Density Power.'
    },
    {
      title: 'Campus-to-Wafer Mission',
      desc: 'Bridging the critical gap between university engineering lecture halls and TSMC/SCL fabrication cleanrooms.'
    },
    {
      title: 'Fabless Capital Efficiency',
      desc: 'Leveraging Government of India EDA tool grids, MPW subsidies, and P-DLI seed capital to achieve silicon tapeout with zero capex redundancy.'
    }
  ]
};
