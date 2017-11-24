$(document).ready(function(){
	//SCROLL TOP
	$('.top').on('click',function (e) {
	    e.preventDefault();

	    var target = 'header';
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	//LINK IMAGE FILTER GRAYSCALE HOME
	$('.project').mouseenter(function(){
		$(this).find("img").css({"filter" : "grayscale(80%)", "opacity" : "0.4"});
	});

	$('.project').mouseenter(function(){
		$(this).find("img").css({"-webkit-filter" : "grayscale(80%)", "opacity" : "0.4"});
	});

	$('.project').mouseleave(function(){
		$(this).find("img").css({"filter" : "grayscale(0%)", "opacity" : "1"});
	});

	$('.project').mouseleave(function(){
		$(this).find("img").css({"-webkit-filter" : "grayscale(0%)", "opacity" : "1"});
	});
});