// 编写一个简单的事件监听处理器，要求具备 on 方法绑定、off 方法解绑
// 输出示例


class EventEmitter {
  // TODO：完善这个类
  constructor () {
    this.cbs = new Map()
  }
  on (event, cb) {
    this.cbs.set(event, cb || (() => {}))
  }
  emit (event, params) {
    if (params && typeof(params) !== 'object') {
      throw new Error('参数不合法')
    }
    if (this.cbs.has(event)) {
      this.cbs.get(event)(params)
    }
  }
  off (event) {
    if(this.cbs.has(event)){
      this.cbs.delete(event)
    }
  }
}
const emitter = new EventEmitter()
function onBar (e) { console.log('bar event: ', e)}
emitter.on('bar', onBar);
emitter.emit('bar', { name: 'John' }) // bar event: { name: 'John' }
emitter.off('bar', onBar);
emitter.emit('bar', { name: 'John' }) // 没有输出