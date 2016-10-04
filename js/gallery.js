$(function () {
    $('img').each(function (i,o) {
        $(o).click(function () {
            $('.lighting-box-pic img').attr('src','images/b'+i+'.jpg');
            $('.lighting-box').height($(document).height()).css('display','block');
            var height=Math.ceil(($(window).height()-$('.lighting-box-pic img').height())/2);
            var width=Math.ceil(($(window).width()-$('.lighting-box-pic img').width())/2);
            $('.lighting-box-pic').css({
                'top':height+'px',
                'left':width+'px',
                'opacity':'1',
                'zIndex':'6'
            });
            $(window).resize(function () {
                $('.lighting-box-pic').css({
                    'display':'block','top':Math.ceil(($(window).height()-$('.lighting-box-pic img').height())/2)+'px',
                    'left':Math.ceil(($(window).width()-$('.lighting-box-pic img').width())/2)+'px'
                });
            });
        });
    });
    $('.lighting-box').click(function () {
        $(this).css('display','none').next().css({'opacity':'0','zIndex':0});
    });
    $('.lighting-box-pic').click(function () {
        $(this).css({'opacity':'0','zIndex':0}).prev().css('display','none');
    });
})
