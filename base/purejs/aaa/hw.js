/**
1 (,.)   2 (abc) 3 (def)
4 (ghi)  5 (jkl) 6 (mno)
7 (pqrs) 8 (tuv) 9 (wxyz) 
   #     0 (空格)    /
# 切换模式，默认数字模式
/ 表示延迟，英文模式下： 22/222, 显示为 bc
英文模式下，
连续按同一个按键会依次出现这个按键上的字母,如果输入“/”或者其他字符，则循环中断
多次按同一键，  
22222， 显示为 b
abcab
2222 显示为 a
abca
22/222 bc
ab/abc
5/5 : jj
jj
55/55: kk
jk/jk
55/5555: kj
jk/jklj

*/
let strMode = false
const keys = {
  '1': [',', '.'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '0': [' '],
}
function getWord (str) {
  let res = '', start = 0
  for (let i = 0; i < str.length; i++) {
    let cur = str[i]
    let key = keys[cur]
    if (cur === '#') { // 切换模式
      strMode = !strMode
      start = i + 1
      continue
    }
    if (cur === '/') { // 打断
      if (i - start > 0) {
        let pos = (i - start) % keys[str[i - 1]].length
        res += keys[str[i - 1]][pos]
      }
      start = i + 1
      continue
    }
    if (!strMode) { // 数字模式
      res += cur
      start = i + 1
    } else { // 字符模式
      if (cur !== str[i + 1]) { // 下一个按键为其他按键
        if (i - start > 0) {
          let pos = (i - start) % keys[cur].length
          res += keys[cur][pos]
        } else {
          res += keys[cur][0]
        }
        start = i + 1
      }
    }
  }
  console.log(res)
  return res
}
//123#222235/56
//123#abcadjjm
const str = '123#222235/56' // 123adjjm
// const str = '29#71333' //
getWord(str)

// 55555  0 4
// jkljk   4%3