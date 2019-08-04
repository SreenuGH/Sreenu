import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {Ticket} from '../models/ticket.model';
import {Observable} from 'rxjs';
import { TicketService } from './ticket.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketListResolverService implements Resolve<Ticket[]>{
    constructor(private _ticketService: TicketService){
    }
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Ticket[]>
    {
        return this._ticketService.getTickets();
    }
}