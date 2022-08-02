// const getMeal = (mealType) => {
//   if (mealType === "한식") return "불고기";
//   if (mealType === "양식") return "파스타";
//   if (mealType === "중식") return "멘보샤";
//   if (mealType === "일식") return "초밥";
//   return "굶기";
// };
// console.log(getMeal("한식"));
// console.log(getMeal("중식"));

const meal = {
  중식: "멘보샤",
  일식: "초밥",
};
const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};
console.log(getMeal("중식"));
console.log(getMeal("일식"));
