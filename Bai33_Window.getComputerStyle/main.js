let button = document.querySelectorAll(".btn");

for (let btn of button) {
  if (btn instanceof HTMLElement) {
    btn.style.backgroundColor = "blue";
    btn.innerHTML = "Click me";
    btn.fontSize = "2em";
    btn.style.color = "yellow";
  }
}
