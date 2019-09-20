import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  generalNews:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=428b9b0d63af45aaacbd57df28f32680').subscribe(resData =>{
      this.generalNews = resData.articles;
  })
  }


  ngOnInit() {
  }

}
