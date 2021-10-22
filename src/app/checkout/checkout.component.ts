import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private common : CommonService , private router : Router) { 
    if(!this.common.cartitems){
      this.router.navigate(["/cart"])
    }
  }

  ngOnInit(): void {
  }

}
