import { Injectable } from '@angular/core';
import { Travel } from '../interfaces/ITravel';
import { travelsMock } from './mockTravels';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  constructor() {}

  travels: Travel[] = travelsMock

  getTravel(origin: string, destination: string): Travel | undefined {
    return this.travels.find(
      travel =>
        travel.origin === origin.toLowerCase() &&
        travel.destination === destination.toLowerCase()
    );
  }
}
