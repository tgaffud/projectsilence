$(document).ready(
	function(){
		counterR = 0;
		counterG = 0;
		$("#redb").click(function(){
			if(counterR == 0){
				drawRed();
				counterR = 1;
			}else{
				drawWhite1();
				counterR = 0;
			}
		});	
		
		$("#greenb").click(function(){
			if(counterG == 0){
				drawGreen();
				counterG = 1;
			}else{
				drawWhite2();
				counterG = 0;
			}
			
		});
});

function drawRed(){
	var canvas = document.getElementById('cpool');
    var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#FF0000';
    ctx.fillRect(0,0,150,200);
}

function drawWhite1(){
	var canvas = document.getElementById('cpool');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,150,200);
}

function drawGreen(){
	var canvas = document.getElementById('cpool');
    var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#008000';
    ctx.fillRect(150,0,150,200);
}

function drawWhite2(){
	var canvas = document.getElementById('cpool');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(150,0,150,200);
}