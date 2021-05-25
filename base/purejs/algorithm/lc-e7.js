/**
爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。
因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
如果有多个答案，你可以返回其中任何一个。保证答案存在。
输入：A = [1,1], B = [2,2]
输出：[1,2]
输入：A = [2], B = [1,3]
输出：[2,3]
输入：A = [1,2,5], B = [2,4]
输出：[5,4]
sumA - x + y = sumB - y + x
2y - 2x = sumB - sumA
x = (sumB - sumA)/2 + y
 */
var fairCandySwap = function(A, B) {
  let res = [0, 0], c
  const sumA = A.reduce((sum, cur) => sum + cur)
  const sumB = B.reduce((sum, cur) => sum + cur)
  c = (sumA - sumB) / 2
  for (let i = 0; i < B.length; i++) {
    let target = c + B[i]
    if (A.includes(target)) {
      res = [target, B[i]]
      break
    }
  }
  return res
}
// let l = 0, r = A.length - 1
// while(l <= r) {
//   let m = l + (r - l) >> 1
//   if (A[m] > target) {
//     r = m - 1
//   } else if (A[m] < target) {
//     l = m + 1
//   } else {
//     res = [target, B[i]]
//     return res
//   }
// }
let A = [1,1], B = [2,2]
console.log(fairCandySwap(A, B))