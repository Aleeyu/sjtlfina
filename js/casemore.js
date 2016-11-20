var KEY=window.location.hash.slice(1);
loadinfo(KEY);
function loadinfo(KEY){
    $(".img-slist").empty();
    $.ajax({
    url: '../php/casemore.php',
    type: 'POST',
    data: {id:KEY+""},
    beforeSend:function(){
        $('.load').css('display', 'block');
    },
    success:function(data){
        $('.load').css('display', 'none');
        var datalist=$.parseJSON(data);
    var img=datalist[0].img.split(",");
    for(var i=0;i<img.length;i++){
        
        $(".img-list").append(`<li><img src='${img[i]}' alt=""></li>`);
        $(".img-slist").append(`<li><img src='${img[i]}' alt=""></li>`);
    }
    $(".big > img").attr({
        src: img[0]
    });
    $(".img-list").css('width', img.length*135+"px");
    $(".img-list").first().addClass('active');
    $(".title>h2").html(datalist[0].title);
    $('.name span').html(datalist[0].title.slice(0, 12));
    $(".xqing p").html(datalist[0].msg);
    $(".time h3 span").html(datalist[0].timee)
    $(".next-item").attr({
        num: datalist[1].id
    });
    $(".next-item span").html(datalist[1].title)
    $(".prev-item").attr({
        num: datalist[2].id
    });
    $(".prev-item span").html(datalist[2].title);
    
    $(".img-list li img").first().addClass('active');
    }
})
.done(function() {
    console.log("success");
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});
};

$(".prev-item").on('click', function(event) {
    $(".img-list").empty();
    var url=$(this).attr("num");
    loadinfo(url);
});
$(".next-item").on('click', function(event) {
    $(".img-list").empty();
    var url=$(this).attr("num");
    loadinfo(url);
});

/////////////////
////上一张按钮//
////////////////////
$(".prev").click(function() {
    if(parseInt($(".list-box ul").css("left"))>=0){
    $(".list-box ul").css({
        left: 0
    });
}else{move(1)}

});
/////////////////
////下一张按钮//
////////////////////////////////////
$(".next").click(function() {
    var ab=-parseInt($(".list-box ul").css("left"));
    var lenth=parseInt($(".list-box ul").css("width"));
    if((lenth-ab)<=540){
    $(".list-box ul").css({
        left:$(".list-box ul").css("left")
    });
}else if((lenth-ab)>540){move(-1)}
});
/////////////////
////按钮切换函数//
////////////////////
function move(dir){
    var dis=parseInt($(".list-box ul").css("left"));
    var len=$(".list-box ul li").length;
    var w=len*135;
    $(".list-box ul").stop().animate({left: dis+dir*135+"px"}, 100);
};
/////////////////
////小图变大图//
////////////////////
$(".img-list").on('click', 'img', function(event) {
    event.preventDefault();
    $(this).addClass('active').parent().siblings().children('img').removeClass('active');
    var src=$(this).attr("src");
    $(".big img").attr("src",src);
});

