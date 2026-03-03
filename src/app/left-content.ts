import { Component } from '@angular/core';
import { GlassWrapperComponent } from './shared/glass-wrapper';

@Component({
    selector: 'app-left-content',
    standalone: true,
    imports: [GlassWrapperComponent],
    template: `
    <div class="w-full h-full flex flex-col items-center justify-center">
        <app-glass-wrapper panelClass="glass-panel p-10 rounded-3xl flex flex-col items-center justify-center px-6 py-8">
      <div class="profile-container mb-8">
        <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl flex items-center justify-center bg-white/10">
          <span class="text-4xl">👤</span>
        </div>
      </div>
      <h1 class="text-3xl font-black uppercase tracking-tight mb-3 text-white drop-shadow-lg">Cesur Polat</h1>
      <p class="text-sm font-medium text-white/90 mb-6 drop-shadow">Full Stack Developer</p>
      <div class="flex flex-col gap-3 w-full max-w-[200px]">
        <a href="#" class="glass-button px-4 py-2 rounded-lg text-sm font-bold text-white text-center hover:bg-white/20 transition-all">
          Portfolio
        </a>
        <a href="#" class="glass-button px-4 py-2 rounded-lg text-sm font-bold text-white text-center hover:bg-white/20 transition-all">
          About
        </a>
        <a href="#" class="glass-button px-4 py-2 rounded-lg text-sm font-bold text-white text-center hover:bg-white/20 transition-all">
          Contact
        </a>
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
    .glass-panel {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .glass-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .glass-button:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }
  `]
})
export class LeftContentComponent { }
