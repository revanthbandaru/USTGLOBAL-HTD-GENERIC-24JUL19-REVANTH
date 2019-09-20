import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [];
  constructor() { }

  ngOnInit() {
  }
  printForm(LoginForm : NgForm){
    console.log(LoginForm.value);
    this.users.push(LoginForm.value);
  }

}
