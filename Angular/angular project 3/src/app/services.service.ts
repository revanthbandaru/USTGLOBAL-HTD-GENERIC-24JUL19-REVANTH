import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private http:HttpClient) { }
  Url:String = "https://bikesrevanth.firebaseio.com/";
  postData(data){
    return this.http.post(`${this.Url}/bike.json`,data);
  }
  getData(){
    return this.http.get(`${this.Url}/bike.json`).pipe(map(resData=>{
      let productArray:any = [];
      for(let key in resData){
        productArray.push({...resData[key],id:key});
      }
      return productArray;
    }));
  }
update(key,data){
  return this.http.patch(`${this.Url}/bike/${key}.json`,data);
}
delete(key){
  return this.http.delete(`${this.Url}/bike/${key}.json`);
}
}

