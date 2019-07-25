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

  var getCoordinatesFromParent = function (element) {
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
    };
  };

  window.utils = {
    getCoordinatesFromParent: getCoordinatesFromParent,
    random: {
      integer: randomInteger,
      elementArr: getRandomArrayElement,
    },
  };
})();
