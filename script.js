

//https://kenwheeler.github.io/slick/
$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    prevArrow:"<div class='btn-pre'><i class='fa-solid fa-caret-left'></i></div>",
     nextArrow:"<div class='btn-next'><i class='fa-solid fa-caret-right'></i></div>"
     
  });

  $(".slider").attr("display","block")


  
$('.slider-hot').slick({
    infinite:true,
    slidesToShow: 5,
    slidesToScroll: 1
  });
