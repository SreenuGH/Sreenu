import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UserListResolverService implements Resolve<User[]>{
    constructor(private _userService: UserService){
    }
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<User[]>
    {
        return this._userService.getUsers();
    }
}