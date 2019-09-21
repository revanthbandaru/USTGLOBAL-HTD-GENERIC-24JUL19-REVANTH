import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [{
    brand : 'BMW',
    img : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
  },
  {
    brand : 'BENZ',
    img : 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg',
  },
  {
    brand : 'rolls royce',
    img : 'https://cdn.pixabay.com/photo/2016/07/27/08/02/rollsroyce-1544788__340.jpg',
  },
  {
    brand : 'Bugatti',
    img : 'https://image.shutterstock.com/image-photo/geneva-march-5-2013-bugatti-260nw-130933826.jpg',
  },
  {
    brand : 'lamborghini',
    img : 'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png',
  },
  {
    brand : 'audi',
    img : 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
  }]
  cardata : any;
  constructor() { }
  sendcar(car){
    this.cardata = car;
  }
  ngOnInit() {
  }

}
