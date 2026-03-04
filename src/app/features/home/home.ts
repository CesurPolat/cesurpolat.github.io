import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioContentComponent } from './components/bio-content/bio-content.component';
import { SkillsComponent } from './components/skills';
import { ContactComponent } from './components/contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProfileCardComponent } from './components/profile-card/profile-card';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent, BioContentComponent, SkillsComponent, ContactComponent],
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
