import Player from './player.js';
import Town from './town.js';
export default class Core {
  static getInstance(document) {
    if (!this.instance) {
      this.instance = new Core(document)
    }
    return this.instance
  }
  constructor(document) {
    this.document = document
    this.player = new Player()
    this.town = new Town()
    this.day = 1
    this.log = []
  }

  init() {
    this.addListener()
    this.player.addListener();

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
    this.document.getElementById('day').innerHTML = this.day;
    let text = '';
    for (let message of data.log) {
      text += `<div cless="message">${message}</div>`;
    }
    this.document.getElementById('log').innerHTML = text;

    this.player.refreshUI();
    this.town.refreshUI()
  }
  notify(message) {
    this.data.log.push(message);
  }

  addListener() {
    this.document.getElementById('next').addEventListener('click', () => {
      console.log('next');
      this.next();
    });
    this.document.getElementById('attack').addEventListener('click', () => {
      console.log('attack');
      this.attack();
    });
    this.document.getElementById('detect').addEventListener('click', () => {
      console.log('detect');
      this.detect();
    });
  }
}
