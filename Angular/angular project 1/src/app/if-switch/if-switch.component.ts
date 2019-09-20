import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-switch',
  templateUrl: './if-switch.component.html',
  styleUrls: ['./if-switch.component.css']
})
export class IfSwitchComponent implements OnInit {
  condition = true;
  constructor() { }
  person = 'palak';
  printInput(inputElement){
    console.log(inputElement.value);
  }
  ngOnInit() {
  }

}
