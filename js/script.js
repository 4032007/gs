$(function(){
//file
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const fileInputContainer = document.getElementById('fileInputContainer');

    fileName.addEventListener('click', function () {
      fileInput.click();
    });

    fileInput.addEventListener('change', function () {
      if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
        fileInputContainer.classList.add('active');
      } else {
        fileName.textContent = 'Файл не выбран';
        fileInputContainer.classList.remove('active');
      }
    });

//selectbox
	$('.select-form select, .sel-obj-cont select, .item-params-map select').selectbox();		
	
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
	
	$('.slider-news').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 999,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
	  }
	},
	{
	  breakpoint: 767,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
	]
	});

	$('.single-slider-obj').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:true,
	responsive: [
	{
	  breakpoint: 767,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade:false
	  }
	}
	]
	});
	
	$('.gal-card').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:true
	});
	
	$('.slider-trainers').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:false,
	responsive: [
	{
	  breakpoint: 999,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
	  }
	},
	{
	  breakpoint: 767,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	  }
	}
	]
	});
	
	$('.gal-infrastr').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade:true
	});
		
	$('.scroll').click(function(e){
		e.preventDefault();
		 var top = $('.toform').offset().top - 50;
		$('body,html').animate({scrollTop: top}, 800);
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
	
//maps
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [54.952036, 37.425221],
				zoom: 10,
				controls: []
			}, {
				suppressMapOpenBlock: false
			}),
			
			myPlacemark = new ymaps.Placemark([54.952036, 37.425221], {
				balloonContent: '<div class="baloon-map">115088, г. Москва, ул. 2-я Машиностроения, д. 25, стр. 5, офис 406</div>'
			}, {

				iconLayout: 'default#image',
				iconImageHref: 'images/ico-map.svg',
				iconImageSize: [54, 72],
				iconImageOffset: [-0, -72]
			});
			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects
			.add(myPlacemark);
	});
});