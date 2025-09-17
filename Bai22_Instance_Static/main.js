//INSTANCE method
// Cần phải tạo đối tượng từ class mới có thể gọi được phương thức
//STATIC method
//Phương thức tĩnh có thể gọi trực tiếp từ class mà ko cần tạo đối tượng
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //instance method
  draw() {
    console.log("phương thức draw được  gọi");
  }
  //static method
  static calcArea(radius) {
    return Math.PI * radius * radius;
  }
}
//Tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(20);

c1.draw();

//Gọi static method
//Phương thức tĩnh ko cần dựa vào đối tượng
console.log(Circle.calcArea(5));

//Ví dụ về static method(Math)
a = -10;
console.log(Math.abs(a));
