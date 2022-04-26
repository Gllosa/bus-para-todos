import { Travel } from '../interfaces/ITravel';

export const travelsMock: Travel[] = [
  {
    origin: 'casa de la cultura, torrelodones',
    destination: 'uc3m colmenarejo',
    steps: [
      {
        description: 'Diríjase a la parada de la calle Jesusa Lara',
        type: 'walk',
      },
      {
        description:
          'La parada se encuentra a la altura del número 40. (Parada 10727)',
        type: 'busStopLocation',
      },
      {
        description: 'Espere al autobús, llegará a las 12.30',
        type: 'wait',
      },
      {
        description:
          'Bájese en la parada "Av.Universidad Carlos III". Quedan 11 paradas. Llegará en 21 minutos.',
        type: 'getOff',
      },
    ],
  }
];
