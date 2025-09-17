//Viet chương trình tính S hình Vuông và Chữ nhật dùng kế thừa
//ịnh nghĩa class Cha
class Shape {
  constructor(name) {
    this.name = name;
  }
  calcArea() {
    return 0;
  }
}

//Định nghĩa class con kế thừa từ class cha
class Square extends Shape {
  constructor(name, side) {
    super(name); //Gọi hàm khởi tạo của class cha
    this.side = side;
  }

  //override phương thức calcArea của class cha
  calcArea() {
    return this.side * this.side;
  }
}

class Retangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  //override phương thức calcArea của class cha
  calcArea() {
    return this.width * this.height;
  }
}
//Tạo đối tượng của class Square
const square = new Square("Hình vuông", 5);
console.log(`Diện tích của ${square.name} là : ${square.calcArea()}`);

//Tạo đối tượng của class Retangle
const retangle = new Retangle("Hình chữ nhật", 6, 4);
console.log(`Diện tích của ${retangle.name} là : ${retangle.calcArea()}`);
