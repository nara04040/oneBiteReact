// let person = new Object(); 생성자 방식
// let person = {}; 객체 리터럴 방식
// 객체 만드는 방법들,,,

// let person = {
//     key: 'value', // 프로퍼티 (객체 프로퍼티(속성))
//     key1: 'value2',
//     key2: true
//     // 모든 자료형을 프로퍼티로 사용할수있다.
// };
// 키값은 중복하면 안된다.

// console.log(person)

// 객체 프로퍼티를 꺼내서 사용하는 방법

// console.log(person.key1) // 프로퍼티값에 접근하는법 : 표기법

// let person = {
//     name: 'nara',
//     age: 26,
// };

// // console.log(person.key1); // 프로퍼티에 값이 없다면 undefined가 나온다.
// // console.log(person.name);
// // console.log(person['name']); // 괄호표기법사용할때는 무조건 문자열로 넣아야한다. 아니면 변수로 인식하기에 에러를 띄운다.

// console.log(getPropertyValue("name"))

// function getPropertyValue(key) {
//     return person[key];
// }

// 객체생성이후 추가 삭제하는방법
// const person = {
//     name: "nara",
//     age: 25
// }

// person.location = 'korea';
// person['gender'] = 'male' // 괄호표기법
// person.name = 'nara A'
// console.log(person.location, person.gender, person.name);

// 이렇게 객체를 수정하는 행위는 const person, 즉 상수 person을 수정하는것이 아닌 객체를 수정하는 행위임으로 가능하다
// 상수 person을 수정하는 행위는 
// person = {
//     age: 20
// } 이런것을 말한다.

// 삭제하는법

// const person = {
//     name: 'nara',
//     age: 26,
// };
// // delete person.age // 이렇게 점표기법으로 사용해서 삭제도 가능하고
// // delete person['name'] // 괄호표기법으로 삭제도 가능하다.
// person.name = null; // 이런 방법을 추천한다.

// console.log(person)


// const person = {
//     name: 'nara', //멤버
//     age: 26,
//     say: function () {
//         console.log(`hi 나는 유한나라${this.name}`) //메서드안에서는 this를 사용할수있다.
//     } // 메서드라고 불린다 (방법) , 함수인 프로퍼티는 메서드라고 부른다.
// };
// person.say()

// ==========================================================================================

//객체에 존재하지않는 프로퍼티에 접근
const person = {
    name: 'nara', //멤버
    age: 26,
    say: function () {
        console.log(`hi 나는 유한나라${this.name}`) //메서드안에서는 this를 사용할수있다.
    } // 메서드라고 불린다 (방법) , 함수인 프로퍼티는 메서드라고 부른다.
};
// console.log(person.gender) // gender라는 프로퍼티가 없어서 undefined라고 나온다.


console.log(`name : ${'name' in person}`) // name이라는 프로퍼티가 있냐? person에 ,, in 연산자!
console.log(`age : ${'age' in person}`)
console.log(`gender : ${'gender' in person}`) // in연산자!