import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glass-wrapper',
  standalone: true,
  template: `
    <div [class]="'glass-panel-common ' + panelClass">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .glass-panel-common {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    }
  `]
})
export class GlassWrapperComponent {
  @Input() panelClass = '';
}
