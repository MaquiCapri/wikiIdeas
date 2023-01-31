$(document).ready(function () {
  $(".list").hide();
  $(".list1").hide();
  $(".list2").hide();
  $(".list3").hide();
  $("#cultura1").hide();
  $("#ciencias1").hide();
  $("#regiones1").hide();
  $("#historia1").hide();
  //  $('#categoria').hide();
  //  $('#categoriaCiencias').hide();
  //  $('#categoriaHistoria').hide();
  //  $('#categoriaRegion').hide();

  // Home : aparece y desaparece lista de temas:
  $("#cultura").hover(function () {
    $(".list").show();
    $("#culture").hide();
  }, function () {
    $(".list").hide();
    $("#culture").show();
  });

  $("#ciencia").hover(function () {
    $(".list1").show();
    $("#science").hide();
  }, function () {
    $(".list1").hide();
    $("#science").show();
  });

  $("#historia").hover(function () {
    $(".list2").show();
    $("#history").hide();
  }, function () {
    $(".list2").hide();
    $("#history").show();
  });

  $("#regiones").hover(function () {
    $(".list3").show();
    $("#region").hide();
  }, function () {
    $(".list3").hide();
    $("#region").show();
  });

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

});
