import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="p-8 w-full max-w-4xl flex flex-col items-center">
      <h2 class="text-6xl font-black mb-12 border-b-8 border-black inline-block uppercase">İletişime Geç</h2>
      <div class="flex flex-wrap justify-center gap-12 font-bold text-2xl uppercase tracking-tighter">
        <a href="mailto:hello@cesurpolat.com" class="hover:underline decoration-8 decoration-black">Email</a>
        <a href="https://linkedin.com" class="hover:underline decoration-8 decoration-black">LinkedIn</a>
        <a href="https://github.com" class="hover:underline decoration-8 decoration-black">GitHub</a>
        <a href="https://twitter.com" class="hover:underline decoration-8 decoration-black">Twitter</a>
      </div>
      <div class="mt-24 text-sm font-bold opacity-50 uppercase">© 2026 Cesur Polat</div>
    </div>
  `
})
export class ContactComponent {}
