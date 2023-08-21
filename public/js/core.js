import * as town from './town.js';
import { refreshUI, addListener } from './ui.js';
export default class core {
  constructor() {
    this.data = {
      info: {
        day: 1,
        money: 0,
        population: 0
      },
      army: {
        shield: 0,
        warrior: 0,
        archer: 0,
        rider: 0
      },
      town: {
        level: 1
      },
      guard: {
        shield: 0,
        warrior: 0,
        archer: 0,
        rider: 0
      },
      game: {
        isAttacked: false
      }
    };
  }

  getData() {
    return this.data;
  }
  init() {
    const { guard } = town.create(this.data.town.level);
    this.data.guard = guard;
  }

  next() {
    console.log('core next');
    console.log(this.data.game.isAttacked);
    if (this.data.game.isAttacked) {
      const { guard } = town.create(this.data.town.level);
      this.data.guard = guard;
    }
    refreshUI(this.data);
  }
  attack() {
    this.data.game.isAttacked = true;
    this.data.town.level += 1;
    refreshUI(this.data);
  }
  detect() {
    refreshUI(this.data);
  }
}
