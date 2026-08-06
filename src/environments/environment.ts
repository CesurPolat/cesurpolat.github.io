export const environment = {
  production: false,
  profile: {
    name: 'Cesur Polat',
    title: 'Full-Stack Developer',
    email: 'cesur.polat@cesurpolat.dev',
    linkedin: 'https://linkedin.com/in/cesurpolat',
    github: 'https://github.com/CesurPolat',
    impact: [
      { label: 'Performance', desc: 'Optimized HVAC calculation services, achieving a <b class="text-white">90% reduction</b> in processing time through algorithm refactoring.' },
      { label: 'Architecture', desc: 'Migrated legacy calculation systems into resilient <b class="text-white">gRPC microservices</b> for enhanced scalability.' },
      { label: 'Security', desc: 'Engineered multi-tenant identity systems and secure storage solutions using <b class="text-white">JWT</b> and <b class="text-white">.NET</b>.' }
    ],
    techStack: [
      { name: '.NET', badge: 'https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white' },
      { name: 'Angular', badge: 'https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white' },
      { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white' },
      { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white' },
      { name: 'MSSQL', badge: 'https://custom-icon-badges.demolab.com/badge/Microsoft%20SQL%20Server-CC2927?logo=mssqlserver-white&logoColor=white' },
      { name: 'Electron', badge: 'https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white' },
      { name: 'Flet', badge: 'https://img.shields.io/badge/Flet-0095D5?style=flat&logo=flutter&logoColor=white' },
      { name: 'Tailwind CSS', badge: 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white' },
      
      /*{ name: 'gRPC', badge: 'https://img.shields.io/badge/gRPC-244C5A?style=flat&logo=grpc&logoColor=white' },
      { name: 'NoSQL', badge: 'https://img.shields.io/badge/NoSQL-4DB33D?style=flat&logo=mongodb&logoColor=white' },
      { name: 'Bluetooth', badge: 'https://img.shields.io/badge/Bluetooth-0082FC?style=flat&logo=bluetooth&logoColor=white' },
      { name: 'Cloudflare', badge: 'https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white' },
      { name: 'Firebase', badge: 'https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black' },
      { name: 'FFmpeg', badge: 'https://img.shields.io/badge/FFmpeg-007808?style=flat&logo=ffmpeg&logoColor=white' },
      { name: 'OpenAI', badge: 'https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white' },
      { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white' },
      { name: 'IIS', badge: 'https://img.shields.io/badge/IIS-0078D7?style=flat&logo=windows&logoColor=white' },*/

    ],
    featuredProjects: [
      { 
        name: 'MiBudsClient', 
        link: 'https://github.com/CesurPolat/MiBudsClient', 
        tech: 'Python', 
        techClass: 'bg-[#3776AB] text-white', 
        desc: 'A Python & Flet-based desktop client for Redmi Buds 6 Play. Features real-time battery tracking and low-latency mode via Bluetooth.' 
      },
      { name: 'VectorMark', 
        link: 'https://github.com/CesurPolat/VectorMark', 
        tech: 'TypeScript', 
        techClass: 'bg-[#3178C6] text-white', 
        desc: 'Smart bookmark manager that automatically categorizes and organizes your saved websites using semantic search.' 
      }
    ],
    quote: '"Code is the architecture of thought; to optimize is to honor the elegance of logic."'
  },
  education: [
    {
      degree: "Associate's Degree",
      field: 'Computer Programming',
      institution: 'Sakarya University of Applied Sciences',
      logo: '/images/logos/subu.webp',
      logoAlt: 'Sakarya University of Applied Sciences logo',
      logoClass: 'rounded-xl',
      link: 'https://subu.edu.tr/?lang=en',
      badge: 'State University',
      year: 'Sep 2022 - Jun 2024',
      description: 'GPA: 3.46/4.00 | Sakarya, Turkey',
      metaNote: '',
      courseHighlights: [
        'Programming Fundamentals',
        'Object-Oriented Programming',
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Web Programming',
        'Operating Systems',
        'Computer Networks'
      ],
    },
    {
      degree: 'Vocational Technical High School',
      field: 'Web Programming',
      institution: 'Borsa Istanbul Mehmet Akif Ersoy',
      logo: '/images/logos/bist-46x46.webp',
      logoAlt: 'Borsa Istanbul Mehmet Akif Ersoy logo',
      logoClass: 'scale-[0.9]',
      link: 'https://makifeml.meb.k12.tr/',
      badge: 'State High School',
      year: 'Sep 2018 - Jun 2022',
      description: 'Sakarya, Turkey',
      metaNote: '',
      courseHighlights: [
        'Professional Development',
        'Object-Oriented Programming',
        'Database Programming',
        'Web Design and Development',
        'Visual Programming',
        'Networking Fundamentals',
        'Operating Systems'
      ]
    }
  ],
  projects: [
    {
      name: 'MiBudsClient',
      description: 'Desktop client for Redmi Buds 6 Play. Battery tracking & low-latency mode.',
      technologies: ['Python', 'Flet', 'Bluetooth'],
      link: 'https://github.com/CesurPolat/MiBudsClient',
      bgColor: '#1a1a1a',
      bgImage: '/images/projects/mibuds.webp',
      logo: "/images/projects/MiBudsClientIcon.webp"
    },
    {
      name: 'VectorMark',
      description: 'Smart bookmark manager that automatically categorizes and organizes your saved websites using semantic search.',
      technologies: ['Browser Extension', 'TypeScript', 'Vector Databases'],
      link: 'https://github.com/CesurPolat/VectorMark',
      bgColor: '#1a1a1a',
      bgImage: '/images/projects/banner.webp',
      logo: "/images/projects/VectorMarkIcon-46x46.webp"
    },
    {
      name: 'Termoware',
      description: 'Selection and quotation portal for leading industry companies in HVAC.',
      technologies: ['ASP.NET', 'C#', 'MSSQL', 'gRPC'],
      link: "https://primeware.com.tr/urunler",
      bgColor: '#0984E3',
      bgImage: '/images/projects/termoware.webp',
      logo: "/images/logos/primeware-46x46.webp"
    },
    {
      name: 'IPTV',
      description: 'Android TV app for streaming IPTV content with user-friendly interface and reliable performance.',
      technologies: ['Angular', '.NET Core', 'Playwright', 'Capacitor'],
      link: "https://iptv-603b2.web.app/#/home",
      bgColor: '#6C5CE7',
      bgImage: '/images/projects/iptv.webp',
      logo: null
    }
  ],
  experience: [
    {
      title: 'Full-Stack Developer (Full-time)',
      company: 'Primeware Software Solutions',
      logo: '/images/logos/primeware-46x46.webp',
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
      logo: '/images/logos/primeware-46x46.webp',
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
      logo: '/images/logos/turasas.webp',
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
      techStack: ['Device Imaging', 'Network Setup', 'Hardware Support']
    },
    {
      title: 'Angular Developer (Internship)',
      company: 'Digisoft Software',
      logo: '/images/logos/digisoft.webp',
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
