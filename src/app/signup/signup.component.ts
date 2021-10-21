import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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

  constructor(private common  : CommonService , private http:HttpClient , private loader : NgxUiLoaderService) { }
  signup(){
    if(this.common.validEmail(this.email)){
      
      var url = "https://apifromashu.herokuapp.com/api/register"
      this.emailError=""
      var requestJson = {
        email:this.email,
        name:this.name,
        password:this.password
      }
      this.loader.start()
      this.http.post(url,requestJson).subscribe((response)=>{
        this.loader.stop()
        console.log("Response from signup api", response)
      },(error)=>{
        this.loader.stop()
        console.log("Error from signup api" , error)
      })
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
