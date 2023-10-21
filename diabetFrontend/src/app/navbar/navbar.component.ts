import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { AuthorizationService } from '../auth/services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = null;
  private destroyRef = inject(DestroyRef);
  constructor(
    private authGuard: AuthorizationService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authGuard.isLoggedIn().subscribe((data: any) => {
      this.isLoggedIn = data;
    });
    this.authGuard.getUserName().subscribe((userName) => {
      this.userName = userName;
    });
  }

  openDialog(title: string, description: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '500px',
      data: { title: title, text: description },
    });
  }

  logout(): void {
    this.authGuard
    .logout()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: () => {
        this.openDialog('Logged out', 'You are now logged out');
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
    });
  }
}
