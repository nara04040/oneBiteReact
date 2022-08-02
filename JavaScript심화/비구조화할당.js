// let arr = ["one", "two", "three"];
// // let one = arr[0];
// // let two = arr[1];
// // let three = arr[2];

// let [one, two, three] = arr;
// console.log(arr);

// let a = 10;
// let b = 20;
// // let tmp = 0;
// // tmp = a;
// // a = b;
// // b = tmp;
// // console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

let object = { one: "one", two: "two", three: "three", name: "nara" };
// let one = object.one;
// let two = object.two;
// let three = object.three;
// key값을 기준으로
let { one, two, three, name: myName, abc = "four" } = object;
console.log(one, two, three, myName, abc);
