$("nav a").on("click", function(event) {
  event.preventDefault();

  const href = $(this).attr("href");
  window.history.pushState(null, null, href);
  $("nav a").removeClass("current");
  $(this).addClass("current");

  $.ajax({
    url: href,
    success: function(data) {
      $("body").fadeOut(250, function() {
        const newPage = $(data)
          .filter("body")
          .html();

        $("body").html(newPage);

        $("body").fadeIn(1000);
      });
    }
  });
});
