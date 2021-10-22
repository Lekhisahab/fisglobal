import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private common : CommonService , private router : Router) { }
  userdetails:any = {}

  addAddress(){
    console.log("User details are" , this.userdetails)
    this.common.userdetails = this.userdetails
    this.router.navigate(["/checkout/payment"])
  }

  ngOnInit(): void {
  }

}
