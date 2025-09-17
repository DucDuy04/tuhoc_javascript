//DOM - appendChild
//Bài 36. Truy cập vào phần tử con (appendChild)

//Xác định phần tử cha
let parentElm = document.querySelector("#header");
console.log(parentElm);

//Tạo phần tử con,ví dụ thẻ p
let elm_p = document.createElement("p");
//Thêm nội dung cho thẻ p
elm_p.textContent = "Xin chào JS";
//Thêm style
elm_p.style.color = "red";
//Thêm class cho thẻ p
elm_p.setAttribute("Class", "doan_van");

/*
1.Đối tương có thể thêm
   -`appendChild`  chỉ thêm được đối tượng node
   -`append`  thêm được cả node và chuỗi văn bản
   
*/
parentElm.appendChild(elm_p);
//Sau khi có class mới được thêm, ta có thể css cho chung

/*
2.**Trả về giá trị**
   -`appendChild`  Trả về phần tử vừa được thêm
   -`append`  Ko trả về giá trị
*/
console.log(parentElm.appendChild(elm_p));

/*
3.**Thêm nhiêu phần tử**
   -`appendChild`  Chỉ thêm 1 phần tử
   -`append`  Thêm nhiều phần tử hoặc chuỗi văn bản
*/

//Tạo thêm 1 phần tử con
let h3 = document.createElement("h3");
h3.textContent = "Xin chào JS 22222";
//parentElm.append(h3, "Xin chào JS 33333");

parentElm.appendChild(h3, "aaaa"); //ko thêm dc "aaaa"

//Tình huống sử dụng appendChild
//do appendChild có giá trị trả  về nên:
//Ta có thể Thêm và lập tức thao tác được

//tạo phần tử mới
let btn = document.createElement("button");
btn.textContent = "click me";
btn.style.backgroundColor = "red";
//Thêm phần tử mới vào 1 phần tử cha và nhận giá trị  trả về
let addBtn = parentElm.appendChild(btn);

//Gán sự kiện click cho phần tử
addBtn.addEventListener("click", function () {
  alert("m vừa click vào button");
});
