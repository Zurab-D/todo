import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: any, sign: string = '#', position: string = 'pre'): any {
    if (position && (position == 'post' || position == 'after')) {
      return value + sign
    };
    return sign + value;
  }

}
