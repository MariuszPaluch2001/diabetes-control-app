import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageControlService {
  constructor() {}

  setCredentials(credentials: any) {
    localStorage.setItem('currentUser', JSON.stringify(credentials));
  }

  deleteCredentials() {
    localStorage.removeItem('currentUser');
  }

  isExist() {
    return 'currentUser' in localStorage;
  }

  getToken() {
    const token = localStorage.getItem('currentUser');
    return token ? JSON.parse(token).token : null;
  }

  getUserName() {
    const token = localStorage.getItem('currentUser');
    return token ? JSON.parse(token).username : null;
  }
}
