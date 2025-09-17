//1. getElementByTagName()
//Chọn các  phần tử trên trang web dựa vào thẻ HTML li,ul,div,span
//Trả về  1  mảng chứa các phần tử có  tagName  được chỉ định
console.log("getElementByTagName: ");
let li_item = document.getElementsByTagName("li");
console.log(li_item); //Trả về 1 mảng các thẻ li

//Truy xuất và thay đổi 1 phần tử theo index
li_item[0].innerHTML = "ANHON";

//2. getElementByClassName()
//Chọn các phần tử trên trang web dựa vào class của thẻ HTML
//Trả về  1  mảng chứa các phần tử có  className  được chỉ định
console.log("getElementByClassName: ");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item); //Trả về 1 mảng các thẻ có class là list

//Truy xuất và thay đổi 1 phần tử theo index
li_class_item[1].innerHTML = "ANHON2";

//3. getElementById()
//Chọn các phần tử trên trang web dựa vào id của thẻ HTML
//Trả về  1  phần tử duy nhất có id trùng lặp,nếu có nhiều id trùng chỉ trả  về id  đầu tiên(Quy tắc ko nên trùng id trên cùng 1 trang web)
//Ko tìm thấy trả về null
console.log("getElementById: ");
let el = document.getElementById("list_about");
console.log(el); //Trả về 1 phần tử có id là list_about

//Thay đổi nội dung của thẻ có id là list_about
el.innerHTML = "ANHON3";
