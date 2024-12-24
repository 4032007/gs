$(function(){
//selectbox
	$('.select-sort_panel select').selectbox();		
	
//menu
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.menu-dop').toggle();
		return false;
	});
	
	$(document).click(function(event) {
	    if ($(event.target).closest('.menu-dop').length) return;
	    $('.menu-dop').hide();
	    event.stopPropagation();
	});
	
//header fix
	function header(){
		var top = $(document).scrollTop();
		if (top > 10) $('.wr-header').addClass('fixed');
		else $('.wr-header').removeClass('fixed');	
	}
	
	$(window).scroll(function() {
		header();
	});
	header();

//sliders
	$('.slider-main-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade:true
	});
	
	$('.slider-expert_main').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 999,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
	  }
	},
	{
	  breakpoint: 767,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	}
	]
	});
	
//slider news
	$('.slider-news_main').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 999,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
	  }
	},
	{
	  breakpoint: 767,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	}
	]
	});

//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.nav-tb div:eq(0), .nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb div, .nav-tb li').click(function () {
			setTimeout(function() {
				$('.gal-infrastr').slick('refresh');
			}, 100);
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().addClass('active').siblings('.tab-tb:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tb div, .nav-tb li').removeClass('active')
			return false;
		});
	});
	

});