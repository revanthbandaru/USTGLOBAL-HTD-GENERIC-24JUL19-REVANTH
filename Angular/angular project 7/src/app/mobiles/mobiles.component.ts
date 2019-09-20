import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles=[
    {
      brand :'nokia',
      img : 'https://cdn.pixabay.com/photo/2015/05/19/18/40/nokia-774016__480.png',
      description : 'Browse a complete list of Nokia smartphones. From early models to the latest devices, explore the range of Nokia handsets.'
    },
    {
      brand :'samsung',
      img : 'https://cdn.pixabay.com/photo/2018/01/27/13/22/close-3111177__480.jpg',
      description : 'Compare and Buy Samsung smartphones models online with 3G, 4G, Dual sim, android OS and more features. Know price & specs of all smart phones in India.'
    },
    {
      brand :'motorola',
      img : 'https://cdn.pixabay.com/photo/2015/09/21/01/03/smartphone-949123__480.jpg ',
      description : 'Motorola Mobile price list gives price in India of all Motorola mobile phones, including latest Motorola phones, best phones under 10000. '
    },
    {
      brand :'apple',
      img : 'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461__480.jpg',
      description : 'Price list of all Apple mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobile prices ..'
    },
    {
      brand :'one plus',
      img : 'https://cdn.pixabay.com/photo/2016/05/07/05/17/one-plus-1377073__480.jpg',
      description : 'OnePlus Mobile price list gives price in India of all OnePlus mobile phones, including latest OnePlus phones, best phones under 10000.'
    },
    {
      brand :'nexas',
      img : 'https://cdn.pixabay.com/photo/2016/03/26/22/33/smartphone-1281632__480.jpg',
      description : 'Checkout Best Google Nexus smartphones in India with price, specs, reviews and comparison. You can also ask questions about the top 10 mobiles before ..'
    },
    {
      brand :'black berry',
      img : 'https://cdn.pixabay.com/photo/2017/08/28/15/57/blackberry-2690103__480.jpg',
      description : 'Price list of all Blackberry mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobile '
    },
    {
      brand :'sony',
      img : 'https://cdn.pixabay.com/photo/2016/03/27/16/24/smartphone-1283012__480.jpg',
      description : 'Sony Mobile Communications Inc. is a multinational telecommunications company founded on October 1, 2001 as a joint venture between Sony and Ericsson, headquartered in Tokyo, Japan and wholly owned by Sony.'
    },
    {
      brand :'oppo',
      img : 'https://image.shutterstock.com/image-vector/smartphone-mobile-phone-isolated-realistic-260nw-703670326.jpg',
      description : 'Price list of all Oppo mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobile prices '
    },
    {
      brand :'microsoft',
      img : 'https://cdn.pixabay.com/photo/2015/08/15/18/05/lumia-889924__480.jpg',
      description : 'It launched its Windows Phone smartphone OS in 2010, and its own Surface lineup of tablets in 2012. ... Microsofts latest mobile launch is the Lumia 650 Dual SIM. ... The Microsoft Lumia 650 Dual SIM runs Windows 10 Mobile and is powered by a 2000mAh removable battery.'
    }
  ]
  constructor() { }
  mobileData:any ="";
  ngOnInit() {
  }
  sendMobile(mobile){
    this.mobileData = mobile;
  }
}
