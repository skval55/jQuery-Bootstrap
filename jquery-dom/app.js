// 1.
$(function () {
  console.log("Let's get ready to party with jQuery");
});

// 2.
$("article img").addClass("image-center");

// 3.
$("article p").last().remove();

// 4.
$("#title").css("font-size", Math.random() * 100);

// 5.
$("ol").append("<li>suppp dawg</li>");

// 6.
$("aside").html(
  "<p>Sorry I should have never put a list here that was just silly of me! :( </p> "
);

// 7.

$(".form-control").on("keyup blur change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + red + "," + green + "," + blue + ")"
  );
});

// 8.
$("img").on("click", function () {
  $(this).remove();
});
