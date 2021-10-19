// Slick Slider
function slider(slider,sliderFor) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      asNavFor: sliderFor, // Связь со слайдерами
      dots: true, // Пагинация
      arrows: true, // Стрелки
      speed: 500, // Скорость перехода слайдов
      autoplay: false, // Автопрокрутка
      autoplaySpeed: 2000, // Скорость автопрокрутки
      centerMode: false, // Задает класс .slick-center слайду в центре
      focusOnSelect: true, // Выбрать слайд кликом
      infinite: false, // Зацикленное пролистывание
      vertical: false, // Вертикальный слайдер
      rtl: false, // Слайды листаются справа налево
      centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
      swipeToSlide: true, // Свободное перелистывание (на произвольное кол-во слайдов)
      responsive: [ // Адаптация
        {
        breakpoint: 992,
          settings: {
            arrows: false,
          }
        },
        {
        breakpoint: 720,
          settings: {
            arrows: false,
          }
        }
      ]
      // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
    });
    
    sliderFor.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: false, // Стрелки
      fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
      asNavFor: slider // Связь со слайдерами
    });
  }
}
// slider();

// $('.your-slider').slick('unslick'); // Уничтожить слайдер

// $('.your-slider').slick('setPosition') // Переотрисовка слайдера. Например для использования в табах

// Slick Slider
function slider(slider) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: true, // Стрелки
      prevArrow: '<div class="slider-arrow slider-arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"/></svg></div>',
      nextArrow: '<div class="slider-arrow slider-arrow--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"/></svg></div>',
      speed: 500, // Скорость перехода слайдов
      autoplay: false, // Автопрокрутка
      autoplaySpeed: 2000, // Скорость автопрокрутки
      infinite: true, // Зацикленное пролистывание
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
    })
  }
}
slider($('#sliderSale'));

function sliderPortfolio(slider) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 2, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: true, // Стрелки
      prevArrow: '<div class="slider-arrow slider-arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"/></svg></div>',
      nextArrow: '<div class="slider-arrow slider-arrow--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"/></svg></div>',
      speed: 500, // Скорость перехода слайдов
      autoplay: false, // Автопрокрутка
      autoplaySpeed: 2000, // Скорость автопрокрутки
      infinite: true, // Зацикленное пролистывание
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
      swipeToSlide: true, // Свободное перелистывание (на произвольное кол-во слайдов)
      responsive: [ // Адаптация
        {
          breakpoint: breakSm,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    })
  }
}
sliderPortfolio($('#sliderPortfolio'))

function sliderTeam(slider) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 3, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: true, // Стрелки
      prevArrow: '<div class="slider-arrow slider-arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"/></svg></div>',
      nextArrow: '<div class="slider-arrow slider-arrow--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"/></svg></div>',
      speed: 500, // Скорость перехода слайдов
      autoplay: false, // Автопрокрутка
      autoplaySpeed: 2000, // Скорость автопрокрутки
      infinite: false, // Зацикленное пролистывание
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
      swipeToSlide: true, // Свободное перелистывание (на произвольное кол-во слайдов)
      responsive: [ // Адаптация
        {
          breakpoint: breakSm,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: breakXs,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    })
    .on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  }
}
sliderTeam($('#sliderTeam'))