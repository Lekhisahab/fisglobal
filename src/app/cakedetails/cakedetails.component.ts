import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cake : any 
  constructor(private route : ActivatedRoute , private http:HttpClient , private loader : NgxUiLoaderService) { 
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

}
