import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: any = {
    username: "",
    password: ""
  }

  constructor(private _routes: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.user.username === "user" && this.user.password === "user"){
      this._routes.navigate(['/test']);
      alert("Good luck!");
    } else {
      this._routes.navigate(['/login-form']);
      alert("incorrect password or username!");
    }
  }

}
