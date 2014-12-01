$(function() {
	$( ".foo" ).click(function() {
	  alert( "Handler for .click() called." );
	});
	$(".filter").click(function(){
		//$(".tt-grid li").css({"display": "none"});
		$(".tt-grid li").addClass("hide");
		$(".filter").removeClass("highlight");
		//$("."+$(this).text()).css({"display": "inline-block"});
		$("."+$(this).text()).removeClass("hide");
		$(this).addClass("highlight");
		$("#show-all").removeClass("highlight");
		//alert($(this).text());
	});

	$("#show-all").click(function(){
		//$(".tt-grid li").css({"display": "inline-block"});
		$(".filter").removeClass("highlight");
		$(this).addClass("highlight");
		$(".tt-grid li").removeClass("hide");
	});

});