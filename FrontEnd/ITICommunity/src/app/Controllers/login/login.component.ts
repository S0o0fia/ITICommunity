import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService } from 'src/app/Services/httpClientService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(public router:Router) {
   
   }

  ngOnInit() {
    
  }

  Signup()
  {
     //to navigate to signup page 
     this.router.navigate(["signup"]);   
  }

}
