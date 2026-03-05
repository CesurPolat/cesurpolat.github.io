import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 w-full max-w-4xl h-full overflow-y-auto flex flex-col">
      <h2 class="text-4xl font-black mb-8 border-b-4 border-black inline-block uppercase">Eğitim</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div *ngFor="let edu of education" class="border-4 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
          <h3 class="font-bold text-lg mb-2 uppercase">{{ edu.degree }}</h3>
          <p class="font-semibold text-sm mb-1">{{ edu.field }}</p>
          <p class="text-xs mb-3 opacity-70">{{ edu.institution }} • {{ edu.year }}</p>
          <p class="text-sm leading-relaxed">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  `
})
export class EducationComponent {
  education = [
    {
      degree: 'Lisans',
      field: 'Bilgisayar Mühendisliği',
      institution: 'Üniversite',
      year: '2018 - 2022',
      description: 'GPA: 3.8/4.0'
    },
    {
      degree: 'Sertifika',
      field: 'Full Stack Development',
      institution: 'Bootcamp',
      year: '2020',
      description: 'Intensive 12-week program'
    },
    {
      degree: 'Sertifika',
      field: 'Angular & TypeScript',
      institution: 'Online Course',
      year: '2021',
      description: 'Advanced web development'
    },
    {
      degree: 'Sertifika',
      field: 'UI/UX Design',
      institution: 'Design Academy',
      year: '2022',
      description: 'User experience fundamentals'
    }
  ];
}
