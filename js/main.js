'use strict';
(function () {
  var map = window.utils.element.map;
  var mapPinMain = map.querySelector('.map__pin--main');

  var setAddressValue = function (value) {
    var addressElement = window.utils.element.adForm.querySelector('#address');
    var coordinates = window.utils.getPinCoordinates(mapPinMain);
    value = value || coordinates.x + ', ' + coordinates.y;
    return window.utils.setValueElement(addressElement, value);
  };

  setAddressValue();
  window.main = {
    setAddressValue: setAddressValue,
  };
})();
