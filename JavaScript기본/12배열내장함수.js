// const arr = [1,2,3,4]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// 이렇게 긴 코드를 한줄로 줄일수가 있다?
// const arr = [1, 2, 3, 4]
// arr.forEach((elm) => console.log(elm));
// arr.forEach((elm) => console.log(elm * 2));
// 내장함수인 forEach를 사용하면 된다.

// ===================================================
// forEach
// ===================================================
// const arr = [1, 2, 3, 4];
// const newArr = [];

// arr.forEach(function (elm) {
//     newArr.push(elm * 2)
// });
// console.log(newArr)

// 이렇게도 사용가능하고

// ===================================================
// map
// ===================================================

// const arr = [1, 2, 3, 4];
// const newArr = arr.map((elm) => {
//     return elm * 2;
// })

// console.log(newArr)

// forEach같은경우 배열값에 하나씩 콜백함수를 수행한다.
// map같은경우 원본배열을 순회하면서 연산을 한뒤 리턴된 값을 따로 배열을 만들어놓는다.


// ===================================================
// includes
// ===================================================
// const arr = [1, 2, 3, 4];
// let number = 3;
// // arr에 number가 속해있는지 없는지를 확인하고싶다

// arr.forEach((elm) => {
//     if (elm === number) {
//         console.log(true)
//     }
// });

// //  더 간단한 방법
// console.log(arr.includes(number));
// // includes는 주어진 배열에서 인자와 값이 일치하는지를 판단, 

// const arr = [1, 2, 3, 4];
// // let number = '3';
// let number = 3;


// console.log(arr.indexOf(number));
// // 주어진 배열과 일치하는게 없다면 -1을 출력
// // 배열의 인덱스를 출력해서 2가나옴



// ===============================================
// 객체배열에서 원하는값 가져오기
// ===============================================

// const arr = [{
//         color: 'red'
//     },
//     {
//         color: 'blue'
//     },
//     {
//         color: 'green'
//     },
//     {
//         color: 'black'
//     },
// ]

// // findIndex 단 두개가 들어온다면 처음것이 출력
// console.log(arr.findIndex((elm) => elm.color === 'green'))

// 
// const arr = [{
//         color: 'red'
//     },
//     {
//         color: 'blue'
//     },
//     {
//         color: 'green'
//     },
//     {
//         color: 'black'
//     },
// ]

// const idx = arr.findIndex((elm) => {
//     return elm.color === 'blue'
// })

// console.log(idx)

// const arr = [{
//         color: 'red'
//     },
//     {
//         color: 'blue'
//     },
//     {
//         color: 'green'
//     },
//     {
//         color: 'black'
//     },
// ]
// let number = 3;
// const element = arr.find((elm) => {
//     return elm.color === 'blue';
// });
// console.log(element)

// 결국 find 나 findIndex나 조건을 만족하는 첫번째 요소를 반환한다.
// find는 값 그대로를 전달, findIndex는 index를 반환하는 차이이다. 


// 배열을 필터링
// const arr = [{
//         num: 1,
//         color: 'red'
//     },
//     {
//         num: 2,
//         color: 'blue'
//     },
//     {
//         num: 3,
//         color: 'green'
//     },
//     {
//         num: 4,
//         color: 'black'
//     },
// ];

// // 내장함수 filter
// console.log(arr.filter((elm) => elm.color === 'blue'))

// // slick 0에서부터 2 이전까지
// console.log(arr.slice(0, 2));



// const arr1 = [{
//         num: 1,
//         color: 'red'
//     },
//     {
//         num: 2,
//         color: 'blue'
//     },
//     {
//         num: 3,
//         color: 'black'
//     }
// ];


// const arr2 = [{
//         num: 4,
//         color: 'yellow'
//     },
//     {
//         num: 5,
//         color: 'orange'
//     },
//     {
//         num: 6,
//         color: 'purple'
//     }
// ];
// //concat
// console.log(arr1.concat(arr2))


// 배열을 정렬

// let chars = ['나', '가', '다'];
// console.log(chars);

// chars.sort(); // 원본 배열을 오름차순으로 정렬
// console.log(chars);

// let numbers = [0, 10, 5, 1, 2, 8];
// // numbers.sort();
// // console.log(numbers);
// // 잘 정렬이 안된다. 이유는 sort함수는 문자열을 기준으로 정렬을 시켜주기 때문이다. 비교함수를 넣어줘야한다.


// // 오름차순으로 정렬
// const compare = (a, b) => {
//     // 1. 같다, 2. 크다, 3. 작다
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }
//     return 0
// }

// numbers.sort(compare);
// console.log(numbers)


const arr = ['안녕', '나라야', '어서와', '또왔네'];

// join 구분자로 정렬을 해준다.
console.log(arr.join(' '));