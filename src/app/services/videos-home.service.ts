import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../modules/user/shared/video';
@Injectable({
  providedIn: 'root'
})
export class VideosHomeService {

  constructor() { }
  getAllVideos() {
    return [
      {
        'title': 'Video Title Here ',
        'category': 'music',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'funny',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'funny',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'rhymes',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }, {
        'title': 'Video Title Here ',
        'category': 'funny',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'rhymes',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
  }
  getVideosByCategory(category_slug: any) {

  }
  getVideoInfo() {

  }
}
