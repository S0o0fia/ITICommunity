import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Controllers/home/home.component';
import { ProfileComponent } from './Controllers/profile/profile.component';
import { SignupComponent } from './Controllers/signup/signup.component';
import { LandingComponent } from './Controllers/landing/landing.component';
import { LoginComponent } from './Controllers/login/login.component';



const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
