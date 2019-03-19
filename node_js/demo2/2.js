var foo = 'hellow'
console.log(exports === module.exports)
//导出模块 Object对象
// exports.foo = foo

// 直接导出某个成员 多个后面会覆盖前面的
module.exports = foo
module.exports = 123
//最终return module.exports