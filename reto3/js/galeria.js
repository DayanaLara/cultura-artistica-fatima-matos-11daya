
// FUNCIONALIDAD LETRA ESCRIBIENDOSE
window.addEventListener('DOMContentLoaded', function () {
    var title = document.getElementById('galeria-title');
    var text = "GALERIA";
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


// FUNCIONALIDAD DE GIRAR IMAGENES AL CARGAR PAGINA
document.addEventListener("DOMContentLoaded", function() {
     var galleryImages = document.querySelectorAll(".gallery img");
 
     // Función para reiniciar la posición de las imágenes
     function resetImagePosition() {
         galleryImages.forEach(function(img) {
             img.style.transition = "transform 0.3s, box-shadow 0.3s";
             img.style.transform = "rotate(0deg)";
         });
     }
 
     // Reiniciar la posición de las imágenes después de 3 segundos
     setTimeout(resetImagePosition, 3000);
 });
