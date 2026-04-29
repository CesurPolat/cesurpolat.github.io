import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-3 sm:p-4 lg:p-5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-none">
      <div class="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pr-0.5 md:pr-2 flex flex-col text-white">
        <div class="flex items-center gap-3 mb-6 border-b border-white/20 pb-2 self-start text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight">Education</h2>
        </div>

        <div class="relative border-l border-white/20 ml-1.5 md:ml-3 pl-5 md:pl-7 py-2 flex-1 flex flex-col justify-between gap-5 md:gap-6">
          <div *ngFor="let edu of education" class="relative group">
            <div class="absolute -left-7.5 md:-left-8.5 top-1 w-4 h-4 bg-white/10 border border-white/30 rotate-45 backdrop-blur-sm z-10"></div>

            <div class="transition-transform duration-300 hover:translate-x-1">
              <span class="inline-block bg-white/10 border border-white/25 text-white text-[9px] font-black px-2.5 py-1 mb-2 uppercase rounded-full tracking-wider leading-none">{{ edu.year }}</span>
              <h3 class="font-black text-xl md:text-2xl uppercase leading-tight mb-1.5 tracking-tight text-white">{{ edu.degree }}</h3>
              <p class="font-bold text-base md:text-lg mb-2.5 text-white/70 italic">{{ edu.field }}</p>
              <div class="flex items-center gap-2 mb-3 border-b border-white/15 pb-2">
                <a
                  *ngIf="edu.link; else institutionText"
                  [href]="edu.link"
                  target="_blank"
                  class="inline-flex items-center gap-2 text-xs md:text-sm font-black uppercase text-white/90 hover:text-blue-300 transition-colors"
                >
                  <span>{{ edu.institution }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <ng-template #institutionText>
                  <p class="text-xs md:text-sm font-black uppercase text-white/90">{{ edu.institution }}</p>
                </ng-template>
              </div>

              <div class="relative overflow-hidden border border-white/15 p-3 md:p-4 bg-white/5 rounded-[1.4rem] shadow-xl transition-all hover:bg-white/10 hover:border-white/25">
                <div class="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent"></div>

                <div class="relative flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                  <div class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-[4.25rem] md:h-[4.25rem] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.28)] flex items-center justify-center px-2 md:px-3 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-[1.03]">
                    <img
                      [src]="edu.logo"
                      [alt]="edu.logoAlt"
                      class="w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(15,23,42,0.28)]"
                      [ngClass]="edu.logoClass"
                    />
                  </div>

                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/55 mb-2.5">
                      <span class="shrink-0">Campus</span>
                      <span class="h-px flex-1 bg-white/10"></span>
                      <span class="shrink-0">{{ edu.badge }}</span>
                    </div>
                    <p class="font-medium text-sm md:text-base leading-relaxed text-white/85">{{ edu.description }}</p>
                    <p *ngIf="edu.metaNote" class="mt-2 text-xs md:text-sm leading-relaxed text-white/60">
                      {{ edu.metaNote }}
                    </p>
                  </div>
                </div>

                <div class="relative mt-4 grid grid-cols-1 xl:grid-cols-2 gap-3">
                  <div class="rounded-[1.25rem] border border-white/10 bg-slate-950/20 p-3 md:p-4">
                    <div class="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-cyan-100/70 mb-3">
                      <span class="shrink-0">Core Coursework</span>
                      <span class="h-px flex-1 bg-white/10"></span>
                      <span class="shrink-0">{{ edu.courseHighlights.length }} Topics</span>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span
                        *ngFor="let course of edu.courseHighlights"
                        class="rounded-full border border-cyan-100/15 bg-white/[0.06] px-2.5 py-1.5 text-[11px] md:text-xs font-semibold text-white/80"
                      >
                        {{ course }}
                      </span>
                    </div>
                  </div>

                  <div class="rounded-[1.25rem] border border-white/10 bg-slate-950/20 p-3 md:p-4">
                    <div class="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-amber-100/70 mb-3">
                      <span class="shrink-0">Focus Areas</span>
                      <span class="h-px flex-1 bg-white/10"></span>
                      <span class="shrink-0">{{ edu.focusAreas.length }} Highlights</span>
                    </div>
                    <div class="grid grid-cols-1 gap-2">
                      <div
                        *ngFor="let focus of edu.focusAreas"
                        class="rounded-2xl border border-white/8 bg-white/[0.045] px-3 py-2 text-xs md:text-sm font-medium leading-relaxed text-white/82"
                      >
                        {{ focus }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-glass-wrapper>
  `
})
export class EducationComponent {
  education = [
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
  ];
}
