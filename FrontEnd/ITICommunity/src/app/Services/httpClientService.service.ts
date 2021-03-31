import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

api : string = "https://localhost:44350/api/";  
users : any ;
constructor(private http : HttpClient) { }

//to get Users from Api
getUsers()
{
  this.http.get(this.api+"Users").subscribe(
    response=>{
       console.log(response)
    },
    error=>{
      console.log(error)
    }
  )
}

}
