var KEY=window.location.hash.slice(1);
loadinfo(KEY);
/////////////
function loadinfo(KEY){
    $.ajax({
    url: '../php/newsmore.php',
    type: 'POST',
    data: {id:KEY},
    beforeSend:function(){
        $('.load').css('display', 'block');
    },
    success:function(data){
        $('.load').css('display', 'none');
        var datalist=$.parseJSON(data);
    $(".title h2").html(datalist[0].title);
     $(".title h4").html("发布时间："+datalist[0].timee);
     $(".p0").html(datalist[0].msg.slice(0, 232));
     $(".p4").html(datalist[0].msg.slice(232, 464));
     $(".img img").attr('src',datalist[0].img);
     $(".p1").html(datalist[0].msg.slice(464, 696));
     $(".p2").html(datalist[0].msg.slice(696, 867));
     $(".p3").html(datalist[0].msg.slice(867, 1055));
     $(".tiu").html("<a herf='"+datalist[1].id+"' class='next-item btbt'>下一条</a><span >"+datalist[1].title+"</span>");
     $(".tid").html("<a herf='"+datalist[2].id+"' class='prev-item btbt'>上一条</a><span >"+datalist[2].title+"</span>");
    }
})
.done(function(data) {
    console.log("success");
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});
};
//////////////////////////////下一个案例切换/////////////
$(".tiu").on('click', 'a', function(event) {
    var url=$(this).attr("herf");
    loadinfo(url);
});
$(".tid").on('click', 'a', function(event) {
    var url=$(this).attr("herf");
    loadinfo(url);
});
