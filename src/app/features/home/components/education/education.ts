import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-4 lg:p-5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-none">
      <div class="w-full h-full overflow-y-auto custom-scrollbar pr-1 md:pr-2 flex flex-col text-white">
        <div class="flex items-center gap-3 mb-6 border-b border-white/20 pb-2 self-start text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight">Education</h2>
        </div>

        <div class="relative border-l border-white/20 ml-2 md:ml-3 pl-6 md:pl-7 py-2 flex-1 flex flex-col justify-between gap-5 md:gap-6">
          <div *ngFor="let edu of education" class="relative">
            <div class="absolute -left-7.5 md:-left-8.5 top-1 w-4 h-4 bg-white/10 border border-white/30 rotate-45 backdrop-blur-sm z-10"></div>

            <div class="transition-transform duration-300 hover:translate-x-1">
              <span class="inline-block bg-white/10 border border-white/25 text-white text-[9px] font-black px-2.5 py-1 mb-2 uppercase rounded-full tracking-wider leading-none">{{ edu.year }}</span>
              <h3 class="font-black text-xl md:text-2xl uppercase leading-tight mb-1.5 tracking-tight text-white">{{ edu.degree }}</h3>
              <p class="font-bold text-base md:text-lg mb-2.5 text-white/70 italic">{{ edu.field }}</p>
              <div class="flex items-center gap-2 mb-3 border-b border-white/15 pb-2">
                <p class="text-xs md:text-sm font-black uppercase text-white/90">{{ edu.institution }}</p>
                <a *ngIf="edu.link" [href]="edu.link" target="_blank" class="text-white/80 hover:text-blue-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <div class="border border-white/15 p-3.5 md:p-4 bg-white/5 rounded-xl shadow-xl transition-all hover:bg-white/10 hover:border-white/25">
                <p class="font-medium text-sm md:text-base leading-relaxed text-white/85">{{ edu.description }}</p>
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
      link: 'https://subu.edu.tr/?lang=en',
      year: 'Sep 2022 – Jun 2024',
      description: 'GPA: 3.46/4.00 | Sakarya, Turkey'
    },
    {
      degree: 'Vocational Technical High School',
      field: 'Web Programming',
      institution: 'Borsa Istanbul Mehmet Akif Ersoy',
      link: 'https://makifeml.meb.k12.tr/',
      year: 'Sep 2018 - Jun 2022',
      description: 'Sakarya, Turkey'
    }
  ];
}
