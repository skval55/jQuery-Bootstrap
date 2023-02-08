$("button").on("click", function () {
  $(".movies").append('<div class="movie"></div>');
  $(".movie")
    .last()
    .append(`<p> movie name: ${$("#movie-name").val()}`);
  $(".movie")
    .last()
    .append(`<p> movie rating: ${$("#movie-rating").val()}`);
  $(".movie").last().append('<button class="remove-btn">Remove</button>');
  $("#movie-name").val("");
  $("#movie-rating").val("");
});

$(".movies").on("click", ".remove-btn", function () {
  $(this).parent().remove();
});
