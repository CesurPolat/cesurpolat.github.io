import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RightContentComponent } from './right-content';
import { LeftContentComponent } from './left-content';
import { SkillsComponent } from './skills';
import { ContactComponent } from './contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RightContentComponent, LeftContentComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  title = 'cesurpolat-github-io';

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.initGSAP();
  }

  private initGSAP() {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // MASAÜSTÜ: İlk bölümü (wrapper) sabitleyip içindeki iki sütunu yan yana görelim
      ScrollTrigger.create({
        trigger: ".section-1-wrapper",
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: 1
      });

      // Diğer dikey section'lar (Yetenekler, İletişim)
      const otherSections = gsap.utils.toArray('.section').filter((s: any) => 
        !s.classList.contains('section-1-left') && !s.classList.contains('section-1-right')
      );

      otherSections.forEach((section: any) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: 1
        });
      });
    });

    mm.add("(max-width: 768px)", () => {
      // MOBİL: Tüm bölümler (Sol, Sağ, Yetenekler, İletişim) ardışık olarak pinlenir
      const allMobileSections = gsap.utils.toArray('.section');

      allMobileSections.forEach((section: any) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: 1
        });
      });

      // Sol komponenti sağ komponent göründüğünde gizle
      const leftSection = document.querySelector('.section-1-left');
      const rightSection = document.querySelector('.section-1-right');

      if (leftSection && rightSection) {
        ScrollTrigger.create({
          trigger: rightSection,
          start: "center bottom",
          end: "top top",
          onEnter: () => gsap.to(leftSection, { opacity: 0, duration: 0.15, ease: "power2.inOut" }),
          onLeaveBack: () => gsap.to(leftSection, { opacity: 1, duration: 0.15, ease: "power2.inOut" })
        });
      }
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }
}
