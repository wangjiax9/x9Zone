async function async1() {
  console.log(1);
  // 有无await结果不一样
  await new Promise(function (resolve) {
    console.log(2);
    resolve();
    console.log('2-2')
  }).then(function () {
    console.log(3);
  });
  console.log(4);
}

console.log(5);

setTimeout(function () {
  console.log(6);
}, 0);

async1();

console.log(7);

// 5
// 1
// 4
// 7
// 2
// 3
// 6