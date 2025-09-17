// JS-inheritance ES6
//ĐỊnh nghĩa class cha
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
  //Phương thức của lớp school
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}
//Lớp student kế thừa từ lớp school
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear); //Gọi hàm khởi tạo của lớp cha
    this.major = major;
  }
  //Phương thức của lớp student
  study() {
    console.log(`${this.name} đang học chuyên ngành ${this.major}`);
  }
}

//Tạo đối tượng của lớp school
const p1 = new School("22T1020", "Nguyễn Văn A", 2000);
//Truy cập thuộc tính & phương thức của lớp school
console.log(p1.name);
console.log(p1.calcAge(2024));

//Tạo đối tượng của lớp student
const s1 = new Student("22T1021", "Nguyễn Văn B", 2001, "Công nghệ thông tin");
//Truy cập thuộc tính & phương thức của lớp student
console.log(s1.major);
console.log(s1.calcAge(2024));
s1.study();
