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
