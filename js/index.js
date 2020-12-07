$(document).ready(function ()
{
    scroll();
    setInterval(scroll,100);
});

function scroll(e)
    {

        var offsetmain=400;
        var rect = $("#main")[0];
        if(document.documentElement.clientWidth>960){
        if (document.documentElement.scrollTop >= rect.offsetTop-offsetmain)
        {
            var nav = $(".mobile");
            if (!nav.hasClass("sticky"))
                nav.addClass("sticky");

            setTimeout(function ()
            {
                nav.css("transition", "opacity 0.5s");
                nav.css("opacity", 1);
            }, 100);
        }

        if (document.documentElement.scrollTop < rect.offsetTop-offsetmain)
        {
            var nav = $(".mobile");
            nav.css("opacity", 0);
        }
    }

        var offset=700;
        var flyins = $(".fly-in-left,.fly-in-right");

        flyins.each(function(index,element){
            if (document.documentElement.scrollTop>element.offsetTop-offset)
            {
                element.classList.add("fly-in-active");
            }
        });
    }