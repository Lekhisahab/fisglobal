import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // we transform that value and we return that value
    var discountpercentage = args[0] || 5
    value = value - value*discountpercentage/100
    return value;
  }

}
