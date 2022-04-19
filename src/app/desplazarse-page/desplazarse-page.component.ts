import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desplazarse-page',
  templateUrl: './desplazarse-page.component.html',
  styleUrls: ['./desplazarse-page.component.scss'],
})
export class DesplazarsePageComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
    });
  }
  nada() {
    console.log('nada');
  }

}
