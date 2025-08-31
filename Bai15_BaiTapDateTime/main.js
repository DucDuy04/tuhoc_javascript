//Bai1: Nhập năm sinh in số tuổi

// let checkAge = (year) => {
//   if (year <= 0 || isNaN(year) || year > 2025) return false;
//   return true;
// };

// let year = prompt("Nhập năm sinh: ");
// while (!checkAge(year)) {
//   alert("Năm sinh không hợp lệ! Vui lòng nhập lại.");
//   year = prompt("Nhập năm sinh: ");
// }
// let currentYear = new Date().getFullYear();
// if (checkAge(year)) {
//   let age = currentYear - year;
//   console.log(` Tuổi của bạn là: ${age}`);
// }

//Bai2:Đếm ngược thời gian theo giây
// function countdown(minutes) {
//   alert("Thời gian làm bài của bạn là: " + minutes + " phút");
//   let seconds = minutes * 60;

//   let countdownInterval = setInterval(function () {
//     let minutesLeft = Math.floor(seconds / 60);
//     let secondsLeft = seconds % 60;
//     //định dạng 01,02
//     let prefixSecondFormat = secondsLeft < 10 ? "0" : "";
//     console.log(`${minutesLeft}:${prefixSecondFormat}${secondsLeft}`);

//     if (seconds <= 0) {
//       clearInterval(countdownInterval);
//       alert("Hết thời gian");
//     } else {
//       seconds--;
//     }
//   }, 1000);
// }
// let timeInput = Number(prompt("Mời nhập thời gian làm bài"));
// countdown(timeInput);

//Bai3:Thông báo người dùng off x phút or ngày or giờ

function timeSince(timestamp) {
  const now = new Date();
  console.log("Xem timestamp hiện tại " + now.getTime());
  const timeDifference = now - timestamp;
  console.log(timeDifference);
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  //   if (timeDifference < 60 * 1000) console.log(`Online ${seconds} giây trước`);
  //   else if (timeDifference < 60 * 1000 * 60)
  //     console.log(`Online ${minutes} phút trước`);
  //   else if (timeDifference < 24 * 60 * 60 * 1000)
  //     console.log(`Online ${hours} giờ trước`);
  //   else if (timeDifference < 30 * 24 * 60 * 60 * 1000)
  //     console.log(`Online ${days} ngày trước`);
  //   else if (timeDifference < 12 * 30 * 24 * 60 * 60 * 1000)
  //     console.log(`Online ${months} tháng trước`);
  //   else console.log(`Online ${years} năm trước`);
  if (years > 0) {
    return `Online ${years} năm trước `;
  } else if (months > 0) {
    return `Online ${months} tháng trước `;
  } else if (days > 0) {
    return `Online ${days} ngày trước `;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước `;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước `;
  } else {
    return `Online ${seconds} giây trước `;
  }
}

const timestamp = 0;
console.log(timeSince(timestamp));
