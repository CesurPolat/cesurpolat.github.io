import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 w-full max-w-4xl">
      <h2 class="text-4xl font-black mb-8 border-b-4 border-black inline-block uppercase">Yetenekler</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div *ngFor="let s of skills" class="aspect-square border-4 border-black flex flex-col items-center justify-center p-4 hover:bg-black hover:text-white transition-colors duration-300">
          <span class="text-2xl font-bold mb-2">{{ s.icon }}</span>
          <span class="font-bold uppercase tracking-tighter">{{ s.name }}</span>
        </div>
      </div>
    </div>
  `
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'GSAP', icon: '✨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'UI/UX', icon: '🎨' },
    { name: 'Three.js', icon: '🧊' }
  ];
}
