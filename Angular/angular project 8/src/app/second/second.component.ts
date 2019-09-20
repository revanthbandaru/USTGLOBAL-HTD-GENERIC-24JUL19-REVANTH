import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  second:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://api.github.com/users').subscribe(resData=>{
      this.second=resData;
      console.log(this.second);
    })
   }

  ngOnInit() {
  }

}
