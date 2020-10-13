class Person {
  static money = 99999
  constructor () {
    this.name = 'person'
    this.age = 6
  }
  walk () {
    console.log('person walk')
  }
}
class Children extends Person {
  constructor () {
    super()
    this.weight = 66
  }
  run () {
    console.log('children running')
  }
}
const ch = new Children()
console.dir(ch)
ch.run()