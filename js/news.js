var DATA=null;
getnew();
 function getnew(){
    $.get('../php/selnews.php',{},function(data){//时间需要处理，展示没有处理9.10号
      DATA=$.parseJSON(data);
      console.log(data);
      var datalis=$.parseJSON(data);
      console.log(datalis);
     for (var i = 0;i<6;i++) {
         var inew=`<div class="new-list cl">
      <div class="list-time lf">${datalis[i].timee.slice(6)}<br>${datalis[i].timee.slice(0,5)}</div>
      <div class="list-content lf">
        <p>${datalis[i].msg.slice(0,42)}<br>${datalis[i].msg.slice(42,180)}.......</p>
        <a href="newsmore.html#${datalis[i].id}">查看&gt;&gt;</a>
      </div>
    </div>`
    $(".new").append(inew);
     }
     for(var i=0,j=0;i<Math.ceil(datalis.length/6);i++){
        j++;
      var btn=`<b  class="btn" data-p="8" data-s="1" data-e="1">${j}</b>`
     $(".control").append(btn);
      $($(".btn")[i]).attr('data-s',i*6);
      $($(".btn")[i]).attr('data-e',i*6+6);
     };
     $(".btn").first().addClass('act');
     var fnew=`<div class="imgnow">
  <h1>最新新闻：</h1>
    <img src=${datalis[0].img} alt="">
  </div>
  <div class="nowtitle cl"><h2 class="lf">${datalis[0].title.slice(0,20)}......</h2><span class="rt">${datalis[0].timee}</span></div>
  <div class="nowcontent">
    <p>${datalis[0].msg.slice(0,200)}......</p>
  </div>`
  $(".newleft").append(fnew);
 });
 }

 $(".control").on("click","b",function(event) {
  event.preventDefault();
   $(this).addClass('act').siblings().removeClass('act');
   $(".new").empty();
   var sta=$(this).attr('data-s');
   var en=$(this).attr('data-e');
    for(var i=0;i<$(".btn").length;i++){
      $($(".btn")[i]).attr('data-p',i);
      $($(".btn")[i]).attr('data-s',i*6);
        };
        var datali=DATA.slice(sta,en);
       for (var i = 0;i<6;i++) {
         var inew=`<div class="new-list cl">
      <div class="list-time lf">25<br>${datali[i].timee}</div>
      <div class="list-content lf">
        <p>${datali[i].msg.slice(0,42)}<br>${datali[i].msg.slice(42,180)}.......</p>
        <a href="newsmore.html#${datali[i].id}">查看&gt;&gt;</a>
      </div>
    </div>`
    $(".new").append(inew);
     }
    });
