import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { LoginUser } from '../models/user';
import {  AuthenticationService } from '../services/authentication.service';
import { UserService} from '../services/user.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    currentUser: LoginUser;
    userFromApi: LoginUser;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
            this.userFromApi = user;
        });
    }
}