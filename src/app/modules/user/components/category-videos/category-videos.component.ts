import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-videos',
  templateUrl: './category-videos.component.html',
  styleUrls: ['./category-videos.component.css']
})
export class CategoryVideosComponent implements OnInit {
  categoryVideos: any;
  constructor() {
    this.categoryVideos = [
      {
        'title': 'video name here',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'permalink',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '23sec',
        'uploaded_on': '22 Jan 2017'
      },
      {
        'title': 'video two name here',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'permalink',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '23sec',
        'uploaded_on': '23 Jan 2017'
      },
      {
        'title': 'video three  name here',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'permalink',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '23sec',
        'uploaded_on': '2 Jan 2017'
      }, {
        'title': 'video four here',
        'category': 'Dance',
        'category_name': 'Dance',
        'permalink' : 'permalink',
        'thumb' : '/assets/images/cat-1/vid-3.jpg',
        'duration' : '14sec',
        'uploaded_on' : '14 Jun 2018'
      }
    ];
  }

  ngOnInit() {
  }

}
