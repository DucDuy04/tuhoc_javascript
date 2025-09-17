//16.1: Mảng - array

//Khai báo mảng
//Cách 1: Sử dụng []
let arr = [];
//Khai báo mảng chứa nhiều loại giá trị
let arr2 = [1, 2, 3, "banana", true];

//Cách 2: Sử dụng array và constructor
let arr3 = new Array();

//16.2: Duyệt mảng
//Cách 1 dùng for(có thể xem và sửa giá trị mảng)
//Cách 2 dùng for...of ... chỉ có thể xem ko sửa được

//16.3 CÁC PHƯƠNG THỨC
//1) concat() Nối mảng
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let newArr = arr4.concat(arr5);
console.log(newArr);

//2) push() thêm 1 or nhiều phần tử vào cuối mảng
let arr6 = [1, 2, 3];
arr6.push(4);
console.log(arr6); //1234

//3) unshift() thêm 1 or nhiều phần tử vào đầu mảng
let arr7 = [1, 2, 3];
arr7.unshift(4);
console.log(arr7); //4123

//4) pop() Loại bỏ phần tử cuôi của mảng(thay đổi mảng gốc) và trả về phần tử đã loại
let arr8 = [1, 2, 3];
let removedElement = arr8.pop();
console.log(removedElement);
console.log(arr8); //12

//5) shift() Loại bỏ phần tử đầu của mảng(thay đổi mảng gốc) và trả về phần tử đã loại
let arr9 = [1, 2, 3];
let removedElement2 = arr9.shift();
console.log(removedElement2);
console.log(arr9); //23

//6) slice(startIndex,endIndex) Tạo 1 bản sao của mảng & lưu sang 1 vùng nhớ mới
//Cắt chuôi gốc, từ start -> end-1 chuôi gốc
//Bỏ trống sẽ lấy all
let arr10 = [1, 2, 3, 4, 5];
let arrSlice = arr10.slice(1, 4);
console.log(arrSlice); //234

//7) includes() Kiểm tra xem 1 mảng chứa 1 giá trị cụ thể hay ko
//trả về true false
let arr11 = [1, 2, 3, 4, 5];
let isPresent = arr11.includes(4);
console.log(isPresent); //true

//8) indexOf() : Trả về vị trí index của phần tử xuất hiện đầu tiên trong mảng: ko tim thấy trả về -1
let arr12 = [1, 2, 3, 4, 5, 6];
let index = arr12.indexOf(2);
console.log(index); //1

//9) lastIndexOf(): Trả về vị trí index của phần tử xuất hiện cuối trong mảng: ko tim thấy trả về -1
let arr13 = [1, 2, 3, 4, 2, 6];
let index1 = arr13.lastIndexOf(2);
console.log(index1); //4

//10) reverse() Đảo ngược thứ tử các phần tủ trong mảng gốc(thay đổi mảng gốc)
//NOTE: nếu muốn giữ nguyên mảng gốc thì dùng slice đẻ tạo 1 bản sao và sử dụng reverse
let arr14 = [1, 2, 3, 4, 5];
arr14.reverse();
console.log(arr14);

//vidu:
let arr15 = [1, 3, 5, 6, 8];
let arr16 = arr15.slice().reverse();
console.log(arr15);
console.log(arr16);

//11) join(separator): Nối các pần tử trong mảng thành chuỗi theo kí tự phân tách `separator`
//separator nếu bỏ trông mặc định là dấu ,
//Ko thay đổi mảng gốc
let arr17 = ["duy", "Nam", 1, 4, 7];
let string = arr17.join();
console.log(string); //duy,Nam,1,4,7

//truyền separator
let arr18 = ["duy", "Nam", 1, 4, 7];
let string1 = arr18.join("-");
console.log(string1); //duy-Nam-1-4-7

//12) splice() thay đổi cấu trúc mảng
//arr.splice(start, deleteCount, item1, item2, itemN)
//start: Vị trí bắt đầu thay đổi mảng. Nếu số âm sẽ tính từ cuối mảng
//deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu vị trí start. Nếu = 0, ko có ptu nào bị loại bỏ
//item1,item2,...: Phần tủ sẽ thêm với mảng từ vị trí start
let arr19 = [1, 2, 3, 4, 5];
arr19.splice(1, 2);
console.log(arr19); //1,4,5
let arr20 = [1, 2, 3, 4, 5];
arr20.splice(1, 2, 6, 7);
console.log(arr20); //1,6,7,5
//số âm
let arr21 = [1, 2, 3, 4, 5];
arr21.splice(-3, 2);
console.log(arr21); //1,2,5
//thêm phần tử vào mảng
let arr22 = [1, 2, 3, 4, 5];
arr22.splice(1, 0, 6, 7);
console.log(arr22); //1,6,7,2,3,4,5

//13) Toán tử spread(...) CHo phép duyệt qua lần lượt các phần tử-> sau đó có thể thực hiện
//Tạo bản sao mảng
//Truyền đối số vào hàm
//Kết hợp mảng(nối mảng):
//Tạo mảng mới với thêm phần tử
//Chuyển đổi iterable(có thể duyệt qua: string,arr) thành mảng:

//a)Tạo bản sao mảng
let M1 = [1, 2, 3];
let M2 = [...M1];
console.log(M2); //1,2,3
//thay đổi gtri M2 ko lên quan trong M1
M2[0] = 4;
console.log(M1); //1,2,3
console.log(M2); //4,2,3

//b)Truyền đối số vào hàm
function sum(a, b, c) {
  return a + b + c;
}
let arr23 = [1, 2, 3];
let result = sum(...arr23);
console.log(result); //6

//c)Kết hợp mảng(nối mảng):
let arr24 = [1, 2, 3];
let arr25 = [4, 5, 6];
let arr26 = [...arr24, ...arr25];
console.log(arr26); //1,2,3,4,5,6

//d)Tạo mảng mới với thêm phần tử
let arr27 = [1, 2, 3];
let arr28 = [...arr27, 4, 5, 6];
console.log(arr28); //1,2,3,4,5,6

//e)Chuyển đổi iterable(có thể duyệt qua: string,arr) thành mảng:
let myName = "duy";
let chars = [...myName];
console.log(chars); //d,u,y

//14) Sort() //Sắp xếp theo unicode nếu ko có compareFunction
//Cú pháp: array.sort([compareFunction])
//compareFunction(tùy chọn): Hàm so sách được sd để xđ thứ tự sắp xếp

//Hàm so sánh(compareFunction) cơ bản:
//1. Nếu được cung cấp nó sẽ nhận 2 đối số, a,b
//2. Nếu compareFunction(a,b) trả về 1 giá trị < 0, a đặt trước b
//3. Nếu compareFunction(a,b) trả về 0, thứ tự a ,b ko thay đổi
//4. Nếu compareFunction(a,b) trả về 1 giá trị > 0, a đặt sau b

//14.1 Khi ko truyền compareFunction
let arr29 = ["b", "a", "c", "d", "e"];
arr29.sort();
console.log(arr29); //a.b.c.d.e

let m3 = [10000, 1, 9];
m3.sort();
console.log(m3); //1,10000,9 saiiii

//14.2 Sử dụng hàm so sánh
let M4 = [9, 3, 5, 4];
//Trước khi sắp xếp
console.log(M4); //9,3,5,4
//Sx tăng
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4); //3,4,5,9
//Sx giam
let sortedM5 = M4.sort((a, b) => b - a);
console.log(sortedM5); //9,5,4,3

//15) Reduce() // dựa trên 1 hàm xử lí->  tính và trả về 1 giá trị duy nhất
//Cú pháp: array.reduce(function,[initialValue])
//function: 1 hàm để thực thi từn phần tử trong mảng
//initialValue: giá trị khởi tạo

//function(accumulator, currentValue, [currentIndex], [array])
//Hàm dduocj gọi với những đối số sau:
//1. accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm.
//2. currentValue: Giá trị hiên tại đang xử lí trong mảng
//3. currentIndex: Chỉ số của phần tử đang xử lí
//4. array: Mảng đang được reduce

//Bài toán khi koo dùng reduce
let M5 = [1, 2, 3, 4, 5];
//thực hiện tính tổng các phần tử
//Giá trj khởi tao ban đầuu
let sum1 = 0;
for (let elemet of M5) {
  sum1 += elemet;
}
console.log(sum1); //15

//Bài toán khi dùng reduce
let sum2 = M5.reduce(
  //Tham số thứ 1: fuction
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  //Tham số thứ 2: initialValue
  0
);
console.log(sum2);

//Rút gọn
let sum3 = M5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum3);

//16) filter() //Trích lọc các phần tử thỏa mãn đk của hàm
//Dựa trên 1 hàm xử lí-> để tạo ra 1 mảng mới từ 1 magnr đã cho, chỉ chứa các phần tử thỏa mãn 1 đk được xđ bởi hàm

//Cú pháp: array.filter(function)
//function: Hàm sử dụng để thực thi từng phần tử trong mảng

//function(currentValue, [currentIndex], [array])
//Hàm dduocj gọi với những đối số sau:
//1. currentValue: Giá trị hiên tại đang xử lí trong mảng
//2. currentIndex: Chỉ số của phần tử đang xử lí
//3. array: Mảng đang được duyệt
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//TÌm số chẵn trong magnr
let evenNumbers = numbers.filter(
  //funcntion
  (value, index, array) => value % 2 === 0
);
console.log(evenNumbers);
