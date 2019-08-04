import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TicketService } from './ticket.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TicketDetailsGuardService implements CanActivate {
    constructor(private _ticketService: TicketService,
        private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return this._ticketService.getTicket(+route.paramMap.get('id')).pipe(
            map(ticket => {
                const ticketExists = !! ticket;
                if (ticketExists) {
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