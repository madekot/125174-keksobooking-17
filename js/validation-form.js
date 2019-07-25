'use strict';
(function () {
  var typeOfHousingElement = document.querySelector('#type');
  var bungaloElement = typeOfHousingElement.querySelector('[value="bungalo"]');
  var flatElement = typeOfHousingElement.querySelector('[value="flat"]');
  var houseElement = typeOfHousingElement.querySelector('[value="house"]');
  var palaceElement = typeOfHousingElement.querySelector('[value="palace"]');

  var priceElement = document.querySelector('#price');

  typeOfHousingElement.addEventListener('change', function () {
    console.log('hello');
  });

})();
