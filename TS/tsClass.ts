class Person{
    name:string
    // 构造函数
    constructor(name:string){
        this.name= name
    }
    run():void {
        alert(this.name)
    }
    setName(name:string):void{
        this.name = name
    }
}
var person = new Person("123")
// person.run()

class User extends Person{
    constructor(name:string){
        super(name)
    }
}
var user = new User("456")
user.run()
// 修饰符
/*
*
* public 公有 谁都行 默认
* protected 本类，子类可以用
* prvate 私有 本类使用
* */