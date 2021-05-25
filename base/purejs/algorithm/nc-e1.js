/**输入一个只包含小写英文字母和数字的字符串，
 * 按照不同字符统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出。
  本题含有多组样例输入

  一个只包含小写英文字母和数字的字符串。
  一个字符串，为不同字母出现次数的降序表示。若出现次数相同，则按ASCII码的升序输出。
  aaddccddc   dca
**/
function find(str) {
  let map = new Map()
  let temp = []
  str.split('').forEach(v => {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1)
    } else {
      map.set(v, 1)
    }
  })
  temp = [...map]
  temp.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1
    } else if (a[1] < b[1]) {
      return 1
    } else {
      if (a[0] > b[0]) {
        return 1
      } else if (a[0] < b[0]) {
        return -1
      } else {
        return 0
      }
    }
  })
  console.log(temp.reduce((pre, cur) => {
    return pre + cur[0]
  }, ''))

}
const str = 'aadccddcaaa'
find(str)