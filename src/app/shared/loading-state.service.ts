import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingStateService {
  readonly isLoading = signal(true);
  readonly overlayExitDurationMs = 900;

  finishLoading(): void {
    this.isLoading.set(false);
  }
}
