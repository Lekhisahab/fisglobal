import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
   cartitems:any = []
   totalPrice:any = 0

   checkout(){
     this.common.cartitems = this.cartitems
     this.common.price = this.totalPrice
   }

  constructor(private common : CommonService, private http : HttpClient , private loader : NgxUiLoaderService , private router : Router) {
    
    if(!localStorage.token){
      this.router.navigate(["/"])
  }
   var url = "https://apifromashu.herokuapp.com/api/cakecart"
   var requestobj = {}
   var myheaders = new HttpHeaders()
   myheaders = myheaders.append('authtoken', localStorage.token)
   this.loader.start()
    this.http.post(url,requestobj,{
      headers:myheaders
    }).subscribe((response:any)=>{
      this.loader.stop()
      console.log("response from cake cart api ", response)
      this.cartitems = response.data
      this.cartitems.forEach((each:any)=>{
          this.totalPrice = this.totalPrice+ (each.price*each.quantity)
      })
    } , (error)=>{
      this.loader.stop()
      console.log("error from cake cart api", error)
    })
  }




  removeFromCart(index:any){


  
     
    this.loader.start()
    var url = "https://apifromashu.herokuapp.com/api/removecakefromcart"
    var myheaders = new HttpHeaders()
    myheaders = myheaders.append('authtoken', localStorage.token)
    var requestObj = {
      cakeid : this.cartitems[index].cakeid
    }
   this.http.post(url,requestObj,{
     headers:myheaders
   }).subscribe((response)=>{
     this.loader.stop()
     console.log("Response from remove from cart api" , response)
     this.totalPrice = this.totalPrice - (this.cartitems[index].price*this.cartitems[index].quantity)
     this.cartitems.splice(index,1)
   } , (error)=>{
    this.loader.stop()

     console.log("Error from remove from cart api" , error)
   })



  }



}
