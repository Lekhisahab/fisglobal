import { Component, OnInit  , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginDone : any = new EventEmitter()
  constructor() { }

  email:any
  password:any

  ngOnInit(): void {
  }

  login(){
    if(this.email=="test@test.com" && this.password=="password"){
      this.loginDone.emit()
    }
  }

}
