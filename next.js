$(document).ready(
	function(){
		var counter = 0;
		$("#next").click(function(){
			joker(counter);
			counter++;
		});	
});

function joker(counter){
	var text1 = "<p class = 'response'>No use, huh?</p>";
	var text2 = "<p class = 'response'>Just quit it. It's not funny anymore.</p>"
	var text3 = "<p class = 'response'>Do you even read??</p>"
	var text4 = "<p class = 'response'>That's it, no more button for you.</p>" +
				"<p class = 'clue'>Read the title for hints.</p>"
	if(counter == 0){
		$("#joke").append(" Not.");
	}
	if(counter < 3){
		$(".response").remove();
		$("#next").after(text1);
	}else if (counter >= 3 && counter < 7){
		$(".response").remove();
		$("#next").after(text2);
	}else if (counter >= 7 && counter < 10){
		$(".response").remove();
		$("#next").after(text3);
	}else if (counter = 10){
		$(".response").remove();
		$("#next").after(text4);
		$("#next").prop('disabled', true);
		$("#next").css("color","grey");
	}
	
}