var myInput = document.getElementById("input"),
	myBtn = document.getElementById("go"),
	myreplay = document.getElementById("replay"),
	myBack = document.getElementById("Nluck"),
	msgwin = document.getElementById("win"),
	msgloss = document.getElementById("loss"),
	myDivErreur = document.getElementById("divErreur"),
	myCard = document.getElementById("boss");

window.onload = function(){
	setTimeout(function(){
		
		"use strict";
		document.getElementById("lab1").style.display = "block";
//		document.getElementById("departGame").style.display = "none";
		$("#departGame").delay(2000).fadeOut();
		
		
		
	},3000);
	
$("#StartGame").on('click',function(){
	
	$(this).parent().fadeOut();
	
});

$("#Help").click(function(){
	
	$("#divHelp").show();
});	
	
$("#divHelp img").click(function(){
	
	$(this).parent().hide();
});

$("#return").click(function(){
	
	$(".begin").fadeIn();
});
myBtn.onclick = function(){
	
	"use strict";
	if(myInput.value != ""){
	window.setTimeout(function(){
		"use strict";
		if(myInput.value == myBack.textContent)
			{
				msgwin.style.visibility = "visible";
				myreplay.style.visibility = "visible";
			}
		else{
			msgloss.style.visibility = "visible";
			myreplay.style.visibility = "visible";
		}
	},2000)
	myBack.textContent = Math.floor(Math.random()*10+1);
	myCard.style.transform ="rotateY(180deg)";
		}
	else
		{
			myDivErreur.style.visibility = "visible";
		}
};
myInput.onfocus = function(){
	
	"use strict";
	myDivErreur.style.visibility = "hidden";
};
myreplay.onclick = function(){
	
	"use strict";
	myCard.style.transform ="rotateY(0deg)";
	msgloss.style.visibility = "hidden";
	msgwin.style.visibility = "hidden";
	myInput.value = "";
	myreplay.style.visibility = "hidden";

};
	
};