import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Observable, observable, throwError  } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { of } from 'rxjs';
import { delay } from 'q';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FlightService {
    baseURL='http://localhost:3000/flights';
    //baseURL='https://localhost:44371/api/users'
    constructor(private _httpClient: HttpClient)
    {
        
    }
 
    getFlights(): Observable<Flight[]> {
       return this._httpClient.get<Flight[]>(this.baseURL).pipe(catchError(this.handleError));
    }

    private handleError(errorResponse:HttpErrorResponse)
    {
        if (errorResponse.error instanceof ErrorEvent)
        {
            console.error("Client side error", errorResponse.error.message);
        }
        else
        {
            console.error("Server side error", errorResponse);
        }
        
        return throwError('There is a problem with service, we are notified and we will work on this')
    }

    getFlight(id: number): Observable<Flight> {
        return this._httpClient.get<Flight>(`${this.baseURL}/${id}`)
        .pipe(catchError (this.handleError))
    }

    addFlight(flight: Flight): Observable<Flight> {

            return this._httpClient.post<Flight>(this.baseURL,flight,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(catchError (this.handleError))
    }


    updateFlight(flight: Flight): Observable<void> {
      return this._httpClient.put<void>(`${this.baseURL}/${flight.id}`,flight,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(catchError (this.handleError))
    }

    deleteFlight(id: number): Observable<void> {
   return this._httpClient.delete<void>(`${this.baseURL}/${id}`)
        .pipe(catchError (this.handleError))
    }
}