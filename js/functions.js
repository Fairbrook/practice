$("#posts").load("ejemplo1.html");
$(document).ready(function(){
	$("li").click(function(){
		$("#posts").load($(this).html()+".html");
	});
});
