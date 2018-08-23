import { Component, OnInit } from '@angular/core';

import { AuthService as SocialAuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { User } from '../../shared/user';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  public user: User;
  social_user: SocialUser;
  constructor(private socialAuthService: SocialAuthService,private authSvc:AuthService) {
    this.socialAuthService.authState.subscribe((user) => {
      this.social_user = user;
    });
  }

  ngOnInit() {
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
  signIn(){
    this.authSvc.login({userName:'sairam',password:'123456'});
  }
}
