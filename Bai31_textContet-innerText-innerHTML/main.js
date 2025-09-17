//Chọn phần tử có id là "demo"
const elm = document.querySelector("#demo");
//Lấy textContent
console.log("textContent: ");
console.log(elm.textContent);

//Lấy innerText
console.log("innerText: ");
console.log(elm.innerText);

//Lấy innerHTML
console.log("innerHTML: ");
console.log(elm.innerHTML);

//Chọn phần tử có id là "demo2"
let elm2 = document.querySelector("#demo2");
elm2.innerHTML = "<p> <i> Tôi học JavaScript tại Tuhoc.cc</i></p>";
elm2.textContent = "<p> <i> Tôi học JavaScript tại Tuhoc.cc</i></p>";
