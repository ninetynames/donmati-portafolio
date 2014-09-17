$(document).ready(function(){
  $(".contacto").click(function(){
    $("#panel-contacto").slideToggle("fast");
  });
});
$('h1.datos.x').click(function(){ $('#panel-contacto').slideToggle("fast") });

$(document).ready(function(){
  $(".sobremi").click(function(){
    $("#panel-yo").slideToggle("fast");
  });
});
$('h1.datos.ex').click(function(){ $('#panel-yo').slideToggle("fast") });
