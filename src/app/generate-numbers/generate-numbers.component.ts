import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-numbers',
  templateUrl: './generate-numbers.component.html',
  styleUrls: ['./generate-numbers.component.css'],
})
export class GenerateNumbersComponent implements OnInit {
   nums:number[] = [
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
    Math.floor(Math.random() * 8) + 1,
  ];
  constructor() {}

  ngOnInit(): void {
    
    console.log(this.nums);
  }
}
