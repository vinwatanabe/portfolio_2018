$(document).ready(function(){
	$('header').hide();
	$('#project').hide();
	$('footer').hide();

	$(window).load(function(){
		$('.load-container').slideUp(function(){
			$('.load-container').hide();
			$('header').fadeIn(500);
			$('#project').fadeIn(500);
			$('footer').fadeIn(500);
		});
	});

	$('a').click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();

		$('body').fadeOut(500, function(){
			$('body').hide(function(){
				window.open(url, "_self");
			});
		});
	});
});