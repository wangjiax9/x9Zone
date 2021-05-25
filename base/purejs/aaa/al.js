/*
1. 编程题：给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
示例1:
输入:”abcabcbb”
输出:3
解释: 因为无重复字符的最长子串是 “abc”，所以其长度为 3。

示例 2:
输入:”bbbbb”
输出: 1
解释: 因为无重复字符的最长子串是 “b”，所以其长度为 1。

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

答题格式:
*/

var lengthOfLongestSubstr = function(s) {
  let arr = s.split('')
  let i = 0, res = 0, temp = []
  while (i < arr.length) {
    if (temp.includes(arr[i])) {
      res = Math.max(res, temp.length)
      temp = [arr[i]]
    } else {
      temp.push(arr[i])
    }
    i++
  }
  return res
}
let s1 = 'abcabcbb'
lengthOfLongestSubstr(s1)

/*
2. 编程题：

给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

答题格式
*/

var isValid = function(s) {
  let arr1 = ['(', '[', '{']
  let arr2 = [')', ']', '}']
  let res = true, stack = [...s.split('')], temp = []
  while (stack.length) {
    let val = stack.shift()
    if (arr1.includes(val)) {
      temp.push(val)
    } else if (arr2.includes(val)) {
      let left = arr1[arr2.indexOf(val)]
      if (temp.includes(left)) {
        temp = []
      } else {
        res = false
        break
      }
    }
  }
  return res
}
let s2 = '{[]}'  // ([)]
console.log(isValid(s2))
/*

3. 返回最接近输入值的数字，如果有多个，返回最大的那个
const arr = [1, 5, 9, 15, 28, 33, 55, 78, 99];
*/

/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 * @param {number} n
 * @return {number}
 */
function findNext(n, arr) {
   /**
   * 此处写代码逻辑
   */
  arr.sort((a, b) => a - b)
  let left = 0, right = arr.length - 1, m
  while (left <= right) {
    m = Math.floor((left + right) / 2)
    if (left >= right) break
    if (n > arr[m]) {
      left = m + 1
    } else {
      right = m - 1
    }
  }
  if (left === right && n - arr[m] === arr[m + 1] - n){
    return arr[m + 1]
  } else if (left > right && n - arr[right] === arr[left] - n) {
    return arr[left]
  } else {
    return arr[m]
  }
}
const arr = [1, 5, 9, 15, 28, 33, 55, 78, 99];
console.log(findNext(44, arr))
// console.log(findNext(44, arr)); // 55