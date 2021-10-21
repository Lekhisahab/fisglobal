import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cake : any 
  constructor(private route : ActivatedRoute , private http:HttpClient , private loader : NgxUiLoaderService , private router : Router) { 
    var cakeid = this.route.snapshot.params.cakeid
    var url  = "https://apifromashu.herokuapp.com/api/cake/"+cakeid
    this.loader.start()
    this.http.get(url).subscribe((response:any)=>{
      this.loader.stop()
      console.log("Response from cake details api" , response)
      this.cake = response.data
    } , (error)=>{
      this.loader.stop()
      console.log("Error from cake details api" , error)
    })
  }

  ngOnInit(): void {
  }


  addToCart(){
   // we need to check if user is logged in or not 
   if(localStorage.token){
      // we will add it cart for that we need to hit the api
      var url = "https://apifromashu.herokuapp.com/api/addcaketocart"

      var requestJson = {
        name:this.cake.name,
        cakeid:this.cake.cakeid,
        price:this.cake.price,
        image:this.cake.image,
        weight:this.cake.weight,
      }
      var myheaders = new HttpHeaders()
      myheaders = myheaders.append("authtoken",localStorage.token)
      this.http.post(url,requestJson,{
        headers:myheaders
      }).subscribe((response:any)=>{
        console.log("response from add cake to cart api" , response)
        if(response.data){
          this.router.navigate(["/cart"])
        }
      }, (error)=>{
        console.log("error from add to cart api" , error)
      })

   }
   else{
     alert("Login please")
   }

   
    

   
  }

}
