export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('error name');
    }
    if (!types.includes(type)) {
      throw new Error('error type');
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
