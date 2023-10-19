import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { API_URL } from 'src/app/utils/urlApi';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private loginStatus = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  register(email: string, password: string, username: string) {
    return this.http
    .post(
      `${API_URL}/auth/register`,
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
    .post(`${API_URL}/auth/login`, { username, password }, httpOptions)
    .pipe(
      map((user: any) => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loginStatus.next(true);
        }
      })
    );
  }

  logout() {
    const token = JSON.parse(localStorage.getItem('currentUser')!);
    this.loginStatus.next(false);
    localStorage.removeItem('currentUser');
    return this.http.post(
      `${API_URL}/auth/logout`,
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
