import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    
  }
  
  constructor() {
    console.log('contructur is running');
   }
  backgroundColor = 'red';
  buttonEvent(data){
    console.log(data);
  }
  // changeColor(){
  //   if(this.backgroundColor=== 'red'){
  //     this.backgroundColor= 'blue';
  //   }else{
  //     this.backgroundColor=== 'red';
  //   }
  //   }
  changeColor(data){
    this.backgroundColor = data;
  }
  ngOnInit():void {

  }


}
