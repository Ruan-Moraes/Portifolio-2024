'use strict';

import {
  processingTranslationTexts,
  getDynamicElementsDOM,
  setValuesInLocalStorage,
} from './others.mjs';

export default async function translateDynamicTexts(source, target) {
  const dynamicElementsDOM = await getDynamicElementsDOM(
    '[data-translate]',
    true
  );
  const dynamicElementsTexts = await processingTranslationTexts();

  try {
    const currentPath = window.location.pathname;

    let allTranslations;

    if (
      currentPath === '/' ||
      currentPath.includes('index.html') ||
      currentPath.endsWith('Portifolio-2024/')
    ) {
      allTranslations = JSON.parse(
        localStorage.getItem('translationsProjectsInEnglish')
      );
    }

    if (currentPath.includes('pages/professionalCareer.html')) {
      allTranslations = JSON.parse(
        localStorage.getItem('translationsQualificationsInEnglish')
      );
    }

    if (allTranslations) {
      Array.from(await getDynamicElementsDOM('[data-translate]', true)).map(
        (element, index) => {
          element.textContent = allTranslations[index];
        }
      );

      return allTranslations;
    }

    const response = await fetch(
      'https://keen-sprinkles-da7fb5.netlify.app/.netlify/functions/proxyTranslate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: dynamicElementsTexts,
          source,
          target,
        }),
      }
    );

    if (response.status === 456) {
      const errorMessage =
        'Limite de traduções excedido! Tente novamente mais tarde. - Translation limit exceeded! Please try again later.';

      alert(errorMessage);

      throw new Error(errorMessage);
    }

    if (!response.ok) {
      throw new Error(`Erro ao obter a tradução: ${response}`);
    }

    const data = await response
      .json()
      .then((data) => data.translations[0].text.split(','));
    const translatedTexts = await data.map((text) => apiTextTreatment(text));

    dynamicElementsDOM.forEach(async (element, index) => {
      element.textContent =
        (await translatedTexts[index]) || element.textContent;
    });

    return await translatedTexts;
  } catch (error) {
    setValuesInLocalStorage('firstTimeTranslating', false);

    console.error(error);
  }
}

function apiTextTreatment(text) {
  return Array.from(text.split(',').map((text) => text.trim())).map((text) => {
    return text.replace(/ \|/g, ',');
  });
}