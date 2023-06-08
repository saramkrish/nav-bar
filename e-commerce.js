
      
//drop down//
// Get the dropdown button and content elements
var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");

// Toggle the dropdown content when the button is clicked
dropdown.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Hide the dropdown content if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropbtn")) {
    dropdownContent.classList.remove("show");
  }
});

//card slider//
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

