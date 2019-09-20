import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  cars = [
    {
      brand :'suziki',
      img :'data:image/jpeg;base64,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',
      description : 'Maruti Suzuki Cars. Maruti Suzuki Baleno. ₹ 5.67 Lakhs onwards. Maruti Suzuki Ertiga. ₹ 7.55 Lakhs onwards. Maruti Suzuki'
    },
    {
      brand :'swift',
      img :'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__480.jpg',
      description : 'The carmaker is likely to skip selling the diesel-powered Swift post April 2020. Maruti Suzuki Swift Prices & Variants: The Maruti Suzuki Swift hatchback has a starting price of Rs 4.99 and the most expensive variant is priced at Rs 8.76 lakh (ex-showroom Delhi). It is available in four variants - L, V, Z and Z+.'
    },
    {
      brand :'lamborgini',
      img :'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__480.png',
      description : 'Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in SantAgata Bolognese and tractors Lamborghini Trattori in Pieve di Cento, Italy. '
    },
    {
      brand :'toyota',
      img :'https://cdn.pixabay.com/photo/2015/10/01/13/36/car-967011__480.jpg',
      description : 'oyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. In 2017, Toyotas corporate structure consisted of 364,445 employees worldwide and, as of September 2018, was the sixth-largest company in the world by revenue. '
    },
    {
      brand :'commandor',
      img :'https://cdn.pixabay.com/photo/2014/10/22/17/22/ford-498244__480.jpg',
      description : 'This word (Commandor) may be misspelled. Below you can find the suggested words which we believe are the correct spellings for what you were searching for.'
    },
    {
      brand :'duster',
      img :'https://cdn.pixabay.com/photo/2015/07/09/13/05/dacia-837864__480.jpg',
      description : 'NEW RENAULT DUSTER. ... The new Renault DUSTERs imposing broad hood and contemporary design details, both on the exterior and interior, lead it an impressive stance. ... The new Renault DUSTER variants are loaded with superior SUV capabilities and enhanced features so that you can make'
    },
    {
      brand :'Mecedes-Benz',
      img :'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__480.jpg',
      description : 'Mercedes-Benz GLC and GLE. ... The final price of the vehicle shall be provided by the Authorized Dealer at the time of purchase of vehicle. Mercedes-Benz India or its Authorized Dealers shall not be responsible.'
    },
    {
      brand :'Rolls Royce',
      img :'https://cdn.pixabay.com/photo/2015/11/06/16/33/rolls-1029584__480.jpg',
      description : 'Rolls Royce cars price starts at Rs. 6.21 crore for the cheapest car Ghost and goes up to Rs. 11.35 crore for the top model Rolls Royce Phantom.'
    },
    {
      brand :'BMW',
      img :'https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688__480.jpg',
      description : 'Delve into the fascinating world of BMW. Read inspiring stories and interviews, watch exciting videos and receive helpful answers to the most pressing questions'
    },
    {
      brand :'Ford',
      img :'https://cdn.pixabay.com/photo/2012/11/02/13/02/ford-63930__480.jpg',
      description : 'Ford India Website - Discover the wide range of 2019 latest Ford Cars & SUVs, small cars, hatchbacks and all upcoming cars at best price.'
    }
  ];
  constructor() { }
   carData:any = "";
  sendCar(car){
    this.carData = car;
  }
  ngOnInit() {
  }

}
