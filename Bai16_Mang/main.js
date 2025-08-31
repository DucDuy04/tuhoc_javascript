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
