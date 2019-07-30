'use strict';
(function () {
  var cityMap = window.element.cityMap;

  var pinMainElement = cityMap.querySelector('.map__pin--main');
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

  var isActiveMap = false;
  var activeMap = function () {
    if (!isActiveMap) {
      deleteInactive();
      isActiveMap = true;
    }
  };

  pinMainElement.addEventListener('mousedown', function (mousedownEvt) {
    mousedownEvt.preventDefault();

    var coordinateStart = {
      x: mousedownEvt.clientX,
      y: mousedownEvt.clientY,
    };

    var onCityMapMouseMove = function (mousemoveEvt) {
      mousemoveEvt.preventDefault();
      activeMap();

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

      var onCityMapMouseUp = function (mouseUpEvt) {
        mouseUpEvt.preventDefault();
        document.removeEventListener('mousemove', onCityMapMouseMove);
        document.removeEventListener('mouseup', onCityMapMouseUp);
      };

      document.addEventListener('mouseup', onCityMapMouseUp);
    };

    document.addEventListener('mousemove', onCityMapMouseMove);
  });

  var deleteInactive = function () {
    deleteClassInactiveMap();
    deleteClassInactiveForms();
    deleteAttributeAdFormInactive();
    deleteAttributeFormFilterInactive();
    window.mockData.renderPins();
  };

  pinMainElement.addEventListener('mouseup', function () {
    window.main.setAddressValue();
  });
})();
