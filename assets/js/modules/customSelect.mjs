'use strict';

import { getValuesLocalStorage } from './others.mjs';

const portugueseValues = [
  'Tema do Sistema',
  'Tema Escuro',
  'Tema Claro',

  'Cor: #FF5F5A',
  'Cor: #FFBE2E',
  'Cor: #2ACA44',
  'Cor: #2E60F2',
  'Cor: #662EF2',

  'Idioma Padrão',
  'Português',
  'Inglês',
];

const englishValues = [
  'System Theme',
  'Dark Theme',
  'Light Theme',

  'Color: #FF5F5A',
  'Color: #FFBE2E',
  'Color: #2ACA44',
  'Color: #2E60F2',
  'Color: #662EF2',

  'Default Language',
  'Portuguese',
  'English',
];

export default function customSelect() {
  const selectsDOM = document.querySelectorAll('select');

  selectsDOM.forEach((selectionElementDOM) => {
    hideTheSelectionElement(selectionElementDOM);

    const parentElementOfTheSelectionDOM =
      selectTheParentElement(selectionElementDOM);
    const listOfOptionsDOM = createListOfOptions(
      parentElementOfTheSelectionDOM
    );

    addOptions(selectionElementDOM, listOfOptionsDOM);
    addShowOrHideEventInOptions(parentElementOfTheSelectionDOM);
  });

  const selectedOptions = getValuesLocalStorage('settings');

  if (selectedOptions) {
    showSelectedOption(selectsDOM, selectedOptions);
  } else {
    showDefaultOption(selectsDOM);
  }

  changeSelectionOption();

  addColorsToTheOptions();
  addEventToCloseSelect();
}

function hideTheSelectionElement(selectionElementDOM) {
  selectionElementDOM.classList.add('selectHidden');
}

function selectTheParentElement(selectionElementDOM) {
  return selectionElementDOM.parentElement;
}

function createListOfOptions(parentElementOfTheSelectionDOM) {
  const listOfOptionsDOM = document.createElement('ul');
  listOfOptionsDOM.classList.add('listOfOptions');

  parentElementOfTheSelectionDOM.appendChild(listOfOptionsDOM);

  return listOfOptionsDOM;
}

function addOptions(selectionElementDOM, listOfOptionsDOM) {
  const whatIsTheLanguage = document.querySelector('html').lang;

  const textsToRemove = [];

  Array.from(selectionElementDOM.children).forEach((option) => {
    const optionItemDOM = document.createElement('li');
    optionItemDOM.setAttribute('tabindex', '0');

    if (whatIsTheLanguage === 'pt-BR') {
      optionItemDOM.textContent = portugueseValues[option.index];

      textsToRemove.push(portugueseValues[option.index]);
    } else {
      optionItemDOM.textContent = englishValues[option.index];

      textsToRemove.push(englishValues[option.index]);
    }

    listOfOptionsDOM.appendChild(optionItemDOM);
  });

  if (whatIsTheLanguage === 'pt-BR') {
    for (let i = 0; i < textsToRemove.length; i++) {
      portugueseValues.splice(portugueseValues.indexOf(textsToRemove[i]), 1);
    }
  } else {
    for (let i = 0; i < textsToRemove.length; i++) {
      englishValues.splice(englishValues.indexOf(textsToRemove[i]), 1);
    }
  }
}

function addShowOrHideEventInOptions(parentElementOfTheSelectionDOM) {
  parentElementOfTheSelectionDOM.addEventListener('click', () => {
    parentElementOfTheSelectionDOM.children[1].classList.toggle('show');
  });

  parentElementOfTheSelectionDOM.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      parentElementOfTheSelectionDOM.children[1].classList.toggle('show');
    }
  });
}

function showSelectedOption(selectsDOM, selectedOptions) {
  for (let i = 0; i < selectsDOM.length; i++) {
    const optionSelectedDOM = document.createElement('div');
    optionSelectedDOM.classList.add('selectedItem');
    optionSelectedDOM.textContent = selectedOptions[i];

    selectsDOM[i].parentElement.appendChild(optionSelectedDOM);
  }
}

function showDefaultOption(selectsDOM) {
  for (let i = 0; i < selectsDOM.length; i++) {
    const optionSelectedDOM = document.createElement('div');
    optionSelectedDOM.classList.add('selectedItem');

    selectsDOM[i].parentElement.appendChild(optionSelectedDOM);
  }

  putDefaultOptionInSelect(selectsDOM);
}

function putDefaultOptionInSelect(selectsDOM) {
  const whatIsTheLanguage = document.querySelector('html').lang;

  if (whatIsTheLanguage === 'pt-BR') {
    selectsDOM[0].parentElement.children[2].textContent = 'Tema do Sistema';
    selectsDOM[1].parentElement.children[2].textContent = 'Cor: #FF5F5A';
    selectsDOM[2].parentElement.children[2].textContent = 'Idioma Padrão';
  } else {
    selectsDOM[0].parentElement.children[2].textContent = 'System Theme';
    selectsDOM[1].parentElement.children[2].textContent = 'Color: #FF5F5A';
    selectsDOM[2].parentElement.children[2].textContent = 'Default Language';
  }
}

function changeSelectionOption() {
  const optionsDOM = document.querySelectorAll('.listOfOptions > li');

  optionsDOM.forEach((option) => {
    const selectedItemDOM = option.parentElement.parentElement.children[2];

    option.addEventListener('click', () => {
      const selectedOption = option.textContent;

      selectedItemDOM.textContent = selectedOption;
    });
  });

  optionsDOM.forEach((option) => {
    const selectedItemDOM = option.parentElement.parentElement.children[2];

    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const selectedOption = option.textContent;

        selectedItemDOM.textContent = selectedOption;
      }
    });
  });
}

function addColorsToTheOptions() {
  const optionsDOM = document.querySelectorAll('.listOfOptions > li');

  optionsDOM.forEach((option) => {
    const optionColor = option.textContent.match(/#[0-9A-Fa-f]{6}/g);

    if (optionColor) {
      option.style.color = optionColor;
    }
  });
}

function addEventToCloseSelect() {
  const hiddenSelectionsDOM = document.querySelectorAll('.selectHidden');

  document.addEventListener('click', (event) => {
    hiddenSelectionsDOM.forEach((select) => {
      const selectParentDOM = select.parentElement;
      const selectOptionsDOM = selectParentDOM.children[1];

      if (
        selectOptionsDOM.classList.contains('show') &&
        !selectParentDOM.contains(event.target)
      ) {
        selectOptionsDOM.classList.remove('show');
      }
    });
  });
}
