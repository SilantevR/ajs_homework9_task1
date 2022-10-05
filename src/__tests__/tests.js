import Zombie from '../js/Zombie';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Bowman from '../js/Bowman';
import Character from '../js/Character';
import Team from '../js/Team';

describe('Класс Maths', () => {
  const daemon = new Daemon('Alex', false, 2);
  const magician = new Magician('Kostya', true, 2);
  const item = new Magician('Oleg', true, 1);

  test('Считает свойство attak относительно клеток', () => {
    expect(daemon).toEqual({
      _attack: 9,
      _name: 'Alex',
      _stoned: false,
      _type: 'Daemon',
      health: 100,
      level: 1,
      defence: 40,
      distance: 2,
    });
  });
  test('Считает свойство attak относительно клеток и stoned', () => {
    expect(magician).toEqual({
      _attack: 4,
      _name: 'Kostya',
      _stoned: true,
      _type: 'Magician',
      health: 100,
      level: 1,
      defence: 40,
      distance: 2,
    });
  });
  test('Считает свойство attak относительно клеток и stoned', () => {
    expect(item).toEqual({
      _attack: 10,
      _name: 'Oleg',
      _stoned: true,
      _type: 'Magician',
      health: 100,
      level: 1,
      defence: 40,
      distance: 1,
    });
  });
});

describe('Класс Team', () => {
  const daemon = new Daemon('Alex');
  const undead = new Undead('Kolya');
  const magician = new Magician('Kostya');
  const swordsman = new Swordsman('Andrey');
  const bowman = new Bowman('Vitalyi');
  const zombie = new Zombie('Stas');
  const serega = { name: 'Serega' };
  const team = new Team();

  test('Определён', () => {
    expect(team).toBeDefined();
  });
  test('Создаёт экземпляр Character с нужными параметрами', () => {
    expect(team).toBeInstanceOf(Team);
  });
  test('метод add(), работает', () => {
    team.add(daemon);
    expect(Array.from(team.members)).toEqual([
      {
        _attack: 10,
        _name: 'Alex',
        _stoned: false,
        _type: 'Daemon',
        health: 100,
        level: 1,
        defence: 40,
        distance: 1,
      },
    ]);
  });

  test('метод addAll(), работает', () => {
    team.addAll(undead, magician, swordsman, bowman, zombie);
    expect(Array.from(team.members)).toEqual([
      {
        _name: 'Alex',
        _type: 'Daemon',
        health: 100,
        level: 1,
        _attack: 10,
        defence: 40,
        _stoned: false,
        distance: 1,
      },
      {
        _name: 'Kolya',
        _type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        _name: 'Kostya',
        _type: 'Magician',
        health: 100,
        level: 1,
        _attack: 10,
        defence: 40,
        _stoned: false,
        distance: 1,
      },
      {
        _name: 'Andrey',
        _type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        _name: 'Vitalyi',
        _type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        _name: 'Stas',
        _type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ]);
  });
  test('Выдает ошибку метод add, если добавляют участника второй раз', () => {
    function errorAdd() {
      team.add(bowman);
    }
    expect(errorAdd).toThrowError(new Error('Участник уже добавлен в команду'));
  });

  test('Выдает ошибку метод addAll, если добавляют участника второй раз', () => {
    function errorAddAll() {
      team.addAll(bowman, zombie);
    }
    expect(errorAddAll).toThrowError(
      new Error('Участник уже добавлен в команду'),
    );
  });

  test('Выдает ошибку метод add, если объект не принадлежит Character', () => {
    function errorAdd() {
      team.add(serega);
    }
    expect(errorAdd).toThrowError(new Error('Участник не является Character'));
  });
  test('Выдает ошибку метод addAll, если объект не принадлежит Character', () => {
    function errorAddAll() {
      team.addAll(serega);
    }
    expect(errorAddAll).toThrowError(
      new Error('Участник не является Character'),
    );
  });
  test('метод set(), работает', () => {
    expect(team.set()).toEqual([
      {
        _name: 'Alex',
        _type: 'Daemon',
        health: 100,
        level: 1,
        _attack: 10,
        defence: 40,
        _stoned: false,
        distance: 1,
      },
      {
        _name: 'Kolya',
        _type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        _name: 'Kostya',
        _type: 'Magician',
        health: 100,
        level: 1,
        _attack: 10,
        defence: 40,
        _stoned: false,
        distance: 1,
      },
      {
        _name: 'Andrey',
        _type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        _name: 'Vitalyi',
        _type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        _name: 'Stas',
        _type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ]);
  });
});

describe('Класс Character', () => {
  test('Определён', () => {
    expect(Character).toBeDefined();
  });
  test('Создаёт экземпляр Character с нужными параметрами', () => {
    const item = new Character('item', 'Bowman', 25, 25);
    expect(item).toBeInstanceOf(Character);
  });

  test.each([
    ['Alex', 'Bowman', 25, 25, ['Alex', 'Bowman', 25, 25]],
    ['Victor', 'Daemon', 10, 40, ['Victor', 'Daemon', 10, 40]],
    ['Dave', 'Magician', 10, 40, ['Dave', 'Magician', 10, 40]],
    ['Ann', 'Swordsman', 40, 10, ['Ann', 'Swordsman', 40, 10]],
    ['Mr', 'Undead', 25, 25, ['Mr', 'Undead', 25, 25]],
    ['Vlad', 'Zombie', 40, 10, ['Vlad', 'Zombie', 40, 10]],
  ])(
    'Создаёт экземпляр Character с параметрами name: %s type: %s attack: %i defence: %i',
    (name, type, attack, defence, object) => {
      const character = new Character(...object);
      expect(character.name).toBe(name);
      expect(character.type).toBe(type);
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(attack);
      expect(character.defence).toBe(defence);
    },
  );
  test.each([
    ['A', ['A', 'Bowman', 25, 25]],
    ['Victorisgreatest', ['Victorisgreatest', 'Daemon', 10, 40]],
  ])('Выдает ошибку с параметрами name: %s', (name, object) => {
    function errorCharacter() {
      new Character(...object);
    }
    expect(errorCharacter).toThrowError(
      new Error('длина параметра: min - 2, max - 10 символов'),
    );
  });
  test.each([
    ['Bowma', ['Alex', 'Bowma', 25, 25]],
    ['Vampire', ['Victor', 'Vampire', 10, 40]],
  ])('Выдает ошибку с параметрами type: %s', (type, object) => {
    function errorCharacter() {
      new Character(...object);
    }
    expect(errorCharacter).toThrowError(
      new Error(
        'выберите один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
      ),
    );
  });
});

describe('Методы класса Character', () => {
  const bowman = new Character('item', 'Bowman', 25, 25);
  beforeEach(() => {
    bowman.level = 1;
    bowman.health = 80;
    bowman.attack = 25;
    bowman.defence = 25;
  });

  test('Вызывает метод levelUp у экземпляра класса Character', () => {
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(25 * 1.2);
    expect(bowman.defence).toBe(25 * 1.2);
    expect(bowman.health).toBe(100);
  });
  test('Выдает ошибку метод levelUp если health = 0', () => {
    bowman.health = 0;
    function errorlevelUp() {
      bowman.levelUp();
    }
    expect(errorlevelUp).toThrowError(
      new Error('нельзя повысить левел умершего'),
    );
  });
  test('Вызывает метод damage(points) у экземпляра класса Character', () => {
    bowman.damage(100);
    expect(bowman.health).toBe(5);
  });
  test('Выдает ошибку метод damage если health < 0', () => {
    bowman.health = -1;
    function errorDamage() {
      bowman.damage(20);
    }
    expect(errorDamage).toThrowError(new Error('игрок уже умер'));
  });
});

describe('Класс Bowman', () => {
  const item = new Bowman('item');
  test('Определён', () => {
    expect(Bowman).toBeDefined();
  });
  test('Создаёт экземпляр Bowman с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Bowman);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Bowman');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(25);
    expect(item.defence).toBe(25);
    item.damage(20);
    expect(item.health).toBe(85);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(25 * 1.2);
    expect(item.defence).toBe(25 * 1.2);
  });
});

describe('Класс Undead', () => {
  const item = new Undead('item');
  test('Определён', () => {
    expect(Undead).toBeDefined();
  });
  test('Создаёт экземпляр Undead с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Undead);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Undead');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(25);
    expect(item.defence).toBe(25);
    item.damage(20);
    expect(item.health).toBe(85);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(25 * 1.2);
    expect(item.defence).toBe(25 * 1.2);
  });
});

describe('Класс Daemon', () => {
  const item = new Daemon('item');
  test('Определён', () => {
    expect(Daemon).toBeDefined();
  });

  test('Создаёт экземпляр Daemon с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Daemon);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Daemon');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(10);
    expect(item.defence).toBe(40);
    item.damage(20);
    expect(item.health).toBe(88);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(10 * 1.2);
    expect(item.defence).toBe(40 * 1.2);
  });
});

describe('Класс Magician', () => {
  const item = new Magician('item');
  test('Определён', () => {
    expect(Magician).toBeDefined();
  });

  test('Создаёт экземпляр Magician с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Magician);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Magician');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(10);
    expect(item.defence).toBe(40);
    item.damage(20);
    expect(item.health).toBe(88);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(10 * 1.2);
    expect(item.defence).toBe(40 * 1.2);
  });
});

describe('Класс Swordsman', () => {
  const item = new Swordsman('item');
  test('Определён', () => {
    expect(Swordsman).toBeDefined();
  });

  test('Создаёт экземпляр Swordsman с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Swordsman);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Swordsman');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(40);
    expect(item.defence).toBe(10);
    item.damage(20);
    expect(item.health).toBe(82);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(40 * 1.2);
    expect(item.defence).toBe(10 * 1.2);
  });
});

describe('Класс Zombie', () => {
  const item = new Zombie('item');
  test('Определён', () => {
    expect(Zombie).toBeDefined();
  });

  test('Создаёт экземпляр Zombie с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Zombie);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Zombie');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(40);
    expect(item.defence).toBe(10);
    item.damage(20);
    expect(item.health).toBe(82);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(40 * 1.2);
    expect(item.defence).toBe(10 * 1.2);
  });
});
