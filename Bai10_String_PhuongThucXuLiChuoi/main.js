//Bai10
//10.1 :Slice
let s4 = "0123456789";
let s5 = s4.slice(2, 4); //2,3
console.log(s5);

// ko có endIndex thì sẽ cắt tới cuối chuỗi
let s6 = s4.slice(2); //2,...,9
console.log(s6);

//10.2 : Substring (tham số truyền vào số nào nhỏ hơn thì mặc định là startIndex)
//substring(2,3) hoặc (3,2) đều như nhau neus nhập vào số âm sẽ chuyển thành 0
//slice ko đổi được => trả về chuỗi rỗng
//slice với tham số âm thì sẽ cắt ngược từ cuối về
//vd: s4.slice(-3,-1) => "78" lấy từ -3 đến sát -1
let s7 = s4.substring(2, 4); //2,3
console.log(s7);

// ko có endIndex thì sẽ cắt tới cuối chuỗi
let s8 = s4.substring(2);
console.log(s8);

//10.3: trim()
//Loại bỏ các khoảng trắng ở 2 đầu chuỗi
let s9 = "   he  loo   ";
s9 = s9.trim();
console.log(s9);

//10.4: trimEnd()
//Loại bỏ các khoảng trắng ở cuối chuỗi
let s10 = "   he  loo   ";
s10 = s10.trimEnd();
console.log(s10);

//10.5: trimStart()
//Loại bỏ các khoảng trắng ở đầu chuỗi
let s11 = "   he  loo   ";
s11 = s11.trimStart();
console.log(s11);

//10.6: concat()
//Nối 2 chuỗi (nối 13 vào 12)
let s12 = "Hello";
let s13 = "World";
let s14 = s12.concat(" ", s13);
console.log(s14);

//10.7: toUpperCase()
//Chuyển đổi chuỗi thành chữ hoa
let s15 = "Hello World";
s15 = s15.toUpperCase();
console.log(s15); //HELLO WORLD

//10.8: toLowerCase()
//Chuyển đổi chuỗi thành chữ thường
let s16 = "Hello World";
s16 = s16.toLowerCase();
console.log(s16); //hello world

//10.9: charAt()
//Lấy ký tự tại vị trí index
let s17 = "Hello World";
console.log(s17.charAt(0)); //H
console.log(s17.charAt(6)); //W
console.log(s17.charAt(100)); // (chuỗi rỗng)

//10.10 replace(oldString, newString)
let s18 = "Hello World Hello";
s18 = s18.replace("Hello", "Everyone");
console.log(s18); //Everyone World Hello
//nếu muốn thay thế toàn bộ
s18 = s18.replace(/Hello/g, "0");
console.log(s18); //0 World 0

//10.11 repeat()
let s19 = "Hello";
s19 = s19.repeat(3);
console.log(s19); //HelloHelloHello

// 10.12 string.indexOf(searchValue, fromIndex);
// tìm kiếm (searchValue) trong chuỗi.
//Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
/*
fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ đầu chuỗi.
*/
let s25 = "abcdef abcdef";
let s26 = s25.indexOf("d");
console.log(s26);
// Tìm chữ "c" nhưng bắt đầu từ vị trí index 3
console.log(s25.indexOf("d", 3));
let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex);

//10.13 string.lastIndexOf(searchValue, endIndex);
/*
tìm kiếm giá trị xuất hiện cuối cùng của chuỗi tìm kiếm (searchValue) trong chuỗi gốc. 
Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
endIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi từ phải sang trái. 
Nếu không được cung cấp, tìm kiếm toàn bộ chuỗi.
*/
let s27 = "abcdef abcdef";
let s28 = s27.lastIndexOf("ab");
console.log(s28);
// Tìm với tham số endIndex (tìm trong đoạn từ index 0 -> endIndex)
console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));

// 10.14  string.includes(searchString, [fromIndex]);
/*
Kiểm tra chuỗi con
kiểm tra string có chứa cụm searchString hay không
fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
Nếu không nhập, tìm kiếm toàn bộ chuỗi
*/
let s29 = "abcdef abcdef";
console.log(s29.includes("a"));
console.log(s29.includes("g"));
// Tìm a bắt đầu từ vị trí index 8 (tìm trong bcdef)
console.log(s29.includes("a", 8));

// 10.15 string.startsWith(searchValue,[startIndex]);
/*
Kiểm tra chuỗi string có bắt đầu bằng searchString không?
startIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
Nếu không nhập, nó sẽ bắt đầu từ đầu chuỗi.
*/
let s30 = "abcdef abcdef";
console.log(s30.startsWith("ab"));

// Tìm từ vị trí index số 1 xem có phải bắt đầu bằng chuỗi bc?
console.log(s30.startsWith("bc", 1));

//10.16 string.endsWith(searchValue,[endIndex]);
let s31 = "01234567890";
console.log(s31.endsWith("0"));
//endIndex =10, chuỗi được kiểm tra từ index 0 -> 10-1 = 9
console.log(s31.endsWith("9", 10));

// Ví dụ kiểm tra xem tên tệp âm thanh có kết thúc .mp3?
let tenTepTin = "nhac.mp4";
// Kiểm tra xem tệp tin có kết thúc bằng ".mp3" hay không
if (tenTepTin.endsWith(".mp3")) {
  console.log("Tệp tin là file âm thanh .mp3");
} else {
  console.log("Tệp tin không phải là file âm thanh .mp3");
}

//10.17 string.split(separator, limit)
/*
1. string: Chuỗi gốc cần chia.
2. separator: chuỗi để xác định vị trí thực hiện tách. 
Nó có thể là một ký tự hoặc một biểu thức chính quy.
3. limit (tùy chọn): Giới hạn số lượng phần tử trong mảng kết quả.
*/
let student = "Hoa,Lan,Huệ,Trung";
let arr = student.split(",");
console.log(arr);
// Giới hạn phần tử mảng
let arr2 = student.split(",", 3);
console.log(arr2);

// Nếu nhập vào "" thì sẽ tách rời từng ký tự -> Mảng
let str = "abcdefgh 1234";
let arr3 = str.split("");
console.log(arr3);
