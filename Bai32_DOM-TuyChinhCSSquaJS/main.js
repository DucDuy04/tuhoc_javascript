//DOM style
//Chọ phần tử h1
let heading = document.querySelector("h1");
//Thay đổi style
// heading.style.backgroundColor = "red";
// heading.style.fontSize = "50px";
// heading.style.color = "white";

//Thay đổi nhiều style cùng lúc
Object.assign(heading.style, {
  backgroundColor: "red",
  fontSize: "50px",
  color: "white",
  textAlign: "center",
});
