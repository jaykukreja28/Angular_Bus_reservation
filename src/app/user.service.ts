// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User } from './user';
// import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public registerUser(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:9090/addUpdateUser',user);
  }

  public loginUser(login:Login):Observable<any>{
    return this.http.post('http://localhost:9090/userLogin',login);
  }

  
}
