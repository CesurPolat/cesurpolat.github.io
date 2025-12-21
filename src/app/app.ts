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

  pixelSize = signal(16);
  radius = computed(() => Math.max(0, this.pixelSize() % 2 === 0 ? this.pixelSize() / 2 : (this.pixelSize() - 1) / 2));

  clicked():void {
    this.pixelSize.set(16);
    var a = setInterval(() => {
      //console.log(this.pixelSize());
      console.log(this.radius());
      
      this.pixelSize.set(this.pixelSize() - 1);
      if (this.pixelSize() <= 1) {
        clearInterval(a);
      }
    }, 100);
  }

}
