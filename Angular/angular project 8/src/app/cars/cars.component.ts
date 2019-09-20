import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(resData=>{
    this.cars = resData;
    console.log(this.cars);
    })
  }

  ngOnInit() {
  }

}
