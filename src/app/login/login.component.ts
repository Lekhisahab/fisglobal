import { Component, OnInit  , Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginDone : any = new EventEmitter()
  constructor(private http : HttpClient , private router : Router , private loader : NgxUiLoaderService) { }

  email:any
  password:any

  ngOnInit(): void {
  }

  login(){
    var url = "https://apifromashu.herokuapp.com/api/login"
      var requestJson = {
        email:this.email,
        password:this.password
      }
      this.loader.start()
      this.http.post(url,requestJson).subscribe((response:any)=>{
        this.loader.stop()

        console.log("Response from login api", response)
        if(response.token){
          localStorage.token = response.token
          localStorage.email = response.email

          this.router.navigate(["/"])
        }
      },(error)=>{
        this.loader.stop()
        console.log("Error from login api" , error)
      })

  }

}
