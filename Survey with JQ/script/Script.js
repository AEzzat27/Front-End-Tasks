$(document).ready(function(){
    $('.btn').mouseenter(function(){
        $('.Header').toggle(1000);
        $(`.Header`).css({
            "color" : "red" ,
            "font-size" : "1.3em",
            "background-color" : "black"
    });
    $(`.content`).slideToggle(5000);
    });
    $(`.Deco`).focus(function(){
        $(this).css(`color` , `red`);
    });
    $(`.Deco`).blur(function(){
        $(this).css({"width" : "30px" , "color" : " blue"});
    });
    
    
});