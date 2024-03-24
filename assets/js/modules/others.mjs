'use strict';

export function changePageScrollingState() {
  const bodyDOM = document.querySelector('body');
  const bodyOverflow = getComputedStyle(bodyDOM).getPropertyValue('overflow-y');

  bodyOverflow === 'auto' || bodyOverflow === 'visible'
    ? (bodyDOM.style.overflowY = 'hidden')
    : (bodyDOM.style.overflowY = 'auto');
}

export function showBlurOnBody() {
  const blurOnBodyDOM = document.querySelector('.blurOnBody');

  blurOnBodyDOM.classList.toggle('blurOnBodyIsActivated');
}

export function getDynamicElementsDOM(selector, multiple = false) {
  const timeout = 2500;
  const intervalTime = 25;

  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      const elements = document.querySelectorAll(selector);

      if (elements.length !== 0) {
        clearInterval(intervalId);

        if (multiple) {
          resolve(Array.from(elements));
        } else {
          resolve(elements[0]);
        }
      }
    }, intervalTime);

    setTimeout(() => {
      clearInterval(intervalId);

      reject('Element not found, please try later again.');
    }, timeout);
  });
}

export async function changeSettingsTextsDOM(language) {
  if (getValuesLocalStorage('firstTimeTranslating')) {
    return;
  }

  const selectedOptionsDOM = await getDynamicElementsDOM('.selectedItem', true);

  const selectedThemeValue = selectedOptionsDOM[0].textContent;
  const selectedColorValue = selectedOptionsDOM[1].textContent;
  const selectedLanguageValue = selectedOptionsDOM[2].textContent;

  const portugueseValues = {
    'Tema do Sistema': 'System Theme',
    'Tema Escuro': 'Dark Theme',
    'Tema Claro': 'Light Theme',

    'Cor: #FF5F5A': 'Color: #FF5F5A',
    'Cor: #FFBE2E': 'Color: #FFBE2E',
    'Cor: #2ACA44': 'Color: #2ACA44',
    'Cor: #2E60F2': 'Color: #2E60F2',
    'Cor: #662EF2': 'Color: #662EF2',

    'Idioma Padrão': 'Default Language',
    Português: 'Portuguese',
    Inglês: 'English',
  };

  const englishValues = {
    'System Theme': 'Tema do Sistema',
    'Dark Theme': 'Tema Escuro',
    'Light Theme': 'Tema Claro',

    'Color: #FF5F5A': 'Cor: #FF5F5A',
    'Color: #FFBE2E': 'Cor: #FFBE2E',
    'Color: #2ACA44': 'Cor: #2ACA44',
    'Color: #2E60F2': 'Cor: #2E60F2',
    'Color: #662EF2': 'Cor: #662EF2',

    'Default Language': 'Idioma Padrão',
    Portuguese: 'Português',
    English: 'Inglês',
  };

  let optionsSelected = [];

  if (language === 'Portuguese') {
    optionsSelected = [
      englishValues[selectedThemeValue],
      englishValues[selectedColorValue],
      englishValues[selectedLanguageValue],
    ];
  } else {
    optionsSelected = [
      portugueseValues[selectedThemeValue],
      portugueseValues[selectedColorValue],
      portugueseValues[selectedLanguageValue],
    ];
  }

  if (optionsSelected.includes(undefined)) {
    return;
  }

  selectedOptionsDOM.forEach((element, index) => {
    element.textContent = optionsSelected[index];
  });
}

export async function saveTextsInPortugueseInLocalStorage(itemName) {
  const dynamicElementsTexts = await processingTranslationTexts(true);

  await setValuesInLocalStorage(itemName, ...dynamicElementsTexts);
}

export async function setValuesInLocalStorage(itemName, ...data) {
  localStorage.setItem(itemName, JSON.stringify([...data]));
}

export function getValuesLocalStorage(itemName) {
  return JSON.parse(localStorage.getItem(itemName));
}

export async function processingTranslationTexts(formatToOriginalText = false) {
  const dynamicElementsDOM = await getDynamicElementsDOM(
    '[data-translate]',
    true
  );

  if (formatToOriginalText) {
    return Array.from(dynamicElementsDOM).map((element) =>
      element.textContent
        .replace(/\s{2,}/g, ' ')
        .trim()
        .replace(/ \|/g, ',')
    );
  }

  return Array.from(dynamicElementsDOM).map((element) =>
    element.textContent
      .replace(/\s{2,}/g, ' ')
      .trim()
      .replace(/,/g, ' |')
  );
}

export function whatIsTheCurrentColor() {
  const quaternaryColor = document.querySelector('.quaternary__color--hover')
    ? true
    : false;
  const quinaryColor = document.querySelector('.quinary__color--hover')
    ? true
    : false;
  const senaryColor = document.querySelector('.senary__color--hover')
    ? true
    : false;
  const septenaryColor = document.querySelector('.septenary__color--hover')
    ? true
    : false;
  const octonaryColor = document.querySelector('.octonary__color--hover')
    ? true
    : false;

  if (quaternaryColor) {
    return 'quaternary';
  }

  if (quinaryColor) {
    return 'quinary';
  }

  if (senaryColor) {
    return 'senary';
  }

  if (septenaryColor) {
    return 'septenary';
  }

  if (octonaryColor) {
    return 'octonary';
  }
}
