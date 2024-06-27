// FUNCIONALIDAD LETRA ESCRIBIENDOSE
window.addEventListener('DOMContentLoaded', function () {
    var title = document.getElementById('WELCOME-title');
    var text = "BIENVENIDOS";
    var i = 0;
    var typingEffect = setInterval(function () {
         if (i < text.length) {
              title.innerText += text.charAt(i);
              i++;
         } else {
              clearInterval(typingEffect);
         }
    }, 300); // Ajusta la velocidad de escritura cambiando el valor de 300 (en milisegundos)
});