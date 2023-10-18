import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../auth/services/authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authGuard: AuthorizationService) {}
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authGuard.isLoggedIn().subscribe((data: boolean) => {
      this.isLoggedIn = data;
    });
  }

  logout(): void {
    this.authGuard.logout().subscribe((data) => {
      alert(data);
      console.log(data);
    });
  }
}
