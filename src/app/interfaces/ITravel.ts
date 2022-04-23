export interface Step {
  description: string;
  type: 'walk' | 'busStopLocation' | 'wait' | 'getOff'
}

export interface Travel {
  origin: string;
  destination: string;
  steps: Step[];
}
