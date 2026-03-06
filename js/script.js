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

function filtrarTramites() {
  // 1. Obtener el valor del buscador
  let input = document.getElementById('buscador');
  let filtro = input.value.toLowerCase();
  
  // 2. Obtener todas las tarjetas
  let contenedor = document.getElementById('lista-tramites');
  let tarjetas = contenedor.getElementsByClassName('card');

  // 3. Recorrer cada tarjeta y ocultar las que no coincidan
  for (let i = 0; i < tarjetas.length; i++) {
    // Buscamos el H3 dentro de la tarjeta actual
    let titulo = tarjetas[i].querySelector('h3');
    let textoTitulo = titulo.textContent || titulo.innerText;

    if (textoTitulo.toLowerCase().indexOf(filtro) > -1) {
      tarjetas[i].style.display = ""; // Mostrar
    } else {
      tarjetas[i].style.display = "none"; // Ocultar
    }
  }
}