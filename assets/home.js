

   $(document).ready(function(){
           $(".list").hide();
           $(".list1").hide();
           $(".list2").hide();
           $(".list3").hide();


           $("#cultura").hover(function(){$(".list").show();
            $("#culture").hide();
 }, function(){$(".list").hide();
 $("#culture").show();});

 $("#ciencia").hover(function(){$(".list1").show();
 $("#science").hide();}, function(){$(".list1").hide();
 $("#science").show();});

   $("#historia").hover(function(){$(".list2").show();
 $("#history").hide();}, function(){$(".list2").hide();
 $("#history").show();});

   $("#regiones").hover(function(){$(".list3").show();
 $("#region").hide();}, function(){$(".list3").hide();
 $("#region").show();});

    $("#cultura").hover(function(){$(".listTheme2").show();
   }, function(){$(".listTheme2").hide();
   });

  $("#miBoton2").hover(function(){$(".listTheme").show();
  }, function(){$(".listTheme").hide();
  });

 });
