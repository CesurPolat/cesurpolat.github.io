import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PortfolioProject } from '../data/projects';

const SITE_URL = 'https://cesurpolat.dev';
const HOME_DESCRIPTION = 'Cesur Polat is a full-stack developer in Sakarya, Türkiye, specializing in .NET, Angular, Node.js, TypeScript, APIs, and modern, scalable web apps.';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  setHomeMetadata(): void {
    const title = 'Cesur Polat - Full-Stack Developer (.NET, Angular, Node.js)';
    const url = `${SITE_URL}/`;

    this.setPageMetadata(title, HOME_DESCRIPTION, url, 'website');
    this.removeImageMetadata();
    this.setStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url,
          name: 'Cesur Polat',
          inLanguage: 'en'
        },
        {
          '@type': 'ProfilePage',
          '@id': `${SITE_URL}/#profile-page`,
          url,
          name: 'Cesur Polat | Full-Stack Developer',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          mainEntity: { '@id': `${SITE_URL}/#person` }
        },
        this.personStructuredData()
      ]
    });
  }

  setProjectMetadata(project: PortfolioProject): void {
    const title = `${project.name} | Project by Cesur Polat`;
    const url = `${SITE_URL}/projects/${project.slug}`;
    const image = `${SITE_URL}${project.bgImage}`;

    this.setPageMetadata(title, project.metaDescription, url, 'article');
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    const software: Record<string, unknown> = {
      '@type': 'SoftwareApplication',
      '@id': `${url}#software`,
      name: project.name,
      url,
      description: project.metaDescription,
      image,
      applicationCategory: project.applicationCategory,
      operatingSystem: project.operatingSystem,
      author: { '@id': `${SITE_URL}/#person` },
      creator: { '@id': `${SITE_URL}/#person` },
      sameAs: project.link,
      keywords: project.technologies.join(', ')
    };

    if (project.sourceUrl) {
      software['codeRepository'] = project.sourceUrl;
    }

    this.setStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'Cesur Polat'
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description: project.metaDescription,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${url}#software` }
        },
        software,
        this.personStructuredData()
      ]
    });
  }

  private setPageMetadata(title: string, description: string, url: string, ogType: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    const canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = url;
    } else {
      const link = this.document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      this.document.head.appendChild(link);
    }
  }

  private removeImageMetadata(): void {
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("name='twitter:image'");
  }

  private setStructuredData(data: Record<string, unknown>): void {
    let script = this.document.head.querySelector<HTMLScriptElement>('#structured-data');
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  }

  private personStructuredData(): Record<string, unknown> {
    return {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Cesur Polat',
      alternateName: 'CesurPolat',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/profile/ProfileMemoji.webp`,
      jobTitle: 'Full-Stack Developer',
      description: HOME_DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sakarya',
        addressCountry: 'TR'
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Sakarya University of Applied Sciences',
        url: 'https://www.subu.edu.tr/'
      },
      sameAs: [
        'https://github.com/CesurPolat',
        'https://www.linkedin.com/in/cesurpolat/',
        'https://medium.com/@CesurPolat'
      ],
      knowsAbout: [
        '.NET',
        'ASP.NET Core',
        'C#',
        'Angular',
        'TypeScript',
        'Node.js',
        'Python',
        'Microsoft SQL Server',
        'REST APIs',
        'gRPC',
        'Microservices',
        'Web Application Architecture'
      ]
    };
  }
}
