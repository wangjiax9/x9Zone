/**
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true
示例 2：

输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
           aabcc         dbbac 顺序
输出：false
 */
function compare (s1, s2, s3) {
  let arr3 = s3.split('')
  let arr2 = s2.split('')
  let arr1 = s1.split(''), res = false, temp = []
  for (let i = 0; i < arr1.length; i++) {
    let v = arr1[i]
    if (arr3.includes(v)) {
      let pos = arr3.indexOf(v)
      temp.push(arr3.splice(pos, 1))
    }
  }
  if (s2 === arr3.join('')) {
    res = true
  } else {
    let arr4 = s3.split('')
    let temp2 = []
    for (let k = 0; k < arr2.length; k++) {
      let v2 = arr2[k]
      if (arr4.includes(v2)) {
        let pos = arr4.indexOf(v2)
        temp2.push(arr4.splice(pos, 1))
      }
    }
    if (temp.join('') === s1 && temp2.join('') === s2) {
      res = true
    }
  }
  console.log(res)
  return res
}
// let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
compare(s1, s2, s3)