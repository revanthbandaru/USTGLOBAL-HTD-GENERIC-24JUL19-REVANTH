import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//to get method
import { map } from 'rxjs/operators';
import {user} from './users/users';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  url ="https://sravya-4a88d.firebaseio.com/"
  users = [];
  
  selectedUser = {
     name: null,
     email: null,
     mobile: null,
     id: null
   }

  
  constructor(private http:HttpClient) { }
    postData(data) {
    return this.http.post(`${this.url}users.json`,data);
  }

   getData(){
     //to get the data
     this.http.get<any>(`${this.url}users.json`).pipe(map(resData=>{
     let usersArray=[];
     for(let key in resData){
       usersArray.push({...resData[key],id: key});
     }

     return usersArray;
  
   })).subscribe(data=>{
     this.users=data;
     console.log(data);
   },err=>{
console.log(err);
   });
  }
  updateData(data){
    return this.http.put(`${this.url}users/${data.id}.json`,data);}
   deleteData(data){
    return this.http.delete(`${this.url}users/${data.id}.json`);
   }
 }
 

