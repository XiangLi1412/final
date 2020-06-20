function register(){
	alert("可以正常註冊喔!!!");
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