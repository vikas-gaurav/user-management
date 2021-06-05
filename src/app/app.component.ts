import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'user-manager';
  public authenticatedUser = false;
  constructor(private appService: AppService, private router: Router) {
    console.log(`AppComponent :: constructor ::constructor initialized`);
  }

  ngOnInit() {
    this.appService.isUserLoggedIn$.subscribe(isUserLoggedIn_ => {
      console.log(`AppComponent :: ngOnInit :: isUserLoggedIn`, isUserLoggedIn_);
      this.authenticatedUser = isUserLoggedIn_;
    });
  }

  public logout(){
    console.log(`AppComponent :: logout :: ....`,);
    this.appService.isUserLoggedIn$.next(false);
    this.router.navigateByUrl('/login');
    this.authenticatedUser = false;
  }
}
