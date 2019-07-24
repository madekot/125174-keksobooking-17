'use strict';
(function () {
  var randomInteger = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  };

  var getRandomArrayElement = function (multitude) {
    return multitude[randomInteger(0, multitude.length - 1)];
  };

  var getPinCoordinates = function (element) {
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
    };
  };

  var setValueElement = function (element, value) {
    element.value = value;
  };

  window.utils = {
    getPinCoordinates: getPinCoordinates,
    setValueElement: setValueElement,
    element: {
      map: document.querySelector('.map'),
      adForm: document.querySelector('.ad-form'),
    },
    random: {
      integer: randomInteger,
      elementArr: getRandomArrayElement,
    },
  };
})();
