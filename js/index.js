$(function() {
	var $container = $('#container');
// init
$container.isotope({
  // options
  itemSelector: '#container > div',
  layoutMode: 'fitRows'
});
	$(".filter").click(function(){
		//$(".tt-grid li").css({"display": "none"});
	/*	$(".tt-grid li").addClass("hide");
		$(".filter").removeClass("highlight");
		//$("."+$(this).text()).css({"display": "inline-block"});
		$("."+$(this).text()).removeClass("hide");
		$(this).addClass("highlight");
		$("#show-all").removeClass("highlight");*/
		//alert("clicked "+ $(this).text());
		$(".filter").removeClass("highlight");
		$("#show-all").removeClass("highlight");
		$(this).addClass("highlight");
		$container.isotope({ filter: "."+$(this).text() });
		//alert($(this).text());
	});

	$("#show-all").click(function(){
		//$(".tt-grid li").css({"display": "inline-block"});
		$(".filter").removeClass("highlight");
		$(this).addClass("highlight");
		//$(".tt-grid li").removeClass("hide");
		$container.isotope({ filter: '#container > div' });
	});

});


function initGrid(){
	$(".tt-grid li" ).each(function( i ) {
		
	});
}