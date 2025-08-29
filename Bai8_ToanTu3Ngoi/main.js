//CÚ PHÁP
//
// biến = biểu thức 1 ? biểu thức 2 : biểu thức 3
// kiểm tra đk 1 nếu đúng gán biểu thức 2, ngược lại gán biểu thức 3
//8. Toán tử 3 ngôi
let number = -10;
let message = number >= 0 ? "Số dương" : "Số âm";
console.log(message);
// Nếu sử dụng if else thông thường
if (number >= 0) {
  console.log("Số dương");
} else {
  console.log("Số âm");
}

let number2 = 10;
console.log(number2 % 2 === 0);
let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
console.log(message2);

//BaiTap : NHap vao dtb:Gioi>=8 ,8>Kha>=6.5, 6.5>TrungBinh>=5,5>Yeu
let dtb = Number(prompt("Nhập điểm trung bình:"));
let message3 =
  dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";
console.log(message3);
