import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginName = 'admin';
  public color = 'orange'
  public counter = 0
  public counterSquare = 0

  constructor(private common : CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counterService
    this.counterSquare = this.common.Squared(this.counter)
    this.common.counterService ++
  }
}
