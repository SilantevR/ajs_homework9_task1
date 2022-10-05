/* eslint no-underscore-dangle: 0 */

import Character from './Character';

export default class Maths extends Character {
  constructor(name, type, attack, defence, stoned, distance) {
    super(name, type, attack, defence);
    this.stoned = stoned;
    this.distance = distance;
    this.attack = attack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    if (this.distance > 1) {
      if (this.stoned) {
        this._attack = value * (1 - (this.distance - 1) / 10) - Math.log2(this.distance) * 5;
      } else {
        this._attack = value * (1 - (this.distance - 1) / 10);
      }
    } else {
      this._attack = value;
    }
  }
}
