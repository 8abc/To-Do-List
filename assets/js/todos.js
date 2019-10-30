// Check Off Specific Todos by clicks
//Adds click listener to entire ul and li that's in ul
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
//adds event listeners to all elements on the page
$("ul").on("click", "span", function(event) {
  $(this)
    //removes the <li> in the span
    .parent()
    //fadeouts the <li> in 500miliseconds
    .fadeOut(500, function() {
      //when the fadeout is done we remove the entire <li>
      $(this).remove();
    });
  //stops the other alerts from popping up
  event.stopPropagation();
});

//13 code for enter key
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grabs new todo text from input
    var todoText = $(this).val();
    //clears the input box
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + " </li>");
  }
});
