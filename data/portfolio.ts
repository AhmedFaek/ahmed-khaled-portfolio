export type NavItem = {
  label: string;
  href: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseStudySection = {
  heading: string;
  intro?: string;
  bullets?: string[];
  table?: { label: string; value: string }[];
  diagram?: {
    src?: string;
    alt: string;
    caption: string;
  };
  screenshots?: Screenshot[];
  implemented?: string[];
  planned?: string[];
  videoUrl?: string;
};

export type ProjectCaseStudy = {
  overview: string[];
  facts?: { label: string; value: string }[];
  sections: CaseStudySection[];
};

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  year: string;
  badges: string[];
  description: string;
  stack: string[];
  bullets: string[];
  githubUrl: string;
  githubNote?: string;
  demoUrl?: string;
  demoNote?: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
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
};

export const portfolio: PortfolioData = {
  name: "Ahmed Khaled",
  title: "Backend Engineer",
  location: "Cairo, Egypt",
  summary:
    "Backend Engineer focused on backend systems, APIs, databases, authentication, and AI-powered software. I work across backend architecture, scalable service design, and applied AI workflows.",
  heroTagline: "Backend engineer building secure APIs and AI-powered workflows.",
  about: [
    "I am Ahmed Khaled, a Computer Engineering graduate from Ain Shams University focused on backend engineering, API design, authentication, and AI-powered workflows.",
    "My work centers on backend services, database-driven applications, secure authentication systems, and applied AI features in practical business workflows, with full-stack collaboration when needed.",
    "I have contributed to the HirePilot and StarDewedar projects, and I am open to backend / AI-backend roles."
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
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
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "RESTful APIs",
    "JWT Authentication",
    "Google OAuth",
    "RBAC",
    "WebSockets",
    "LangGraph",
    "RAG Pipelines",
    "Vector Search",
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
  opportunityBadge: "Open to backend / AI-backend roles",
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
        "Designed and delivered RESTful APIs and backend services for client projects using FastAPI, Django, and Node.js with PostgreSQL and MongoDB.",
        "Implemented JWT authentication, Google OAuth, refresh-token revocation, and role-based access control (RBAC) across multiple client projects."
      ]
    },
    {
      role: "CyberOps Associate Intern",
      company: "Cisco Networking Academy",
      location: "Cairo, Egypt",
      dates: "Jul 2024 – Sep 2024",
      bullets: [
        "Analyzed network vulnerabilities and applied secure system design concepts covering HTTP/HTTPS protocols, authentication, and client-server communication across a 3-month structured cybersecurity program."
      ]
    }
  ],
  projects: [
    {
      slug: "hirepilot",
      name: "HirePilot",
      subtitle: "AI Recruitment Platform",
      year: "2025 – 2026",
      badges: ["Graduation Project", "A+", "Team Project"],
      description:
        "AI-powered recruitment platform for enterprise HR teams covering candidate screening, assessment management, and interview workflows.",
      stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "ChromaDB", "React"],
      bullets: [
        "Contributed to the asynchronous FastAPI backend architecture and REST API development for a team-built, AI-powered recruitment platform, integrating application services with stateful LangGraph workflows for CV screening, interview scheduling, and candidate re-ranking.",
        "Developed Google OAuth authorization and Google Calendar integration to manage interviewer availability and automate interview scheduling.",
        "Contributed to a real-time interview copilot that combines WebSockets, Whisper speech-to-text, and LLM-generated contextual follow-up questions.",
        "Worked on RAG-based conversational candidate search using ChromaDB and embedding models for semantic retrieval over CVs and interview transcripts, and integrated frontend and backend for candidate management workflows."
      ],
      githubUrl: "https://github.com/mohamedelhelaly-ctrl/Incorta-HR.git",
      githubNote: "Team repository",
      demoUrl: "https://drive.google.com/drive/u/0/mobile/folders/1Kr82_Q16f4wAnulmP3Ly2wtDhn6aD8ke?usp=drive_link",
      demoNote: "Project walkthrough",
      featured: false,
      caseStudy: {
overview: [
  "HirePilot helps enterprise HR teams take candidates from CV to hiring decision. It screens and ranks CVs with AI, schedules interviews through Google Calendar, and supports recruiters during live interviews with transcription and suggested follow-up questions. Recruiters can also search their candidates in natural language."
],
facts: [
  { label: "My role", value: "Backend contributor: FastAPI API, Google OAuth and Calendar scheduling, frontend/backend integration" },
  { label: "Year", value: "2025–2026" },
  { label: "Team", value: "5" }
],
        sections: [
          {
            heading: "What I built vs. what the team built",
            intro:
              "The project combined a shared platform with individual engineering contributions. My work was focused on the API layer, OAuth scheduling flow, candidate management integration, and real-time interview support.",
            bullets: [
              "My contributions: contributed to FastAPI backend architecture and REST API development; Google OAuth authorization; Google Calendar integration for interviewer availability and automated interview scheduling; frontend/backend integration for candidate management workflows; contributed to the real-time interview copilot and the RAG candidate search.",
              "Team / platform features: stateful LangGraph orchestration, Whisper transcription pipeline, CV screening and ranking, batch re-evaluation."
            ]
          },
          {
            heading: "System overview",
            diagram: {
              alt: "Diagram showing the hirepilot workflow from CV screening to interview scheduling and candidate reranking.",
              caption: "LangGraph-driven screening, assessment dispatch, interview scheduling, live interview, RAG queries, and candidate re-ranking connected through the API layer.",
              src: "/images/hirepilot/ChatGPT Image Jul 6, 2026, 08_38_02 PM.png"
            }
          },
          {
            heading: "Deep dive on my part",
            intro:
              "I contributed to the backend and integration layer that connected candidate workflows, recruiter actions, and live interview tooling.",
            bullets: [
              "The OAuth and Google Calendar flow handled interviewer availability and scheduling triggers.",
              "Candidate management workflows connected the API layer to frontend actions and backend state transitions.",
              "The real-time interview copilot blended live transcription, WebSockets, and contextual follow-up prompts."
            ]
          },
          {
            heading: "Platform features list",
            bullets: [
              "AI-powered CV screening and candidate ranking.",
              "Batch candidate re-evaluation using assessment and interview results.",
              "RAG-powered conversational candidate search.",
              "Google Calendar interview scheduling.",
              "Real-time interview transcription and AI-assisted evaluation."
            ]
          },
          {
            heading: "Screenshots gallery",
            screenshots: [
              {
                src: "/images/hirepilot/ChatGPT Image Jul 6, 2026, 08_38_02 PM.png",
                alt: "System overview diagram for the HirePilot recruitment platform showing candidate processing, assessment, scheduling, and interview workflows.",
                caption: "High-level platform flow across candidate processing, screening, interviews, and recruiter decision support."
              }
            ]
          },
          {
            heading: "Demo video",
            videoUrl: "/images/hirepilot/HirePilot-Showcase-Jul-6-21-44-18.mp4"
          }
        ]
      }
    },
    {
      slug: "stardewedar",
      name: "StarDewedar",
      subtitle: "Corporate Management Platform",
      year: "2026",
      badges: ["Client Project", "Full-stack"],
      description:
        "Bilingual corporate website and admin dashboard for a general contracting and engineering company.",
      stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "React"],
      // Used for the home-page teaser and CV sync only; the case study page does not render these.
      bullets: [
        "Built the backend for a bilingual corporate website and admin dashboard for a general contracting and engineering company, using a modular Controller-Service-Repository architecture with Node.js, Express.js, Prisma ORM, and PostgreSQL.",
        "Implemented JWT authentication with refresh-token rotation and role-based access control (RBAC) across three admin roles (Super Admin, Catalog Manager, Sales/Support), with controlled admin account creation instead of public registration.",
        "Developed product, category, and project management modules, plus separate Quote, BOQ, Site Visit, and contact-message workflows, each with its own data model and request validation.",
        "Implemented secure file uploads with MIME-type and size validation, external image storage on Cloudinary, and automated Nodemailer email notifications, and integrated the APIs with the React public site and admin dashboard."
      ],
      githubUrl: "https://github.com/AhmedFaek/StarDewedar.git",
      featured: true,
      caseStudy: {
        overview: [
          "A bilingual public website and administrative dashboard that lets a general contracting and engineering company manage its business content and handle customer inquiries and service requests."
        ],
        facts: [
          { label: "Role", value: "Full-Stack Developer (individual project)" },
          { label: "Year", value: "2026" },
          { label: "Focus", value: "Backend architecture, API development, database design, authentication and authorization, frontend integration" },
          { label: "Stack", value: "Node.js, Express.js, PostgreSQL, Prisma, React" }
        ],
        sections: [
          {
            heading: "Backend architecture",
            intro:
              "I structured the backend as a modular layered architecture. Separating responsibilities makes the codebase easier to maintain, test, extend, and reason about as business requirements grow.",
            bullets: [
              "Routes: define the API endpoints and connect them to the right controllers.",
              "Controllers: handle HTTP requests and responses.",
              "Services: contain the business logic and coordinate operations.",
              "Repositories: handle database access and queries.",
              "Middleware: handle authentication, authorization, validation, and other request-level concerns.",
              "Utilities: hold reusable functionality shared across modules."
            ]
          },
          {
            heading: "Authentication and authorization",
            intro:
              "Access is protected with JWT access tokens and refresh-token rotation. Role-specific permissions are enforced on the backend, and administrator accounts are created in a controlled way instead of through public registration.",
            table: [
              { label: "Super Admin", value: "Full administrative access." },
              { label: "Catalog Manager", value: "Manages products and categories." },
              { label: "Sales / Support", value: "Handles customer inquiries and Quote, BOQ, and Site Visit requests." }
            ],
            diagram: {
              alt: "Flowchart of StarDewedar's authentication and RBAC lifecycle across four stages: account provisioning (Super Admin creating verified staff accounts via POST /api/auth/create-user versus public customer registration with 6-digit email verification), login issuing a 15-minute JWT access token and a 7-day refresh token stored as a bcrypt hash in PostgreSQL, protected request verification loading the live user role from the database before enforcing RBAC permissions (separating 401 Unauthorized from 403 Forbidden), and refresh token rotation that invalidates the previous refresh token hash on every refresh.",
              caption: "JWT authentication, live-database RBAC verification, and bcrypt-hashed refresh token rotation in StarDewedar.",
              src: "/images/stardewedar/diagrams/stardewedar-auth-flow.svg"
            }
          },
          {
            heading: "Business modules and workflows",
            intro:
              "The system implements business functionality rather than plain CRUD. Customer requests are separate workflows, each with its own data and handling requirements, not one generic contact form.",
            bullets: [
              "Products and categories: create, update, and delete, with product images and related catalog information.",
              "Projects: create and manage company projects and their images, which the public website displays.",
              "Customer requests: Quote, BOQ, Site Visit, and Contact message workflows."
            ],
            diagram: {
              alt: "Workflow diagram showing how customer Quote, Site Visit, and BOQ requests (each handled by a dedicated route, service, and Prisma table) pass through rate limiting, bounded multipart parsing, Cloudflare Turnstile verification, Zod schema parsing, and byte-level file inspection before uploading attachments to Cloudinary with rollback cleanup, saving to PostgreSQL with status 'pending', sending an HTML alert email via Nodemailer, and appearing in the Admin Requests inbox for Sales/Support Managers and Super Admins.",
              caption: "Customer Quote, Site Visit, and BOQ request lifecycle from submission and validation to admin triage.",
              src: "/images/stardewedar/diagrams/stardewedar-request-workflow.svg"
            }
          },
          {
            heading: "File upload and asset handling",
            intro:
              "File uploads need more than receiving a file, so uploads pass through dedicated middleware before anything is stored.",
            bullets: [
              "Validation of file type and MIME type, plus file size limits.",
              "Uploaded assets are associated with products and projects.",
              "Images are stored externally on Cloudinary."
            ],
            diagram: {
              alt: "Dual-path flowchart of StarDewedar's file upload pipeline comparing (A) public customer uploads (Quote, Visit, and BOQ requests) with total-body byte caps, bounded memory streaming, extension/MIME filtering, deep byte-level structure inspection via Sharp, CFB, and Yauzl, and Cloudinary rollback cleanup, against (B) admin Product and Project uploads via Multer memoryStorage, Cloudinary upload_stream, and persistence of secure_url in ProductImage, ProductCatalog, and ProjectImage tables.",
              caption: "Multi-layered file validation, Cloudinary streaming upload, and database persistence pipeline.",
              src: "/images/stardewedar/diagrams/stardewedar-upload-flow.svg"
            }
          },
          {
            heading: "Email notifications",
            intro:
              "I integrated Nodemailer to send automated email notifications for customer submissions and request workflows. Email delivery is an external dependency, so a successful database write does not guarantee that the email is delivered."
          },
          {
            heading: "Database design",
            intro:
              "I designed the relational data model with PostgreSQL and Prisma. The diagram shows the main entities and their relationships, without listing every field.",
            diagram: {
              alt: "Entity-Relationship diagram of StarDewedar's 15 PostgreSQL Prisma models showing primary and foreign keys and cardinalities across User, Category, Product, ProductImage, ProductCatalog, SavedProduct, Project, ProjectImage, QuoteRequest, VisitRequest, BOQRequest, ContactMessage, Conversation, Message, and AnalyticsSession.",
              caption: "PostgreSQL database schema (15 Prisma models) with primary/foreign keys and relationship cardinalities.",
              src: "/images/stardewedar/diagrams/stardewedar-er-diagram.svg"
            }
          },
          {
            heading: "Frontend and backend integration",
            intro:
              "Although the project focuses on the backend, I connected the APIs to a working React application.",
            bullets: [
              "Public website pages are integrated with the backend APIs.",
              "The admin dashboard is integrated with protected admin operations.",
              "Customer request forms feed the backend workflows, and API validation errors and responses are handled in the UI."
            ]
          },
          {
            heading: "Engineering challenges and decisions",
            table: [
              { label: "Maintainable backend architecture", value: "Separation of concerns and modular design." },
              { label: "Refresh-token rotation and RBAC", value: "Authentication and security." },
              { label: "Multiple customer request workflows", value: "Business logic and data modeling." },
              { label: "File uploads and external asset storage", value: "Integration and reliability." },
              { label: "Email notifications", value: "External service integration." },
              { label: "Database and external-service consistency", value: "Reliability engineering; an ongoing challenge (see planned work)." }
            ]
          },
          {
            heading: "Implemented vs. planned",
            implemented: [
              "JWT access tokens with refresh-token rotation",
              "Role-based access control with three admin roles",
              "Controlled admin account creation",
              "Product, category, and project management",
              "Separate Quote, BOQ, Site Visit, and Contact message workflows",
              "Validated file uploads with Cloudinary storage",
              "Nodemailer email notifications",
              "Bilingual public website and admin dashboard integration"
            ],
            planned: [
              "Admin retry mechanism for failed emails, with status updates after confirmation.",
              "Better upload/delete reliability, including ambiguous upload/deletion outcomes and database-to-Cloudinary synchronization."
            ]
          },
          {
            heading: "Screenshots gallery",
            screenshots: [
              {
                src: "/images/stardewedar/public-home-en.webp",
                alt: "English public landing page for StarDewedar with company overview, service highlights, and request CTA.",
                caption: "Public-facing homepage in English, showing the main company presentation and customer entry points."
              },
              {
                src: "/images/stardewedar/admin-dashboard.webp",
                alt: "Admin dashboard overview for StarDewedar with request summaries and management controls.",
                caption: "Administrative dashboard for monitoring and managing business content and customer workflows."
              },
              {
                src: "/images/stardewedar/admin-products.webp",
                alt: "StarDewedar admin product catalog management screen showing products, categories, and inventory actions.",
                caption: "Product catalog management from the admin side of the platform."
              },
              {
                src: "/images/stardewedar/public-request-form.webp",
                alt: "Customer request form for StarDewedar showing quote, site visit, and BOQ submission inputs.",
                caption: "Public-facing customer request form for quote and site-visit workflows."
              }
            ]
          }
        ]
      }
    }
  ]
};
