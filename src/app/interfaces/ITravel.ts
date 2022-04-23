export interface Step {
  description: string;
  type: 'walk' | 'busStopLocation' | 'wait' | 'getOff'
}