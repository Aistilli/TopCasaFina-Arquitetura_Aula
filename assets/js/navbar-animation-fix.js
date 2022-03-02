$("#navbar-topCasaFina").on("show.bs.collapse", function () {
  $(".topCasaFina-banner").css("transform", "translate(-50%, 10%)");
});

$("#navbar-topCasaFina").on("hide.bs.collapse", function () {
  $(".topCasaFina-banner").css("transform", "translate(-50%, -50%)");
});

$("nav li a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href");
  targetOffset = $(id).offset().top;
  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    700
  );
});
