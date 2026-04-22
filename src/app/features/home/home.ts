import { Component, AfterViewInit, DestroyRef, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioContentComponent } from './components/bio-content/bio-content.component';
import { WorkComponent } from './components/work/work';
import { EducationComponent } from './components/education/education';
import { ProjectsComponent } from './components/projects/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProfileCardComponent } from './components/profile-card/profile-card';
import { LoadingStateService } from '../../shared/loading-state.service';

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

  private readonly loadingState = inject(LoadingStateService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cleanupCallbacks: Array<() => void> = [];
  private loadingCompleted = false;
  private loadingTimeoutId: number | null = null;

  ngAfterViewInit() {
    this.initGSAP();
    this.trackInitialLoad();
  }

  private trackInitialLoad(): void {
    const containerEl = this.container?.nativeElement;
    if (!containerEl) {
      this.finishLoading();
      return;
    }

    const trackedTasks: Array<Promise<void>> = [];
    const imageElements = Array.from(containerEl.querySelectorAll<HTMLImageElement>('img'));
    const backgroundUrls = this.collectBackgroundUrls(containerEl);

    trackedTasks.push(this.waitForWindowLoad());
    imageElements.forEach((imgEl) => trackedTasks.push(this.waitForImageElement(imgEl)));
    backgroundUrls.forEach((url) => trackedTasks.push(this.preloadImageUrl(url)));

    this.loadingTimeoutId = window.setTimeout(() => {
      this.finishLoading();
    }, 5000);

    Promise.allSettled(trackedTasks)
      .then(() => this.finishLoading())
      .catch(() => this.finishLoading());

    this.destroyRef.onDestroy(() => {
      this.clearLoadingTimeout();
      this.runCleanupCallbacks();
      this.loadingState.finishLoading();
    });
  }

  private finishLoading(): void {
    if (this.loadingCompleted) {
      return;
    }

    this.loadingCompleted = true;
    this.clearLoadingTimeout();
    this.runCleanupCallbacks();
    this.loadingState.finishLoading();
    ScrollTrigger.refresh();
  }

  private clearLoadingTimeout(): void {
    if (this.loadingTimeoutId !== null) {
      window.clearTimeout(this.loadingTimeoutId);
      this.loadingTimeoutId = null;
    }
  }

  private runCleanupCallbacks(): void {
    while (this.cleanupCallbacks.length > 0) {
      const cleanup = this.cleanupCallbacks.pop();
      cleanup?.();
    }
  }

  private waitForWindowLoad(): Promise<void> {
    if (document.readyState === 'complete') {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const onLoad = () => {
        resolve();
      };

      window.addEventListener('load', onLoad, { once: true });
      this.cleanupCallbacks.push(() => {
        window.removeEventListener('load', onLoad);
      });
    });
  }

  private waitForImageElement(imageEl: HTMLImageElement): Promise<void> {
    if (imageEl.complete) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const complete = () => {
        imageEl.removeEventListener('load', onLoad);
        imageEl.removeEventListener('error', onError);
        resolve();
      };

      const onLoad = () => complete();
      const onError = () => complete();

      imageEl.addEventListener('load', onLoad);
      imageEl.addEventListener('error', onError);

      this.cleanupCallbacks.push(() => {
        imageEl.removeEventListener('load', onLoad);
        imageEl.removeEventListener('error', onError);
      });
    });
  }

  private collectBackgroundUrls(containerEl: HTMLElement): string[] {
    const urlSet = new Set<string>();

    const pseudoBackground = getComputedStyle(containerEl, '::before').backgroundImage;
    this.extractUrlsFromBackgroundCss(pseudoBackground).forEach((url) => urlSet.add(url));

    const inlineBackgroundElements = Array.from(
      containerEl.querySelectorAll<HTMLElement>('[style*="background-image"]')
    );

    inlineBackgroundElements.forEach((el) => {
      this.extractUrlsFromBackgroundCss(el.style.backgroundImage).forEach((url) => urlSet.add(url));
    });

    return Array.from(urlSet);
  }

  private extractUrlsFromBackgroundCss(backgroundValue: string): string[] {
    const urls: string[] = [];
    const urlRegex = /url\((['"]?)(.*?)\1\)/gi;
    let match: RegExpExecArray | null;

    while ((match = urlRegex.exec(backgroundValue)) !== null) {
      if (match[2]) {
        urls.push(match[2]);
      }
    }

    return urls;
  }

  private preloadImageUrl(url: string): Promise<void> {
    return new Promise<void>((resolve) => {
      const image = new Image();

      const complete = () => {
        image.onload = null;
        image.onerror = null;
        resolve();
      };

      image.onload = complete;
      image.onerror = complete;
      image.src = url;

      this.cleanupCallbacks.push(() => {
        image.onload = null;
        image.onerror = null;
      });
    });
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
        const targetScroll = window.innerWidth <= 768
          ? section.offsetTop
          : section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2);
        const clamped = gsap.utils.clamp(0, maxScroll, targetScroll);
        return clamped / maxScroll;
      });
    };

    const resetScrollableAreas = (section: HTMLElement) => {
      const scrollables = section.querySelectorAll<HTMLElement>('.custom-scrollbar, [class*="overflow-y-auto"]');
      scrollables.forEach((el) => {
        el.scrollTop = 0;
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

    // When user scrolls back up into a section, reset that section's inner scroll areas.
    getSnapSections().forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        onEnterBack: () => resetScrollableAreas(section)
      });
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
