//13.1 setTimeout
//setTimeout được sử dụng để thực hiện 1 hàm sau 1 khoảng time delay nhất định

//Cú pháp:
//setTimeout(function, delay, param1, param2, ...)
//function: hàm cần thực hiện
//delay: thời gian delay (tính bằng milliseconds)
//param1, param2, ...: các tham số truyền vào hàm

//Ví dụ:
let helloArrow = () => {
  console.log("Hello World");
};
setTimeout(helloArrow, 1000);

//13.2 Truyền trực tiếp function
//Cách 1: Sử dụng arrow function
setTimeout(() => {
  console.log("Hello World");
}, 2000);

//Cách 2: Sử dụng function thông thường
setTimeout(function xinChao() {
  console.log("Hello World");
}, 3000);

//Cách 3: function expression
setTimeout(function () {
  console.log("Hello World");
}, 4000);

//13.3 Có tham số truyền vào
//Ví dụ với Arrow function
let helloArrow1 = (name) => {
  console.log("Hello " + name);
};
setTimeout(helloArrow1, 5000, "Duy");

//13.4 Hủy thực hiện hàm\
//Khi sử dụng setTimeout để tạo 1 delay, setTimeout sẽ trả về 1 id của timeout
//B1:Gán setTimeout vào 1 biến để lưu giá trị
//B2: Sử dụng clearTimeout để hủy timeout
let timeoutId = setTimeout(helloArrow1, 5000, "Duy");
clearTimeout(timeoutId);
