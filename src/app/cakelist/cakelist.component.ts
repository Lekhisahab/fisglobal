import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor(private cs : CommonService , private http : HttpClient , private loader : NgxUiLoaderService) { 
    this.cakes = []
    var url = "https://apifromashu.herokuapp.com/api/allcakes"
    this.loader.start()
    this.http.get(url).subscribe((response:any)=>{
      console.log("Response from all cakes api" , response)
      this.loader.stop()
      this.cakes = response.data
    }, (error)=>{
      this.loader.stop()
      console.log("Error from all cakes api" , error)
    })
  }
  cakes:any

  ngOnInit(): void {
  }

}
