
function reset()
 {
  var num = prompt("Enter a number between 2 to 100")
  if (num >= 2 && num <= 100) {
    var size = (500 / num);
    $("#container").css("height", 500 + (num * 2));
    $("#container").css("width", 500 + (num * 2));

    for (var x = 0; x < num; x++) {
      for (var y = 0; y < num; y++) {
        $("<div />").addClass("unit").appendTo("#container");
      }


    }
    $(".unit").css("height", size);
    $(".unit").css("width", size);
  } else {
    alert("Invalid Entry");
  }
}
//document.getElementById("reset").onclick = reset;

//});

//$(document).ready(function() {
function standard() {

  $(".unit").mouseenter(function() {
    $(this).css("background-color", "yellow");

  });
}
//standard();
//});
//$(document).ready(function(){
function random() {

  $(".unit").mouseenter(function() {

    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    $(this).css("background-color", randomColor);

  });

}
//random();
//});

//$(document).ready(function () {
 
function opacity() 
{
$(".unit").mouseenter(function() {
$(this).fadeTo("slow", 0.5);

});
}
//opacity();
//});


//$(document).ready(function() {
function trails() {     // draw trails using fade animations
    
    $(".unit").mouseenter(function() {
        
        $(this).fadeTo(100, 0);
        
    });
    
    $(".unit").mouseleave(function() {
        
        $(this).fadeTo(400, 1);
        
    });
    
}
//trails();
//});
/*
$(document).ready(function() {
function clear() {

  for(var k = 1;k < 17;k++){
    for(var l = 1;l < 17;l++){
      $("<div />").addClass("unit").appendTo("#container");
    }
  }

}

clear();
});
*/
/*
$(document).ready(function() 
{
reset();
standard();
//random();
//opacity();
//trails();
});
*/