$(document).ready(
	function(){
		$(".answer").hide();
		$("#date").keyup(function(){
			wordCheck();
		});
});

function wordCheck(){

	var word = $("#date").val().toLowerCase();
	if(word == "sunday"){
		$(".answer").show();
	}else $(".answer").hide();
}