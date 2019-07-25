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

  pinMainElement.addEventListener('click', function () {
    deleteClassInactiveMap();
    deleteClassInactiveForms();
    deleteAttributeAdFormInactive();
    deleteAttributeFormFilterInactive();
    window.mockData.renderPins();
  });

  pinMainElement.addEventListener('mouseup', function () {
    window.main.setAddressValue();
  });
})();
