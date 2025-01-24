$(function(){
	
	$('.slider-coms-about').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 1860,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
	  }
	},
	{
	  breakpoint: 1400,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	}
	]
	});	
	
	
	$('.slider-expert_main').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 1400,
	  settings: {
		slidesToShow: 2,
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
	  breakpoint: 1400,
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
	
	$('.slider-events_mob_960').slick({
		dots: false,
		arrows:true,
		slidesToShow: 2,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: 'unslick'
			},
		{
		  breakpoint: 1400,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		}
		]
	});	
	
	$('.slider-over-events').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 1400,
	  settings: {
		slidesToShow: 2,
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
	
//ask
	$('.head-ask-faq').click(function(){
		$(this).toggleClass('active').next().toggle()
		return false;
	});

	$('.but-change-password a').click(function(){
		$(this).parent().next().toggle()
		return false;
	});	
	
	
//input file
	const fileInput = document.querySelector('.file-input');
	if (fileInput) {
		fileInput.addEventListener('change', function () {
			const fileLabel = document.querySelector('.file-label');
			const fileName = this.files.length > 0 ? this.files[0].name : '';
			if (fileLabel) {
				fileLabel.innerHTML = fileName;
			}
		});
	}

//selectbox
	$('.select-sort_panel select, .sphere-expert select, .field-cab select, .sel-choice-profile select').selectbox();		
	
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
	$('.slider-expert').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		fade:true
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