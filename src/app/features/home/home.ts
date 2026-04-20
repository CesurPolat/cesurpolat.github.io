import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioContentComponent } from './components/bio-content/bio-content.component';
import { WorkComponent } from './components/work/work';
import { EducationComponent } from './components/education/education';
import { ProjectsComponent } from './components/projects/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProfileCardComponent } from './components/profile-card/profile-card';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent, BioContentComponent, WorkComponent, EducationComponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.initGSAP();
  }

  private initGSAP() {
    const mm = gsap.matchMedia();

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const leftSection = document.querySelector('.section-1-left');
    const rightSection = document.querySelector('.section-1-right');

    const getSnapSections = () => {
      const baseSections = window.innerWidth <= 768
        ? gsap.utils.toArray<HTMLElement>('.section')
        : gsap.utils.toArray<HTMLElement>([
            '.section-1-wrapper',
            '.section-2',
            '.section-3',
            '.section-4'
          ].join(', '));

      return baseSections.sort((a, b) => a.offsetTop - b.offsetTop);
    };

    const getSnapPoints = () => {
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (maxScroll <= 0) return [0];

      const sections = getSnapSections();
      if (!sections.length) return [0];

      return sections.map((section) => {
        const centerAlignedScroll = section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2);
        const clamped = gsap.utils.clamp(0, maxScroll, centerAlignedScroll);
        return clamped / maxScroll;
      });
    };

    ScrollTrigger.create({
      trigger: this.container.nativeElement,
      start: 'top top',
      end: 'bottom bottom',
      invalidateOnRefresh: true,
      snap: {
        snapTo: (progress: number, self: any) => {
          const points = getSnapPoints();
          const directionalSnap = ScrollTrigger.snapDirectional(points);
          return directionalSnap(progress, self?.direction || 1);
        },
        directional: true,
        duration: { min: 0.12, max: 0.3 },
        ease: 'power2.inOut'
      }
    });

    mm.add('(max-width: 768px)', () => {
      if (!leftSection || !rightSection) return;

      gsap.set(leftSection, { autoAlpha: 1 });

      gsap.to(leftSection, {
        autoAlpha: 0,
        ease: 'none',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: rightSection,
          start: 'top 80%',
          end: 'top 35%',
          scrub: true
        }
      });
    });

    ScrollTrigger.refresh();
  }
}
