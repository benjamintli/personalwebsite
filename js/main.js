
$(document).ready(function () {
    $(document).on('mouseenter', '.card', function () {
        $(this).find(".cardbutton").show();
        $(this).find(".cardoverlay").show();
    }).on('mouseleave', '.card', function () {
        $(this).find(".cardbutton").hide();
        $(this).find(".cardoverlay").hide();
    });
});

$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })