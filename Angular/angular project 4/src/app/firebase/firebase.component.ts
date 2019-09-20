import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  [x: string]: any;

  first:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://api.github.com/users')
    .subscribe(resData=>{
      this.first = resData;
    })
  }

  ngOnInit() {
  }

}
