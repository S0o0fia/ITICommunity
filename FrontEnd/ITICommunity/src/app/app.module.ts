import { HttpClientServiceService } from 'src/app/Services/httpClientService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './Controllers/signup/signup.component';
import { LandingComponent } from './Controllers/landing/landing.component';
import { ProfileComponent } from './Controllers/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './Controllers/login/login.component';
import { HomeModule } from './Controllers/home/home.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule , 
      ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

