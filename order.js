$(document).ready(
	function(){
		$("#T").click(function(){
			print("T");
			wordCheck();
		});
		
		$("#E").click(function(){
			print("E");
			wordCheck();
		});
		
		$("#N").click(function(){
			print("N");
			wordCheck();
		});
		
		$("#X").click(function(){
			print("X");
			wordCheck();
		});
		
		$("#Reset").click(function(){
			reset();
		});
});


function print(letter){
	var selector = "#" + letter;
	$("#letters").append(letter);
	$(selector).prop('disabled', true);
	$(selector).css("color","grey");
}

function reset(){
	$("#letters").empty();
	$("#letters").css("color","white");
	$("button").prop('disabled', false);
	$("button").css("color","black");
}

function wordCheck(){
	var word = $("#letters").text();

	if(word.length == 4){
		if(word == "NEXT"){
			$("#letters").css("color","limegreen");
		}else $("#letters").css("color","red");
	}
}