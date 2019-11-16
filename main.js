function myFunction() {
    document.getElementById("area").style.fontWeight = 'bold';
  }
  function myFunction2() {
    document.getElementById('area').style.fontStyle = 'italic';

  }
  function myFunction3() {
     document.getElementById('area').style.textDecoration = 'underline';

  }

  function changetaille(){
    
    document.getElementById('area').style.fontSize =document.getElementById('taille').value;
  }
  function changefont() {
document.getElementById('area').style.fontFamily = document.getElementById('font').value;
}


$("#popup1").hover(function () {
  $("#detail1").css("display","block");
    
  }, function () {
    $("#detail1").css("display","none");

   }
);

$("#popup2").hover(function () {
  $("#detail2").css("display","block");
    
  }, function () {
    $("#detail2").css("display","none");

   }
);

$("#popup3").hover(function () {
  $("#detail3").css("display","block");
    
  }, function () {
    $("#detail3").css("display","none");

   }
);