// 按下登入按鈕後
function signIn(){
	alert("可以正常登入喔!!!");
}



// 時間
setInterval(function(){
	

	var today = new Date();
	var hour = today.getHours()<10 ? "0"+today.getHours() : today.getHours().toString();
	var minute = today.getMinutes()<10 ? "0"+today.getMinutes() : today.getMinutes().toString();
	
	var hrMin = document.getElementById("hr_min");
	hrMin.innerHTML = `${hour}:${minute}`;


}, 1000);



function to_index(){
	window.location.href="../index.html";
}


// 顯示密碼
function show_paword(){
	var chk1 = document.getElementById("chk1");
	var pass = document.getElementById("pass");
	
	pass.type = chk1.checked ? "text" : "password";

}


var accot = null;
window.localStorage.setItem(accot, " ");


// 記密碼
function rember_accot(){
	var chk1 = document.getElementById("chk1");
	var chk2 = document.getElementById("chk2");
	var accot = document.getElementById("accot");
	var pass = document.getElementById("pass");
	
	pass.type = chk1.checked ? "text" : "password";
	
	localStorage.accot = chk2.checked ? accot.value : "";
	
	if(accot.value == "test@gmail.com" && pass.value == "1234"){
		window.location.href="manage/manage_index.html";
	}else if(accot.value == "member@gmail.com" && pass.value == "1234"){
		alert("登入成功!\n即將前往產品首頁!");
		window.location.href="../index.html";
	}else{
		alert("帳號或密碼錯誤!");
	}
	
}


window.onload = function(){
	var accot = document.getElementById("accot");
	
	accot.value = (typeof localStorage.accot == "undefined") ? "" :localStorage.accot;
};


  



















