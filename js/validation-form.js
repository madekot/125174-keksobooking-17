'use strict';
(function () {
  var priceElement = document.querySelector('#price');
  var timeIn = document.querySelector('#timein');
  var timeout = document.querySelector('#timeout');
  var typeOfHousingElement = document.querySelector('#type');
  var roomNumber = document.querySelector('room_number')

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

  timeIn.addEventListener('change', function () {
    timeout.value = timeInToTimeOut[timeIn.value];
  });

  var timeOutToTimeIn = {
    '12:00': '12:00',
    '13:00': '13:00',
    '14:00': '14:00',
  };

  timeout.addEventListener('change', function () {
    timeIn.value = timeOutToTimeIn[timeout.value];
  });

  var roomToGuest = {
    1: 1,
    2: 2,
    3: 3,
    100: 0,
  };

})();
