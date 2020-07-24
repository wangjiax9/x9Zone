let i = 1
let a = new Proxy({}, {
  i: 1,
  get: function () {
    return this.i++
  }
})
let o = Object.create(a)
console.log(o.i)
console.log(o.i)

var proxy = new Proxy({}, {
  get: function(target, propKey) {
    return 35
  }
});

let obj = Object.create(proxy)
obj.time
console.log(obj.time)