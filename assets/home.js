

$(document).ready(function () {
  $(".list").hide();
  $(".list1").hide();
  $(".list2").hide();
  $(".list3").hide();
  $("#cultura1").hide();
  $("#ciencias1").hide();
  $("#regiones1").hide();
  $("#historia1").hide();


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

  // $("#miBoton2").hover(function () {
  //   $(".listTheme").show();
  // }, function () {
  //   $(".listTheme").hide();
  // });

  $(function () {
    var estaOculto = false;
    $('#cul').click(function () {
      if (estaOculto) {
        $('#cultura1').show();
        estaOculto = false;
       } else {
         $('#cultura1').hide();
         estaOculto = true;
      }
    });
  });

  $(function () {
    var estaOculto = false;
    $('body').click(function () {
      if (estaOculto) {
        $('.listTheme2').hide();
        estaOculto = false;
      
      }
    });
  });
 
  $(function () {
    var estaOculto = false;
    $('#reg').click(function () {
      if (estaOculto) {
        $('#regiones1').show();
        estaOculto = false;
      } else {
        $('#regiones1').hide();
        estaOculto = true;

      }

    });
  });

  $(function () {
    var estaOculto = false;
    $('#hist').click(function () {
      if (estaOculto) {
        $('#historia1').show();
        estaOculto = false;
      } else {
        $('#historia1').hide();
        estaOculto = true;

      }

    });
  });

  $(function () {
    var estaOculto = false;
    $('#cienc').click(function () {
      if (estaOculto) {
        $('#ciencias1').show();
        estaOculto = false;
      } else {
        $('#ciencias1').hide();
        estaOculto = true;
      }
    });
  });

});

