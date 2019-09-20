import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor() { }
  get name(){
    return this.registerForm.get('name');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get mobile(){
    return this.registerForm.get('mobile');
  }

  ngOnInit() {
  }
registerForm = new FormGroup({
  name :new FormControl('',[Validators.minLength(5),Validators.required]),
  email:new FormControl('',[Validators.email,Validators.maxLength(15),Validators.required]),
  mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(15)])
})
  printForm(a){
    console.log(a.value);
    console.log(a);
  }
}
