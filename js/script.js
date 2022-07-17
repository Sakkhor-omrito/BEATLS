$(function($){

 // banner js
 $('#banner').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    arrows:true,
    dots:true,
    prevArrow: '<i class="fas fa-arrow-left slick_arrow arrow_left"></i>',
    nextArrow:'<i class="fas fa-arrow-right slick_arrow  arrow_right"></i>',
    dotsClass:'banner_dots',
    
 });


 //service slider
 $('.service_slider').slick({
    slidesToShow:3,
    prevArrow: '<i class="fas fa-arrow-left slick_arrow service_left"></i>',
    nextArrow:'<i class="fas fa-arrow-right slick_arrow  service_right"></i>',
    autoplaySpeed:2000,
    speed:1000,
 });

 //venobox.js
 new VenoBox({
   selector: ".venobox",
   spinner:'circle-fade',
   spinColor:'red',
});

//filter.js
var mixer = mixitup('.portfolio_filter');
$('.filter_menu ul li').on('click',function(){
  $('.filter_menu ul li').removeClass('active');
  $(this).addClass('active');
  

});
//countter up js
$('.counter').counterUp({
   delay: 10,
   time: 10000
});

//menu js
let MenuTop = $('#main_menu').offset().top;


//scroll effect
$(window).on('scroll',function(){

   let scrollToTop = $(window).scrollTop();

   //menu js
   if(scrollToTop > MenuTop){
     $('#main_menu').addClass("menuFix");
   }else{
      $('#main_menu').removeClass("menuFix"); 
   }

   //back to top
   if(scrollToTop >400){
      $('.Backto_top').fadeIn(1000);
   }else{
      $('.Backto_top').fadeOut(1000);
   }
});

//back to Top
$('.Backto_top').on('click',function(){

   $("html,body").animate({
      scrollTop:0
   },8000);
});

//window preloader
$(window).on('load',function(){
  $('.preloader').delay(2000).fadeOut(3000);
});


});