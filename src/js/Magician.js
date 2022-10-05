import Maths from './Maths';

export default class Magician extends Maths {
  constructor(name, stoned = false, distance = 1) {
    super(name, 'Magician', 10, 40, stoned, distance);
  }
}
