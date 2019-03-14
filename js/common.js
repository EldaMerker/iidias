$(function(){

var position = $(".conts").offset().top;

$('#move-top-btn').click(function(){
    $("html,body").animate({
        scrollTop : position
    }, {
        queue : false
    });
});


});


$(function(){

var pos = $(".iidias-wrapper").offset().top;

$('#scroll-btn img').click(function(){
    $("html,body").animate({
        scrollTop : pos
    }, {
        queue : false
    });
});


});
