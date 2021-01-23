// * 说明：实现一个方法，用于比较两个版本号（version1、version2）
// *     如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
// * 示例：
// * compareVersion('0.1', '1.1.1'); // 返回-1
// * compareVersion('13.37', '1.2 '); // 返回1
// * compareVersion('1.1', '1.1.0'); // 返回0

function compareVersion(v1, v2) {
  const arr1 = v1.split('.')
  let arr2 = v2.split('.')
  let res = 0
  if (arr1.length > arr2.length) {
    arr2 = arr2.concat(new Array(arr1.length - arr2.length).fill(-1))
  }
  for (let i = 0; i < arr1.length; i++) {
    if (+arr1[i] > +arr2[i]) {
      res = 1
      break
    }
    if (+arr1[i] < +arr2[i]) {
      res = -1
      break
    }
  }
  return res
}
console.log(compareVersion('0.1', '1.1.1'))
console.log(compareVersion('13.37', '1.2'))
console.log(compareVersion('1.1', '1.1.0'))