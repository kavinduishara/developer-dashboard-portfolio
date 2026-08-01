export const projects: Project[] = [
  {
    slug: "project-management-tool",
    title: "Project Management Tool",
    dateRange: "Aug. 2025 — Oct. 2025",
    githubUrl: "https://github.com/kavinduishara/project-management",
    liveUrl: "https://app.kavindu.dev", 
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