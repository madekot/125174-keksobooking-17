'use strict';
(function () {
  var cityMap = window.element.cityMap;

  var setAddressValue = function (value) {
    var mapPinMain = cityMap.querySelector('.map__pin--main');
    var addressElement = window.element.adForm.querySelector('#address');
    var coordinates = window.utils.getCoordinatesFromParent(mapPinMain);
    value = value || coordinates.x + ', ' + coordinates.y;
    addressElement.value = value;
  };

  setAddressValue();
  window.main = {
    setAddressValue: setAddressValue,
  };
})();
