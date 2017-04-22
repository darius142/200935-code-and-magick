'use strict';

// 3
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var firstNameArr = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var secondNameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesArr = ['black', 'red', 'blue', 'yellow', 'green'];

var makeRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

///////////
// 4.10.1
var setupOpen = document.querySelector('.setup-open');
var openPopup = function () {
  userDialog.classList.remove('hidden');
};
var closePopup = function () {
  userDialog.classList.add('hidden');
};
setupOpen.addEventListener('click', function () {
  openPopup();

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  });
});

var setupClose = document.querySelector('.setup-close');
setupClose.addEventListener('click', function () {
  closePopup();
});

// 4.10.1.1
var userIcon = document.querySelector('.setup-open-icon');
userIcon.setAttribute('tabindex', '0');

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

// 4.10.1.2 Зробити

// 4.10.1.3
setupClose.setAttribute('tabindex', '0');
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

// 4.10.1.4
var setupUserName = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setup-submit');
setupSubmit.addEventListener('click', function () {
  if (setupUserName.checkValidity()) {
    closePopup();
  }
});

// 4.10.1.5
setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

// 4.10.2
setupUserName.required = true;
setupUserName.setAttribute('maxlength', '50');

// 4.10.3
var wizardCoatId = document.getElementById('wizard-eyes');
wizardCoatId.addEventListener('click', function () {
  wizardCoatId.setAttribute('fill', makeRandom(coatArr));
});

// 4.10.5
var fireballColorArr = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848]'];
var fireballWrapEl = document.getElementsByClassName('setup-fireball-wrap')[0];
console.log(fireballWrapEl);
fireballWrapEl.addEventListener('click', function () {
  fireballWrapEl.style.backgroundColor = makeRandom(fireballColorArr);
});

