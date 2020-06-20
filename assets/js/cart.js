// star1.addEventListener("click", function () {
	// star1.style.color = "#ffa500";
	// star2.style.color = "#212529";
	// star3.style.color = "#212529";
	// star4.style.color = "#212529";
	// star5.style.color = "#212529";
// });

var total_all = 2888;
var total_1 = 1580;
var total_2 = 888;
var total_3 = 20;
var total_4 = 20;
var total_5 = 110;
var total_6 = 270;


function ch1(){
	var num1 = document.getElementById("num1");
	var sma1 = document.getElementById("sma1");
	var mege_cout = document.getElementById("mege_cout");
	var totl_cout = document.getElementById("totl_cout");
	
	if(num1.value % 1 != 0){
		alert("請輸入正整數!");
		num1.value = 1;
	}else{
		total_1 = num1.value * 1580;
		sma1.innerHTML = "NT$ " + total_1;
		
		console.log(1+"ok");
	}
	
	total_all = total_1 + total_2 + total_3 + total_4 + total_5 + total_6;
	
	mege_cout.innerHTML = "NT$ " + total_all;
	totl_cout.innerHTML = "NT$ " + total_all;
}

function ch2(){
	var num2 = document.getElementById("num2");
	var sma2 = document.getElementById("sma2");
	var mege_cout = document.getElementById("mege_cout");
	var totl_cout = document.getElementById("totl_cout");
	
	if(num2.value % 1 != 0){
		alert("請輸入正整數!");
		num2.value = 1;
	}else{
		total_2 = num2.value * 888;
		sma2.innerHTML = "NT$ " + total_2;
		
		console.log(2+"ok");
	}
	
	total_all = total_1 + total_2 + total_3 + total_4 + total_5 + total_6;
	
	mege_cout.innerHTML = "NT$ " + total_all;
	totl_cout.innerHTML = "NT$ " + total_all;
}

function ch3(){
	var num3 = document.getElementById("num3");
	var sma3 = document.getElementById("sma3");
	var mege_cout = document.getElementById("mege_cout");
	var totl_cout = document.getElementById("totl_cout");
	
	if(num3.value % 1 != 0){
		alert("請輸入正整數!");
		num3.value = 1;
	}else{
		total_3 = num3.value * 20;
		sma3.innerHTML = "NT$ " + total_3;
		
		console.log(3+"ok");
	}
	
	total_all = total_1 + total_2 + total_3 + total_4 + total_5 + total_6;
	
	mege_cout.innerHTML = "NT$ " + total_all;
	totl_cout.innerHTML = "NT$ " + total_all;
}

function ch4(){
	var num4 = document.getElementById("num4");
	var sma4 = document.getElementById("sma4");
	var mege_cout = document.getElementById("mege_cout");
	var totl_cout = document.getElementById("totl_cout");
	
	if(num4.value % 1 != 0){
		alert("請輸入正整數!");
		num4.value = 1;
	}else{
		total_4 = num4.value * 20;
		sma4.innerHTML = "NT$ " + total_4;
		
		console.log(4+"ok");
	}
	
	total_all = total_1 + total_2 + total_3 + total_4 + total_5 + total_6;
	
	mege_cout.innerHTML = "NT$ " + total_all;
	totl_cout.innerHTML = "NT$ " + total_all;
}

function ch5(){
	var num5 = document.getElementById("num5");
	var sma5 = document.getElementById("sma5");
	var mege_cout = document.getElementById("mege_cout");
	var totl_cout = document.getElementById("totl_cout");
	
	if(num5.value % 1 != 0){
		alert("請輸入正整數!");
		num5.value = 1;
	}else{
		total_5 = num5.value * 110;
		sma5.innerHTML = "NT$ " + total_5;
		
		console.log(5+"ok");
	}
	
	total_all = total_1 + total_2 + total_3 + total_4 + total_5 + total_6;
	
	mege_cout.innerHTML = "NT$ " + total_all;
	totl_cout.innerHTML = "NT$ " + total_all;
}

function ch6(){
	var num6 = document.getElementById("num6");
	var sma6 = document.getElementById("sma6");
	var mege_cout = document.getElementById("mege_cout");
	var totl_cout = document.getElementById("totl_cout");
	
	if(num6.value % 1 != 0){
		alert("請輸入正整數!");
		num6.value = 1;
	}else{
		total_6 = num6.value * 270;
		sma6.innerHTML = "NT$ " + total_6;
		
		console.log(6+"ok");
	}
	
	total_all = total_1 + total_2 + total_3 + total_4 + total_5 + total_6;
	
	mege_cout.innerHTML = "NT$ " + total_all;
	totl_cout.innerHTML = "NT$ " + total_all;
}
