import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) {
    console.log(`AppService :: constructor ::constructor initialized`);
   }

  private apiUrl = "https://reqres.in/api/users";

  //get all user
  public getAllUsers(pageNumber: number) {
    console.log(`AppService :: getAllUsers :: Entering...`);
    return this.http.get(this.apiUrl + '?page=' + pageNumber);
  }

  //get user by id api
  public getUsersById(userId_: string) {
    console.log(`AppService :: getUsersById :: finding user for id ${userId_}`);
    return this.http.get(this.apiUrl + '/' + userId_);
  }

  //authenticate user by userId and password
  public authenticateUser(userId_: string, pwd_: string) {
    console.log(`AppService :: authenticateUser :: authenticating....`);
    return this.http.post(this.apiUrl + '/login', { email: userId_, password: pwd_ });
  }

}
