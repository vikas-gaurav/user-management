import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public invalidcredentials= false;

  constructor(private appService: AppService, private router: Router) {
    console.log(`LoginComponent :: constructor ::constructor initialized`);
  }

  ngOnInit() {
    // this.appService.isUserLoggedIn$.next(false); //logout user
  }

  public authenticate(email: string, pwd: string){
    // console.log(`LoginComponent :: authenticate :: email and password ${email}, ${pwd }`);
    this.appService.authenticateUser(email, pwd).subscribe((res_: {token: string})=>{
      if (res_ && res_.token && res_.token.length){
        console.log(`LoginComponent :: authenticate :: authenticated with token`, res_.token);
        this.appService.isUserLoggedIn$.next(true);
        this.router.navigateByUrl('/users');
      }
      else{
        console.log(`LoginComponent :: authenticate :: Invalid user name or password`,);
        this.invalidcredentials = true;
      }
    });
  }

}
