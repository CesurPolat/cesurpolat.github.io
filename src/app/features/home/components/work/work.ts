import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 w-full max-w-4xl h-full overflow-y-auto flex flex-col">
      <h2 class="text-4xl font-black mb-16 border-b-4 border-black inline-block uppercase self-start">Deneyim</h2>
      
      <!-- Timeline Container -->
      <div class="relative px-4">
        
        <!-- Desktop Snake Line (Pure CSS) -->
        <div class="hidden md:block">
          <!-- Top Horizontal -->
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-black z-0"></div>
          <!-- Middle Horizontal -->
          <div class="absolute top-1/2 left-0 right-0 h-1.5 bg-black z-0 -translate-y-1/2"></div>
          <!-- Bottom Horizontal -->
          <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-black z-0"></div>
          
          <!-- Right Vertical (Connecting Top to Middle) -->
          <div class="absolute top-0 bottom-1/2 right-0 w-1.5 bg-black z-0"></div>
          <!-- Left Vertical (Connecting Middle to Bottom) -->
          <div class="absolute top-1/2 bottom-0 left-0 w-1.5 bg-black z-0"></div>
          
          <!-- End Line Extension (Bottom Left) -->
          <div class="absolute -bottom-6 left-0 w-1.5 h-6 bg-black z-0"></div>
        </div>

        <!-- Experiences Content -->
        <div class="relative">
          <!-- Desktop Grid -->
          <div class="hidden md:grid grid-cols-2 gap-0 relative">
            <!-- 1. Senior Frontend -->
            <div class="relative group p-12 flex flex-col">
              <div class="absolute top-12 left-12 w-6 h-6 bg-black rotate-45 z-30 transition-transform group-hover:scale-125 group-hover:bg-white border-2 border-black flex items-center justify-center overflow-hidden -translate-x-1/2 -translate-y-1/2">
                <div class="w-full h-full bg-white scale-[0.6]"></div>
              </div>
              <div class="relative border-4 border-black p-8 bg-white transition-all duration-300 z-10 flex-1 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-black group-hover:text-white">
                <span class="absolute -top-4 -right-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase transform rotate-3 transition-transform group-hover:rotate-0 group-hover:bg-white group-hover:text-black">Current</span>
                <h3 class="font-black text-xl mb-3 uppercase tracking-tighter">{{ experiences[0].title }}</h3>
                <div class="flex items-center gap-2 mb-4 text-sm font-bold opacity-80 uppercase italic">
                  <span>{{ experiences[0].company }}</span>
                  <span class="w-1 h-1 bg-current rounded-full"></span>
                  <span>{{ experiences[0].period }}</span>
                </div>
                <p class="text-sm leading-relaxed font-medium flex-1">{{ experiences[0].description }}</p>
              </div>
            </div>

            <!-- 2. Full Stack Developer -->
            <div class="relative group p-12 flex flex-col">
              <div class="absolute top-12 right-12 w-6 h-6 bg-black rotate-45 z-30 transition-transform group-hover:scale-125 group-hover:bg-white border-2 border-black flex items-center justify-center overflow-hidden translate-x-1/2 -translate-y-1/2">
                <div class="w-full h-full bg-white scale-[0.6]"></div>
              </div>
              <div class="relative border-4 border-black p-8 bg-white transition-all duration-300 z-10 flex-1 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-black group-hover:text-white">
                <h3 class="font-black text-xl mb-3 uppercase tracking-tighter">{{ experiences[1].title }}</h3>
                <div class="flex items-center gap-2 mb-4 text-sm font-bold opacity-80 uppercase italic">
                  <span>{{ experiences[1].company }}</span>
                  <span class="w-1 h-1 bg-current rounded-full"></span>
                  <span>{{ experiences[1].period }}</span>
                </div>
                <p class="text-sm leading-relaxed font-medium flex-1">{{ experiences[1].description }}</p>
              </div>
            </div>

            <!-- 3. Junior Developer -->
            <div class="relative group p-12 flex flex-col">
              <div class="absolute bottom-12 right-12 w-6 h-6 bg-black rotate-45 z-30 transition-transform group-hover:scale-125 group-hover:bg-white border-2 border-black flex items-center justify-center overflow-hidden translate-x-1/2 translate-y-1/2">
                <div class="w-full h-full bg-white scale-[0.6]"></div>
              </div>
              <div class="relative border-4 border-black p-8 bg-white transition-all duration-300 z-10 flex-1 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-black group-hover:text-white">
                <h3 class="font-black text-xl mb-3 uppercase tracking-tighter">{{ experiences[2].title }}</h3>
                <div class="flex items-center gap-2 mb-4 text-sm font-bold opacity-80 uppercase italic">
                  <span>{{ experiences[2].company }}</span>
                  <span class="w-1 h-1 bg-current rounded-full"></span>
                  <span>{{ experiences[2].period }}</span>
                </div>
                <p class="text-sm leading-relaxed font-medium flex-1">{{ experiences[2].description }}</p>
              </div>
            </div>

            <!-- 4. Intern -->
            <div class="relative group p-12 flex flex-col">
              <div class="absolute bottom-12 left-12 w-6 h-6 bg-black rotate-45 z-30 transition-transform group-hover:scale-125 group-hover:bg-white border-2 border-black flex items-center justify-center overflow-hidden -translate-x-1/2 translate-y-1/2">
                <div class="w-full h-full bg-white scale-[0.6]"></div>
              </div>
              <div class="relative border-4 border-black p-8 bg-white transition-all duration-300 z-10 flex-1 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-black group-hover:text-white">
                <h3 class="font-black text-xl mb-3 uppercase tracking-tighter">{{ experiences[3].title }}</h3>
                <div class="flex items-center gap-2 mb-4 text-sm font-bold opacity-80 uppercase italic">
                  <span>{{ experiences[3].company }}</span>
                  <span class="w-1 h-1 bg-current rounded-full"></span>
                  <span>{{ experiences[3].period }}</span>
                </div>
                <p class="text-sm leading-relaxed font-medium flex-1">{{ experiences[3].description }}</p>
              </div>
            </div>
          </div>

          <!-- Mobile Snake List -->
          <div class="md:hidden flex flex-col relative mt-16 px-6">
            <div *ngFor="let exp of experiences; let i = index; let last = last" class="relative">
              
              <!-- Snake Path Slice -->
              <div class="flex flex-col relative pb-20">
                
                <!-- Horizontal segment (Top of the current card section) -->
                <div [class]="(i % 2 === 0 ? 'left-0 right-0' : 'left-0 right-0') + ' absolute top-0 h-1.5 bg-black z-0'"></div>
                
                <!-- Vertical connector (Only between cards) -->
                <ng-container *ngIf="!last">
                  <!-- Right corner to next section -->
                  <div *ngIf="i % 2 === 0" class="absolute top-0 bottom-0 right-0 w-1.5 bg-black z-0"></div>
                  <!-- Left corner to next section -->
                  <div *ngIf="i % 2 !== 0" class="absolute top-0 bottom-0 left-0 w-1.5 bg-black z-0"></div>
                </ng-container>

                <!-- Diamond Marker (Turn points) -->
                <div *ngIf="!last" [class]="(i % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2') + ' absolute top-0 w-6 h-6 bg-black rotate-45 border-2 border-black flex items-center justify-center z-20'">
                    <div class="w-full h-full bg-white scale-[0.6]"></div>
                </div>

                <!-- Experience Card: Centered and resized for breathing room -->
                <div class="relative w-full border-4 border-black p-6 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10 mx-auto max-w-[75%] mt-8">
                  <h3 class="font-black text-lg mb-2 uppercase tracking-tighter">{{ exp.title }}</h3>
                  <div class="flex flex-col gap-1 mb-3 text-xs font-bold opacity-70 italic uppercase">
                    <span>{{ exp.company }}</span>
                    <span>{{ exp.period }}</span>
                  </div>
                  <p class="text-sm font-medium leading-relaxed">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class WorkComponent {
  experiences = [
    {
      title: 'Senior Frontend',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Leading frontend development and architecture decisions'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2021 - 2023',
      description: 'Building responsive web applications with Angular and Node.js'
    },
    {
      title: 'Junior Developer',
      company: 'Startup',
      period: '2020 - 2021',
      description: 'Developing web applications and learning modern technologies'
    },
    {
      title: 'Intern',
      company: 'Software House',
      period: '2019 - 2020',
      description: 'Learned modern web technologies and assisted on projects'
    }
  ];
}
