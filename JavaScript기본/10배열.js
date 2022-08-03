// 배열은 비원시 자료형에 해당.. 동시에 여러개를 담을수있다!

// 1. 생성자를 이용해서 배열을 사용
// let arr = new Array();

// 2. 배열 리터럴을 사용해서 
// let arr = [1, '2', null, true, function () {}]; // 보다시피 배열안에 모든 자료형들이 들어간다.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// 배열 요소 각각에 접근한다.
// 배열은 객체처럼 키가 존재하지않기에 인덱스를 통해서 접근한다.
// console.log(arr[1])
// console.log(arr[0])


// push : 배열에 제일 마지막위치에 값을 넣어준다. 물론 어떤 자료형이든 추가가 가능하다.
// arr.push(6)
// arr.push(function () {})
// console.log(arr)

// 배열의 길이를 받아오기, array.length
console.log(arr.length);