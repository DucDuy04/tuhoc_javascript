//14.1: setInterval
//setInterval giúp thực hiện 1 hàm sau mỗi khoảng thời gian nhất
//Cú pháp:setInterval(function, delay, param1, param2, ...)
//Cách dùng tương tự setTimeout

//Ví dụ 1: với function declaration
function sayHello() {
  console.log("Hello World");
}
// setInterval(sayHello, 1000);

//Ví dụ 2:
function updateTime() {
  let currentTime = new Date();
  console.log(currentTime);
}
// setInterval(updateTime, 1000);
clearInterval(updateTime);

//Ví dụ 3:
let count = 0;
//1.function declaration
// function countUp() {
//   count++;
//   console.log(count);
// }

//2. function expression
// let countUp = function(){
//     count++;
//     console.log(count);
// }

//3.Arrow function
// let countUp = () => {
//   count++;
//   console.log(count);
// };

//4: Hủy lặp
let countUp = () => {
  count++;
  console.log(count);
  if (count === 5) {
    clearInterval(stopInterval);
  }
};
let stopInterval = setInterval(countUp, 1000);
