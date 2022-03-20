import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'huy';
  public age = 15;
  public fruits = ['apple', 'mango', 'banana'];
  public fruits2 = [
    { ten: 'apple', gia: 100 , sale: true},
    { ten: 'mango', gia: 100 , sale: true},
    { ten: 'banana', gia: 100, sale: false },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.fruits);
  }

  public resetValue(): void {
    this.name = '';
    this.age = 0;
  }
}
