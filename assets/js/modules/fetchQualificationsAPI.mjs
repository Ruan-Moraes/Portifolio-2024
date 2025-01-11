'use strict';

import { setValuesInLocalStorage } from './others.mjs';

// export default async function fetchQualificationsAPI(parentElement) {
//   try {
//     const certificates = await fetch(
//       'https://zesty-palmier-b5494f.netlify.app/.netlify/functions/proxyQualifications',
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     ).then((response) => response.json());

//     for (let i = 0; i < certificates.length; i++) {
//       const isNext = i == 1 ? 'is-next' : '';
//       const isActived = i == 0 ? 'is-active is-visible' : isNext;

//       const data = certificates[i];

//       const HTML = `
//       <li class="splide__slide ${isActived}"
//       id="splide02-slide${'0' + (i + 1)}"
//       role="group"
//       aria-roledescription="slide"
//       aria-label="${i + 1} of ${certificates.length}"
//       style="${
//         i == 0
//           ? 'width: calc(100%); transform: translateX(0%);'
//           : 'width: calc(100%); transform: translateX(-100%);'
//       } "
//       ${i == 0 ? '' : 'aria-hidden="true"'}
//       >
//         <div>
//           <h4>${data.name}</h4>
//         </div>
//         <div>
//           <div>
//             <ul>
//               <li>
//                 <span>Término em:</span>
//                 <time
//                   datetime="2022-08-01"
//                   class="quaternary__color"
//                   >${data.endDate}</time
//                 >
//               </li>
//               <li>
//                 <span>Plataforma:</span>
//                 <span class="quaternary__color">${data.platform}</span>
//               </li>
//             </ul>
//           </div>
//           <div class="quaternary__backgroundColor quaternary__backgroundColor--lessLightHover">
//             <a href="${
//               data.credentialUrl
//             }" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer">Visualizar Certificado</a>
//           </div>
//         </div>
//       </li>
//       `;

//       containerCertificates.insertAdjacentHTML('beforeend', HTML);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
