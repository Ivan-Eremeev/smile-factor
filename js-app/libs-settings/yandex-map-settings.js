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