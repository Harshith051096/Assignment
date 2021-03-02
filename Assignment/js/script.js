
$(function() {
	$('body').addClass('js');
		var	$menu = $('#menu'),
			$menulink = $('.menu-link'),
			$menuTrigger = $('.has-subnav');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active1');
		$menu.toggleClass('active1');
	});

	$menuTrigger.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active1').next('ul').toggleClass('active1');
	});
	

	$('#menu').find(".menu-item-has-children").prepend('<span class="has-subnav"></span>');

});



$(window).resize(function() {
	var viewportWidth = $(window).width();
		if (viewportWidth > 925) {
			$("#menu").removeClass("active1");
		}
});


document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( ".active1" );
});


$(window).scroll(function() {
	   $("header").toggleClass("aniPos", $(this).scrollTop() > 0);
});


