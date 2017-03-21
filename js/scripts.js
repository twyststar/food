$(document).ready(function() {
  $(".click-sweet").click(function() {
    $(".donut").slideDown();
    $("body").removeClass();
    $("body").addClass("pink");

  });
  $(".donut button").click(function() {
    $(".donut").slideUp();
    // $("body").removeClass("pink");

  });
});

$(document).ready(function() {
  $(".click-juicy").click(function() {
    $(".juicy").slideDown();
    $("body").removeClass();
    $("body").addClass("green")

  });
  $(".juicy button").click(function() {
    $(".juicy").slideUp();
    // $("body").removeClass("green")

  });
});

$(document).ready(function() {
  $(".click-drink").click(function() {
    $(".drink").slideDown();
    $("body").removeClass();
    $("body").addClass("blue")

  });
  $(".drink button").click(function() {
    $(".drink").slideUp();

  });

});
