$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
});
$(document).ready(function(){
    $('html,body').animate({ scrollTop: 0 }, '1');
});



AOS.init({
    delay: 200
});

(function($) {
    $(function () {
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
    });
})(jQuery);
$(function(){
    $('header').vide('img/video.mp4');
  });
 


$(function () {
    $('.header-l').textillate({
        initialDelay: 1000,  
        in:{
            shuffle:false,
            delay: 100, 
        }
    });
    
});
$(function () {
    $('.header-m').textillate({
        initialDelay: 2000,  
        in:{
            shuffle:false,
            effect: 'fadeIn',  
        }
    });
    
});








// $(document).ready(function(){
//  　$('.slick').slick({
//  　　autoplay: true,
//  　　adaptiveHeight: true,
//  　　arrows: true,
//  　　
//   });
//  　});
 
// // img
 
// $(function(){
//     var mainSlider = ".slick"; //メインスライダーid
//     var thumbnailSlider = "#thumbnail_slider"; //サムネイルスライダーid
    
//      $(mainSlider).slick({
//        autoplay: true,
//        speed: 1000,
//        arrows: false,
//        asNavFor: thumbnailSlider
//      });
//      $(thumbnailSlider).slick({
//        slidesToShow: 3,
//        speed: 1000,    
//        asNavFor: mainSlider
//      });
//      //#thumbnail_sliderでクリックしたスライドをカレントにする
//      $(thumbnailSlider+" .slick-slide").on('click',function(){
//        var index = $(this).attr("data-slick-index");
//        $(thumbnailSlider).slick("slickGoTo",index,false);
//      });
//    });
//    Resources

$(function() {
    var slide_main = $(".slide").slick({
      asNavFor: ".slide-navigation",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    });
    var slide_sub = $(".slide-navigation").slick({
      asNavFor: ".slide",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 400,
      focusOnSelect: true,
    });
    var open_window_Width = $(window).width();
    $(window).resize(function() {
      var width = $(window).width();
      if (open_window_Width != width) {
        slide_main.slick("setPosition");
        slide_sub.slick("setPosition");
      }
    });
  });
  