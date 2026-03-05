import { Component } from '@angular/core';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

@Component({
  selector: 'app-bio-content',
  standalone: true,
  imports: [GlassWrapperComponent],
  template: `
    <div class="w-full h-full flex flex-col items-center justify-center p-4 lg:p-6 text-white text-base">
      <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl overflow-y-auto custom-scrollbar max-h-[85vh] w-full max-w-4xl">
        <div class="flex-1 flex flex-col justify-between h-full">
          <!-- Section 1: Header & Badges -->
          <header class="mb-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 class="text-3xl lg:text-4xl font-black mb-1 tracking-tight">Cesur POLAT</h1>
                <h3 class="text-base lg:text-lg font-medium text-blue-400">
                  Full-Stack Developer
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <a href="mailto:cesur.polat@cesurpolat.dev" target="_blank" class="hover:scale-105 transition-transform">
                  <img src="https://img.shields.io/badge/Email-blue?style=flat&logo=gmail&logoColor=white" alt="Email">
                </a>
                <a href="https://linkedin.com/in/cesurpolat" target="_blank" class="hover:scale-105 transition-transform">
                  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn">
                </a>
                <a href="https://github.com/CesurPolat" target="_blank" class="hover:scale-105 transition-transform">
                  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub">
                </a>
              </div>
            </div>
          </header>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-1">
            <!-- Left Column: Impact & Stack -->
            <div class="space-y-8">
              <section>
                <h3 class="text-sm font-bold uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                  🚀 Engineering Impact
                </h3>
                <ul class="space-y-3 text-sm text-white/80">
                  <li class="flex gap-2">
                    <span class="text-blue-500">•</span>
                    <span><b class="text-white">Performance:</b> 90% reduction in HVAC calc time.</span>
                  </li>
                  <li class="flex gap-2">
                    <span class="text-blue-500">•</span>
                    <span><b class="text-white">Architecture:</b> Migrated to gRPC microservices.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 class="text-sm font-bold uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                  🛠️ Tech Stack
                </h3>
                <div class="flex flex-wrap gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                  <img src="https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white" alt=".NET" class="h-5">
                  <img src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white" alt="Angular" class="h-5">
                  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" class="h-5">
                  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" class="h-5">
                  <img src="https://img.shields.io/badge/MSSQL-CC2927?style=flat&logo=microsoft-sql-server&logoColor=white" alt="MSSQL" class="h-5">
                </div>
              </section>
            </div>

            <!-- Right Column: Projects -->
            <section>
              <h3 class="text-sm font-bold uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                📂 Featured Projects
              </h3>
              <div class="space-y-4">
                <div class="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                  <div class="flex justify-between items-start mb-1">
                    <a href="https://github.com/CesurPolat/MiBudsClient" target="_blank" class="text-blue-400 font-bold text-sm hover:underline">MiBudsClient</a>
                    <span class="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 rounded">Python</span>
                  </div>
                  <p class="text-xs text-white/60 line-clamp-2">Desktop client for Redmi Buds 6 Play. Battery tracking & low-latency mode.</p>
                </div>

                <div class="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                  <div class="flex justify-between items-start mb-1">
                    <a href="https://github.com/CesurPolat/DubAI" target="_blank" class="text-blue-400 font-bold text-sm hover:underline">DubAI</a>
                    <span class="text-[10px] bg-red-500/20 text-red-300 px-1.5 rounded">Angular</span>
                  </div>
                  <p class="text-xs text-white/60 line-clamp-2">AI-powered transcription, translation, and automated dubbing.</p>
                </div>
              </div>
            </section>
          </div>

          <!-- Section 3: Footer Quote -->
          <footer class="pt-6 pb-4 md:pb-0 border-t border-white/10">
            <p class="text-sm italic text-white/90 text-center">
              "Code is the architecture of thought; to optimize is to honor the elegance of logic."
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
export class BioContentComponent {}
