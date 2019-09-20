import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resipy-details',
  templateUrl: './resipy-details.component.html',
  styleUrls: ['./resipy-details.component.css']
})
export class ResipyDetailsComponent implements OnInit {
@Input() resipyDetails:any = "";
  constructor() { }

  ngOnInit() {
  }

}
