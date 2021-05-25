function distink (arr) {
  const list = [2, 5, 9]
  for (let i = 0; i < arr.length; i++) {
    if (!list.includes(arr[i])) {
      arr.splice(i, 1)
      i--
    } else {
      list.splice(list.indexOf(arr[i]), 1)
    }
  }
  console.log(arr)
}
const arr = [1, 2, 8, 4, 5, 6]
distink(arr)