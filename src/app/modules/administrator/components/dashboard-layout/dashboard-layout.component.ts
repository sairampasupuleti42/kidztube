import { Component, OnInit } from '@angular/core';
import { config } from '../../../../helpers/common';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
app_title:string;
  constructor() { }

  ngOnInit() {
    this.app_title=config.title;
  }

}
