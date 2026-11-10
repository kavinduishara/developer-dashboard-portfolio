type ProjectLink = {
  label: string;
  href: string;
};

type ProjectDetail = {
  title: string;
  description: string;
};

type ProjectSpec = {
  label: string;
  value: string;
};

type Project = {
  slug: string;
  title: string;
  dateRange: string;
  githubUrl: string;
  liveUrl?: string;
  heroImage?: string;
  shortDescription: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  links: ProjectLink[];
  specs: ProjectSpec[];
  features?: ProjectDetail[];
  codeSnippet?: string;
  deepDive?: ProjectDetail[];
};

export const projects: Project[] = [
    {
  slug: "task-manager-application",
  title: "Task Manager Application",
  dateRange: "Aug. 2026 — Sep. 2026",
  githubUrl: "https://github.com/kavinduishara/task-manager-back-end",
  liveUrl: "http://pmtool.ddnsking.com/",

  shortDescription:
    "A full-stack task management platform with role-based access control, automated deployment, and cloud infrastructure.",

  description:
    "Developed a full-stack task management application using Next.js, Node.js, Express, and MongoDB, with JWT authentication, role-based access control, and automated deployment to AWS EC2.",

  problem:
    "Teams need a structured way to manage tasks while controlling user permissions and maintaining reliable application deployments. Manual deployment and operational checks can increase maintenance effort and the risk of deployment issues.",

  approach:
    "I developed a task management platform with JWT-based authentication and role-based authorization. I implemented REST APIs for task and user management, then automated deployment and application health checks using Bash scripts and cron jobs. The application was containerized with Docker and deployed to AWS EC2 using Terraform, Nginx, and GitHub Actions CI/CD.",

  stack: [
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Docker",
    "Bash",
    "Cron",
    "Nginx",
    "AWS EC2",
    "Terraform",
    "GitHub Actions"
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/kavinduishara/task-manager-back-end"
    }
  ],

  specs: [
    { label: "Frontend", value: "Next.js" },
    { label: "Backend", value: "Node.js & Express" },
    { label: "Database", value: "MongoDB Atlas" },
    { label: "Authentication", value: "JWT & RBAC" },
    { label: "Containerization", value: "Docker" },
    { label: "Cloud", value: "AWS EC2" },
    { label: "Infrastructure", value: "Terraform" },
    { label: "CI/CD", value: "GitHub Actions" }
  ],

  features: [
  {
    title: "Role-Based Access Control",
    description:
      "Implemented JWT authentication and role-based authorization to control access to task and user management operations."
  },
  {
    title: "Task Management",
    description:
      "Developed REST APIs for task creation, assignment, editing, deletion, and status management with authorization rules."
  },
  {
    title: "Bash Deployment Automation",
    description:
      "Developed Bash scripts to automate application deployment, including pulling updated Docker images, managing containers, and performing application health checks."
  },
  {
    title: "Cron-Based Maintenance",
    description:
      "Configured cron jobs to execute scheduled maintenance and automated operational tasks, reducing the need for manual intervention."
  },
  {
    title: "Cloud Deployment & CI/CD",
    description:
      "Provisioned AWS EC2 infrastructure using Terraform and deployed containerized services with Docker, Nginx, and GitHub Actions CI/CD."
  }
],

  codeSnippet: `# Build and run containers
docker compose up --build -d

# Check application health
curl -f http://localhost:3000/health

# View running containers
docker ps

# View application logs
docker logs <container_name>`,

deepDive: [
  {
    title: "Bash Scripting & Deployment Automation",
    description:
      "Developed Bash scripts to automate deployment workflows and application health checks. Used shell commands, conditional logic, and exit status handling to execute operational tasks and identify application failures."
  },
  {
    title: "Cron Job Scheduling",
    description:
      "Configured Linux cron jobs to schedule recurring maintenance and automated tasks. Used crontab scheduling expressions to control execution frequency and reduce manual operational work."
  },
  {
    title: "Infrastructure & Deployment",
    description:
      "Provisioned AWS EC2 infrastructure using Terraform and deployed the application using Docker, Nginx, and GitHub Actions. Nginx was configured as a reverse proxy for application traffic."
  },
  {
    title: "Security & Authorization",
    description:
      "Implemented JWT authentication and role-based access control with authorization rules governing task creation, assignment, editing, and deletion."
  }
]
},
  {
    slug: "project-management-tool",
    title: "Project Management Tool",
    dateRange: "Aug. 2025 — Oct. 2025",
    githubUrl: "https://github.com/kavinduishara/project-management",
    liveUrl: "", 
    shortDescription:
      "A real-time collaboration platform for task orchestration, live updates, and scalable deployment.",
    description:
      "Engineered a real-time project management platform with Next.js, Socket.IO, and MongoDB, enabling dynamic task updates and collaborative workflows.",
    problem:
      "Modern teams face significant latency issues when collaborating on complex workflows. Legacy tools often require manual refreshes, leading to data siloing and project desynchronization.",
    approach:
      "I developed this full-stack solution to prioritize real-time synchronization. Utilizing Socket.IO for bi-directional communication, the application ensures that every task update, comment, and status change is propagated instantly across all connected clients without page reloads.",
    stack: ["Next.js", "Socket.IO", "MongoDB", "Docker", "AWS", "Nginx", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/kavinduishara/project-management" },
    ],
    specs: [
      { label: "Frontend", value: "Next.js (App Router)" },
      { label: "Backend", value: "Node.js & Express" },
      { label: "Database", value: "MongoDB Atlas" },
      { label: "Real-time", value: "Socket.IO" },
      { label: "Cloud", value: "AWS (S3, EC2)" }
    ],
    features: [
      {
        title: "Dynamic Updates",
        description: "Instantaneous state management using React Query and Socket.IO for seamless data flow."
      },
      {
        title: "Collaboration",
        description: "Multi-user task assignment and shared workspace environments with RBAC security."
      },
      {
        title: "Automated CI/CD",
        description: "Fully integrated pipeline using GitHub Actions, automating testing, container building, and deployment to AWS EC2 instances."
      }
    ],
    codeSnippet: `# Containerizing application\ndocker-compose up --build -d\n\n# Setting up Reverse Proxy\nsudo ln -s /etc/nginx/sites-available/pm-tool /etc/nginx/sites-enabled/\n\n# SSL Setup\ncertbot --nginx -d app.kavindu.dev\n\nsystemctl restart nginx_`,
    deepDive: [
      {
        title: "Infrastructure",
        description: "The application is containerized using Docker, ensuring environment parity from development to production. I configured an Nginx reverse proxy on a Linux-based AWS instance to handle incoming traffic, manage SSL termination, and optimize load balancing for high-traffic scenarios."
      },
      {
        title: "Data Integrity",
        description: "To maintain data consistency during concurrent edits, I implemented optimistic UI updates combined with server-side validation. MongoDB transactions are utilized for critical workflow changes to prevent race conditions during heavy collaborative sessions."
      }
    ]
  },

  {
    slug: "multi-store-pos",
    title: "Multi-Store POS",
    dateRange: "Jan. 2025 — Jul. 2025",
    githubUrl: "https://github.com/kavinduishara/pos",
    shortDescription:
      "A retail management system with secure authorization, billing workflows, and inventory dashboards.",
    description:
      "Architected a retail management system with Spring Boot and React, incorporating role-based access control, billing workflows, inventory operations, and analytical dashboards.",
    problem:
      "Store operations needed a secure and intuitive system for managing sales, users, and inventory across multiple branches.",
    approach:
      "Implemented secure JWT-based authentication, modular APIs, and a polished React frontend tuned for product workflows.",
    stack: ["Spring Boot", "React", "PostgreSQL", "JWT", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/kavinduishara/pos" },
    ],
    specs: [
      { label: "Frontend", value: "React & Tailwind CSS" },
      { label: "Backend", value: "Spring Boot (Java)" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Security", value: "Spring Security & JWT" }
    ],
    features: [
      {
        title: "Granular Security (RBAC)",
        description: "Robust role-based access control ensuring managers, cashiers, and admins only interact with authorized endpoints and UI states."
      },
      {
        title: "Automated Billing & Sales",
        description: "High-throughput checkout system that handles transactional computation and inventory updates concurrently."
      },
      {
        title: "Analytical Dashboard",
        description: "Real-time metrics visualization reflecting stock levels, sales velocity, and multi-branch operational performance."
      }
    ],
    deepDive: [
      {
        title: "Stateless Security Architecture",
        description: "Leveraged Spring Security combined with stateless JSON Web Tokens (JWT) to protect REST API endpoints. This architecture minimizes database round-trips for authorization queries while safeguarding sensitive retail data."
      },
      {
        title: "Data Auditing & Branch Management",
        description: "Configured PostgreSQL with structural indexing and foreign key constraints optimized for multi-branch isolation, guaranteeing that inventory valuations and transaction metrics remain consistent across overlapping point-of-sale operational shifts."
      }
    ]
  },
  {
    slug: "academic-records-management-system",
    title: "Academic Records Management System",
    dateRange: "Jan. 2025 — May 2025",
    githubUrl: "https://github.com/JHansiduYapa/University-Administrative-Automation-System-for-Management-Assistant",
    shortDescription:
      "A university administration platform for student records, courses, and GPA processes.",
    description:
      "Designed backend services and relational database models using Spring Boot and PostgreSQL to support university academic record management and deliver REST API endpoints for student records and GPA workflows.",
    problem:
      "Administrative workflows needed a structured system for academic record management without relying on manual processes.",
    approach:
      "Modeled relational data carefully and connected it to a React UI through secure, purpose-built REST endpoints.",
    stack: ["Spring Boot", "React", "PostgreSQL"],
    links: [
      { label: "GitHub", href: "https://github.com/JHansiduYapa/University-Administrative-Automation-System-for-Management-Assistant" },
    ],
    specs: [
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Spring Boot" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Architecture", value: "REST APIs" }
    ],
    features: [
      {
        title: "Academic Track System",
        description: "Comprehensive records processing tracking student lifecycle milestones, course enrollments, and organizational progression."
      },
      {
        title: "GPA Engine",
        description: "Automated workflow calculations parsing course credit factors and grading inputs to deliver instant, audit-ready GPA figures."
      },
      {
        title: "Administrative Controls",
        description: "Tailored UI workflows providing administrative assistants with unified, batch-processing dashboards for complex record modifications."
      }
    ],
    deepDive: [
      {
        title: "Relational Modeling Validation",
        description: "Designed strict normalization rules within PostgreSQL to balance complex relationship handling between students, courses, terms, and final grading schemas, preventing anomaly generation during batch data modifications."
      },
      {
        title: "Business Logic Encapsulation",
        description: "Isolated critical academic rule evaluations inside Spring Boot service layers. This ensures that GPA calculations, prerequisite validations, and core data processing constraints are enforced uniformly, independent of client-side operations."
      }
    ]
  },
  {
  slug: "e-commerce-platform",
  title: "E-Commerce Platform",
  dateRange: "Add your project dates",
  githubUrl: "https://github.com/kavinduishara/e-commerce-platform",
  shortDescription:
    "A backend platform for managing products, categories, user accounts, and customer orders.",
  description:
    "Built REST API services with NestJS, Prisma, and PostgreSQL to support customer and merchant workflows, including authentication, product catalog management, and order processing.",
  problem:
    "Online store operations need a reliable way to manage product inventory and customer orders while separating customer and merchant access.",
  approach:
    "Structured the application into NestJS modules and modeled users, products, categories, and orders in PostgreSQL with Prisma.",
  stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/kavinduishara/e-commerce-platform",
    },
  ],
  specs: [
    { label: "Backend", value: "NestJS" },
    { label: "Language", value: "TypeScript" },
    { label: "Database", value: "PostgreSQL" },
    { label: "ORM", value: "Prisma" },
    { label: "Architecture", value: "REST APIs" },
  ],
  features: [
    {
      title: "Authentication and Roles",
      description:
        "Supports customer and merchant registration, login with JWT authentication, and role-based access to protected operations.",
    },
    {
      title: "Product and Category Management",
      description:
        "Provides public product and category browsing, with merchant-protected endpoints for creating, updating, and removing catalog entries.",
    },
    {
      title: "Order Processing",
      description:
        "Creates orders with item and price details, checks product stock, and updates inventory as part of a database transaction.",
    },
  ],
  deepDive: [
    {
      title: "Transactional Order Creation",
      description:
        "Processes each order within a Prisma transaction, validating product availability and decrementing stock before saving the order and its items.",
    },
    {
      title: "Role-Based API Access",
      description:
        "Uses JWT authentication and role checks to distinguish customer actions, such as placing and viewing orders, from merchant order and catalog operations.",
    },
  ],
},{
  slug: "microservices-order-processing",
  title: "Microservices-Based Order Processing System",
  dateRange: "Sep. 2026 – Present",
  githubUrl: "https://github.com/kavinduishara/order-processing",
  shortDescription:
    "An event-driven order processing system built as Spring Boot microservices, coordinated with Kafka and secured behind an OAuth2 API gateway.",
  description:
    "Built a Spring Boot microservices system where order workflows are coordinated through Kafka events using saga choreography, with Google OAuth2 authentication enforced at the API gateway.",
  problem:
    "Processing an order touches several independent services, and a single failure should not leave the system in an inconsistent state. A monolith or tightly coupled synchronous calls make this brittle and hard to scale.",
  approach:
    "Split the domain into independent Spring Boot services that communicate through Kafka events, coordinating the order workflow with saga choreography instead of a central orchestrator, and placed an API gateway in front to handle authentication.",
  stack: ["Java", "Spring Boot", "Kafka", "OAuth2", "Microservices"],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/kavinduishara/order-processing",
    },
  ],
  specs: [
    { label: "Backend", value: "Spring Boot" },
    { label: "Language", value: "Java" },
    { label: "Messaging", value: "Apache Kafka" },
    { label: "Auth", value: "Google OAuth2" },
    { label: "Architecture", value: "Microservices, Saga Choreography" },
  ],
  features: [
    {
      title: "Event-Driven Order Workflow",
      description:
        "Services react to Kafka events to move an order through its lifecycle, so each service stays loosely coupled and can evolve independently.",
    },
    {
      title: "Secured API Gateway",
      description:
        "All client access goes through a single gateway that authenticates users with Google OAuth2 before requests reach the downstream services.",
    },
    {
      title: "Independent Microservices",
      description:
        "The system is split into separate Spring Boot services with their own responsibilities, so they can be developed, deployed and scaled on their own.",
    },
  ],
  deepDive: [
    {
      title: "Saga Choreography",
      description:
        "Each service publishes events after completing its local step and reacts to the events of others, with no central coordinator. This keeps distributed order processing consistent without distributed transactions.",
    },
    {
      title: "Gateway-Level Authentication",
      description:
        "Handling Google OAuth2 at the API gateway means authentication is enforced in one place instead of being repeated in every service.",
    },
  ],
},
  {
    slug: "real-time-video-calling-app",
    title: "Real-Time Video Calling App",
    dateRange: "Apr. 2025 — Jun. 2025",
    githubUrl: "https://github.com/kavinduishara/webrtc",
    shortDescription:
      "A WebRTC-based communication app with peer-to-peer video streaming and live document sync.",
    description:
      "Established a WebRTC peer-to-peer communication system supporting real-time video streaming and document synchronization, with Firebase Firestore for signaling and data exchange.",
    problem:
      "The goal was to create a lightweight real-time communication experience with low-friction peer setup.",
    approach:
      "Used WebRTC for direct media exchange and Firestore to coordinate signaling and state updates between clients.",
    stack: ["WebRTC", "Firebase Firestore", "JavaScript", "React"],
    links: [
      { label: "GitHub", href: "https://github.com/kavinduishara/webrtc" },
    ],
    specs: [
      { label: "Frontend", value: "React (JavaScript)" },
      { label: "Signaling & State", value: "Firebase Firestore" },
      { label: "Protocols", value: "WebRTC (STUN/TURN)" },
      { label: "Streaming Types", value: "Audio, Video, & Object Data" }
    ],
    features: [
      {
        title: "Peer-to-Peer Media",
        description: "High-quality, low-latency audio/video streaming directly between connected browser instances via native WebRTC pathways."
      },
      {
        title: "Firestore Signaling",
        description: "Serverless handshake setup utilizing real-time Firestore listeners to rapidly exchange SDP offers, answers, and ICE candidates."
      },
      {
        title: "Live Document Sync",
        description: "Simultaneous collaboration space allowing users to cross-reference data and keep document states synchronized during active video calls."
      }
    ],
    deepDive: [
      {
        title: "WebRTC Handshake Management",
        description: "Leveraged Firestore's event-driven document streams to orchestrate complex connection setups. Handshakes systematically catch incoming network changes, ensuring resilient peer initialization across uneven NAT configurations."
      },
      {
        title: "Media Framework Optimization",
        description: "Configured stream manipulation strategies using React hooks to manage local media tracks safely. This structure handles programmatic device changes, audio toggles, and screen configurations dynamically without breaking established streams."
      }
    ]
  }
];
