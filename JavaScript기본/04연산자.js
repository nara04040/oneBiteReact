// //대입 연산자
// let a = 1;

// // 산술연산자
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// 연결연산
// let a = "1";
// let b = 2;  // 묵시적 형변환
// console.log(a + b);

//복합연산자
// let a = 5;
// // a = a + 10;
// a += 10; // 복합연산자이다.
// // += -= *= /=
// console.log(a);

// 증감연산자
// 후위연산 a++ : 뒷부분부터 바뀜
// 전위연산 ++a : 바로 적용
// let a = 10;
// a++;
// console.log(a);

//논리연산자
// console.log(!true); // ! : not
// console.log(true && false);
// console.log(true || false);

//비교연산자
// let compareA = 1 == "1"; // == : 값만 비교 , === : 값뿐만아니라 타입까지 비교
// let compareB = 2 != "2";
// console.log(compareA);
// console.log(compareB);

// 대소비교
// let compareA = 2 <= 2;
// console.log(compareA);

// // typeof 연산자
// let compareA = 1;
// compareA = "1";
// console.log(typeof compareA);

//null 병합 연산자.
let a; // undefine임
a = a ? ? 10; // ?? : null 병합 연산자임
console.log(a);