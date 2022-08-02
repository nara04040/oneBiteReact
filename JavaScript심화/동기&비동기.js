/**
 *  자바스크립트는 코드가 작성도니 순서대로 작업을 처리함
 * 이전 작업이 진행 중일때는 다음 작업을 수행하지 않고 기다림.
 * 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.
 *
 * 동기처리 방식의 문제점
 * 동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될시,
 * 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전까지 올 스탑 되기 때문에, 전반적인 흐름이 느려진다.
 * 그러나 자바스크립트는 싱글 쓰레드로 동작함
 */

/**
 * 논 블로킹방싱 : 3개의 task를 실행시킨다고할때 1,2,3번 각각 task를 블록하지 않는 경우를 논 블로킹 방식이라고 한다.
 * 비동기 작업 : 여러개의 작업을 동시에 실행시킨후, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함.
 * 동기 작업 :
 */

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}
function taskC(c, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}
taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});
taskB(7, (res) => {
  console.log("B TASK RESULT :", res);
});
taskC(14, (res) => {
  console.log("C TASK RESULT :", res);
});
console.log("코드 끝");
