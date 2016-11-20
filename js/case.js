//全局变量，保存每一次请求过来的数据
var DATA=null;
$(".lei-list").on('click', 'li', function(event) {
    $(this).addClass('active').siblings().removeClass('active');
    $(".box").empty();
    $(".btn").remove();
    var key=$(this).attr('data');
    if(key=="nq"){
        loadlist('nq');
        $(".control-group b").attr('data-l', 'nq');
    }else if(key=="kt"){
        loadlist('kt');
        $(".control-group b").attr('data-l', 'kt');
    }else if(key=="js"){
        loadlist('js');
        $(".control-group b").attr('data-l', 'js');
    }else if(key=="xf"){
        loadlist('xf');
        $(".control-group b").attr('data-l', 'xf');
     }
});
////////////////////////////ajax请求暖气数据//////////////////
loadlist('nq');
////////////////////////////ajax请求数据函数封装//////////////////
function loadlist(lei){
$.post('../php/anlist.php',{lei:lei},function(data) {
  DATA=$.parseJSON(data);//每一次请求都改变DATA变量
     var info=$.parseJSON(data);
     for (var i = 0;i<6;i++) {
         var img=info[i].img.split(",")[0];
         var cas=`<div class="item lf itemss">
      <div><img src=${img} alt=""><span><a href="casemore.html#${info[i].id}"><img src="../images/search.png" alt=""></a></span></div>
      <h3>${info[i].title}</h3>
      <em></em>
      <p>${info[i].msg.slice(0,20)}<br>${info[i].msg.slice(20,35)}......</p>
    </div>`
    $(".box").append(cas);
     }
     for(var i=0,j=0;i<Math.ceil(info.length/6);i++){
        j++;
      var btn=`<b  class="btn" data-l=${lei} data-p="8" data-s="1" data-e="1">${j}</b>`
     $(".control-group").append(btn);
      $($(".btn")[i]).attr('data-s',i*6);
      $($(".btn")[i]).attr('data-e',i*6+6);
     };
     $(".btn").first().addClass('act');
 });

$($(".btn")[0]).addClass('act');
};

//保存当前点击的对象
var THIS=$(".btn").first();
/////////////////////////点击翻页去DATA中获取储存的数据
 $(".control-group ").on("click","b",function(event) {
  THIS=$(this);
   $(this).addClass('act').siblings().removeClass('act');
   $(".box").empty();
   var att=$(this).attr('data-l');
   var sta=$(this).attr('data-s');
   var en=$(this).attr('data-e');
   for(var i=0;i<$(".btn").length;i++){
      $($(".btn")[i]).attr('data-p',i);
      $($(".btn")[i]).attr('data-s',i*6);
        };
        var infoin=DATA.slice(sta,en);
       for (var i = 0;i<6;i++) {
         var img=infoin[i].img.split(",")[0];
         var cass=`<div class="item lf itemss">
      <div><img src=${img} alt=""><span><a href="casemore.html#${infoin[i].id}"><img src="../images/search.png" alt=""></a></span></div>
      <h3>${infoin[i].title}</h3>
      <em></em>
      <p>${infoin[i].msg.slice(0,20)}<br>${infoin[i].msg.slice(20,35)}......</p>
    </div>`
    $(".box").append(cass);
     }
});
