import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.component.html',
  styleUrls: ['./bikedetails.component.css']
})
export class BikedetailsComponent implements OnInit {
  product = {
    id:'',
    Bike :'',
    cost:'',
    description:'',
    img:'',
  }

  constructor(private services:ServicesService) {
    this.getData();
   }

  ngOnInit() {
  }
 sendProducts(product){
   this.product.id = product.id;
   this.product.Bike = product.Bike;
   this.product.cost = product.cost;
   this.product.description = product.description;
   this.product.img = product.img;
 }
 
 
 
  products:any[];
getData(){
  this.services.getData().subscribe(data=>{
   this.products = data;
  },err=>{
    console.log(err);
  },()=>{
    console.log("data got successfully");
  })
}
update(key,data){
  this.services.update(key,data).subscribe(data=>{
    console.log(data);
    this.getData();
  },err=>{
    console.log(err);
  },()=>{
    console.log("data got successfully");
  })
}
delete(key){
  this.services.delete(key).subscribe(data=>{
    console.log(data);
    this.getData();
  },err=>{
    console.log(err);
  },()=>{
    console.log("deleted succesfully");
  })
}
}
