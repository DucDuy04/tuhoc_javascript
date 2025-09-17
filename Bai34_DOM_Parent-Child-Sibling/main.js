//33. Truy cập Parent, Child và Sibling trong DOM
//Cha,con,anh em
let elm = document.querySelector(".hero__content");
//1.Truy cập vào phần tử cha(duy nhất)
console.log(elm.parentElement);

elm.parentElement.style.backgroundColor = "red";

//2.Truy cập vào phần tử con(nhiều)
console.log(elm.children);
//HTMLCollection(3) [h1.hero__heading, p.hero__desc, div.hero__row]
console.log(elm.children[0]);

//nextElementSibling
console.log(elm.children[1].nextElementSibling);

//previousElementSibling
console.log(elm.children[2].previousElementSibling);
