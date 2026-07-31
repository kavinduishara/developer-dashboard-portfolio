export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "DI11 Soft",
    role: "Software Engineering Intern",
    dateRange: "Oct. 2025 — May 2026",
    location: "Remote",
    bullets: [
      "Developed and enhanced frontend features across 6 enterprise applications (2 Angular and 4 React projects), building reusable components and implementing responsive user interfaces.",
      "Contributed to Angular application modernization efforts by implementing Progressive Web App (PWA) features, including service workers, caching strategies, and performance improvements.",
      "Collaborated with development teams in Agile sprints to deliver frontend functionality, integrate REST APIs, perform debugging, and maintain Git-based development workflows.",
      "Worked across cross-functional teams, coordinating with QA engineers on test coverage and defect triage and with business analysts to clarify requirements during sprint planning.",
    ],
    tech: ["Angular", "React", "REST APIs", "Git", "Agile"],
  },
];
