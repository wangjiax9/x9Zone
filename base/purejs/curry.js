/**
柯里化是一种函数的高阶技术
柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。
柯里化不会调用函数。它只是对函数进行转换。

注意：
只允许确定参数长度的函数
柯里化要求函数具有固定数量的参数。
使用 rest 参数的函数，例如 f(...args)，不能以这种方式进行柯里化。
 */
function sum (a, b, c) {
  return a + b + c
}
function curry (f) {
  return function fun (...arg1) {
    if (arg1.length >= f.length) {
      return f.apply(this, arg1)
    } else {
      return function (...arg2) {
        return fun.apply(this, arg1.concat(arg2))
      }
    }
  }
}
let add = curry(sum)
console.log(add(2)(3)(4))