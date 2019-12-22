import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginName = " ";
  userNamePrompt = 'No server was created';
  
  
   constructor() {
  
  }

  ngOnInit() {
  }
  
 onClickUserName() {
 this.userNamePrompt = 'User logged. Hi ' + this.loginName;  
 }
 onAddUser() {
   this.loginName = '';
 }
  
}
