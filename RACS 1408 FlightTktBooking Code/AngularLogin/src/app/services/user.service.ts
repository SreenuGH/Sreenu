import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginUser } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<LoginUser[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get<LoginUser>(`/users/${id}`);
    }
}