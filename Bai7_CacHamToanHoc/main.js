// 13.  các hàm toán học thông dụng
// 1. Hàm `Math.sqrt()`
let a = Math.sqrt(4);
console.log(a);

// 2. Hàm `Math.pow(base, exponent)`
let b = Math.pow(2, 3);
console.log(b);

//3. Hàm `Math.abs()`
let c = Math.abs(10);
console.log(c);

// 4. Hàm `Math.ceil()` và `Math.floor()`
let d = Math.floor(5.004);
console.log(d);

// 5. Hàm `Math.round()` , từ 0.5 làm tròn thành 1
let e = Math.round(7.4999999999);
console.log(e);

//6. làm tròn x chữ số phần đơn vị
let f = 3.14159;
let fRounded = Number(f.toFixed(2));
console.log(fRounded);
console.log(typeof fRounded);
// cộng thử
let g = fRounded + 5;
console.log(g);

// 7. Hàm `Math.min()` và `Math.max()`
let h = Math.min(1, 2, 3, 5, 8, 4, 80, 100);
console.log(h);

// 8. Hàm `Math.random()`
//1. Random trong [0-> 1)
let randomValue = Math.random();
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue}`);

// 2. Random số lớn hơn 1
let randomValue2 = Math.random() * 10;
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue2}`);

// 3.Random số nguyên
let randomValue3 = parseInt(Math.random() * 10);
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue3}`);

// chạy từ 0 đến sát 30
let randomValue4 = parseInt(Math.random() * 21) + 10;
console.log(`Số ngẫu nhiên từ 10 đến sát 30 là: ${randomValue4}`);

// let dtb = Number(prompt("Nhập điểm trung bình:"));
// if (dtb <= 5) {
//   console.log("Học lực yếu");
// } else if (dtb <= 7) {
//   console.log("Học lực trung bình");
// } else {
//   console.log("Học lực khá");
// }
