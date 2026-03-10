import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontRotationWrapperComponent } from '../../../../shared/font-rotation-wrapper';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontRotationWrapperComponent],
  template: `
    <div class="p-8 w-full max-w-4xl h-full overflow-y-auto flex flex-col">
      <div class="flex items-center gap-4 mb-8 border-b-4 border-black self-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <h2 class="text-4xl font-black uppercase">Projects</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div *ngFor="let project of projects" class="border-4 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
          <h3 class="font-bold text-lg mb-2 uppercase">{{ project.name }}</h3>
          <p class="text-sm mb-3 leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-1.5">
            <span *ngFor="let tech of project.technologies" class="text-xs font-semibold px-2 py-0.5 border border-current">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
      <div class="mt-24 text-sm font-bold opacity-50 uppercase text-center">© 2026 <app-font-rotation-wrapper [enableTextAnimation]="true">Cesur Polat</app-font-rotation-wrapper></div>
    </div>
  `
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'Modern portfolio built with Angular and Tailwind CSS',
      technologies: ['Angular', 'TypeScript', 'Tailwind', 'GSAP']
    },
    {
      name: 'Task Manager',
      description: 'Full-stack app with real-time updates and collaboration features',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io']
    },
    {
      name: 'E-Commerce',
      description: 'Responsive e-commerce platform with payment integration',
      technologies: ['Angular', 'Firebase', 'Stripe', 'Bootstrap']
    },
    {
      name: 'Social Media',
      description: 'Social networking app with messaging and notifications',
      technologies: ['Angular', 'Firebase', 'Realtime DB', 'Auth']
    }
  ];
}
