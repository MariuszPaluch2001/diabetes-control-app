import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isLocalEnvironment } from 'src/app/utils/environmentType';
import { LOCAL_API_URL, PRODUCTION_API_URL } from 'src/app/utils/urlApi';
import { map } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private loginStatus = new BehaviorSubject<boolean>(false);
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
          this.loginStatus.next(true);
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
          this.loginStatus.next(true);
        }
        return user;
      })
    );
  }

  logout() {
    const token = JSON.parse(localStorage.getItem('currentUser')!);
    this.loginStatus.next(false);
    localStorage.removeItem('currentUser');
    return this.http.post(
      `${this.API_URL}/auth/logout`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Token ${token.token}`,
        }),
      }
    );
  }

  isLoggedIn() {
    return this.loginStatus.asObservable();
  }
}
