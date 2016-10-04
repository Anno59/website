function reset() {
    $('.ie8').css('width',$(window).width());
    var minPos=($(window).width()-$('.min-navtag').width())/2
    $('.min-navtag').css('left',minPos);
}
function click() {
    $('.icon-reorder').click(function () {
        $(this).hasClass('on')?$(this).removeClass('on'):$(this).addClass('on');
        $('.ie8').css('display')!='block'?$('.ie8').css('display','block'):$('.ie8').css('display','none')
    });
    $(window).resize(function () {
        if($(this).width()<632){
            reset();
        };
    });
}
$(function () {
    reset();
    click();
});