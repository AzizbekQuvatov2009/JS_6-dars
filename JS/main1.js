/* JS selector va stillarbilan ishlash */

let byTeg = document.getElementsByTagName("p");
let byId = document.getElementById("matn");
let byClass = document.getElementsByClassName("text");
let bySelector = document.querySelector(".text");
let bySelectorAll = document.querySelectorAll(".text");
let byAll = document.getElementsByTagName("ul").namedItem("text2");

byAll.style.width = "200px";
byAll.style.height = "100px";
byAll.style.border = "3px solid red";
byAll.style.backgroundColor = "blue";
byAll.style.color = "white";
byAll.style.listStyle = "none";
byAll.style.textTransform = "uppercase";

let matn = byAll.innerText = "Jaa sersalom bola ekansan-da, Abdurahmon." + "Uni o'rniga dars qilsangchi!";
console.log();







