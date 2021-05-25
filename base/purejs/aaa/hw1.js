/**
最长回文子序列
给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
示例 1:
输入:
"bbbab"
输出:4
一个可能的最长回文子序列为 "bbbb"。（可以不连续）
示例 2:
输入:
"cbbd"
输出:2
一个可能的最长回文子序列为 "bb"。
还有如下情况：
s="abcd"，最长回文长度为 1；
s="ababa"，最长回文长度为 5；
s="abccb"，最长回文长度为 4，即bccb。

对于从前往后和从后往前一致的序列，我们称为回文序列。例如abcba，aabaa。给定一个字符串s，返回其最大回文序列的长度。
c , c
cb , bc
cbb , bbc
cbbd , dbbc

cbbd  dbbc
bbd bbc
bb bb

ababa ababa

abccb bccba
bccb bccb
 */
function hwstr (str) {
  let s1 = str.split('')
  let s2 = str.split('').reverse()
  s1.unshift(' ')
  s2.unshift(' ')
  let len = s1.length
  let dp = new Array(len)
  let res
  for (let j = 0; j < len; j++) {
    dp[j] = new Array(len).fill(0)
  }
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  res = dp[len - 1][len - 1]
  return res
}
// let s1 = 'cbbd'
let s2 = 'ababa'
hwstr(s2)

/**
题解：这道题其实一道动态规划的题目

状态：dp[i][j] 表示 s 的第 i 个字符到第 j 个字符组成的子串中，最长的回文序列长度是多少。
转移方程：

如果 s 的第 i 个字符和第 j 个字符相同的话dp[i][j] = dp[i + 1][j - 1] + 2;
如果 s 的第 i 个字符和第 j 个字符不同的话dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);

遍历顺序，i 从最后一个字符开始往前遍历，j 从 i + 1 开始往后遍历。
初始化: dp[i][i] = 1 单个字符的最长回文序列是 1

输出结果： dp[0][n - 1]
 */