import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cesurpolat.github.io');

  isPixelizationFinished = signal(false);
  pixelSize = signal(16);
  radius = computed(() => this.pixelSize() % 2 === 0 ? this.pixelSize() / 2 : (this.pixelSize() - 1) / 2);

  ngAfterViewInit() {
    this.pixelization();
  }

  pixelization(){
    this.pixelSize.set(16);
    var a = setInterval(() => {
      this.pixelSize.set(this.pixelSize() - 1);
      if (this.pixelSize() <= 1) {
        this.isPixelizationFinished.set(true);
        clearInterval(a);
      }
    }, 100);
  }

}
