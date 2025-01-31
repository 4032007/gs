$(function(){
//sliders
	$('.slider-expert').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		fade:true
	});
		
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
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
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
			breakpoint: 960,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});
		
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
},
			{
			breakpoint: 480,
				settings: {
					slidesToShow: 1,
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
			breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 318,
				settings: {
					slidesToShow: 1,
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
			breakpoint: 960,
				settings: "unslick"
			}
		]
	});
			
	$('.slider-speaker_640').slick({
		dots: false,
		arrows:true,
		slidesToShow: 2,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
			breakpoint: 960,
				settings: 'unslick'
			},
			{
			breakpoint: 640,
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

	$('.but-filter_mob').click(function(){
		$('.panel-filters-event_mob').toggle()
		return false;
	});	

	$('.more-descr-event a').click(function(){
		$(this).toggleClass('active').parent().prev().toggleClass('active')
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

//mobile script	
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.menu_header').toggle();
		$('body').addClass('fix');
		return false;
	});
	
	$('.close-menu-mob').click(function(){
		$('.menu-tt').removeClass('active');
		$('.menu_header').hide();
		$('body').removeClass('fix');
		return false;
	});
});