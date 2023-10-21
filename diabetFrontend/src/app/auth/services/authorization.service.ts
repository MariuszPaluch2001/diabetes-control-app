import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { API_URL } from 'src/app/utils/urlApi';
import { LocalStorageControlService } from './local-storage-control.service';
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
  private userName = new BehaviorSubject<string | null>(null);
  constructor(
    private http: HttpClient,
    private storageService: LocalStorageControlService
  ) {
    const token = this.storageService.getToken();
    this.userName.next(this.storageService.getUserName());
    if (this.storageService.isExist()) {
      this.http
      .get(`${API_URL}/auth/test_token`, {
        headers: new HttpHeaders({
          Authorization: `Token ${token}`,
        }),
      })
      .subscribe((resp: any) => {
        this.loginStatus.next(resp.auth);
      });
    }
  }

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
          this.storageService.setCredentials(user);
          this.loginStatus.next(true);
          this.userName.next(user.username);
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
          this.storageService.setCredentials(user);
          this.loginStatus.next(true);
          this.userName.next(user.username);
        }
      })
    );
  }

  logout() {
    const token = this.storageService.getToken();
    this.loginStatus.next(false);
    this.userName.next(null);
    this.storageService.deleteCredentials();
    return this.http.post(
      `${API_URL}/auth/logout`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }),
      }
    );
  }

  isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  getUserName() {
    return this.userName.asObservable();
  }
}
