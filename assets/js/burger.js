var linkIsOpen = false;

// 打開 關閉 導行列
function open_link(){

	var	link = document.getElementById("link");
	link.style.display = linkIsOpen ? "none" : "flex"; 
	linkIsOpen = !linkIsOpen;
}


// 解決bug

window.setInterval(function(){
	var link = document.getElementById("link");
	var scr_w = document.body.scrollWidth;

	if(scr_w > 600 && link.style.display == "none"){
		link.style.display = "flex";
		console.log("success 1 !!!");
		console.log(scr_w);
	}else if(!linkIsOpen && scr_w < 600 && link.style.display == "flex"){
		link.style.display = "none";
		console.log("success 2 !!!");
		console.log(scr_w);
	}

}, 500);