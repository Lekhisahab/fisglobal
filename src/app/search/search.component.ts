import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchresults:any = []
  searchtext:any
  constructor(private route : ActivatedRoute , private loader : NgxUiLoaderService , private http:HttpClient) { 
    this.route.queryParams.subscribe((query)=>{
      var searchquery = query.q
      this.searchtext=query.q
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q="+searchquery
      this.loader.start()
      this.http.get(url).subscribe((response:any)=>{
        console.log("Response from search cakes api" , response)
        this.loader.stop()
        this.searchresults = response.data
      }, (error)=>{
        this.loader.stop()
        console.log("Error from search cakes api" , error)
      })
      // we will send this text to backend and show the response to html
    }) 
  }

  ngOnInit(): void {
  }

}
