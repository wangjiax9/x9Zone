/**
* ## 问题2
* 实现 getValue 函数，安全的获取目标对象指定 path 的值
* @params {object | array} value 指定对象
* @params {string} path
*/

function getValue(obj, path) {
  // ...
  console.log(path)
  if (path.startsWith('[') && Array.isArray(obj)) {
      console.log('array')
  } else if (typeof obj === 'object') {
    const arr = path.split('.')
    let res = [obj], i = 0
    while (i < arr.length) {
      let v = arr[i]
      if (/[a-zA-Z0-9]\[[0-9]\]/g.test(v)) {
        let val = res.pop()[v.split('[')[0]]
        let ec = /\[(\d+)\]/g.exec(v)
        res.push(val[ec[1]])
      } else {
        let t = res.pop()
        res.push(t[v])
      }
      i++
    }
    return res.pop()
  }
}
const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'
console.log(getValue(object, 'a[0].b.c'))
// console.log(getValue(array, '[0].a.b[0]'))