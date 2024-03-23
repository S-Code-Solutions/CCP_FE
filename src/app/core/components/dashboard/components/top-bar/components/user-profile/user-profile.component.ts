import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserProfileComponent implements OnInit {
  Username: any;

  constructor(
              private router: Router,) { }

  ngOnInit(): void {
    // this.Username = JSON.parse(this.cookieService.get('User'))
  }

  logout(): void {
    // this.cookieService.remove('token');
    // this.router.navigate(['/authentication']);
  }

}