$(function () {
    $('.section1 i').each(function(v,o){
        $(o).click(function () {
            $('.section1 div').css('opacity','0').eq(v).css('opacity','1');
            $('.section1 i').attr('class','icon-circle-blank');
            $(this).attr('class','icon-circle');
        });
    })
})