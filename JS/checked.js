

	var checkName=function() {
	     document.getElementById("user").innerHTML ="";
	     let name = eval(document.getElementById('username')).value;
	     if (name.length > 20 || name.length < 1)
	        document.getElementById("user").innerHTML = "用户名长度在1-20之间！" ;
	 }
	  var checkPassword = function(){
	    document.getElementById("psword").innerHTML ="";
	    let name = eval(document.getElementById('password')).value;
	    if (name.length > 12 || name.length < 6)
	        document.getElementById("psword").innerHTML="密码长度在6-12之间！" ;
	}

	var checkUserName=function() {
	     document.getElementById("otheruser").innerHTML ="";
	     let name = eval(document.getElementById('otherusername')).value;
	     if (name.length > 20 || name.length < 1)
	        document.getElementById("otheruser").innerHTML = "用户名长度在1-20之间！" ;
	 }
	  var checkOtherPassword = function(){
	    document.getElementById("otpsword").innerHTML ="";
	    let name = eval(document.getElementById('otherpassword')).value;
	    if (name.length > 12 || name.length < 6)
	        document.getElementById("otpsword").innerHTML="密码长度在6-12之间！" ;
	}
	var checkUser = function(){
	    document.getElementById("Othername").innerHTML ="";
	    let name = eval(document.getElementById('User')).value;
	    if (name.length > 4 || name.length < 2)
	        document.getElementById("Othername").innerHTML="名字长度在2-4之间！" ;
	}
	var checkNumber = function(){
	    document.getElementById("schoolNumber").innerHTML ="";
	    let name = eval(document.getElementById('number')).value;
	    if (name.length > 12 || name.length < 12)
	        document.getElementById("schoolNumber").innerHTML="学号的长度为12！" ;
	}
	var checkGrade = function(){
	    document.getElementById("grade").innerHTML ="";
	    let name = eval(document.getElementById('margin')).value;
	    if ( name.length < 2)
	        document.getElementById("grade").innerHTML="专业年级的长度大于2个字符！" ;
	}

	var checkMail = function(){
	    document.getElementById("mail").innerHTML ="";
	    let name = eval(document.getElementById('email')).value;
	     var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
	    if ( !re.test(name))
	        document.getElementById("mail").innerHTML="邮箱格式错误！" ;
	}

	function checkQRPassword() {
		 document.getElementById("qrpsword").innerHTML ="";
		var psword = document.getElementById("otherpassword").value;
		var qrpsword = document.getElementById("QRPassword").value;
		if ( psword == qrpsword) {
			document.getElementById("qrpsword").innerHTML="两次密码相同！" ;
		}
		else {
			document.getElementById("qrpsword").innerHTML="两次密码不相同！" ;
		}
	}
