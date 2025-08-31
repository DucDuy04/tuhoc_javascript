// let s = prompt("Nhập chuỗi: ");
// let a = 0,
//   b = 0,
//   c = 0,
//   d = 0;
// for (let i = 0; i < s.length; i++) {
//   if (s.charAt(i) >= "a" && s.charAt(i) <= "z") a++;
//   else if (s.charAt(i) >= "A" && s.charAt(i) <= "Z") b++;
//   else if (s.charAt(i) >= "0" && s.charAt(i) <= "9") c++;
//   else if (s.charAt(i) === " ") d++;
// }
// console.log("Số chữ thường: " + a);
// console.log("Số chữ hoa: " + b);
// console.log("Số chữ số: " + c);
// console.log("Số khoảng trắng: " + d);
//*************************************************** */
//Kiểm tra tính hợp lệ của mật khẩu
// let validPassword = (password) => {
//   if (password.length < 6) return false;
//   let upper = false;
//   let lower = false;
//   let number = false;
//   for (let i = 0; i < password.length; i++) {
//     if (password.charAt(i) >= "a" && password.charAt(i) <= "z") lower = true;
//     if (password.charAt(i) >= "A" && password.charAt(i) <= "Z") upper = true;
//     if (password.charAt(i) >= "0" && password.charAt(i) <= "9") number = true;
//   }
//   return upper && lower && number;
// };
// let password;
// do {
//   password = prompt("Tạo mật khẩu: ");
//   if (!validPassword(password)) {
//     alert("Mật khẩu không hợp lệ! Vui lòng nhập lại.");
//   }
// } while (!validPassword(password));

// let count = 0;
// while (count < 5) {
//   let p = prompt("Xác nhận mật khẩu: ");
//   if (p === password) {
//     alert("Xác nhận mật khẩu thành công!");
//     break;
//   } else {
//     count++;
//     alert(
//       "Xác nhận mật khẩu không thành công! Bạn còn " + (5 - count) + " lần thử."
//     );
//   }
// }
// if (count === 5) {
//   alert("Bạn đã nhập sai mật khẩu quá 5 lần!");
// }
//*************************************************************** */
// const a = "abcdefghijklmnopqrstuvwxyz";
// const b = "qwertyuiopasdfghjklzxcvbnm";

// let s = prompt("Nhập chuỗi cần mã hóa: ");
// for (let i = 0; i < s.length; i++) {
//   let index = a.indexOf(s.charAt(i));
//   if (index !== -1) {
//     s = s.replace(s.charAt(i), b.charAt(index));
//   }
// }
// console.log(s);

//************************************************** */
// const b = "Tôi chăm học tôi chịu khó tôi đẹp trai";
// a = b.toLowerCase();
// let count = 0;
// let word = a.trim().split(" ");
// for (let w of word) {
//   if (w === "tôi") {
//     count++;
//   }
// }
// console.log("Số lần xuất hiện của từ 'tôi': " + count);

//************************************************** */
// let s = prompt("Nhập chuỗi: ");
// let string = "";
// let number = "";
// for (let i = 0; i < s.length; i++) {
//   if (
//     (s.charAt(i) >= "a" && s.charAt(i) <= "z") ||
//     (s.charAt(i) >= "A" && s.charAt(i) <= "Z")
//   ) {
//     string += s.charAt(i);
//   } else {
//     number += s.charAt(i);
//   }
// }
// console.log("Chuỗi ký tự: " + string);
// console.log("Chuỗi số: " + number);
