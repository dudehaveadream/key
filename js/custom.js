$(document).ready(function(){
  var $btn = $('.search-btn'),
      $inputWrap = $('.search-input_wrap'),
      $body = $('body');

  $btn.on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('show-input');
  });

  $body.on('click', function(){
    $inputWrap.removeClass('show-input');
  });

  $inputWrap.on('click', function(){
    return false;
  })
  
});