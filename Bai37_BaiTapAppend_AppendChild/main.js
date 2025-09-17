//THêm 100buton vào phần tử cha id container

//Xác đih phần tử cha
let parent = document.querySelector("#container");
console.log(parent);
//Tạo phần tử con

//Thêm 100 button vào phần tử cha
for (let i = 0; i < 100; i++) {
  let btn = document.createElement("button");
  btn.innerText = "Button" + i;
  btn.style.backgroundColor = "cyan";
  parent.append(btn);
  //Nếu i lẻ thì  nút  có màu  là magenta
  if (i % 2 != 0) {
    btn.style.backgroundColor = "magenta";
  }
}
