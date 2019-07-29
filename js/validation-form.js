'use strict';
(function () {
  var priceElement = document.querySelector('#price');
  var timeInElement = document.querySelector('#timein');
  var timeoutElement = document.querySelector('#timeout');
  var typeOfHousingElement = document.querySelector('#type');
  var roomNumberElement = document.querySelector('#room_number');
  var capacityElement = document.querySelector('#capacity');

  var typeToPrice = {
    'bungalo': 0,
    'flat': 1000,
    'house': 5000,
    'palace': 10000,
  };

  var setTypeToPrice = function () {
    priceElement.placeholder = typeToPrice[typeOfHousingElement.querySelector(':checked').value];
    priceElement.min = priceElement.placeholder;
  };

  typeOfHousingElement.addEventListener('change', function () {
    setTypeToPrice();
  });

  var timeInToTimeOut = {
    '12:00': '12:00',
    '13:00': '13:00',
    '14:00': '14:00',
  };

  timeInElement.addEventListener('change', function () {
    timeoutElement.value = timeInToTimeOut[timeInElement.value];
  });

  var timeOutToTimeIn = {
    '12:00': '12:00',
    '13:00': '13:00',
    '14:00': '14:00',
  };

  timeoutElement.addEventListener('change', function () {
    timeInElement.value = timeOutToTimeIn[timeoutElement.value];
  });

  var addAttributeDisabled = function (ParentElement) {
    var childrenElementsAdForm = Array.from(ParentElement);
    childrenElementsAdForm.forEach(function (OptionElement) {
      OptionElement.disabled = true;
    });
  };

  var roomToGuest = {
    '1': 1,
    '2': [1, 2],
    '3': [1, 2, 3],
    '100': 0,
  };

  var checkValidFieldCapacity = function () {
    var isElementDisabled = capacityElement.querySelector('[value="' + capacityElement.value + '"').disabled;
    if (isElementDisabled) {
      capacityElement.setCustomValidity('Такое количество мест невозможно');
    } else {
      capacityElement.setCustomValidity('');
    }
  };

  capacityElement.addEventListener('change', function () {
    checkValidFieldCapacity();
  });

  var deleteAttributeDisabled = function () {
    if (typeof roomToGuest[roomNumberElement.value] === 'object') {
      roomToGuest[roomNumberElement.value].forEach(function (guest) {
        capacityElement.querySelector('[value="' + guest + '"').disabled = false;
      });
    } else {
      capacityElement.querySelector('[value="' + roomToGuest[roomNumberElement.value] + '"').disabled = false;
    }
  };

  roomNumberElement.addEventListener('change', function () {
    addAttributeDisabled(capacityElement);
    deleteAttributeDisabled();
    checkValidFieldCapacity();
  });

})();
