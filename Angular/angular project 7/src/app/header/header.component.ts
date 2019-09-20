import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  businessNews:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=428b9b0d63af45aaacbd57df28f32680').subscribe(resData =>{
      this.businessNews = resData.articles;
    })
  }

  ngOnInit() {
  }

}
