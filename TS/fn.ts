//
// // 无返回值
// function run():void {
//
// }
// // ? 可选参数
// function run1(name:string, age?:number):string {
//     return `${name}--${age}`
// }
// alert(run1("123e",111))

// 默认参数 必须配置到最后面
// function fn1(name:string, age:number=1):string {
//     return `${name}--${age}`
// }
// alert(fn1("123e"))
// 剩余参数
// function fn1(...result:number[]) :number{
//     return result.reduce(function(prev, curr, idx, arr){
//         console.log(prev, curr, idx, arr)
//                      return prev + curr;
//                     })
// }
// console.log(fn1(9,8,7,6,5))
// function fn1(num1:number):number {
//     return
// }

function fn1(age:string):string
function fn1(age:number):string
function fn1(age:any) {
    return `${age}`
}
fn1(1)
fn1("1")

// fn1(true) //不接受boolean类型


