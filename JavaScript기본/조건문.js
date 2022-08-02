// if
// let a = 5;

// if (a >= 7) {
//   console.log("7 이상입니다");
// } else if (a >= 5) {
//   console.log("5 이상입니다");
// } else {
//   console.log("5 미만입니다");
// }

// let country = "usa";
// if (country === "ko") {
//   console.log("한국");
// } else if (country === "cn") {
//   console.log("중국");
// } else if (country === "jp") {
//   console.log("일본");
// } else {
//   console.log("미 분류");
// }

// switch
// break : case1이 true라면 밑에있는 것들을 모두 코드로 인식해서 전부다 토해낸다. 고로 break가 필요하다.
let country = "usa";

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미분류");
    break;
}
