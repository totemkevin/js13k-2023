import Core from './core'
export default class Player {
  constructor() {
    this.money = 0
    this.population = 0
    this.army = {
      shield: new Shield(),
      warrior: new Warrior(),
      archer: new Archer(),
      rider: new Rider(),
    }
    this.isBuy = false
    this.edit = {
      shield: 0,
      warrior: 0,
      archer: 0,
      rider: 0
    }
  }

  edit(method, value) {
    if (method === 'add') {
      this.edit[value] += 1
    }
    if (method === 'reduce') {
      this.edit[value] -= 1
    }
    if (method === 'accept') {
      for (let item of Object.keys(this.edit)) {
        this.army[value].hire(this.edit[value])
      }
    }
    if (method === 'cancel') {
      this.edit = {
        shield: 0,
        warrior: 0,
        archer: 0,
        rider: 0
      }
    }
    this.refreshUI()
  }

  addListener() {
    for (let item of Object.keys(this.edit)) {
      this.document.getElementById('add-' + item).addEventListener('click', () => {
        console.log('add-' + item);
        this.edit('add', item);
      });
      this.document.getElementById('reduce-' + item).addEventListener('click', () => {
        console.log('reduce-' + item);
        this.edit('reduce', item);
      });
    }
    this.document.getElementById('accept').addEventListener('click', () => {
      console.log('accept');
      this.edit('accept', {});
    });
    this.document.getElementById('cancel').addEventListener('click', () => {
      console.log('cancel');
      this.edit('cancel', {});
    });
  }

  refreshUI() {
    Core.
  }
}