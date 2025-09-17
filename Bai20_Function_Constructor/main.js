const student = {
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
  diemTrungBinh: function () {
    //Tính tổng điểm
    sumScore = this.score.reduce((a, b) => a + b, 0);
    //Trả về điểm trung bình
    return sumScore / this.score.length;
  },
};
//2  Function () constructor: Hàm tạo - sư dụng để tạo ra các đối tượng cùng kiểu
//Cách 1: function expression
const SinhVien = function (fullName, ID, birthYear, homeTown) {
  //thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  //phương thức
  this.showInfo = function () {
    return `${this.fullName} - ${this.ID} - ${this.birthYear} - ${this.homeTown}`;
  };
};

//Cách 2: function declaration
function Student(fullName, ID, birthYear, homeTown) {
  //thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  //phương thức
  this.showInfo = function () {
    return `${this.fullName} - ${this.ID} - ${this.birthYear} - ${this.homeTown}`;
  };
}
//Tạo đối tượng từ hàm tạo
const sv1 = new Student("Nguyen Van A", "PH12345", 2000, "Hà Nội");
const sv2 = new Student("Tran Thi B", "PH67890", 2001, "Hà Nam");

//Truy câp thuộc tính, phương thức
console.log(sv1.fullName);
console.log(sv1.showInfo());

//*********************************** */
//Prototype
