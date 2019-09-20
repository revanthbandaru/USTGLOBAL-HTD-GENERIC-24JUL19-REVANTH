import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
businessNews:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=428b9b0d63af45aaacbd57df28f32680').subscribe(resData =>{
      this.businessNews = resData.articles;
  })
  }

  ngOnInit() {
  }

}
