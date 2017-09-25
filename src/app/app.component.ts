import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter></app-counter>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Letslearn';
  points = 1;

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }
}
