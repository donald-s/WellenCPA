$(function () {
    $(window).scroll(function() {
        if ($(".navbar").offset().top>30) {
            $(".navbar-fixed-top").addClass("sticky");
        }
        else {
            $(".navbar-fixed-top").removeClass("sticky");
        }
    });

    // Flex
    if ($(".flexslider").length) {
        $('.flexslider').flexslider();
    }

    servicesCircle.initialize();

    staticHeader.initialize();

    portfolioItem.initialize();

    contentSwitcher.initialize({"showPreview": true});


    // segun esto corrige el pedo del dropdown en tablets and such
    // hay que testearlo!
    $('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        setTimeout($.proxy(function() {
            if ('ontouchstart' in document.documentElement) {
                $(this).siblings('.dropdown-backdrop').off().remove();
            }
        }, this), 0);
    });
});

var portfolioItem = {
    initialize: function () {
        var $container = $("#portfolio_tem .left_box");
        var $bigPics = $container.find(".big img");
        var $thumbs = $container.find(".thumbs .thumb");

        $bigPics.hide().eq(0).show();

        $thumbs.click(function (e) {
            e.preventDefault();
            var index = $thumbs.index(this);
            $bigPics.fadeOut();
            $bigPics.eq(index).fadeIn();
        });
    }
}

var staticHeader = {
    initialize: function () {
        if ($(".navbar-static-top").length) {
            $("body").css("padding-top", 0);
        }
    }
}

var servicesCircle = {
    initialize: function () {
        var $container = $(".services_circles");
        var $texts = $container.find(".description .text");
        var $circles = $container.find(".areas .circle");

        $circles.click(function () {
            var index = $circles.index(this);
            $texts.fadeOut();
            $texts.eq(index).fadeIn();
            $circles.removeClass("active");
            $(this).addClass("active");
        });
    }
}

// Content switcher for the home page
var contentSwitcher = {
    initialize: function (options) {
        /*
        * Function to initialize the content switcher.
        * options = {
        * "showPreview" | bool = whether or not to show the first item as a preview
        * }
        * */
        var $container = $(".content-switcher-container");
        var $texts = $container.find(".content-switcher-texts li");
        var $controls = $container.find(".content-switcher-navigation li");
        if (options.showPreview) {
            $controls.eq(0).hide();
        }
        $texts.eq(0).show();

        $controls.click(function () {
            var index = $controls.index(this);
            $texts.fadeOut();
            $texts.eq(index).fadeIn();
            $controls.removeClass("active");
            $(this).addClass("active");
        });
    }
}

$(window).load(function () {
    $('.home-page-flexslider').flexslider({
        "controlNav": false,
        "directionNav": false,
        start: function () {
            $(".flex-image").show();
        }
    });

    // Lava-Lamp jquery plugin initialization
    $('#nav').lavalamp({
        easing: 'easeOutBack'
    });

    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    // If the user is on a Safari browser, then try to open the address in Apple Maps
    if (isSafari) {
        $(".googleMapsLink").hide();
    // Otherwise, open it in Google Maps
    } else {
        $(".appleMapsLink").hide();
    }
});