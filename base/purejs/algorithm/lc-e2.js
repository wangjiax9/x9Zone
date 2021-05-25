/**
给你一个由一些多米诺骨牌组成的列表 dominoes。

如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。

在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
 */
var numEquivDominoPairs = function(dominoes) {
  const res = new Array(100).fill(0)
  let count = 0
  for (let i = 0; i < dominoes.length; i++) {
    const val = dominoes[i]
    const num = val[0] > val[1] ? val[1]*10 + val[0] : val[0]*10 + val[1]
    count += res[num]++
  }
  return count
}
const dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
numEquivDominoPairs(dominoes)