function toPri_Index(){
	// 另開分頁喔
	window.open("../../index.html");
}

function toMana_Good(){
	window.location.href="manage_good.html";
}

function toMana_Member(){
	window.location.href="manage_member.html";
}

function toMana_Employee(){
	window.location.href="manage_employee.html";
}

function toMana_Order(){
	window.location.href="manage_order.html";
}

function toMana_Comment(){
	window.location.href="manage_comment.html";
}

function mana_SignIn(){
	window.location.href="../signIn.html";
}
// 回登入畫面
function to_SignIn(){
	window.location.href="../../page/signIn.html";
}


// 時間
setInterval(function(){
	
	var today = new Date();
	var hour = today.getHours()<10 ? "0"+today.getHours() : today.getHours().toString();
	var minute = today.getMinutes()<10 ? "0"+today.getMinutes() : today.getMinutes().toString();
	
	var hrMin = document.getElementById("hr_min");
	hrMin.innerHTML = `${hour}:${minute}`;

}, 1000);

// setInterval(function(){
	// var today = new Date();
	// var year = today.getFullYear().toString();
	// var month = (today.getMonth()+1)<10 ? "0"+(today.getMonth()+1) :(today.getMonth()+1).toString();
	// var date = today.getDate()<10 ? "0"+today.getDate() : today.getMonth().toString();
	// var hour = today.getHours()<10 ? "0"+today.getHours() : today.getHours().toString();
	// var minute = today.getMinutes()<10 ? "0"+today.getMinutes() : today.getMinutes().toString();
	// var second = today.getSeconds()<10 ? "0"+today.getSeconds() : today.getSeconds().toString();


	// var time = document.getElementById("time");
	// time.innerHTML = `目前時間:西元${year}年${month}月${date}日${hour}時${minute}分${second}秒`;
// }, 1000);



