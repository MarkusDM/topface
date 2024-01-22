
const mainSwiper = new Swiper('.main__swiper', {
  slidesPerView: 'auto',
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
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 18,
  wrapperClass: 'bestsellers__swiper-wrapper',
  slideClass: 'bestsellers__slide',
  speed: 400,
  autoplay: true,
  autoplay: {
      delay: 8000,
  },

  navigation: {
    prevEl: '.bestsellers__prev',
    nextEl: '.bestsellers__next',
  },

  pagination: {
    el: ".bestsellers__fraction",
    type: "fraction",
  },

  breakpoints: {
    
    748: {
      slidesPerView: 'auto',
    },
   
  },

 
});





const newSwiper = new Swiper('.new__swiper', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 18,
  wrapperClass: 'new__swiper-wrapper',
  slideClass: 'new__slide',
  speed: 400,
  autoplay: true,
  autoplay: {
      delay: 8000,
  },
  navigation: {
    prevEl: '.new__prev',
    nextEl: '.new__next',
  },

  pagination: {
    el: ".new__fraction",
    type: "fraction",
  },


  breakpoints: {
    
    748: {
      slidesPerView: 'auto',
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





function cardTab(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.card-desk__js');
      let b = p.querySelectorAll('.card-desk__block-js');

      function tabActive(index) {
          t.forEach(item => {
              item.classList.remove('active-item');
          });
          t[index].classList.add('active-item');
          b.forEach(item => {
              item.classList.remove('active-block');
          });
          b[index].classList.add('active-block');
      }

      tabActive(i)

      t.forEach((element, index) => {
          element.addEventListener('click', function(e) {
              e.preventDefault()
              tabActive(index)
          })
      });
  } catch {
      console.log('tabs error')
  }
}

if (document.querySelector('.card-desk__inner')) {
  let myTabs = document.querySelectorAll('.card-desk__inner');
  myTabs.forEach(element => {
    cardTab(element);
  });
}











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

const catalogRight = new Swiper('.main-catalog__right-swiper', {
  loop: true,
  speed: 400,
	slidesPerView: 1, 
  freeMode: true, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  wrapperClass: 'main-catalog__right-swiper-wrapper',
  slideClass: 'main-catalog__right-slide',
	navigation: { 
    prevEl: '.main-catalog__prev',
		nextEl: '.main-catalog__next', 
		
	},

	thumbs: { 
		swiper: catalogCenter
	},
  
});


const catalogLeft = new Swiper('.main-catalog__left-swiper', {
	
  loop: true,
  speed: 400,
	slidesPerView: 1, 
  freeMode: true, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  wrapperClass: 'main-catalog__left-swiper-wrapper',
  slideClass: 'main-catalog__left-slide',
  navigation: { 
    prevEl: '.main-catalog__prev',
		nextEl: '.main-catalog__next', 
		
	},

	thumbs: { 
		swiper: catalogCenter
	},
  
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







const openSize = () => {
  const button = document.querySelector(`.js-open-size`);
  if (!button) return;

  const sizeText = document.querySelector(`.js-size`);
  button.addEventListener(`click`, (evt) => {
    button.classList.toggle(`open`);


    if (evt.target.closest(`.card__select-item`)) {
        const block = evt.target.closest(`.card__select-item`)
      const text = block.innerHTML;
      sizeText.innerHTML = text;
    }

  })
}

openSize();
// 
