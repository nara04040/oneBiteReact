// 나의 이름을 5번 연속으로 콘솔에다 찍어라
// console.log('nara')
// console.log('nara')
// console.log('nara')
// console.log('nara')
// console.log('nara')

// 100번찍어라
// for (let i = 1; i <= 100; i++) {
//     // 반복할 명령
//     console.log(`${i} : nara`)
// }

// 순서도 : 반복문 실행 - i값 정의 -> 1의값 -> 100보다 작나? -> 작으니까 console.log() -> i++증가 -> 2의값 -> 100보다 작냐? -> console.log() -> i++증가..
//  100 이하까지 반복문을 실행

// 배열 arr 값을 출력해라
// const arr = ['a', 'b', 'c']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// 객체 키값만 출력
// let person = {
//     name: 'nara',
//     age: 26,
//     tall: 176,
// }
// const personKeys = Object.keys(person); // 객체를 배열로 바꿔줌
// // console.log(personKeys) 
// for (let i = 0; i < personKeys.length; i++) {
//     console.log(personKeys[i]);
// }


// value값도 받아올수있나?
// let person = {
//     name: 'nara',
//     age: 26,
//     tall: 176,
// }
// const personKeys = Object.keys(person); // 객체를 배열로 바꿔줌
// // console.log(personKeys) 
// for (let i = 0; i < personKeys.length; i++) {
//     const curKey = personKeys[i];
//     // console.log(curKey);
//     const curValue = person[curKey];
//     // console.log(curValue);
//     console.log(`${curKey} : ${curValue}`)
// }

// 객체의 벨류만 순회하고싶다?
let person = {
    name: 'nara',
    age: 26,
    tall: 176,
}
const personValues = Object.values(person); // 객체를 배열로 바꿔줌
console.log(personValues)
for (let i = 0; i < personValues.length; i++) {
    console.log(personValues[i])
}