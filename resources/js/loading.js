$(document).ready(function(){
	$('#container').hide();

	$(window).load(function(){
		$('.load-container').slideUp(function(){
			$('.load-container').hide();
			$('#container').fadeIn(500);
		});
	});

	$('a').click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();

		$('#container').fadeOut(500, function(){
			$('#container').hide(function(){
				window.open(url, "_self");
			});
		});
	});
});