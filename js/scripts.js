
//Business Logic? Maybe? 
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstName = $("input#firstName").val();
    $(".firstName").text(firstName);
    const inputName = parseInt($("#Alcohol").val());
    if (inputName === 1) {
      $(".alcohol").text("Beer");
    }
    else if(inputName === 2){
      $(".alcohol").text("Liquor");
    }
    else if (inputName === 3) {
      $(".alcohol").text("Wine");
    }
    else {
      $(".alcohol").text("Abstain");
    }
    
    
    $("#survey").show();
    event.preventDefault();
  });
});