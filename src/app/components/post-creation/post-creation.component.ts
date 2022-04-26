import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss'],
})
export class PostCreationComponent {
  constructor(
    public dialogref: MatDialogRef<PostCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public postsService: PostsService,
    fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router
  ) {
    this.form = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      nickname: ['', Validators.required],
    });
  }

  form: FormGroup;
  fetching = false

  async post() {
    if (!this.form.valid) return;
    try {
      const { nickname, description, title } = this.form.value;
      this.fetching = true;
      await this.postsService.addPost({
        author: nickname,
        description,
        title,
      });
      this.fetching = false
      this._snackBar.open('Post creado correctamente', 'Cerrar', {
        duration: 2000,
      });
      window.location.reload()
    } catch (error) {
      console.log(error)
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
