export default class Army {
  constructor(core) {
    this.core = core
    this.edit = {
      shield: 0,
      warrior: 0,
      archer: 0,
      rider: 0
    }
    this.isBuy = false
  }

  init() {
    document.getElementById('buy').addEventListener('click', () => {
      this.isBuy = true
      this.refreshUI()
    });
    for (const item of Object.keys(this.edit)) {
      document.getElementById('add' + item).addEventListener('click', () => {
        this.edit[item] += 1
        this.refreshUI()
      });
      document.getElementById('reduce' + item).addEventListener('click', () => {
        this.edit[item] -= 1
        this.refreshUI()
      });
    }
    document.getElementById('accept').addEventListener('click', () => {
      this.submit()
      this.isBuy = false
      this.refreshUI()
    });
    document.getElementById('cancel').addEventListener('click', () => {
      this.edit = {
        shield: 0,
        warrior: 0,
        archer: 0,
        rider: 0
      }
      this.isBuy = false
      this.refreshUI()
    });
  }

  refreshUI() {
    this.core.refreshUI()
    document.getElementById('armyInfo').style.display = this.isBuy ? 'block' : 'none';
    document.getElementById('armyEdit').style.display = this.isBuy ? 'none' : 'block';
  }

  submit() {
    for (const item of Object.keys(this.edit)) {
      this.core.army[item] += this.edit[item]
    }
  }
}