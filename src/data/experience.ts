export interface ExperienceItem {
  number: string;
  position: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    number: '01',
    position: 'FULL-STACK DEVELOPMENT INTERN',
    company: 'Zephyr',
    location: 'Mangalore, Karnataka',
    date: 'Aug 2026 — Jan 2027',
    description: [
      'Developed 3+ web application modules using the MERN stack.',
      'Built responsive and component-based interfaces using React.js.',
      'Built and integrated 5+ RESTful API endpoints using Node.js and Express.js.',
      'Used MongoDB for structured data storage and management.',
      'Used Git and GitHub for version control.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Git', 'GitHub'],
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  cgpa: string;
  location: string;
}

export const education: EducationItem = {
  institution: 'St. Philomena College, Puttur',
  degree: 'BCA',
  date: 'Sep 2023 — Jun 2026',
  cgpa: '7.2',
  location: 'Puttur, Karnataka',
};

export const languages: string[] = ['English', 'Hindi', 'Kannada', 'Tulu', 'Konkani'];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '3+', label: 'Web application modules' },
  { value: '5+', label: 'REST API endpoints' },
];
