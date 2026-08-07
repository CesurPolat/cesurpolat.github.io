export interface PortfolioProject {
  slug: string;
  lastModified: string;
  name: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  overview: string[];
  contribution: string;
  highlights: string[];
  technologies: string[];
  link: string;
  linkLabel: string;
  sourceUrl?: string;
  applicationCategory: string;
  operatingSystem: string;
  bgColor: string;
  bgImage: string;
  logo: string | null;
}

export const PROJECTS: PortfolioProject[] = [
  {
    slug: 'mibuds-client',
    lastModified: '2026-08-07',
    name: 'MiBudsClient',
    eyebrow: 'Open-source desktop application',
    description: 'Desktop client for Redmi Buds 6 Play with battery tracking and low-latency controls.',
    metaDescription: 'MiBudsClient is an open-source Python and Flet desktop client for Redmi Buds 6 Play with battery monitoring and low-latency controls.',
    overview: [
      'MiBudsClient brings useful Redmi Buds 6 Play information and controls into a focused desktop interface. It provides a practical alternative to repeatedly checking earbud state through a mobile device.',
      'The application is designed around direct Bluetooth communication, quick device discovery, and an interface that keeps the most useful controls immediately accessible.'
    ],
    contribution: 'Designed and built the application end to end, including Bluetooth device discovery, battery-state monitoring, connection management, low-latency controls, and the Flet desktop interface.',
    highlights: [
      'Real-time battery monitoring for connected earbuds',
      'Automatic Bluetooth device discovery and connection handling',
      'Low-latency mode controls from the desktop',
      'Open-source Python codebase with a Flet user interface'
    ],
    technologies: ['Python', 'Flet', 'Bluetooth'],
    link: 'https://github.com/CesurPolat/MiBudsClient',
    linkLabel: 'View source on GitHub',
    sourceUrl: 'https://github.com/CesurPolat/MiBudsClient',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Desktop',
    bgColor: '#1a1a1a',
    bgImage: '/images/projects/mibuds.webp',
    logo: '/images/projects/MiBudsClientIcon.webp'
  },
  {
    slug: 'vectormark',
    lastModified: '2026-08-07',
    name: 'VectorMark',
    eyebrow: 'Local-first browser extension',
    description: 'Local-first bookmark manager that organizes saved websites using semantic search.',
    metaDescription: 'VectorMark is a local-first bookmark manager using TypeScript, IndexedDB, embeddings, and vector search to organize and retrieve saved websites.',
    overview: [
      'VectorMark is a privacy-first bookmark manager that makes large bookmark collections easier to organize and retrieve. Instead of relying only on folders or exact keyword matches, it uses local embeddings and vector similarity to find conceptually related pages.',
      'Bookmark data and the search index stay in the browser. This local-first architecture reduces external dependencies while keeping semantic retrieval responsive and private.'
    ],
    contribution: 'Designed the local-first architecture and implemented bookmark ingestion, automatic organization, local embedding workflows, IndexedDB persistence, and HNSW-based vector retrieval in TypeScript.',
    highlights: [
      'Semantic bookmark search using local embeddings',
      'Privacy-first storage and retrieval inside the browser',
      'IndexedDB persistence for bookmark and vector data',
      'HNSW indexing for efficient vector similarity search'
    ],
    technologies: ['Browser Extension', 'TypeScript', 'IndexedDB', 'HNSW', 'Vector Search'],
    link: 'https://github.com/CesurPolat/VectorMark',
    linkLabel: 'View source on GitHub',
    sourceUrl: 'https://github.com/CesurPolat/VectorMark',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    bgColor: '#1a1a1a',
    bgImage: '/images/projects/banner.webp',
    logo: '/images/projects/VectorMarkIcon-46x46.webp'
  },
  {
    slug: 'termoware',
    lastModified: '2026-08-07',
    name: 'Termoware',
    eyebrow: 'Enterprise HVAC engineering platform',
    description: 'HVAC selection and quotation platform with optimized engineering calculation services.',
    metaDescription: 'Termoware is an enterprise HVAC selection and quotation platform with optimized calculation services and a scalable ASP.NET and gRPC architecture.',
    overview: [
      'Termoware supports HVAC equipment selection, engineering calculations, and quotation workflows for industry teams. It brings calculation-heavy processes and commercial project management into a shared web platform.',
      'My work focused on production engineering improvements during my time at Primeware Software Solutions, rather than ownership of the Termoware product.'
    ],
    contribution: 'Refactored legacy service flows, developed HVAC calculation services, helped reduce heavy calculation processing time by roughly 90%, and supported the migration of platform capabilities toward gRPC-based service boundaries.',
    highlights: [
      'Approximately 90% faster processing in targeted HVAC calculation workflows',
      'Refactored legacy calculation code for maintainability and release confidence',
      'Supported migration toward scalable gRPC microservices',
      'Contributed across ASP.NET, SQL Server, IIS, and Cloudflare infrastructure'
    ],
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'gRPC', 'IIS', 'Cloudflare'],
    link: 'https://primeware.com.tr/urunler',
    linkLabel: 'Visit the product website',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    bgColor: '#0984e3',
    bgImage: '/images/projects/termoware.webp',
    logo: '/images/logos/primeware-46x46.webp'
  },
  {
    slug: 'iptv',
    lastModified: '2026-08-07',
    name: 'IPTV',
    eyebrow: 'Android TV streaming application',
    description: 'Android TV streaming application focused on a clear and reliable viewing experience.',
    metaDescription: 'An Android TV streaming application built with Angular, .NET Core, Capacitor, and Playwright, focused on a clear and reliable viewing experience.',
    overview: [
      'This IPTV project explores a television-first streaming interface designed for simple navigation and dependable playback workflows. The experience prioritizes clarity on large screens and interaction patterns suited to remote controls.',
      'The project combines a component-driven Angular interface with .NET Core services and Capacitor packaging, supported by browser automation in the development workflow.'
    ],
    contribution: 'Built the application structure and viewing interface, connected the Angular client with .NET Core services, prepared the application for Android TV delivery with Capacitor, and used Playwright in the validation workflow.',
    highlights: [
      'Television-first interface designed for large-screen navigation',
      'Angular client connected to .NET Core services',
      'Capacitor-based Android application packaging',
      'Playwright-supported browser and interface validation'
    ],
    technologies: ['Angular', '.NET Core', 'Playwright', 'Capacitor'],
    link: 'https://iptv-603b2.web.app/#/home',
    linkLabel: 'Open the live application',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Android TV',
    bgColor: '#6c5ce7',
    bgImage: '/images/projects/iptv.webp',
    logo: null
  }
];

export const PROJECTS_BY_SLUG = new Map(PROJECTS.map((project) => [project.slug, project]));
