export const profileData = {
  name: 'Thomas Rhodes',
  title: 'Senior Software Engineer',
  avatar: '/avatar.png',
  email: 'twinlightcat@pm.me',
  location: 'Chandler, AZ',
  social: {
    github: 'https://github.com/trhodes-godaddy',
    githubPersonal: 'https://github.com/twinlightcat',
    linkedin: 'https://www.linkedin.com/in/thomas-rhodes-8785b2a4',
  },
};

export const aboutData = {
  description: [
    'I am a full-stack engineer with over 13 years of hands-on experience in customer-facing applications, platform engineering, and developer productivity tools. At GoDaddy and PayPal, I improved user experiences at scale, built internal developer platforms, and created efficient CI/CD systems that empowered teams and accelerated delivery.',
    'I believe in a strong product mindset and always prioritize the end-user experience. I’m deeply passionate about UX, design systems, elegant APIs, cloud-native architectures, and DevOps. As a lifelong learner, I’m currently diving into AI, experimenting with React chat interfaces, tool-calling patterns, and MCP servers.',
  ],
  services: [
    {
      icon: 'PenTool',
      title: 'Frontend Development',
      description:
        'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Code',
      title: 'Backend Development',
      description:
        'Creating robust APIs and server-side solutions with TypeScript/Node.js and the occasional GoLang.',
    },
    {
      icon: 'Server',
      title: 'Infrastructure Engineering',
      description:
        'Building systems and service infrastructure on AWS (ECS, Kubernetes, S3, etc)',
    },
    {
      icon: 'Zap',
      title: 'CI/CD & DevOps',
      description:
        'Created custom CI/CD systems, GitHub Actions workflows, and developer productivity tools.',
    },
  ],
};

export const skillsData = {
  subtitle: 'My expertise and technical proficiencies',
  categories: [
    {
      name: 'Languages',
      skills: ['TypeScript/JavaScript', 'Node.js', 'Go/Golang', 'Python'],
    },
    {
      name: 'Frontend',
      skills: [
        'React.js',
        'Next.js',
        'Redux',
        'React Query',
        'Tailwind CSS',
        'Figma',
      ],
    },
    {
      name: 'Backend',
      skills: [
        'RESTful APIs',
        'OpenAPI/Swagger',
        'GraphQL',
        'Microservices',
        'MySQL',
        'Aurora',
      ],
    },
    {
      name: 'DevOps & CI/CD',
      skills: [
        'GitHub Actions',
        'Docker',
        'Kubernetes',
        'CDK',
        'Helm',
        'Istio',
      ],
    },
    {
      name: 'Cloud & Infrastructure',
      skills: [
        'AWS CloudFormation',
        'S3',
        'CloudWatch',
        'EKS',
        'ECS',
        'Infrastructure-as-Code',
      ],
    },
    {
      name: 'Tools & Testing',
      skills: [
        'Cypress',
        'Playwright',
        'Jest',
        'Vite',
        'ELK Stack',
        'Prometheus',
      ],
    },
  ],
};

export const resumeData = {
  experience: [
    {
      title: 'Senior Software Engineer',
      period: 'Jun 2019 - Present',
      company: 'GoDaddy',
      location: 'Tempe, AZ',
      description:
        'Fullstack development from Golang deploy controllers on Kubernetes to frontend UI/UX with React and\n' +
        'everything in-between. I’ve worked on the central GoDaddy developer platform, enhanced and led\n' +
        'initiatives for an automated testing platform, led a team for the customer experience track of an internal\n' +
        'managed infrastructure developer platform. Key achievements include leading initiative to reduce\n' +
        'onboarding times from 3 days to 20 minutes, and enabling adoption of a managed infrastructure platform\n' +
        'onboarding 110+ internal applications (30% of GoDaddy’s portfolio ).',
    },
    {
      title: 'Software Engineer',
      company: 'GoDaddy',
      period: 'Jun 2016 - Jun 2019',
      location: 'Tempe, AZ',
      description:
        'Worked on a customer-facing email productivity application serving over 1 million users. Contributed to\n' +
        'frontend migrations, performance enhancements, and high impacting feature delivery in a team of seven\n' +
        'developers, three product managers, and two designers. Key achievements include successful piecemeal\n' +
        'migration from Ember.js to React.js without missing milestones; reduced page load times by 13% through\n' +
        'build system and API optimizations.',
    },
    {
      title: 'Software Engineer',
      company: 'PayPal',
      period: 'Mar 2013 - Jun 2016',
      location: 'Scottsdale, AZ',
      description:
        'I worked in the SRE tools team. Developed on an internal MySql query retrieval tool using React.js, Node.js,\n' +
        'and Java Spring. I worked on reducing friction points in the user experience and improving how developers\n' +
        'could retrieve data.',
    },
  ],
};

export const portfolioData = {
  categories: ['all', 'web design', 'applications', 'web development'],
  projects: [
    {
      title: 'Developer Platform Portal',
      description:
        "GoDaddy's internal developer platform connecting all internal tools, APIs, and UIs into a single interface. Allows developers to easily access and utilize various resources and tools within the organization such as creating applications, infrastructure, certs, etc",
      tags: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'Aurora',
        'ECS',
        'CDK',
      ],
      codeLink: null,
      liveLink: null,
    },

    {
      title: 'Continuous Delivery Infrastructure Platform',
      description:
        'Led a company-wide initiative for a cloud delivery platform. Designed the system, prototyped wireframes in Figma, created Jira stories, and led a team of 7 senior/principal engineers. Onboarded 110+ internal applications.',
      tags: [
        'React.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'Docker',
        'GitHub Actions',
      ],
      codeLink: null,
      liveLink: null,
    },
    {
      title: 'Deployment Platform',
      description:
        'Co-created a full end-to-end developer platform for managing applications on Kubernetes. Featured a React.js frontend, YAML-based custom CI/CD system, Golang deploy controller, and metrics/monitoring with Prometheus.',
      tags: ['React.js', 'Node.js', 'Go', 'Kubernetes', 'AWS', 'Istio', 'Helm'],
      codeLink: null,
      liveLink: null,
    },
    {
      title: 'GoDaddy Office 365 Email',
      description:
        'Customer-facing application with 1M+ users to manage email on GoDaddy. Led migration from Ember.js to React.js/Redux. Delivered features like enhanced onboarding wizards, A/B tested upgrade paths, and email archiving.',
      tags: ['React.js', 'Redux', 'Ember.js', 'Node.js', 'Webpack', 'Docker'],
      codeLink: null,
      liveLink: null,
    },
    {
      title: 'Cypress End-to-End Testing Platform',
      description:
        'A testing platform built around Cypress.js that runs tests in parallel. Features a React.js UI for videos and test run info, AWS S3 packaging, and Python Docker parallel test runner. Reduced support requests by 25%.',
      tags: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Python',
        'Docker',
        'GitHub Actions',
      ],
      codeLink: null,
      liveLink: null,
    },
    {
      title: 'Tooling Bootcamp',
      description:
        'An initiative providing workshops and tutorials for developers to learn about internal tools. Delivered 3 live and 6 virtual learning sessions to 400+ engineers with guided code tutorials and technical documentation.',
      tags: ['Technical Documentation', 'Presentation', 'Mentoring'],
      codeLink: null,
      liveLink: null,
    },
  ],
};

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt:
        'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
    {
      title: 'The Art of UI/UX: Creating Delightful Experiences',
      category: 'Design',
      date: 'Feb 28, 2024',
      readTime: '6 min',
      image: '/ui-ux-design-concept.png',
      excerpt:
        'Principles of exceptional UI/UX design for interfaces users love.',
      tags: ['Design', 'UI/UX', 'Frontend'],
      slug: 'art-of-uiux-delightful-experiences',
    },
    {
      title: 'TypeScript Best Practices for Large-Scale Applications',
      category: 'Development',
      date: 'Feb 20, 2024',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-best-practices',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      category: 'Development',
      date: 'Feb 12, 2024',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt:
        'Implement real-time features using WebSockets and modern frameworks.',
      tags: ['WebSockets', 'Real-time', 'Backend'],
      slug: 'realtime-apps-websockets',
    },
    {
      title: 'Mastering CSS Grid and Flexbox Layouts',
      category: 'Design',
      date: 'Feb 5, 2024',
      readTime: '7 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Modern CSS layout techniques with practical examples.',
      tags: ['CSS', 'Layout', 'Frontend'],
      slug: 'mastering-css-grid-flexbox',
    },
  ],
};

export const contactData = {
  email: 'twinlightcat@pm.me',
  github: 'trhodes-godaddy',
  githubPersonal: 'twinlightcat',
  location: 'Chandler, AZ',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106732.04111236219!2d-111.86385295!3d33.2828175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a55595c22b693%3A0x386ce373138cfdf0!2sChandler%2C%20AZ!5e0!3m2!1sen!2sus!4v1710651635155!5m2!1sen!2sus',
};
