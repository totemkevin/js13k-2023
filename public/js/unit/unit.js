export default class Unit {
  constructor() {
    this.name = ''
    this.show = false
    this.number = 0
  }

  attack() { }
  takeDamage() { }
  hire(number) {
    this.number += number
  }
}