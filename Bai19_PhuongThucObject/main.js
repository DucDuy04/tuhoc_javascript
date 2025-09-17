//1: Object.keys(obj)
//Trả về 1 mảng chứa tất cả các key của obj
let person = {
  name: "John",
  age: 30,
};
let keys = Object.keys(person);
console.log(keys); // ['name', 'age']

//2: Object.values(obj)
//Trả về 1 mảng chứa tất cả các value của obj
let values = Object.values(person);
console.log(values); // ['John', 30]

//3: Object.entries(obj)
//Trả về 1 mảng chứa tất cả các cặp [key, value] của obj
let entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30]]

//4: Object.assign(target, ...sources)
//Sao chép tất cả các thuộc tính từ các đối tượng nguồn(source) vào đối tượng đích(target)
let target = {};
let source1 = { b: 2 };
let source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target); // {b: 2, c: 3}

//ta có thể dùng spread operator để làm việc tương tự
const target2 = { ...source1, ...source2 };
console.log(target2); // {b: 2, c: 3}

//5: Object.hasOwnProperty(prop)
//Kiểm tra xem obj có thuộc tính prop hay không và trả về true hoặc false
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false

//6: Object.freeze(obj)
//Ngăn không cho thay đổi obj (không thể thêm, xóa, sửa thuộc tính)
Object.freeze(person);
person.age = 31; // Không thay đổi được
delete person.name; // Không xóa được

//7: Object.seal(obj)
let person1 = {
  name: "John",
  age: 30,
};
//Ngăn không cho thêm hoặc xóa thuộc tính, nhưng có thể sửa thuộc tính hiện có
Object.seal(person1);
person1.age = 10; // Có thể thay đổi được
delete person.age; // Không xóa được
console.log(person1); // 10
