// 用「非递归」的方式，实现多叉树的深度优先搜索，数据格式如下：
function dfs (tree, name) {
  if (!tree) return
  let stack = [tree], res = null, temp
  while (stack.length) {
    temp = stack.shift()
    if (temp.name === name) {
      res = Object.assign({}, temp)
    }
    if (temp.children && !!temp.children.length) {
      temp.children.map(t => stack.unshift(t))
    }
  }
  return res
}

const tree = {
  name : '中国',
  children : [{
      name : '北京',
      children : [
        { name : '朝阳区', code: 100 },
        { name : '海淀区', code: 101 },
        { name : '昌平区', code: 102 },
      ]
    },
    {
      name : '浙江省',
      children : [
        { name : '杭州市', code: 571 },
        { name : '嘉兴市', code: 575 },
        { name : '绍兴市', code: 574 },
      ]
    }
  ]
};
// 输出示例
const node1 = dfs(tree, '杭州市');
console.log(node1);    // { name: '杭州市', code: 571 }
const node2 = dfs(tree, '广东省');
console.log(node2);    // null