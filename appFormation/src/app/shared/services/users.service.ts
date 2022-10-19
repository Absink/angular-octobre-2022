import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = environment.api;

  constructor(private http: HttpClient) { }


  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users`).pipe(
      map(users => users.map(user => new User(user)))
    );
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}users/${id}`).pipe(
      map(user => new User(user))
    );
  }

  public login(login: string, pass: string): Observable<User> {
    return this.http.get<User[]>(`${this.url}users?login=${login}&password=${pass}`).pipe(
      map(user => new User(user[0]))
    );
  }
}
