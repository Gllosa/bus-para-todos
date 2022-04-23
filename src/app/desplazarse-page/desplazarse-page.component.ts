import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Step } from '../interfaces/ITravel';

@Component({
  selector: 'app-desplazarse-page',
  templateUrl: './desplazarse-page.component.html',
  styleUrls: ['./desplazarse-page.component.scss'],
})
export class DesplazarsePageComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
    });
  }
  nada() {
    console.log('hola');
  }
  steps: Step[] = [
    { description: 'Dirijase a la parada de la calle no se que', type: 'walk' },
    {
      description: 'La parada se encuentra a la altura del número 34',
      type: 'busStopLocation',
    },
    { description: 'Espere al autobús, llegará a las 12.30', type: 'wait' },
    { description: 'Bajese en la parada "nombre parada". Quedan 5 paradas.', type: 'getOff' },
  ];

  leer_paso(paso: string) {
    const voice = new SpeechSynthesisUtterance();
    const jarvis = window.speechSynthesis;
    voice.text = paso;
    jarvis.speak(voice);
  }
}
