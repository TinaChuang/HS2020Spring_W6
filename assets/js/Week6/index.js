"use strict";

(function ($) {
  $('.owl-carousel').owlCarousel({
    // center: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false,
        loop: true
      }
    }
  });
  $("#openMenu").on("click", function () {
    $("#mobileMenu").show();
  });
  $("#closeMenu").on("click", function () {
    $("#mobileMenu").hide();
  });
})($);
//# sourceMappingURL=index.js.map
