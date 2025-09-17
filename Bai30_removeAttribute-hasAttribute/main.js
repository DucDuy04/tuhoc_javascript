//hasAttribute
//Kiểm tra  xem 1 phần tử có thuộc tính được chỉ định hay không
//removeAttribute
//Xóa thuộc tính được chỉ định khỏi phần tử HTML

//Sử dụng querySelector để chọn phần tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");
const item2 = document.querySelector("h1");
//Kiểm tra xem phần tử item1 có thuộc tính "class" hay không
console.log(item1.hasAttribute("class")); //true
console.log(item2.hasAttribute("style")); //true

//removeAttribute
item2.removeAttribute("style");

//Kiểm tra lại xem phần tử item2 có thuộc tính "style" hay không sau khi đã xóa
console.log(item2.hasAttribute("style")); //false
