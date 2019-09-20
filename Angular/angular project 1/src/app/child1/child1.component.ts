import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  // @Output() exampleOutput = new EventEmitter();
  constructor() { }
  @Input() childExample :string;
  ngOnInit() {
    // this.exampleOutput.emit(this.childExample);
  }

}
