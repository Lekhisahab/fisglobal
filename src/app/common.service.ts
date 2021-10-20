import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  cakes:any =[
    {
      name:"Choco Truffle Cake",
      price:500,
      image:"assets/truffle.jpeg",
      eggless:true,
      quantity:2
    },
    {
      name:"Mango Cake",
      price:600,
      image:"assets/mango.jpeg",
      quantity:1
    },
    {
      name:"Fruit Cake",
      price:800,
      image:"assets/fruit.webp",
      quantity:3

    },
    {
      name:"Fruit Cake",
      price:800,
      image:"assets/fruit.webp",
      quantity:3

    }
  ]

  validEmail(e:any) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
  }
}
