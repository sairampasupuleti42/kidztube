import { Component, OnInit } from '@angular/core';
import * as app from './../../../../../helpers/common';
@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {
  app_title: string;
  constructor() { }
  ngOnInit() {
    this.app_title = app.config.title;
  }
}
