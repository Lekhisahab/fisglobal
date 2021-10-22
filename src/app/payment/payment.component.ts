import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private common:CommonService , private http:HttpClient , private router : Router) { 
    if(!this.common.userdetails){
      this.router.navigate(["/checkout/address"])
    }
  }

  placeOrder(){
    var requestObj = {
      cakes:this.common.cartitems,
      price:this.common.price,
      ...this.common.userdetails

    }
    console.log("Get Set place the order" , requestObj)

    var url = "https://apifromashu.herokuapp.com/api/addcakeorder"
    var myheaders = new HttpHeaders()
    myheaders = myheaders.append("authtoken", localStorage.token)
    this.http.post(url,requestObj,{
      headers:myheaders
    }).subscribe((response:any)=>{
      console.log("Response of order place api" , response)
      if(response.order){
        this.common.order = response.order
        this.router.navigate(["/checkout/ordersummary"])
      }
    }, (error)=>{
      console.log("Error from order place api",error )
    })
  }

  ngOnInit(): void {
  }

}
