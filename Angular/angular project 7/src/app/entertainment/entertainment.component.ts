import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainment:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=428b9b0d63af45aaacbd57df28f32680').subscribe(resData=>{
      this.entertainment = resData.articles;
    })
   }

  ngOnInit() {
  }

}
