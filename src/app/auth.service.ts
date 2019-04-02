import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router :Router) { }
  sendToken(token:string)
  {
   localStorage.setItem("LoggedInUser",token);
  }
  getToken()
  {
   localStorage.getItem("LoggedInUser");
  }
  isLoggedIn()
    {
      return  this.getToken() !==null;
    }
  logOut()
  {
   localStorage.removeItem("LoggedInUser");
   this.router.navigate(["login"]);
  }
}
