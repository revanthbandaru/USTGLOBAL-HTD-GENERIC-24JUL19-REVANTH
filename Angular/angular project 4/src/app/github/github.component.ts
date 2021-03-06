import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any[] = [];
constructor(private http: HttpClient) {
  http.get<any>('https://api.github.com/users').
  subscribe(resData => {
    this.user = resData;
  });
}
  ngOnInit() {
  }

}
