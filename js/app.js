$(document).ready(function(){
  $(".contacto").click(function(){
    $("#panel-contacto").slideToggle("fast");
    $('#panel-yo').fadeOut("fast");
  });
  $(".sobremi").click(function(){
    $("#panel-yo").slideToggle("fast");
    $('#panel-contacto').fadeOut("fast");
  });
  $('.datos.ex').click(function(){
    $('#panel-yo').fadeOut("fast");
    $('#panel-contacto').fadeOut('fast');
  });
});