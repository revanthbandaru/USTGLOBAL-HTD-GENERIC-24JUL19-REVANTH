import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsNews:any[] =[]; 
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=428b9b0d63af45aaacbd57df28f32680').subscribe(resData =>{
      this.sportsNews = resData.articles;
  })
  }
  

  ngOnInit() {
  }

}
