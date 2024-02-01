
$(document).ready(function() {
   
   
    $(function() {
        $('.header__burger').click(function(){
            $(this).toggleClass('open');
        });
    });

    $(".header__burger").on('click', function() {
        $(".header__nav").toggleClass("open-nav");
        // $("main").toggleClass("main-none")
    });



    $(".batch__product-mob").on('click', function() {
      $(this).toggleClass("batch__product-mob--active");
  
    });
   
    
    $('.partners__select').on('click', '.partners__select-head', function() {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.partners__select-head').removeClass('open');
          $('.partners__select-list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.partners__select').on('click', '.partners__select-item', function() {
      $('.partners__select-head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function(e) {
      if (!$(e.target).closest('.partners__select').length) {
          $('.partners__select-head').removeClass('open');
          $('.partners__select-list').fadeOut();
      }
  });





  
});

var init = false;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      categoriesSwiper = new Swiper(".categories__swiper", {
        direction: "horizontal",
        slidesPerView: 'auto',
        wrapperClass: 'categories__swiper-wrapper',
        slideClass: 'categories__slide',
        navigation: {
          prevEl: '.categories__prev',
          nextEl: '.categories__next',
        },
      
        pagination: {
          el: ".categories__fraction",
          type: "fraction",
        },
        
      });
    }
  } else if (init) {
    categoriesSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

 
      

$('.header__search').on('click', function() {

  $('.header__inner-search').addClass('header__inner-search--active');

});


$('.header__inner-search-close').on('click', function() {

  $('.header__inner-search').removeClass('header__inner-search--active');

});














