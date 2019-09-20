import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FirebaseService} from '../firebase.service';
import { from } from 'rxjs';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {
  router: any;
  

  constructor(private firebase:FirebaseService) {}

   postUser(form :NgForm){
     if(form.value.id){  this.firebase.updateData(form.value).subscribe((data)=>{
       console.log(data);
       this.firebase.getData();
       form.reset();
       this.router.navigateByUrl('/user');
     },(err) =>{
       console.log(err);
     })
   } else{
   this.firebase.postData(form.value).subscribe((data)=>{
    console.log(data);
    this.firebase.getData();
       form.reset();
       this.router.navigateByUrl('/user');
     
  },(err) =>{
    console.log(err);
  })
}

}
} 