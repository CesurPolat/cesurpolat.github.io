import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingOverlayComponent } from './shared/loading-overlay';
import { LoadingStateService } from './shared/loading-state.service';
import { AnalyticsService } from './shared/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingOverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly loadingState = inject(LoadingStateService);
  private readonly analytics = inject(AnalyticsService);
  private overlayExitTimerId: number | null = null;

  constructor() {
    // Initialize Google Analytics with your Measurement ID
    // Replace 'G-XXXXXXX' with your actual GA4 Measurement ID
    this.analytics.init('G-3T0E2FXMKM');
  }

  readonly isOverlayVisible = signal(true);
  readonly isOverlayExiting = signal(false);

  readonly isLoading = this.loadingState.isLoading;

  private readonly syncOverlayState = effect(() => {
    if (this.isLoading()) {
      this.clearOverlayExitTimer();
      this.isOverlayVisible.set(true);
      this.isOverlayExiting.set(false);
      return;
    }

    if (!this.isOverlayVisible() || this.isOverlayExiting()) {
      return;
    }

    this.isOverlayExiting.set(true);
    this.overlayExitTimerId = window.setTimeout(() => {
      this.isOverlayVisible.set(false);
      this.isOverlayExiting.set(false);
      this.overlayExitTimerId = null;
    }, this.loadingState.overlayExitDurationMs);
  });

  private clearOverlayExitTimer(): void {
    if (this.overlayExitTimerId !== null) {
      window.clearTimeout(this.overlayExitTimerId);
      this.overlayExitTimerId = null;
    }
  }
}

