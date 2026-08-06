import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, signal, computed, ViewChild, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-font-rotation-wrapper',
  standalone: true,
  template: `
    <span #textElement [style.fontFamily]="currentFont()" [style.display]="enableTextAnimation ? 'inline-block' : 'inline'">
      <ng-content></ng-content>
    </span>
    @if (enableTextAnimation) {
      <span class="cursor" [style.fontFamily]="currentFont()">|</span>
    }
  `,
  styles: [`
    .cursor {
      display: inline-block;
      margin-left: 2px;
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }
  `]
})
export class FontRotationWrapperComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('textElement') textElement!: ElementRef;

  @Input() fonts: string[] = ['Arial', 'Georgia', 'Courier New', 'Impact', 'Times New Roman', 'Lucida Console', 'Comic Sans MS', 'Palatino', 'Consolas', 'Verdana', 'Garamond', 'Trebuchet MS', 'Tahoma', 'Segoe UI', 'Calibri'];
  @Input() interval: number = 400;
  @Input() enableTextAnimation: boolean = false;
  @Input() textAnimationDuration: number = 2; // seconds

  private fontIndex = signal(0);
  currentFont = computed(() => this.fonts[this.fontIndex()]);
  private fontIntervalId: any;
  private visibilityObserver: IntersectionObserver | null = null;
  private animationStarted = false;
  private originalText: string = '';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    if (!this.isBrowser) return;
    this.startFontRotation();
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    if (this.enableTextAnimation && this.textElement) {
      this.originalText = this.textElement.nativeElement.innerText;
      this.startTextAnimationWhenVisible();
    }
  }

  ngOnDestroy() {
    if (this.fontIntervalId) {
      clearInterval(this.fontIntervalId);
    }
    this.visibilityObserver?.disconnect();
    this.visibilityObserver = null;
  }

  startFontRotation() {
    if (this.enableTextAnimation) return;
    this.fontIntervalId = setInterval(() => {
      this.fontIndex.set((this.fontIndex() + 1) % this.fonts.length);
    }, this.interval);
  }

  private startTextAnimationWhenVisible(): void {
    this.visibilityObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || this.animationStarted) {
        return;
      }

      this.animationStarted = true;
      this.visibilityObserver?.disconnect();
      this.visibilityObserver = null;
      void this.startTextAnimation();
    }, { rootMargin: '200px' });

    this.visibilityObserver.observe(this.textElement.nativeElement);
  }

  private async startTextAnimation(): Promise<void> {
    const [{ default: gsap }, { TextPlugin }] = await Promise.all([
      import('gsap'),
      import('gsap/TextPlugin')
    ]);

    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline({ repeat: -1 });

    // Başlangıçta metni temizle
    gsap.set(this.textElement.nativeElement, { text: "" });

    // Yazma animasyonu
    tl.to(this.textElement.nativeElement, {
      duration: this.textAnimationDuration,
      text: {
        value: this.originalText,
        delimiter: ""
      },
      ease: "none",
      onStart: () => {
        this.fontIndex.set((this.fontIndex() + 1) % this.fonts.length);
      }
    })
    // Yazıldıktan sonra bekleme
    .to({}, { duration: 2 })
    // Silme animasyonu (sondan başa)
    .to(this.textElement.nativeElement, {
      duration: this.textAnimationDuration * 0.5,
      text: {
        value: "",
        rtl: true
      },
      ease: "none"
    })
    // Silindikten sonra kısa bekleme
    .to({}, { duration: 0.5 });
  }
}
