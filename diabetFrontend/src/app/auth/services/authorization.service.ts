import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isLocalEnvironment } from 'src/app/utils/environmentType';
import { LOCAL_API_URL, PRODUCTION_API_URL } from 'src/app/utils/urlApi';
import { map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  API_URL = isLocalEnvironment() ? LOCAL_API_URL : PRODUCTION_API_URL;
  constructor(private http: HttpClient) {}

  register(email: string, password: string, username: string) {
    return this.http
    .post(
      `${this.API_URL}/auth/register`,
      { email, username, password },
      httpOptions
    )
    .pipe(
      map((user: any) => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  login(password: string, username: string) {
    return this.http
    .post(`${this.API_URL}/auth/login`, { username, password }, httpOptions)
    .pipe(
      map((user: any) => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
