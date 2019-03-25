
function  Person(name,age) {
    this.name=name
    this.age =age+1
    this.run = function () {
        alert( `${this.name}--${this.age}`)
    }
}
// 原型链，实例共享，构造函数不会
Person.prototype.work = function () {
    alert(`${this.name}`)
}
// 静态方法
Person.getName = function () {
    alert("ddddd")
}
// 继承
function User(name,age) {
    Person.call(this,name,age)
}

// var user =new User("123", 11)
// user.run()
//user 不会继承原型链上的方法
//user.work()
//User 原型链绑定Person对象完成继承Person原型链上的方法
User.prototype = new Person()
var user =new User("123", 11)
user.work()