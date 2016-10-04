window.onload=function () {
    function getScrollTop(){
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
    var btn = null,
        timer = 0;
    function apendScroll(){
        btn = document.createElement('a');
        btn.href = 'javascript:void(0)';
        btn.className = 'gotop icon-arrow-up';
        btn.style.opacity = '0';
        btn.style.zIndex= '1';
        document.body.appendChild(btn);
    }
    apendScroll();
    window.onscroll = function(){
        btn.style.opacity = getScrollTop() > 300 ? '1' : '0';
    };
    btn.onclick = function(){
        timer = setInterval(function(){
            var scrollTop = getScrollTop();
            var iSpeed = Math.floor(- scrollTop / 8);
            if(scrollTop == 0){
                clearInterval(timer);
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + iSpeed;
        }, 15);
    };
}
