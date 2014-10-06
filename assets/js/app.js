$(document).ready(function(){

  $('#blogpostswrap').hide();

  $('.blog-link').on('click', function(event){
    event.preventDefault();
    $('#blogpostswrap').animate({
      height: [ "toggle", "swing" ],
      opacity: "toggle"
      }, 500, "linear");
  });

});