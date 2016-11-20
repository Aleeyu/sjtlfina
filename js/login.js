jQuery(function($){
    var user_id;
    $("#loginsubmit").click(function(event){
       event.preventDefault();
        var requestData = {
            "user" : $("#user").val(),
            "pwd" : $("#pwd").val()
        }
        $.post($("#formlogin").attr("action"),requestData,function(response){
            if(response.code == 0){
                alert('用户名或者密码错误');
            }else{
                alert("欢迎您,今天您开心吗？")
                window.sessionStorage.setItem(response.id,response.name);
                user_id = response.id;
                var user_name = window.sessionStorage.getItem(user_id);
                if(user_name){
                    window.location.href="guanli.html";
                }else{
                    alert('请重新登录');
                }
            }
        },"json");
    });
});