import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  signIn(){
    this.router.navigate(['profile']);
  }

}
