import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

 	getAll(params: any): Observable<User[]> {
		return this.http.get<User[]>(`${this.api}/users`, { params })
	}

	getById(id: number): Observable<User> {
		return this.http.get<User>(`${this.api}/users/${id}`)
	}

	save(user: User): Observable<User> {
		return this.http.post<User>(`${this.api}/users`, user)
	}

	update(id: number, user: User): Observable<User> {
		return this.http.put<User>(`${this.api}/users/${id}`, user)
	}

	delete(id: number): Observable<User> {
		return this.http.delete<User>(`${this.api}/users/${id}`)
	}

}
