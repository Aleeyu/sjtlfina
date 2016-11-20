var index=0,timeout,wid;
$(function(){
	wid= parseInt($(document.body).width()); 
	resetPicPosition();
	timeout=setInterval(movePic,2000);
	$(".banner").mouseenter(function(){
		 clearInterval(timeout);
	}).mouseleave(function(){
		timeout=setInterval(movePic,2000);
	});
	$(".btnRight").click(function(){
		movePic();
	});
	$(".btnLeft").click(function(){
		moveRightPic();
	});
	$(".lunBtn div").click(function(){
	    	var curIndex=$(this).index();
			var imgs=$(".banner ul li");
			 
			//遍历设置每一个图片的滚动位置
			imgs.each(function(index, element) {
				//求取 轮播图片 最终滚动的位置
                var x=index-curIndex;
				$(element).animate({"left":x*wid},600);
				
            });
			$(".lunBtn div").eq(curIndex).addClass("cur1").siblings().removeClass("cur1");
			
	});
	
});

function resetPicPosition(){

    $(".banner ul li").each(function(index, element) {
        $(element).css("left",index*wid);

    });	
	index=0;
		//重置位置 让轮播的第一个小按钮 设置为蓝色
	$(".lunBtn div").eq(index).addClass("cur1").siblings().removeClass("cur1");
}


function setPicPosition(){
	var i=1-$(".banner ul li").length;
    $(".banner ul li").each(function(index, element) {
        $(element).css("left",i*wid);
		i++;
    });	
	index=0;
		//重置位置 让轮播的第一个小按钮 设置为蓝色
	$(".lunBtn div").eq(index).addClass("cur1").siblings().removeClass("cur1");
}
function movePic(){

	var imgs=$(".banner ul li");
     if(!imgs.is(":animated")){
			if(imgs.eq(imgs.length-1).css("left")=="0px")
				resetPicPosition();
			imgs.each(function(index, element) {
				 //获取元素当前left位置
				 var leftx=parseInt($(element).css("left"))-wid
				 //alert(leftx);
				 $(element).animate({"left":leftx},2000);
			});
			index++;
			//设置移动到最后一张 的时候 让轮播的第一个小按钮 设置为蓝色
			if(index==imgs.length-1) index=0;
			$(".lunBtn div").eq(index).addClass("cur1").siblings().removeClass("cur1");
	 }

}
function moveRightPic(){
	
	var imgs=$(".banner ul li");
	if(!imgs.is(":animated")){	
		if(imgs.eq(0).css("left")=="0px")
			setPicPosition();
		imgs.each(function(index, element) {
			 //获取元素当前left位置
			 var leftx=parseInt($(element).css("left"))+wid
			 //alert(leftx);
			 $(element).animate({"left":leftx},600);
		});
		index--;
		//设置移动到最后一张 的时候 让轮播的第一个小按钮 设置为蓝色
		if(index<0) index=imgs.length-2;
		$(".lunBtn div").eq(index).addClass("cur1").siblings().removeClass("cur1");
	}
}