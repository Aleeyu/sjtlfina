if(window.sessionStorage[1]==="qys"){
    $(".box").html(`<div class="guanli">
        <div class="news" style="display:block">
        <h1>新闻管理:</h1>
        <hr style="margin-top:20px;">
            <div class="news-g">
                <form action="../php/newsadd.php" method="post" enctype="multipart/form-data">
                    <p>选择图片：</p><input type="file" name="img" id="n-img" value="">
                    <p>标题：</p><input type="text" name="title" id="n-title" placeholder="建议38-50个汉字之间">
                    <p>新闻内容:</p> <textarea id="xwsr" placeholder="1000字左右" name="msg" id="n-msg" cols="30" rows="10"></textarea>
                    
                    <div class="tj fbxw"><span>已经输入：0字</span><input type="submit" value="发布新闻"></div>
                </form>
            </div>
            <div class="new-list neww-list">
               
            </div>
        </div>
    
        <div class="anli" style="display:none">
        <h1>案例管理</h1>
        <hr style="margin-top:20px;">
            <div class="anli-g">
                <form action="../php/anliadd.php" method="post" enctype="multipart/form-data">
                    <p>选择图片：</p><input type="file" name="img[]" id="a-img" value="" multiple="multiple">
                    <p>标题：</p><input type="text" name="title" id="a-title" placeholder="不能超过11个字">
                    <p>时间：</p><input type="text" name="timee" id="a-title" placeholder="2015.6-2015-9">
                    <p>案例分类: </p>
                    <p class="leibie"><label>暖气:</label><input type="radio" name="lei" id="" value="nq"></p>
                    <p class="leibie"><label>空调:</label><input type="radio" name="lei" id="" value="kt"></p>
                    <p class="leibie"><label>新风:</label><input type="radio" name="lei" id="" value="xf"></p>
                    <p class="leibie"><label>净水:</label><input type="radio" name="lei" id="" value="js"></p>
                    <p>案例描述: </p>
                    <textarea id="allfs" placeholder="不超过450个字" name="msg" id="a-msg" cols="30" rows="10"></textarea>
                    <div class="tj fbal"><span>已经输入：0字</span><input type="submit" value="发布案例"></div>
                </form>
            </div>
            <div class="new-list an-list">
                
            </div>
        </div>
        <div class="liuyan" style="display:none">
        <h1>留言管理</h1>
        
        </div>
</div>`)
$.get('../php/selnews.php',{},function(data) {
  var info=$.parseJSON(data);
    for(var i=0;i<info.length;i++){
        var div=`<div class="newitem">
                    <p>${info[i].timee}</p>
                    <p>标题：${info[i].title}</p>
                    <div class="btn" data-i=${info[i].id} data-pic=${info[i].img}>x</div>
                </div>`;
        $(".neww-list").append(div);
    }
});
///加载案例列表
$.get('../php/selanli.php',{},function(data) {
    var info=$.parseJSON(data);
    for(var i=0;i<info.length;i++){

        var div=`<div class="newitem">
                    <p>${info[i].timee}</p>
                    <p>${info[i].title}</p>
                    <div class="btn" data-i=${info[i].id} data-pic=${info[i].img}>x</div>
                </div>`;
        $(".an-list").append(div);
    }
});
///加载留言列表
$.get('../php/selmsg.php',{},function(data) {
    var info=$.parseJSON(data);
    for(var i=0;i<info.length;i++){
        var div=`<div class="liuyanitem">
            <div class="newitem">
                    <p>${info[i].timee}</p>
                    <p>姓名：${info[i].username}</p>
                    <p>电话号码：${info[i].phone}</p>
                    <div class="btn" data-i=${info[i].id}>x</div>
            </div>
            <div class="ite-msg">
                留言内容：<br>&nbsp;&nbsp;&nbsp;${info[i].message}
            </div>
            </div>`;
        $(".liuyan").append(div);
    }
});
}else{
    $(".box").html("");
};
///////////////////////tab切换选项卡
$(".sidenav ul li").click(function(event) {
    var data=$(this).attr('data-n');
    $(this).addClass('active').siblings().removeClass('active');
    $(data).show().siblings("div").hide();
});
/////////////////////////////
//获取当前时间的函数
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
///////////////////新闻删除功能
$(".neww-list").on('click', '.btn', function(event) {
    var id=$(this).attr('data-i');
    var imgg=$(this).attr('data-pic');
       var ele=$(this).parent();
    $.post('../php/delnews.php',{id:id,img:imgg}, function(data) {
        if(data=="success"){
            ele.slideUp(300);
        console.log("删除成功");
       }else if(data=="faild"){
        alert("删除失败，你操作太快了");
        window.location.reload();
       }else{
        alert("删除失败，请联系管理员");
       }
       
    });
});
///////////////////案例删除功能
$(".an-list").on('click', '.btn', function(event) {
    var id=$(this).attr('data-i');
    var img=$(this).attr('data-pic');
    var ele=$(this).parent();
    $.post('../php/delanli.php', {id:id,pic:img}, function(data) {
        if(data=="success"){
            ele.slideUp(300);
        console.log("删除成功");
       }else if(data=="faild"){
        alert("删除失败，你操作太快了");
        window.location.reload();
       }else{
        alert("删除失败，联系管理员");
       }
    });
});
///////////////////留言删除功能
$(".liuyan").on('click', '.btn', function(event) {
var id=$(this).attr('data-i');
var ele=$(this).parent().parent();
    $.post('../php/delmsg.php', {id:id}, function(data) {
        if(data=="success"){
            ele.slideUp(300);
       }else if(data=="faild"){
        alert("删除失败，你操作太快了");
        window.location.reload();
       }else{
        alert("删除失败，请联系管理员");
        window.location.reload();
       }
    });
});
////////////////////////
word('#allfs',450);
word('#xwsr',1000);
function word(ele,numm){
    $(".box").on('keyup',ele, function(event){
    var num=parseInt($(this).val().length);
    $(this).next().children('span').html(`你已经输入${num}个字,你还可以输入${numm-num}个字`);
    
});
};
