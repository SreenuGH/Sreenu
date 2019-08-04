import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, observable, throwError  } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { of } from 'rxjs';
import { delay } from 'q';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
    baseURL='http://localhost:3000/users';
    //baseURL='https://localhost:44371/api/users'
    constructor(private _httpClient: HttpClient)
    {
        
    }
 
    getUsers(): Observable<User[]> {
       return this._httpClient.get<User[]>(this.baseURL).pipe(catchError(this.handleError));
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

    getUser(id: number): Observable<User> {
        return this._httpClient.get<User>(`${this.baseURL}/${id}`)
        .pipe(catchError (this.handleError))
    }

    addUser(user: User): Observable<User> {

            return this._httpClient.post<User>(this.baseURL,user,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(catchError (this.handleError))
    }


    updateUser(user: User): Observable<void> {
      return this._httpClient.put<void>(`${this.baseURL}/${user.id}`,user,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(catchError (this.handleError))
    }

    deleteUser(id: number): Observable<void> {
   return this._httpClient.delete<void>(`${this.baseURL}/${id}`)
        .pipe(catchError (this.handleError))
    }
}