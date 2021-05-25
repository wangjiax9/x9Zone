var a = {
  test:function(){
      console.log(this)
  },
  test2:()=>{
      console.log(this)
  }
}
var b = {}
b.test = a.test
b.test2 = a.test2

a.test()
b.test()
a.test2()
b.test2()