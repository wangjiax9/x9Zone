/**
 * 获得限制长度字符串
 * 说明：超出内容变...，汉字占2个字符，非汉字占1个字符
 * @param chars 字符串
 * @param size 限制大小
 */
const getEllipsisChars = (chars, size) => {
  let sum = 0
  for (var i = 0; i < chars.length; i++) {
    const c = chars.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      sum++
    }
    else {
      sum += 2
    }
    if (sum > size) {
      console.log(`sum: ${sum}, size: ${size}, i: ${i}, ${chars}`)
      return chars.substring(0, i) + '…'
    }
  }
  return chars
}
const str1 = "神秘国历险记"
const str2 = "神秘国历险记是"
const str3 = "天才小画家2"
console.log(getEllipsisChars(str1, 10)) // expect: 神秘国历险…
console.log(getEllipsisChars(str2, 12)) // expect: 神秘国历险记…
console.log(getEllipsisChars(str3, 11)) // expect: 天才小画家2