document.addEventListener("DOMContentLoaded", function () {
  let Y = 0;

  function move() {
    document.getElementById("move").style.top = Y + "px";
  }
  document.addEventListener(
    "mousemove",
    function (e) {
      Y = e.clientY;
    },
    false
  );

  setInterval(move, 100);
});

(function ($) {
  $(".js-nav-menu-toggle").on("click", function () {
    $(this).parents(".navigation-menu").toggleClass("navigation-menu--open");
  });

  $("html").on("click", function (e) {
    if (
      !$(e.target).closest(".js-nav-menu").length &&
      $(".js-nav-menu").hasClass("navigation-menu--open")
    ) {
      $(".js-nav-menu").removeClass("navigation-menu--open");
    }
  });
})(jQuery);
