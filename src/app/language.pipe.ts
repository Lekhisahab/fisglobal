import { Pipe, PipeTransform } from '@angular/core';

var spanish : any = {
   "Hello" :"Hola",
   "Good Morning": "Buenos días"
}

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {

    return spanish[value] || value ;
  }

}
