$(document).ready(function() {
    $cur = $("#home");

    $(".navbar-nav li").click( function() {
        var name = $(this).attr("id");
        $("[name='" + $cur.attr("id") + "']").hide();
        $cur.removeClass('active');
        $cur = $(this);
        $cur.addClass('active');

        if( name == "home" || name == "call" || name == "date" || name == "committee" ) {
            $("#img2").hide() ;
            $("#img3").hide() ;
            $("#img1").show() ;
        }
        else if( name == "past" || name == "contact" ) {
            $("#img3").hide() ;
            $("#img1").hide() ;
            $("#img2").show() ;
        }
        else {
            $("#img1").hide() ;
            $("#img2").hide() ;
            $("#img3").show() ;
        }

        if( name == "venue" ) {
            loadmap();
        }

        if( name == "acc") {
            loadmap_acc();
        }

        $("[name='" + $cur.attr("id") + "']").fadeIn("slow") ;
    });
});

/* workshop venue map
function loadmap() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=yIyMbumSqkcuRseHnvK2MASp&callback=init";
    document.body.appendChild(script);
}
function init() {
    venure_address();
}
function venure_address() {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(118.969359,32.116719);   // 创建点坐标
    var marker = new BMap.Marker(point);                // 创建标注
    map.addOverlay(marker);
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom();                        //启用滚轮放大缩小

    var sContent =
        "<div><p style='margin:0 0 5px 0;padding:0.2em 0'>计算机科学与技术楼</p>" +
        "<img src='image/cc.jpg'/>" +
        "</div>";
    var opts = {
        width : 100,  // 信息窗口宽度
        height: 180,  // 信息窗口高度
        enableMessage:false
    }
    var infoWindow = new BMap.InfoWindow(sContent, opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point);
    marker.addEventListener("click", function(){
        map.openInfoWindow(infoWindow,point);
    });
}
*/


/* accommodation map
function loadmap_acc() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=yIyMbumSqkcuRseHnvK2MASp&callback=init1";
    document.body.appendChild(script);
}
function init1() {
    accommodation();
}
function accommodation() {
    var map = new BMap.Map("accmap");
    var point_center = new BMap.Point(118.965608,32.122608);
    var point_venue = new BMap.Point(118.969359,32.116719);
    map.centerAndZoom(point_center,15);
    map.enableScrollWheelZoom();

    // maker_venue
    var marker = new BMap.Marker(point_venue);
    map.addOverlay(marker);
    var label = new BMap.Label("会议地点：计算机楼",{offset:new BMap.Size(20,-10)});
    marker.setLabel(label);

    // maker_phd
    var point_phd = new BMap.Point(118.959545,32.130426);
    var marker_phd = new BMap.Marker(point_phd);
    map.addOverlay(marker_phd);
    var label = new BMap.Label("南京大学留学生公寓 21 幢",{offset:new BMap.Size(20,-10)});
    marker_phd.setLabel(label);

    // maker_yinzun
    var point_yinzun = new BMap.Point(118.965595,32.114066);
    var maker_yinzun = new BMap.Marker(point_yinzun);
    map.addOverlay(maker_yinzun);
    var label = new BMap.Label("英尊假日酒店",{offset:new BMap.Size(-75,-10)});
    maker_yinzun.setLabel(label);

    // maker_yuening
    var point_yuening = new BMap.Point(118.969512,32.114509);
    var maker_yuening = new BMap.Marker(point_yuening);
    map.addOverlay(maker_yuening);
    var label = new BMap.Label("悦宁宾馆",{offset:new BMap.Size(20,-10)});
    maker_yuening.setLabel(label);

    // maker_mian
    var point_mian = new BMap.Point(118.969121,32.114481);
    var maker_mian = new BMap.Marker(point_mian);
    map.addOverlay(maker_mian);
    var label = new BMap.Label("棉铭快捷酒店",{offset:new BMap.Size(0,25)});
    maker_mian.setLabel(label);
}
*/