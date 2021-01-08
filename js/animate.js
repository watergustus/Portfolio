$("#whoiam").click(function(){
    var div = $(this);
    div.animate({opacity: '0.2'}, "medium");
    div.animate({opacity: '0.6'}, "medium");
    div.animate({opacity: '0.4'}, "medium");
    div.animate({opacity: '0.8'}, "medium");
    div.animate({opacity: '1'}, "medium");
    
    $("#qoute").animate({fontSize: '2em'}, 'slow');
    $("#qoute").animate({fontSize: '0.75em'}, 'slow');
});

$("#aboutMeNavBar").click(function(){
    $("#linkaboutme").fadeIn();
    $("#linkaboutme").fadeIn("slow");
    $("#linkaboutme").fadeIn(3000);
});