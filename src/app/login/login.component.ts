import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  private _userService : UserService;

  constructor(private userService:UserService) { 
    this._userService = userService; 
  }
  ngOnInit() {
  }

  public userLogin(){
    sessionStorage.setItem("user",JSON.stringify(this.login))
    console.log(this.login); 
    this._userService.loginUser(this.login).subscribe(
  
      data=>{
        console.log(JSON.stringify(data)); 
        this.login = data;
      }
    );
    // console.log(JSON.stringify(this.user));
  }



}
