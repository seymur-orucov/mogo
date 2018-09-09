

$(document).ready(function() {
	jQuery('.item').hover(
		function(){
			$(this).find(".item-cover").fadeIn();
		},
		function(){
			$(this).find(".item-cover").fadeOut();
		}
	);
	
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		// $(".item").imagefill();
	});
});

$(window).scroll(function () {
	var aboutOffset = $('.about').offset().top;

	if ($(window).scrollTop() >= aboutOffset) {
		$('header').addClass('header-add');
	} else {
		$('header').removeClass('header-add');
	}
});

$("#wrapper").click( function() {
	$(".menu").toggleClass("closed");
});

$(function(){
	$('.main-item').click(function(){
		$('.burger-menu').toggleClass('burger-opened');
	});
});

// Count 

var a = 0;
$(window).scroll(function() {

  var oTop = $('.count-bars').offset().top - window.innerHeight + 150;
  if (a == 0 && $(window).scrollTop() > oTop) {
	$('.count').each(function() {
	  var $this = $(this),
		countTo = $this.attr('data-count');
	  $({
		countNum: $this.text()
	  }).animate({
		  countNum: countTo
		},

		{

		  duration: 2000,
		  easing: 'swing',
		  step: function() {
			$this.text(Math.floor(this.countNum));
		  },
		  complete: function() {
			$this.text(this.countNum);
			//alert('finished');
		  }

		});
	});
	a = 1;
  }

});