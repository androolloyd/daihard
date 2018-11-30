

$(function() {
  $('ul.topics a').click(function(){
    var current_href = '';
    if($(this).closest('ul').prev('a').length){
      current_href = $(this).closest('ul').prev('a').prop('hash');
    }else{
      current_href = $(this).prop('hash');
    }
    $('.top-navigation li a').removeClass('active');
    $('.top-navigation li a[href="' + current_href + '"]').addClass('active');
  });
});