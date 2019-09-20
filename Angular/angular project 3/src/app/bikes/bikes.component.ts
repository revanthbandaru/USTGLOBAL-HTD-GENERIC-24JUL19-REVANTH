import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private services:ServicesService) { }

  sendData(data){
    this.services.postData(data).subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
