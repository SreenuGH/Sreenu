import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserDetailsGuardService implements CanActivate {
    constructor(private _userService: UserService,
        private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return this._userService.getUser(+route.paramMap.get('id')).pipe(
            map(user => {
                const userExists = !! user;
                if (userExists) {
                    return true;
                }
                else {
                    this._router.navigate(['notFound']);
                    return false;
                }
            }),
            catchError((err) => {
                console.log(err)
                return Observable.throw(false);
            })
        );
    }
}