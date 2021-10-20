import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor(private cs : CommonService) { 
    this.cakes = this.cs.cakes
  }

  cakes:any

  ngOnInit(): void {
  }

}
