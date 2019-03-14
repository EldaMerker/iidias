$(function(){

  $('.ranking-list-2017').click(function(){
    var $answer = $(this).find('.result2017');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      }else{
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');

        // ＋、-を画像差し替えにする
      }
  });

$('.ranking-list-item').click(function(){
  var $answer = $(this).find('.result');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');

      // ＋、-を画像差し替えにする
    }
});

$('.analysis2016').click(function(){
  var $answer = $(this).find('.open2016');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      // $(this).find('span').text('+');
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      // $(this).find('span').text('-');

      // ＋、-を画像差し替えにする
    }
});
});
