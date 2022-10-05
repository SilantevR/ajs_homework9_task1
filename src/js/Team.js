import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (member instanceof Character) {
      if (this.members.has(member)) {
        throw new Error('Участник уже добавлен в команду');
      } else {
        this.members.add(member);
      }
    } else {
      throw new Error('Участник не является Character');
    }
  }

  addAll(...items) {
    items.forEach((member) => {
      if (member instanceof Character) {
        if (this.members.has(member)) {
          throw new Error('Участник уже добавлен в команду');
        } else {
          this.members.add(member);
        }
      } else {
        throw new Error('Участник не является Character');
      }
    });
  }

  set() {
    return Array.from(this.members);
  }
}
