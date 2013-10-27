$(document).ready(function(){
	/*$('.slider1').bxSlider({
		slideWidth: 365,
		minSlides: 3,
		maxSlides: 3,
		//slideMargin: 10,
		pager: false
	});
	$('#welcome-footer').find('.bx-prev').append('<img src="img/index/arrow_left.png" id="arrow-left" />');
	$('#welcome-footer').find('.bx-next').append('<img src="img/index/arrow_right.png" id="arrow-right" />');
	
	$('#video-slider').find('.bx-prev').append('<img src="img/index/arrow_left.png" id="arrow-left-slider" />');
	$('#video-slider').find('.bx-next').append('<img src="img/index/arrow_right.png" id="arrow-right-slider" />');
	$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true
	}); */
	
	$(document).on('click', '.play_video', function(event) {
		event.preventDefault();
		$("#frame-video").attr("src",$(this).find("input").val());
		console.log($(this).find("input").val());
	});

	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=400512266726024";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	$("#foo2").carouFredSel({
		items: 3,
		circular: true,
		infinite: false,
		auto 	: false,
		prev	: {	
			button	: "#foo2_prev",
			key		: "left"
		},
		next	: { 
			button	: "#foo2_next",
			key		: "right"
		},
		pagination	: "#foo2_pag"
	});
	if($(window).width()<1024 && $(window).width()>480){
		   $("#foo2").carouFredSel({
			items: 2,
			circular: true,
			infinite: false,
			auto 	: false,
			prev	: {	
				button	: "#foo2_prev",
				key		: "left"
			},
			next	: { 
				button	: "#foo2_next",
				key		: "right"
			},
			pagination	: "#foo2_pag"
		});
	}
	if($(window).width()<580 && $(window).width()>=240){
		   $("#foo2").carouFredSel({
			items: 1,
			circular: true,
			infinite: false,
			auto 	: false,
			prev	: {	
				button	: "#foo2_prev",
				key		: "left"
			},
			next	: { 
				button	: "#foo2_next",
				key		: "right"
			},
			pagination	: "#foo2_pag"
		});
	}

	
});

	$( window ).resize(function() {
		if($(window).width()<1024 && $(window).width()>480){
		   $("#foo2").carouFredSel({
			items: 2,
			circular: true,
			infinite: false,
			auto 	: false,
			prev	: {	
				button	: "#foo2_prev",
				key		: "left"
			},
			next	: { 
				button	: "#foo2_next",
				key		: "right"
			},
			pagination	: "#foo2_pag"
		});
		}
		if($(window).width()<580 && $(window).width()>=240){
		   $("#foo2").carouFredSel({
			items: 1,
			circular: true,
			infinite: false,
			auto 	: false,
			prev	: {	
				button	: "#foo2_prev",
				key		: "left"
			},
			next	: { 
				button	: "#foo2_next",
				key		: "right"
			},
			pagination	: "#foo2_pag"
		});
		}
	});





