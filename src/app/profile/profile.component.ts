import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IProfile } from '../interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userProfile: IProfile;
  constructor(private appService: AppService) { 
    console.log(`ProfileComponent :: constructor ::constructor initialized`);
  }

  ngOnInit() {
    console.log(`ProfileComponent :: ngOnInit :: initialized`);
    this.appService.getUsersById("1").subscribe((res_: { data: IProfile }) => {
      console.log(`ProfileComponent :: getUsersById :: res_`, res_);
      this.userProfile = res_.data;
    });
  }

}
