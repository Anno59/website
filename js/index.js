/**
 * 首页渲染动画
 */
function beginAni() {
    $('.bg').mousemove(function (e) {
        var x=Math.ceil(e.clientX/-20);
        var y=Math.ceil(e.clientY/-20);
        $(this).css('transform','translate('+x+'px,'+y+'px)');
    })
    $('.nav').addClass('ani-nav');
    $('.icon-reorder').addClass('ani-nav');
    $('.header-h1').addClass('ani-header-h1');
    $('.header-h2').addClass('ani-header-h23');
    $('.header-h3').addClass('ani-header-h23');
    $('.prev').addClass('ani-header-span-prev');
    $('.next').addClass('ani-header-span-next');
}
function countUp() {
    if($('span').html()!=0) return;
    var count1=0,count2=0,count3=0;
    var interval1=setInterval(function () {
        if(count1>2000) clearInterval(interval1);
        count1=count1+Math.ceil(201-count1/10);
        $('span').eq(0).html(count1);
    },50);
    var interval2=setInterval(function () {
        if(count2>3000) clearInterval(interval2);
        count2=count2+Math.ceil(301-count2/10);
        $('span').eq(1).html(count2);
    },45);
    var interval3=setInterval(function () {
        if(count3>1000) clearInterval(interval3);
        count3=count3+Math.ceil(121-count3/10);
        $('span').eq(2).html(count3);
    },115);
}
function minNav(){
    $('.icon-reorder').click(function () {
        $(this).hasClass('on')?$(this).removeClass('on'):$(this).addClass('on');
        $('.min-nav').css('animationName')!='ani-show'?$('.min-nav').css('animationName','ani-show'):$('.min-nav').css('animationName','ani-hidden')
    })
    $(window).resize(function () {
        if($(this).width()>632){
            $('.min-nav').css('animationName','none');
            $('.icon-reorder').css({'opacity':'1','animationName':'none'}).removeClass('on');
        };
    });
}
function allAni() {
    /**
     * 判断滚动条位置
     */
    var pos=$(window).scrollTop();
    if(pos>470&&pos<1290){
        $('.section1>div').eq(0).addClass('ani-section1-div1');
        $('.section1>div').eq(1).addClass('ani-section1-div2');
        $('.section1>div').eq(2).addClass('ani-section1-div3');
        $('.section1>div').eq(3).addClass('ani-section1-div4');
    }
    else if(pos>830&&pos<1610){
        $('.section1>div').eq(0).addClass('ani-section1-div1');
        $('.section1>div').eq(1).addClass('ani-section1-div2');
        $('.section1>div').eq(2).addClass('ani-section1-div3');
        $('.section1>div').eq(3).addClass('ani-section1-div4');
        $('.section2>div>p').addClass('ani-section2-h2p');
        countUp();
    }
    else if(pos>1900&&pos<2400){
        $('.section1>div').eq(0).addClass('ani-section1-div1');
        $('.section1>div').eq(1).addClass('ani-section1-div2');
        $('.section1>div').eq(2).addClass('ani-section1-div3');
        $('.section1>div').eq(3).addClass('ani-section1-div4');
        $('.section2>div>p').addClass('ani-section2-h2p');
        countUp();
        $('.section3>div:even').addClass('ani-section3-div13');
        $('.section3>div:odd').addClass('ani-section3-div24');
    }
    else if(pos>2410){
        $('.section1>div').eq(0).addClass('ani-section1-div1');
        $('.section1>div').eq(1).addClass('ani-section1-div2');
        $('.section1>div').eq(2).addClass('ani-section1-div3');
        $('.section1>div').eq(3).addClass('ani-section1-div4');
        $('.section2>div>p').addClass('ani-section2-h2p');
        countUp();
        $('.section3>div:even').addClass('ani-section3-div13');
        $('.section3>div:odd').addClass('ani-section3-div24');
    }
    /**
     * 绑定滚动事件
     */
    $(window).scroll(function () {
        var e=$(window).scrollTop();
        if(e>200&&e<470){
            $('.section1>div').eq(0).addClass('ani-section1-div1');
            $('.section1>div').eq(1).addClass('ani-section1-div2');
        }
        else if((e>470&&e<800)){
            $('.section1>div').eq(2).addClass('ani-section1-div3');
            $('.section1>div').eq(3).addClass('ani-section1-div4');
        }
        else if(e>830&&e<1380){
            $('.section2>div>p').addClass('ani-section2-h2p');
            countUp();
        }
        else if(e>1430&&e<1680){
            $('.section3>div').eq(0).addClass('ani-section3-div13');
            $('.section3>div').eq(1).addClass('ani-section3-div24');
        }
        else if(e>1690&&e<2220){
            $('.section3>div').eq(2).addClass('ani-section3-div13');
            $('.section3>div').eq(3).addClass('ani-section3-div24');
        }
        else if(e>2220){
            $('.left').addClass('ani-section1-div1');
            $('.right').addClass('ani-header-h23');
        }
    });
    /**
     * 绑定鼠标事件
     */
}
$(function () {
    beginAni();
    allAni();
    minNav();
});
