import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-5 lg:p-8 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-6xl">
      <div #container class="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col pr-1 md:pr-2 text-white">
        <div class="flex items-center gap-4 mb-10 md:mb-12 border-b border-white/20 pb-3 self-start text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight">Experience</h2>
        </div>

        <div class="relative px-1 md:px-3">
          <div class="relative">
            <div class="grid gap-0 relative" [style.grid-template-columns]="'repeat(' + cols() + ', 1fr)'">
              @for (exp of experiences; track exp.title; let i = $index; let last = $last) {
                <div class="relative group p-4 md:p-8 flex flex-col">
                  <div class="absolute inset-0 pointer-events-none">
                    @if (shouldShowTopHorizontal(i)) {
                      <div class="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
                    }
                    @if (shouldShowBottomHorizontal(i)) {
                      <div class="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
                    }

                    @if (shouldShowRightVertical(i)) {
                      <div class="absolute top-0 bottom-0 right-0 w-px bg-white/20"></div>
                    }
                    @if (shouldShowLeftVertical(i)) {
                      <div class="absolute top-0 bottom-0 left-0 w-px bg-white/20"></div>
                    }
                  </div>

                  @if (i === 0) {
                    <span class="absolute top-6 right-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-colors duration-300 group-hover:bg-white/20 z-20">Current</span>
                  }

                  <div class="relative border border-white/15 p-5 md:p-7 bg-white/5 transition-all duration-300 z-10 flex-1 flex flex-col rounded-xl shadow-xl hover:bg-white/10 hover:border-white/25 mt-3 md:mt-0">
                    <h3 class="font-black text-base md:text-lg mb-3 uppercase tracking-tight text-white">{{ exp.title }}</h3>
                    <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-4 text-xs md:text-sm font-semibold text-white/80 uppercase italic">
                      <div class="flex items-center gap-1">
                        <span>{{ exp.company }}</span>
                        <a *ngIf="exp.link" [href]="exp.link" target="_blank" class="text-white/80 hover:text-blue-300 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      </div>
                      <span class="hidden md:block w-1 h-1 bg-white/40 rounded-full"></span>
                      <span>{{ exp.period }}</span>
                    </div>
                    <p class="text-xs md:text-sm leading-relaxed font-medium text-white/85 flex-1">{{ exp.description }}</p>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
      </div>
    </app-glass-wrapper>
  `
})
export class WorkComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  
  experiences = [
    { 
      title: 'Full-Stack Developer (Full-time)', 
      company: 'Primeware Software Solutions', 
      link: 'https://primeware.com.tr',
      period: 'Jul 2024 - Mar 2025 • 9 mos', 
      description: 'Led code refactoring and optimization on the Termoware platform using ASP.NET. Developed calculation services for HVAC systems, reducing processing time by 90%. Migrated systems to gRPC microservices and managed infrastructure on Cloudflare and IIS.' 
    },
    { 
      title: 'Full-Stack Developer (Internship)', 
      company: 'Primeware Software Solutions', 
      link: 'https://primeware.com.tr',
      period: 'Jan 2024 - Jun 2024 • 6 mos', 
      description: 'Built a multi-tenant identity authentication system using .NET and MSSQL. Designed a multi-tenant storage service with file compression and JWT access control using Angular and .NET.' 
    },
    { 
      title: 'IT Technician (Internship)', 
      company: 'TÜRASAŞ', 
      link: 'https://www.turasas.gov.tr',
      period: 'Aug 2023 - Sep 2023 • 2 mos', 
      description: 'Installed and maintained computer systems, Windows setup, image recovery, and configured network equipment for reliable connectivity.' 
    },
    { 
      title: 'Angular Developer (Internship)', 
      company: 'Digisoft Software', 
      link: 'https://digisoft.com.tr',
      period: 'Jul 2021 - Sep 2021 • 3 mos', 
      description: 'Developed CRM forms and page layouts using Angular. Implemented a real-time notification system using Firebase Cloud Messaging (FCM).' 
    }
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
      // If mobile width (< 640px typically for md: prefix), force 1 column
      if (window.innerWidth < 640) {
        this.cols.set(1);
        return;
      }

      // If there is an odd number of items, use 3 columns on desktop if possible
      if (this.experiences.length % 2 !== 0 && window.innerWidth >= 1024) {
        this.cols.set(3);
        return;
      } else if (this.experiences.length % 2 === 0 && window.innerWidth >= 1024) {
        this.cols.set(2);
        return;
      }

      // Limit grid for better snake visual
      this.cols.set(Math.min(Math.max(1, Math.floor(width / this.minCardWidth)), 3));
    }
  }

  getRow(i: number): number {
    return Math.floor(i / this.cols());
  }

  // Dynamic Snake Logic
  shouldShowTopHorizontal(i: number): boolean {
    return this.getRow(i) === 0; // Her kutunun üstünde çizgi olsun
  }

  shouldShowBottomHorizontal(i: number): boolean {
    const row = this.getRow(i);
    const totalRows = Math.ceil(this.experiences.length / this.cols());
    const isLastRow = row === totalRows - 1;
    const hasNextItemBelow = i + this.cols() < this.experiences.length;
    return true; // Her kutunun altında çizgi olsun
    //return isLastRow || !hasNextItemBelow;
  }

  shouldShowRightVertical(i: number): boolean {
    const c = this.cols();
    const row = this.getRow(i);
    const isAtRightEdge = (i + 1) % c === 0;
    return row % 2 === 0 && isAtRightEdge;
  }

  shouldShowLeftVertical(i: number): boolean {
    const c = this.cols();
    const row = this.getRow(i);
    const isAtLeftEdge = i % c === 0;
    return row % 2 !== 0 && isAtLeftEdge;
  }
}
