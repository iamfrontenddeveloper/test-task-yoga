
$(document).ready(function() {
    $(".fancybox-thumb").fancybox({
        prevEffect  : 'none',
        nextEffect  : 'none',
        helpers : {
            title   : {
                type: 'outside'
            },
            thumbs  : {
                width   : 150,
                height  : 50
            }
        }
    });

    $(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    navText: [
  '<span class="arrow-owl arrow-left"><img src="images/arrow.png"></span>',
  '<span class="arrow-owl arrow-right"><img src="images/arrow.png"></span>'
],
    nav: true, dots: true
  });
});
    $(".next_button").click(function(){
  owl.trigger("next.owl.carousel");
});
 
$(".prev_button").click(function(){
  owl.trigger("prev.owl.carousel");
});

$(function() {
  // Owl Carousel2
  var owl = $(".owl-carousel2");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    navText: [
  '<span class="arrow-owl arrow-left"><img src="images/arrow.png"></span>',
  '<span class="arrow-owl arrow-right"><img src="images/arrow.png"></span>'
],
    nav: true, dots: true
  });
});
    $(".next_button").click(function(){
  owl.trigger("next.owl.carousel");
});
 
$(".prev_button").click(function(){
  owl.trigger("prev.owl.carousel");
});


$(".nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 100;
    $('body,html').animate({scrollTop: top}, 1500);
});
});

