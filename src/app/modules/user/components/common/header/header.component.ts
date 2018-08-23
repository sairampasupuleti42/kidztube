import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../../../../guards/auth.guard';
import { Observable } from 'rxjs';
import { AuthService as SocialAuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { AuthService } from '../../../../../services/auth.service';
import { User } from '../../../shared/user';
declare var $: any;
declare var jquery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  topNavItems: Array<any> = [];
  isAuthenticated: any;
  social_user: SocialUser;
  user: User;
  isLoggedIn$: Observable<boolean>;
  constructor(private auth: AuthGuard, private authSvc: AuthService, private socialAuthService: SocialAuthService) {
    this.socialAuthService.authState.subscribe((user) => {
      this.social_user = user;
    });

    this.topNavItems = [
      {
        url: 'my-videos',
        name: 'My Videos'
      }, {
        url: 'sports',
        name: 'Sports'
      },
      {
        url: 'rhymes',
        name: 'Rhymes'
      },
      {
        url: 'stories',
        name: 'Stories'
      }, {
        url: 'activities',
        name: 'Activities'
      }
    ];
  }
  ngOnInit() {
    // this.isLoggedIn$ = this.authSvc.isLoggedIn
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.search').addClass('fixed');
      } else {
        $('.search').removeClass('fixed');
      }
    });
    $('[data-toggle="tooltip"]').tooltip();
  }
  signIn() {
    this.authSvc.login({ userName: 'sairam', password: '123456' });
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  onLogout() {
    this.authSvc.logout();                      // {3}
  }
}
