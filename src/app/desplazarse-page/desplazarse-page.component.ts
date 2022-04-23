import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Step } from '../interfaces/ITravel';
import { TravelsService } from '../services/travels.service';

@Component({
  selector: 'app-desplazarse-page',
  templateUrl: './desplazarse-page.component.html',
  styleUrls: ['./desplazarse-page.component.scss'],
})
export class DesplazarsePageComponent {
  form: FormGroup;
  search = false;
  found = false;
  fetching = false;
  steps: Step[];
  constructor(private fb: FormBuilder, private travelsService: TravelsService) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
    });
  }

  exchangeLocations() {
    const origin = this.form.value.origin;
    const destination = this.form.value.destination;
    this.form.patchValue({
      origin: destination,
      destination: origin,
    });
  }

  buscar() {
    this.search = true;
    this.fetching = true;
    setTimeout(() => {
      const travel = this.travelsService.getTravel(this.form.value.origin, this.form.value.destination)
      if (travel) {
        this.found = true
        this.steps = travel.steps
      }
      this.fetching = false;
    }, 1000);
  }
}
