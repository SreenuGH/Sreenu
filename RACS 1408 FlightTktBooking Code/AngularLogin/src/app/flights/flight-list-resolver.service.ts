import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {Flight} from '../models/flight.model';
import {Observable} from 'rxjs';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';


@Injectable()
export class FlightListResolverService implements Resolve<Flight[]>{
    constructor(private _flightService: FlightService){
    }
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Flight[]>
    {
        return this._flightService.getFlights();
    }
}