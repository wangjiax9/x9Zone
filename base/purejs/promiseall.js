function pAll (arr) {
  let count = 0
  let total = arr.length
  const resolveArr = [...arr]
  return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
          arr[i].then(res => {
              console.log(`任务${i}结果：${res}`)
              count++
              resolveArr[i] = res
              if (count === total) {
                  resolve(resolveArr)
              }
          }).catch(err => {
              console.log(`任务${i}异常`)
              reject(`第${i+1}个异常`)
          })
      }
      
  })
}
const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('task1')}, 1000)
})
const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('task2')}, 100)
})
const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('task3')}, 800)
})
const tasks = [task1, task2, task3]
pAll(tasks).then(result => {
  console.log('全部正常')
  console.log(result)
}).catch(err => {
   console.log('有任务异常')
  console.log(err)
})