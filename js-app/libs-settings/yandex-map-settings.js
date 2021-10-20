// YandexMap
ymaps.ready(function () {
  initYandexMap();
});
function initYandexMap() {
  var myMap;
  myMap = new ymaps.Map("yandexMap", {
    center: [55.76, 37.64], // Центр карты
    zoom: 7, // Коэффициент масштаба карты
    controls: [ // Элементы управления
      'zoomControl',
      // 'searchControl',
      // 'typeSelector',
      // 'fullscreenControl',
      // 'routeButtonControl'
    ]
  });
  myMap.behaviors.disable('scrollZoom'); // Отключить изменение масштаба скроллом мыши
  
}