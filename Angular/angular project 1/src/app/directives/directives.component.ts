import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
users = [
  {
    id : 1234,
    name :'revanth',
    city: 'anatapur',
  },
  {
    id :1245,
    name :'hari',
    city: 'anatapur',
  },
  {
    id :3456,
    name :'lokesh',
    city: 'anatapur',
  },
  {
    id  :5670,
    name : 'vinay',
    city: 'anatapur',
  },
  {
    id :6789,
    name: 'vikram',
    city: 'anatapur',
  }
];
condition = false;
  constructor() { }
  removeUser(i){
    let index = this.users.indexOf(i);
    this.users.splice(index,1);
    this.condition = true;                                                                                                                                                                                           
  }
  ngOnInit() {
  }

}
