// 자바스크립트는 불리언값이 아니라도 true , false가 나올수있다.

// let a = Infinity;

// if (a) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

/**
 * 참 같은 값 : truthy
 * false, 0, -0,0n, "", null, undefined, NaN
 */

const getName = (person) => {
  if (!person) {
    // false Not => true
    return "객체가아닙니다";
  }
};
let person;
const name = getName(person);
console.log(name);