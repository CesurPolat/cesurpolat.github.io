import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontRotationWrapperComponent } from '../../../../shared/font-rotation-wrapper';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontRotationWrapperComponent],
  template: `
    <div class="p-8 w-full max-w-5xl h-full overflow-y-auto flex flex-col custom-scrollbar">
      <div class="flex items-center gap-4 mb-12 border-b-4 border-black self-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <h2 class="text-4xl font-black uppercase">Projects</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div *ngFor="let project of projects" 
             class="group relative border-4 border-black bg-white transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:shadow-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-[320px] overflow-hidden">
          
          <!-- Project Background Image/Color -->
          <div class="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
               [style.backgroundImage]="project.bgImage ? 'url(' + project.bgImage + ')' : 'none'"
               [style.backgroundColor]="project.bgColor || '#f3f4f6'">
            <!-- Overlay to ensure text readability -->
            <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
          </div>

          <!-- Content Container -->
          <div class="relative z-10 p-6 flex flex-col h-full text-white">
            <div class="flex justify-between items-start mb-4">
              <!-- Logo or Initials -->
              <div class="w-14 h-14 border-4 border-white bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
                <img *ngIf="project.logo" [src]="project.logo" class="w-full h-full object-cover" [alt]="project.name">
                <span *ngIf="!project.logo" class="text-xl font-black tracking-tighter uppercase">{{ project.name.substring(0,2) }}</span>
              </div>
              
              <!-- External Link if any -->
              <a *ngIf="project.link" [href]="project.link" target="_blank" class="p-2 bg-white text-black hover:bg-black hover:text-white transition-colors border-2 border-black shadow-[4px_4px_00px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>

            <div class="mt-auto">
              <h3 class="text-2xl font-black uppercase mb-2 drop-shadow-lg text-white font-black">{{ project.name }}</h3>
              <p class="text-sm font-medium mb-4 line-clamp-2 drop-shadow-md group-hover:line-clamp-none transition-all">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span *ngFor="let tech of project.technologies" 
                      class="text-[10px] font-black px-2 py-0.5 bg-black border border-white uppercase tracking-tighter">
                  {{ tech }}
                </span>
              </div>
            </div>
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
      name: 'MiBudsClient',
      description: 'Desktop client for Redmi Buds 6 Play. Battery tracking & low-latency mode.',
      technologies: ['Python', 'Bleak', 'Tkinter'],
      link: 'https://github.com/CesurPolat/MiBudsClient',
      bgColor: '#1a1a1a',
      bgImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=40&w=800&auto=format&fit=crop',
      logo: null
    },
    {
      name: 'DubAI',
      description: 'AI-powered transcription, translation, and automated dubbing platform.',
      technologies: ['Angular', 'Node.js', 'PyTorch', 'FFmpeg'],
      link: 'https://github.com/CesurPolat/DubAI',
      bgColor: '#2D3436',
      bgImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=40&w=800&auto=format&fit=crop',
      logo: null
    },
    {
      name: 'Termoware',
      description: 'Selection and quotation portal for leading industry companies in HVAC.',
      technologies: ['ASP.NET', 'C#', 'MSSQL', 'gRPC'],
      link: null,
      bgColor: '#0984E3',
      bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=40&w=800&auto=format&fit=crop',
      logo: null
    },
    {
      name: 'Storage Service',
      description: 'Multi-tenant storage service with file compression and JWT access control.',
      technologies: ['Angular', '.NET Core', 'Redis'],
      link: null,
      bgColor: '#6C5CE7',
      bgImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=40&w=800&auto=format&fit=crop',
      logo: null
    }
  ];
}
