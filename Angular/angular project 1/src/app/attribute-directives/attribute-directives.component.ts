import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {
  isSuccess = true;
  classesArray =['bg-success','bg-dark'];
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.isSuccess = false;
    },10000);
  }
}
