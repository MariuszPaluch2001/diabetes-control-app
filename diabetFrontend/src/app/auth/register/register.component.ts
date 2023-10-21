import { HttpErrorResponse } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
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
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
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
  
  emaiErrors() {
    return this.registerForm.get('email')!.hasError('required')
      ? 'This field is required'
      : this.registerForm.get('email')!.hasError('email')
      ? 'Not a valid emailaddress'
      : '';
  }

  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  getErrorPassword() {
    return this.registerForm.get('password')!.hasError('required')
      ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)'
      : this.registerForm.get('password')!.hasError('requirements')
      ? 'Password needs to be at least six characters, one uppercase letter and one number'
      : '';
  }

  checkValidation(input: string) {
    const validation =
      this.registerForm.get(input)!.invalid &&
      (this.registerForm.get(input)!.dirty ||
        this.registerForm.get(input)!.touched);
    return validation;
  }

  onSubmit(formData: FormGroup): void {
    const email = formData.value.email;
    const password = formData.value.password;
    const username = formData.value.username;
    this.auth
    .register(email, password, username)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: () => {
        this.auth
        .isLoggedIn()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.openDialog('Successful register', 'You are now registered');
        });
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 400) {
          this.openDialog(
            'Not registered',
            'User with that username already exists'
          );
        } else {
          this.openDialog('Not registered', err.message);
        }
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
    });
  }
}
