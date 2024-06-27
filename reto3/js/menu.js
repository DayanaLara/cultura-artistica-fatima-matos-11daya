
//Menu Mobiles
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-toggle").addEventListener("click", function () {
      document.querySelector(".nav").classList.toggle("active");
    });
  
    //Enlaces Desplegables
    document
      .querySelectorAll(".dropdown-toggle")
      .forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
            var dropdownMenu = this.nextElementSibling;
            if (e.target.tagName === "I") {
              e.preventDefault();
              if (dropdownMenu.style.display === "block") {
                dropdownMenu.style.display = "none";
                dropdownMenu.style.opacity = 0;
                dropdownMenu.style.transform = "translateY(-10px)";
              } else {
                dropdownMenu.style.display = "block";
                setTimeout(() => {
                  dropdownMenu.style.opacity = 1;
                  dropdownMenu.style.transform = "translateY(0)";
                }, 10);
              }
            } else {
              window.location.href = "nosotros.html";
            }
          }
        });
      });
  });
  