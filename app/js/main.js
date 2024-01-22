const player = new Plyr('#player');


const mainSwiper = new Swiper('.main__swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  wrapperClass: 'main__swiper-wrapper',
  slideClass: 'main__swiper-slide',
  speed: 400,
  autoplay: true,
  autoplay: {
      delay: 8000,
  },
  navigation: {
    prevEl: '.main__prev',
    nextEl: '.main__next',
  },

  pagination: {
    el: ".main__fraction",
    type: "fraction",
  },


  breakpoints: {
    
    748: {
      slidesPerView: 'auto',
     
      
   
     
    },
   
  },

 
});




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




const mainTwoSwiper = new Swiper('.main__swiper-two', {
  slidesPerView: 'auto',
  loop: true,
  wrapperClass: 'main__swiper-two-wrapper',
  slideClass: 'main__swiper-two-slide',
  speed: 400,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 4000,
  },
  navigation: {
    nextEl: '.main__swiper-two-next',
  },



 
});

const bestsellersSwiper = new Swiper('.bestsellers__swiper', {
 
  slidesPerView: 2,
  slidesPerGroup: 4,
  
  grid: {
    rows: 2,
  },
 
  spaceBetween: 16,
  wrapperClass: 'bestsellers__swiper-wrapper',
  slideClass: 'bestsellers__slide',
  speed: 400,

  navigation: {
    prevEl: '.bestsellers__prev',
    nextEl: '.bestsellers__next',
    lockClass: 'bestsellers__pagination-none'
    
  },

  pagination: {
    el: ".bestsellers__fraction",
    type: "fraction",
    lockClass: 'bestsellers__pagination-none'
  },

  breakpoints: {
    
    748: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
      
      grid: {
        rows: 1,
      },
     
    },
   
  },

 
});





const newSwiper = new Swiper('.new__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 16,
  wrapperClass: 'new__swiper-wrapper',
  slideClass: 'new__slide',
  speed: 400,
  
  navigation: {
    prevEl: '.new__prev',
    nextEl: '.new__next',
    lockClass: 'new__none-pag'
  },

  pagination: {
    el: ".new__fraction",
    type: "fraction",
    lockClass: 'new__none-pag'
  },

  breakpoints: {
    
    748: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
      
      grid: {
        rows: 1,
      },
     
    },
   
  },
 
});



const cardDeskSwiper = new Swiper('.card-desk__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  wrapperClass: 'card-desk__swiper-wrapper',
  slideClass: 'card-desk__slide',
  speed: 400,
  navigation: {
    prevEl: '.card-desk__prev',
    nextEl: '.card-desk__next',
  },

  pagination: {
    el: ".card-desk__fraction",
    type: "fraction",
  },


  

 
});

const advantagesSlide = new Swiper('.advantages__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  wrapperClass: 'advantages__swiper-wrapper',
  slideClass: 'advantages__swiper-slide',
  speed: 400,
  navigation: {
    prevEl: '.advantages__prev',
    nextEl: '.advantages__next',
  },

  pagination: {
    el: ".advantages__fraction",
    type: "fraction",
  },

  breakpoints: {
    
    748: {
      slidesPerView: 'auto',
    },
   
  },
  

 
});

// Инициализация превью слайдера
const cardOne = new Swiper('.card__swiper', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 9, // расстояние между слайдами
  loop: true,
	navigation: { // задаем кнопки навигации
		nextEl: '.card__swiper-next', // кнопка Next
		// prevEl: '' //
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
      spaceBetween: 9,
		}
	}
});
// Инициализация слайдера изображений
const cardTwo = new Swiper('.card__two-swiper', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
	navigation: { // задаем кнопки навигации
		nextEl: '.card-swiper__next', // кнопка Next

	},
  pagination: {
    el: ".card__two-swiper-pagination",
    dynamicBullets: true,
  },
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: cardOne // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});




// slider на старнице каталог 



const catalogCenter = new Swiper('.main-catalog__center-swiper', {

	slidesPerView: 1, 
  speed: 400,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".main-catalog__fraction",
    type: "fraction",
  },
	navigation: { 
    prevEl: '.main-catalog__prev',
		nextEl: '.main-catalog__next', 
		
	},
	freeMode: true, 
	
});



ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.749633, 37.537434],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'DEEP VAPE',
          balloonContent: [
           `
           <div class="yandex-content">
    <div class="yandex-content__title">
        DEEP VAPE
    </div>
    
</div>`
          ]
      }, {
          // // Опции.
          // // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // // Своё изображение иконки метки.
          iconImageHref: 'img/galka.svg',
          // Размеры метки.
          iconImageSize: [69, 78],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.785979, 37.660521], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img\galka.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});




console.log('Start');
var $ = document.getElementById.bind(document),
    container = $('scrollbar-container'),
    content = $('content'),
    scroll = $('scrollbar');

content.addEventListener('scroll', function(e) {
  scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
  scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
});
var event = new Event('scroll');

window.addEventListener('resize', content.dispatchEvent.bind(content, event));
content.dispatchEvent(event);

scroll.addEventListener('mousedown', function(start){
  start.preventDefault();
  var y = scroll.offsetTop;
  var onMove = function(end){
    var delta = end.pageY - start.pageY;
    scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
    content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', function(){
    document.removeEventListener('mousemove', onMove);
  });
});
console.log('Done');



 
