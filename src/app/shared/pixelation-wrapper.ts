import { Component, computed, signal, Input } from '@angular/core';

@Component({
  selector: 'app-pixelation-wrapper',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 0; height: 0;">
      <defs>
        <filter id="pixelate" x="0" y="0">
          <feFlood [attr.x]="radius()" [attr.y]="radius()" height="1" width="1" />
          <feComposite [attr.width]="pixelSize()" [attr.height]="pixelSize()" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" [attr.radius]="radius()" />
        </filter>
      </defs>
    </svg>

    <div [style.filter]="!isPixelizationFinished() ? 'url(#pixelate)' : null">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class PixelationWrapperComponent {
  @Input() autoStart = true;
  @Input() initialPixelSize = 16;
  @Input() animationSpeed = 100;

  isPixelizationFinished = signal(false);
  pixelSize = signal(16);
  radius = computed(() => this.pixelSize() % 2 === 0 ? this.pixelSize() / 2 : (this.pixelSize() - 1) / 2);

  ngAfterViewInit() {
    if (this.autoStart) {
      this.startPixelation();
    }
  }

  startPixelation() {
    this.pixelSize.set(this.initialPixelSize);
    this.isPixelizationFinished.set(false);
    
    const interval = setInterval(() => {
      this.pixelSize.set(this.pixelSize() - 1);
      if (this.pixelSize() <= 1) {
        this.isPixelizationFinished.set(true);
        clearInterval(interval);
      }
    }, this.animationSpeed);
  }
}
