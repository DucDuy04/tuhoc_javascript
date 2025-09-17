// Oop buoi1 - Tong quan- literal syntax
let a = 5;
let b = 7;
console.log(typeof a);
console.log(typeof b);

let check = true;
console.log(typeof check);

let name = "Nguyen Van A";
console.log(typeof name);

M = ["JavaScript", "PHP", "Ruby"];
console.log(typeof M);

//1 Khai báo đối tượng
let student = {
  //Key+ value
  //thuộc tính
  fullName: "Nguyen Van A",
  birthYear: 2000,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  score: [9, 8, 7],
  //phương thức
  getAge: function () {
    return 2025 - this.birthYear;
  },

  //Phương thức được viết lại để  trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  diemTrungBinh: function () {
    //Tính tổng điểm
    sumScore = this.score.reduce((a, b) => a + b, 0);
    //Trả về điểm trung bình
    return sumScore / this.score.length;
  },
};

let teacher = {
  "1fullname": "Nguyen Van B",
  "@age": 30,
  "@address": "Hà Nội",
};

//2 Sử dụng dot notation và bracket notation
//2.1 Sử dụng dot notation
console.log(student.fullName);
console.log(student.address);

//2.2 Sử dụng bracket notation
console.log(teacher["1fullname"]);
console.log(teacher["@address"]);
console.log(teacher["@age"]);

//2.3 Linh động sử dụng [] với biến
let inputKey = "address";
console.log(student[inputKey]);

//3Truy cập phương thức
console.log("Truy cập phương thức");
console.log("Tuổi của học sinh: " + student.getAge());
console.log("Điểm trung bình: " + student.diemTrungBinh());

//3.1 Ví dụ gọi nhiều lần tính tuổithì sẽ tốn thời gian
// console.log("Tuổi của học sinh: " + student.getAge());
// console.log("Tuổi của học sinh: " + student.getAge());
// console.log("Tuổi của học sinh: " + student.getAge());

//gọi getAge2
student.getAge2();
console.log("Tuổi của học sinh: " + student.age);

//4 Thêm, xóa thuộc tính
student.email = "tuhocjs@gmail.com";
student["website"] = "https://tuhocjs.com";
console.log(student.email);
console.log(student.website);
console.log(student);

//Xóa thuộc tính
delete student.website;
console.log(student);

//Sửa thuộc tính
student.email = "abc@gmail.com";
console.log(student);
