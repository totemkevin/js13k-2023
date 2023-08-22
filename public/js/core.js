import * as town from './town.js';
import { refreshUI, addListener } from './ui.js';
import Army from './army.js';
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
      log: [],
      game: {
        isAttacked: false
      }
    };
  }

  getData() {
    return this.data;
  }
  init() {
    console.log('init');
    addListener(this);
    this.notify('You are the command.');
    const { guard } = town.create(this.data.town.level);
    this.data.guard = guard;
    const army = new Army(this)
    army.init()
    this.refreshUI();
  }

  next() {
    if (this.data.game.isAttacked) {
      const { guard } = town.create(this.data.town.level);
      this.data.guard = guard;
    }
    this.refreshUI();
  }
  attack() {
    this.data.game.isAttacked = true;
    this.data.town.level += 1;
    this.refreshUI();
  }
  detect() {
    this.refreshUI();
  }
  refreshUI() {
    refreshUI(this.data);
  }
  notify(message) {
    this.data.log.push(message);
  }
  addArmy(type) {
    switch (type) {
      case 's':
        this.data.army.shield += 1;
        break;
      case 'w':
        this.data.army.warrior += 1;
        break;
      case 'a':
        this.data.army.archer += 1;
        break;
      case 'r':
        this.data.army.rider += 1;
        break;
    }
    this.refreshUI();
  }
}
