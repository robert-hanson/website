export const siteConfig = {
  name: 'Robert Hanson',
  title: 'Software Engineer',
  email: 'robert@example.com',
  location: 'United States',
  social: {
    github: 'https://github.com/robert-hanson',
    linkedin: 'https://www.linkedin.com/in/rbhanson/',
  },
};

export const aboutContent = {
  paragraphs: [
    "I'm a software engineer who enjoys building things that live on the internet. I care about writing clean, maintainable code and creating experiences that are both performant and delightful to use.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open source, or diving into a good book.",
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    period: '2023 - Present',
    description: 'Building and shipping features across the full stack.',
    highlights: [
      'Placeholder highlight - describe a key achievement or responsibility',
      'Placeholder highlight - mention technologies or impact metrics',
      'Placeholder highlight - note any leadership or collaboration',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Software Engineer',
    period: '2021 - 2023',
    description: 'Contributed to core product development.',
    highlights: [
      'Placeholder highlight - describe your role and contributions',
      'Placeholder highlight - mention specific projects or outcomes',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A brief description of what this project does and the problem it solves. Replace with your actual project.',
    tags: ['React', 'TypeScript', 'Node.js'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description:
      'Another project showcase. Describe the technical challenges and your approach to solving them.',
    tags: ['Python', 'PostgreSQL', 'Docker'],
    github: '#',
  },
  {
    title: 'Project Three',
    description:
      'A third project to round out the portfolio. Highlight what makes this interesting.',
    tags: ['Go', 'gRPC', 'Kubernetes'],
    github: '#',
    live: '#',
  },
];

export const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Go'],
  Frontend: ['React', 'Next.js', 'HTML/CSS', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  'Tools & Infra': ['Git', 'Docker', 'AWS', 'CI/CD'],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
