var arr = [1,2,3,4,5,6,7]
console.log(arr.slice(0,3).reduce((sum, cur) => sum + '/' + cur))

var array = [
  {
    value: 10
  },
  {
    value: 20
  },
  {
    value: 30
  },
  {
    value: 40
  },
]
function af (array) {
  return array.reduce((sum, cur) => {
    return sum === -1 ? cur.value : sum + '/' +cur.value
  }, -1)
}
console.log(af(array))