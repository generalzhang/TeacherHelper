$(function(){
	$('#login').click(function (argument) {
		$.ajax({
		type: "POST",
        contentType:"application/json",
        url:"http://localhost:3388/HelloWorld",
        crossDomain: true,  
        data:{
        	username: $("input[name='nick_name']").val(),
            password: $("input[name='user_password']").val(),
        },
        dataType:'json',
        success:function(data){ 
            //从后台取到数据，存到本地是cookie?还是localStorge
            //  
        	alert("成功");                 
            alert(data.name);
            $('#log-reg-box').replaceWith('<p class="text-right">欢迎你'+data.name+','+data.password+'</p>');
            $('#login_modal').modal('hide');
        },  
		error:function(){
			alert("error");
		//请求失败的回调函数，在这里你可以写你想要的逻辑，比如提示
		}
		});
        return false;
	});
}());


