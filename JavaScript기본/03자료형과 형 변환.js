/**
 * 데이터 타입
 * 1.primitive datatype (원시타입) : 한번에 하나의 값만 가질수있다, 하나의 고정된 저장공간을 이용
 *  - Number
 *  - String
 *  - Boolean
 *  - Undefined
 *  - Null
 * 
 * 2. non-primitive datatype (비원시타입) : 한번에 여러개의 값을 가질수 있다. 여러 개의 고정되지않는 동적 공간을 사용한다.
 *  - Object
 *  - Array
 *  - Function
 * 
 */

// let number = 12;
// console.log(typeof number);
// let array = [1, 2, 3, 4];
// console.log(typeof array);


// Number type
// let age = 25; // 정수

// let tall = 175.5; // 실수

// let inf = Infinity; // number
// let minInf = -Infinity; // number
// let nan = NaN; // number

// console.log(typeof inf, typeof minInf, typeof nan)

// ================================================================
// // String

// let name = 'nara';
// let name2 = 'jin';
// let name3 = `yuhannara ${name2}`;
// console.log(name, name2, name3);

// // ${}이렇게 써서 문자열을 바꾸는것을 템플릿 리터럴이라고 부른다.
// ================================================================

// Boolean
// let isSwitchOff = false;

// ================================================================
// // Null

// let a;
// console.log(a) // undefined

// let b = null;
// console.log(b);

// // null값을 보여주고싶다면 직접 줘야한다.
// ================================================================

// undefinde

// let a;

// console.log(a);

// // 아무것도 안담았을때, 즉 기본값이 undefined이다.

// ================================================================
// // 문자열 (연산) 숫자, 숫자 (연산) 문자열, 문자열 (연산) 문자열
// let numA = 12;
// let numB = '2';

// console.log(numA * numB);
// // 위를 보듯 numB인 문자열이 숫자로 바뀌었다. 즉 문자열 곱셈 숫자를 하였을때는 문자열이 숫자로 바뀐다.
// // 묵시적 형변환이라고 부른다. 

// console.log(numA + numB);
// // 숫자와 문자열의 덧셈은 문자열이 나온다.
// // 이때 값을 14가 가지고싶다면 numB의 값을 숫자로 바꿔주면 된다.
// // paseInt를 사용해서 말이다. => 문자열을 숫자로 바꿔준다.
// console.log(numA + parseInt(numB));
// // 프로그래머가 형변환을 해주는것을 명시적 형변환이라고 부른다.


let a = 12;
let b = '2'

console.log(a + b);
//덧셈일 경우 : 문자 + 숫자 일때 숫자를 문자로 묵시적 형변환

console.log(a * b);
// 곱셈일 경우 : 문자 + 숫자이면 문자열을 숫자로 묵시적 형변환