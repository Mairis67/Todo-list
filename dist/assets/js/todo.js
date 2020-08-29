// *** Check Of Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// ***Delete Todo***
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

// ***Add new Todo***
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    const newTodo = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>"
    );
  }
});

$("#trash").click(function () {
  $("input[type='text']").fadeToggle();
});
