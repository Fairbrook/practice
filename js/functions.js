$(document).ready(function(){
	$("#posts").load("ejemplo1.html");
	$("li").click(function(){
		$("#posts").load($(this).html()+".html");
	});
});