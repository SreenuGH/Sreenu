import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {LoginUser} from './models/user';
import {Role} from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: LoginUser;
  constructor(
    private router:Router,
    private authenticationService:AuthenticationService
  )
  {
    this.authenticationService.currentUser.subscribe(x=>this.currentUser=x);
    console.log("constructor " + this.currentUser);
  }
  
  get isAdmin()
  {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
