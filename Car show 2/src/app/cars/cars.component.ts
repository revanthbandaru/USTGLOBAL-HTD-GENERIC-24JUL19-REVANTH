import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

cars=[
  {
    name :"Bmw",
    model:"X5",
    img :"https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__480.jpg",
  },
  {
    name :"Benz",
    model:"asd5",
    img :"https://image.shutterstock.com/image-photo/luxury-car-head-lamp-260nw-781216114.jpg",
  },
  {
    name :"Lamborgini",
    model:"sa5",
    img :"https://cdn.pixabay.com/photo/2019/01/09/06/50/car-3922692_1280.jpg",
  },
  {
    name :"Bugatti",
    model:"zkbdd5",
    img :"https://cdn.pixabay.com/photo/2013/06/05/02/00/bugatti-116491__480.jpg",
  },
  {
    name :"Rolroyce",
    model:"X512",
    img :"https://cdn.pixabay.com/photo/2016/10/25/12/00/rolls-royce-2-1768630__480.jpg",
  }
];
  user:any = "";
  ngOnInit() {
  }
  sendData(data){
    this.user = data;
  }

}
