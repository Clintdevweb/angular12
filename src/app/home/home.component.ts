import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'huy'
  public age = 15

  constructor() { }

  ngOnInit(): void {
  }

  public resetValue(): void {
    this.name = ''
    this.age = 0

  }
}
