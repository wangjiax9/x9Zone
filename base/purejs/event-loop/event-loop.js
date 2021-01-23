const axios = require('axios')
console.log('script start')

setTimeout(() => {
  console.log('setTimeout1')
}, 0);

new Promise((resolve, reject) => {
  console.log('promise1')
  resolve()
  console.log('promise111')
}).then(() => {
  console.log('promise2')
})

async function fun1() {
  var f = await fun()
  console.log('f', f)
  // f.then(res => {
  //   console.log(res)
  // })
}
setTimeout(() => {
  console.log('setTimeout2')
}, 500);
console.log('script end')

async function fun() {
  const res = await axios.get('https://ddl.163.com/apps')
  console.log('inner:',res)
  setTimeout(() => {
    console.log('async setTimneout return')
  }, 0);
  return res
}
fun1()