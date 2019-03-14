$(function(){



$('.faq-list-item').click(function(){
  var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
    //   $('.box').css({
    //     backgroundImage: $('.question').css('background-image').replace('../images/faq/icon_open.png', '../images/faq/icon_close.png')
    // }
      // $(this).find('question').text('+');
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      // $(this).find('span').text('-');
    }
});
});
