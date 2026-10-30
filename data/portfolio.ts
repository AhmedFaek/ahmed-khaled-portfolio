export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  year: string;
  description: string;
  stack: string[];
  bullets: string[];
  githubUrl: string;
  demoUrl?: string;
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
    "Backend Engineer focused on backend systems, APIs, databases, authentication, and AI-powered software. I work across backend architecture, scalable service design, and applied AI workflows.",
  heroTagline:
    "Building backend systems that make software work.",
  about: [
    "I'm Ahmed Khaled, a Computer Engineering graduate from Ain Shams University focused on backend engineering, system architecture, databases, and AI-powered applications.",
    "My work centers on backend services, API design, authentication systems, database-driven applications, and software that integrates AI features in practical business workflows.",
    "I also have full-stack experience and can work across frontend and backend when a project requires it."
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
    "Node.js",
    "Express.js",
    "FastAPI",
    "Django",
    "REST APIs",
    "JWT",
    "OAuth",
    "RBAC",
    "WebSockets",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "LangGraph",
    "RAG",
    "Embeddings",
    "Vector Search",
    "LLM Integration",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "CI/CD"
  ],
  opportunityBadge: "Currently open to opportunities",
  contacts: {
    email: "ahmedkhaled.study@gmail.com",
    linkedin: "https://linkedin.com/in/ahmed-khaled-905a1725b",
    github: "https://github.com/AhmedFaek"
  },
  education: {
    institution: "Ain Shams University — Faculty of Engineering",
    degree: "Bachelor of Engineering in Computer Engineering",
    dates: "Sep 2021 – Jun 2026",
    location: "Cairo, Egypt"
  },
  experience: [
    {
      role: "Freelance Backend / Full-Stack Engineer",
      company: "Self-employed",
      location: "Remote",
      dates: "Jun 2025 – Present",
      bullets: [
        "Designed and delivered RESTful APIs and backend services using FastAPI, Django, and Node.js.",
        "Worked with PostgreSQL and MongoDB for data modeling and application persistence.",
        "Implemented authentication systems using JWT, Google OAuth, refresh-token revocation, and RBAC."
      ]
    },
    {
      role: "CyberOps Associate Intern",
      company: "Cisco Networking Academy",
      location: "Cairo, Egypt",
      dates: "Jul 2024 – Sep 2024",
      bullets: [
        "Studied network vulnerabilities and secure system design.",
        "Worked with HTTP/HTTPS, authentication, and client-server communication concepts."
      ]
    }
  ],
  projects: [
   {
  name: "StarDewedar",
  year: "2026",
  description:
    "A full-stack corporate management platform for a general contracting and engineering company, combining a public-facing website with a role-based administrative dashboard.",
  stack: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "React",
    "JWT",
    "Nodemailer"
  ],
  bullets: [
    "Designed a modular REST API using Controller-Service-Repository architecture to separate HTTP handling, business logic, and data access.",
    "Designed the relational database schema with PostgreSQL and Prisma, implementing JWT authentication, refresh-token rotation, and role-based access control.",
    "Developed product, category, and project management modules alongside dedicated Quote, BOQ, Site Visit, and contact request workflows.",
    "Implemented request validation, secure file-upload handling, and automated email notifications using Nodemailer."
  ],
  githubUrl: "https://github.com/AhmedFaek/StarDewedar",
  featured: true
},
    {
      name: "HirePilot",
      year: "2026",
      description:
        "An AI-driven recruitment platform designed to streamline candidate screening, interview management, and recruiter workflows.",
      stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "Redis", "ChromaDB", "React"],
      bullets: [
        "Architected a modular asynchronous FastAPI backend with layered service boundaries and role-aware access control.",
        "Built LangGraph workflows for candidate evaluation, semantic retrieval over CVs and transcripts, and real-time interview support using self-hosted Whisper and WebSockets.",
        "Integrated JWT refresh-token rotation, Google OAuth, Google Calendar and Meet workflows, and candidate follow-up question generation driven by RAG pipelines and embeddings."
      ],
      githubUrl: "https://github.com/mohamedelhelaly-ctrl/Incorta-HR.git",
      demoUrl: "https://drive.google.com/drive/u/0/mobile/folders/1Kr82_Q16f4wAnulmP3Ly2wtDhn6aD8ke?usp=drive_link"
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
