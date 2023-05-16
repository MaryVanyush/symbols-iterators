export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`персонаж ${character.name} уже в команде`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
    return this.members;
  }

  toArray(set) {
    this.arrayFromSet = Array.from(set);
  }

  iterator() {
    const team = {};
    let key = 0;
    for (const value of this.members) {
      team[key] = value;
      key += 1;
    }
    team.length = this.members.size;
    team[Symbol.iterator] = function () {
      let index = 0;
      const values = Object.values(this);
      return {
        next() {
          if (index < values.length) {
            return {
              done: false,
              // eslint-disable-next-line
              value: values[index++],
            };
          }
          return {
            done: true,
          };
        },
      };
    };
    for (const value of team) {
      // eslint-disable-next-line
      console.log(value);
    }
  }
}
