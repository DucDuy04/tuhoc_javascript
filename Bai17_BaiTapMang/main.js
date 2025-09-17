//Viet chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên có n phần tử
//n do ng dùng nhập từ bàn phím
// let n;
// do {
//   n = parseInt(prompt("Nhập số phần tử mảng"));
// } while (isNaN(n) || n < 0);

// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr[i] = parseInt(prompt("Nhập phần tử thứ " + (i + 1)));
// }
// console.log(arr);

//VIết chương trình tạo 1 mảng  1 chiều gồm các phần tử là số nguyên, có n phần tử nhẫu nhiên
let n;
do {
  n = parseInt(prompt("Nhập số phần tử mảng"));
} while (isNaN(n) || n < 0);

let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(Math.random() * 91) + 10;
}
console.log("====Mảng ban đầu====");
console.log(arr);
//Đảo ngược mảng
arr1 = arr.slice().reverse();
console.log("====Mảng sau khi đảo ngược====");
console.log(arr1);
//Sắp xếp mảng tăng dần
let sorted = arr.slice().sort((a, b) => a - b);
console.log("====Mảng sau khi sắp xếp tăng dần====");
console.log(sorted);
//Tổng các phans tử trong mảng
let sum = 0;
for (x of arr) {
  sum += x;
}
console.log("====Tổng các phần tử trong mảng====");
console.log(sum);

//Nhập số bất kì và kiểm tra số đso tồn tại hay ko ? vị trí index:thông báo ko có
let number = parseInt(prompt("Nhập số bất kì"));
let arr2 = [];
let check = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == number) {
    check = true;
    arr2.push(i);
  }
}
if (!check) {
  console.log("Không có " + number + " trong mảng");
} else {
  console.log("Vị trí index của " + number + " trong mảng là: " + arr2);
}
