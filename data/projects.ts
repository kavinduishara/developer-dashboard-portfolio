export interface Project {
  slug: string;
  title: string;
  dateRange: string;
  githubUrl: string;
  shortDescription: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  links?: Array<{ label: string; href: string }>;
}

export const projects: Project[] = [
  {
    slug: "project-management-tool",
    title: "Project Management Tool",
    dateRange: "Aug. 2025 — Oct. 2025",
    githubUrl: "https://github.com/kavinduishara/project-management",
    shortDescription:
      "A real-time collaboration platform for task orchestration, live updates, and scalable deployment.",
    description:
      "Engineered a real-time project management platform with Next.js, Socket.IO, and MongoDB, enabling dynamic task updates and collaborative workflows.",
    problem:
      "Teams needed a responsive project workspace that could support live collaboration and quick deployment in production.",
    approach:
      "Built a modern app experience around live task synchronization, containerized services, and automated AWS deployment pipelines.",
    stack: ["Next.js", "Socket.IO", "MongoDB", "Docker", "AWS", "Nginx", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/kavinduishara/project-management" },
    ],
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
  },
];
