import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  init(measurementId: string): void {
    if (!this.isBrowser) {
      return;
    }

    if (!measurementId) {
      console.warn('Analytics: Measurement ID not provided');
      return;
    }
    // Window global gtag already loaded from index.html script
    // Just initialize it
    this.trackPageViews();
  }

  trackPageViews(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        window.gtag?.('event', 'page_view', {
          page_path: event.urlAfterRedirects,
        });
      });
  }

  sendEvent(
    eventName: string,
    params: Record<string, any> = {}
  ): void {
    if (!this.isBrowser) return;
    window.gtag?.('event', eventName, params);
  }

  setUserId(userId: string): void {
    if (!this.isBrowser) return;
    window.gtag?.('config', { 'user_id': userId });
  }
}
