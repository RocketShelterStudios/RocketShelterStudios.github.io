var previousScrollIndicatorHeight = 0;

$(document).ready(function() {

    var isTouch = window.matchMedia("(pointer: coarse)").matches;

    $("a").on("click", function(e) {

        if (this.hash !== "") {

            e.preventDefault();

            var href = this.hash;

            $("html, body").animate({
                    scrollTop: $(href).offset().top
                },
                500,
                function() {
                    window.location.hash = href;
                }
            );

        }
    });

    $("#menu-button").click(function(e) {

        e.preventDefault();
        var sidebar = $("#nav-bar");

        var currDisplayValue = sidebar.css("display");
        if (currDisplayValue == "block") {
            sidebar.css("display", "none");

            $("#menu-button").empty();
            $("#menu-button").append("<svg width='32px' height='32px' viewBox='0 0 16 16' class='bi bi-list' fill='white' xmlns='http://www.w3.org/2000/svg'> <path fill - rule = 'evenodd' d = 'M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' /></svg>");
            $("#menu-button").css("position", "");
        } else {
            sidebar.css("display", "block");

            $("#menu-button").empty();
            $("#menu-button").append("<svg width='32px' height='32px' viewBox='0 0 16 16' class='bi bi-x' fill='white' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/></svg>");
            $("#menu-button").find("svg").css("fill", "#DDDDDD");
            $("#menu-button").css("position", "fixed");
        }

    });

    previousScrollIndicatorHeight = $(".service-scroll-indicator").height();

    scrollDynamics();

    $(window).scroll(scrollDynamics);

});

function scrollDynamics() {

    /*     if ($("body").scrollTop < 10 || document.documentElement.scrollTop < 10) {

            // NAVBAR FUNCTIONALITY
            $("header").css("padding-top", "50px");
            $("header").css("padding-bottom", "50px");

        } else {

            $("header").css("padding-top", "5px");
            $("header").css("padding-bottom", "5px");

        } */

    if (window.scrollY<150) {

        $(".service-scroll-indicator").css("opacity", 1);
        //$(".service-scroll-indicator").css("height", previousScrollIndicatorHeight);

        $(".page-white-overlay").css("opacity", "0.75");

    } else {

        previousScrollIndicatorHeight = $(".service-scroll-indicator").height();

        $(".service-scroll-indicator").css("opacity", 0);
        //$(".service-scroll-indicator").css("height", 0);

        $(".page-white-overlay").css("opacity", "0");

    }
}