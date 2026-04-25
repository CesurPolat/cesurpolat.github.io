import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
  signal
} from '@angular/core';

type NavItem = {
  id: string;
  label: string;
  target: string;
  icon: 'profile' | 'work' | 'education' | 'projects';
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbar') private navbar!: ElementRef<HTMLElement>;
  @ViewChildren('navButton') private navButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  protected readonly navItems: NavItem[] = [
    { id: 'profile', label: 'Profile', target: 'profile-section', icon: 'profile' },
    { id: 'work', label: 'Work', target: 'work-section', icon: 'work' },
    { id: 'education', label: 'Education', target: 'education-section', icon: 'education' },
    { id: 'projects', label: 'Projects', target: 'projects-section', icon: 'projects' }
  ];

  protected readonly activeItemId = signal(this.navItems[0].id);
  protected readonly indicatorItemId = signal(this.navItems[0].id);

  private readonly destroyRef = inject(DestroyRef);
  private observer: IntersectionObserver | null = null;
  private pendingTargetId: string | null = null;
  private pendingTargetScrollTop: number | null = null;
  private restoreSyncTimeoutId: number | null = null;

  ngAfterViewInit(): void {
    const sections = this.getSections();

    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry && !this.pendingTargetId) {
          this.setActiveByObservedSection(visibleEntry.target);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -38% 0px'
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('pageshow', this.handlePageShow);
    this.navButtons.changes.subscribe(() => this.updateIndicatorPosition());
    this.updateIndicatorPosition();
    this.syncActiveFromScroll();
    this.restoreSyncTimeoutId = window.setTimeout(() => this.syncActiveFromScroll(), 150);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('pageshow', this.handlePageShow);
      this.clearRestoreSyncTimeout();
      this.observer?.disconnect();
      this.observer = null;
    });
  }

  protected scrollToSection(item: NavItem): void {
    const target = document.getElementById(item.target);

    if (!target) {
      return;
    }

    this.pendingTargetId = item.target;
    this.pendingTargetScrollTop = this.getTargetScrollTop(target);
    this.indicatorItemId.set(item.id);
    this.updateIndicatorPosition();
    window.scrollTo({
      top: this.pendingTargetScrollTop,
      behavior: 'smooth'
    });
  }

  private getSections(): HTMLElement[] {
    return Array.from(document.querySelectorAll<HTMLElement>('[data-nav-id]')).filter((section) =>
      this.navItems.some((item) => item.id === section.dataset['navId'])
    );
  }

  private setActiveByTargetId(targetId: string): void {
    const activeItem = this.navItems.find((item) => item.target === targetId);

    if (activeItem) {
      this.setActiveByItemId(activeItem.id);
    }
  }

  private setActiveByObservedSection(section: Element): void {
    if (!(section instanceof HTMLElement)) {
      return;
    }

    this.setActiveByItemId(section.dataset['navId']);
    this.setIndicatorByItemId(section.dataset['navId']);
  }

  private setActiveByItemId(itemId: string | undefined): void {
    if (!itemId) {
      return;
    }

    if (this.navItems.some((item) => item.id === itemId)) {
      this.activeItemId.set(itemId);
    }
  }

  private setIndicatorByTargetId(targetId: string): void {
    const indicatorItem = this.navItems.find((item) => item.target === targetId);

    if (indicatorItem) {
      this.setIndicatorByItemId(indicatorItem.id);
    }
  }

  private setIndicatorByItemId(itemId: string | undefined): void {
    if (!itemId) {
      return;
    }

    if (this.navItems.some((item) => item.id === itemId)) {
      this.indicatorItemId.set(itemId);
      this.updateIndicatorPosition();
    }
  }

  private getTargetScrollTop(target: HTMLElement): number {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const isMobile = window.innerWidth <= 768;
    const targetScroll = isMobile
      ? target.offsetTop
      : target.offsetTop + target.offsetHeight / 2 - window.innerHeight / 2;

    return Math.min(Math.max(targetScroll, 0), maxScroll);
  }

  private readonly handleScroll = (): void => {
    if (!this.pendingTargetId || this.pendingTargetScrollTop === null) {
      return;
    }

    const scrollDistance = Math.abs(window.scrollY - this.pendingTargetScrollTop);

    if (scrollDistance <= 3) {
      this.setActiveByTargetId(this.pendingTargetId);
      this.pendingTargetId = null;
      this.pendingTargetScrollTop = null;
    }
  };

  private readonly handleResize = (): void => {
    this.updateIndicatorPosition();
    this.syncActiveFromScroll();
  };

  private readonly handlePageShow = (): void => {
    this.syncActiveFromScroll();
  };

  private updateIndicatorPosition(): void {
    window.requestAnimationFrame(() => {
      const navbarEl = this.navbar?.nativeElement;
      const activeButton = this.navButtons
        ?.toArray()
        .find((button) => button.nativeElement.dataset['navId'] === this.indicatorItemId());

      if (!navbarEl || !activeButton) {
        return;
      }

      const buttonEl = activeButton.nativeElement;
      navbarEl.style.setProperty('--indicator-x', `${buttonEl.offsetLeft}px`);
      navbarEl.style.setProperty('--indicator-y', `${buttonEl.offsetTop}px`);
      navbarEl.style.setProperty('--indicator-width', `${buttonEl.offsetWidth}px`);
      navbarEl.style.setProperty('--indicator-height', `${buttonEl.offsetHeight}px`);
    });
  }

  private syncActiveFromScroll(): void {
    if (this.pendingTargetId) {
      return;
    }

    const sections = this.getSections();

    if (!sections.length) {
      return;
    }

    const viewportAnchor = window.scrollY + window.innerHeight / 2;
    const currentSection = sections.find((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      return viewportAnchor >= sectionTop && viewportAnchor < sectionBottom;
    });

    const closestSection =
      currentSection ??
      sections
        .map((section) => ({
          section,
          distance: Math.abs(section.offsetTop + section.offsetHeight / 2 - viewportAnchor)
        }))
        .sort((a, b) => a.distance - b.distance)[0]?.section;

    if (closestSection) {
      this.setActiveByObservedSection(closestSection);
    }
  }

  private clearRestoreSyncTimeout(): void {
    if (this.restoreSyncTimeoutId !== null) {
      window.clearTimeout(this.restoreSyncTimeoutId);
      this.restoreSyncTimeoutId = null;
    }
  }
}
