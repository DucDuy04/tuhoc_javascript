//DOM removeChild-remove
//1 removeChild
//Cú pháp: parentElement.removeChild(childElement)

//CHọn phần tử cần xóa
let childElm = document.querySelector("#item2");
//Chọn phần tử cha
let ul = document.querySelector("#list");

//Xoa phần tử
ul.removeChild(childElm);

//Cách 2
let childElm2 = document.querySelector("#item3");
childElm2.parentElement.removeChild(childElm2);

//2 remove(dễ hơn)
//Cú pháp: element.remove()
//Chọn phần tử cần xóa
let childElm3 = document.querySelector("#item4");
//Xoa phần tử
childElm3.remove();
