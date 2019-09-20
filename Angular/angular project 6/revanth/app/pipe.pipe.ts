import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, length: number): any {
    if (value.length <= length) {
      return value;

    }else{
      return value.substr(0, length) + '...';

    }
  }

}
