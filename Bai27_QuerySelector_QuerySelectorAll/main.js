//27.1 QuerySelector()
//Chon phần tử có id là heading_title
let title = document.querySelector("#heading_title");
console.log(title); //Trả về 1 phần tử đầu tiên có id là heading_title
title.innerHTML = "New title"; //Thay đổi nội dung thẻ có id là heading_title

//Chon phần tử có class là list
let first_list = document.querySelector(".list");
//first_list.innerHTML = "New list"; //Thay đổi nội dung thẻ có class là list đầu

//querySelector có thể chọn css kết hợp
let firstLinkInList = document.querySelector("ul a");
console.log(firstLinkInList); //Trả về thẻ a đầu tiên trong thẻ ul

//Chọn phần tử input checkbox và đặt thuộc tính checked cho nó
let checkbox = document.querySelector("input");
checkbox.checked = true; //Đặt thuộc tính checked cho thẻ input

//27.2 QuerySelectorAll()
let listItems = document.querySelectorAll("li");
console.log(listItems); //Trả về tất cả thẻ li dưới dạng NodeList

listItems[1].innerHTML = "New item 2"; //Thay đổi nội dung thẻ li thứ 2
