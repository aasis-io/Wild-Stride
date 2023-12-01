/*=============================
Main - Dropdown Toggler
=====================*/

document.addEventListener("click", function (event) {
  var dropdowns = document.querySelectorAll(".nav-list > li.dropdown.active");
  for (var i = 0; i < dropdowns.length; i++) {
    if (!dropdowns[i].contains(event.target)) {
      dropdowns[i].classList.remove("active");
    }
  }
});

var dropdownToggle = document.querySelectorAll(".nav-list > li.dropdown > a");
for (var i = 0; i < dropdownToggle.length; i++) {
  dropdownToggle[i].addEventListener("click", function (event) {
    var dropdown = this.parentNode;
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    } else {
      var activeDropdowns = document.querySelectorAll(
        ".nav-list > li.dropdown.active"
      );
      for (var j = 0; j < activeDropdowns.length; j++) {
        activeDropdowns[j].classList.remove("active");
      }
      dropdown.classList.add("active");
    }
    event.preventDefault();
  });
}

/*=============================
Sub - Dropdown Toggler
=====================*/

var dropdownSubmenuToggle = document.querySelectorAll(
  ".drop-mega:first-child > .dropdown-menu > li > a"
);
for (var i = 0; i < dropdownSubmenuToggle.length; i++) {
  dropdownSubmenuToggle[i].addEventListener("click", function (event) {
    var dropdownSubmenu = this.parentNode;
    if (dropdownSubmenu.classList.contains("level-active")) {
      dropdownSubmenu.classList.remove("level-active");
    } else {
      var activeDropdownSubmenus = document.querySelectorAll(
        ".drop-mega:first-child > .dropdown-menu > li.level-active"
      );
      for (var j = 0; j < activeDropdownSubmenus.length; j++) {
        activeDropdownSubmenus[j].classList.remove("level-active");
      }
      dropdownSubmenu.classList.add("level-active");
    }
    event.preventDefault();
  });
}
var dropdownSubmenuToggle2 = document.querySelectorAll(
  ".drop-mega:nth-child(4) > .dropdown-menu > li > a"
);
for (var i = 0; i < dropdownSubmenuToggle2.length; i++) {
  dropdownSubmenuToggle2[i].addEventListener("click", function (event) {
    var dropdownSubmenu = this.parentNode;
    if (dropdownSubmenu.classList.contains("level-active")) {
      dropdownSubmenu.classList.remove("level-active");
    } else {
      var activeDropdownSubmenus = document.querySelectorAll(
        ".drop-mega:nth-child(4) > .dropdown-menu > li.level-active"
      );
      for (var j = 0; j < activeDropdownSubmenus.length; j++) {
        activeDropdownSubmenus[j].classList.remove("level-active");
      }
      dropdownSubmenu.classList.add("level-active");
    }
    event.preventDefault();
  });
}

var parentList = document.getElementById("parent_drop");
var firstChild = parentList.querySelector("li:first-child");
firstChild.classList.add("level-active");

const hamburger_menu = document.querySelector(".nav-opener");
const container = document.querySelector(".menu-toggle");
const navToggled = document.querySelector(".my-navbar");

hamburger_menu.addEventListener("click", (e) => {
  e.stopPropagation();
  container.classList.toggle("active");
  navToggled.classList.toggle("show-navbar");
});

document.addEventListener("click", (e) => {
  if (!navToggled.contains(e.target)) {
    navToggled.classList.remove("show-navbar");
    container.classList.remove("active");
  }
});

/*=============================
Slider Initializer
=====================*/

new Splide(".splide", {
  type: "fade",
  speed: 1600,
  rewind: true,
  // autoplay: {
  //   delay: 5000,
  // },
  dragMinThreshold: {
    mouse: 400,
    touch: 10,
  },
  // pagination: false,
}).mount();


/*=============================
Owl Carousel Initializer
=====================*/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    navText: [
      "<a class='btn prev-caro'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      "<a class='btn next-caro'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      769: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 3,
        nav: true,
        loop: true,
        margin: 10,
      },
    },
  });
});


/*=============================
Testimonial Slider Initializer
=====================*/

const swiperT = new Swiper(".swiperTest", {
  // Optional parameters
  autoHeight: true,
  loop: true,

  // autoplay: {
  //   delay: 5000,
  // },

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-y",
    prevEl: ".swiper-button-prev-x",
  },
});