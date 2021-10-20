import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cake = {"owner":{"email":"harshit199dubey@gmail.com","name":"Harshit Dubey"},"description":"A special Birthday cake for a party of 20 people.","createdat":"2021-06-07T13:28:12.641Z","likes":10,"ratings":4.5,"reviews":100,"type":"Birthday","flavour":"Chocolate","eggless":true,"ingredients":["Chocolate","milk","butter","granulated sugar"],"_id":"60be2d3548235b00225a71c7","name":"Chocolate Cake","price":500,"weight":2,"image":"https://res.cloudinary.com/ashudev/image/upload/v1623076144/x6svihz4ldsybxj5r3t1.jpg","cakeid":1623076149741,"__v":0}
  constructor() { }

  ngOnInit(): void {
  }

}
