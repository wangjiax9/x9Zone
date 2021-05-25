/**
给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
输入：s = "3[a]2[bc]"
输出："aaabcbc"
输入：s = "3[a2[c]]"
输出："accaccacc"

匹配中括号结束位置，
检测嵌套
栈
[ 入栈
] 出栈
入栈和出栈配对， 记录栈元素的位置
3[a]2[bc]
size: 3, [ 1 ] 3 
layer: 1  嵌套层数
子串： (2,3) a
输出子串*size
 */
var decodeString = function(s) {
  let arr = s.split('')
  let res = '', i = 0, layer = [], multi = 0, nums = [], temp = ''
  while (i < arr.length) {
    let val = arr[i]
    if (/\d/.test(val)) { // 数字
      multi = multi*10 + +val
    } else if (val === '[') {
      nums.push(parseInt(multi))
      layer.push(res)
      multi = 0
      res = ''
    } else if (val === ']') {
      size = nums.pop()
      for (let j = 0; j < size; j++) {
        temp += res
      }
      res = layer.pop() + temp
      temp = ''
    } else {
      if (layer.length === 0) {
        res += val
      } else {
        res += val
      }
    }
    i++
  }
  // console.log(res)
  return res
}
const s = '"13[leetcode]"'
// const s = '3[a]2[bc]' // aaabcbc
// const s = '3[a2[c]]' // accaccacc
// const s = '2[abc]3[cd]ef' // abcabccdcdcdef
decodeString(s)