'use strict';

import {
  changePageScrollingState,
  showBlurOnBody,
  getValuesLocalStorage,
  getDynamicElementsDOM,
  changeSettingsTextsDOM,
} from './others.mjs';
import {
  animationGear,
  showSettings,
  disableTextSelection,
} from './settings.mjs';

export default function cancelingSettings() {
  const settingsCancelDOM = document.querySelector('#settingsCancel');
  const closeSettingsXmarkDOM = document.querySelector('#closeSettingsXmark');
  const closeSettingsLineDOM = document.querySelector('#closeSettingsLine');

  [settingsCancelDOM, closeSettingsXmarkDOM, closeSettingsLineDOM].forEach(
    (element) => {
      element.addEventListener('click', () => {
        resetSettings();
        animationGear();
        showBlurOnBody();
        showSettings();
        disableTextSelection();
        changePageScrollingState();
      });

      element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          resetSettings();
          animationGear();
          showBlurOnBody();
          showSettings();
          disableTextSelection();
          changePageScrollingState();
        }
      });
    }
  );
}

export async function resetSettings() {
  const selectedItemsDOM = await getDynamicElementsDOM('.selectedItem', true);
  const selectedOptions = getValuesLocalStorage('settings');

  selectedItemsDOM[0].textContent = selectedOptions[0];
  selectedItemsDOM[1].textContent = selectedOptions[1];
  selectedItemsDOM[2].textContent = selectedOptions[2];

  if (
    selectedItemsDOM[2].textContent === 'pt-BR' ||
    selectedItemsDOM[2].textContent === 'Português' ||
    selectedItemsDOM[2].textContent === 'Portuguese'
  ) {
    changeSettingsTextsDOM('Portuguese');
  }

  if (
    selectedItemsDOM[2].textContent === 'en-US' ||
    selectedItemsDOM[2].textContent === 'Inglês' ||
    selectedItemsDOM[2].textContent === 'English'
  ) {
    changeSettingsTextsDOM('English');
  }

  if (
    selectedItemsDOM[2].textContent === 'Idioma Padrão' ||
    selectedItemsDOM[2].textContent === 'Default Language'
  ) {
    if (window.navigator.language === 'pt-BR') {
      changeSettingsTextsDOM('Portuguese');
    } else {
      changeSettingsTextsDOM('English');
    }
  }
}
