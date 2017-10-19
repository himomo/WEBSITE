function loginClick () {
	var xmlhttp;
	var user = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	if (window.XMLHttpRequest) {
		//IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	}else {
		 // IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var json = xmlhttp.responseText;
			var jsons = eval('('+json+')');
			var userName = jsons.userName;
			var password = jsons.password;
			console.log(userName);
			if (userName == user && password == pwd) {
				alert("登录成功");
			}
		}
	}
	xmlhttp.open("POST","https://easy-mock.com/mock/59c47cdfe0dc663341b42c06/example/login",true);
	xmlhttp.send();
}