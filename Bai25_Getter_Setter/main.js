//Getter: là 1 phương thức để lấy giá trị của thuộc tính
//Setter: là 1 phương thức để gán giá trị cho thuộc tính

//NOTE:
//Getter và Setter: Dùng khi có các thuộc tính ko muốn truy cập trực tiếp
//Getter và Setter: Dùng để xử lý logic trước khi lấy hoặc gán giá trị
// 
class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score; //biến dưới trạng thái protected ko truy cập,sửa trực tiếp từ bên gnaoif
  }
  //phương thức
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }

  //getter cho thuoocj tính score
  get score() {
    return this._score;
  }

  //setter cho thuộc tính score
  set score(value) {
    //xử lý logic trước khi gán giá trị
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Invalid score");
    }
  }
}

//tạo đối tượng
const student = new School("22T1020", "Nguyen Van A", 2000, 85);
console.log(student.id);
console.log(student.name);
console.log(student.birthYear);
console.log(student._score); //ko nên truy cập trực tiếp
console.log("Age: " + student.calcAge(2024));

//Sử dụng getter để lấy giá trị thuộc tính score
console.log("Score: " + student.score);
//Sử dụng setter để gán giá trị thuộc tính score
student.score = 50;
console.log("Updated Score: " + student.score);
