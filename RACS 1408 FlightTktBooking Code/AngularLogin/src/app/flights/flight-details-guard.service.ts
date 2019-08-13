import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FlightDetailsGuardService implements CanActivate {
    constructor(private _flightService: FlightService,
        private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return this._flightService.getFlight(+route.paramMap.get('id')).pipe(
            map(flight => {
                const flightExists = !! flight;
                if (flightExists) {
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