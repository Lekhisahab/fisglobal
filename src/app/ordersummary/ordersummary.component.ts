import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
   order:any
  constructor(private common : CommonService , private router : Router) {
    if(!this.common.order){
      this.router.navigate(["/checkout/payment"])
    }
    this.order = this.common.order
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.common.order = null
  }

}
