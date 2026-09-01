export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  fullTitle: string;
  role: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 'job-portal',
    number: '01',
    category: 'WEB APPLICATION',
    title: 'JOB PORTAL',
    fullTitle: 'Job Portal Web Application',
    role: 'Lead Developer',
    date: 'Aug 2026 — Sep 2026',
    description:
      'A responsive job portal application designed for job seekers and employers.',
    features: [
      'User registration',
      'Login / authentication',
      'Job posting',
      'Job search',
      'Job application management',
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'ecommerce',
    number: '02',
    category: 'E-COMMERCE',
    title: 'E-COMMERCE',
    fullTitle: 'E-Commerce Web Application',
    role: 'Lead Developer',
    date: 'Aug 2026 — Sep 2026',
    description:
      'A responsive e-commerce web application featuring product browsing, product details, shopping cart, authentication and order management.',
    features: [
      'Product browsing',
      'Product details',
      'Shopping cart',
      'User authentication',
      'Order management',
      'Product operations',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    githubUrl: '#',
    liveUrl: '#',
  },
];
