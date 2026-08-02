import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-bio-content',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <div class="w-full h-full flex flex-col items-center justify-center p-4 lg:p-6 text-white text-base">
      <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl overflow-y-auto custom-scrollbar max-h-[85vh] w-full max-w-4xl">
        <div class="flex-1 flex flex-col justify-between h-full">
          <!-- Section 1: Header & Badges -->
          <header class="mb-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 class="text-3xl lg:text-4xl font-black mb-2 tracking-tight text-white">{{ profile.name }}</h1>
                <p class="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-cyan-100/80">
                  {{ profile.title }}
                </p>
              </div>
              <div class="flex flex-wrap gap-2">
                <a [href]="'mailto:' + profile.email" target="_blank" class="hover:scale-105 transition-transform">
                  <img src="https://img.shields.io/badge/Email-blue?style=flat&logo=gmail&logoColor=white" alt="Email">
                </a>
                <a [href]="profile.linkedin" target="_blank" class="hover:scale-105 transition-transform">
                  <img src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff" alt="LinkedIn">
                </a>
                <a [href]="profile.github" target="_blank" class="hover:scale-105 transition-transform">
                  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub">
                </a>
              </div>
            </div>
          </header>

          <div class="flex flex-col gap-8 mb-8 flex-1">
            <!-- Top Row: Impact & Tech Stack -->
            <div class="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8">
              <section>
                <h2 class="text-sm font-bold uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                  🚀 Engineering Impact
                </h2>
                <ul class="space-y-3.5 text-sm text-white/80">
                  <li *ngFor="let item of profile.impact" class="flex items-start gap-2.5">
                    <span class="text-blue-400 mt-[3px] shrink-0 text-[15px] leading-none">•</span>
                    <p class="leading-relaxed m-0 text-white/75">
                      <b class="text-white font-bold mr-1">{{ item.label }}:</b> 
                      <span [innerHTML]="item.desc"></span>
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 class="text-sm font-bold uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                  🛠️ Tech Stack
                </h2>
                <div class="flex flex-wrap gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                  <img *ngFor="let tech of profile.techStack" [src]="tech.badge" [alt]="tech.name" class="h-5">
                </div>
              </section>
            </div>

            <!-- Bottom Row: Projects -->
            <section>
              <h2 class="text-sm font-bold uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                📂 Featured Projects
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div *ngFor="let proj of profile.featuredProjects" class="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                  <div class="flex justify-between items-start mb-1">
                    <a [href]="proj.link" target="_blank" class="text-blue-400 font-bold text-sm hover:underline">{{ proj.name }}</a>
                    <span class="text-[10px] px-1.5 rounded" [ngClass]="proj.techClass">{{ proj.tech }}</span>
                  </div>
                  <p class="text-xs text-white/60 line-clamp-2">{{ proj.desc }}</p>
                </div>
              </div>
            </section>
          </div>

          <!-- Section 3: Footer Quote -->
          <footer class="pt-6 pb-4 md:pb-0 border-t border-white/10">
            <p class="text-sm italic text-white/90 text-center">
              {{ profile.quote }}
            </p>
          </footer>
        </div>
      </app-glass-wrapper>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class BioContentComponent {
  profile = environment.profile;
}
