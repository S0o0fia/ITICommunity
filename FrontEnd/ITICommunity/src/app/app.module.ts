import { SignUpComponent } from './Controllers/SignUp/SignUp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

;
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    ],
  imports: [
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
