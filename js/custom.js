$(document).ready(function(){

    // Search func
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
    });

    // Sidebar func
    $('.sidebar-subnav').hide();
    $('.sidebar-nav > li > a').click(function(e){
        $(this).parent().find('.sidebar-subnav').slideToggle();
        $(this).parent().addClass('open');
        $(this).parent().siblings().removeClass('open')
        $(this).parent().siblings().find('.sidebar-subnav').slideUp();
        e.preventDefault();
    });
  
});