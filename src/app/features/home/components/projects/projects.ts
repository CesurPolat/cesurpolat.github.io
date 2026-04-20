import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontRotationWrapperComponent } from '../../../../shared/font-rotation-wrapper';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontRotationWrapperComponent, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-5xl">
      <div class="w-full h-full overflow-hidden flex flex-col min-h-0 text-white">
        <div class="flex items-center gap-3 md:gap-4 mb-5 md:mb-7 border-b border-white/20 pb-3 self-start text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight">Projects</h2>
        </div>

        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-1 md:pr-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div *ngFor="let project of projects"
                class="group relative border border-white/15 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/25 shadow-xl flex flex-col h-90 overflow-hidden rounded-xl">

              <div class="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                   [style.backgroundImage]="project.bgImage ? 'url(' + project.bgImage + ')' : 'none'"
                   [style.backgroundColor]="project.bgColor || '#1f2937'">
                <div class="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors"></div>
              </div>

              <div class="relative z-10 p-6 flex flex-col h-full text-white">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-14 h-14 border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shrink-0 rounded-lg">
                    <img *ngIf="project.logo" [src]="project.logo" class="w-full h-full object-cover" [alt]="project.name">
                    <span *ngIf="!project.logo" class="text-xl font-black tracking-tighter uppercase">{{ project.name.substring(0,2) }}</span>
                  </div>

                  <a *ngIf="project.link" [href]="project.link" target="_blank" class="p-2 bg-white/15 text-white hover:bg-white/25 transition-colors border border-white/30 rounded-lg backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>

                <div class="mt-auto">
                  <h3 class="text-2xl font-black uppercase mb-2 drop-shadow-lg text-white">{{ project.name }}</h3>
                  <p class="text-sm font-medium mb-4 text-white/90 line-clamp-2 group-hover:line-clamp-none transition-all">{{ project.description }}</p>

                  <div class="flex flex-wrap gap-1.5 mt-2">
                    <span *ngFor="let tech of project.technologies"
                          class="text-[10px] font-black px-2 py-0.5 bg-white/10 border border-white/30 uppercase tracking-tighter rounded">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 md:mt-8 text-xs md:text-sm font-bold text-white/65 uppercase text-center">© 2026 <app-font-rotation-wrapper [enableTextAnimation]="true">Cesur Polat</app-font-rotation-wrapper></div>
      </div>
    </app-glass-wrapper>
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
