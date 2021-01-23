// abcdeffff > abcdef
// aaaabcadeffffffff > bcadef
// 求字符串的最长不重复子串
// aabcftpssssbcftwwwww > abcftps
function getStr (str) {
  const arr = str.split('')
  const res = []
  let i = 0, temp = []
  while (i <= arr.length) {
    if (arr[i] != temp[temp.length - 1]) {
      if (temp.includes(arr[i])) {
        temp.shift()
        res.push(temp)
      }
      temp.push(arr[i])
    } else {
      res.push(temp)
      temp = [arr[i]]
    }
    i++
  }
  return res
}
function findStr (str) {
  const arr = str.match(/([a-z])\1\1*/g)
}
const str1 = 'abcdeffff'
const str2 = 'aaaabcadeffffffff'
const str3 = 'aabcftpssssbcftwwwww'
console.log(getStr(str3))