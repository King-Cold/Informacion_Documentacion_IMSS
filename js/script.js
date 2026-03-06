function ir(pagina){
window.location.href = pagina;
}

document.addEventListener("DOMContentLoaded", function(){

let preguntas = document.querySelectorAll(".accordion");

preguntas.forEach(p => {

p.addEventListener("click", function(){

let panel = this.nextElementSibling;

panel.style.display =
panel.style.display === "block" ? "none" : "block";

});

});

});