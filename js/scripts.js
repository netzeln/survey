$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var nameInput= $("input#name").val();
    var foodInput = $("input#food").val();
    var animalInput = $("input#animal").val();
    var colorInput = $("input#color").val();
    var numberInput = $("input#number").val();


    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".animal").text(animalInput);
    $(".color").text(colorInput);
    $(".number").text(numberInput);
    $("#colorized").css('color', colorInput);



    $("#story").show();

    event.preventDefault();
  });



});
