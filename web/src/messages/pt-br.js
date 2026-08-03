const messages = {
  language: {
    label: 'Português (Brasil)',
    locale: 'pt-br'
  },
  seo: {
    keywords:
      'teste de personalidade dos cinco grandes, teste de personalidade dos 5 grandes, teste b5, teste dos cinco grandes, traços de personalidade, cinco grandes, comparar, grátis, jordan peterson'
  },
  frontpage: {
    seo: {
      title: 'Teste de personalidade dos Cinco Grandes',
      description:
        'Faça um teste de personalidade gratuito e de código aberto dos Cinco Grandes. Aprenda a conhecer seus traços de personalidade e compare-se com seu parceiro, colegas, amigos ou familiares.'
    },
    title: 'Teste de Personalidade dos Cinco Grandes',
    call_to_action: 'Faça o teste gratuito',
    no_registration: '*Não é necessário registro',
    tests_taken: 'Over <green>{n}</green> people have taken the test',
    compare: {
      title: 'Compare-se com os outros',
      action: 'Compare agora',
      text: 'Compare seus resultados com os de um parceiro, colega, amigo ou membro da família para ver como você difere nas cinco dimensões.'
    },
    share: 'Compartilhe com seus amigos e descubra o quão compatível você é',
    cards: {
      open: {
        title: 'Abrir',
        text: 'Este é um projeto de código aberto sob licença do MIT.'
      },
      free: {
        title: 'Grátis',
        text: 'O teste é totalmente gratuito'
      },
      scientific: {
        title: 'Científico',
        text: 'BigFive é um modelo psicológico cientificamente validado e confiável.'
      },
      translated: {
        title: 'Traduzido',
        text: 'Translated to over 20 languages. Help out on <a href="https://b5.translations.alheimsins.net/" rel="noreferrer" target="blank">this translation page</a>!'
      }
    },
    description: {
      top: 'Aprenda a se compreender melhor por meio dos <wiki>Cinco Grandes Traços de Personalidade</wiki>⁠.',
      wikipedia:
        'Leia sobre os cinco grandes traços de personalidade na Wikipedia',
      subtop: 'O',
      subtop2:
        'é o modelo psicológico mais cientificamente validado e confiável para medir a personalidade.',
      reference:
        'Tests and evaluation for this site is gathered from\n<a href="http://ipip.ori.org" rel="noopener" target="_blank">ipip.ori.org</a>,\ninventory is from <i>Johnson\'s (2014) 120-item IPIP NEO-PI-R</i>.',
      info: 'Este teste contém 120 questões e leva cerca de 10 minutos para ser concluído.',
      result:
        'Depois de concluir o teste, você receberá um relatório detalhado de personalidade nos seguintes domínios:',
      tests_taken: 'testes feitos até agora'
    }
  },
  about: {
    seo: {
      title: 'Sobre e a equipe dos cinco grandes',
      description:
        'A BigFive tem uma equipe muito ativa e engajada que se esforça constantemente para impulsionar a BigFive.'
    }
  },
  toolbar: {
    home: 'Início',
    result: 'Resultado',
    compare: 'Compare',
    personality: 'Personalidade',
    articles: 'Artigos',
    about: 'Sobre',
    see_results: 'Veja seus resultados',
    compare_with: 'Compare com outros'
  },
  facets: {
    openness_to_experience: {
      title: 'Abertura à Experiência'
    },
    conscientiousness: {
      title: 'Consciência'
    },
    extraversion: {
      title: 'Extroversão'
    },
    agreeableness: {
      title: 'Afabilidade'
    },
    neuroticism: {
      title: 'Neuroticismo'
    }
  },
  common: {
    and: 'e',
    pages: 'páginas',
    languages: 'idiomas',
    save: 'Salvar',
    close: 'Fechar'
  },
  form: {
    information: 'Informação',
    informationText: 'Usamos as informações que você fornece para atendê-lo',
    mostAccurate: 'resultado mais preciso possível',
    readMoreAbout: 'Leia mais sobre',
    nextButton: 'Ok, próxima pergunta',
    declineButton: 'continuar sem compartilhar',
    prefferedLanguage: 'Meu idioma preferido é',
    selectLanguage: 'Selecione um idioma',
    iama: 'eu sou um',
    male: 'Masculino',
    female: 'Feminino',
    age: 'Idade',
    iam: 'eu sou',
    yearsOld: 'anos',
    ageWarning: 'Você deve ter 16 anos ou mais',
    language: 'Idioma',
    gender: 'Gênero',
    confirmInfo: 'Confirmar informações',
    confirm: 'Confirmar',
    toTestButton: 'Tudo bem, leve-me para o teste'
  },
  test: {
    next: 'avançar',
    back: 'anterior',
    more: 'mais',
    seeResults: 'ver resultados'
  },
  big_five: {
    title: 'Quais são os cinco grandes?',
    seo: {
      title: 'Quais são os cinco grandes?',
      description: 'Leia mais sobre os cinco grandes'
    }
  },
  openness_to_experience: {
    title: 'Abertura à Experiência',
    seo: {
      title: 'Visão geral do domínio Abertura à Experiência.',
      description:
        'Leia mais sobre o domínio Openness To Experience no modelo b5'
    }
  },
  conscientiousness: {
    title: 'Consciência',
    seo: {
      title: 'Visão geral do domínio Conscienciosidade',
      description: 'Leia mais sobre o domínio Conscienciosidade no modelo b5'
    }
  },
  extraversion: {
    title: 'Extroversão',
    seo: {
      title: 'Visão geral do domínio Extroversão',
      description: 'Leia mais sobre o domínio Extroversão no modelo b5'
    }
  },
  agreeableness: {
    title: 'Amabilidade',
    seo: {
      title: 'Visão geral da concordância do domínio',
      description: 'Leia mais sobre o domínio de agradabilidade no modelo b5'
    }
  },
  neuroticism: {
    title: 'Neuroticismo',
    seo: {
      title: 'Visão geral do domínio Neuroticismo',
      description: 'Leia mais sobre o domínio Neuroticismo no modelo b5'
    }
  },
  getCompare: {
    title: 'Compare pessoas ou equipes',
    description1:
      'Compare os resultados do teste de personalidade bigfive com várias pessoas.',
    description2:
      'Digite o ID que você obteve nos resultados do teste, ou seja,',
    description3: 'no campo de entrada de ID',
    needToAddPeople: 'Você precisa adicionar pessoas para compará-las',
    addAnother: 'Adicionar outra pessoa',
    addPerson: 'Adicionar pessoa',
    comparePeople: 'Compare pessoas',
    nameOfPerson: 'Nome desta pessoa',
    urlOrId: 'URL ou ID para comparação',
    name: 'Nome'
  },
  results: {
    overview: 'Visão geral',
    all: 'Todos',
    selectDomain: 'Selecione uma característica',
    readMore: 'Leia mais',
    readLess: 'Leia menos',
    theBigFive: 'Os Cinco Grandes',
    score: 'pontuação',
    notice:
      '<important>Importante!</important> Salve o seguinte ID para ver seus resultados mais tarde ou <compare>compare-se com outros</compare>.',
    seo: {
      title: 'Meus resultados do teste de personalidade BigFive',
      description:
        'Veja minha personalidade e compare-se nos cinco domínios a seguir: Neuroticismo, Abertura à Experiência, Consciência, Extroversão, Amabilidade'
    }
  },
  getResult: {
    result: 'Resultado',
    explanation:
      'Se você salvou o ID do resultado após fazer o teste, insira-o abaixo para ver o resultado.',
    idInput: 'no campo de entrada de ID',
    urlOrId: 'URL ou ID do seu resultado',
    getResult: 'Obter resultado',
    viewPrevious: 'Ver resultado anterior'
  },
  shareLinks: {
    copyLink: 'Copiar link para a área de transferência',
    shareFacebook: 'Compartilhe no Facebook',
    shareTwitter: 'Compartilhe no Twitter',
    copiedLink: 'Link copiado',
    shareResults: 'Compartilhe seus resultados!'
  }
};

export default messages;
