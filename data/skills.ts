export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SoftSkill {
  title: string;
  description: string;
  icon: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "React", "Angular", "Next.js", "Node.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Tools & Practices",
    items: ["REST APIs", "JWT Authentication", "Agile Development", "OOP", "Data Structures & Algorithms"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, CloudFront, RDS, IAM, ALB)", "Docker", "GitHub Actions", "CI/CD", "Linux", "Nginx", "Terraform"],
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Problem Solving",
    description: "Analytical, algorithmic, and diagnostic thinking for debugging complex systems.",
    icon: "🧠",
  },
  {
    title: "Collaboration & Teamwork",
    description: "Experienced in Agile sprint environments and collaborative Git-based workflows.",
    icon: "🤝",
  },
  {
    title: "Adaptability & Learning",
    description: "Proactive in rapidly adopting new engineering frameworks, databases, and cloud technologies.",
    icon: "⚡",
  },
];
