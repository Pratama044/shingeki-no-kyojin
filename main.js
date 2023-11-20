var tombol = document.getElementById('toggle');
var side = document.getElementById('sidebar');
var otherButtons = document.querySelectorAll('#disable');
tombol.addEventListener('click', function(){
    if(side.style.width === "0px" || side.style.width === " "){
        side.style.width = "200px";

        otherButtons.forEach(function(button){
          button.disabled = true;
        });
    }else{
        side.style.width = "0";
        otherButtons.forEach(function(button){
          button.disabled = false;
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header");
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
  
      // Atur warna latar belakang berdasarkan posisi scroll
      if (scrollPosition > 0) {
        navbar.style.backgroundColor = "black";
      } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.600)";
      }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});


  

  

