import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

type Experience = {
  title: string;
  company: string;
  logo: string;
  logoAlt: string;
  logoClass?: string;
  link?: string;
  period: string;
  summary: string;
  description: string;
  detailBullets: string[];
  techStack: string[];
  impact?: string;
};

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-3 sm:p-4 lg:p-5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-none">
      <div #workScroll class="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pr-0.5 md:pr-2 text-white">
        <div class="flex items-center gap-3 mb-6 md:mb-7 border-b border-white/20 pb-2 self-start text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight">Experience</h2>
        </div>

        <div class="relative px-1 md:px-2 pb-1">
          <div class="hidden md:block relative overflow-hidden">
            <div
              class="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'w-[54%] pr-4' : 'w-full'"
            >
              <ng-container *ngTemplateOutlet="experienceTimeline; context: { compact: !!selectedExperience() }"></ng-container>
            </div>

            <section
              class="absolute inset-y-0 right-0 w-[44%] xl:w-[40%] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'"
            >
              <ng-container *ngTemplateOutlet="experienceDetail"></ng-container>
            </section>
          </div>

          <div class="md:hidden relative overflow-hidden">
            <div
              class="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'opacity-0 pointer-events-none translate-x-[-8%]' : 'opacity-100 pointer-events-auto translate-x-0'"
            >
              <ng-container *ngTemplateOutlet="experienceTimeline"></ng-container>
            </div>

            <div
              class="absolute inset-0 z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'"
            >
              <ng-container *ngIf="selectedExperience() as selected">
                <ng-container *ngTemplateOutlet="experienceDetail; context: { mobile: true, selected: selected }"></ng-container>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </app-glass-wrapper>

    <ng-template #experienceTimeline let-compact="compact">
      <div class="relative">
        <div
          class="pointer-events-none absolute left-[0.92rem] top-2 bottom-3 w-px rounded-full bg-gradient-to-b from-white/10 via-cyan-200/50 to-white/10 shadow-[0_0_24px_rgba(103,232,249,0.18)]"
          [ngClass]="compact ? 'lg:left-[0.92rem] lg:translate-x-0' : 'lg:left-1/2 lg:-translate-x-1/2'"
        ></div>

        <div class="flex flex-col gap-2.5 md:gap-3">
          @for (exp of experiences; track exp.title; let i = $index) {
            <div class="relative">
              <div
                class="pointer-events-none absolute left-[0.92rem] top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_28px_rgba(103,232,249,0.24)]"
                [ngClass]="compact ? 'lg:left-[0.92rem]' : 'lg:left-1/2'"
              >
                <span class="absolute inset-[2px] rounded-full border border-cyan-100/30 bg-gradient-to-br from-white/80 via-white/45 to-cyan-200/25"></span>
                <span class="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-white/80 blur-[0.5px]"></span>
              </div>
              <div
                class="pointer-events-none absolute left-[0.92rem] top-[1.85rem] h-px w-4 bg-gradient-to-r from-cyan-200/55 to-white/10 lg:w-6"
                [ngClass]="compact ? 'lg:left-[0.92rem]' : (isEven(i) ? 'lg:left-1/2 lg:-translate-x-full' : 'lg:left-1/2')"
              ></div>

              <div
                class="ml-6.5 lg:ml-0 flex"
                [ngClass]="compact ? 'lg:justify-start lg:ml-6.5' : (isEven(i) ? 'lg:justify-start' : 'lg:justify-end')"
              >
                <article
                  class="relative w-full border rounded-[1.35rem] p-3 md:p-4 overflow-hidden shadow-xl transition-all duration-300"
                  [ngClass]="[
                    compact ? 'lg:w-full' : 'lg:w-[calc(50%-1.65rem)]',
                    selectedExperienceIndex === i ? 'border-cyan-200/35 bg-white/10' : 'border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25'
                  ]"
                >
                  <div class="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent"></div>

                  <div class="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 md:gap-3 mb-2.5 md:mb-3">
                    <div class="min-w-0 flex-1 order-2 sm:order-1">
                      <div class="flex items-center gap-2 mb-1.5">
                        <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-white/65">
                          {{ exp.period }}
                        </span>
                      </div>

                      <h3 class="font-black text-[0.95rem] sm:text-base md:text-lg mb-2 uppercase tracking-tight text-white leading-tight">
                        {{ exp.title }}
                      </h3>

                      <div class="flex items-center gap-1.5 min-w-0 text-xs md:text-sm font-semibold text-white/80 uppercase italic">
                        <a
                          *ngIf="exp.link; else companyNameOnly"
                          [href]="exp.link"
                          target="_blank"
                          class="min-w-0 inline-flex items-center gap-1.5 text-white/80 hover:text-blue-300 transition-colors"
                        >
                          <span class="truncate">{{ exp.company }}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                        <ng-template #companyNameOnly>
                          <span class="truncate">{{ exp.company }}</span>
                        </ng-template>
                      </div>
                    </div>

                    <div class="shrink-0 self-start w-12 h-12 sm:w-14 sm:h-14 md:w-[4rem] md:h-[4rem] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.28)] flex items-center justify-center px-2 sm:px-2.5 transition-all duration-300 hover:bg-white/15 hover:border-white/30 order-1 sm:order-2">
                      <img
                        [src]="exp.logo"
                        [alt]="exp.logoAlt"
                        class="w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(15,23,42,0.28)]"
                        [ngClass]="exp.logoClass"
                      />
                    </div>
                  </div>

                  <div class="relative z-10 mb-2.5 md:mb-3 rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2 md:px-4 md:py-2.5 shadow-inner shadow-white/5">
                    <div class="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/55">
                      <span class="shrink-0">Role Snapshot</span>
                      <span class="h-px flex-1 bg-white/10"></span>
                      <span class="shrink-0">Completed</span>
                    </div>
                  </div>

                  <p class="relative z-10 text-xs md:text-sm leading-relaxed font-medium text-white/85">
                    {{ exp.summary }}
                  </p>

                  <div class="relative z-10 mt-4 flex items-center justify-between gap-3">
                    <span class="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/65">
                      View detailed scope
                    </span>
                    <button
                      type="button"
                      class="inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-cyan-200/10 px-3 py-1.5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-cyan-50 transition-all hover:border-cyan-100/35 hover:bg-cyan-200/15"
                      (click)="openExperience(i)"
                      [attr.aria-expanded]="selectedExperienceIndex === i"
                      [attr.aria-controls]="'experience-detail-panel'"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          }
        </div>
      </div>
    </ng-template>

    <ng-template #experienceDetail let-mobile="mobile" let-selected="selected">
      <ng-container *ngIf="(selected || selectedExperience()) as active; else detailEmpty">
        <article
          id="experience-detail-panel"
          class="relative overflow-hidden border border-white/15 bg-white/[0.07] p-4 md:p-5 shadow-2xl min-h-[17rem]"
          [ngClass]="mobile ? 'max-h-[78vh] overflow-y-auto rounded-[1.35rem]' : 'h-full rounded-[1.5rem]'"
        >
          <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-100/12 via-white/[0.04] to-transparent"></div>

          <div class="relative z-10 flex items-start justify-between gap-4">
            <div class="min-w-0">
              <p class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.24em] text-cyan-100/65 mb-2">
                Detailed Role View
              </p>
              <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                {{ active.title }}
              </h3>
              <p class="mt-1 text-sm md:text-base font-semibold text-white/72 uppercase italic">
                {{ active.company }}
              </p>
            </div>

            <button
              type="button"
              class="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/80 transition-colors hover:bg-white/14 hover:text-white"
              (click)="closeExperience()"
              aria-label="Close experience details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
          </div>

          <div class="relative z-10 mt-4 flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            <span class="rounded-full border border-white/12 bg-white/8 px-3 py-1.5">{{ active.period }}</span>
            <span *ngIf="active.impact" class="rounded-full border border-cyan-100/18 bg-cyan-200/10 px-3 py-1.5 text-cyan-50/85">
              {{ active.impact }}
            </span>
          </div>

          <div class="relative z-10 mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/20 p-4">
            <div class="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/58 mb-2">
              <span>Role Overview</span>
              <span class="h-px flex-1 bg-white/10"></span>
            </div>
            <p class="text-sm md:text-base leading-relaxed text-white/84">
              {{ active.description }}
            </p>
          </div>

          <div class="relative z-10 mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
              <div class="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/58 mb-3">
                <span>Highlights</span>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>

              <div class="grid gap-2.5">
                <div
                  *ngFor="let bullet of active.detailBullets"
                  class="rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-2.5 text-xs md:text-sm leading-relaxed text-white/82"
                >
                  {{ bullet }}
                </div>
              </div>
            </div>

            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
              <div class="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/58 mb-3">
                <span>Tech Stack</span>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  *ngFor="let tech of active.techStack"
                  class="rounded-full border border-amber-100/15 bg-amber-100/10 px-2.5 py-1.5 text-[11px] md:text-xs font-semibold text-amber-50/88"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </ng-container>

      <ng-template #detailEmpty>
        <article class="relative overflow-hidden rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.045] p-5 md:p-6 text-white/70">
          <p class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.24em] text-white/50 mb-3">
            Detailed Role View
          </p>
          <h3 class="text-lg md:text-xl font-black uppercase tracking-tight text-white/92">
            Select an experience
          </h3>
          <p class="mt-2 text-sm md:text-base leading-relaxed text-white/68">
            Choose any role from the timeline to inspect impact, delivery details, and the stack used in that position.
          </p>
        </article>
      </ng-template>
    </ng-template>
  `
})
export class WorkComponent {
  @ViewChild('workScroll') private workScroll?: ElementRef<HTMLDivElement>;

  selectedExperienceIndex: number | null = null;
  private mobileScrollTop = 0;

  experiences: Experience[] = [
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
  ];

  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  openExperience(index: number): void {
    this.mobileScrollTop = this.workScroll?.nativeElement.scrollTop ?? 0;
    this.selectedExperienceIndex = index;

    requestAnimationFrame(() => {
      if (this.workScroll) {
        this.workScroll.nativeElement.scrollTop = 0;
      }
    });
  }

  closeExperience(): void {
    this.selectedExperienceIndex = null;

    requestAnimationFrame(() => {
      if (this.workScroll) {
        this.workScroll.nativeElement.scrollTop = this.mobileScrollTop;
      }
    });
  }

  selectedExperience(): Experience | null {
    return this.selectedExperienceIndex !== null ? this.experiences[this.selectedExperienceIndex] : null;
  }
}
