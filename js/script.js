function ir(pagina){
window.location.href = pagina;
}

/* ACORDEON FAQ */

var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

acc[i].addEventListener("click", function () {

this.classList.toggle("active");

var panel = this.nextElementSibling;

if (panel.style.maxHeight) {
panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + "px";
}

});

}

/* BOTON SUBIR */

let btnSubir = document.getElementById("btnSubir");

window.onscroll = function () {

if (document.documentElement.scrollTop > 200) {
btnSubir.style.display = "block";
} else {
btnSubir.style.display = "none";
}

};

btnSubir.onclick = function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};

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