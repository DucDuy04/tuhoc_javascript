//getAttribute
//Phương thức  trả về giá trị của thuộc tính nằm trên phần tử HTML, ếu ko tìm thấy trả về null
const firstLink = document.querySelector("a");

//Kiểm tra thuộc tính có tồn tại hay ko
if (firstLink) {
  const linkHref = firstLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log("Ko tìm thấy thẻ a");
}

//setAttribute
firstLink.setAttribute("target", "_blank");

//Sử dụng querySelectorAll để lấy tất cả thẻ a trong ul
const links = document.querySelectorAll("ul a");
//Duyệt qua mỗi thẻ a và sử dụng setAttribute
links.forEach((singleLink) => {
  singleLink.setAttribute("target", "_blank");
});

//Thay đổi thuộc tính style của thẻ h1
const headingColor = document.querySelector("#heading_title");
headingColor.setAttribute("style", "color: blue;");
//Thay đổi thuộc tính style của thẻ h1
headingColor.style.color = "black";
