$(function() {
	$( ".foo" ).click(function() {
	  alert( "Handler for .click() called." );
	});
	$(".filter").click(function(){
		//$(".tt-grid li").css({"display": "none"});
		$(".tt-grid li").addClass("hide");
		//$("."+$(this).text()).css({"display": "inline-block"});
		$("."+$(this).text()).removeClass("hide");
		//alert($(this).text());
	});

	$("#show-all").click(function(){
		//$(".tt-grid li").css({"display": "inline-block"});
		$(".tt-grid li").removeClass("hide");
	});

});