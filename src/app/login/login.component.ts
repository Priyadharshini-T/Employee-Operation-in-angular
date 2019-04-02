import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup
  constructor(
    private myRoute: Router,
    private auth: AuthService) {
   
  }
ngOnInit(){
  this.LoginForm= new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.pattern("[^@]*@[^@]*")]),
    Password: new FormControl('', Validators.required)
  })
}
  login() {
    if (this.LoginForm.valid) {
      this.auth.sendToken(this.LoginForm.value.email)
      this.myRoute.navigate(["employee"]);
    }
  }

}
