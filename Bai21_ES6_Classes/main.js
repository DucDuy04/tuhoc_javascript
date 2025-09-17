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

//2  Khai báo  ES6 Classes
//2.1 Class expression(ít dùng)
const SinhVienEx = class {
  //thuộc tính
  //phương thức
};

//2.2 Class declaration(dùng nhiều)
class SinhVien {
  //constructor method
  constructor(fullName, ID, birthYear, homeTown) {
    //thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  //phương thức
  showInfo() {
    return `${this.fullName} - ${this.ID} - ${this.birthYear} - ${this.homeTown}`;
  }

  calcAge1(currentYear) {
    return currentYear - this.birthYear;
  }
}
//Tạo đối tượng từ class
const sv3 = new SinhVien("Le Van C", "PH11223", 2002, "Nam Định");
console.log(sv3.showInfo());
console.log(sv3);

//Kiểm tra nguyên mẫu của đối tượng
console.log(Object.getPrototypeOf(sv3));
console.log(Object.getPrototypeOf(sv3) === SinhVien.prototype); //true

//3. Thêm phương thức vào clss SinhVien thủ công (Sau khi có class)
SinhVien.prototype.calcAge = function (currentYear) {
  return currentYear - this.birthYear;
};
console.log(sv3.calcAge1(2024));
