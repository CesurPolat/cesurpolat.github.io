import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 w-full max-w-4xl h-full overflow-y-auto flex flex-col">
      <h2 class="text-4xl font-black mb-8 border-b-4 border-black inline-block uppercase">Projeler</h2>
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
