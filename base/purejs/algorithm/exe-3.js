let stack = [1,2,3,4,5,6,7,8]
let temp, res = []
function fun () {
  while (stack.length) {
    temp = stack.shift()
    res.push(temp)
    console.log(stack)
  }
}
fun()
console.log(res)