$(function(){
    // $('a').click(function(){
    //             $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top  )},1000);
    //             return false;
    // });
    //1.
    //for web
    var $root = $('html, body');
    $('#nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 800, function () {
            window.location.hash = href;
        });
        return false;
    });
    // for phone
    $('#navPanel a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 800, function () {
            window.location.hash = href;
        });
        // return false;
    });
    // topBut
    $('#topBtn').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 800, function () {
            window.location.hash = href;
        });
        return false;
    });
//head、topBut and logo
    var scrolltop = new Array();
    var index = 0;
    scrolltop[0] = 0;
    $(document).scroll(function(){
        if ($(document).scrollTop()<=0){
            // $("#header").attr("style","");
            // $("#logo").attr("style","");
            $("#topBtn").attr("style","display:none");
        }
        index ++;
        scrolltop[index] = $(document).scrollTop();
        if (scrolltop[index] > scrolltop[index-1]) {
            // $("#header").attr("style","  color:black; position: fixed;\n" +
            //     "    top: 0;\n" +
            //     "    left: 0;\n" +
            //     "    width: 100%;\n" +
            //     "    height: 3.25rem;\n" +
            //     "    line-height: 3.25rem;\n" +
            //     "    background-color: #ffffff;\n" +
            //     "    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.125);\n" +
            //     "    cursor: default;\n" +
            //     "    z-index: 10000;font-size: 1em");
            // $("#logo").attr("style","color:black;");
             $("#topBtn").attr("style","display:inherit");
            // console.log("scroll down");
        }else{
            // console.log("scroll up");
        };
    })
})
