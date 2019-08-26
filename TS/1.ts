let str: string = "123"


// string
// boolean
// number
// any  任意类型
// Tuple 元组
let t: [string, number] = ['1', 1]

// array
let arr: string[] = ['1', '2']
let arr2: Array<number> = [1, 2, 3]
let arr1: any[] = ['1', '2', 1]

// 枚举
enum Color {
    Red,
    Green,
    Blue
};
// Color 对应的没有赋值就是下标
let c: Color = Color.Red; // 0
enum ColorObj {
    Red=1,
    Green=3,
    Blue
};

let c1: ColorObj = ColorObj.Blue; // 0
console.log(c1)