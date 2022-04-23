import { Component, Input, OnInit } from '@angular/core';
import { Step } from '../interfaces/ITravel';

@Component({
  selector: 'app-route-step',
  templateUrl: './route-step.component.html',
  styleUrls: ['./route-step.component.scss'],
})
export class RouteStepComponent implements OnInit {
  @Input() step: Step;
  icon: string;
  constructor() {}
  icons = {
    walk: 'directions_walk',
    busStopLocation: 'directions_bus',
    wait: 'timer',
    getOff: ' transfer_within_a_station',
  };

  ngOnInit() {
    this.icon = this.icons[this.step.type];
  }

  dictate() {
    const voice = new SpeechSynthesisUtterance();
    const jarvis = window.speechSynthesis;
    voice.text = this.step.description;
    jarvis.speak(voice);
  }
}
