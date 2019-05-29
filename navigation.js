window.onscroll = function(event)
{
    var navbar = document.getElementsByClassName("navigasjon");
    var heade = document.getElementsByTagName("header");

    if (window.scrollY >= 205)
    {
        console.log("true")
        navbar[0].style.position = "fixed";
        navbar[0].style.top = "0px";
        navbar[0].style.left = "0px";
    }
    else 
    {
        navbar[0].style.position = "absolute";
        navbar[0].style.top = "200px";
        navbar[0].style.left = "0px";
    }
}