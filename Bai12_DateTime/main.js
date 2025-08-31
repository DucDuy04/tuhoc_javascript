//Gioi thieu ve date time

//12.1 Tạo đối tượng Date: Sử dụng new Date()
let currentDate = new Date();
console.log(currentDate);
//Lấy thông tin
console.log("Năm: " + currentDate.getFullYear());
console.log("Tháng: " + (currentDate.getMonth() + 1)); //Tháng bắt đầu từ 0
console.log("Ngày: " + currentDate.getDate());
console.log("Giờ: " + currentDate.getHours());
console.log("Phút: " + currentDate.getMinutes());
console.log("Giây: " + currentDate.getSeconds());

//12.2 Set ngày tháng theo ý
//Cach1; new Date(yyyy, mm, dd, hh, mm, ss)
let customDate = new Date(2023, 11, 12); // 12 12 2023 //Tháng 0 là 1 ....Tháng 11 là tháng 12
console.log(customDate.toLocaleDateString()); //12/12/2023

//Cach2: new Date("yyyy-mm-ddThh:mm:ss")
let customDate2 = new Date("2023-12-12T00:00:00");
console.log(customDate2.toLocaleDateString()); //12/12/2023
//T: kí tự phân cách giữa ngày, tháng, năm

//Cach3: sử dụng set
let customDate3 = new Date();
customDate3.setFullYear(2023);
customDate3.setMonth(1);
customDate3.setDate(12);
console.log(customDate3.toLocaleDateString()); //12/2/2023

//12.3 Xuất
//Cach1: Sử dụng tolocalDateString
//Cach2: Xuất theo ý muốn
console.log(
  customDate3.getDate() +
    "/" +
    (customDate3.getMonth() + 1) +
    "/" +
    customDate3.getFullYear()
);

//Them so 0 để xuất định dạng 01,02,...
let prefixDate = customDate3.getDate() < 10 ? "0" : "";
let prefixMonth = customDate3.getMonth() + 1 < 10 ? "0" : "";
console.log(`
  Xuất theo định dạng 01/02/2023:
    ${prefixDate}${customDate3.getDate()}/${prefixMonth}${
  customDate3.getMonth() + 1
}/${customDate3.getFullYear()}`);
