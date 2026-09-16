import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Gauge,
  Globe,
  Layers3,
  Server,
  Settings2,
} from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: Skill[];
};

export type SoftSkill = {
  title: string;
  description: string;
  icon: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "Java", icon: Braces },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: Braces },
      { name: "Python", icon: Code2 },
      { name: "C++", icon: Code2 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers3,
    items: [
      { name: "Spring Boot", icon: Server },
      { name: "React", icon: Code2 },
      { name: "Angular", icon: Layers3 },
      { name: "Next.js", icon: Globe },
      { name: "Node.js", icon: Server },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Firebase Firestore", icon: Database },
    ],
  },
  {
    title: "Tools & Practices",
    icon: Settings2,
    items: [
      { name: "REST APIs", icon: Globe },
      { name: "JWT Authentication", icon: Settings2 },
      { name: "Agile Development", icon: Gauge },
      { name: "OOP", icon: Code2 },
      { name: "Data Structures & Algorithms", icon: Braces },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      {
        name: "AWS",
        icon: Cloud,
      },
      { name: "Docker", icon: Container },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "CI/CD", icon: GitBranch },
      { name: "Linux", icon: Server },
      { name: "Nginx", icon: Server },
      { name: "Terraform", icon: Cloud },
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Problem Solving",
    description:
      "Analytical, algorithmic, and diagnostic thinking for debugging complex systems.",
    icon: "🧠",
  },
  {
    title: "Collaboration & Teamwork",
    description:
      "Experienced in Agile sprint environments and collaborative Git-based workflows.",
    icon: "🤝",
  },
  {
    title: "Adaptability & Learning",
    description:
      "Proactive in rapidly adopting new engineering frameworks, databases, and cloud technologies.",
    icon: "⚡",
  },
];