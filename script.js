const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenbutton = document.querySelector("#menu-open-button");
const menuClosebutton = document.querySelector("#menu-close-button");

menuOpenbutton.addEventListener("click",()=>{
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

// Close menu when the close button is clicked
menuClosebutton.addEventListener("click",()=> menuOpenbutton.click());

// Close menu when the nav-link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenbutton.click());
})

//Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop : true,
  grapCursor: true,
  SpaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
        sliderPerView: 1
    },
    769: {
        sliderPerView: 2
    },
    1024: {
        sliderPerView: 3
    }

  }

});

const ScrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".hero-image-wrapper img ", {
    ...ScrollRevealOption,
    origin:"right",
});

ScrollReveal().reveal(".hero-section .section-content .hero-details .title", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".hero-section .section-content .hero-details .subtitle", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".hero-section .section-content .hero-details .description", {
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".hero-section .section-content .hero-details .buttons", {
    ...ScrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".menu-section .menu-list .menu-item", {
    ...ScrollRevealOption,
    delay: 1000,
    interval: 400,
});

ScrollReveal().reveal(".gallery-section .gallery-list .gallery-item", {
    ...ScrollRevealOption,
    delay: 1000,
    interval: 400,
});