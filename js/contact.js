$(function () {
    $('input.name').blur(function () {
        var flag=this.value.match(/^[\u4E00-\u9FA5a-zA-Z]{2,15}$/g);
        !flag?$(this).next().html('<i class="icon-remove-circle"></i>&nbsp;&nbsp;请输入2-15位字母或汉字'):$(this).next().html('<i class="icon-ok-circle"></i>');
        if($(this).val()=='') $(this).val('姓名');
    }).focus(function () {
        if($(this).val()=='姓名') $(this).val('');
    });
    $('.sex i').click(function () {
        $(this).attr('class','icon-circle')
            .next().attr('checked','true').end()
            .siblings().attr('class','icon-circle-blank')
            .next().removeAttr('checked');
    });
    $('input.email').blur(function () {
        var flag=this.value.match(/^\w{2,15}@\w+\.[a-zA-Z]+$/g);
        !flag?$(this).next().html('<i class="icon-remove-circle"></i>&nbsp;&nbsp;请输入正确的邮箱格式，如：xxxx@xxx.xxx'):$(this).next().html('<i class="icon-ok-circle"></i>');
        if($(this).val()=='') $(this).val('邮箱');
    }).focus(function () {
        if($(this).val()=='邮箱') $(this).val('');
    });
    $('input.project').blur(function () {
        var flag=this.value.match(/^.+/g);
        !flag?$(this).next().html('<i class="icon-remove-circle"></i>&nbsp;&nbsp;请输入一个项目名称'):$(this).next().html('<i class="icon-ok-circle"></i>');
        if($(this).val()=='') $(this).val('项目');
    }).focus(function () {
        if($(this).val()=='项目') $(this).val('');
    });
    $('textarea.content').blur(function () {
        var flag=this.value.match(/^[\u4E00-\u9FA5a-zA-Z.]+/g);
        !flag?$(this).next().html('<i class="icon-remove-circle"></i>&nbsp;&nbsp;请输入描述该项目'):$(this).next().html('<i class="icon-ok-circle"></i>');
        if($(this).val()=='') $(this).val('内容');
    }).focus(function () {
        if($(this).val()=='内容') $(this).val('');
    });
});
