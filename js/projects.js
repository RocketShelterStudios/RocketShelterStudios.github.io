$(document).ready(function ()
{
    scrollprojects();
    $(window).scroll(scrollprojects);
});

function scrollprojects(e)
    {

        var offsetmain=-200;
        var rect = $(".service-header-container")[0];

        if (document.documentElement.scrollTop>rect.offsetTop-offsetmain)
        {
            rect.classList.add("colapsed");
        }
        else
        {
            rect.classList.remove("colapsed");
        }

    }