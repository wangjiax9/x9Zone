/**
给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。

返回仅包含 1 的最长（连续）子数组的长度。

输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释： 
[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。

输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
输出：10
解释：
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 */
// 更顺滑的滑动窗口
var longestOnes = function(A, K) {
  let l = r = t = 0
  while (r < A.length) {
    if (A[r] === 0) t++
    if (t > K && A[l++] === 0) t--
    r++
  }
  return r - l
}
// let A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
let A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
longestOnes(A, K)

// 内循环
// var longestOnes = function(A, K) {
//   let l = r = 0, maxLen = 0, t = 0
//   while (r < A.length) {
//     if (A[r] === 0) t++
//     while (t > K) {
//       if (A[l] === 0) t--
//       l++
//     }
//     maxLen = Math.max(maxLen, r - l + 1)
//     r++
//   }
//   return maxLen
// };