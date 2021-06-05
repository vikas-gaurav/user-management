import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IProfile } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersList: Array<IProfile>;
  constructor(private appService: AppService) {
    console.log(`ProfileComponent :: constructor ::constructor initialized`);
  }

  ngOnInit() {
    console.log(`ProfileComponent :: ngOnInit :: initialized`);
    this.appService.getAllUsers(2).subscribe((res_: { data: Array<IProfile> }) => {
      console.log(`ProfileComponent :: getUsersById :: res_`, res_);
      this.usersList = res_.data;
    });
  }

}
