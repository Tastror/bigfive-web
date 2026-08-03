import { serbianObjectToLatin } from '@/lib/serbian';

const messages = {
  language: {
    label: 'Српски',
    locale: 'sr'
  },
  seo: {
    keywords:
      'тест личности великих пет, тест личности великих пет, тест б5, тест великих пет, особине личности, велика петица, упореди, бесплатно, Џордан Петерсон'
  },
  frontpage: {
    seo: {
      title: 'Тест личности великих пет',
      description:
        'Урадите бесплатан тест личности Биг Фиве отвореног кода. Научите да познајете своје особине личности и упоредите се са својим партнером, колегама, пријатељима или породицом.'
    },
    title: 'Тест личности великих пет',
    call_to_action: 'Урадите бесплатан тест',
    no_registration: '* Није потребна регистрација',
    tests_taken: 'Over <green>{n}</green> people have taken the test',
    compare: {
      title: 'Упоредите себе са другима',
      action: 'Упоредите сада',
      text: 'Упоредите своје резултате са резултатима партнера, колеге, пријатеља или члана породице да бисте видели како се разликујете у пет димензија.'
    },
    share: 'Поделите са пријатељима и сазнајте колико сте компатибилни',
    cards: {
      open: {
        title: 'Отворено',
        text: 'Ово је пројекат отвореног кода под МИТ лиценцом.'
      },
      free: {
        title: 'Бесплатно',
        text: 'Тест је потпуно бесплатан'
      },
      scientific: {
        title: 'Научно',
        text: 'БигФиве је научно потврђен и поуздан психолошки модел.'
      },
      translated: {
        title: 'Преведено',
        text: 'Translated to over 20 languages. Help out on <a href="https://b5.translations.alheimsins.net/" rel="noreferrer" target="blank">this translation page</a>!'
      }
    },
    description: {
      top: 'Научите да боље разумете себе кроз <wiki>Великих пет особина личности</wiki>⁠.',
      wikipedia: 'Прочитајте о особинама личности великих пет на Википедији',
      subtop: 'Тхе',
      subtop2:
        'је научно најпоузданији и најпоузданији психолошки модел за мерење личности.',
      reference:
        'Tests and evaluation for this site is gathered from\n<a href="http://ipip.ori.org" rel="noopener" target="_blank">ipip.ori.org</a>,\ninventory is from <i>Johnson\'s (2014) 120-item IPIP NEO-PI-R</i>.',
      info: 'Овај тест садржи 120 питања и траје око 10 минута.',
      result:
        'Након што завршите тест, добићете детаљан извештај о личности у следећим доменима:',
      tests_taken: 'до сада обављени тестови'
    }
  },
  about: {
    seo: {
      title: 'О и тим великих пет',
      description:
        'БигФиве има веома активан и ангажован тим који стално настоји да гура БигФиве напред.'
    }
  },
  toolbar: {
    home: 'Početna',
    result: 'Rezultat',
    compare: 'Uporedi',
    personality: 'Личност',
    articles: 'Чланци',
    about: 'Абоут',
    see_results: 'Pogledajte vaše rezultate',
    compare_with: 'Uporedite sa drugima'
  },
  facets: {
    openness_to_experience: {
      title: 'Otvorenost Za Iskustva'
    },
    conscientiousness: {
      title: 'Savesnost'
    },
    extraversion: {
      title: 'Ekstraverzija'
    },
    agreeableness: {
      title: 'Prijatnost'
    },
    neuroticism: {
      title: 'Neuroticizam'
    }
  },
  common: {
    and: 'и',
    pages: 'странице',
    languages: 'језика',
    save: 'Сачувај',
    close: 'Затвори'
  },
  form: {
    information: 'Информације',
    informationText:
      'Користимо информације које нам пружите да бисмо вам послужили',
    mostAccurate: 'најтачнији могући резултат',
    readMoreAbout: 'Прочитајте више о',
    nextButton: 'У реду, следеће питање',
    declineButton: 'настави без дељења',
    prefferedLanguage: 'Мој омиљени језик је',
    selectLanguage: 'Изаберите језик',
    iama: 'ја сам а',
    male: 'Мушко',
    female: 'Фемале',
    age: 'Старост',
    iam: 'јесам',
    yearsOld: 'године',
    ageWarning: 'Морате имати 16 или више година',
    language: 'Језик',
    gender: 'Пол',
    confirmInfo: 'Потврдите информације',
    confirm: 'Потврди',
    toTestButton: 'У реду, води ме на тест'
  },
  test: {
    next: 'sledeće',
    back: 'prethodno',
    more: 'више',
    seeResults: 'vidi rezultate'
  },
  big_five: {
    title: 'Шта је велика петорка?',
    seo: {
      title: 'Шта је велика петорка?',
      description: 'Прочитајте више о великој петорци'
    }
  },
  openness_to_experience: {
    title: 'Отвореност за искуство',
    seo: {
      title: 'Преглед домена Отвореност за искуство.',
      description:
        'Прочитајте више о домену отворености за искуство у моделу б5'
    }
  },
  conscientiousness: {
    title: 'Савесност',
    seo: {
      title: 'Преглед домена Савесност',
      description: 'Прочитајте више о домену савесности у моделу б5'
    }
  },
  extraversion: {
    title: 'Екстраверзија',
    seo: {
      title: 'Преглед домена Екстраверзија',
      description: 'Прочитајте више о домену екстраверзије у моделу б5'
    }
  },
  agreeableness: {
    title: 'Агрееабленесс',
    seo: {
      title: 'Преглед домена Агрееабленесс',
      description: 'Прочитајте више о домену прихватљивости у моделу б5'
    }
  },
  neuroticism: {
    title: 'Неуротицизам',
    seo: {
      title: 'Преглед домена Неуротицизам',
      description: 'Прочитајте више о домену неуротицизма у моделу б5'
    }
  },
  getCompare: {
    title: 'Упоредите људе или тимове',
    description1: 'Упоредите резултате теста личности са више људи.',
    description2: 'Унесите ИД који сте добили из резултата теста, тј.',
    description3: 'у пољу за унос ИД-а',
    needToAddPeople: 'Морате да додате људе да бисте их упоредили',
    addAnother: 'Додајте другу особу',
    addPerson: 'Додај особу',
    comparePeople: 'Упоредите људе',
    nameOfPerson: 'Име ове особе',
    urlOrId: 'УРЛ или ИД за поређење',
    name: 'Име'
  },
  results: {
    overview: 'Преглед',
    all: 'Све',
    selectDomain: 'Изаберите особину',
    readMore: 'Прочитајте више',
    readLess: 'Читај мање',
    theBigFive: 'Велика петорка',
    score: 'резултат',
    notice:
      '<important>Важно!</important> Сачувајте следећи ИД да бисте касније видели своје резултате или <compare>упоредите себе са другима</compare>.',
    seo: {
      title: 'Моји резултати са БигФиве теста личности',
      description:
        'Погледајте моју личност и упоредите се у следећих пет домена: неуротицизам, отвореност за искуство, савесност, екстраверзија, пријатност'
    }
  },
  getResult: {
    result: 'Резултат',
    explanation:
      'Ако сте сачували свој ИД резултата након тестирања, унесите га испод да бисте видели свој резултат.',
    idInput: 'у пољу за унос ИД-а',
    urlOrId: 'УРЛ или ИД вашег резултата',
    getResult: 'Добијте резултат',
    viewPrevious: 'Прикажи претходни резултат'
  },
  shareLinks: {
    copyLink: 'Копирајте везу у међуспремник',
    shareFacebook: 'Поделите на Фејсбуку',
    shareTwitter: 'Делите на Твитеру',
    copiedLink: 'Копирана веза',
    shareResults: 'Поделите своје резултате!'
  }
};

export default serbianObjectToLatin(messages);
