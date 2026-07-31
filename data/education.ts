export interface EducationEntry {
  school: string;
  period: string;
  degree: string;
  location: string;
  coursework: string[];
}

export const education: EducationEntry[] = [
  {
    school: "University of Jaffna",
    period: "2022 — Present",
    degree: "B.Sc. Engineering (Hons.) in Computer Engineering",
    location: "Sri Lanka",
    coursework: [
      "Software Engineering",
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Software Construction",
      "Operating Systems",
      "Computer Networks & Security",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
];
