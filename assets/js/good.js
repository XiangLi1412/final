var bulbIsShow = false;
var rulerIsShow = false;
var screwdriverIsShow = false;
var screwIsShow = false;
var boardIsShow = false;
var switchIsShow = false;

var bulb_text = document.getElementById("bulb_text");
var ruler_text = document.getElementById("ruler_text");
var screwdriver_text = document.getElementById("screwdriver_text");
var screw_text = document.getElementById("screw_text");
var board_text = document.getElementById("board_text");
var switch_text = document.getElementById("switch_text");

var bulb_cont = document.getElementById("bulb_cont");
var ruler_cont = document.getElementById("ruler_cont");
var screwdriver_cont = document.getElementById("screwdriver_cont");
var screw_cont = document.getElementById("screw_cont");
var board_cont = document.getElementById("board_cont");
var switch_cont = document.getElementById("switch_cont");

function showBlub(){
	bulb_cont.style.display = bulbIsShow ? "none" : "flex";
	bulbIsShow = !bulbIsShow;
}
function showRuler(){
	ruler_cont.style.display = rulerIsShow ? "none" : "flex";
	rulerIsShow = !rulerIsShow;
}
function showScrewdriver(){
	screwdriver_cont.style.display = screwdriverIsShow ? "none" : "flex";
	screwdriverIsShow = !screwdriverIsShow;
}
function showScrew(){
	screw_cont.style.display = screwIsShow ? "none" : "flex";
	screwIsShow = !screwIsShow;
}
function showBoard(){
	board_cont.style.display = boardIsShow ? "none" : "flex";
	boardIsShow = !boardIsShow;
}
function showSwitch(){
	switch_cont.style.display = switchIsShow ? "none" : "flex";
	switchIsShow = !switchIsShow;
}


// 回登入畫面
function to_SignIn(){
	window.location.href="../../page/signIn.html";
}
// 回後臺首頁
function tomana_index(){
	window.location.href="manage_index.html";
}
