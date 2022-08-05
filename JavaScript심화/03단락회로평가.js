const getName = (person) => {
  const name = person && person.name; //false
  return name || "객체가 아닙니다."; // name이 아니기에 "객체가 아닙니다"
};
let person = null;
const name = getName(person);
console.log(name);
