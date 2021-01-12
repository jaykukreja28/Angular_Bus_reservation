import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  private _userService : UserService;

  constructor(private userService:UserService) { 
    this._userService = userService; 
  }

  ngOnInit() : void {
  }

  public registration(){
    sessionStorage.setItem("user",JSON.stringify(this.user))
    console.log(this.user); 
    this._userService.registerUser(this.user).subscribe(
  
      data=>{
        console.log(JSON.stringify(data)); 
        this.user = data;
      }
    );
    // console.log(JSON.stringify(this.user));
  }

}
