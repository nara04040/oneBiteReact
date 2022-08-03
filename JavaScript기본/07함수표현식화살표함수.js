// console.log(helloB());
// // console.log(helloA());
// let helloA = function () {
//     return '안녕';
// } // 함수표현식

// // 함수선언식 
// function helloB() {
//     return 'hi';
// }

// // 함수 선언식과 표현식의 차이
// // 선언식이 생기기 전에 호출을 해도 된다. (호이스팅)
// // 표현식은 호출을하면 에러를 낸다 (호이스팅x)

// ==============================================================
// 화살표함수
let helloA = () => 'hi'

// 화살표함수는 return 값이 하나라면 let ~~ = () => ~~ 로 사용이 가능하고 아니라면 let ~~ = () => {~~}로 사용을해야한다.
console.log(helloA())