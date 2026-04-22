import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingStateService {
  readonly isLoading = signal(true);

  finishLoading(): void {
    this.isLoading.set(false);
  }
}
