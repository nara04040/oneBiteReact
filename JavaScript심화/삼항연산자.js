// let a = 3;
// if (a >= 0) {
//   console.log("양수");
// } else {
//   console.log("음수");
// }
// 삼항연산자.
// let a = -3;
// a >= 0 ? console.log("양수") : console.log("음수");
let a = [];
// if (a.length === 0) {
//   console.log("빈 배열");
// } else {
//   console.log("배열");
// }
// 삼항연산자
// a.length === 0? console.log("빈 배열") : console.log("배열")
// const arrayStatus = a.length === 0 ? "빈배열" : "배열";
// console.log(arrayStatus);
// 좀더 스마트하게 짜보자
let b = [];
const result = b ? true : false;
console.log(result);

// ToDo : 학점 계산 프로그램
// 90점 이상 : A+
// 50점 이상 : B+
// 둘다 아니면 F
let score = 100;
// score >= 90
//   ? console.log("A+") // score가 90이 넘는다면 "A+"를 출력해라
//   : score >= 50 // 아니라면 50보다 넘는걸 한번 더 거쳐라
//   ? console.log("B+") // score가 50이 넘는다면 "B+"를 출력해라
//   : console.log("F"); // 아니라면 "F" 를 출력해라
// 그러나 이렇게 작성한다면 가독성이 떨어지기에 if문을 사용해라
if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
// 위와 같이 작성한다면 가독성이 더 좋기에 사용하자!
