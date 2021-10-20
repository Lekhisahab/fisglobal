import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private common : CommonService) { 
    this.cartitems = this.common.cakes
  }
  
  cartitems :any
  ngOnInit(): void {
  }

}
