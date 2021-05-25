const obj = {name : 'aa'}
Object.freeze(obj)
obj.age = 1
console.log(obj)
var jsur = 'xxxx.js'
const script = document.createElement('script')
script.src = jsur
script.type = 'html/script'
document.body.appendChild(script)
document.querySelector('body').append(script)