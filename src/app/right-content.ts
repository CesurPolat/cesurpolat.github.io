import { Component } from '@angular/core';
import { GlassWrapperComponent } from './shared/glass-wrapper';

@Component({
  selector: 'app-right-content',
  standalone: true,
  imports: [GlassWrapperComponent],
  template: `
    <div class="glass-content w-full h-full flex flex-col items-center justify-center">
      <app-glass-wrapper panelClass="glass-card p-10 rounded-3xl">
        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white drop-shadow-2xl">
          Modern<br>Portfolio
        </h1>
        <p class="text-xl md:text-2xl font-medium text-white/95 drop-shadow-lg leading-relaxed">
          Creative developer crafting beautiful digital experiences with passion and precision.
        </p>
        <div class="mt-10 flex gap-4 justify-center">
          <button class="glass-btn px-8 py-3 rounded-full font-bold text-white hover:scale-105 transition-transform">
            View Work
          </button>
          <button class="glass-btn-outline px-8 py-3 rounded-full font-bold text-white hover:scale-105 transition-transform">
            Get in Touch
          </button>
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
    .glass-content {
      background: transparent;
    }
    .glass-card {
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
    }
    .glass-btn {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .glass-btn-outline {
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
    }
  `]
})
export class RightContentComponent {}
