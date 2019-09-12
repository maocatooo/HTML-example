// class Person{
//     name:string
//     // 构造函数
//     constructor(name:string){
//         this.name= name
//     }
//     run():void {
//         alert(this.name)
//     }
//     setName(name:string):void{
//         this.name = name
//     }
// }
// var person = new Person("123")
// // person.run()
// // 继承
// class User extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// var user = new User("456")
// user.run()
// // 修饰符
// /*
// *
// * public 公有 谁都行 默认
// * protected 本类，子类可以用
// * prvate 私有 本类使用
// * static 静态属性，方法 关键字
// * */
//
// // 抽象类
// abstract class BaseObj{
//     public name:string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():any;
// }
// class Per extends BaseObj{
//     constructor(name:string){
//         super(name)
//         this.name = name
//     }
//     eat(): any {
//         return
//     }
// }
//
// // 属性类接口
// interface UserInfo {
//     username:string
//     age:number
//     father?:number // 接口可选参数
// }
//
// function getUserInfo(user:UserInfo):string {
//     return `${user.username}`
// }
// let obj = {
//     username:'11',
//     age:1
// }
// getUserInfo(obj)
//
//
// // 函数类型接口
// interface encrypt {
//     (key:string,val:string):string
// }
// let md5:encrypt = function (key:string,val:string):string {
//     return key + val
// }
//
// //可索引接口 对数组,对象的约束
//
//
// interface UserArr {
//     [index:number]:string
// }
// interface UserObj {
//     [index:string]:string
// }
// let userArr:UserArr =  ['1', "1"]
// let userObj:UserObj = {name:'1'}
//

// 类类型接口
// interface Obj {
//     name: string
//
//     say(str: string): void
// }
//
// class Pe implements Obj {
//     name: string
//
//     constructor(n: string) {
//         this.name = n
//     }
//
//     say(): void {
//         console.log(this.name+"say")
//     }
// }
// new Pe('aa').say()

// 接口的继承

// interface Obj{
//     eat():void
// }
// interface Per extends Obj{
//     say():void
// }
// class Person implements Per{
//     eat(): Person {
//         console.log('eat ...')
//         return this
//     }
//
//     say(): void {
//         console.log('say ...')
//     }
// }
//
// new Person().eat().say()

// 继承类且实现接口
interface Per {
    say(): void
}

class Obj {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

class Person extends Obj implements Per {

    eat(): Person {
        console.log('eat ...')
        return this
    }

    say(): void {
        console.log('say ...')
    }
}
let person:Person = new Person('aaa').eat()
console.log(person.name)


// 泛型
// 泛型类
class Do<T>{
    public a :T;
    add(a:T): T {
        return a
    }
}
console.log(new Do<string>().add('a'))

// 泛型接口
interface Conf {
    <T>(value:T):T
}

var conf:Conf= function <T>(vla:T):T{
    return vla
}
console.log(conf<string>('1'))
