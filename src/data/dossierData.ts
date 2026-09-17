import type { DossierData } from "../types/dossier";

export const DOSSIER_DATA: DossierData = {
  identity: {
    name: "AYAN ABBAS",
    title: "RED TEAM OPERATIVE & ETHICAL HACKER",
    positioning: "VAPT × ETHICAL HACKING × RED TEAM × CODE INTELLIGENCE",
    pillars: ["RED TEAM", "VAPT", "ETHICAL HACKING", "CODE INTELLIGENCE"],
    location: "LUCKNOW, IN",
    node: "LKO-IN",
    status: "ACTIVE",
    operativesCount: 3,
    clearanceLevel: "LEVEL-05 // RECRUITER ACCESS",
    narrativeSummary: [
      "I analyze digital systems from an adversarial perspective, conduct in-depth vulnerability assessments and penetration testing (VAPT), and build offensive and investigative security platforms.",
      "My work focuses on Red Team attack mechanics, ethical hacking, OWASP Top 10 vulnerabilities, API security boundaries, and code-level security intelligence. I completed a hands-on VAPT internship at TriosCyber testing client targets and engineered CODE NOIR, an AI-powered codebase investigation platform.",
      "By combining manual penetration testing methodologies with deterministic code intelligence, I uncover critical attack surfaces, eliminate false positives, and guide engineering teams toward resilient mitigations before adversaries strike."
    ]
  },
  profileScan: [
    {
      id: "ps-vapt",
      label: "VAPT INTERN",
      value: "TRIOSCYBER ENGAGEMENT",
      status: "VERIFIED",
      detail: "Web & Network Pentesting, OWASP Top 10, PoC Verification"
    },
    {
      id: "ps-red",
      label: "OFFENSIVE SEC",
      value: "RED TEAM & ETHICAL HACKING",
      status: "ACTIVE",
      detail: "Adversary TTPs, BOLA/BFLA, Auth Flaws & Exploit Analysis"
    },
    {
      id: "ps-noir",
      label: "CODE INTELLIGENCE",
      value: "CODE NOIR PLATFORM",
      status: "ACTIVE",
      detail: "AST & Symbol Analysis, Security Findings, Detective Desk"
    },
    {
      id: "ps-ops",
      label: "DEPLOYMENTS",
      value: "03 ACTIVE OPERATIVES",
      status: "ACTIVE",
      detail: "CODE NOIR (SAST/Intelligence), SENTINEL (SOC), JARVIS (Agents)"
    },
    {
      id: "ps-syn",
      label: "PROFILE SYNTHESIS",
      value: "AUTHENTICATED & ACCESSIBLE",
      status: "COMPLETE",
      detail: "System Access Granted for Recruiter & Technical Evaluation"
    }
  ],
  evolution: [
    {
      id: "evo-builder",
      step: "01",
      title: "THE BUILDER",
      period: "FOUNDATION",
      category: "BUILD",
      description: "Full-stack development as the engineering foundation — constructing interfaces, applications, APIs, and digital products.",
      narrative: [
        "I started by building systems from the ground up.",
        "Component trees, state machines, REST APIs, database schemas.",
        "Understanding how software is constructed is the prerequisite to understanding how it collapses."
      ],
      highlights: ["DOM Mechanics & UI Architecture", "Modern TypeScript, Node.js & React", "Full-Stack System Engineering"],
      technologies: ["TypeScript", "React", "Node.js", "Express", "REST APIs", "PostgreSQL"]
    },
    {
      id: "evo-question",
      step: "02",
      title: "THE OFFENSIVE SHIFT",
      period: "TURNING POINT",
      category: "SECURITY",
      turningPoint: true,
      description: "The pivotal mindset transition — shifting focus from system construction to adversarial security inquiry.",
      narrative: [
        "Then the fundamental question changed.",
        "Not just: How do I make this feature work?",
        "But: What happens when an adversary injects unexpected input? Where are the implicit trusts?"
      ],
      highlights: ["Shift from Construction to Adversarial Inquiry", "Evaluating Boundary Assumptions", "Questioning Implicit System Trust"],
      technologies: ["Attack Surface Mapping", "Boundary Inspection", "Threat Modeling", "HTTP Internals"]
    },
    {
      id: "evo-break",
      step: "03",
      title: "ETHICAL HACKING LABS",
      period: "SECURITY RESEARCH",
      category: "SECURITY",
      description: "Examining application security, exposed attack surfaces, API boundaries, and network behavior in dedicated offensive labs.",
      narrative: [
        "I began systematically breaking applications in controlled test beds.",
        "Testing authentication boundaries, tracing parameter handling, and intercepting API traffic.",
        "Mastering the attacker's toolkit from Burp Suite to protocol fuzzers."
      ],
      highlights: ["Application Security Research", "API Boundary & Auth Vulnerabilities", "Controlled Security Lab Experimentation"],
      technologies: ["Burp Suite Pro", "OWASP Top 10", "HTTP Fuzzing", "API Security", "Nmap Recon"]
    },
    {
      id: "evo-trioscyber",
      step: "04",
      title: "TRIOSCYBER FIELD VAPT",
      period: "INDUSTRIAL INTERNSHIP",
      category: "OPERATIONS",
      description: "One-month intensive industrial VAPT internship at TriosCyber executing vulnerability assessments and penetration testing.",
      narrative: [
        "Stepped out of synthetic labs into real-world client environments at TriosCyber.",
        "Conducted black-box and grey-box penetration testing on production-grade web apps and network infrastructure.",
        "Crafted custom Proof-of-Concept exploits to eliminate false positives and authored remediation blueprints for engineering leads."
      ],
      highlights: ["1-Month VAPT Internship at TriosCyber (01 Sept – 01 Oct)", "Web & Network Pentesting (OWASP Top 10 & WSTG)", "CVSS v3.1 Scoring & Remediation Reports"],
      technologies: ["TriosCyber Engagements", "Burp Suite", "Nessus", "Nmap", "CVSS v3.1", "OWASP WSTG", "Client Reporting"]
    },
    {
      id: "evo-adversary",
      step: "05",
      title: "THE RED TEAM ADVERSARY",
      period: "RED TEAM LABS",
      category: "SECURITY",
      description: "Deepening offensive tradecraft — researching adversary tactics, token manipulation, race conditions, and attack chain exploitation.",
      narrative: [
        "To think like an adversary, I studied advanced offensive vectors.",
        "Manipulating cryptographic claims in JWTs, triggering concurrency race windows, and chaining multiple low-severity issues into full system takeover."
      ],
      highlights: [
        "API ATTACK LAB: Auth & BOLA Vulnerability Exploitation",
        "TOKEN ABUSE LAB: JWT Signature Bypasses & Session Hijacking",
        "RACE CONDITION LAB: TOCTOU & Concurrency Flaws",
        "SUPPLY CHAIN LAB: Malicious Package Vectors & SBOM Auditing"
      ],
      technologies: ["Red Team TTPs", "JWT Security", "BOLA / BFLA", "Race Conditions", "OWASP API Top 10", "MITRE ATT&CK"]
    },
    {
      id: "evo-codenoir",
      step: "06",
      title: "CODE INTELLIGENCE ARCHITECT",
      period: "SECURITY SAST & AST",
      category: "AI",
      description: "Building CODE NOIR — an AI-powered codebase investigation and security platform grounded in deterministic code facts.",
      narrative: [
        "Recognized that codebases conceal critical security relationships beneath thousands of files.",
        "Engineered CODE NOIR to ingest repositories, parse ASTs, build call graphs, identify auth boundaries, and empower investigators through conversational AI."
      ],
      highlights: [
        "CODE NOIR: Deterministic Code Intelligence + Security Findings",
        "Visual Crime Scene Call & Dependency Graph",
        "Evidence Locker & Automated Security Auditing"
      ],
      technologies: ["CODE NOIR Platform", "AST Parsing", "Static Security Analysis", "Next.js", "Prisma", "AI Reasoning"]
    },
    {
      id: "evo-system-builder",
      step: "07",
      title: "AUTONOMOUS SECURITY SYSTEMS",
      period: "SECURITY AUTOMATION",
      category: "AI",
      description: "Engineering intelligent offensive & defensive systems for automated triage, telemetry correlation, and operational speed.",
      narrative: [
        "Bridging offensive insights with automated tooling.",
        "Deploying SENTINEL for AI SOC telemetry correlation and JARVIS for multi-model developer task orchestration."
      ],
      highlights: [
        "SENTINEL → AI SOC Analyst & Threat Correlation Engine",
        "JARVIS → Agentic Automation & Task Execution Bridge",
        "Autonomous Multi-LLM Security Workflows"
      ],
      technologies: ["SENTINEL SOC", "JARVIS System", "Telemetry Pipelines", "Multi-LLM Routing", "Tool Calling"]
    }
  ],
  capabilityDomains: [
    {
      id: "dom-attack",
      num: "01",
      name: "RED TEAM & ADVERSARY EMULATION",
      category: "ATTACK",
      subtitle: "EXPLOIT MECHANICS, ATTACK CHAINS & ADVERSARY TTPS",
      summary: "Simulating adversary behavior, mapping complex attack pathways, weaponizing boundary flaws, and analyzing system resilience against targeted breaches.",
      accentColor: "var(--color-threat)",
      quickSummary: ["Adversary TTPs", "Broken Access Control", "JWT Exploits", "Privilege Escalation", "Race Conditions"],
      items: [
        {
          id: "cap-redteam-ttps",
          name: "Adversary TTPs & MITRE ATT&CK Mapping",
          categoryTag: "RED TEAM",
          state: "DEPLOYED",
          description: "Analyzing threat actor tactics, techniques, and procedures (TTPs) and correlating offensive attack paths to the MITRE ATT&CK enterprise framework.",
          evidenceLabel: "OFFENSIVE RESEARCH",
          evidenceAnchor: "operations",
          tools: ["MITRE ATT&CK", "Adversary TTPs", "Attack Chain Modeling", "Threat Emulation"]
        },
        {
          id: "cap-auth-exploit",
          name: "Broken Authentication & Token Abuse",
          categoryTag: "EXPLOITATION",
          state: "PRACTICED",
          description: "Auditing and exploiting authentication mechanisms, JWT header manipulation (algorithm confusion, key confusion), and session hijacking vectors.",
          evidenceLabel: "TOKEN ABUSE LAB",
          evidenceAnchor: "field-operations",
          tools: ["JWT Forensics", "OAuth 2.0 Audits", "Session Fixation", "Signature Bypasses"]
        },
        {
          id: "cap-race-toctou",
          name: "Concurrency Flaws & Race Conditions",
          categoryTag: "ADVANCED ATTACK",
          state: "PRACTICED",
          description: "Generating parallel asynchronous HTTP/2 streams to detect Time-of-Check to Time-of-Use (TOCTOU) flaws, double-spend vulnerabilities, and limit bypasses.",
          evidenceLabel: "RACE CONDITION LAB",
          evidenceAnchor: "field-operations",
          tools: ["HTTP/2 Turbo Streams", "TOCTOU Flaws", "Python Asyncio", "Concurrency Testing"]
        },
        {
          id: "cap-recon-active",
          name: "Network & Endpoint Attack Surface Recon",
          categoryTag: "RECON",
          state: "PRACTICED",
          description: "Executing active service fingerprinting, sub-domain brute-forcing, perimeter enumeration, and exposed port vulnerability scanning.",
          evidenceLabel: "TRIOSCYBER ENGAGEMENT",
          evidenceAnchor: "experience",
          tools: ["Nmap", "Burp Suite Pro", "DNS Enumeration", "Protocol Analysis"]
        }
      ]
    },
    {
      id: "dom-vapt",
      num: "02",
      name: "VULNERABILITY ASSESSMENT & PENETRATION TESTING",
      category: "ATTACK",
      subtitle: "SYSTEMATIC METHODOLOGIES, TESTING & AUDIT REPORTING",
      summary: "Industry-standard VAPT methodologies applied to web applications, APIs, and network perimeters with manual PoC exploit validation and CVSS scoring.",
      accentColor: "var(--color-threat)",
      quickSummary: ["OWASP Top 10", "WSTG Methodology", "Nessus & Burp Pro", "PoC Exploit Scripts", "CVSS v3.1 Scoring"],
      items: [
        {
          id: "cap-owasp-top10",
          name: "Web Application Pentesting (OWASP Top 10)",
          categoryTag: "WEB VAPT",
          state: "DEPLOYED",
          description: "Systematic auditing for injection (SQLi, NoSQLi, Command Injection), Cross-Site Scripting (XSS), CSRF, SSRF, and security misconfigurations.",
          evidenceLabel: "TRIOSCYBER VAPT INTERNSHIP",
          evidenceAnchor: "experience",
          tools: ["OWASP Top 10", "OWASP WSTG", "Burp Suite Pro", "SQLMap", "PayloadsAllTheThings"]
        },
        {
          id: "cap-api-vapt",
          name: "API Vulnerability Assessment (OWASP API Top 10)",
          categoryTag: "API VAPT",
          state: "DEPLOYED",
          description: "Evaluating RESTful & GraphQL endpoints for Broken Object Level Authorization (BOLA), Broken Function Level Authorization (BFLA), and rate-limit bypasses.",
          evidenceLabel: "API ATTACK LAB",
          evidenceAnchor: "field-operations",
          tools: ["OWASP API Top 10", "Postman", "Burp Repeater / Intruder", "Fuzzing Engine"]
        },
        {
          id: "cap-poc-validation",
          name: "Manual PoC Verification & False Positive Filtering",
          categoryTag: "VALIDATION",
          state: "DEPLOYED",
          description: "Crafting customized Proof-of-Concept (PoC) exploits in Python and Bash to verify automated scanner findings and eliminate false positives.",
          evidenceLabel: "TRIOSCYBER VAPT ENGAGEMENT",
          evidenceAnchor: "experience",
          tools: ["Python Exploit Scripts", "cURL", "Bash Automation", "Manual Verification"]
        },
        {
          id: "cap-vapt-reporting",
          name: "CVSS v3.1 Scoring & Remediation Advising",
          categoryTag: "REPORTING",
          state: "DEPLOYED",
          description: "Calculating standardized CVSS v3.1 severity metrics and authoring executive summaries and developer remediation roadmaps.",
          evidenceLabel: "TRIOSCYBER AUDIT DELIVERABLE",
          evidenceAnchor: "experience",
          tools: ["CVSS v3.1 Calculator", "VAPT Audit Reports", "Remediation Guidance", "Risk Assessment"]
        }
      ]
    },
    {
      id: "dom-noir",
      num: "03",
      name: "CODEBASE INVESTIGATION & SAST TOOLING",
      category: "BUILD",
      subtitle: "DETERMINISTIC CODE INTELLIGENCE & SECURITY AUDIT",
      summary: "Architecting intelligent code investigation platforms, abstract syntax tree (AST) symbol graphs, security boundary analysis, and SAST tooling.",
      accentColor: "var(--color-accent)",
      quickSummary: ["CODE NOIR Engine", "AST Symbol Extraction", "Security Findings", "Call Graph Mapping", "TypeScript / Next.js"],
      items: [
        {
          id: "cap-ast-analysis",
          name: "AST Symbol & Call Graph Analysis",
          categoryTag: "CODE ANALYSIS",
          state: "DEPLOYED",
          description: "Parsing multi-language source code to map entry points, caller-callee hierarchies, data flow pipelines, and circular dependencies.",
          evidenceLabel: "CODE NOIR ARCHITECTURE",
          evidenceAnchor: "operations",
          tools: ["AST Parsing", "Symbol Extraction", "Call Graphs", "Dependency Analysis"]
        },
        {
          id: "cap-sast-audit",
          name: "Security & Authentication Pathway Auditing",
          categoryTag: "SAST",
          state: "DEPLOYED",
          description: "Identifying exposed routes, unguarded middleware, database query patterns, and potential privilege escalation vectors directly in code.",
          evidenceLabel: "CODE NOIR EVIDENCE LOCKER",
          evidenceAnchor: "operations",
          tools: ["Static Code Analysis", "Auth Boundary Auditing", "Route Inspection", "Prisma ORM"]
        },
        {
          id: "cap-investigation-desk",
          name: "AI-Augmented Codebase Investigation",
          categoryTag: "AI REASONING",
          state: "DEPLOYED",
          description: "Bridging deterministic codebase facts with LLM reasoning for conversational investigation, concept walkthroughs, and blast radius discovery.",
          evidenceLabel: "CODE NOIR DETECTIVE'S DESK",
          evidenceAnchor: "operations",
          tools: ["LLM Prompt Engineering", "Vector Grounding", "Evidence Anchoring", "Interactive UI"]
        },
        {
          id: "cap-supply-chain",
          name: "Software Supply Chain & SBOM Security",
          categoryTag: "SUPPLY CHAIN",
          state: "PRACTICED",
          description: "Scanning dependencies for CVEs, generating Software Bill of Materials (SBOM), and testing against dependency confusion and malicious packages.",
          evidenceLabel: "SUPPLY CHAIN LAB",
          evidenceAnchor: "field-operations",
          tools: ["SBOM (CycloneDX)", "Dependency-Check", "Lockfile Auditing", "CI/CD Gatekeeping"]
        }
      ]
    },
    {
      id: "dom-defend",
      num: "04",
      name: "DEFENSIVE TELEMETRY & DETECTION AWARENESS",
      category: "DEFEND",
      subtitle: "SOC WORKFLOWS, TELEMETRY CORRELATION & HARDENING",
      summary: "Understanding defender signals, log telemetry, SIEM correlation, and detection engineering to craft more elusive red team attacks and resilient defenses.",
      accentColor: "var(--color-intelligence)",
      quickSummary: ["SIEM Telemetry", "SENTINEL AI SOC", "Honeypot IOCs", "eBPF Tracing", "System Hardening"],
      items: [
        {
          id: "cap-siem-telemetry",
          name: "SIEM & Log Telemetry Correlation",
          categoryTag: "ANALYSIS",
          state: "PRACTICED",
          description: "Inspecting HTTP server logs, access trails, authentication failure bursts, and correlate multi-source event signals.",
          evidenceLabel: "SENTINEL AI SOC",
          evidenceAnchor: "operations",
          tools: ["SIEM Workflows", "Log Telemetry", "Event Correlation", "JSON Logs"]
        },
        {
          id: "cap-honeypot-intel",
          name: "Deception Tech & IOC Capture",
          categoryTag: "DECEPTION",
          state: "PRACTICED",
          description: "Deploying deceptive honeypot listeners to study active scanner techniques, capture malicious payloads, and extract threat indicators.",
          evidenceLabel: "HONEYPOT INTELLIGENCE LAB",
          evidenceAnchor: "field-operations",
          tools: ["Honeypots", "Docker", "IOC Extraction", "Command Logging"]
        },
        {
          id: "cap-kernel-observability",
          name: "eBPF Linux Kernel Syscall Observability",
          categoryTag: "OBSERVABILITY",
          state: "PRACTICED",
          description: "Tracing kernel-level system calls, process execution forks, socket connections, and privilege alterations via eBPF tracepoints.",
          evidenceLabel: "eBPF THREAT TRACER",
          evidenceAnchor: "field-operations",
          tools: ["eBPF / BCC", "Linux Kernel Hooks", "Syscall Tracing", "C / Python"]
        },
        {
          id: "cap-defensive-hardening",
          name: "Defensive Posture & API Hardening",
          categoryTag: "HARDENING",
          state: "WORKING KNOWLEDGE",
          description: "Recommending defense-in-depth remediations: strict CSP headers, rate-limiting algorithms, parameterized queries, and CORS boundaries.",
          evidenceLabel: "VAPT REMEDIATION ADVICE",
          evidenceAnchor: "experience",
          tools: ["Security Headers", "Input Sanitization", "WAF Rules", "Access Control"]
        }
      ]
    }
  ],

  flagshipOperations: [
    {
      id: "op-noir",
      anchorId: "operation-codenoir",
      shortcutKey: "C",
      num: "01",
      codename: "OPERATION: CODE NOIR",
      name: "CODE NOIR",
      classification: "AI CODE INTELLIGENCE & SECURITY PLATFORM",
      status: "VERIFIED",
      url: "https://github.com/IamjustaOversizedKidddoo/CODE-NOIR",
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/CODE-NOIR",
      coreTagline: "EVERY CODEBASE HAS A STORY. INVESTIGATE IT.",
      summary: "AI-powered codebase investigation and security intelligence platform transforming complex repositories into structured, evidence-backed interactive architecture and security findings.",
      description: "CODE NOIR bridges deterministic code intelligence and AI reasoning. Instead of generic summaries, it parses repository ASTs, maps symbol call graphs, audits authentication and API routes, and enables iterative security investigations through the Detective's Desk and Crime Scene visual graph. Built on the core principle: Evidence first. Explanation second.",
      accentColor: "var(--color-threat)",
      technologies: ["Next.js", "TypeScript", "Prisma", "AST Parsing", "Security Findings", "TailwindCSS", "Vitest", "AI Code Graph"],
      architectureNodes: [
        { id: "cn-ingest", label: "INGESTION", type: "input", subtext: "Zip / Git Clone / Source Folder" },
        { id: "cn-ast", label: "CODE INTELLIGENCE", type: "router", subtext: "AST / Symbols / Import & Call Graph" },
        { id: "cn-evidence", label: "EVIDENCE LAYER", type: "engine", subtext: "Verified Facts & Source Grounding" },
        { id: "cn-sec", label: "SECURITY AUDITING", type: "tool", subtext: "Auth Paths, Blast Radius & Findings" },
        { id: "cn-desk", label: "DETECTIVE'S DESK", type: "output", subtext: "Iterative AI Investigation & Visual Map" }
      ],
      features: [
        {
          id: "cn-f1",
          category: "ANALYSIS",
          name: "Case Brief Generation",
          state: "DEPLOYED",
          description: "Rapidly synthesizes repository structure, entry points, detected languages, and major architectural systems."
        },
        {
          id: "cn-f2",
          category: "INVESTIGATION",
          name: "The Detective's Desk",
          state: "DEPLOYED",
          description: "Conversational investigation workspace grounding natural questions in verifiable source evidence and call paths."
        },
        {
          id: "cn-f3",
          category: "VISUALIZATION",
          name: "Crime Scene Architecture Map",
          state: "DEPLOYED",
          description: "Interactive graph visualizing imports, callers, callees, circular dependencies, and blast radius impact."
        },
        {
          id: "cn-f4",
          category: "SECURITY",
          name: "Evidence Locker & Security Findings",
          state: "DEPLOYED",
          description: "Systematic auditing of indexed symbols, configuration files, authentication routes, and security risk indicators."
        }
      ]
    },
    {
      id: "op-sentinel",
      anchorId: "operation-sentinel",
      shortcutKey: "S",
      num: "02",
      codename: "OPERATION: SENTINEL",
      name: "SENTINEL",
      classification: "AI SOC ANALYST PLATFORM",
      status: "VERIFIED",
      url: "https://github.com/IamjustaOversizedKidddoo",
      githubUrl: "https://github.com/IamjustaOversizedKidddoo",
      coreTagline: "CONNECT SIGNALS, NOT JUST ALERTS.",
      summary: "AI-powered SOC analyst platform designed for security signal correlation, threat triage, and incident investigation automation.",
      description: "SENTINEL transforms raw, high-volume SIEM alert noise into correlated security signals. Using LLM-assisted context synthesis, it correlates multi-source log telemetry to accelerate SOC investigation and threat response.",
      accentColor: "var(--color-intelligence)",
      technologies: ["Python", "SIEM Telemetry", "Log Analysis", "LLM Incident Triage", "Signal Correlation", "Security Workflows"],
      architectureNodes: [
        { id: "s-logs", label: "LOG TELEMETRY", type: "input", subtext: "HTTP / Auth / SIEM Logs" },
        { id: "s-correlator", label: "SIGNAL CORRELATOR", type: "router", subtext: "Event Relationship Engine" },
        { id: "s-triage", label: "AI SOC TRIAGE", type: "engine", subtext: "LLM Context Synthesis" },
        { id: "s-case", label: "INCIDENT CASE", type: "output", subtext: "Actionable Investigation" }
      ],
      features: [
        {
          id: "s-f1",
          category: "SECURITY AI",
          name: "SIEM Signal Correlation",
          state: "PRACTICED",
          description: "Correlates multi-source audit logs to extract meaningful threat signals from alert noise."
        },
        {
          id: "s-f2",
          category: "TRIAGE",
          name: "Automated Incident Triage",
          state: "PRACTICED",
          description: "Uses LLM context synthesis to draft initial incident reports and assign severity risk scores."
        },
        {
          id: "s-f3",
          category: "INVESTIGATION",
          name: "Interactive Workspace Module",
          state: "IN PROGRESS",
          description: "Provides security analysts with visual evidence graphs and timeline correlation tools."
        },
        {
          id: "s-f4",
          category: "WORKFLOW",
          name: "Security Playbook Automation",
          state: "IN PROGRESS",
          description: "Automates repetitive SOC triage tasks to reduce mean time to investigate (MTTI)."
        }
      ]
    },
    {
      id: "op-jarvis",
      anchorId: "operation-jarvis",
      shortcutKey: "J",
      num: "03",
      codename: "OPERATION: JARVIS",
      name: "JARVIS",
      classification: "MULTI-LLM AGENTIC SYSTEM",
      status: "VERIFIED",
      url: "https://github.com/IamjustaOversizedKidddoo",
      githubUrl: "https://github.com/IamjustaOversizedKidddoo",
      coreTagline: "MULTI-MODEL ORCHESTRATION & AGENTIC AUTOMATION",
      summary: "Personal AI assistant infrastructure providing multi-model routing, voice interaction, document intelligence (RAG), and task execution.",
      description: "JARVIS acts as an intelligent command bridge. Rather than relying on a single AI model, it routes developer & operational prompts to task-optimized LLMs, manages retrieval-augmented context, and executes automated multi-step tool calls.",
      accentColor: "var(--color-accent)",
      technologies: ["Python", "Multi-LLM APIs", "React/TypeScript", "RAG Pipelines", "Tool Calling", "Voice I/O", "Agent Loops"],
      architectureNodes: [
        { id: "j-user", label: "USER INPUT", type: "input", subtext: "Voice / Text Prompt" },
        { id: "j-router", label: "TASK ROUTER", type: "router", subtext: "Intent & Model Selector" },
        { id: "j-engine", label: "MULTI-LLM ENGINE", type: "engine", subtext: "GPT-4 / Claude / Gemini" },
        { id: "j-tools", label: "AGENT TOOL LOOPS", type: "tool", subtext: "RAG & Automation" },
        { id: "j-output", label: "ACTION OUTPUT", type: "output", subtext: "Synthesized Execution" }
      ],
      features: [
        {
          id: "j-f1",
          category: "INTELLIGENCE",
          name: "Multi-LLM Prompt Routing",
          state: "DEPLOYED",
          description: "Evaluates task complexity and routes developer prompts to optimal LLM endpoints."
        },
        {
          id: "j-f2",
          category: "VOICE",
          name: "Speech & Voice Interface",
          state: "PRACTICED",
          description: "Hands-free voice interaction loop with real-time speech input parsing and text-to-speech feedback."
        },
        {
          id: "j-f3",
          category: "KNOWLEDGE",
          name: "RAG / Document Intelligence",
          state: "PRACTICED",
          description: "Queries local technical documentation, codebases, and references with vector context retrieval."
        },
        {
          id: "j-f4",
          category: "AUTOMATION",
          name: "Autonomous Tool Calling",
          state: "IN PROGRESS",
          description: "Executes structured multi-step task loops for automated workflow assistance."
        }
      ]
    }
  ],

  experiences: [
    {
      id: "exp-trioscyber",
      role: "Vulnerability Assessment & Penetration Testing (VAPT) Intern",
      organization: "TriosCyber",
      period: "01 SEPT – 01 OCT",
      duration: "1 MONTH INTENSIVE ENGAGEMENT",
      location: "REMOTE / INDIA",
      type: "INTERNSHIP",
      status: "COMPLETED",
      classification: "VAPT & OFFENSIVE SECURITY OPERATIONS",
      summary: "Conducted black-box and grey-box penetration testing and vulnerability assessments across client web applications, APIs, and network perimeters following OWASP Top 10 and WSTG standards.",
      responsibilities: [
        "Executed end-to-end web application penetration tests identifying vulnerabilities categorized in OWASP Top 10 (Injection, Broken Access Control, XSS, Security Misconfigurations).",
        "Conducted network vulnerability assessments using Nmap and Nessus to uncover open services, out-of-date daemons, weak ciphers, and unpatched CVEs.",
        "Audited RESTful API boundaries, discovering Broken Object Level Authorization (BOLA/IDOR), improper rate-limiting, and sensitive data exposures.",
        "Formulated custom Proof-of-Concept (PoC) exploit scripts in Python to validate critical findings and eliminate false positives generated by automated scanners.",
        "Calculated CVSS v3.1 base scores and authored comprehensive VAPT remediation audit reports delivered directly to development and management teams."
      ],
      keyVulnerabilities: [
        "Broken Object Level Authorization (BOLA / IDOR) in API Endpoints",
        "Cross-Site Scripting (Reflected & Stored XSS) in User Inputs",
        "SQL Injection & Parameter Tampering in Form Handlers",
        "Missing Security Headers, Weak SSL/TLS Ciphers & CORS Misconfigurations",
        "Session Management Weaknesses & Insufficient Session Invalidation"
      ],
      methodologies: [
        "OWASP Top 10 Web Application Security Risks",
        "OWASP Web Security Testing Guide (WSTG)",
        "Penetration Testing Execution Standard (PTES)",
        "Common Vulnerability Scoring System (CVSS v3.1)",
        "NIST SP 800-115 Technical Guide to Information Security Testing"
      ],
      tools: [
        "Burp Suite Professional",
        "Nmap",
        "Nessus",
        "Metasploit Framework",
        "Postman",
        "Wireshark",
        "Python Exploit Automation",
        "Linux CLI / Bash"
      ],
      verificationStamp: "TRIOSCYBER // VERIFIED VAPT INTERNSHIP RECORD",
      credentialRef: "cred-ictrd-ccsp"
    }
  ],

  credentials: [
    {
      id: "cred-ictrd-ccsp",
      number: "CLEARANCE RECORD // 001",
      name: "Certified Cyber Security Professional Program",
      issuer: "Indian Council for Technical Research and Development (ICTRD India)",
      status: "VERIFIED",
      issueDate: "18 February 2026",
      credentialId: "AZ30932659",
      documentIdentifier: "DI/C/25011126",
      verificationUrl: null,
      skills: ["Cybersecurity", "Computer Networks", "Operating System Basics", "Data Security", "Social Engineering", "Mobile Device Security"],
      description: "The supplied certificate states that the candidate satisfactorily pursued the program and passed the examination.",
      initials: "CCSP",
      verified: true,
      evidenceAnchor: "#capabilities",
      evidenceLabel: "SECURITY CAPABILITY MATRIX"
    },
    {
      id: "cred-ictrd-aiml",
      number: "CLEARANCE RECORD // 002",
      name: "Artificial Intelligence and Machine Learning Program",
      issuer: "Indian Council for Technical Research and Development (ICTRD India)",
      status: "VERIFIED",
      issueDate: "18 February 2026",
      credentialId: "AZ30932659",
      documentIdentifier: "DI/C/25011118",
      verificationUrl: null,
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Algorithms & Statistics", "Probability", "Supervised Learning", "Data Science", "Python Programming"],
      description: "The supplied certificate states that the candidate satisfactorily pursued the program and passed the examination.",
      initials: "AIML",
      verified: true,
      evidenceAnchor: "#operation-sentinel",
      evidenceLabel: "SENTINEL AI SOC PLATFORM"
    }
  ],
  contact: {
    email: "ayanabbas78677@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayan-abbas-521897271/",
    github: "https://github.com/IamjustaOversizedKidddoo",
    availability: "OPEN TO DISCUSSION // RED TEAM & VAPT ROLES",
    location: "LKO-IN / LUCKNOW, IN",
    responseWindow: "24-48 HOURS"
  },
  systems: [
    {
      name: "CODE NOIR",
      type: "AI CODE INVESTIGATOR & SAST ENGINE",
      status: "ACTIVE",
      description: "Deterministic AST code intelligence, symbol call graphs, and security finding platform.",
      metrics: [
        { label: "PARSER", value: "AST MULTI-LANG" },
        { label: "GROUNDING", value: "EVIDENCE FIRST" }
      ]
    },
    {
      name: "SENTINEL",
      type: "AI SOC ANALYST",
      status: "UNDER DEVELOPMENT",
      description: "AI-powered threat detection, log analysis, and automated incident investigation platform.",
      metrics: [
        { label: "DETECTION", value: "REAL-TIME" },
        { label: "PIPELINE", value: "ACTIVE" }
      ]
    },
    {
      name: "JARVIS",
      type: "AGENTIC AI OPERATIVE",
      status: "UNDER DEVELOPMENT",
      description: "Multi-LLM autonomous assistant infrastructure for complex developer & operational task automation.",
      metrics: [
        { label: "LATENCY", value: "85ms" },
        { label: "AGENTS", value: "MULTI-MODEL" }
      ]
    }
  ],
  capabilities: [
    {
      id: "cap-attack",
      category: "ATTACK",
      title: "Red Team & Offensive Security",
      description: "Web vulnerability assessment, red-team methodologies, security testing, and threat surface evaluation.",
      technologies: ["Burp Suite", "OWASP Top 10", "Network Reconnaissance", "Web Exploit Analysis"]
    },
    {
      id: "cap-defend",
      category: "DEFEND",
      title: "Blue Team & Defensive Security",
      description: "SIEM log analysis, threat hunting, incident investigation, and defensive security posture hardening.",
      technologies: ["SIEM Workflows", "Log Telemetry", "Threat Intelligence", "Security Hardening"]
    },
    {
      id: "cap-build",
      category: "BUILD",
      title: "Application & Identity Security",
      description: "Crafting secure software architectures, type-safe API boundaries, and resilient backend systems.",
      technologies: ["React", "TypeScript", "Node.js", "Vite", "TailwindCSS", "Next.js", "REST/GraphQL"]
    },
    {
      id: "cap-automate",
      category: "AUTOMATE",
      title: "AI Security & Automation",
      description: "Integrating intelligent LLM orchestration, AI SOC triage, agentic tools, and automated operational pipelines.",
      technologies: ["Multi-LLM Systems", "Agent Frameworks", "Tool Calling", "Automated Pipelines"]
    }
  ],
  caseFiles: [
    {
      id: "cf-code-noir",
      number: "CASE // 001",
      codename: "CODE NOIR",
      title: "CODE NOIR — AI Codebase Investigation Platform",
      category: "RED TEAM",
      classification: "CODE INTELLIGENCE & SECURITY FINDINGS",
      status: "VERIFIED",
      summary: "AI-powered codebase investigation and security intelligence platform transforming complex repositories into structured, evidence-backed interactive architecture and security findings.",
      problem: "Understanding unfamiliar codebases and identifying security boundaries, unverified routes, and auth flaws is hindered by hallucinating AI tools that lack deterministic facts.",
      solution: "Engineered a platform combining AST symbol parsing, import/call dependency mapping, an evidence layer, and an interactive Detective's Desk grounded in verifiable facts.",
      technicalApproach: [
        "Deterministic AST parsing to extract symbols, entry points, caller-callee chains, and module dependencies.",
        "Security finding scanner auditing auth routes, configuration manifests, database calls, and blast radiuses.",
        "Detective's Desk conversational investigation loop and Crime Scene visual graph for deep architectural understanding."
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "AST Analysis", "Security Findings", "TailwindCSS", "Vitest"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/CODE-NOIR",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "FLAGSHIP CODEBASE PLATFORM",
      featured: true
    },
    {
      id: "cf-trioscyber-vapt",
      number: "CASE // 002",
      codename: "TRIOSCYBER VAPT ENGAGEMENT",
      title: "Industrial VAPT Assessment Dossier",
      category: "VAPT",
      classification: "VULNERABILITY ASSESSMENT & PENETRATION TESTING",
      status: "COMPLETED",
      summary: "One-month hands-on industrial VAPT internship conducting penetration tests on web applications, network infrastructure, and REST APIs at TriosCyber.",
      problem: "Client web platforms and exposed services suffer from authorization flaws, unpatched software vulnerabilities, and security misconfigurations accessible to adversaries.",
      solution: "Conducted systematic vulnerability assessments following OWASP Top 10 and WSTG guidelines, executed manual PoC exploit scripts, and delivered comprehensive remediation roadmaps.",
      technicalApproach: [
        "Black-box & grey-box web application testing covering SQLi, XSS, BOLA/IDOR, and CSRF vulnerabilities.",
        "Network port scanning, service enumeration, and vulnerability auditing using Nmap and Nessus.",
        "Manual PoC exploit creation in Python, CVSS v3.1 scoring, and executive remediation report authorship."
      ],
      technologies: ["Burp Suite Pro", "OWASP Top 10", "Nmap", "Nessus", "Python PoC Scripts", "CVSS v3.1", "WSTG"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "TRIOSCYBER VAPT ENGAGEMENT",
      featured: true
    },
    {
      id: "cf-api-attack-lab",
      number: "CASE // 003",
      codename: "API ATTACK LAB",
      title: "API Attack & Exploitation Lab",
      category: "RED TEAM",
      classification: "OFFENSIVE SECURITY RESEARCH",
      status: "COMPLETED",
      summary: "Application and API offensive security testing environment focusing on authentication, authorization weaknesses, and attack surface discovery.",
      problem: "REST and GraphQL endpoints frequently contain broken object-level authorization (BOLA) and parameter tampering vulnerabilities.",
      solution: "Engineered a dedicated security testing lab to evaluate OWASP API security risks, parameter fuzzing, and boundary authorization rules.",
      technicalApproach: [
        "OWASP API Top 10 vulnerability assessment & BOLA/BFLA security testing.",
        "Automated API endpoint discovery, fuzzing, and payload testing.",
        "Authorization boundary inspection and access control flaw identification."
      ],
      technologies: ["Python", "Burp Suite", "OWASP API Top 10", "REST APIs", "JWT", "Fuzzing"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #01",
      featured: false
    },
    {
      id: "cf-token-abuse-lab",
      number: "CASE // 004",
      codename: "TOKEN ABUSE LAB",
      title: "Token Abuse & Identity Exploitation Lab",
      category: "RED TEAM",
      classification: "IDENTITY & AUTHENTICATION RESEARCH",
      status: "COMPLETED",
      summary: "Authentication and identity attack research lab focusing on JWT manipulation, token replay, OAuth security, and session forensics.",
      problem: "Stateless authentication mechanisms are prone to key confusion, signature bypasses, replay vectors, and misconfigured token claims.",
      solution: "Developed a security testing suite to analyze JWT header manipulation, signature verification edge cases, and session replay risks.",
      technicalApproach: [
        "JWT signature validation bypass & claim alteration testing.",
        "Session token replay analysis and token expiration enforcement audits.",
        "OAuth 2.0 grant flow state validation and redirect security inspection."
      ],
      technologies: ["Python", "JWT Security", "OAuth 2.0", "Token Forensics", "Cryptography", "Session Security"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #02"
    },
    {
      id: "cf-supply-chain-attack-lab",
      number: "CASE // 005",
      codename: "SUPPLY CHAIN ATTACK LAB",
      title: "Supply Chain & Dependency Integrity Lab",
      category: "RED TEAM",
      classification: "SOFTWARE SUPPLY CHAIN SECURITY",
      status: "COMPLETED",
      summary: "Software supply-chain security research analyzing dependency vulnerabilities, malicious packages, dependency confusion, and SBOM integrity.",
      problem: "Modern application pipelines depend heavily on open-source registries susceptible to dependency confusion and malicious package injection.",
      solution: "Constructed a supply chain analysis environment to generate Software Bill of Materials (SBOM) and simulate dependency risk vectors safely.",
      technicalApproach: [
        "Dependency confusion risk modeling & registry namespace security auditing.",
        "Malicious package pattern detection and SBOM (CycloneDX / SPDX) analysis.",
        "Automated lockfile parsing and transitive dependency vulnerability scanning."
      ],
      technologies: ["Node.js", "Python", "SBOM (CycloneDX)", "Dependency Audit", "Package Integrity", "CI/CD Security"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #03"
    },
    {
      id: "cf-race-condition-lab",
      number: "CASE // 006",
      codename: "RACE CONDITION LAB",
      title: "Race Condition & Concurrency Lab",
      category: "RED TEAM",
      classification: "CONCURRENT APPLICATION SECURITY",
      status: "COMPLETED",
      summary: "Concurrent application security research focused on race conditions, TOCTOU vulnerabilities, and high-concurrency mitigation strategies.",
      problem: "High-concurrency application handlers without strict transaction isolation are vulnerable to state manipulation under parallel requests.",
      solution: "Built a parallel request testing harness to detect race windows in API endpoints and evaluate atomic locking mechanisms.",
      technicalApproach: [
        "Asynchronous parallel HTTP request burst generation for concurrency testing.",
        "Time-of-Check to Time-of-Use (TOCTOU) flaw identification in transaction flows.",
        "Mitigation evaluation using row locks, mutex primitives, and atomic state updates."
      ],
      technologies: ["Go", "Python (Asyncio)", "HTTP/2 Parallel Streams", "Database Locking", "Concurrency Analysis", "TOCTOU Testing"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-threat)",
      evidenceLabel: "RED TEAM LAB #04"
    },
    {
      id: "cf-ai-threat-detection",
      number: "CASE // 007",
      codename: "AI THREAT DETECTION",
      title: "AI Threat Detection & Telemetry",
      category: "BLUE TEAM",
      classification: "MACHINE-LEARNING DEFENSIVE DETECTION",
      status: "COMPLETED",
      summary: "AI-assisted defensive detection engine utilizing telemetry analysis, anomaly detection, machine learning, and automated alert classification.",
      problem: "High-volume system logs generate noise that hides subtle attack vectors when relying solely on static threshold rules.",
      solution: "Engineered an anomaly detection pipeline that processes log telemetry, extracts behavioral features, and classifies threat signals.",
      technicalApproach: [
        "Log telemetry normalization and feature vector extraction from system events.",
        "Machine-learning assisted anomaly scoring for unseen authentication & traffic spikes.",
        "Automated alert generation and threat classification for SOC triage workflows."
      ],
      technologies: ["Python", "Scikit-Learn", "Log Telemetry", "Anomaly Detection", "Detection Engineering", "JSON Logs"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #05"
    },
    {
      id: "cf-honeypot-intelligence",
      number: "CASE // 008",
      codename: "HONEYPOT INTELLIGENCE",
      title: "Honeypot Deception & IOC Capture",
      category: "BLUE TEAM",
      classification: "DECEPTION & THREAT INTELLIGENCE",
      status: "COMPLETED",
      summary: "Threat intelligence platform leveraging deception techniques to observe attacker behavior, extract IOCs, and map ATT&CK patterns.",
      problem: "Defenders need early visibility into active scanning, brute-force tactics, and emerging exploitation techniques targeting public nodes.",
      solution: "Deployed deceptive honeypot listeners simulating SSH and web services to capture interaction telemetry and analyze threat patterns.",
      technicalApproach: [
        "Multi-service honeypot deployment for SSH, HTTP, and API endpoint deception.",
        "Automated Indicators of Compromise (IOC) extraction including IPs and payload hashes.",
        "Mapping observed attacker commands and activity vectors to MITRE ATT&CK."
      ],
      technologies: ["Python", "Docker", "Honeypots", "IOC Extraction", "MITRE ATT&CK", "Log Analytics"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #06"
    },
    {
      id: "cf-ebpf-threat-tracer",
      number: "CASE // 009",
      codename: "eBPF THREAT TRACER",
      title: "eBPF Kernel Syscall Observability",
      category: "BLUE TEAM",
      classification: "LINUX SECURITY OBSERVABILITY",
      status: "COMPLETED",
      summary: "Linux security observability utility using eBPF syscall tracing to monitor runtime process behavior and detect suspicious activity.",
      problem: "User-space monitoring tools can be evaded or manipulated by elevated root processes or sophisticated evasions.",
      solution: "Implemented kernel-level tracepoints using eBPF to capture process executions, socket events, and privilege transitions in real time.",
      technicalApproach: [
        "eBPF probe attachment to Linux kernel tracepoints and system calls.",
        "Real-time process execution tracing, socket connection monitoring, and privilege audits.",
        "User-space telemetry pipeline converting kernel events into structured security alerts."
      ],
      technologies: ["C", "eBPF / BCC", "Linux Kernel Hooks", "Syscall Tracing", "Python", "Security Observability"],
      githubUrl: "https://github.com/IamjustaOversizedKidddoo/cyber-portfolio",
      liveUrl: null,
      accentColor: "var(--color-intelligence)",
      evidenceLabel: "BLUE TEAM LAB #07"
    }
  ]
};
