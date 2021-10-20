import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

  constructor(private common : CommonService) { 
    alert("Constructor")
    this.cartitems = this.common.cakes
  }

  ngOnChanges(){
    alert("On changes")
  }
  
  cartitems :any
  ngOnInit(): void {
    alert("on init")
  }

  ngOnDestroy(){
    alert("Bye bye ")
  }

}
