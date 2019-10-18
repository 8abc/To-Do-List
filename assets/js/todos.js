// Check Off Specific Todos by clicks
$("li").click(function() {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(event) {
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
