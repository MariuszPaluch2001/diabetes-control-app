import { HttpErrorResponse } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  fieldRequired: string = 'This field is required';
  private destroyRef = inject(DestroyRef);

  constructor(
    private auth: AuthorizationService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        this.checkPassword,
      ]),
    });
  }

  openDialog(title: string, description: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '500px',
      data: { title: title, text: description },
    });
  }

  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  getErrorPassword() {
    return this.loginForm.get('password')!.hasError('required')
      ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)'
      : this.loginForm.get('password')!.hasError('requirements')
      ? 'Password needs to be at least six characters, one uppercase letter and one number'
      : '';
  }

  checkValidation(input: string) {
    const validation =
      this.loginForm.get(input)!.invalid &&
      (this.loginForm.get(input)!.dirty || this.loginForm.get(input)!.touched);
    return validation;
  }
  
  onSubmit(formData: FormGroup): void {
    const password = formData.value.password;
    const username = formData.value.username;
    this.auth
    .login(password, username)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: () => {
        this.auth
        .isLoggedIn()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.openDialog('Logged in', 'You are now logged in');
        });
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
          this.openDialog('Not logged in', "This account doesn't exist");
        } else {
          this.openDialog('Not logged in', err.message);
        }
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
    });
  }
}
