import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// import { interval, Subscriber,Subscription } from 'rxjs';
// import {map} from "rxjs/operators";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor( private userService:UserService) { }
// mySubscription : Subscription;
  ngOnInit() {
      // this.mySubscription = interval(500).pipe(map(data=>{
      //   return data*10;
      // })).subscribe(data=>{
      //   console.log(data);
      // },(error)=>{
      //   console.log(error);
      // },()=>{
      //   console.log("complete");
      // });
  }
// ngOnDestroy(){
//   // this.mySubscription.unsubscribe();
// }
}
