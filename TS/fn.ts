
// 函数无返回值
// function fn1():void {
//
// }

// 返回string 类型
// function fn1():string {
//     return  '123'
// }

// ? 可选参数， 可以传，可以不穿
// function fn(name:string, age?:number):string[] {
//     return ["demo"]
// }
// alert(fn("123"))
// 默认参数 ，必须放在最后面
// function f1(str:string, age:number=1):string {
// //
// //     return `${str} -- ${age}`
// // }
// 剩余参数 ...三点运算符
function f1(name:string, ...str:string[]):string {
    let index:string = ""
    for(let i = 0;i <str.length;i++){
        index += str[i]
    }
    return name+'------'+index
}
alert(f1("121", "333", "4444"))
