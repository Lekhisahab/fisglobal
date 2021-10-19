import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {


  data:any ={
    name:"Chocolate Truffle",
    price:700,
    image:"assets/truffle.jpeg"
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
