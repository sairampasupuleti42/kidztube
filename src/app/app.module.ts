import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/user/components/common/header/header.component';
import { FooterComponent } from './modules/user/components/common/footer/footer.component';

import { HomeComponent } from './modules/user/components/home/home.component';
import { SiginComponent } from './modules/user/components/account/sigin/sigin.component';
import { SigupComponent } from './modules/user/components/account/sigup/sigup.component';
import { ProfileComponent } from './modules/user/components/account/profile/profile.component';
import { AccountComponent } from './modules/user/components/account/account.component';
import { CategoryVideosComponent } from './modules/user/components/category-videos/category-videos.component';
import { SideabarComponent } from './modules/user/components/common/sideabar/sideabar.component';

import { SocialLoginModule } from 'angular4-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { AdminHeaderComponent } from './modules/administrator/components/common/admin-header/admin-header.component';
import { AdminFooterComponent } from './modules/administrator/components/common/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './modules/administrator/components/common/admin-sidebar/admin-sidebar.component';
import { DashboardComponent } from './modules/administrator/components/dashboard/dashboard.component';
import { ArticleComponent } from './modules/user/components/article/article.component';
import { FilterPipe } from './helpers/filter.pipe';
import { VideosHomeService } from './services/videos-home.service';
import { MyVideosComponent } from './modules/user/components/account/my-videos/my-videos.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AdminLoginComponent } from './modules/administrator/components/admin-login/admin-login.component';
import { AdminProfileComponent } from './modules/administrator/components/admin-profile/admin-profile.component';
import { AdminVideosComponent } from './modules/administrator/components/admin-videos/admin-videos.component';
import { AdminVideoUploadComponent } from './modules/administrator/components/admin-video-upload/admin-video-upload.component';
import { AdminVideoCategoriesComponent } from './modules/administrator/components/admin-video-categories/admin-video-categories.component';
import { DashboardLayoutComponent } from './modules/administrator/components/dashboard-layout/dashboard-layout.component';
import { AdminVideosListComponent } from './modules/administrator/components/admin-videos-list/admin-videos-list.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('690469461844-b2gv3bv0kh2dod1b88cbt0ag8dqic9d2.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('192950101526760')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SiginComponent,
    SigupComponent,
    ProfileComponent,
    AccountComponent,
    SideabarComponent,
    CategoryVideosComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    DashboardComponent,
    ArticleComponent,
    FilterPipe,
    MyVideosComponent,
    AdminLoginComponent,
    AdminProfileComponent,
    AdminVideosComponent,
    AdminVideoUploadComponent,
    AdminVideoCategoriesComponent,
    AdminVideosListComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'account',
        component: AccountComponent,
        children: [
          {
            path: '',
            redirectTo: 'signin',
            pathMatch: 'full'
          },
          {
            path: 'signin',
            component: SiginComponent
          }, {
            path: 'signup',
            component: SigupComponent
          }
        ]
      }, {
        path: 'my-videos',
        component: MyVideosComponent,
        canActivate: [AuthGuard]
      }, {
        path: 'login',
        component: AdminLoginComponent
      }, {
        path: 'admin',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        children: [
          {
            path: '',
            component: DashboardComponent
          }, {
            path: 'category',
            component: AdminVideoCategoriesComponent
          }, {
            path: 'videos',
            component: AdminVideosComponent,
            children: [
              {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
              },
              {
                path: 'list',
                component: AdminVideosListComponent
              },
              {
                path: 'add',
                component: AdminVideoUploadComponent
              }
            ]
          }
        ]
      },
      {
        path: ':id',
        component: CategoryVideosComponent
      },
      {
        path: ':id/:id',
        component: ArticleComponent
      }
    ], { useHash: true })
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, VideosHomeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
