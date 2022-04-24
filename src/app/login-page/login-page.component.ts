import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form: FormGroup;
  isLoginFailed = false;
  isFetching = false;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ingresar() {
    try {
      const { email, password } = this.form.value;
      this.isFetching = true;
      await this.authService.logIn(email, password);
      this.isFetching = false;
      this._snackBar.open(`Bienvenido de nuevo ${email}`, 'Cerrar', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    } catch (error) {
      this.isFetching = false;
      this._snackBar.open('Email o contraseña incorrectos', 'Cerrar', {
        duration: 2000,
      });
      this.form.reset();
      this.isLoginFailed = true;
    }
  }
}
