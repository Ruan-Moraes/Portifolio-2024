'use strict';

import {
  changePageScrollingState,
  showBlurOnBody,
  getValuesLocalStorage,
  setValuesInLocalStorage,
  saveTextsInPortugueseInLocalStorage,
} from './others.mjs';
import {
  animationGear,
  showSettings,
  disableTextSelection,
} from './settings.mjs';
import { whatIsTheCurrentColor } from './others.mjs';
import translateTextToEnglish from './translates/EN-US/translateTextToEnglish.mjs';
import translateTextToPortuguese from './translates/PT-BR/translateTextToPortuguese.mjs';

window.addEventListener('DOMContentLoaded', () => {
  const selectedOptions = getValuesLocalStorage('settings');

  if (!selectedOptions) {
    applyLanguage(window.navigator.language);

    return;
  }

  const selectedThemeValue = selectedOptions[0];
  const selectedColorValue = selectedOptions[1];
  const selectedLanguageValue = selectedOptions[2];

  applyTheme(selectedThemeValue);
  applyColor(selectedColorValue);
  applyLanguage(selectedLanguageValue);
});

// * Lógica para aplicar as configurações selecionadas

export default function applyingSettings() {
  const settingsApplyDOM = document.querySelector('#settingsApply');

  settingsApplyDOM.addEventListener('click', () => {
    const selectedOptionsDOM = document.querySelectorAll('.selectedItem');

    const selectedTheme = selectedOptionsDOM[0].textContent;
    const selectedColor = selectedOptionsDOM[1].textContent;
    const selectedLanguage = selectedOptionsDOM[2].textContent;

    applyTheme(selectedTheme);
    applyColor(selectedColor);
    applyLanguage(selectedLanguage);

    setValuesInLocalStorage(
      'settings',
      selectedTheme,
      selectedColor,
      selectedLanguage
    );

    animationGear();
    showBlurOnBody();
    showSettings();
    disableTextSelection();
    changePageScrollingState();
  });
}

// * Lógica para mudar o Tema do Sistema

function applyTheme(selectedThemeValue) {} // TODO - Andamento

// * Lógica para mudar as cores do site

function applyColor(selectedColorValue) {
  const selectedColor = whatIsTheHexadecimalColorInTheTable(selectedColorValue);
  const currentColor = whatIsTheCurrentColor();

  if (selectedColor !== currentColor) {
    changeColors(selectedColor, currentColor);
    changeColorsBackground(selectedColor, currentColor);
  }

  function whatIsTheHexadecimalColorInTheTable(selectedColorValue) {
    const colorTable = {
      '#FF5F5A': 'quaternary',
      '#FFBE2E': 'quinary',
      '#2ACA44': 'senary',
      '#2E60F2': 'septenary',
      '#662EF2': 'octonary',
    };

    return colorTable[treatValueOfSelectedColor(selectedColorValue)];
  }

  function treatValueOfSelectedColor(selectedColorValue) {
    return selectedColorValue.match(/#[0-9A-Fa-f]{6}/g)[0];
  }

  function changeColors(selectedColor, currentColor) {
    const colorBase = document.querySelectorAll(`.${currentColor}__color`);
    const colorHover = document.querySelectorAll(
      `.${currentColor}__color--hover`
    );

    colorBase.forEach((element) => {
      element.classList.remove(`${currentColor}__color`);
      element.classList.add(`${selectedColor}__color`);
    });

    colorHover.forEach((element) => {
      element.classList.remove(`${currentColor}__color--hover`);
      element.classList.add(`${selectedColor}__color--hover`);
    });
  }

  function changeColorsBackground(selectedColor, currentColor) {
    const colorBackgroundBase = document.querySelectorAll(
      `.${currentColor}__backgroundColor`
    );
    const colorBackgroudHover = document.querySelectorAll(
      `.${currentColor}__backgroundColor--hover`
    );
    const colorBackgroundSelected = document.querySelectorAll(
      `.${currentColor}__backgroundColor--selected`
    );
    const colorBackgroundLessLightHover = document.querySelectorAll(
      `.${currentColor}__backgroundColor--lessLightHover`
    );
    const colorBackgroundMenuHover = document.querySelectorAll(
      `.${currentColor}__backgroundColor--menuHover`
    );
    const colorBackgroundMenuActive = document.querySelectorAll(
      `.${currentColor}__backgroundColor--menuActive`
    );

    colorBackgroundBase.forEach((element) => {
      element.classList.remove(`${currentColor}__backgroundColor`);
      element.classList.add(`${selectedColor}__backgroundColor`);
    });

    colorBackgroudHover.forEach((element) => {
      element.classList.remove(`${currentColor}__backgroundColor--hover`);
      element.classList.add(`${selectedColor}__backgroundColor--hover`);
    });

    colorBackgroundSelected.forEach((element) => {
      element.classList.remove(`${currentColor}__backgroundColor--selected`);
      element.classList.add(`${selectedColor}__backgroundColor--selected`);
    });

    colorBackgroundLessLightHover.forEach((element) => {
      element.classList.remove(
        `${currentColor}__backgroundColor--lessLightHover`
      );
      element.classList.add(
        `${selectedColor}__backgroundColor--lessLightHover`
      );
    });

    colorBackgroundMenuHover.forEach((element) => {
      element.classList.remove(`${currentColor}__backgroundColor--menuHover`);
      element.classList.add(`${selectedColor}__backgroundColor--menuHover`);
    });

    colorBackgroundMenuActive.forEach((element) => {
      element.classList.remove(`${currentColor}__backgroundColor--menuActive`);
      element.classList.add(`${selectedColor}__backgroundColor--menuActive`);
    });
  }
}

// * Lógica para mudar o idioma do site

function applyLanguage(selectedLanguageValue) {
  if (
    selectedLanguageValue === 'pt-BR' ||
    selectedLanguageValue === 'Português' ||
    selectedLanguageValue === 'Portuguese'
  ) {
    translateTextToPortuguese();
  }

  if (
    selectedLanguageValue === 'en-US' ||
    selectedLanguageValue === 'Inglês' ||
    selectedLanguageValue === 'English'
  ) {
    translateTextToEnglish();
  }

  if (getValuesLocalStorage('firstTimeTranslating')) {
    const language = window.navigator.language;

    setValuesInLocalStorage('firstTimeTranslating', false);

    if (
      selectedLanguageValue === 'Idioma Padrão' ||
      selectedLanguageValue === 'Default Language'
    ) {
      if (language === 'pt-BR') {
        translateTextToPortuguese();
      }

      if (language === 'en-US') {
        translateTextToEnglish();
      }
    }
  }
}
