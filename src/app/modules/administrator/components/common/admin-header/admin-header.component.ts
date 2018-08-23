import { Component, OnInit } from '@angular/core';
import * as app from './../../../../../helpers/common';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  app_title:string;
  constructor() { }

  ngOnInit() {
    this.app_title=app.config.title;
  }

}
