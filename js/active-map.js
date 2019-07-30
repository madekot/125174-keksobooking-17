'use strict';
(function () {
  var TAIL_PIN_HEIGHT = 22;
  var cityMap = window.element.cityMap;

  var pinMainElement = window.element.pinMain;
  var filtersElement = cityMap.querySelector('.map__filters');

  var deleteClassInactiveMap = function () {
    cityMap.classList.remove('map--faded');
  };

  var deleteClassInactiveForms = function () {
    filtersElement.classList.remove('ad-form--disabled');
    window.element.adForm.classList.remove('ad-form--disabled');
  };

  var deleteAttributeDisabled = function (ParentElement) {
    var childrenElementsAdForm = Array.from(ParentElement);
    childrenElementsAdForm.forEach(function (fildsetElement) {
      fildsetElement.disabled = false;
    });
  };

  var deleteAttributeAdFormInactive = function () {
    return (function () {
      deleteAttributeDisabled(window.element.adForm.children);
    })();
  };

  var deleteAttributeFormFilterInactive = function () {
    return (function () {
      deleteAttributeDisabled(filtersElement.children);
    })();
  };

  var deleteInactive = function () {
    deleteClassInactiveMap();
    deleteClassInactiveForms();
    deleteAttributeAdFormInactive();
    deleteAttributeFormFilterInactive();
    window.mockData.renderPins();
  };

  var isActiveMap = false;
  var activeMap = function () {
    if (!isActiveMap) {
      deleteInactive();
      isActiveMap = true;
    }
  };

  var restrictPin = function () {
    var pinPositionLeftNumber = parseInt(pinMainElement.style.left, 10);
    var pinPositionTopNumber = parseInt(pinMainElement.style.top, 10);
    var offsetParentWidth = pinMainElement.offsetParent.clientWidth;

    if (pinPositionLeftNumber < 0) {
      pinMainElement.style.left = 0;
    }

    if (pinPositionLeftNumber + pinMainElement.clientWidth > offsetParentWidth) {
      pinMainElement.style.left = (offsetParentWidth - pinMainElement.clientWidth) + 'px';
    }

    if (pinPositionTopNumber < 0) {
      pinMainElement.style.top = 0;
    }

    if (pinPositionTopNumber + pinMainElement.clientHeight + TAIL_PIN_HEIGHT > pinMainElement.offsetParent.clientHeight) {
      pinMainElement.style.top = pinMainElement.offsetParent.clientHeight - (pinMainElement.clientHeight + TAIL_PIN_HEIGHT) + 'px';
    }

  };

  pinMainElement.addEventListener('mousedown', function (mousedownEvt) {
    mousedownEvt.preventDefault();
    activeMap();

    var coordinateStart = {
      x: mousedownEvt.clientX,
      y: mousedownEvt.clientY,
    };

    var onCityMapMouseUp = function (mouseUpEvt) {
      mouseUpEvt.preventDefault();
      window.main.setAddressValue(window.main.calculateCoordinateSharpEndPin());
      document.removeEventListener('mousemove', onCityMapMouseMove);
      document.removeEventListener('mouseup', onCityMapMouseUp);
    };

    var onCityMapMouseMove = function (mousemoveEvt) {
      mousemoveEvt.preventDefault();
      window.main.setAddressValue(window.main.calculateCoordinateSharpEndPin());

      var shiftCoordinate = {
        x: coordinateStart.x - mousemoveEvt.clientX,
        y: coordinateStart.y - mousemoveEvt.clientY,
      };

      coordinateStart = {
        x: mousemoveEvt.clientX,
        y: mousemoveEvt.clientY,
      };

      pinMainElement.style.left = (pinMainElement.offsetLeft - shiftCoordinate.x) + 'px';
      pinMainElement.style.top = (pinMainElement.offsetTop - shiftCoordinate.y) + 'px';
      restrictPin();
    };

    document.addEventListener('mousemove', onCityMapMouseMove);
    document.addEventListener('mouseup', onCityMapMouseUp);
  });
})();
