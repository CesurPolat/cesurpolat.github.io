export const environment = {
  production: false,
  profile: {
    name: 'Cesur POLAT',
    title: 'Full-Stack Developer',
    email: 'cesur.polat@cesurpolat.dev',
    linkedin: 'https://linkedin.com/in/cesurpolat',
    github: 'https://github.com/CesurPolat',
    impact: [
      { label: 'Performance', desc: '90% reduction in HVAC calc time.' },
      { label: 'Architecture', desc: 'Migrated to gRPC microservices.' }
    ],
    techStack: [
      { name: '.NET', badge: 'https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white' },
      { name: 'Angular', badge: 'https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white' },
      { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white' },
      { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white' },
      { name: 'MSSQL', badge: 'https://img.shields.io/badge/MSSQL-CC2927?style=flat&logo=microsoft-sql-server&logoColor=white' }
    ],
    featuredProjects: [
      { name: 'MiBudsClient', link: 'https://github.com/CesurPolat/MiBudsClient', tech: 'Python', techClass: 'bg-blue-500/20 text-blue-300', desc: 'Desktop client for Redmi Buds 6 Play. Battery tracking & low-latency mode.' },
      { name: 'DubAI', link: 'https://github.com/CesurPolat/DubAI', tech: 'Angular', techClass: 'bg-red-500/20 text-red-300', desc: 'AI-powered transcription, translation, and automated dubbing.' }
    ],
    quote: '"Code is the architecture of thought; to optimize is to honor the elegance of logic."'
  },
  education: [
    {
      degree: "Associate's Degree",
      field: 'Computer Programming',
      institution: 'Sakarya University of Applied Sciences',
      logo: '/subu.jpg',
      logoAlt: 'Sakarya University of Applied Sciences logo',
      logoClass: 'rounded-xl',
      link: 'https://subu.edu.tr/?lang=en',
      badge: 'State University',
      year: 'Sep 2022 - Jun 2024',
      description: 'GPA: 3.46/4.00 | Sakarya, Turkey',
      metaNote: 'Program emphasis based on official SUBU Computer Programming program overviews.',
      courseHighlights: [
        'Programming Fundamentals',
        'Web Design',
        'Internet-Based Application Development',
        'Database Management',
        'Operating Systems',
        'Computer Hardware',
        'Computer Networks',
        'Graphic Design & Office Software'
      ],
      focusAreas: [
        'Algorithmic thinking',
        'Application architecture basics',
        'Full-stack web foundations',
        'System and network literacy'
      ]
    },
    {
      degree: 'Vocational Technical High School',
      field: 'Web Programming',
      institution: 'Borsa Istanbul Mehmet Akif Ersoy',
      logo: '/bist.png',
      logoAlt: 'Borsa Istanbul Mehmet Akif Ersoy logo',
      logoClass: 'scale-[0.9]',
      link: 'https://makifeml.meb.k12.tr/',
      badge: 'Technical Track',
      year: 'Sep 2018 - Jun 2022',
      description: 'Sakarya, Turkey',
      metaNote: 'Track content reflects official Information Technologies / Web Programming field outcomes.',
      courseHighlights: [
        'Analysis & Requirement Breakdown',
        'Algorithm Design',
        'UI Layout Principles',
        'Interactive Web Development',
        'Local Testing & Publishing'
      ],
      focusAreas: [
        'Responsive interface building',
        'Front-end problem solving',
        'Project-based technical training',
        'Deployment-ready workflow habits'
      ]
    }
  ],
  projects: [
    {
      name: 'MiBudsClient',
      description: 'Desktop client for Redmi Buds 6 Play. Battery tracking & low-latency mode.',
      technologies: ['Python', 'Bleak', 'Tkinter'],
      link: 'https://github.com/CesurPolat/MiBudsClient',
      bgColor: '#1a1a1a',
      bgImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=40&w=800&auto=format&fit=crop',
      logo: null
    },
    {
      name: 'DubAI',
      description: 'AI-powered transcription, translation, and automated dubbing platform.',
      technologies: ['Angular', 'Node.js', 'PyTorch', 'FFmpeg'],
      link: 'https://github.com/CesurPolat/DubAI',
      bgColor: '#2D3436',
      bgImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=40&w=800&auto=format&fit=crop',
      logo: null
    },
    {
      name: 'Termoware',
      description: 'Selection and quotation portal for leading industry companies in HVAC.',
      technologies: ['ASP.NET', 'C#', 'MSSQL', 'gRPC'],
      link: null,
      bgColor: '#0984E3',
      bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=40&w=800&auto=format&fit=crop',
      logo: null
    },
    {
      name: 'Storage Service',
      description: 'Multi-tenant storage service with file compression and JWT access control.',
      technologies: ['Angular', '.NET Core', 'Redis'],
      link: null,
      bgColor: '#6C5CE7',
      bgImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=40&w=800&auto=format&fit=crop',
      logo: null
    }
  ],
  experience: [
    {
      title: 'Full-Stack Developer (Full-time)',
      company: 'Primeware Software Solutions',
      logo: '/primeware.png',
      logoAlt: 'Primeware Software Solutions logo',
      link: 'https://primeware.com.tr',
      period: 'Jul 2024 - Mar 2025 / 9 mos',
      summary: 'Refactored a production HVAC platform, improved calculation performance, and helped move platform services toward a more scalable architecture.',
      description: 'Led code refactoring and optimization on the Termoware platform using ASP.NET. Developed calculation services for HVAC systems, reducing processing time by 90%. Migrated systems to gRPC microservices and managed infrastructure on Cloudflare and IIS.',
      impact: '90% faster HVAC calculations',
      detailBullets: [
        'Refactored legacy service flows on the Termoware platform to improve maintainability and release confidence.',
        'Designed and delivered HVAC calculation services that cut heavy processing time by roughly 90% in production workflows.',
        'Supported a migration path toward gRPC-based microservices for clearer service boundaries and better scalability.',
        'Handled deployment and edge infrastructure concerns across IIS and Cloudflare for stable delivery.'
      ],
      techStack: ['ASP.NET', 'gRPC', 'IIS', 'Cloudflare', 'C#', 'Microservices']
    },
    {
      title: 'Full-Stack Developer (Internship)',
      company: 'Primeware Software Solutions',
      logo: '/primeware.png',
      logoAlt: 'Primeware Software Solutions logo',
      link: 'https://primeware.com.tr',
      period: 'Jan 2024 - Jun 2024 / 6 mos',
      summary: 'Built tenant-aware identity and storage tooling with secure access control and front-end integrations.',
      description: 'Built a multi-tenant identity authentication system using .NET and MSSQL. Designed a multi-tenant storage service with file compression and JWT access control using Angular and .NET.',
      impact: 'Multi-tenant auth + storage foundation',
      detailBullets: [
        'Implemented a multi-tenant authentication flow with tenant isolation and database-backed identity handling.',
        'Designed a storage service that supported file compression and permission-aware access patterns.',
        'Connected Angular interfaces to backend services with JWT-based authorization and guarded flows.',
        'Worked across front-end and backend layers to keep the tenancy model consistent end to end.'
      ],
      techStack: ['.NET', 'MSSQL', 'Angular', 'JWT', 'REST APIs', 'Multi-tenant Design']
    },
    {
      title: 'IT Technician (Internship)',
      company: 'TURASAS',
      logo: '/turasas.png',
      logoAlt: 'TURASAS logo',
      logoClass: 'scale-[0.92]',
      link: 'https://www.turasas.gov.tr',
      period: 'Aug 2023 - Sep 2023 / 2 mos',
      summary: 'Supported day-to-day IT operations, device setup, and network reliability inside a production-oriented environment.',
      description: 'Installed and maintained computer systems, Windows setup, image recovery, and configured network equipment for reliable connectivity.',
      impact: 'Operational support and recovery workflows',
      detailBullets: [
        'Prepared and maintained workstation environments for internal teams, including Windows setup and recovery tasks.',
        'Assisted with image restoration and troubleshooting workflows to reduce downtime on affected devices.',
        'Configured and checked network equipment to keep local connectivity dependable for users.',
        'Gained hands-on experience with practical IT support discipline in a structured institutional environment.'
      ],
      techStack: ['Windows', 'Device Imaging', 'Network Setup', 'Hardware Support']
    },
    {
      title: 'Angular Developer (Internship)',
      company: 'Digisoft Software',
      logo: '/digisoft.jpg',
      logoAlt: 'Digisoft Software logo',
      logoClass: 'rounded-lg',
      link: 'https://digisoft.com.tr',
      period: 'Jul 2021 - Sep 2021 / 3 mos',
      summary: 'Built CRM-facing Angular screens and shipped real-time notifications for product interactions.',
      description: 'Developed CRM forms and page layouts using Angular. Implemented a real-time notification system using Firebase Cloud Messaging (FCM).',
      impact: 'Real-time CRM notifications',
      detailBullets: [
        'Created CRM forms and page structures in Angular with a focus on usability and implementation consistency.',
        'Integrated Firebase Cloud Messaging to support real-time notification delivery across user flows.',
        'Translated interface requirements into reusable front-end pieces while maintaining project styling conventions.',
        'Strengthened practical experience in component-driven front-end development during an early internship role.'
      ],
      techStack: ['Angular', 'TypeScript', 'Firebase Cloud Messaging', 'HTML', 'CSS']
    }
  ]
};
