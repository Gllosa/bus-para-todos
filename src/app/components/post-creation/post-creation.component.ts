import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss'],
})
export class PostCreationComponent {
  constructor(
    public dialogref: MatDialogRef<PostCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public authService: AuthService,
    fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router
  ) {
    this.form = fb.group({
      title: ['', Validators.email],
      description: ['', Validators.required],
      nickname: ['', Validators.required],
    });
  }

  form: FormGroup;

  async post() {
    try {
      const { email, password } = this.form.value;
      const response = await this.authService.signUp(email, password);
      if (response) {
        this._snackBar.open('Usuario registrado correctamente', 'Cerrar', {
          duration: 2000,
        });
        this.router.navigate(['/']);
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

  close() {
    this.dialogref.close();
  }
}
