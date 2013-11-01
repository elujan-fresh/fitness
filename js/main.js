$(document).ready(function(){
	var count=0;
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

	$("#form-login").validate();
	$("#form-forgot").validate();
	$("#register-form").validate();
	$("#form-join-footer").validate();
	jQuery.extend(jQuery.validator.messages, {
		equalTo: "Confirm password must be same.",
	});
	
	setInterval(function(){
		count++;
		if(count==1){
			$("#banner-lady").attr("src","img/index/banner1.jpg");
			$("#location-banner-lady").attr("href","index.php");
		}
		if(count==2){
			$("#banner-lady").attr("src","img/index/banner2.jpg");
			$("#location-banner-lady").attr("href","coaching.php");
		}
		if(count==3){
			$("#banner-lady").attr("src","img/index/banner3.jpg");
		    $("#location-banner-lady").attr("href","training.php");
			count=0;
		}
	},5000);
	
	function myFunction(){
		console.log("lala");
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

	$(document).on("click","#forgot", function(){
		$('#myModal').modal("show");
	});
	$(document).on("click","#payment-terms", function(){
		$('#myModal2').modal("show");
	});
	$(document).on("click","#banner-button1", function(event){
		$("#banner-lady").attr("src","img/index/banner1.jpg");
		$("#location-banner-lady").attr("href","index.php");
		event.preventDefault();
		event.stopPropagation();
	});
	$(document).on("click","#banner-button2", function(event){
		$("#banner-lady").attr("src","img/index/banner2.jpg");
		$("#location-banner-lady").attr("href","coaching.php");
		event.preventDefault();
		event.stopPropagation();
	});
	$(document).on("click","#banner-button3", function(event){
		$("#banner-lady").attr("src","img/index/banner3.jpg");
		$("#location-banner-lady").attr("href","training.php");
		event.preventDefault();
		event.stopPropagation();
	});

