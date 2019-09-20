import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  indianNews: any[]=[];
  entNews: any[]=[];
  sportsNews: any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=6b7ed17d4c5d442abeb992bd5eea6677')
    // for gettng the data from ecxternal sources
    .subscribe(resData=>{
      this.entNews = resData.articles;
      console.log(this.entNews);
    });
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=6b7ed17d4c5d442abeb992bd5eea6677')
    // for gettng the data from ecxternal sources
    .subscribe(resData=>{
      this.indianNews = resData.articles;
      console.log(this.indianNews); 
    });    
    http.get<any>('https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=6b7ed17d4c5d442abeb992bd5eea6677')
    // for gettng the data from ecxternal sources
    .subscribe(resData=>{
      this.sportsNews = resData.articles;
      console.log(this.sportsNews);
    });
  }


  ngOnInit() {
  }

}
