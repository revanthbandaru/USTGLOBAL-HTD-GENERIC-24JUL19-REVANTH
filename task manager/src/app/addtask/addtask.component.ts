import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user:any = [];

  sendData(data){
    this.user = data;
    console.log(data);
  }
  // sendData(LoginForm : NgForm){
  //   this.user.push(LoginForm);
  //   console.log(LoginForm);
  }


