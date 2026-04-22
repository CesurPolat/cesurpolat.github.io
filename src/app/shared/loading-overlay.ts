import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  template: `
    <div class="loading-overlay" [class.is-exiting]="isExiting()" role="status" aria-live="polite" aria-label="Sayfa yukleniyor">
      <div class="animated-bg" aria-hidden="true"></div>
      <div class="loading-panel">
        <div class="spinner" aria-hidden="true"></div>
        <p class="loading-title">Loading...</p>
        <p class="loading-subtitle">Polishing pixels, almost there...</p>
      </div>
    </div>
  `,
  styles: [`
    .loading-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: grid;
      place-items: center;
      padding: 1.25rem;
      background:
        radial-gradient(circle at 14% 12%, rgba(255, 255, 255, 0.72), transparent 36%),
        radial-gradient(circle at 88% 84%, rgba(145, 196, 255, 0.46), transparent 44%),
        linear-gradient(145deg, rgba(201, 223, 255, 0.36), rgba(170, 198, 242, 0.28));
      overflow: hidden;
      isolation: isolate;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      transform: translateY(0);
      opacity: 1;
    }

    .loading-overlay.is-exiting {
      animation: overlayExit 900ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      pointer-events: none;
    }

    .animated-bg {
      position: absolute;
      inset: -20%;
      z-index: 0;
      filter: saturate(118%);
      background:
        conic-gradient(from 220deg at 50% 50%, rgba(110, 180, 255, 0.46), rgba(70, 225, 255, 0.36), rgba(104, 255, 210, 0.34), rgba(84, 146, 255, 0.4), rgba(110, 180, 255, 0.46)),
        radial-gradient(54% 46% at 20% 18%, rgba(58, 210, 255, 0.58), transparent 72%),
        radial-gradient(48% 42% at 82% 28%, rgba(72, 122, 255, 0.56), transparent 73%),
        radial-gradient(50% 42% at 72% 82%, rgba(56, 178, 255, 0.46), transparent 74%),
        radial-gradient(40% 34% at 28% 78%, rgba(88, 255, 188, 0.42), transparent 72%),
        linear-gradient(145deg, #dcebff 0%, #c7ddff 52%, #b9d3ff 100%);
      background-size: 170% 170%, 176% 176%, 186% 186%, 178% 178%, 172% 172%, 150% 150%;
      will-change: transform, filter, background-position;
      animation: modernMorph 17s linear infinite, modernFlow 11s linear infinite, hueCycle 24s linear infinite;
    }

    .animated-bg::before,
    .animated-bg::after {
      content: '';
      position: absolute;
      width: 64vmax;
      height: 64vmax;
      border-radius: 999px;
      mix-blend-mode: soft-light;
      opacity: 0.46;
      filter: blur(28px);
    }

    .animated-bg::before {
      top: -14vmax;
      left: -16vmax;
      background: radial-gradient(circle, rgba(228, 244, 255, 0.9), rgba(228, 244, 255, 0));
      animation: orbitA 12s ease-in-out infinite;
    }

    .animated-bg::after {
      right: -16vmax;
      bottom: -16vmax;
      background: radial-gradient(circle, rgba(188, 216, 255, 0.86), rgba(188, 216, 255, 0));
      animation: orbitB 14s ease-in-out infinite;
    }

    .loading-panel {
      position: relative;
      z-index: 1;
      min-width: 210px;
      min-height: 210px;
      width: min(72vw, 290px);
      aspect-ratio: 1 / 1;
      margin: 0;
      padding: 1.1rem 0.95rem;
      border-radius: 1.6rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      text-align: center;
      border: none;
      background:
        linear-gradient(160deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.24) 42%, rgba(255, 255, 255, 0.12) 100%),
        rgba(201, 223, 255, 0.14);
      backdrop-filter: blur(26px) saturate(124%);
      -webkit-backdrop-filter: blur(26px) saturate(124%);
      box-shadow:
        inset 0 1px 1px rgba(255, 255, 255, 0.84),
        inset 0 -1px 0 rgba(255, 255, 255, 0.36),
        0 16px 40px rgba(63, 101, 153, 0.24),
        0 2px 7px rgba(84, 120, 170, 0.18);
      animation: panelFloat 4.2s ease-in-out 620ms infinite;
    }

    .loading-panel::before,
    .loading-panel::after {
      content: '';
      position: absolute;
      pointer-events: none;
    }

    .loading-panel::before {
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(130deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.2) 52%, rgba(255, 255, 255, 0));
      opacity: 0.46;
    }

    .loading-panel::after {
      top: -14%;
      left: -30%;
      width: 160%;
      height: 48%;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0));
      opacity: 0.22;
      transform: rotate(-14deg);
      animation: sheenSweep 5.8s ease-in-out infinite;
    }

    .spinner {
      width: 44px;
      height: 44px;
      border-radius: 999px;
      border: 3px solid rgba(71, 110, 164, 0.24);
      border-top-color: rgba(61, 138, 228, 0.95);
      border-right-color: rgba(104, 152, 232, 0.92);
      box-shadow: 0 0 14px rgba(111, 165, 237, 0.3);
      animation: spin 1s linear infinite;
    }

    .loading-title {
      margin: 0;
      color: rgba(27, 54, 93, 0.95);
      font-weight: 600;
      letter-spacing: 0.03em;
      font-size: 1rem;
      text-align: center;
    }

    .loading-subtitle {
      margin: 0;
      color: rgba(50, 86, 134, 0.84);
      font-size: 0.82rem;
      text-align: center;
    }

    @media (max-width: 640px) {
      .loading-panel {
        padding: 1rem 0.85rem;
        width: min(72vw, 240px);
      }

      .spinner {
        width: 40px;
        height: 40px;
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes modernMorph {
      0% {
        transform: translate3d(-2%, -2%, 0) scale(1.02);
      }
      25% {
        transform: translate3d(2%, -1%, 0) scale(1.05);
      }
      50% {
        transform: translate3d(3%, 3%, 0) scale(1.07);
      }
      75% {
        transform: translate3d(-1%, 2%, 0) scale(1.04);
      }
      100% {
        transform: translate3d(-2%, -2%, 0) scale(1.02);
      }
    }

    @keyframes modernFlow {
      0% {
        background-position: 12% 10%, 86% 16%, 24% 92%, 76% 84%, 16% 72%, 50% 50%;
      }
      50% {
        background-position: 56% 34%, 36% 72%, 74% 24%, 24% 18%, 68% 22%, 58% 42%;
      }
      100% {
        background-position: 12% 10%, 86% 16%, 24% 92%, 76% 84%, 16% 72%, 50% 50%;
      }
    }

    @keyframes hueCycle {
      0% {
        filter: hue-rotate(0deg) saturate(116%);
      }
      50% {
        filter: hue-rotate(180deg) saturate(132%);
      }
      100% {
        filter: hue-rotate(360deg) saturate(116%);
      }
    }

    @keyframes orbitA {
      0% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        transform: translate3d(9vmax, 10vmax, 0);
      }
      100% {
        transform: translate3d(3vmax, 4vmax, 0);
      }
    }

    @keyframes orbitB {
      0% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        transform: translate3d(-10vmax, -9vmax, 0);
      }
      100% {
        transform: translate3d(-4vmax, -3vmax, 0);
      }
    }

    @keyframes sheenSweep {
      0% {
        transform: translateX(-22%) rotate(-14deg);
        opacity: 0.1;
      }
      50% {
        transform: translateX(8%) rotate(-14deg);
        opacity: 0.22;
      }
      100% {
        transform: translateX(20%) rotate(-14deg);
        opacity: 0.08;
      }
    }

    @keyframes panelFloat {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-4px);
      }
    }

    @keyframes overlayExit {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-110vh);
      }
    }
  `]
})
export class LoadingOverlayComponent {
  readonly isExiting = input(false);
}
