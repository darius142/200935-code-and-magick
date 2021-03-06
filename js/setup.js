'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var firstNameArr = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var secondNameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesArr = ['black', 'red', 'blue', 'yellow', 'green'];

var makeRandom = function (arr) {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [
  {
    name: makeRandom(firstNameArr) + makeRandom(secondNameArr),
    coatColor: makeRandom(coatArr),
    eyesColor: makeRandom(eyesArr)
  },
  {
    name: makeRandom(firstNameArr) + makeRandom(secondNameArr),
    coatColor: makeRandom(coatArr),
    eyesColor: makeRandom(eyesArr)
  },
  {
    name: makeRandom(firstNameArr) + makeRandom(secondNameArr),
    coatColor: makeRandom(coatArr),
    eyesColor: makeRandom(eyesArr)
  },
  {
    name: makeRandom(firstNameArr) + makeRandom(secondNameArr),
    coatColor: makeRandom(coatArr),
    eyesColor: makeRandom(eyesArr)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
