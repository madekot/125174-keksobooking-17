'use strict';
(function () {
  var TAIL_PIN_HEIGHT = 22;
  var cityMap = window.element.cityMap;
  var mapPinMain = cityMap.querySelector('.map__pin--main');

  var convertObjectToString = function (x, y) {
    return x + ', ' + y;
  };

  var setAddressValue = function (value) {
    var addressElement = window.element.adForm.querySelector('#address');
    var coordinates = window.utils.getCoordinatesFromParent(mapPinMain);
    if (value === undefined) {
      value = convertObjectToString(coordinates.x, coordinates.y);
    } else {
      value = convertObjectToString(value.x, value.y);
    }
    addressElement.value = value;
  };

  var calculateCoordinateSharpEndPin = function () {
    var pinMainSizeWithTail = {
      width: mapPinMain.clientWidth,
      height: mapPinMain.clientHeight + TAIL_PIN_HEIGHT,
    };

    var pinCoordinateWithTail = {
      x: Math.round(mapPinMain.offsetLeft + (pinMainSizeWithTail.width / 2)),
      y: Math.round(mapPinMain.offsetTop + pinMainSizeWithTail.height),
    };

    return pinCoordinateWithTail;
  };

  setAddressValue();

  window.main = {
    setAddressValue: setAddressValue,
    calculateCoordinateSharpEndPin: calculateCoordinateSharpEndPin,
  };
})();
