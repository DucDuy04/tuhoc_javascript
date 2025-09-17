//35 Append,Prepend
//Phương thức dùng để thêm 1 or nhiều phần tử con vào trong phần tử cha
//append: Thêm vào cuối
//prepend: Thêm vào đầu

//Ví dụ 1:
//B1: create element
//Cú pháp: document.createElement('element')   //element: thẻ html cần tạo
const newImg = document.createElement("img");
//Kiểm tra toàn bộ thuộc tính và phương thức newImg
console.dir(newImg);

//B2:set attribute
//newImg.setAttribute("src", "./assets/img/most_slide_2.jpg");

//Cachs2:
newImg.src = "./assets/img/most_slide_2.jpg";

//B3:append: theem1 phần tử đãcó sẵn
document.body.append(newImg); //Thêm vào cuối phần tử cha(trường hợp nay la body)
//set chiều rộng 100% viewport width
newImg.style.width = "100vw";

//Ví  dụ 2:Thêm thẻ p
const newText = document.createElement("p");
newText.textContent = "Xin chào JS";
document.body.append(newText);

//Ví dụ 3:Thêm vào 1 phần tử khác
const p = document.querySelector(".hero__desc");
p.append("Anh em ta là cái gì?");

//Ví dụ 4:Thêm nhiều phần tử
let elm1 = document.createElement("p");
elm1.textContent = "CR7 Cr7 Cr7";

let elm2 = document.createElement("span");
elm2.textContent = "Đây là thẻ span";

//Lấy phần tử cha
let contaier = document.querySelector(".hero__heading");
contaier.append(elm1, elm2, "Helloae");

//Prepend: Thêm vào đầu
let elm3 = document.createElement("p");
elm3.textContent = "Phần tử 3";
contaier.prepend(elm3);
