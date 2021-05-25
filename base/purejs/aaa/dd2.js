const obj1 = {
  name: 'lll',
  age: 2,
  dx: {
    ha: 'ha'
  },
  arr: [1, 2],
  arrObj: [{
    s: 's'
  }]
}
function copyDeep(obj, target) {
  if (!target) {
    target = {}
  }
  for (let [k, v] of Object.entries(obj)) {
    if (typeof v !== 'object') {
      target[k] = v
    } else if (Array.isArray(v)) {
      target[k] = []
      v.forEach((item, i) => {
        if (typeof item !== 'object') {
          target[k][i] = item
        } else if (typeof v === 'object') {
          target[k][i] = {}
          copyDeep(item, target[k][i])
        }
      })
    } else if (typeof v === 'object') {
      target[k] = {}
      copyDeep(v, target[k])
    }
  }
  console.log(target)
  return target
}
console.log(copyDeep(obj1))