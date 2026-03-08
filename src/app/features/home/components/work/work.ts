import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #container class="p-8 w-full max-w-4xl h-full overflow-y-auto flex flex-col">
      <h2 class="text-4xl font-black mb-16 border-b-4 border-black inline-block uppercase self-start">Deneyim</h2>
      
      <!-- Timeline Container -->
      <div class="relative px-4">
        
        <!-- Experiences Content -->
        <div class="relative">
          <!-- Common Experience Grid/List -->
          <div class="grid gap-0 relative" [style.grid-template-columns]="'repeat(' + cols() + ', 1fr)'">
            @for (exp of experiences; track exp.title; let i = $index; let last = $last) {
              <div class="relative group p-6 md:p-12 flex flex-col">

              <p class="text-red-500">{{ i }}</p>
              
              <!-- Snake Path (Dynamic Grid Logic) -->
              <div class="absolute inset-0 pointer-events-none">
                <!-- Horizontal Lines -->
                <div class="absolute top-0 left-0 right-0 h-1.5 bg-black">1 - {{ i }}</div>
                @if (shouldShowTopHorizontal(i)) {
                }
                @if (shouldShowBottomHorizontal(i, last)) {
                   <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-black">2 - {{ i }}</div>
                }

                <!-- Vertical Connectors -->
                @if (shouldShowRightVertical(i, last)) {
                  <div class="absolute top-0 bottom-0 right-0 w-1.5 bg-black">3 - {{ i }}</div>
                }
                @if (shouldShowLeftVertical(i, last)) {
                  <div class="absolute top-0 bottom-0 left-0 w-1.5 bg-black">4 - {{ i }}</div>
                }
              </div>

              <!-- Current Badge (Only for first item) -->
              @if (i === 0) {
                <span class="absolute top-8 right-8 bg-black text-white px-3 py-1 text-xs font-bold uppercase transform rotate-3 transition-transform group-hover:rotate-0 group-hover:bg-white group-hover:text-black z-20">Current</span>
              }

              <!-- Experience Card -->
              <div class="relative border-4 border-black p-6 md:p-8 bg-white transition-all duration-300 z-10 flex-1 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-black group-hover:text-white mt-4 md:mt-0">
                <h3 class="font-black text-lg md:text-xl mb-3 uppercase tracking-tighter">{{ exp.title }}</h3>
                <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-4 text-xs md:text-sm font-bold opacity-80 uppercase italic">
                  <span>{{ exp.company }}</span>
                  <span class="hidden md:block w-1 h-1 bg-current rounded-full"></span>
                  <span>{{ exp.period }}</span>
                </div>
                <p class="text-xs md:text-sm leading-relaxed font-medium flex-1">{{ exp.description }}</p>
              </div>
            </div>
          }
          </div>
        </div>
      </div>
    </div>
  `
})
export class WorkComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  
  experiences = [
    { title: 'Senior Frontend', company: 'Tech Company', period: '2023 - Present', description: 'Leading frontend development and architecture decisions' },
    { title: 'Full Stack Developer', company: 'Digital Agency', period: '2021 - 2023', description: 'Building responsive web applications with Angular and Node.js' },
    { title: 'Junior Developer', company: 'Startup', period: '2020 - 2021', description: 'Developing web applications and learning modern technologies' },
    { title: 'Intern', company: 'Software House', period: '2019 - 2020', description: 'Learned modern web technologies and assisted on projects' }
  ];

  cols = signal(1);
  private readonly minCardWidth = 320; // Minimum card width in pixels

  ngAfterViewInit() {
    this.calculateCols();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateCols();
  }

  private calculateCols() {
    if (this.container) {
      const width = this.container.nativeElement.offsetWidth;
      // Limit grid for better snake visual
      this.cols.set(Math.min(Math.max(1, Math.floor(width / this.minCardWidth)), 3));
    }
  }

  getRow(i: number): number {
    return Math.floor(i / this.cols());
  }

  // Dynamic Snake Logic
  shouldShowTopHorizontal(i: number): boolean {
    const row = this.getRow(i);
    return row % 2 === 0; // Even rows go Right
  }

  shouldShowBottomHorizontal(i: number, last: boolean): boolean {
    const row = this.getRow(i);
    const totalRows = Math.ceil(this.experiences.length / this.cols());
    const isLastRow = row === totalRows - 1;
    return isLastRow; // Odd rows go Left
  }

  shouldShowRightVertical(i: number, last: boolean): boolean {
    const c = this.cols();
    const row = this.getRow(i);
    const isAtRightEdge = (i + 1) % c === 0;
    return !last && row % 2 === 0 && isAtRightEdge;
  }

  shouldShowLeftVertical(i: number, last: boolean): boolean {
    const c = this.cols();
    const row = this.getRow(i);
    const isAtLeftEdge = i % c === 0;
    return !last && row % 2 !== 0 && isAtLeftEdge;
  }
}
