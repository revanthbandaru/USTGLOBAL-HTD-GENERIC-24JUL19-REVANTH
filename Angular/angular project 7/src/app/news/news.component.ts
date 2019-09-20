import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [
    {
      channel : 'sakshi',
      img : '',
      event : ''
    },
    {
      channel : 'tv5',
      img : '',
      event : ''
    },
    {
      channel : 'tv9',
      img : '',
      event : ''
    },
    {
      channel : 'Abn',
      img : '',
      event : ''
    },
    {
      channel : 'India today',
      img : '',
      event : ''
    },
    {
      channel : 'ttd',
      img : '',
      event : ''
    },
    {
      channel : 'v6',
      img : '',
      event : ''
    },
    {
      channel : 'hmtv',
      img : '',
      event : ''
    },
    {
      channel : 'times now',
      img : '',
      event : ''
    },
    {
      channel : 'NDTV 24/7',
      img : '',
      event : ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
