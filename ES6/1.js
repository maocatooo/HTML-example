var {log} = console
// let a = 1
// {
//     let b = 2
//     console.log(a) //1
// }
// console.log(b) // ReferenceError:b is not defined

//不存在变量提升
// // var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;
//
// // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// let a = 10;
// let a = 1; //报错 不允许重复声明

// let a = 10;
// var a = 1;//报错 不允许重复声明


// function f() { console.log('I am outside!'); }
//
// (function () {
//     if (false) {
//         // 重复声明一次函数f
//         function f() { console.log('I am inside!'); }
//     }
//
//     f();
// }());

// //const
// const foo = {};
//
// // 为 foo 添加一个属性，可以成功
// foo.prop = 123;
// foo.prop // 123
//
// // 将 foo 指向另一个对象，就会报错
// foo = {}; // TypeError: "foo" is read-only


// // 解构赋值
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3
//
// let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"
//
// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3
//
// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]
//
// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []
//对象的解构赋值
// var {x = 3} = {};
// x // 3
//
// var {x, y = 5} = {x: 1};
// x // 1
// y // 5
//
// var {x: y = 3} = {};
// y // 3
//
// var {x: y = 3} = {x: 5};
// y // 5

// var { message: msg = 'Something went wrong' } = {};
// let { baz:a } = {baz:1}
// log(a)
// log(msg )// "Something went wrong"
// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };

//let { loc, loc: { start }, loc: { start: { line }} } = node;
// let { loc:loc, loc: { start:start }, loc: { start: { line:line }} } = node;
// 三次解构赋值

// log(line)
// log(loc)
// log(start)
// line // 1
// loc  // Object {start: Object}
// start // Object {line: 1, column: 5}

// let x
// ({x:x=3}={x:33})
// log(x)