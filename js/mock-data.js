'use strict';
(function () {
  var AVATAR_MIN = 1;
  var AVATAR_MAX = 8;
  var TYPE = ['palace', 'flat', 'house', 'bungalo'];
  var PIN_Y_MIN = 130;
  var PIN_Y_MAX = 630;
  var QUANTITY_ADS = 8;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;

  var map = document.querySelector('.map');

  var couterAvatar = (function () {
    var couter = AVATAR_MIN;
    return function () {
      if (couter > AVATAR_MAX) {
        couter = AVATAR_MIN;
      }
      return couter++;
    };
  })();

  var createAd = function () {
    return {
      author: {
        avatar: 'img/avatars/user0' + couterAvatar() + '.png',
      },
      offer: {
        type: window.utils.random.elementArr(TYPE)
      },
      location: {
        x: window.utils.random.integer(PIN_Y_MIN, PIN_Y_MAX),
        y: window.utils.random.integer(PIN_Y_MIN, PIN_Y_MAX),
      },
    };
  };

  var activateMap = function () {
    map.classList.remove('map--faded');
  };

  var createAdItems = function () {
    activateMap();
    var result = [];
    for (var i = 0; i < QUANTITY_ADS; i++) {
      result.push(createAd());
    }
    return result;
  };

  var calculatePointPin = function (pinElement, dataPin) {
    pinElement.style.left = dataPin.location.x - PIN_WIDTH / 2 + 'px';
    pinElement.style.top = dataPin.location.y - PIN_HEIGHT + 'px';
  };

  var createPinElement = function (dataPin) {
    var templatePin = document.querySelector('#pin');
    var templateContent = templatePin.content.querySelector('.map__pin');

    var pinElement = templateContent.cloneNode(true);
    calculatePointPin(pinElement, dataPin);
    pinElement.firstElementChild.src = dataPin.author.avatar;
    pinElement.firstElementChild.alt = 'Заголовок объявления';

    return pinElement;
  };

  var renderPins = function (data) {
    var fragment = document.createDocumentFragment();
    var mapPinsElement = map.querySelector('.map__pins');
    data.forEach(function (AdItem) {
      var pinElement = createPinElement(AdItem);
      fragment.appendChild(pinElement);
    });
    mapPinsElement.appendChild(fragment);
  };


  renderPins(createAdItems());
})();
