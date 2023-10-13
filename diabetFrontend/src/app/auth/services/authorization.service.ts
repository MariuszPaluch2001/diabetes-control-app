import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  register(email: string, password: string, username: string) {}

  login(password: string, username: string) {}

  logout() {}
}
