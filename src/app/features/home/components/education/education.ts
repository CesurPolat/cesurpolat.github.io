import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 w-full max-w-4xl h-full overflow-y-auto flex flex-col">
      <div class="flex items-center gap-4 mb-12 border-b-4 border-black self-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        <h2 class="text-4xl font-black uppercase">Education</h2>
      </div>
      
      <div class="relative border-l-4 border-black ml-4 md:ml-6 pl-10 py-4 space-y-12">
        <div *ngFor="let edu of education" class="relative">
          <!-- Timeline point as a diamond -->
          <div class="absolute -left-[54px] top-1 w-6 h-6 bg-white border-4 border-black rotate-45 z-10"></div>
          
          <div class="hover:translate-x-4 transition-transform duration-300">
            <span class="inline-block bg-black text-white text-xs font-black px-3 py-1 mb-4 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] tracking-widest leading-none">{{ edu.year }}</span>
            <h3 class="font-black text-3xl uppercase leading-none mb-2 tracking-tighter">{{ edu.degree }}</h3>
            <p class="font-bold text-xl mb-3 text-black/60 italic">{{ edu.field }}</p>
            <div class="flex items-center gap-2 mb-6 border-b-2 border-black/10 pb-2">
              <p class="text-base font-black uppercase">{{ edu.institution }}</p>
              <a *ngIf="edu.link" [href]="edu.link" target="_blank" class="hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
            <div class="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all">
               <p class="font-medium text-lg leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
