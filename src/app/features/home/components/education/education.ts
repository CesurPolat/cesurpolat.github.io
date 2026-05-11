import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-3 sm:p-4 lg:p-5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-none">
      <div class="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pr-0.5 md:pr-2 flex flex-col text-white">
        <div class="flex items-center gap-3 mb-6 md:mb-7 border-b border-white/20 pb-2 w-full text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight">Education</h2>
        </div>

        <div class="relative border-l border-white/20 ml-1.5 md:ml-3 pl-5 md:pl-7 py-2 flex-1 flex flex-col justify-between gap-5 md:gap-6">
          <div *ngFor="let edu of education" class="relative group transition-transform duration-300 hover:translate-x-1">
            <div class="pointer-events-none absolute -left-[30px] md:-left-[36px] top-0 h-4 w-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_28px_rgba(103,232,249,0.24)]">
              <span class="absolute inset-[2px] rounded-full border border-cyan-100/30 bg-gradient-to-br from-white/80 via-white/45 to-cyan-200/25"></span>
              <span class="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-white/80 blur-[0.5px]"></span>
            </div>

            <div class="border border-white/10 bg-white/5 rounded-2xl p-3 md:p-4 transition-colors hover:border-white/20 hover:bg-white/10">
              <div class="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                <div class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center p-1.5">
                  <img [src]="edu.logo" [alt]="edu.logoAlt" class="w-full h-full object-contain" [ngClass]="edu.logoClass" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start gap-2">
                    <h3 class="font-black text-lg md:text-xl uppercase leading-tight tracking-tight text-white">{{ edu.degree }}</h3>
                    <span class="shrink-0 bg-white/10 border border-white/25 text-white text-[9px] font-bold px-2 py-0.5 uppercase rounded-full tracking-wider leading-none">{{ edu.year }}</span>
                  </div>
                  <p class="font-bold text-sm md:text-base text-white/60 italic">{{ edu.field }}</p>
                  <a *ngIf="edu.link" [href]="edu.link" target="_blank" class="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase text-white/80 hover:text-blue-300 transition-colors mt-1">
                    <span>{{ edu.institution }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                  <p *ngIf="!edu.link" class="text-xs md:text-sm font-bold uppercase text-white/80 mt-1">{{ edu.institution }}</p>
                </div>
              </div>
              <p class="mt-3 text-sm md:text-base leading-relaxed text-white/80">{{ edu.description }}</p>
              <p *ngIf="edu.metaNote" class="mt-1.5 text-xs md:text-sm leading-relaxed text-white/50 italic">{{ edu.metaNote }}</p>
              <div class="h-px bg-white/10 my-3"></div>
              <div class="flex flex-col gap-3">
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-widest text-cyan-100/70 mb-2">Core Coursework</h4>
                  <div class="flex flex-wrap gap-1.5">
                    <span *ngFor="let course of edu.courseHighlights" class="rounded-full border border-cyan-100/15 bg-white/[0.06] px-2 py-1 text-[10px] md:text-[11px] font-medium text-white/80">
                      {{ course }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-glass-wrapper>
  `,
})
export class EducationComponent {
  education = environment.education;
}
