const fs = require('fs')
const path = require('path')
const tinify = require('tinify')
const gm = require('gm')

tinify.key = 'mfQbsqGT0wBbq4Xnwr1ZkWZzZj3PhmR9'

const fileList = []
let totalSize = 0
function readFile (dir) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = dir + '/' + file
    // const desPath = dir.replace(/\/pay$/gi, '/pay1') + '/' + file
    // const desPath = dir.replace(/\/new-patriarch$/gi, '/new-patriarch1') + '/' + file
    const desPath = filePath.replace(/\/images\//gi, '/images1/')
    const stats = fs.statSync(filePath) 
    if (stats.isDirectory()) {
      if (!fs.existsSync(desPath)) {
        fs.mkdirSync(desPath)
      }
      readFile(filePath)
    } else {
      if (!/\.(png|jpeg|jpg|PNG|JPEG|JPG)$/.test(file)) {
        return
      }
      if (stats.size > 20 * 1024) {
        totalSize += stats.size
        const o = `${bytesToSize(stats.size)} —— ${filePath}`
        // console.log(o)
        fileList.push(o)
        gm(filePath).size((err, size) => {
          if (!err)
          var source = tinify.fromFile(filePath)
          if (size.width === 1024) {
            source.resize({
              method: "fit",
              width: 300,
              height: 300
            }).toFile(desPath)
          } else {
            console.log(filePath, desPath)
            source.toFile(desPath)
          }
        })
      }
    }
  })
}
function bytesToSize(bytes) {
  if (bytes === 0) return '0 B'
  const k = 1024 // or 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}

const basePath = '/Users/x9/workspace/a22/sdk'
const p1 = path.resolve(basePath, './assets/images/')
const p2 = path.resolve(basePath, './assets/images/new-patriarch/')
const p3 = path.resolve(basePath, './assets/images/pay/')
readFile(p1)
// readFile(p2)
// readFile(p3)
console.log(fileList.length)
console.log(bytesToSize(totalSize))


// 被压缩过再次获取报错
// UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). 
// var source = tinify.fromFile('/Users/x9/Downloads/DDL_QRCode1.jpg')
// source.toFile("DDL_QRCode2.jpg")

// const gmTemp = gm('/Users/x9/workspace/a22/sdk/assets/images/new-patriarch/society04.png')
// gmTemp.size(function (err, size) {
//   if (!err)
//   console.log(size)
//   if (size.width === 1024) {
//     source.resize({
//       method: "fit",
//       width: 300,
//       height: 300
//     }).toFile("optimize3.png")
//   }
// })