import { Pipe, PipeTransform } from '@angular/core';
import { user } from './users/users';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: user[], searchvalue: string): user[] {
    if (searchvalue===undefined){
      return users;
    }else{
      return users.filter(data=>{
        return data.name.toLowerCase().includes(searchvalue.toLowerCase());
      });
    }
  }

}
