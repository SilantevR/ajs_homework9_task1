import Maths from './Maths';

export default class Daemon extends Maths {
  constructor(name, stoned = false, distance = 1) {
    super(name, 'Daemon', 10, 40, stoned, distance);
  }
}
