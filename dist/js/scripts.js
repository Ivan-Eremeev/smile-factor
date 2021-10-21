//  Ivan Eremeev - 2021
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1025,
			breakSm = 769,
			breakXs = 500;
	
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
	      infinite: false, // Зацикленное пролистывание
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
	
	function sliderReview(slider) {
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
	      infinite: false, // Зацикленное пролистывание
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
	    .on('setPosition', function (event, slick) {
	      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	    });
	  }
	}
	sliderReview($('#sliderReview'))
	// YandexMap
	ymaps.ready(function () {
	  initYandexMap();
	});
	function initYandexMap() {
	  var items = [
	      {
	        name: 'Клиника на Народного Ополчения',
	        center: [59.850315800801255, 30.281382023803648],
	      },
	      {
	        name: 'Клиника на Разъезжей',
	        center: [59.9222401136246, 30.351074517196654],
	      },
	      {
	        name: 'Клиника на Сиреневом бульваре',
	        center: [60.05225609536308, 30.364689367736812],
	      },
	      {
	        name: 'Клиника на Варшавской',
	        center: [59.87148299712791, 30.312396255285115],
	      },
	      {
	        name: 'Клиника на Авиаконструкторов',
	        center: [60.009168181805215, 30.246620373680006],
	      },
	      {
	        name: 'Клиника на Коломяжском',
	        center: [59.99999879296212, 30.297173081481475],
	      },
	      {
	        name: 'Клиника на Будапештской',
	        center: [59.83800779964756, 30.3963881579374],
	      },
	    ],
	    myMap = new ymaps.Map("yandexMap", {
	    center: [59.92, 30.34], // Центр карты
	    zoom: 11, // Коэффициент масштаба карты
	    controls: [ // Элементы управления
	      // 'zoomControl',
	    ]
	  }),
	    menu = $('.map__list'),
	    collection = new ymaps.GeoObjectCollection(null, { preset: "islands#redDotIcon" });
	  myMap.behaviors.disable('scrollZoom'); // Отключить изменение масштаба скроллом мыши
	  for (let i = 0; i < items.length; i++) {
	    createMenu(items[i]);
	  };
	  function createMenu(item) {
	    // Пункт меню.
	    var itemMenu = $('<li><a href="#">' + item.name + '</a></li>'),
	      // Создаем метку.
	      placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });
	    // Добавляем метку в коллекцию.
	    collection.add(placemark);
	    // Добавляем пункт в меню.
	    itemMenu
	      .appendTo(menu)
	      .find('a')
	      .bind('click', function (e) {
	        e.preventDefault();
	        if (!placemark.balloon.isOpen()) {
	          placemark.balloon.open();
	        } else {
	          placemark.balloon.close();
	        }
	        menu.find('a').removeClass('active');
	        $(this).addClass('active');
	      });
	  };
	  // Добавляем коллекцию на карту.
	  myMap.geoObjects.add(collection);
	  // Перерисовка карты к новым размерам контейнера
	  myMap.container.fitToViewport();
	  // Выставляем масштаб карты чтобы были видны все метки.
	  myMap.setBounds(myMap.geoObjects.getBounds());
	  
	  myMap.controls.add('zoomControl', {
	    float: 'none',
	    position: {
	      right: 40,
	      top: 50
	    }
	  });
	}
	// Простая проверка форм на заполненность и отправка аяксом
	function formSubmit() {
	  $("[type=submit]").on('click', function (e){ 
	    e.preventDefault();
	    // Заводим переменные
	    // Ищем родительскую фору для того чтобы манипулировать элементами находящимися только внутри неё
	    var form = $(this).closest('form');
	    // Запоминаем путь к php обработчику формы
	    var url = form.attr('action');
	    // Собираем все данные с полей формы для отправки
	    var form_data = form.serialize();
	    // Выбираем все обязательные поля по атрибуту required
	    var field = form.find('[required]');
	
	    // Задаем количество пустых полей по умолчанию
	    empty = 0;
	
	    // Перебираем каждое обязательное поле
	    field.each(function() {
	      // Если поля пустые
	      if ($(this).val() == "") {
	        // Убираем класс valid
	        $(this).removeClass('valid');
	        // Добавляем класс invalid
	        $(this).addClass('invalid');
	        // Увеличиваем счеткик пустых полей
	        empty++;
	      // Если поля не пустые
	      } else {
	        // Убираем класс invalid
	        $(this).removeClass('invalid');
	        // Добавляем класс valid если необходимо для стилизации
	        $(this).addClass('valid');
	      }  
	    });
	
	    // Можно проверить пересчет пустых полей в консоли
	    // console.log(empty);
	
	    // Если пустых полей больше 0
	    if (empty > 0) {
	      // Останавливаем работу скрипта запрещая отправку формы
	      return false;
	    // Если пустых полей нет
	    } else {        
	      // Запускаем отправку формы без перезагрузки страницы
	      $.ajax({
	        // Используем переменные в параметрах для отправки формы
	        url: url,
	        type: "POST",
	        dataType: "html",
	        data: form_data,
	        // При успешной отправке
	        // В аргумент response(произвольное название) можно записать и видеть результат ответа сервера
	        success: function (response) {
	          console.log(response);
	          // Дальше несколько вариантов
	          // Открываем окно с сообщением
	          modalShow($('#success'));
	          setTimeout(() => {
	            modalHide($('#success'));
	            modalHide($('#modal'));
	          }, 2000);
	          // Открываем какую то страницу. как правило так называемую "страницу спасибо"
	          // document.location.href = "success.html";
	        },
	        // При ошибке отправки
	        error: function (response) {
	          console.log(response);
	          // Тоже что нибудь делаем
	          modalShow($('#error'));
	          setTimeout(() => {
	            modalHide($('#error'));
	          }, 2000);
	          // Выводим в заготовленный блок какое то сообщение
	          // $('#rezult').text('Проверте корректность заполнения полей формы.');
	        }
	      });
	    }
	  });
	  // Убираем класс invalid при снятии фокуса если поле не пустое
	  $('[required]').on('blur', function() {
	    if ($(this).val() != '') {
	      $(this).removeClass('invalid');
	    }
	  });
	  // Если есть чекбокс с политикой можно отключать кнопку при снятом чекбоксе добавляя к кнопке атрибут disabled 
	  $('.form__privacy input').on('change', function(event) {
	    event.preventDefault();
	    var btn = $(this).closest('form').find('.btn');
	    if ($(this).prop('checked')) {
	      btn.removeAttr('disabled');
	      // console.log('checked');
	    } else {
	      btn.attr('disabled', true);
	    }
	  });
	}
	formSubmit();

	// Запрет перехода по ссылкам с хэшем
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Модальное окно
	function modal() {
		$('.modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var html = $('html'),
				modalClose = thisModal.find($('.modal_close')),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		thisModal.show(0, function() {
			setTimeout(thisModal.addClass('open'),500);
		});
		// html.addClass('lock').css('padding-right',scrollbarWidth);
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		var html = $('html');
		thisModal.removeClass('open');
		// html.removeClass('lock').css('padding-right',0);
		setTimeout(() => {
			thisModal.hide();
		}, 500);
	};
	modal();

	// Inputmask
	$('.tel').inputmask('+7(999)999-99-99')
	$('.name').inputmask('a{1,20}')

	// AirDatepicker
	$('#datepicker').datepicker();

	// Выпадайки при клике по кнопке
	// Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
	// Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
	function dropBlock(btn) {
		var $this = undefined,
				drop = undefined,
				close = $('.js-drop-close');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('drop'));
			$this.toggleClass('is-active');
			drop.toggleClass('open');
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0) {
					$this.removeClass('is-active');
					drop.removeClass('open');
				}
			});
		})
		close.on('click', function () {
			$('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
			$('#' + $(this).data('drop')).removeClass('open');
		})
	}
	dropBlock($('.js-drop-btn'));

	// JQueryMathHeight
	if ($('.team__name').length) {
		$('.team__name').matchHeight();
	}

});