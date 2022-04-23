import { Travel } from "../interfaces/ITravel";

export const travelsMock: Travel[] = [
  {
    origin: 'casa de la cultura, torrelodones',
    destination: 'uc3m colmenarejo',
    steps: [
      {
        description: 'Diríjase a la parada de la calle no se que',
        type: 'walk',
      },
      {
        description: 'La parada se encuentra a la altura del número 34',
        type: 'busStopLocation',
      },
      {
        description: 'Espere al autobús, llegará a las 12.30',
        type: 'wait',
      },
      {
        description: 'Bájese en la parada "nombre parada". Quedan 5 paradas.',
        type: 'getOff',
      },
    ],
  },
  {
    origin: 'uc3m colmenarejo',
    destination: 'casa de la cultura, torrelodones',
    steps: [
      {
        description: 'Diríjase a la parada de la calle no se que',
        type: 'walk',
      },
      {
        description: 'La parada se encuentra a la altura del número 34',
        type: 'busStopLocation',
      },
      {
        description: 'Espere al autobús, llegará a las 12.30',
        type: 'wait',
      },
      {
        description: 'Bájese en la parada "nombre parada". Quedan 5 paradas.',
        type: 'getOff',
      },
    ],
  },
];
