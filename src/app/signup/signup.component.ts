import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  email:any 
  name:any
  password:any

  signup(){
    console.log("Email is" , this.email)
    console.log("Name is" , this.name)
    console.log("Password is" , this.password)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
