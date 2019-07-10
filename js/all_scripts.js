$("button#call_back-pop").click(function() {
    $(".popup_callback").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});

$("span#call_back-pop").click(function() {
    $(".popup_callback").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    $(".block--more--1").click(function() {
    $(".popup_showroom").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
}); 
    $(".show-room").click(function() {
    $(".popup_showroom").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    $(".block--more--2").click(function() {
    $(".popup_premium").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
     
    $(".sells-btn").click(function() {
    $(".popup_like").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
}); 


    $(".discounts1").click(function() {
    $(".popup_promo-list").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    $(".btn-all-discounts").click(function() {
    $(".popup_promo-item").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    
    
    $(".mortgage").click(function() {
    $(".popup_mortgage").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    
    $(".close-pop-up").click(function() {
    $(".popup_callback").removeClass("show-block"); 
    $(".popup_showroom").removeClass("show-block"); 
    $(".popup_promo-item").removeClass("show-block"); 
    $(".popup_mortgage").removeClass("show-block"); 
    $(".popup_premium").removeClass("show-block"); 
    $(".overlay-m").removeClass("show-block");
    $(".popup_like").removeClass("show-block"); 
    $(".popup_promo-list").removeClass("show-block"); 
});
    

    
    
    $(".menu").click(function() {
    $(".mobile-menu").addClass("show-block");
    $(".overlay-m").addClass("show-block");
    $(".mobile-menu").removeClass("none-block");
    $(".overlay-m").removeClass("none-block")
});
    
    
   
    
    $(".close-mobile-menu").click(function() {
    $(".mobile-menu").addClass("none-block");
    $(".overlay-m").addClass("none-block")
});
    
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});  