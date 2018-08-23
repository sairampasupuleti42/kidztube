import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleVideo: any;
  relatedVideos: any;
  constructor() {
    this.relatedVideos = [
      {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }, {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '20 Sec',
        'uploaded_on': ' 2 Days ago'
      }, {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '10 Sec',
        'uploaded_on': ' 2 Days ago'
      }, {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '18 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];

    this.articleVideo = {
      'video_title': 'Videos Heading here',
      'video_description': 'description goes here',
      'views': 505,
      'thumb': 'image path here',
      'video': 'video path herwe',
      'uploaded_by': 'gopinadh',
      'uploaded_on': 'jan 22 1995',
      'likes': 550,
      'dislikes': '100',
      'is_liked': true
    };
  }

  ngOnInit() {
  }

}
