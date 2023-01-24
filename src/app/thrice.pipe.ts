import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thrice'
})
export class ThricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
