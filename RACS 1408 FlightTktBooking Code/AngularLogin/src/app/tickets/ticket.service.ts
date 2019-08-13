import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Observable, observable, throwError  } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { of } from 'rxjs';
import { delay } from 'q';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TicketService {
   baseURL='http://localhost:3000/tickets';
   //baseURL='https://localhost:44329/api/tickets';
    constructor(private _httpClient: HttpClient)
    {
        
    }
 
    getTickets(): Observable<Ticket[]> {
       return this._httpClient.get<Ticket[]>(this.baseURL).pipe(catchError(this.handleError));
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

    getTicket(id: number): Observable<Ticket> {
        return this._httpClient.get<Ticket>(`${this.baseURL}/${id}`)
        .pipe(catchError (this.handleError))
    }

    addTicket(ticket: Ticket): Observable<Ticket> {

            return this._httpClient.post<Ticket>(this.baseURL,ticket,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(catchError (this.handleError))
    }


    updateTicket(ticket: Ticket): Observable<void> {
      return this._httpClient.put<void>(`${this.baseURL}/${ticket.id}`,ticket,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(catchError (this.handleError))
    }

    deleteTicket(id: number): Observable<void> {
   return this._httpClient.delete<void>(`${this.baseURL}/${id}`)
        .pipe(catchError (this.handleError))
    }
}