import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_Homework_2';

  ngOnInit() {
    let numbers: number[] = [
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 8) + 1,
    ];
  }
}
