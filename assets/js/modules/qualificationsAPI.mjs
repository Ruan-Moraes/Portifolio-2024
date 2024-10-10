'use strict';

import { setValuesInLocalStorage } from './others.mjs';

export default async function fetchQualificationsAPI() {
  try {
    const response = await fetch(
      'https://zesty-palmier-b5494f.netlify.app/.netlify/functions/proxyQualifications',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => response.json());

    const certificates = response.filter((item) => item.type === 'Certificado');
    const certifications = response.filter(
      (item) => item.type === 'Certificação'
    );

    for (let i = 0; i < certificates.length; i++) {
      const containerCertificates = document.querySelector(
        '.certificates__items'
      );
      
      const data = getQualificationsData(certificates[i]);

      const HTML = `
        <div class="certificates__item">
          <div class="certificates__itemHeader">
            <h3 data-translate>${data.name}</h3>
          </div>
          <div class="certificates__itemContent">
            <div class="certificates__itemDescription">
              <p>
                <span data-translate>${data.description}</span>
              </p>
            </div>
            <div class="certificates__itemInformations">
              <h4 data-translate_topicsCovered>Temas Abordados:</h4>
              <ul>
                ${data.topicsCovered
                  .split(' - ')
                  .map(
                    (topic, index) => `
                  <li>
                    <p>
                      <span>${index + 1}.</span>
                      <span data-translate>${topic}</span>
                    </p>
                  </li>
                `
                  )
                  .join('')}
              </ul>
              <div>
                <p>
                  <strong data-translate_conclusion>Conclusão:</strong>
                  <span>
                    <span data-translate_monthOfConclusion>${
                      data.month
                    } de</span> ${data.year}
                  </span>
                </p>
                <p>
                  <strong data-translate_duration>Duração:</strong>
                  <span>${data.duration.split('(')[0]} 
                  <span data-translate_hours>Horas</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="certificates__itemFooter">
            <a
              href="${data.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="quaternary__color--hover"
              data-translate_viewCertificate
              >Visualizar Certificado</a>
          </div>
        </div>
      `;

      containerCertificates.insertAdjacentHTML('beforeend', HTML);
    }

    function getQualificationsData(qualification) {
      const name = qualification.name;
      const description = qualification.description;
      const topicsCovered = qualification.topics_covered;

      const duration = qualification.duration;

      const endDate = qualification.end_date;
      const month = new Date(endDate).toLocaleString('pt-BR', {
        month: 'long',
      });
      const year = new Date(endDate).getFullYear();

      const link = qualification.link;
      const type = qualification.type;

      return {
        name,
        description,
        topicsCovered,
        duration,
        month,
        year,
        link,
        type,
      };
    }
  } catch (error) {
    console.error(error);
  }
}
