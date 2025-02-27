'use strict';

import {
  getDynamicElementsDOM,
  changeSettingsTextsDOM,
} from '../../others.mjs';

export default async function translateTextToPortuguese() {
  document.querySelector('html').setAttribute('lang', 'pt-BR');

  const currentPath = window.location.pathname;

  translateHeaderText();
  translateTextFromNavigationLinks();
  translateContactTextInTheFooter();
  translateCopyrightTextInTheFooter();
  translateSettingsText();

  await translateTextFromIndexPage();
  translateTextFromMyHistoryPage();
  await translateTextFromProfessionalCareer();

  function translateHeaderText() {
    document.querySelector('.header__title > h1 > a').textContent =
      '< Portfólio />';
    document.querySelector(
      '.header__navigationLinks > a:nth-child(1)'
    ).textContent = 'História';
    document.querySelector(
      '.header__navigationLinks > a:nth-child(2)'
    ).textContent = 'Profissional';
    document.querySelector(
      '.header__navigationLinks > a:nth-child(3)'
    ).textContent = 'Projetos';
    document.querySelector('.header__navigationTitle > h2').textContent =
      'Mais Sobre Mim';
    document.querySelector('.header__contactsTitle > h2').textContent =
      'Meus Contatos';
  }

  function translateTextFromNavigationLinks() {
    document.querySelector(
      '.footer > .container > .footer__navigationLinks > .footer__title h2'
    ).textContent = 'Links de Navegação';
    document.querySelector(
      '.footer > .container > .footer__navigationLinks > .footer__links > a:nth-child(1)'
    ).textContent = 'História';
    document.querySelector(
      '.footer > .container > .footer__navigationLinks > .footer__links > a:nth-child(2)'
    ).textContent = 'Profissional';
    document.querySelector(
      '.footer > .container > .footer__navigationLinks > .footer__links > a:nth-child(3)'
    ).textContent = 'Projetos';
  }

  function translateContactTextInTheFooter() {
    document.querySelector(
      '.footer > .container > .footer__contacts > .footer__title h2'
    ).textContent = 'Informações de Contatos';
    document.querySelector(
      '.footer > .container > .footer__contacts > .footer__tel > h3'
    ).textContent = 'Telefone';
  }

  function translateCopyrightTextInTheFooter() {
    document.querySelector(
      '.footer > .container > .footer__copy > .footer__title h2 span'
    ).innerHTML = 'Portfólio de';
    document.querySelector(
      '.footer > .container > .footer__copy > div:nth-child(2) > p > span:nth-child(2)'
    ).textContent = 'Todos os direitos reservados';
  }

  async function translateSettingsText() {
    changeSettingsTextsDOM('Portuguese');

    document.querySelector(
      '.settings > .settings__header > div:nth-child(2) > h2'
    ).textContent = 'Configurações';

    // * Mudar o texto de cada opção de configuração
    // * Tema do Sistema

    document.querySelector(
      '.settings > .settings__body > div:nth-child(1) > h3'
    ).textContent = 'Alterar Tema - Andamento';

    const themeTexts = ['Tema do Sistema', 'Tema Escuro', 'Tema Claro'];

    Array.from(
      await getDynamicElementsDOM(
        '.settings > .settings__body > div:nth-child(1) > .elementOfSelections > .listOfOptions > li',
        true
      )
    ).map((element, index) => {
      element.textContent = themeTexts[index];
    });

    // * Alterar Cores

    document.querySelector(
      '.settings > .settings__body div:nth-child(2) > h3'
    ).textContent = 'Alterar cores';

    const colorTexts = [
      'Cor: #FF5F5A',
      'Cor: #FFBE2E',
      'Cor: #2ACA44',
      'Cor: #2E60F2',
      'Cor: #662EF2',
    ];

    Array.from(
      await getDynamicElementsDOM(
        '.settings > .settings__body > div:nth-child(2) > .elementOfSelections > .listOfOptions > li',
        true
      )
    ).map((element, index) => {
      element.textContent = colorTexts[index];
    });

    // * Alterar Idioma

    document.querySelector(
      '.settings > .settings__body > div:nth-child(3) > h3'
    ).textContent = 'Alterar Idioma';

    const languageTexts = ['Idioma Padrão', 'Português', 'Inglês'];

    Array.from(
      await getDynamicElementsDOM(
        '.settings > .settings__body > div:nth-child(3) > .elementOfSelections > .listOfOptions > li',
        true
      )
    ).map((element, index) => {
      element.textContent = languageTexts[index];
    });

    // * Alterar Texto do Rodapé

    document.querySelector(
      '.settings .settings__footer > div > button:nth-child(1)'
    ).textContent = 'Cancelar';
    document.querySelector(
      '.settings .settings__footer > div > button:nth-child(2)'
    ).textContent = 'Aplicar';
  }

  // * Função para mudar o texto para cada página

  async function translateTextFromIndexPage() {
    if (
      !(
        currentPath === '/' ||
        currentPath.includes('index.html') ||
        currentPath.endsWith('Portifolio-2024/')
      )
    ) {
      return;
    }

    await changeApresentationText();
    await changeAboutMeText();
    await changeProjectsText();
    await changeServicesText();

    function changeApresentationText() {
      document.querySelector('.apresentation > h2 > span').textContent =
        'Olá, eu sou um futuro';
      document.querySelector('.apresentation > h2 > strong').textContent =
        'Desenvolvedor Full-Stack';

      document.querySelector(
        '.apresentation > p > span:nth-child(1)'
      ).textContent = 'Buscando minha primeira oportunidade como';
      document.querySelector(
        '.apresentation > p > strong:nth-child(2)'
      ).textContent = 'estagiário,';
      document.querySelector(
        '.apresentation > p > span:nth-child(3)'
      ).textContent = 'ou até mesmo como';
      document.querySelector(
        '.apresentation > p > strong:nth-child(4)'
      ).textContent = 'desenvolvedor full-stack,';
      document.querySelector(
        '.apresentation > p > span:nth-child(5)'
      ).textContent = 'meu foco está em me especializar em';
      document.querySelector(
        '.apresentation > p > strong:nth-child(6)'
      ).textContent = 'desenvolvimento web';
      document.querySelector(
        '.apresentation > p > span:nth-child(7)'
      ).textContent = 'e';
      document.querySelector(
        '.apresentation > p > strong:nth-child(8)'
      ).textContent = ' mobile,';
      document.querySelector(
        '.apresentation > p > span:nth-child(9)'
      ).textContent = ' além de adquirir conhecimentos em';
      document.querySelector(
        '.apresentation > p > strong:nth-child(10)'
      ).textContent = 'cibersegurança.';

      document.querySelector('.apresentation > a').textContent = 'Baixar CV';
    }

    function changeAboutMeText() {
      document
        .querySelectorAll('.aboutMe__lines > span > span')
        .forEach((element) => {
          element.textContent = 'Linha';
        });
      document.querySelector(
        '.aboutMe__content > div:nth-child(1) > h2'
      ).textContent = 'perfilProfissional';
      document.querySelector(
        '.aboutMe__content > p:nth-child(2) > span:nth-child(1)'
      ).textContent = 'nome:';
      document.querySelector(
        '.aboutMe__content > p:nth-child(3) > span:nth-child(1)'
      ).textContent = 'anoDeNascimento:';
      document.querySelector(
        '.aboutMe__content > p:nth-child(4) > span:nth-child(1)'
      ).textContent = 'disponivelParaTrabalho:';
      document.querySelector(
        '.aboutMe__content > p:nth-child(5) > span:nth-child(1)'
      ).textContent = 'tecnologias:';
      document.querySelector(
        '.aboutMe__content > p:nth-child(6) > span:nth-child(1)'
      ).textContent = 'ferramentas:';
    }

    async function changeProjectsText() {
      document.querySelector(
        '.main__projects > .container > .sectionTitle > h2'
      ).textContent = 'Meus Projetos';

      document.querySelector(
        '.main__projects > .container > .projects > .projects__pagesContainer > div > p'
      ).textContent = 'Total de projetos:';

      await getDynamicElementsDOM(
        '.main__projects > .container > .projects > .projects__loadingProjects'
      )
        .then((element) => {
          element.innerHTML = '<p>Carregando Projetos...</p>';
        })
        .catch(() => {
          return;
        });

      Array.from(
        await getDynamicElementsDOM(
          '.main__projects > .container > .projects > .projects__pagination > a > span',
          true
        )
      ).map((element, index) => {
        element.textContent = `Página ${index + 1}`;
      });

      const allTranslations = JSON.parse(
        localStorage.getItem('translationsProjectsInPortuguese')
      );

      if (allTranslations) {
        Array.from(await getDynamicElementsDOM('[data-translate]', true)).map(
          (element, index) => {
            element.textContent = allTranslations[index];
          }
        );
      }
    }

    function changeServicesText() {
      document.querySelector(
        '.main__services > .container > .sectionTitle > h2'
      ).textContent = 'Meus serviços';

      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(1) > .services__header > .services__title > h3'
      ).textContent = 'Desenvolvimento Web';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(1) > .services__body > .services__description p'
      ).textContent =
        'Desenvolvimento de landing pages, sites institucionais, e-commerces e etc.';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(1) > .services__footer a'
      ).href =
        'https://wa.me/5531993112958?text=Ol%C3%A1%2C%20estou%20interessado%20em%20servi%C3%A7os%20de%20Desenvolvimento%20Web%20e%20gostaria%20de%20saber%20se%20voc%C3%AA%20realiza%20esse%20tipo%20de%20trabalho.%20Se%20sim%2C%20estaria%20dispon%C3%ADvel%20para%20iniciar%20e%20qual%20seria%20o%20prazo%20estimado%3F';

      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(2) > .services__header > .services__title > h3'
      ).textContent = 'Desenvolvimento Mobile';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(2) > .services__body > .services__description p'
      ).textContent =
        'Desenvolvimento de aplicativos mobile para Android e IOS utilizando Flutter.';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(2) > .services__footer a'
      ).href =
        'https://wa.me/5531993112958?text=Ol%C3%A1%2C%20estou%20buscando%20servi%C3%A7os%20de%20Desenvolvimento%20Mobile%20e%20gostaria%20de%20saber%20se%20voc%C3%AA%20realiza%20esse%20tipo%20de%20trabalho.%20Se%20sim%2C%20estaria%20dispon%C3%ADvel%20para%20iniciar%20e%20qual%20seria%20o%20prazo%20estimado%3F';

      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(3) > .services__header > .services__title > h3'
      ).textContent = 'Cibersegurança';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(3) > .services__body > .services__description p'
      ).textContent =
        'Análise de vulnerabilidades, testes de invasão e proteção de dados.';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(3) > .services__footer a'
      ).href =
        'https://wa.me/5531993112958?text=Ol%C3%A1%2C%20estou%20interessado%20em%20servi%C3%A7os%20de%20Ciberseguran%C3%A7a%20e%20gostaria%20de%20saber%20se%20voc%C3%AA%20oferece%20esse%20tipo%20de%20trabalho.%20Se%20sim%2C%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20e%20qual%20seria%20a%20abordagem%20que%20voc%C3%AA%20usaria%20no%20meu%20caso%3F';

      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(4) > .services__header > .services__title > h3'
      ).textContent = 'Desenvolvimento e Manuntenção de API';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(4) > .services__body > .services__description p'
      ).textContent =
        'Desenvolvimento e manutenção de APIs para integração com outros sistemas.';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(4) > .services__footer a'
      ).href =
        'https://wa.me/5531993112958?text=Ol%C3%A1%2C%20estou%20interessado%20em%20servi%C3%A7os%20de%20Desenvolvimento%20e%20Manuten%C3%A7%C3%A3o%20de%20API%20e%20gostaria%20de%20saber%20se%20voc%C3%AA%20oferece%20esse%20tipo%20de%20trabalho.%20Se%20sim%2C%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20e%20qual%20seria%20a%20abordagem%20que%20voc%C3%AA%20usaria%20no%20meu%20caso%3F';

      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(5) > .services__header > .services__title > h3'
      ).textContent = 'Gereciamento de Banco de Dados';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(5) > .services__body > .services__description p'
      ).textContent =
        'Desenvolvimento, manuntenção e otimização de Banco de Dados relacionais (SQL) e não relacionais (NoSQL).';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(5) > .services__footer a'
      ).href =
        'https://wa.me/5531993112958?text=Ol%C3%A1%2C%20estou%20interessado%20em%20servi%C3%A7os%20de%20Desenvolvimento%20e%20Manuten%C3%A7%C3%A3o%20de%20Bancos%20de%20Dados%20Relacionais%20e%20N%C3%A3o-Relacionais.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AA%20oferece%20nesse%20%C3%A2mbito%3F';

      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(6) > .services__header > .services__title > h3'
      ).textContent = 'Manutenção de Sistemas';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(6) > .services__body > .services__description p'
      ).textContent =
        'Realização de manutenção, refatoração / otimização, migração de tecnologias e correção de erros em vários tipos de sistemas.';
      document.querySelector(
        '.main__services > .container > .services > .services__item:nth-child(6) > .services__footer a'
      ).href =
        'https://wa.me/5531993112958?text=Ol%C3%A1%2C%20estou%20interessado%20no%20servi%C3%A7o%20de%20Manuten%C3%A7%C3%A3o%20de%20Sistemas%20Web%20e%20Mobile%2C%20Corre%C3%A7%C3%A3o%20de%20Bugs%20e%20Atualiza%C3%A7%C3%B5es.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20voc%C3%AA%20lida%20com%20essas%20tarefas%20e%20qual%20%C3%A9%20o%20processo%20de%20trabalho%3F';

      document
        .querySelectorAll(
          '.main__services > .container > .services > .services__item > .services__footer > a'
        )
        .forEach((element) => {
          element.textContent = 'Solicitar Serviço';
        });
    }
  }

  function translateTextFromMyHistoryPage() {
    if (!currentPath.includes('pages/myHistory.html')) return;

    changeTitleTextOfMyHistory();
    changeSubTitleText();
    changeContentText();

    function changeTitleTextOfMyHistory() {
      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__header > .myHistory__title > h2'
      ).textContent = 'Minha História';
    }

    function changeSubTitleText() {
      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(1) > .myHistory__subTitle > h3'
      ).textContent = 'Primeiro Contato com a Tecnologia';

      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(2) > .myHistory__subTitle > h3'
      ).textContent = 'Primeiros Passos';

      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(3) > .myHistory__subTitle > h3'
      ).textContent =
        'Comprando meu Primeiro Computador e o Interesse por Programação';
    }

    function changeContentText() {
      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(1) > .myHistory__text > p'
      ).innerHTML =
        'Pode-se dizer que minha jornada com a tecnologia começou com 8 a 9 anos, naquela época, meu pai tinha um computador que usava para o trabalho, mas de vez em quando eu podia mexer no computador para ver vídeos. Eu gostava muito de ver vídeos de Minecraft no YouTube. Eu assistia vídeos do VenomExtreme, Monark e etc. Foi mais ou menos nessa época que nasceu em mim uma pequena paixão não por computadores, mas por jogos.';

      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(2) > .myHistory__text > p:nth-child(1)'
      ).innerHTML =
        'Com meus 10 anos, meus pais caíram no conto de um atendente e compraram um Positivo tunadão, com um processador Intel Celeron 1007u, 2GB de RAM e um HD de 320GB. O computador vinha com o Windows 8 pré-instalado, e o desempenho era tão ruim que levava uns 15 a 45 segundos apenas para abrir o Google Chrome. Foi aí que iniciei minha busca por formas de melhorar o computador. Tentei de tudo... baixei programas de limpeza, desfragmentei o disco, fiz alterações no regedit do Windows e até mesmo experimentei baixar uma placa de vídeo virtual (sim, baixei), mas obviamente nada consertava o que era inconsertável. Com o tempo, passando muito estresse, eu acabei aprendendo muita coisa sobre computadores, e foi aí que eu comecei a gostar de computadores.';
      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(2) > .myHistory__text > p:nth-child(2)'
      ).innerHTML =
        'Mais ou menos, com meus 12 anos, eu tive meu primeiro contato com programação em um curso de Python, do Gustavo Guanabara (muito brabo) que eu vi no YouTube. Fiz algumas aulas e aprendi o básico de Python, mas como as IDEs eram muito pesadas para o meu computador, eu não conseguia continuar com o curso. Depois disso, fiquei meio desinteressado com programação, ou melhor, com tecnologia em geral. Porém, na minha sala tinha um colega e depois amigo que gostava bastante de jogos, hardwares, computadores e etc, e conversando com ele, eu fui me interessando cada vez mais sobre hardware, e foi aí que eu comecei a pesquisar mais sobre e acabei descobrindo diversos canais que falavam sobre o assunto, como: MW Informática, Adrenaline, ChipArt e etc.';

      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(3) > .myHistory__text > p:nth-child(1)'
      ).innerHTML =
        'Passando o tempo, eu fui aprendendo cada vez mais sobre computadores, comecei a formatar computadores de amigos e familiares, com isso fui adquirindo experiência. Mais ou menos na época da pandemia, os famosos Xeons começaram a aparecer no mercado de usados e eu fiquei muito interessado nesses processadores, pois eles eram muito baratos e tinham um desempenho muito bom. Foi aí que eu comecei a juntar dinheiro para comprar um computador, e na metade do terceiro ano do ensino médio, com a ajuda do meu pai, eu comprei meu primeiro computador, um computador que eu mesmo montei, com um Xeon E5-2650v2, 16GB de RAM e uma GTX 1660TI.';
      document.querySelector(
        '.main__myHistory > .container > .myHistory > .myHistory__body > .myHistory__section:nth-child(3) > .myHistory__text > p:nth-child(2)'
      ).innerHTML =
        'Passei o resto do ano de 2022 jogando, mas como estava barbudo com 18 anos, eu comecei a pensar o que eu queria da vida. Aí que comecei a buscar sobre áreas que poderia trabalhar e conheci a área de programação. Confesso que entrei pelo hype de altos salários e home office, mas com o tempo fui gostando de codar mesmo, e isso se transformou em um dos meus hobbies. Programar não é a coisa mais legal que gosto de fazer, mas é algo que posso levar por boa parte da minha vida (talvez até por toda vida) sem reclamar.';
    }
  }

  async function translateTextFromProfessionalCareer() {
    if (!currentPath.includes('pages/professionalCareer.html')) return;

    document.querySelector(
      '.professionalCareer .professionalCareer__apresentation .professionalCareer__aboutMe .professionalCareer__title h2 span:nth-child(1)'
    ).textContent = 'umPoucoSobreMim';
    document.querySelector(
      '.professionalCareer .professionalCareer__apresentation .professionalCareer__aboutMe .professionalCareer__content div:nth-child(1) p span:nth-child(2)'
    ).textContent =
      '"Sou um desenvolvedor full stack com experiência em Java (Spring), React, Node.js e TypeScript. Curto jogos, hardwares e tecnologia, além de ser calmo e um pouco engraçado (ou pelo menos eu tento). Atualmente, trabalho em projetos focados em APIs e sites, com planos futuros de explorar o desenvolvimento mobile com Flutter e, bem mais adiante, a área de cibersegurança."';

    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__title > h2'
    ).textContent = 'Trajetória Profissional';

    document.querySelector(
      '.professionalCareer .professionalCareer__trajectory .professionalCareer__items .professionalCareer__item .professionalCareer__header .professionalCareer__company div:nth-child(1) h3'
    ).textContent = 'Desenvolvedor Freelancer';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__header > div.professionalCareer__company > div:nth-child(2) > p > span:nth-child(2)'
    ).textContent = 'Autônomo';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__header > div.professionalCareer__date > div:nth-child(1) > p > span:nth-child(2) > span'
    ).textContent = 'Atualmente';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__header > div.professionalCareer__date > div:nth-child(2) > p > span:nth-child(2)'
    ).textContent = 'Tempo Integral';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__body > div.professionalCareer__activities > div:nth-child(1) > h4 > span.quaternary__color'
    ).textContent = 'Atividades Envolvidas:';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__body > div.professionalCareer__activities > div:nth-child(2) > ul > li:nth-child(1)'
    ).textContent = 'Desenvolvimento e Manutenção de Sites';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__body > div.professionalCareer__activities > div:nth-child(2) > ul > li:nth-child(2)'
    ).textContent = 'Desenvolvimento e Manunteção de Aplicativos Mobile';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__trajectory > div.professionalCareer__items > div > div.professionalCareer__body > div.professionalCareer__tecnologies > div:nth-child(1) > h4 > span.quaternary__color'
    ).textContent = 'Tecnologias usadas:';

    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__formation > div.professionalCareer__title > h2'
    ).textContent = 'Formação Profissional';

    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__formation > div.professionalCareer__qualifications > div:nth-child(1) > div:nth-child(1) > h3'
    ).textContent = 'Certificações';
    document.querySelector('#splide01-list > li').textContent =
      'Não há nada aqui.';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__formation > div.professionalCareer__qualifications > div:nth-child(2) > div:nth-child(1) > h3'
    ).textContent = 'Certificados';

    Array.from(await getDynamicElementsDOM('[translate__name]', true)).map(
      (element) => {
        if (element.innerHTML.startsWith('Course of')) {
          const courseName = element.innerHTML.split('Course of')[1].trim();

          element.innerHTML = 'Curso de ' + courseName;
        }
      }
    );
    Array.from(await getDynamicElementsDOM('[translate__date]', true)).map(
      (element) => {
        element.innerHTML = 'Término em:';
      }
    );
    Array.from(await getDynamicElementsDOM('[translate__platform]', true)).map(
      (element) => {
        element.innerHTML = 'Plataforma:';
      }
    );
    Array.from(
      await getDynamicElementsDOM('[translate__certificate]', true)
    ).map((element) => {
      element.innerHTML = 'Visualizar Certificado';
    });

    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__formation > div.professionalCareer__qualifications > div.professionalCareer__faculty > div > div > div.professionalCareer__name > div:nth-child(1) > h3'
    ).textContent = 'Bacharelado em Engenharia de Software';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__formation > div.professionalCareer__qualifications > div.professionalCareer__faculty > div > div > div.professionalCareer__name > div:nth-child(2) > p > span:nth-child(2) > span:nth-child(2)'
    ).textContent = 'Centro universitário';
    document.querySelector(
      'body > main > section > div > div > div.professionalCareer__formation > div.professionalCareer__qualifications > div.professionalCareer__faculty > div > div > div.professionalCareer__date > div:nth-child(2) > p > span:nth-child(2)'
    ).textContent = '3º Período';

    // if (localStorage.getItem('translationsQualificationsInPortuguese')) {
    //   const allTranslations = JSON.parse(
    //     localStorage.getItem('translationsQualificationsInPortuguese')
    //   );

    //   Array.from(document.querySelectorAll('[data-translate]')).map(
    //     (element, index) => (element.textContent = allTranslations[index])
    //   );

    //   return;
    // }
  }
}
