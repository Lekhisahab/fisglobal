import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  email:any 
  name:any
  password:any
  emailError:any = ""

  constructor(private common  : CommonService) { }

  

  signup(){
    if(this.common.validEmail(this.email)){
      this.emailError=""
    }
    else{
      this.emailError = "Invalid Email"
    }
  
    console.log("Email is" , this.email)
    console.log("Name is" , this.name)
    console.log("Password is" , this.password)
  }


  ngOnInit(): void {
  }

}
