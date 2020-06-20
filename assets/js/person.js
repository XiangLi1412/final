var per_infoIsOpen = false;
var per_reviseIsOpen = false;
var per_buyIsOpen = false;
var per_commeIsOpen = false;

var close1IsExist = false;
var close2IsExist = false;
var close3IsExist = false;
var close4IsExist = false;


// btn_all

function switch1(){
	var person_info = document.getElementById("person_info");
	var close1 = document.getElementById("close1");
	var btn_all = document.getElementById("btn_all");
	person_info.style.display = per_infoIsOpen ? "none":"block";
	close1.style.visibility = close1IsExist ? "hidden":"visible";
	btn_all.style.display = close1IsExist ? "flex":"none";
	per_infoIsOpen = !per_infoIsOpen;
	close1IsExist = !close1IsExist;
}
function switch2(){
	var person_revise = document.getElementById("person_revise");
	var close2 = document.getElementById("close2");
	var btn_all = document.getElementById("btn_all");
	person_revise.style.display = per_reviseIsOpen ? "none":"block";
	close2.style.visibility = close2IsExist ? "hidden":"visible";
	btn_all.style.display = close2IsExist ? "flex":"none";
	per_reviseIsOpen = !per_reviseIsOpen;
	close2IsExist = !close2IsExist;
}
function switch3(){
	var person_buy = document.getElementById("person_buy");
	var close1 = document.getElementById("close3");
	var btn_all = document.getElementById("btn_all");
	person_buy.style.display = per_buyIsOpen ? "none":"block";
	close3.style.visibility = close3IsExist ? "hidden":"visible";
	btn_all.style.display = close3IsExist ? "flex":"none";
	per_buyIsOpen = !per_buyIsOpen;
	close3IsExist = !close3IsExist;
}
function switch4(){
	var person_comme = document.getElementById("person_comme");
	var close1 = document.getElementById("close4");
	var btn_all = document.getElementById("btn_all");
	person_comme.style.display = per_commeIsOpen ? "none":"block";
	close4.style.visibility = close4IsExist ? "hidden":"visible";
	btn_all.style.display = close4IsExist ? "flex":"none";
	per_commeIsOpen = !per_commeIsOpen;
	close4IsExist = !close4IsExist;
}