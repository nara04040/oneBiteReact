// const cookie = {
//   base: "cookie",
//   madeIn: "korea",
// };

// const chocochipCookie = {
//   ...cookie,
//   toping: "chocochip",
// };
// const blueberryCookie = {
//   ...cookie,
//   toping: "blueberry",
// };
// const strawberryCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "strawberry",
// };

// console.log(chocochipCookie);
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];
const allCookies = [...noTopingCookies, ...topingCookies];
console.log(allCookies);
