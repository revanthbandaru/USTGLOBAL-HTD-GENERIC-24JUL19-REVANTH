import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewalltask',
  templateUrl: './viewalltask.component.html',
  styleUrls: ['./viewalltask.component.css']
})
export class ViewalltaskComponent implements OnInit {
 
  @Input() taskDetails:any = "";
  constructor() { }
 
  ngOnInit() {
  }

}
