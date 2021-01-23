/**
 * 一个无序、整型、不重复数组，长度不固定
 * [1, 3, -8, 9, 10]
 * 找出a+b=10的组合
 */
function findCp (arr) {
  arr.sort((a, b) => a - b)
  // console.log(arr)
  const res = []
  const [arr1, arr2, arr3] = [[], [], []]
  arr.forEach(v => {
    if (v < 0) {
      arr1.push(v)
    } else if (v <= 10) {
      arr2.push(v)
    } else {
      arr3.push(v)
    }
  })
  console.log(arr1, arr2, arr3)
  // 对比正数和负数
  if (arr1.length > arr3.length) {
    console.log('遍历arr3')
    arr3.forEach(v => {
      const compareVal = (v - 10) * -1
      if (arr1.includes(compareVal)) {
        res.push([arr1[arr1.indexOf(compareVal)], v])
      }
    })
  } else {
    console.log('遍历arr1')
    arr1.forEach(v => {
      const compareVal = Math.abs(v) + 10
      if (arr3.includes(compareVal)) {
        res.push([v, arr3[arr3.indexOf(compareVal)]])
      }
    })
  }
  // 处理0-10
  if (Math.max(...arr2) < 6 || Math.min(...arr2) > 4) {
    console.log('个位数无CP')
  }
  const len = arr2.length
  for (let i = 0; i < len; i++) {
    if (arr2[i] > 4) {
      break
    }
    for (let j = len - 1; j >= 0; j--) {
      if (arr2[j] < 6) {
        break
      }
      // console.log(`i: ${arr2[i]}, j: ${arr2[j]}`)
      if (arr2[i] + arr2[j] === 10) {
        res.push([arr2[i], arr2[j]])
      }
      
    }
  }
  console.log('finnal res:', res.join(' | '))
}
const arr = [1, 32, -78, 11, -1, 3, -8, 9, -22, 10, 88, -49, 133]
console.log(new Date().getTime())
findCp(arr)
console.log(new Date().getTime())