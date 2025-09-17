//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
//DM-DỰ AN THỨC TÉ

//Chọn phần tử cha
const container = document.getElementById("container");

let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
//Bai1:THêm 1 đứa
//Tạo phần tử con
// const img1 = document.createElement("img");
// img1.src = `${baseUrl}1.png`;
// //Thêm phần tử con với phần tử cha
// container.appendChild(img1);

//Baif2:Thêm nhiều đứa
// for (let i = 1; i <= 151; i++) {
//   const newImg = document.createElement("img");
//   newImg.src = `${baseUrl}${i}.png`;
//   container.appendChild(newImg);
// }

//Bài 3: Làm khung div-thẻ img-thẻ span đánh stt
for (let i = 1; i <= 151; i++) {
  //Tạo phần tử div chứa img và span
  const newDiv = document.createElement("div");
  //Thêm div vào cuối container
  //Láy node mới tạo râ gán  vào parentDiv
  const parentDiv = container.appendChild(newDiv);
  //Tạo phần tử img,thêm vào parentDiv
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  parentDiv.appendChild(newImg);
  //Tạo phần tử span,thêm vào parentDiv
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  parentDiv.appendChild(newSpan);
}
