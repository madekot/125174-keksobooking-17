'use strict';
(function () {
  var map = window.utils.element.map;

  var pinMainElement = map.querySelector('.map__pin--main');
  var filtersElement = map.querySelector('.map__filters');


  var deleteClassInactive = function () {
    map.classList.remove('map--faded');
    filtersElement.classList.remove('ad-form--disabled');
    window.utils.element.adForm.classList.remove('ad-form--disabled');
  };

  var deleteAttributeInactive = function () {
    var childrenElementsAdForm = Array.from(window.utils.element.adForm.children);
    var childrenElementsFilter = Array.from(filtersElement.children);
    childrenElementsAdForm.concat(childrenElementsFilter).forEach(function (fildsetElement) {
      fildsetElement.disabled = false;
    });
  };

  pinMainElement.addEventListener('click', function () {
    deleteClassInactive();
    deleteAttributeInactive();
    window.mockData.renderPins();
  });

  pinMainElement.addEventListener('mouseup', function () {
    window.main.setAddressValue();
  });
})();
