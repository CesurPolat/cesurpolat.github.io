import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';
import { environment } from '../../../../../environments/environment';

type Experience = {
  title: string;
  company: string;
  logo: string;
  logoAlt: string;
  logoClass?: string;
  link?: string;
  period: string;
  summary: string;
  description: string;
  detailBullets: string[];
  techStack: string[];
  impact?: string;
};

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, GlassWrapperComponent],
  template: `
    <app-glass-wrapper panelClass="h-[67vh] bg-transparent backdrop-blur-[25px] p-3 sm:p-4 lg:p-5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[85vh] w-full max-w-none">
      <div #workScroll class="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pr-0.5 md:pr-2 text-white">
        <div class="flex items-center gap-3 mb-6 md:mb-7 border-b border-white/20 pb-2 w-full text-white/95">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tight">Experience</h2>
        </div>

        <div class="relative px-1 md:px-2 pb-1">
          <div class="hidden md:block relative overflow-hidden">
            <div
              class="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'w-[54%] pr-4' : 'w-full'"
            >
              <ng-container *ngTemplateOutlet="experienceTimeline; context: { compact: !!selectedExperience() }"></ng-container>
            </div>

            <section
              class="absolute inset-y-0 right-0 w-[44%] xl:w-[40%] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'"
            >
              <ng-container *ngTemplateOutlet="experienceDetail"></ng-container>
            </section>
          </div>

          <div class="md:hidden relative overflow-hidden">
            <div
              class="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'opacity-0 pointer-events-none translate-x-[-8%]' : 'opacity-100 pointer-events-auto translate-x-0'"
            >
              <ng-container *ngTemplateOutlet="experienceTimeline"></ng-container>
            </div>

            <div
              class="absolute inset-0 z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              [ngClass]="selectedExperience() ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'"
            >
              <ng-container *ngIf="selectedExperience() as selected">
                <ng-container *ngTemplateOutlet="experienceDetail; context: { mobile: true, selected: selected }"></ng-container>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </app-glass-wrapper>

    <ng-template #experienceTimeline let-compact="compact">
      <div class="relative">
        <div
          class="pointer-events-none absolute left-[0.92rem] top-2 bottom-3 w-px rounded-full bg-gradient-to-b from-white/10 via-cyan-200/50 to-white/10 shadow-[0_0_24px_rgba(103,232,249,0.18)]"
          [ngClass]="compact ? 'lg:left-[0.92rem] lg:translate-x-0' : 'lg:left-1/2 lg:-translate-x-1/2'"
        ></div>

        <div class="flex flex-col gap-2 md:gap-2.5">
          @for (exp of experiences; track exp.title; let i = $index) {
            <div class="relative">
              <div
                class="pointer-events-none absolute left-[0.92rem] top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_28px_rgba(103,232,249,0.24)]"
                [ngClass]="compact ? 'lg:left-[0.92rem]' : 'lg:left-1/2'"
              >
                <span class="absolute inset-[2px] rounded-full border border-cyan-100/30 bg-gradient-to-br from-white/80 via-white/45 to-cyan-200/25"></span>
                <span class="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-white/80 blur-[0.5px]"></span>
              </div>
              <div
                class="pointer-events-none absolute left-[0.92rem] top-[1.75rem] h-px w-4 bg-gradient-to-r from-cyan-200/55 to-white/10 lg:w-6"
                [ngClass]="compact ? 'lg:left-[0.92rem]' : (isEven(i) ? 'lg:left-1/2 lg:-translate-x-full' : 'lg:left-1/2')"
              ></div>

              <div
                class="ml-6.5 lg:ml-0 flex py-0.5"
                [ngClass]="compact ? 'lg:justify-start lg:ml-6.5' : (isEven(i) ? 'lg:justify-start' : 'lg:justify-end')"
              >
                <article
                  class="relative w-full border rounded-[1.2rem] p-2.5 md:p-3.5 overflow-hidden shadow-xl transition-all duration-300"
                  [ngClass]="[
                    compact ? 'lg:w-full' : 'lg:w-[calc(50%-1.65rem)]',
                    selectedExperienceIndex === i ? 'border-cyan-200/35 bg-white/10' : 'border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25'
                  ]"
                >
                  <div class="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent"></div>

                  <div class="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-2 md:gap-2.5 mb-2 md:mb-2.5">
                    <div class="min-w-0 flex-1 order-2 sm:order-1">
                      <h3 class="font-black text-[0.95rem] sm:text-base md:text-lg mb-2 uppercase tracking-tight text-white leading-tight">
                        {{ exp.title }}
                      </h3>

                      <div class="flex items-center gap-1.5 min-w-0 text-xs md:text-sm font-semibold text-white/90 uppercase italic">
                        <a
                          *ngIf="exp.link; else companyNameOnly"
                          [href]="exp.link"
                          target="_blank"
                          class="min-w-0 inline-flex items-center gap-1.5 text-white/90 hover:text-cyan-100 transition-colors"
                        >
                          <span class="truncate">{{ exp.company }}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                        <ng-template #companyNameOnly>
                          <span class="truncate">{{ exp.company }}</span>
                        </ng-template>
                      </div>
                    </div>

                    <div class="shrink-0 self-start w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.28)] flex items-center justify-center px-2 sm:px-2.5 transition-all duration-300 hover:bg-white/15 hover:border-white/30 order-1 sm:order-2">
                      <img
                        [src]="exp.logo"
                        [alt]="exp.logoAlt"
                        class="w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(15,23,42,0.28)]"
                        [ngClass]="exp.logoClass"
                      />
                    </div>
                  </div>

                  <div class="relative z-10 mb-2 md:mb-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-2.5 py-1.5 md:px-3 md:py-2 shadow-inner shadow-white/5">
                    <div class="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/80">
                      <span class="shrink-0">Role Snapshot</span>
                      <span class="h-px flex-1 bg-white/10"></span>
                      <span class="shrink-0">{{ exp.period }}</span>
                    </div>
                  </div>

                  <p class="relative z-10 text-xs md:text-sm leading-relaxed font-medium text-white">
                    {{ exp.summary }}
                  </p>

                  <div class="relative z-10 mt-3 flex items-center justify-end">
                    <button
                      type="button"
                      class="inline-flex items-center gap-2 rounded-full border border-cyan-100/65 bg-gradient-to-r from-slate-800/30 to-cyan-500/20 px-3 py-1.5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md ring-1 ring-inset ring-cyan-100/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-all hover:border-cyan-50 hover:from-slate-800/40 hover:to-cyan-500/30"
                      (click)="openExperience(i)"
                      [attr.aria-expanded]="selectedExperienceIndex === i"
                      [attr.aria-controls]="'experience-detail-panel'"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          }
        </div>
      </div>
    </ng-template>

    <ng-template #experienceDetail let-mobile="mobile" let-selected="selected">
      <ng-container *ngIf="(selected || selectedExperience()) as active; else detailEmpty">
        <article
          id="experience-detail-panel"
          class="relative overflow-hidden border border-white/15 bg-white/[0.07] p-4 md:p-5 shadow-2xl min-h-[17rem]"
          [ngClass]="mobile ? 'max-h-[78vh] overflow-y-auto rounded-[1.35rem]' : 'h-full rounded-[1.5rem]'"
        >
          <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-100/12 via-white/[0.04] to-transparent"></div>

          <div class="relative z-10 flex items-start justify-between gap-4">
            <div class="min-w-0">
              <p class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.24em] text-cyan-100 mb-2">
                Detailed Role View
              </p>
              <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                {{ active.title }}
              </h3>
              <p class="mt-1 text-sm md:text-base font-semibold text-white/90 uppercase italic">
                {{ active.company }}
              </p>
            </div>

            <button
              type="button"
              class="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/95 transition-colors hover:bg-white/14 hover:text-white"
              (click)="closeExperience()"
              aria-label="Close experience details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
          </div>

          <div class="relative z-10 mt-4 flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
            <span class="rounded-full border border-white/12 bg-white/8 px-3 py-1.5">{{ active.period }}</span>
            <span *ngIf="active.impact" class="rounded-full border border-cyan-100/18 bg-cyan-200/10 px-3 py-1.5 text-cyan-50">
              {{ active.impact }}
            </span>
          </div>

          <div class="relative z-10 mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/20 p-4">
            <div class="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/80 mb-2">
              <span>Role Overview</span>
              <span class="h-px flex-1 bg-white/10"></span>
            </div>
            <p class="text-sm md:text-base leading-relaxed text-white">
              {{ active.description }}
            </p>
          </div>

          <div class="relative z-10 mt-4 grid grid-cols-1 gap-4">
            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
              <div class="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/80 mb-3">
                <span>Tech Stack</span>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  *ngFor="let tech of active.techStack"
                  class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] md:text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <svg class="shrink-0" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><!--  [style.color]="getTechColor(tech)" -->
                    <path [attr.d]="getTechIconPath(tech)"></path>
                  </svg>
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
              <div class="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/80 mb-3">
                <span>Highlights</span>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>

              <div class="grid gap-2.5">
                <div
                  *ngFor="let bullet of active.detailBullets"
                  class="rounded-2xl border border-white/12 bg-white/[0.04] px-3 py-2.5 text-xs md:text-sm leading-relaxed text-white/95"
                >
                  {{ bullet }}
                </div>
              </div>
            </div>
          </div>
        </article>
      </ng-container>

      <ng-template #detailEmpty>
        <article class="relative overflow-hidden rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.045] p-5 md:p-6 text-white/70">
          <p class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.24em] text-white/50 mb-3">
            Detailed Role View
          </p>
          <h3 class="text-lg md:text-xl font-black uppercase tracking-tight text-white/92">
            Select an experience
          </h3>
          <p class="mt-2 text-sm md:text-base leading-relaxed text-white/68">
            Choose any role from the timeline to inspect impact, delivery details, and the stack used in that position.
          </p>
        </article>
      </ng-template>
    </ng-template>
  `
})
export class WorkComponent {
  @ViewChild('workScroll') private workScroll?: ElementRef<HTMLDivElement>;

  selectedExperienceIndex: number | null = null;
  private mobileScrollTop = 0;

  experiences: Experience[] = environment.experience;

  getTechIconPath(tech: string): string {
    const iconMap: Record<string, string> = {
      'Angular': 'M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z',
      'ASP.NET': 'M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z',
      '.NET': 'M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z',
      'C#': 'M14.2209.0875v5.9613l-3.7433.5012v3.5233l3.7433-.5012v3.5735l3.492-.4672V9.1047L24 8.2634l-.4631-3.4613-5.824.7794V.0875zM6.287 1.145v5.9618L0 7.9483l.4634 3.4613 5.8514-.7834 3.4644-.4637V1.145zm3.5198 9.7185l-3.492.4675v3.578l-6.183.8276.4633 3.4613 5.8239-.7796v5.4942h3.492v-5.962l3.6114-.4834V13.944l-3.7156.4973zm13.73 1.7405l-5.824.779-3.492.4673v9.0179h3.492v-5.9618L24 16.0652Z',
      'MSSQL': 'M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z',
      'gRPC': 'M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12ZM1.21 12A10.78 10.78 0 0 0 12 22.79 10.78 10.78 0 0 0 22.79 12 10.78 10.78 0 0 0 12 1.21 10.78 10.78 0 0 0 1.21 12Zm10.915-6.086 2.162 1.248a.25.25 0 0 1 .125.217v1.103l2.473 1.428a.25.25 0 0 1 .125.217v2.355l.955.551a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-.956-.552-2.472 1.427a.25.25 0 0 1-.25 0l-2.472-1.427-.956.552a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l.955-.551v-2.355a.25.25 0 0 1 .125-.217l2.473-1.428V7.38a.25.25 0 0 1 .125-.217l2.162-1.248a.25.25 0 0 1 .25 0Zm1.268 10.049a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l2.16-1.248a.25.25 0 0 1 .25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 0 1 .25 0l2.16 1.248a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-.705.408L12 17.582l2.098-1.211ZM10.088 9.73l1.662.96V8.766l-1.662-.955Zm3.824 0V7.811l-1.662.955v1.924ZM12 6.418l-1.66.96 1.66.954 1.66-.954Zm-5.59 9.184 1.66.958v-1.921l-1.66-.956Zm3.822 0v-1.92l-1.662.957v1.923Zm-1.91-3.311-1.662.96 1.661.955 1.66-.956Zm5.446 3.31 1.66.96v-1.922l-1.66-.956Zm3.822 0v-1.918l-1.662.956v1.922Zm-1.912-3.31-1.66.96 1.66.955 1.66-.956Z',
      'Cloudflare': 'M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727',
      'JWT': 'M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496 2.928.936 6.144-1.992-1.128-3.432zM17.832 12l-2.928.936 1.8 2.496 6.144 1.992 1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232 2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12 .024 13.992l1.128 3.432zM6.168 12l2.928-.936-1.8-2.496-6.144-1.992-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224 3.48 3.36Z',
      'Microservices': 'M12 2L2 7l10 5l10-5L12 2zM2 17l10 5l10-5M12 12v10',
      'IIS': 'M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10zM12 2v20M2 12h20',
      'TypeScript': 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
      'Firebase Cloud Messaging': 'M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z',
      'HTML': 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
      'CSS': 'M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63',
      'Node.js': 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z',
      'Python': 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z',
      'Tailwind CSS': 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
    };
    return iconMap[tech] || 'M16 18l4-4-4-4 M8 6l-4 4 4 4';
  }

  getTechColor(tech: string): string {
    const colorMap: Record<string, string> = {
      'Angular': '#DD0031',
      'ASP.NET': '#512BD4',
      '.NET': '#512BD4',
      'TypeScript': '#3178C6',
      'Node.js': '#339933',
      'Python': '#3776AB',
      'Tailwind CSS': '#06B6D4',
      'MSSQL': '#CC2927',
      'Cloudflare': '#F38020',
      'gRPC': '#244C5A',
      'Firebase Cloud Messaging': '#FFCA28',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'JWT': '#00B9F1'
    };
    return colorMap[tech] || '#ffffff';
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  openExperience(index: number): void {
    this.mobileScrollTop = this.workScroll?.nativeElement.scrollTop ?? 0;
    this.selectedExperienceIndex = index;

    requestAnimationFrame(() => {
      if (this.workScroll) {
        this.workScroll.nativeElement.scrollTop = 0;
      }
    });
  }

  closeExperience(): void {
    this.selectedExperienceIndex = null;

    requestAnimationFrame(() => {
      if (this.workScroll) {
        this.workScroll.nativeElement.scrollTop = this.mobileScrollTop;
      }
    });
  }

  selectedExperience(): Experience | null {
    return this.selectedExperienceIndex !== null ? this.experiences[this.selectedExperienceIndex] : null;
  }
}
