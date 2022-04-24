import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  form: FormGroup;
  constructor(
    public authService: AuthService,
    fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router
  ) {
    this.form = fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  async registrarse() {
    try {
      const { email, password } = this.form.value;
      const response = await this.authService.signUp(email, password);
      if (response) {
        this._snackBar.open('Usuario registrado correctamente', 'Cerrar', {
          duration: 2000,
        });
        this.router.navigate(['/'])
      }
    } catch (error) {
      this.form.reset();
      if (error instanceof FirebaseError) {
        this._snackBar.open(error.message, 'Cerrar', {
          duration: 2000,
        });
      }
    }
  }
}
