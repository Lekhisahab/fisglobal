import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor() { }

  cakes:any = [
    {
      name:"Choco Truffle Cake",
      price:500,
      image:"assets/truffle.jpeg"
    },
    {
      name:"Mango Cake",
      price:600,
      image:"assets/mango.jpeg"
    },
  
  ]

  ngOnInit(): void {
  }

}
