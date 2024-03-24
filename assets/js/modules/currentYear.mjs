'use strict';

export default async function getTheCurrentYear() {
  const currentYearDOM = document.querySelector('#currentYear');

  try {
    const timeout = 1000;
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Tempo excedido!')), timeout)
    );

    const response = await Promise.race([
      fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo').then(
        (res) => res.json()
      ),
      timeoutPromise,
    ]);

    const currentYear = response.datetime.slice(0, 4);

    currentYearDOM.textContent = currentYear;
  } catch (error) {
    console.warn(
      `Ocorreu um erro ao tentar puxar o ano atual através da API do World Time! ${error}`
    );

    currentYearDOM.textContent = new Date().getFullYear();
  }
}
