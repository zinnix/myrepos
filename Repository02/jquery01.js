$(document).ready(function() {
   var x=0;


  $("#testbutton").click(function() {
      $("strong, #testbutton").css("background-color", "yellow");
    });
  
 /*
  $("h1").mouseenter(function() {
      $(this).css("background-color","blue");
  });
  
$("h1").mouseleave(function() {
      $(this).css("background-color","green");
  });
  
  */
  
   $("h2").mouseenter(function() {
      $(this).css({
          "margin-left": "+=50px",
          "background-color": "blue"
      });
  });
  
   $("h2").click(function() {
      $(this).css({
          "margin-left": "-=40px",
          "background-color": "blue"
      });
  });
  
  
  
  $("h1").mouseenter(function() {
      $(this).removeClass("bobo");
  });
  
  
/*
$("h3").mouseenter(function() {
      $(this).css("background-color","brown");
  });
$("h3").mouseleave(function() {
      $(this).css("background-color","red");
      $(this).unbind();
  });
  
*/

  $("h3").click(function() {
      $("h4").fadeToggle(500);
  });



 $("h5").click(function() {
      $(this).text("Clicked");
  });

 $("p6").click(function() {
      $("p6").html("new <b style='color: red;'>P5</b>");
      $("p6").append(" new text appened");
      $("#picture").attr("src", "picture.jpg");
  });


 $("p7").click(function() {
     
      var cars = ["green", "yellow","blue", "red", "white", "black" , "#213456"];
      $(this).text("my new color is: " + cars[x]);
      $(this).css("background-color",cars[x]);
      if (x<cars.length) {
         x++;
      }
      else {
        x=0;
      }
  });


});

