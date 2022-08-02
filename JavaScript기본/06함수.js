// let width1 = 10;
// let height1 = 20;

// let area1 = width1 * height1;
// console.log(area1);

// let width2 = 30;
// let height2 = 15;
// let area2 = width2 * height2;
// console.log(area2);

// 반복되는 것을 함수로 해결할수있다.

// // 함수 선언식
// function getArea() {
//     let width = 10;
//     let height = 20;

//     let area = width * height;
//     console.log(area);
// }

// getArea();
// console.log('함수실행완료');
// 순서도
// 1. 함수가 생성
// 2. 함수를 호출 getArea()
// 3. getArea()함수를 실행
//  console.log()가 나옴 200의 값이 나옴
// console.log('함수실행완료') 실행

// ()소괄호의 역할 : 매개변수를 받는 역할 
// function getArea(width, height) {
//     let area = width * height;
//     // console.log(area);
//     return area
// }
// let area1 = getArea(1, 200);
// console.log('area1 : ', area1)

// =======================================================
let count = 1;

function getArea(width, height) {
    let area = width * height;
    // console.log(area);
    return area
}

// 보다시피 함수내부에 선언된 변수는 외부에서 참조를 할수 없다.
// 이런 변수를 지역변수라고 부른다.
// 하지만 함수외부에서 선언된 count같은 변수는 함수내부에있는 area가 참조가능하다 이것을 전역변수라고한다.