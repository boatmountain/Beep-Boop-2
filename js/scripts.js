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
      beepBoopArray.push(" " + 1);
    }
  }
  return beepBoopArray;
}

var number

if (number )



//front end
$(document).ready(function(){
  $("").submit(function(event) {
    event.preventDefault();
  })

})


// extra
// form#input
//beebBoop Array = bBA
