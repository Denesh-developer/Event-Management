/* Created by Denesh */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
e.preventDefault();
fetch(form.action, {
  method : "POST",
  body: new FormData(document.getElementById("sheetdb-form")),
}).then(
  response => response.json()
).then((html) => {
// you can put any JS code here
window.open('page.html','_self')
});
});