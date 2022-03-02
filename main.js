let container = document.getElementById("container");
let heading = document.getElementById("heading");
let btn = document.createElement("button");

btn.textContent = "click here to change the color of the heading";
btn.onclick = function() {
    heading.style.backgroundColor = "black";
    heading.style.color = "#ffffff";
}
container.appendChild(btn);