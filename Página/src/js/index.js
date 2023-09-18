function mensaje(params) {
    alert("¡CONOCE NUESTROS PRODUCTOS!")
}

function agotado(params) {
    alert("Por el momento el producto que quiere se encuentra agotado:(")
}

function carrito(params) {
    alert("Por el momento no tienes productos en tu carrito.")
}

function suscripcion(params) {
    alert("¡Recibirás a tu correo información sobre KOS BEAUTY!")
}

function redirigir(params) {
    location.href = ("https://www.instagram.com/kosbeauty/")
}

function twitter(params){
    location.href = ("https://twitter.com/keniaos/status/1387804894145433610?s=21")
}

function tiktok(params) {
    location.href = ("https://www.tiktok.com/@keniaos?_d=secCgYIASAHKAESMgowU0qU2EXl0iGFWAhvwhF4BHeWX5DV%2FwJ3Et9%2FDbbiw1TiLcqD817tWcduXNwViLJkGgA%3D&_r=1&language=es&sec_uid=MS4wLjABAAAA-6j-kOYr87kW1Iy1u_W6o85KFa2WMxwWNXR258VsIOH1xlu481Wc5xlkeHKnXbYH&sec_user_id=MS4wLjABAAAA-6j-kOYr87kW1Iy1u_W6o85KFa2WMxwWNXR258VsIOH1xlu481Wc5xlkeHKnXbYH&share_app_id=1233&share_author_id=6589754653630021638&share_link_id=C19807F3-4F48-4DEB-A1E1-C01B599617A3&source=h5_m&tt_from=copy&u_code=d1g2lldcf95e6c&user_id=6589754653630021638&utm_campaign=client_share&utm_medium=ios&utm_source=copy")
}

function mostrarMensaje() {
    alert("No tienes ningún producto en tu carrito.");
}

/* opcion 1
window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imagen');
  
  imagen.addEventListener('mouseover', peligro, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imagen').src = "./src/images/imgsetlabial.jpg";
}

function peligro() {
  var imagen = document.getElementById('imagen').src = "./src/images/imgsetlabial2.jfif";
}
*/

//opción 2
window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imagen');
  var imagen2 = document.getElementById('imagen2');
  var imagen3 = document.getElementById('imagen3');
  
  imagen.addEventListener('mouseover', peligro, false);
  imagen.addEventListener('mouseout', restaurar, false);
  imagen2.addEventListener('mouseover', peligro, false);
  imagen2.addEventListener('mouseout', restaurar, false);
  imagen3.addEventListener('mouseover', peligro, false);
  imagen3.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imagen').src = "./src/images/imgsetlabial.jpg";
  var imagen2 = document.getElementById('imagen2').src = "./src/images/imglabialrojo.jpg";
  var imagen3 = document.getElementById('imagen3').src = "./src/images/imglabialnude.jpg";
}

function peligro() {
  var imagen = document.getElementById('imagen').src = "./src/images/imgsetlabial2.jfif";
  var imagen2 = document.getElementById('imagen2').src = "./src/images/imglabialrojo2.jfif";
  var imagen3 = document.getElementById('imagen3').src = "./src/images/imglabialnude2.jpeg";
}
