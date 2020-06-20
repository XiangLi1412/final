var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");

var btn_send = document.getElementsByClassName("btn-send");
// console.log(btn_send);
btn_send[0].disabled = true;


// click
star1.addEventListener("click", function () {
	star1.style.color = "#ffa500";
	star2.style.color = "#212529";
	star3.style.color = "#212529";
	star4.style.color = "#212529";
	star5.style.color = "#212529";
	
	var btn_send = document.getElementsByClassName("btn-send");
	console.log(btn_send);
	btn_send[0].disabled = false;
});

star2.addEventListener("click", function () {
	star1.style.color = "#ffa500";
	star2.style.color = "#ffa500";
	star3.style.color = "#212529";
	star4.style.color = "#212529";
	star5.style.color = "#212529";
	
	var btn_send = document.getElementsByClassName("btn-send");
	console.log(btn_send);
	btn_send[0].disabled = false;
});

star3.addEventListener("click", function () {
	star1.style.color = "#ffa500";
	star2.style.color = "#ffa500";
	star3.style.color = "#ffa500";
	star4.style.color = "#212529";
	star5.style.color = "#212529";
	
	var btn_send = document.getElementsByClassName("btn-send");
	console.log(btn_send);
	btn_send[0].disabled = false;
});

star4.addEventListener("click", function () {
	star1.style.color = "#ffa500";
	star2.style.color = "#ffa500";
	star3.style.color = "#ffa500";
	star4.style.color = "#ffa500";
	star5.style.color = "#212529";
	
	var btn_send = document.getElementsByClassName("btn-send");
	console.log(btn_send);
	btn_send[0].disabled = false;
});

star5.addEventListener("click", function () {
	star1.style.color = "#ffa500";
	star2.style.color = "#ffa500";
	star3.style.color = "#ffa500";
	star4.style.color = "#ffa500";
	star5.style.color = "#ffa500";
	
	var btn_send = document.getElementsByClassName("btn-send");
	console.log(btn_send);
	btn_send[0].disabled = false;
});



// mouseover
// star1.addEventListener("mouseover", function () {
	// star1.style.color = "#ffa500";
	// star2.style.color = "#212529";
	// star3.style.color = "#212529";
	// star4.style.color = "#212529";
	// star5.style.color = "#212529";
// });

// star2.addEventListener("mouseover", function () {
	// star1.style.color = "#ffa500";
	// star2.style.color = "#ffa500";
	// star3.style.color = "#212529";
	// star4.style.color = "#212529";
	// star5.style.color = "#212529";;
// });

// star3.addEventListener("mouseover", function () {
	// star1.style.color = "#ffa500";
	// star2.style.color = "#ffa500";
	// star3.style.color = "#ffa500";
	// star4.style.color = "#212529";
	// star5.style.color = "#212529";
// });

// star4.addEventListener("mouseover", function () {
	// star1.style.color = "#ffa500";
	// star2.style.color = "#ffa500";
	// star3.style.color = "#ffa500";
	// star4.style.color = "#ffa500";
	// star5.style.color = "#212529";
// });

// star5.addEventListener("mouseover", function () {
	// star1.style.color = "#ffa500";
	// star2.style.color = "#ffa500";
	// star3.style.color = "#ffa500";
	// star4.style.color = "#ffa500";
	// star5.style.color = "#ffa500";
// });



// 特區出發
function go_index(){
	window.location.href = "../../index.html";
}


function go_prod(){
	window.location.href = "../product.html";
}


function go_we(){
	window.location.href = "../aboutMe.html";
}


function go_member(){
	window.location.href = "../member.html";
}

function go_cart(){
	window.location.href = "../cart.html";
}



// 兒子去兒子
function go_bulb1(){
	window.location.href = "bulb1.html";
}
function go_bulb2(){
	window.location.href = "bulb2.html";
}
function go_bulb3(){
	window.location.href = "bulb3.html";
}
function go_bulb4(){
	window.location.href = "bulb4.html";
}
function go_bulb5(){
	window.location.href = "bulb5.html";
}
function go_bulb6(){
	window.location.href = "bulb6.html";
}





function go_ruler1(){
	window.location.href = "ruler1.html";
}
function go_ruler2(){
	window.location.href = "ruler2.html";
}
function go_ruler3(){
	window.location.href = "ruler3.html";
}
function go_ruler4(){
	window.location.href = "ruler4.html";
}
function go_ruler5(){
	window.location.href = "ruler5.html";
}
function go_ruler6(){
	window.location.href = "ruler6.html";
}




function go_screwdriver1(){
	window.location.href = "screwdriver1.html";
}
function go_screwdriver2(){
	window.location.href = "screwdriver2.html";
}
function go_screwdriver3(){
	window.location.href = "screwdriver3.html";
}
function go_screwdriver4(){
	window.location.href = "screwdriver4.html";
}
function go_screwdriver5(){
	window.location.href = "screwdriver5.html";
}
function go_screwdriver6(){
	window.location.href = "screwdriver6.html";
}





function go_screw1(){
	window.location.href = "screw1.html";
}
function go_screw2(){
	window.location.href = "screw2.html";
}
function go_screw3(){
	window.location.href = "screw3.html";
}
function go_screw4(){
	window.location.href = "screw4.html";
}
function go_screw5(){
	window.location.href = "screw5.html";
}
function go_screw6(){
	window.location.href = "screw6.html";
}








function go_board1(){
	window.location.href = "board1.html";
}
function go_board2(){
	window.location.href = "board2.html";
}
function go_board3(){
	window.location.href = "board3.html";
}
function go_board4(){
	window.location.href = "board4.html";
}
function go_board5(){
	window.location.href = "board5.html";
}
function go_board6(){
	window.location.href = "board6.html";
}





function go_switch1(){
	window.location.href = "switch1.html";
}
function go_switch2(){
	window.location.href = "switch2.html";
}
function go_switch3(){
	window.location.href = "switch3.html";
}
function go_switch4(){
	window.location.href = "switch4.html";
}
function go_switch5(){
	window.location.href = "switch5.html";
}
function go_switch6(){
	window.location.href = "switch6.html";
}



