
$(document).ready(function() {


  $(".poap-video-open").click( function() {
    $(".poap-video").addClass("poap-video--active");
  
  });


  $(".poap-video__close").click( function() {
    $(".poap-video").removeClass("poap-video--active");
  
  });
   
  $(".popup-open").click( function() {
    $(".popup").addClass("popup--active");
  
  });
  
  $(".popup__close").click( function() {
    $(".popup").removeClass("popup--active");
  
  });
   
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



  $('.card-desk__item').click(function () {
    var id = $(this).attr('data-tab'),
      content = $('.card-desk__block[data-tab="' + id + '"]');
  
    $('.card-desk__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
  
    $('.card-desk__block.active').removeClass('active'); // 3
    content.addClass('active'); // 4
  });
  
  


  


  
});


 
      

$('.header__search').on('click', function() {

  $('.header__inner-search').addClass('header__inner-search--active');
  $('.overflow-black ').css('display', 'block');
 

});


$('.header__inner-search-close').on('click', function() {

  $('.header__inner-search').removeClass('header__inner-search--active');
  $('.overflow-black ').css('display', 'none');

});


$('.card__select-bottom').on('click', function() {

  $('.card__select-list').toggleClass('card__select-list--active');

});











var text = $('.about__circle-left-text').html();
var textLen = text.length;

wrapLettersInSpan(text);
addTransformCss();



function wrapLettersInSpan(text) {
  var arr = text.split('');
  for (var i = 0; i < textLen; i++) {
    arr[i] = "<span class='letter'>" + arr[i] + "</span>";
  }
  $('.about__circle-left-text').html(arr.join(''));
}

function addTransformCss() {
  var transformStart = 70;
  var transformStep = 190 / (textLen - 50);

  $('.letter').each(function(i, elem) {
    $(elem).css({transform: 'rotate(' + transformStart + 'deg)'});
    transformStart += transformStep;
  });
}








