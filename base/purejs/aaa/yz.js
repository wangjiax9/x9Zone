// =====================================================
// 欢迎参加有赞前端 Coding 面试
// =====================================================
// 界面介绍：
//   上方设置按钮可以切换语言、字体大小、主题
//   右侧控制台可以显示代码执行结果，可用于编码过程中的 DEBUG
// =====================================================
// Coding 须知：
//   本次 Coding 时间限制为 45 分钟
//   题目难度大致自上向下递增，请量力答题
// =====================================================

/**
 * ## 问题1
 * 实现一个函数，判断两个变量值是否相等
 * 
 * 注意
 * - 数据类型不限于示例，尽可能考虑边界
 * - function 引用相等即可
 */
const foo1 = {
  a: 1,
  b: '1',
  c: NaN,
  d: [{
      a: 1,
      b: 2
  }],
  f: {
      a: 1
  },
  g: null
}

const foo2 = {
  a: 1,
  b: '1',
  c: NaN,
  d: [{
      a: 1,
      b: 2
  }],
  f: {
      a: 1
  },
  g: null
}

function isEqual(target1, target2) {
  // ... 
  let flag = false
  let len1 = Object.keys(target1).length
  let len2 = Object.keys(target2).length
  console.log(`len1: ${len1}, len2: ${len2}`)
  if (len1 !== len2) {
      return flag
  }
  let count = 0
  for (let [key, val] of Object.entries(target1)) {
      console.log(key)
      if (target2.hasOwnProperty(key)) {
          // 类型
          if (isNaN(val) && isNaN(target2[key])) {
              flag = true
          }
          // else if (typeof val === 'object') {
          //     flag = isEqual(val, target2[key])
          // }
          else if (val instanceof Array) {
              let aflag = true
              val.some(v => {
                  if (typeof val === 'object' && !isEqual(val, target2[key])) {
                      aflag = false
                      return true
                  }
              })
              if (aflag) {
                  flag = true
              }
          }
          else if (typeof val === 'function' && val === target2[key]) {
              flag = true
          }
          else if (val === target2[key]) {
              flag = true
          }
          if (flag) {
              count++
          }
      }
  }
  if (count === len1) {
      flag = true
  } else {
      flag = false
  }
  return flag
}
console.log(isEqual(foo1, foo2), 'isEqual');


/**
* ## 问题2
* 实现 getValue 函数，安全的获取目标对象指定 path 的值
* @params {object | array} value 指定对象
* @params {string} path
*/
const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'

function getValue(obj, path) {
  // ...
  console.log(path)
  if (path.startsWith('[') && obj instanceof Array) {
      console.log('array')
  } else if (typeof obj === 'object') {
      console.log('obj')
      const tempArr = path.split('.')
      let res = new Array(Object.keys(obj).length).fill('')
      tempArr.forEach((v, i) => {
          if (/[a-zA-Z0-9]\[[0-9]\]/g.test(v)) {
             res[i] = obj[v.split('[')[0]]
             console.log(res)
          } else if (typeof v === 'string' && res) {
              res[i] = 
              console.log(res)
          }
      })
  }
}
// 这是loadsh.get方法  https://github.com/lodash/lodash/blob/master/get.js
// console.log(getValue(object, 'a[0].c.b.c'))
// console.log(getValue(array, '[0].a.b[0]'))

/**
* ## 问题3
* 将48位的时间位图格式化成字符串
* 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
* 
* 规则描述：
* 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
* 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
* 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
* 
* 示例输入：`"110010000000000000000000000000000000000000000000"`
* 示例输出：`["00:00~01:00", "02:00~02:30"]`
*/

function timeBitmapToRanges(bitmap) {
  //...
}

// console.log(timeBitmapToRanges('111010000000000000000000000000000000000000000011'));