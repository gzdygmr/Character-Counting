let textarea = document.querySelector("textarea");
let total = document.querySelector(".total");
let remaining = document.querySelector(".remaining")

textarea.addEventListener("keyup", update); 

function update() {  
    total.textContent = textarea.value.length;
    remaining.textContent = textarea.getAttribute("maxlength") - textarea.value.length;
}
update();