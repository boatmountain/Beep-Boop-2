//back end
function beepBoop(userInput){
  var beepBoopArray = [];

  for(var i=0; i<= userInput; i++){
    if (i.toString().includes("3")){
      beepBoopArray.push("Lo Siento, Dave.  Me temo que no puedo hacer eso.");
    } else if (i.toString().includes("2")){
      beepBoopArray.push("¡Boop!");
    } else if (i.toString().includes("1")){
      beepBoopArray.push("¡Beep");
    } else {
      beepBoopArray.push(" " + i);
    }
  }
  console.log(userInput);
  return beepBoopArray;
};

//front end
$(document).ready(function(){
  $("#computerSound").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var result = beepBoop(userInput);

    $("#result").show();
    $(".beeps").text(result);
  })
});


// extra
// form#input
//beebBoop Array = bBA
