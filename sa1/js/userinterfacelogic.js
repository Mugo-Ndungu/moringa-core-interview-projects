// user interface logic
$(document).ready(function() {
  $("#showresults").click(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    output.forEach(function(element) {
      $("#results").append("<li>" + element + "</li>");
    });
    $(".results").show();
  });
});