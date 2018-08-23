import { Component, OnInit } from '@angular/core';
import { Video } from './../../shared/video';
import { VideosHomeService } from '../../../../services/videos-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topViewd: Video[];
  musicVideos: Video[];
  funnyVideos: Video[];
  rhymesVideos: Video[];
  cartoonVideos: Video[];
  dramaVideos: Video[];
  sportsVideos: Video[];
  danceVideos: Video[];
  
  constructor(private videoSvc:VideosHomeService ) {
    
    this.topViewd = [
      {
        'title': 'Video Title Here ',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'sports',
        'category_name': 'Sports',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'rhymes',
        'category_name': 'Rhymes',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'activities',
        'category_name': 'Activities',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.musicVideos = [
      {
        'title': 'Music Videos',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'music',
        'category_name': 'Music',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.funnyVideos = [
      {
        'title': 'Funny Videos ',
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
        'category': 'funny',
        'category_name': 'Funny',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.rhymesVideos = [
      {
        'title': 'Rhymes Videos ',
        'category': 'rhymes',
        'category_name': 'Rhymes',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'rhymes',
        'category_name': 'Rhymes',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'rhymes',
        'category_name': 'Rhymes',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'rhymes',
        'category_name': 'Rhymes',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.dramaVideos = [
      {
        'title': 'Telugu Drama Videos',
        'category': 'telugu-drama',
        'category_name': 'Telugu Drama',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Telugu Drama',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Telugu Drama',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'telugu-drama',
        'category_name': 'Telugu Drama',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.cartoonVideos = [
      {
        'title': 'Cartoon Videos',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'cartoons',
        'category_name': 'Cartoons',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.sportsVideos = [
      {
        'title': 'Sports Videos  ',
        'category': 'sports',
        'category_name': 'Sports',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'sports',
        'category_name': 'Sports',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'sports',
        'category_name': 'Sports',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'sports',
        'category_name': 'Sports',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
    this.danceVideos = [
      {
        'title': 'Dance Videos ',
        'category': 'dance',
        'category_name': 'Dance',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/cat-1-sub.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'dance',
        'category_name': 'Dance',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-1.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'dance',
        'category_name': 'Dance',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-2.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      },
      {
        'title': 'Video Title Here ',
        'category': 'dance',
        'category_name': 'Dance',
        'permalink': 'video-title-here',
        'thumb': '/assets/images/cat-1/vid-3.jpg',
        'duration': '40 Sec',
        'uploaded_on': ' 2 Days ago'
      }
    ];
  }
  ngOnInit() { }
  
}
