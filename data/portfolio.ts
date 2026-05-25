export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  year: string;
  stack: string[];
  bullets: string[];
  githubUrl: string;
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  location: string;
  date: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  location: string;
  summary: string;
  heroTagline: string;
  about: string[];
  nav: NavItem[];
  techStack: string[];
  opportunityBadge: string;
  contacts: {
    email: string;
    linkedin: string;
    github: string;
  };
  education: {
    institution: string;
    degree: string;
    dates: string;
    location: string;
  };
  experience: ExperienceItem[];
  projects: Project[];
  certifications: Certification[];
};

export const portfolio: PortfolioData = {
  name: "Ahmed Khaled",
  title: "Backend Engineer",
  location: "Cairo, Egypt",
  summary:
    "Backend Engineer specializing in scalable APIs, authentication systems, real-time communication, and AI-powered backend architectures. Proficient in FastAPI, Django, Node.js, PostgreSQL, and Redis with hands-on experience in LangGraph orchestration, RAG pipelines, and WebSocket streaming.",
  heroTagline:
    "Backend Engineer specializing in scalable APIs, authentication systems, real-time communication, and AI-powered backend architectures.",
  about: [
    "Backend Engineer with hands-on experience building scalable APIs, authentication systems, and real-time backend services.",
    "Proficient in FastAPI, Django, Node.js, PostgreSQL, and Redis, with practical work across LangGraph orchestration, RAG pipelines, and WebSocket streaming.",
    "Currently completing a Bachelor of Engineering in Computer Engineering at Ain Shams University."
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ],
  techStack: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "FastAPI",
    "Django",
    "Django REST Framework",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "RESTful APIs",
    "JWT Authentication",
    "Google OAuth",
    "Role-Based Access Control (RBAC)",
    "WebSockets",
    "LangGraph",
    "RAG Pipelines",
    "Vector Search",
    "Whisper STT",
    "Embedding Models",
    "LLM Integration",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "CI/CD",
    "Postman"
  ],
  opportunityBadge: "Currently open to opportunities",
  contacts: {
    email: "ahmedkhaled.study@gmail.com",
    linkedin: "https://linkedin.com/in/ahmed-khaled-905a1725b",
    github: "https://github.com/AhmedFaek"
  },
  education: {
    institution: "Ain Shams University – Faculty of Engineering",
    degree: "Bachelor of Engineering in Computer Engineering",
    dates: "Sep 2021 – Jun 2026",
    location: "Cairo, Egypt"
  },
  experience: [
    {
      role: "Freelance Backend / Full Stack Engineer",
      company: "Self-employed",
      location: "Remote",
      dates: "Jan 2025 – Present",
      bullets: [
        "Designed and delivered scalable RESTful APIs and backend services using FastAPI, Django, and Node.js integrated with PostgreSQL and MongoDB for production web applications.",
        "Implemented JWT authentication, Google OAuth, refresh token revocation, and role-based access control (RBAC) across multiple client projects.",
        "Built real-time communication features using WebSockets for live data streaming and event-driven workflows."
      ]
    },
    {
      role: "CyberOps Associate Intern",
      company: "Cisco Networking Academy",
      location: "Cairo, Egypt",
      dates: "Jul 2024 – Sep 2024",
      bullets: [
        "Analyzed network vulnerabilities and applied cybersecurity concepts covering HTTP/HTTPS protocols, secure authentication, and client-server communication."
      ]
    }
  ],
  projects: [
    {
      name: "AI-Driven HR Support System",
      year: "2026",
      stack: ["FastAPI", "LangGraph", "PostgreSQL", "React"],
      bullets: [
        "Architected a modular FastAPI backend with LangGraph workflow orchestration for candidate screening, interview scheduling, and AI-powered evaluation pipelines.",
        "Built a real-time interview processing system using WebSockets and Whisper speech-to-text for live transcript streaming and post-interview scoring.",
        "Engineered a RAG-based HR assistant with vector similarity search over CVs and transcripts; integrated embedding models and LLM scoring to rank candidates against job requirements."
      ],
      githubUrl: "https://github.com/mohamedelhelaly-ctrl/Incorta-HR.git",
      featured: true
    },
    {
      name: "Corporate Website & Admin System",
      year: "2026",
      stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
      bullets: [
        "Developed a full-stack corporate platform with modular controller/service/repository architecture.",
        "Built admin APIs for product, project, and customer request management.",
        "Integrated Nodemailer notifications for operational workflows."
      ],
      githubUrl: "https://github.com/AhmedFaek/StarDewedar.git"
    },
    {
      name: "E-Commerce Platform",
      year: "2024",
      stack: ["Node.js", "MongoDB", "React"],
      bullets: [
        "Built backend services for user accounts, shopping cart, and order workflows.",
        "Implemented JWT authentication for secure user access.",
        "Added secure password handling across the platform."
      ],
      githubUrl: "https://github.com/AhmedFaek/Sports-More.git"
    }
  ],
  certifications: [
    {
      name: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      location: "Cairo, Egypt",
      date: "Sep 2024"
    }
  ]
};
