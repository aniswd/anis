
// PRELOADER
$(window).on("load", function() {
    setTimeout(function(){
    	 $(".preloader").addClass("loaded");
    },4000);
});


$(function() {


    // WOW ANIMATE
    new WOW().init();
    
    // NAV MENU
    var wind = $(window);

    function hr() {
        $("#home").css({
            height: wind.height() + "px"
        });
    };

    hr();

    wind.resize(hr);
    wind.on("scroll", function() {
        var windScrollTop = wind.scrollTop();
        var navBar = $(".navbar");
        windScrollTop > 300 ? navBar.addClass("fixed-top") : navBar.removeClass("fixed-top");
    });

    // SCROLLIT         
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 700,
        activeClass: "active",
        onPageChange: null,
        topOffset: -15
    });

    $(".nav-item .nav-link").on("click", function() {
        $(".navbar-collapse").removeClass("show")
    });


	// PARELLAX
	 $.stellar();

	// MAGNIFIC POPUP
	$(".portfolio .link").magnificPopup({
    	delegate: "a",
    	type: "image",
    	gallery: {
        	enabled: true
    	}
	});

	// OWL CAROUSEL
	$(".blogs .owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            smartSpeed: 500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });

	// TESTIMONIAL
	$(".testimonial .owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 500
        });

	// CONTACT FORM VALIDATION
	$("#contact-form").on("submit", function(t) {
            t.preventDefault();
            $(this).attr("action");
            $("#form-submit").val("Wait...");
            var o = $("#contact-name").val(),
                a = $("#contact-email").val(),
                e = $("#contact-message").val(),
                n = 0;
            $(".con-validate", this).each(function() {
                "" == $(this).val() ? ($(this).addClass("con-error"), n += 1) : $(this).hasClass("con-error") && ($(this).removeClass("con-error"), n > 0 && (n -= 1))
            }), 0 === n ? $.ajax({
                type: "POST",
                url: "https://aniswd.github.io/anis/mail.php",
                data: {
                    con_name: o,
                    con_email: a,
                    con_message: e
                },
                success: function(t) {
                    $("#contact-form input, #contact-form textarea").val(""), $("#contact-submit.primary-button span").html("Done!"), $("#contact-submit.primary-button").addClass("ok"), console.log(t)
                },
                error: function(t, o) {
                    $("#contact-submit.primary-button span").html("Failed!")
                }
            }) : console.log("Validation Error")
        });

	// COUNTER UP
    if ($("section.stats").length > 0) {
        var t = 0;
        $(window).on("scroll", function() {
           	var o = $("section.stats").offset().top - window.innerHeight;
            0 == t && $(window).scrollTop() > o && ($("section.stats .stat-single-item .counter").each(function() {
            var t = $(this),
           	o = t.attr("data-count");
            $({
            countNum: t.text()
            }).animate({
                countNum: o
                },{
                   duration: 2e3,
                    easing: "swing",
                    step: function() {
                    t.text(Math.floor(this.countNum))
                    },
                    complete: function() {
                    t.text(this.countNum)
                    }
                })
            }),t = 1)
        })
    };

    // ISOTOPE
    var $portfolioGrid = $('.portfolio-grid').isotope({
  		itemSelector: '.portfolio-grid-item',
  		percentPosition: true,
  		masonry: {
    	columnWidth: '.portfolio-grid-item'
  		}
	});

	// FILTER ITEMS
	$('.portfolio-filter-buttons li').on( 'click',function() {
  		var filterValue = $(this).attr('data-filter');
  		$portfolioGrid.isotope({ filter: filterValue });
	});

	// FILTER BUTTON ACTIVE
	$('.portfolio-filter-buttons li').on('click',function(){
		$('.portfolio-filter-buttons li').removeClass('active-item');
		$(this).addClass('active-item');
	});











});
