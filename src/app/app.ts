import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingOverlayComponent } from './shared/loading-overlay';
import { LoadingStateService } from './shared/loading-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingOverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly loadingState = inject(LoadingStateService);
  private overlayExitTimerId: number | null = null;

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

