$(document).ready(function () {
  $(".list").hide();
  $(".list1").hide();
  $(".list2").hide();
  $(".list3").hide();
  $("#cultura1").hide();
  $("#ciencias1").hide();
  $("#regiones1").hide();
  $("#historia1").hide();
 
  // Home : aparece y desaparece lista de temas:
  // $("#cultura").hover(function () {
  //   $(".list").show();
  //   $("#culture").hide();
  // }, function () {
  //   $(".list").hide();
  //   $("#culture").show();
  // });

// input: elegis categoria en Crear 
  $(function listaCrear() {
    var estaOculto = false;
    $('#cul').click(function () {
      // if (estaOculto) {
        $('#categoria input').attr("list","categoria1");

        //  $('#categoria').show();
        //  estaOculto = false;
        // } else {
        //   $('#categoria').hide();
        //   estaOculto = true;
      // }
    });
   
  });

  $(function listaCrear1() {
    // var estaOculto = false;
    $('#cienc').click(function () {
      // if (estaOculto) {
        $('#categoria input').attr("list","categoria2");
        //  $('#categoria').show();
        //  estaOculto = false;
        // } else {
        //   $('#categoria').hide();
        //   estaOculto = true;
      // }
    });
  });

  $(function listaCrear2() {
    // var estaOculto = false;
    $('#hist').click(function () {
      // if (estaOculto) {
        $('#categoria input').attr("list","categoria3");
      //   $('#categoria').show();
      //   estaOculto = false;
      //  } else {
      //    $('#categoria').hide();
      //    estaOculto = true;
      // }
    });
  }); 
  
  $(function listaCrear3() {
    var estaOculto = false;
    $('#reg').click(function () {
      // if (estaOculto) {
        $('#categoria input').attr("list","categoria4");
      //   $('#categoria').show();
      //   estaOculto = false;
      //  } else {
      //    $('#categoria').hide();
      //    estaOculto = true;
      // }
    });
  });

  //lista de editar
   $("#lista4").hover(function () {
    $("#lista4").show();
   }, function () {
     $("#lista4").hide();
   });

});
