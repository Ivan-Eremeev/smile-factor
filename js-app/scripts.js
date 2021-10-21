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
	
	//= libs-settings/slick_settings.js
	//= libs-settings/yandex-map-settings.js
	//= mailto-ajax.js

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