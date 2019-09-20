import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNews:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=428b9b0d63af45aaacbd57df28f32680').subscribe(resData =>{
      this.healthNews = resData.articles;
  })
  }

  ngOnInit() {
  }

}
