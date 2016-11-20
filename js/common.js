 ////////////////////响应式导航//////////////
 $(".small button").click(function(event) {
    $(".small ul").slideToggle(500);
});
///////////////////////////////////////////////
tab($(".siji"));
tab($(".sol"));
function tab(elee){
  elee.click(function(event) {
  $(this).addClass('active').siblings().removeClass('active');
  var ele=$(this).attr("data");
  $(ele).stop().fadeIn(300).siblings().stop().fadeOut(300);
});
};
////////////////////侧边联系///////////////////
sidebar('.side-phone','mouseover','-14px');
sidebar('.side-phone','mouseout','100px');
sidebar('.side-qq','mouseover','0px');
sidebar('.side-qq','mouseout','100px');
function sidebar(ele,mouse,top){
    $(".side-bar").on(mouse, ele, function(event) {
    $(this).stop().animate({
        left: top},
        300);
});
}
///////////////////////
/////////////////////
TOP($(".box"),'mouseover','0px');
TOP($(".box"),'mouseout','180px');
function TOP(ele,mouse,top){
		ele.on(mouse,'.itemss',function(event) {
	$(this).children().children('span').stop().animate({
		top: top,
		},
		300);
	
});
};
///////////////////////////表单
////////////////////////////////////////表单前端验证////////////////////////
$("#name").blur(function(){
  var name=$("#name").val();
  valiName(name);
})
$("#name").focus(function(){
  var name=$("#name").val("");
  
})
function valiName(name){
  if(/^[\u4e00-\u9fa5]{2,4}$/.test(name)){
    return true;
  }else{//否则
    $("#name").val('请填写正确格式');
    return false;
  }
}
$("#phone").blur(function(){
  var name=$("#phone").val();
  valiphone(name);
})
$("#phone").focus(function(){
  var name=$("#phone").val("");
})
function valiphone(name){
  if(/^1[3578]\d{9}$/.test(name)){
    return true;
  }else{//否则
    $("#phone").val('请填写正确格式');
    return false;
  }
}
$("#message").blur(function(){
  var name=$("#message").val();
  valimsg(name);
})
$("#message").focus(function(){
  var name=$("#message").val("");
})
function valimsg(name){
  if(name!==""){
    return true;
  }else{//否则
    $("#message").attr({
      placeholder: '不能为空'
    });
    return false;
  }
}
$(".sub").click(function(event) {
  var NAME=valiName($("#name").val());
  var PHONE=valiphone($("#phone").val());
  var MSG=valimsg($("#message").val());
  if(!(NAME&&PHONE&&MSG)){
      event.preventDefault();
      alert("填写错误");
      }else{
        var t=confirm("填写正确，马上发送留言吗");
        if(t){
          AJAX();
        };
      }
});
 //////////////////ajax表单提交//////////////
 function AJAX(){
    var time=getNowFormatDate();
     var name=$("#name").val();
     var phone=$("#phone").val();
     var message=$("#message").val();
     var pat=window.location.pathname.slice(-6,-5);
     var urll=null;
     if(pat=="t"){
      urll='../php/msgadd.php';
     }else if(pat="x"){
      urll='php/msgadd.php';
     }
    $.post(urll, {username: name,phone:phone,message:message,timee:time}, function(data) {
        if(data=="success"){
            alert("提交成功")
        }else if(data=="faild"){
            alert("提交失败，请联系管理员");
        }else{
          alert("请联系管理员");
        }
    });
 };
 //////////////////////////////获取时间
 function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}