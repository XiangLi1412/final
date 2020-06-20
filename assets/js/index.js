// 作者: 李智翔  版權所有
// 若要引用部分程式碼請聯絡作者 !!!


// 圖片輪播
// 要有邏輯才看得懂!!!!
var img_id = 111;
var img_id_text = "";

window.setInterval(function(){
	var carousel = document.getElementById("carousel");
	img_id++;
	if(img_id >= 114) img_id = 111;
	carousel.src = `assets/image/${img_id}.jpg`;
	console.log(img_id+",13");
}, 3000);



function show_last(){
	img_id--;
	if(img_id == 110) img_id = 113;
	console.log(img_id+",21");
	
	show_img(img_id);
}

function show_next(){
	img_id++;
	if(img_id == 114) img_id = 111;
	console.log(img_id+",29");
	
	show_img(img_id);
}

function show_img(num){
	console.log(img_id+",35");
	img_id_text = "assets/image/"+num+".jpg";
	var carousel = document.getElementById("carousel");
	carousel.src = img_id_text;
}




// 時間
setInterval(function(){
	

	var today = new Date();
	var hour = today.getHours()<10 ? "0"+today.getHours() : today.getHours().toString();
	var minute = today.getMinutes()<10 ? "0"+today.getMinutes() : today.getMinutes().toString();
	
	var hrMin = document.getElementById("hr_min");
	hrMin.innerHTML = `${hour}:${minute}`;


}, 1000);






function toPri_index(){
	window.location.href="index.html";
}

function to_product(){
	window.location.href="page/product.html";
}

function to_me(){
	window.location.href="page/aboutMe.html";
}

function to_member(){
	window.location.href="page/member.html";
}

function to_cart(){
	window.location.href="page/cart.html";
}



// 首頁去個別

function indToscrewdriver4(){
	window.location.href="page/special/screwdriver4.html";
}

function indToruler6(){
	window.location.href="page/special/ruler6.html";
}

function indToscrewdriver5(){
	window.location.href="page/special/screwdriver5.html";
}

function indToruler5(){
	window.location.href="page/special/ruler5.html";
}

function indToruler4(){
	window.location.href="page/special/ruler4.html";
}

function indToscrewdriver6(){
	window.location.href="page/special/screwdriver6.html";
}



// 新品上市

function indToscrew1(){
	window.location.href="page/special/screw1.html";
}
function indToscrew2(){
	window.location.href="page/special/screw2.html";
}
function indToscrew3(){
	window.location.href="page/special/screw3.html";
}
function indToscrew4(){
	window.location.href="page/special/screw4.html";
}
function indToscrew5(){
	window.location.href="page/special/screw5.html";
}
function indToscrew6(){
	window.location.href="page/special/screw6.html";
}










