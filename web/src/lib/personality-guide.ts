import {
  getLocalizedResultTemplate,
  getReportLanguage,
  type ResultTemplate,
  type Score
} from '@/lib/localized-results';

export interface PersonalityGuideMessages {
  title: string;
  seoDescription: string;
  intro: string;
  scaleTitle: string;
  scaleText: string;
  lower: string;
  middle: string;
  higher: string;
  lowerMeaning: string;
  middleMeaning: string;
  higherMeaning: string;
  domainGuide: string;
  facets: string;
  facetIntro: string;
  viewLevels: string;
  sourcesTitle: string;
  sourcesText: string;
  sourceIpip: string;
  sourceJohnson: string;
  noteTitle: string;
  note: string;
}

const messages: Record<string, PersonalityGuideMessages> = {
  'zh-hans': {
    title: '认识性格',
    seoDescription:
      '认识大五人格的五个维度、30 个子特质，以及各项得分较低、中等和较高时的具体表现。',
    intro:
      '人格特质是一条连续的光谱，而不是非此即彼的分类。这里可以了解五个大维度、30 个子特质分别描述什么，以及它们在日常生活中的较低、中等和较高表现。',
    scaleTitle: '如何理解分数区间',
    scaleText:
      '较低、中等和较高描述的是相对倾向，并非固定类型。接近分界线的结果，可能同时呈现相邻两个区间的特点。',
    lower: '较低',
    middle: '中等',
    higher: '较高',
    lowerMeaning: '这一倾向相对不突出，更可能符合上文所描述的低分表现。',
    middleMeaning: '两端的表现都可能出现，哪一端更贴近会随情境而变化。',
    higherMeaning: '这一倾向相对突出，更可能符合上文所描述的高分表现。',
    domainGuide: '不同分数区间的具体表现',
    facets: '六个子特质',
    facetIntro: '这个子特质描述什么',
    viewLevels: '查看较低、中等和较高的表现',
    sourcesTitle: '依据与来源',
    sourcesText:
      '页面说明以 IPIP-NEO-120 的报告文本为基础。分数应理解为连续光谱上的相对位置，而不是彼此割裂的人格类型。',
    sourceIpip: 'IPIP：如何解释个人量表分数',
    sourceJohnson: '120 题 IPIP-NEO 人格量表的开发研究',
    noteTitle: '需要注意',
    note: '人格特质不是诊断，任何分数本身都没有绝对的好坏。情境、目标、文化以及不同特质的组合，都会影响一种倾向最终如何表现。'
  },
  'zh-hant': {
    title: '認識性格',
    seoDescription:
      '認識大五人格的五個維度、30 個子特質，以及各項得分較低、中等和較高時的具體表現。',
    intro:
      '人格特質是一條連續的光譜，而不是非此即彼的分類。這裡可以了解五個大維度、30 個子特質分別描述甚麼，以及它們在日常生活中的較低、中等和較高表現。',
    scaleTitle: '如何理解分數區間',
    scaleText:
      '較低、中等和較高描述的是相對傾向，並非固定類型。接近分界線的結果，可能同時呈現相鄰兩個區間的特點。',
    lower: '較低',
    middle: '中等',
    higher: '較高',
    lowerMeaning: '這一傾向相對不突出，更可能符合上文所描述的低分表現。',
    middleMeaning: '兩端的表現都可能出現，哪一端更貼近會隨情境而變化。',
    higherMeaning: '這一傾向相對突出，更可能符合上文所描述的高分表現。',
    domainGuide: '不同分數區間的具體表現',
    facets: '六個子特質',
    facetIntro: '這個子特質描述甚麼',
    viewLevels: '查看較低、中等和較高的表現',
    sourcesTitle: '依據與來源',
    sourcesText:
      '頁面說明以 IPIP-NEO-120 的報告文字為基礎。分數應理解為連續光譜上的相對位置，而不是彼此割裂的人格類型。',
    sourceIpip: 'IPIP：如何解釋個人量表分數',
    sourceJohnson: '120 題 IPIP-NEO 人格量表的開發研究',
    noteTitle: '需要注意',
    note: '人格特質不是診斷，任何分數本身都沒有絕對的好壞。情境、目標、文化以及不同特質的組合，都會影響一種傾向最終如何表現。'
  },
  en: {
    title: 'Understand personality',
    seoDescription:
      'Understand the Big Five dimensions and all 30 facets across lower, middle, and higher score ranges.',
    intro:
      'Personality traits are continua, not boxes. Explore what each broad dimension and narrower facet describes, and how lower, middle, and higher scores may appear in everyday life.',
    scaleTitle: 'How to read the levels',
    scaleText:
      'Lower, middle, and higher describe relative tendencies, not fixed types. A result near a boundary may resemble both neighboring ranges.',
    lower: 'Lower',
    middle: 'Middle',
    higher: 'Higher',
    lowerMeaning:
      'This tendency is less prominent. The lower-scoring pattern described above is more likely to fit.',
    middleMeaning:
      'Both sides can appear. Which pattern fits better may change with the situation.',
    higherMeaning:
      'This tendency is more prominent. The higher-scoring pattern described above is more likely to fit.',
    domainGuide: 'How different score ranges may appear',
    facets: 'Six narrower facets',
    facetIntro: 'What this facet describes',
    viewLevels: 'View lower, middle, and higher',
    sourcesTitle: 'Basis and sources',
    sourcesText:
      'The descriptions are based on the IPIP-NEO-120 report text. Scores are interpreted as positions on a continuum rather than separate personality types.',
    sourceIpip: 'IPIP guidance for interpreting individual scale scores',
    sourceJohnson: 'Development of the 120-item IPIP-NEO personality inventory',
    noteTitle: 'Keep in mind',
    note: 'Traits are not diagnoses, and no score is inherently good or bad. Context, goals, culture, and the combination of traits all affect how a tendency is expressed.'
  },
  ar: {
    title: 'فهم الشخصية',
    seoDescription:
      'افهم أبعاد السمات الخمس الكبرى وجوانبها الثلاثين عبر نطاقات الدرجات المنخفضة والمتوسطة والمرتفعة.',
    intro:
      'سمات الشخصية أبعاد متصلة وليست قوالب منفصلة. تعرّف إلى ما يصفه كل بُعد عام وكل جانب فرعي، وكيف قد تبدو الدرجات المنخفضة والمتوسطة والمرتفعة في الحياة اليومية.',
    scaleTitle: 'كيفية قراءة المستويات',
    scaleText:
      'تصف المستويات المنخفضة والمتوسطة والمرتفعة ميولًا نسبية لا أنواعًا ثابتة. وقد تشبه النتيجة القريبة من الحد كلا النطاقين المتجاورين.',
    lower: 'منخفض',
    middle: 'متوسط',
    higher: 'مرتفع',
    lowerMeaning:
      'هذا الميل أقل بروزًا، ومن الأرجح أن ينطبق النمط منخفض الدرجة الموصوف أعلاه.',
    middleMeaning:
      'قد يظهر جانبا السمة معًا، وقد يتغير الجانب الأقرب بحسب الموقف.',
    higherMeaning:
      'هذا الميل أكثر بروزًا، ومن الأرجح أن ينطبق النمط مرتفع الدرجة الموصوف أعلاه.',
    domainGuide: 'كيف قد تبدو نطاقات الدرجات المختلفة',
    facets: 'ستة جوانب فرعية',
    facetIntro: 'ما الذي يصفه هذا الجانب',
    viewLevels: 'عرض المنخفض والمتوسط والمرتفع',
    sourcesTitle: 'الأساس والمصادر',
    sourcesText:
      'تستند الأوصاف إلى نص تقرير IPIP-NEO-120. وتُفسَّر الدرجات بوصفها مواقع على بُعد متصل، لا أنواع شخصية منفصلة.',
    sourceIpip: 'إرشادات IPIP لتفسير درجات المقاييس الفردية',
    sourceJohnson: 'تطوير قائمة IPIP-NEO للشخصية المكوّنة من 120 بندًا',
    noteTitle: 'تذكّر',
    note: 'السمات ليست تشخيصًا، ولا توجد درجة جيدة أو سيئة بذاتها. فالسياق والأهداف والثقافة وتركيب السمات كلها تؤثر في كيفية ظهور الميل.'
  },
  de: {
    title: 'Persönlichkeit verstehen',
    seoDescription:
      'Verstehen Sie die Big-Five-Dimensionen und alle 30 Facetten in niedrigen, mittleren und hohen Wertebereichen.',
    intro:
      'Persönlichkeitsmerkmale sind Kontinua, keine Schubladen. Erfahren Sie, was jede breite Dimension und jede engere Facette beschreibt und wie sich niedrige, mittlere und hohe Werte im Alltag zeigen können.',
    scaleTitle: 'So lesen Sie die Bereiche',
    scaleText:
      'Niedrig, mittel und hoch beschreiben relative Tendenzen, keine festen Typen. Ein Ergebnis nahe einer Grenze kann beiden benachbarten Bereichen ähneln.',
    lower: 'Niedrig',
    middle: 'Mittel',
    higher: 'Hoch',
    lowerMeaning:
      'Diese Tendenz ist weniger ausgeprägt. Das oben beschriebene Muster für niedrigere Werte passt eher.',
    middleMeaning:
      'Beide Seiten können auftreten. Welches Muster besser passt, kann sich je nach Situation ändern.',
    higherMeaning:
      'Diese Tendenz ist stärker ausgeprägt. Das oben beschriebene Muster für höhere Werte passt eher.',
    domainGuide: 'So können unterschiedliche Wertebereiche aussehen',
    facets: 'Sechs engere Facetten',
    facetIntro: 'Was diese Facette beschreibt',
    viewLevels: 'Niedrig, mittel und hoch ansehen',
    sourcesTitle: 'Grundlage und Quellen',
    sourcesText:
      'Die Beschreibungen beruhen auf dem Berichtstext des IPIP-NEO-120. Werte werden als Positionen auf einem Kontinuum und nicht als getrennte Persönlichkeitstypen interpretiert.',
    sourceIpip: 'IPIP-Leitfaden zur Interpretation individueller Skalenwerte',
    sourceJohnson:
      'Entwicklung des IPIP-NEO-Persönlichkeitsinventars mit 120 Items',
    noteTitle: 'Bitte beachten',
    note: 'Merkmale sind keine Diagnosen und kein Wert ist an sich gut oder schlecht. Kontext, Ziele, Kultur und die Kombination der Merkmale beeinflussen, wie sich eine Tendenz zeigt.'
  },
  es: {
    title: 'Entender la personalidad',
    seoDescription:
      'Comprenda las cinco grandes dimensiones y sus 30 facetas en rangos de puntuación bajos, medios y altos.',
    intro:
      'Los rasgos de personalidad son continuos, no casillas. Explore qué describe cada dimensión amplia y cada faceta específica, y cómo pueden aparecer las puntuaciones bajas, medias y altas en la vida cotidiana.',
    scaleTitle: 'Cómo leer los niveles',
    scaleText:
      'Bajo, medio y alto describen tendencias relativas, no tipos fijos. Un resultado cercano a un límite puede parecerse a los dos rangos vecinos.',
    lower: 'Bajo',
    middle: 'Medio',
    higher: 'Alto',
    lowerMeaning:
      'Esta tendencia es menos marcada. Es más probable que encaje el patrón de puntuación baja descrito arriba.',
    middleMeaning:
      'Pueden aparecer ambos lados. El patrón que encaje mejor puede cambiar según la situación.',
    higherMeaning:
      'Esta tendencia es más marcada. Es más probable que encaje el patrón de puntuación alta descrito arriba.',
    domainGuide: 'Cómo pueden aparecer los distintos rangos',
    facets: 'Seis facetas específicas',
    facetIntro: 'Qué describe esta faceta',
    viewLevels: 'Ver nivel bajo, medio y alto',
    sourcesTitle: 'Base y fuentes',
    sourcesText:
      'Las descripciones se basan en el texto del informe IPIP-NEO-120. Las puntuaciones se interpretan como posiciones en un continuo y no como tipos de personalidad separados.',
    sourceIpip: 'Guía IPIP para interpretar puntuaciones individuales',
    sourceJohnson:
      'Desarrollo del inventario de personalidad IPIP-NEO de 120 ítems',
    noteTitle: 'Tenga en cuenta',
    note: 'Los rasgos no son diagnósticos y ninguna puntuación es buena o mala por sí misma. El contexto, los objetivos, la cultura y la combinación de rasgos influyen en cómo se expresa una tendencia.'
  },
  fr: {
    title: 'Comprendre la personnalité',
    seoDescription:
      'Comprenez les cinq grandes dimensions et leurs 30 facettes dans les plages de scores faibles, moyennes et élevées.',
    intro:
      'Les traits de personnalité sont des continuums, pas des cases. Découvrez ce que décrit chaque grande dimension et chaque facette plus précise, ainsi que la façon dont les scores faibles, moyens et élevés peuvent apparaître au quotidien.',
    scaleTitle: 'Comment lire les niveaux',
    scaleText:
      'Faible, moyen et élevé décrivent des tendances relatives, et non des types fixes. Un résultat proche d’une limite peut ressembler aux deux plages voisines.',
    lower: 'Faible',
    middle: 'Moyen',
    higher: 'Élevé',
    lowerMeaning:
      'Cette tendance est moins marquée. Le profil de score faible décrit ci-dessus est plus susceptible de correspondre.',
    middleMeaning:
      'Les deux côtés peuvent apparaître. Le profil qui correspond le mieux peut changer selon la situation.',
    higherMeaning:
      'Cette tendance est plus marquée. Le profil de score élevé décrit ci-dessus est plus susceptible de correspondre.',
    domainGuide: 'Comment les différentes plages peuvent apparaître',
    facets: 'Six facettes plus précises',
    facetIntro: 'Ce que décrit cette facette',
    viewLevels: 'Voir faible, moyen et élevé',
    sourcesTitle: 'Base et sources',
    sourcesText:
      'Les descriptions sont fondées sur le texte du rapport IPIP-NEO-120. Les scores sont interprétés comme des positions sur un continuum plutôt que comme des types de personnalité distincts.',
    sourceIpip: 'Guide IPIP pour interpréter les scores individuels',
    sourceJohnson:
      'Développement de l’inventaire de personnalité IPIP-NEO à 120 items',
    noteTitle: 'À garder en tête',
    note: 'Les traits ne sont pas des diagnostics et aucun score n’est bon ou mauvais en soi. Le contexte, les objectifs, la culture et la combinaison des traits influencent tous la manière dont une tendance s’exprime.'
  },
  id: {
    title: 'Memahami kepribadian',
    seoDescription:
      'Pahami lima dimensi besar dan seluruh 30 faset pada rentang skor rendah, sedang, dan tinggi.',
    intro:
      'Ciri kepribadian merupakan sebuah kontinum, bukan kotak-kotak. Pelajari apa yang dijelaskan setiap dimensi luas dan faset yang lebih khusus, serta bagaimana skor rendah, sedang, dan tinggi dapat terlihat dalam kehidupan sehari-hari.',
    scaleTitle: 'Cara membaca tingkat skor',
    scaleText:
      'Rendah, sedang, dan tinggi menggambarkan kecenderungan relatif, bukan tipe tetap. Hasil di dekat batas dapat menyerupai kedua rentang di sebelahnya.',
    lower: 'Rendah',
    middle: 'Sedang',
    higher: 'Tinggi',
    lowerMeaning:
      'Kecenderungan ini kurang menonjol. Pola skor rendah yang dijelaskan di atas lebih mungkin sesuai.',
    middleMeaning:
      'Kedua sisi dapat muncul. Pola yang lebih sesuai dapat berubah menurut situasi.',
    higherMeaning:
      'Kecenderungan ini lebih menonjol. Pola skor tinggi yang dijelaskan di atas lebih mungkin sesuai.',
    domainGuide: 'Bagaimana rentang skor yang berbeda dapat terlihat',
    facets: 'Enam faset yang lebih khusus',
    facetIntro: 'Apa yang dijelaskan faset ini',
    viewLevels: 'Lihat rendah, sedang, dan tinggi',
    sourcesTitle: 'Dasar dan sumber',
    sourcesText:
      'Deskripsi didasarkan pada teks laporan IPIP-NEO-120. Skor ditafsirkan sebagai posisi pada suatu kontinum, bukan sebagai tipe kepribadian yang terpisah.',
    sourceIpip: 'Panduan IPIP untuk menafsirkan skor skala individu',
    sourceJohnson: 'Pengembangan inventori kepribadian IPIP-NEO 120 butir',
    noteTitle: 'Perlu diingat',
    note: 'Ciri bukan diagnosis, dan tidak ada skor yang pada dasarnya baik atau buruk. Konteks, tujuan, budaya, dan kombinasi ciri memengaruhi bagaimana suatu kecenderungan ditampilkan.'
  },
  it: {
    title: 'Comprendere la personalità',
    seoDescription:
      'Comprendi le cinque grandi dimensioni e tutte le 30 sfaccettature nelle fasce di punteggio basse, medie e alte.',
    intro:
      'I tratti della personalità sono continui, non caselle. Esplora cosa descrive ciascuna dimensione ampia e ciascuna sfaccettatura più specifica, e come i punteggi bassi, medi e alti possono apparire nella vita quotidiana.',
    scaleTitle: 'Come leggere i livelli',
    scaleText:
      'Basso, medio e alto descrivono tendenze relative, non tipi fissi. Un risultato vicino a un confine può assomigliare a entrambe le fasce adiacenti.',
    lower: 'Basso',
    middle: 'Medio',
    higher: 'Alto',
    lowerMeaning:
      'Questa tendenza è meno evidente. È più probabile che corrisponda il profilo di punteggio basso descritto sopra.',
    middleMeaning:
      'Possono apparire entrambi i lati. Il profilo più adatto può cambiare in base alla situazione.',
    higherMeaning:
      'Questa tendenza è più evidente. È più probabile che corrisponda il profilo di punteggio alto descritto sopra.',
    domainGuide: 'Come possono apparire le diverse fasce di punteggio',
    facets: 'Sei sfaccettature più specifiche',
    facetIntro: 'Cosa descrive questa sfaccettatura',
    viewLevels: 'Vedi basso, medio e alto',
    sourcesTitle: 'Base e fonti',
    sourcesText:
      'Le descrizioni si basano sul testo del rapporto IPIP-NEO-120. I punteggi sono interpretati come posizioni su un continuum, non come tipi di personalità separati.',
    sourceIpip: 'Guida IPIP per interpretare i punteggi delle singole scale',
    sourceJohnson:
      'Sviluppo dell’inventario di personalità IPIP-NEO di 120 elementi',
    noteTitle: 'Da tenere a mente',
    note: 'I tratti non sono diagnosi e nessun punteggio è buono o cattivo in sé. Contesto, obiettivi, cultura e combinazione dei tratti influenzano il modo in cui una tendenza si esprime.'
  },
  no: {
    title: 'Forstå personlighet',
    seoDescription:
      'Forstå de fem store dimensjonene og alle 30 fasettene ved lave, middels og høye skårer.',
    intro:
      'Personlighetstrekk er kontinuerlige, ikke bokser. Utforsk hva hver bred dimensjon og smalere fasett beskriver, og hvordan lave, middels og høye skårer kan komme til uttrykk i hverdagen.',
    scaleTitle: 'Slik leser du nivåene',
    scaleText:
      'Lav, middels og høy beskriver relative tendenser, ikke faste typer. Et resultat nær en grense kan ligne på begge naboområdene.',
    lower: 'Lav',
    middle: 'Middels',
    higher: 'Høy',
    lowerMeaning:
      'Denne tendensen er mindre fremtredende. Mønsteret for lav skår som er beskrevet ovenfor, passer sannsynligvis bedre.',
    middleMeaning:
      'Begge sider kan vise seg. Hvilket mønster som passer best, kan endre seg med situasjonen.',
    higherMeaning:
      'Denne tendensen er mer fremtredende. Mønsteret for høy skår som er beskrevet ovenfor, passer sannsynligvis bedre.',
    domainGuide: 'Slik kan ulike skårområder se ut',
    facets: 'Seks smalere fasetter',
    facetIntro: 'Hva denne fasetten beskriver',
    viewLevels: 'Se lav, middels og høy',
    sourcesTitle: 'Grunnlag og kilder',
    sourcesText:
      'Beskrivelsene bygger på rapportteksten til IPIP-NEO-120. Skårer tolkes som posisjoner på et kontinuum, ikke som separate personlighetstyper.',
    sourceIpip: 'IPIP-veiledning for tolkning av individuelle skalaskårer',
    sourceJohnson:
      'Utvikling av IPIP-NEO-personlighetsinventaret med 120 elementer',
    noteTitle: 'Husk',
    note: 'Trekk er ikke diagnoser, og ingen skår er i seg selv god eller dårlig. Kontekst, mål, kultur og kombinasjonen av trekk påvirker hvordan en tendens kommer til uttrykk.'
  },
  pt: {
    title: 'Entender a personalidade',
    seoDescription:
      'Compreenda as cinco grandes dimensões e todas as 30 facetas nas faixas de pontuação baixa, média e alta.',
    intro:
      'Os traços de personalidade são contínuos, não caixas. Explore o que cada dimensão ampla e cada faceta mais específica descrevem e como pontuações baixas, médias e altas podem aparecer no cotidiano.',
    scaleTitle: 'Como ler os níveis',
    scaleText:
      'Baixo, médio e alto descrevem tendências relativas, não tipos fixos. Um resultado próximo de um limite pode se parecer com as duas faixas vizinhas.',
    lower: 'Baixo',
    middle: 'Médio',
    higher: 'Alto',
    lowerMeaning:
      'Esta tendência é menos proeminente. O padrão de pontuação baixa descrito acima tem maior probabilidade de corresponder.',
    middleMeaning:
      'Os dois lados podem aparecer. O padrão mais adequado pode mudar conforme a situação.',
    higherMeaning:
      'Esta tendência é mais proeminente. O padrão de pontuação alta descrito acima tem maior probabilidade de corresponder.',
    domainGuide: 'Como diferentes faixas de pontuação podem aparecer',
    facets: 'Seis facetas mais específicas',
    facetIntro: 'O que esta faceta descreve',
    viewLevels: 'Ver baixo, médio e alto',
    sourcesTitle: 'Base e fontes',
    sourcesText:
      'As descrições se baseiam no texto do relatório IPIP-NEO-120. As pontuações são interpretadas como posições em um contínuo, e não como tipos de personalidade separados.',
    sourceIpip: 'Orientação do IPIP para interpretar pontuações individuais',
    sourceJohnson:
      'Desenvolvimento do inventário de personalidade IPIP-NEO de 120 itens',
    noteTitle: 'Lembre-se',
    note: 'Traços não são diagnósticos e nenhuma pontuação é boa ou ruim por si só. Contexto, objetivos, cultura e combinação de traços afetam a forma como uma tendência se expressa.'
  },
  sv: {
    title: 'Förstå personlighet',
    seoDescription:
      'Förstå de fem stora dimensionerna och alla 30 aspekterna vid låga, medelhöga och höga poäng.',
    intro:
      'Personlighetsdrag är kontinuerliga, inte fack. Utforska vad varje bred dimension och smalare aspekt beskriver, och hur låga, medelhöga och höga poäng kan visa sig i vardagen.',
    scaleTitle: 'Så läser du nivåerna',
    scaleText:
      'Låg, medel och hög beskriver relativa tendenser, inte fasta typer. Ett resultat nära en gräns kan likna båda angränsande intervallen.',
    lower: 'Låg',
    middle: 'Medel',
    higher: 'Hög',
    lowerMeaning:
      'Denna tendens är mindre framträdande. Mönstret för låg poäng som beskrivs ovan passar sannolikt bättre.',
    middleMeaning:
      'Båda sidor kan visa sig. Vilket mönster som passar bäst kan ändras med situationen.',
    higherMeaning:
      'Denna tendens är mer framträdande. Mönstret för hög poäng som beskrivs ovan passar sannolikt bättre.',
    domainGuide: 'Så kan olika poängintervall se ut',
    facets: 'Sex smalare aspekter',
    facetIntro: 'Vad denna aspekt beskriver',
    viewLevels: 'Se låg, medel och hög',
    sourcesTitle: 'Grund och källor',
    sourcesText:
      'Beskrivningarna bygger på rapporttexten för IPIP-NEO-120. Poäng tolkas som positioner på ett kontinuum, inte som separata personlighetstyper.',
    sourceIpip: 'IPIP-vägledning för tolkning av individuella skalpoäng',
    sourceJohnson: 'Utveckling av personlighetstestet IPIP-NEO med 120 frågor',
    noteTitle: 'Kom ihåg',
    note: 'Drag är inte diagnoser och ingen poäng är i sig bra eller dålig. Sammanhang, mål, kultur och kombinationen av drag påverkar hur en tendens uttrycks.'
  },
  uk: {
    title: 'Зрозуміти особистість',
    seoDescription:
      'Дізнайтеся про п’ять великих вимірів і всі 30 граней для низьких, середніх і високих балів.',
    intro:
      'Особистісні риси — це континууми, а не окремі категорії. Дізнайтеся, що описує кожен широкий вимір і вужча грань та як низькі, середні й високі бали можуть проявлятися в повсякденному житті.',
    scaleTitle: 'Як читати рівні',
    scaleText:
      'Низький, середній і високий рівні описують відносні тенденції, а не фіксовані типи. Результат біля межі може нагадувати обидва сусідні діапазони.',
    lower: 'Низький',
    middle: 'Середній',
    higher: 'Високий',
    lowerMeaning:
      'Ця тенденція менш помітна. Імовірніше, підійде описаний вище профіль низького бала.',
    middleMeaning:
      'Можуть проявлятися обидві сторони. Те, який профіль підходить краще, залежить від ситуації.',
    higherMeaning:
      'Ця тенденція більш помітна. Імовірніше, підійде описаний вище профіль високого бала.',
    domainGuide: 'Як можуть проявлятися різні діапазони балів',
    facets: 'Шість вужчих граней',
    facetIntro: 'Що описує ця грань',
    viewLevels: 'Переглянути низький, середній і високий рівні',
    sourcesTitle: 'Основа та джерела',
    sourcesText:
      'Описи ґрунтуються на тексті звіту IPIP-NEO-120. Бали тлумачаться як позиції на континуумі, а не як окремі типи особистості.',
    sourceIpip: 'Настанови IPIP щодо тлумачення індивідуальних балів',
    sourceJohnson:
      'Розроблення 120-пунктового особистісного опитувальника IPIP-NEO',
    noteTitle: 'Зверніть увагу',
    note: 'Риси не є діагнозом, і жоден бал сам по собі не є добрим чи поганим. Контекст, цілі, культура та поєднання рис впливають на те, як проявляється тенденція.'
  },
  da: {
    title: 'Forstå personlighed',
    seoDescription:
      'Forstå de fem store dimensioner og alle 30 facetter ved lave, mellemstore og høje scorer.',
    intro:
      'Personlighedstræk er kontinua, ikke kasser. Udforsk, hvad hver bred dimension og smallere facet beskriver, og hvordan lave, mellemstore og høje scorer kan vise sig i hverdagen.',
    scaleTitle: 'Sådan læser du niveauerne',
    scaleText:
      'Lav, middel og høj beskriver relative tendenser, ikke faste typer. Et resultat nær en grænse kan ligne begge naboområder.',
    lower: 'Lav',
    middle: 'Middel',
    higher: 'Høj',
    lowerMeaning:
      'Denne tendens er mindre fremtrædende. Mønsteret for lav score, der er beskrevet ovenfor, passer sandsynligvis bedre.',
    middleMeaning:
      'Begge sider kan vise sig. Hvilket mønster der passer bedst, kan ændre sig med situationen.',
    higherMeaning:
      'Denne tendens er mere fremtrædende. Mønsteret for høj score, der er beskrevet ovenfor, passer sandsynligvis bedre.',
    domainGuide: 'Sådan kan forskellige scoreområder se ud',
    facets: 'Seks smallere facetter',
    facetIntro: 'Hvad denne facet beskriver',
    viewLevels: 'Se lav, middel og høj',
    sourcesTitle: 'Grundlag og kilder',
    sourcesText:
      'Beskrivelserne bygger på rapportteksten til IPIP-NEO-120. Scorer fortolkes som positioner på et kontinuum frem for adskilte personlighedstyper.',
    sourceIpip: 'IPIP-vejledning til fortolkning af individuelle skalascores',
    sourceJohnson:
      'Udvikling af IPIP-NEO-personlighedstesten med 120 spørgsmål',
    noteTitle: 'Husk',
    note: 'Træk er ikke diagnoser, og ingen score er i sig selv god eller dårlig. Kontekst, mål, kultur og kombinationen af træk påvirker, hvordan en tendens kommer til udtryk.'
  },
  fi: {
    title: 'Ymmärrä persoonallisuutta',
    seoDescription:
      'Tutustu Big Five -ulottuvuuksiin ja kaikkiin 30 osa-alueeseen matalilla, keskitasoisilla ja korkeilla pisteillä.',
    intro:
      'Persoonallisuuden piirteet ovat jatkumoita, eivät lokeroita. Tutustu siihen, mitä kukin laaja ulottuvuus ja tarkempi osa-alue kuvaa ja miten matalat, keskitasoiset ja korkeat pisteet voivat näkyä arjessa.',
    scaleTitle: 'Näin luet tasoja',
    scaleText:
      'Matala, keskitaso ja korkea kuvaavat suhteellisia taipumuksia, eivät pysyviä tyyppejä. Lähellä rajaa oleva tulos voi muistuttaa molempia viereisiä alueita.',
    lower: 'Matala',
    middle: 'Keskitaso',
    higher: 'Korkea',
    lowerMeaning:
      'Tämä taipumus on vähemmän näkyvä. Edellä kuvattu matalan pistemäärän malli sopii todennäköisemmin.',
    middleMeaning:
      'Molemmat puolet voivat näkyä. Tilanne voi vaikuttaa siihen, kumpi malli sopii paremmin.',
    higherMeaning:
      'Tämä taipumus on näkyvämpi. Edellä kuvattu korkean pistemäärän malli sopii todennäköisemmin.',
    domainGuide: 'Näin eri pistemäärät voivat näkyä',
    facets: 'Kuusi tarkempaa osa-aluetta',
    facetIntro: 'Mitä tämä osa-alue kuvaa',
    viewLevels: 'Näytä matala, keskitaso ja korkea',
    sourcesTitle: 'Perusta ja lähteet',
    sourcesText:
      'Kuvaukset perustuvat IPIP-NEO-120-raportin tekstiin. Pisteet tulkitaan sijainneiksi jatkumolla, eivät erillisiksi persoonallisuustyypeiksi.',
    sourceIpip: 'IPIP-ohje yksittäisten asteikkopisteiden tulkintaan',
    sourceJohnson:
      '120-kohtaisen IPIP-NEO-persoonallisuusmittarin kehittäminen',
    noteTitle: 'Pidä mielessä',
    note: 'Piirteet eivät ole diagnooseja, eikä mikään pistemäärä ole itsessään hyvä tai huono. Tilanne, tavoitteet, kulttuuri ja piirteiden yhdistelmä vaikuttavat siihen, miten taipumus ilmenee.'
  },
  hi: {
    title: 'व्यक्तित्व को समझें',
    seoDescription:
      'बिग फाइव के पाँच आयामों और सभी 30 पहलुओं को निम्न, मध्यम और उच्च स्कोर पर समझें।',
    intro:
      'व्यक्तित्व के गुण अलग-अलग खाँचे नहीं, बल्कि निरंतर पैमाने हैं। जानें कि हर व्यापक आयाम और विशिष्ट पहलू क्या बताता है, तथा निम्न, मध्यम और उच्च स्कोर रोज़मर्रा के जीवन में कैसे दिखाई दे सकते हैं।',
    scaleTitle: 'स्तरों को कैसे समझें',
    scaleText:
      'निम्न, मध्यम और उच्च निश्चित प्रकार नहीं, बल्कि सापेक्ष प्रवृत्तियाँ बताते हैं। सीमा के पास का परिणाम दोनों पड़ोसी स्तरों जैसा हो सकता है।',
    lower: 'निम्न',
    middle: 'मध्यम',
    higher: 'उच्च',
    lowerMeaning:
      'यह प्रवृत्ति कम प्रमुख है। ऊपर बताया गया निम्न-स्कोर वाला ढाँचा अधिक उपयुक्त हो सकता है।',
    middleMeaning:
      'दोनों पक्ष दिखाई दे सकते हैं। कौन-सा ढाँचा अधिक उपयुक्त है, यह परिस्थिति के साथ बदल सकता है।',
    higherMeaning:
      'यह प्रवृत्ति अधिक प्रमुख है। ऊपर बताया गया उच्च-स्कोर वाला ढाँचा अधिक उपयुक्त हो सकता है।',
    domainGuide: 'अलग-अलग स्कोर स्तर कैसे दिखाई दे सकते हैं',
    facets: 'छह विशिष्ट पहलू',
    facetIntro: 'यह पहलू क्या बताता है',
    viewLevels: 'निम्न, मध्यम और उच्च देखें',
    sourcesTitle: 'आधार और स्रोत',
    sourcesText:
      'विवरण IPIP-NEO-120 रिपोर्ट के पाठ पर आधारित हैं। स्कोर को अलग व्यक्तित्व प्रकारों के बजाय एक निरंतर पैमाने पर स्थितियों के रूप में समझा जाता है।',
    sourceIpip: 'व्यक्तिगत स्केल स्कोर समझने के लिए IPIP मार्गदर्शन',
    sourceJohnson: '120-आइटम IPIP-NEO व्यक्तित्व सूची का विकास',
    noteTitle: 'ध्यान रखें',
    note: 'गुण कोई निदान नहीं हैं और कोई स्कोर अपने आप में अच्छा या बुरा नहीं होता। परिस्थिति, लक्ष्य, संस्कृति और गुणों का मेल इस बात को प्रभावित करता है कि कोई प्रवृत्ति कैसे प्रकट होती है।'
  },
  is: {
    title: 'Skilja persónuleika',
    seoDescription:
      'Kynntu þér víddir fimm þátta líkansins og alla 30 undirþættina við lágt, miðlungs og hátt skor.',
    intro:
      'Persónueinkenni liggja á samfellu en eru ekki afmörkuð hólf. Kynntu þér hvað hver víð vídd og þrengri undirþáttur lýsir og hvernig lágt, miðlungs og hátt skor getur birst í daglegu lífi.',
    scaleTitle: 'Hvernig lesa á stigin',
    scaleText:
      'Lágt, miðlungs og hátt lýsa hlutfallslegri tilhneigingu, ekki föstum gerðum. Niðurstaða nálægt mörkum getur líkst báðum aðliggjandi sviðum.',
    lower: 'Lágt',
    middle: 'Miðlungs',
    higher: 'Hátt',
    lowerMeaning:
      'Þessi tilhneiging er minna áberandi. Líklegra er að lýsingin á lágu skori hér að ofan eigi við.',
    middleMeaning:
      'Báðar hliðar geta komið fram. Hvort mynstrið á betur við getur breyst eftir aðstæðum.',
    higherMeaning:
      'Þessi tilhneiging er meira áberandi. Líklegra er að lýsingin á háu skori hér að ofan eigi við.',
    domainGuide: 'Hvernig mismunandi skor geta birst',
    facets: 'Sex þrengri undirþættir',
    facetIntro: 'Hvað þessi undirþáttur lýsir',
    viewLevels: 'Skoða lágt, miðlungs og hátt',
    sourcesTitle: 'Grunnur og heimildir',
    sourcesText:
      'Lýsingarnar byggja á skýrslutexta IPIP-NEO-120. Skor eru túlkuð sem staða á samfellu en ekki sem aðskildar persónuleikagerðir.',
    sourceIpip: 'Leiðbeiningar IPIP um túlkun einstakra kvarðaskora',
    sourceJohnson: 'Þróun 120 atriða IPIP-NEO persónuleikakvarðans',
    noteTitle: 'Hafðu í huga',
    note: 'Einkenni eru ekki sjúkdómsgreiningar og ekkert skor er í sjálfu sér gott eða slæmt. Samhengi, markmið, menning og samspil einkenna hafa áhrif á hvernig tilhneiging birtist.'
  },
  ja: {
    title: '性格を理解する',
    seoDescription:
      'ビッグファイブの5つの次元と30の下位特性について、低・中・高の各得点帯から理解します。',
    intro:
      '性格特性は区切られた箱ではなく、連続した尺度です。5つの大きな次元と30の下位特性が何を表し、低・中・高の得点が日常生活でどのように現れうるかを確認できます。',
    scaleTitle: '得点帯の読み方',
    scaleText:
      '低・中・高は固定的なタイプではなく、相対的な傾向を表します。境界に近い結果は、隣り合う両方の得点帯に似ることがあります。',
    lower: '低',
    middle: '中',
    higher: '高',
    lowerMeaning:
      'この傾向は比較的弱く、上で説明した低得点のパターンが当てはまりやすい状態です。',
    middleMeaning:
      '両側の特徴が現れます。どちらがより当てはまるかは状況によって変わることがあります。',
    higherMeaning:
      'この傾向は比較的強く、上で説明した高得点のパターンが当てはまりやすい状態です。',
    domainGuide: '得点帯ごとの具体的な現れ方',
    facets: '6つの下位特性',
    facetIntro: 'この下位特性が表すもの',
    viewLevels: '低・中・高を見る',
    sourcesTitle: '根拠と出典',
    sourcesText:
      '説明はIPIP-NEO-120のレポート文に基づいています。得点は別々の性格タイプではなく、連続体上の位置として解釈されます。',
    sourceIpip: '個人の尺度得点を解釈するためのIPIPガイド',
    sourceJohnson: '120項目版IPIP-NEO性格検査の開発研究',
    noteTitle: '留意点',
    note: '特性は診断ではなく、どの得点もそれ自体で良い・悪いとは言えません。状況、目標、文化、特性の組み合わせが、傾向の現れ方に影響します。'
  },
  ko: {
    title: '성격 이해하기',
    seoDescription:
      '빅 파이브의 5개 차원과 30개 하위 특성을 낮음·보통·높음 점수 범위별로 이해합니다.',
    intro:
      '성격 특성은 구분된 상자가 아니라 연속선입니다. 각 큰 차원과 세부 하위 특성이 무엇을 설명하는지, 낮음·보통·높음 점수가 일상에서 어떻게 나타날 수 있는지 살펴보세요.',
    scaleTitle: '점수 범위를 읽는 방법',
    scaleText:
      '낮음·보통·높음은 고정된 유형이 아니라 상대적인 경향을 뜻합니다. 경계에 가까운 결과는 이웃한 두 범위의 특징을 모두 보일 수 있습니다.',
    lower: '낮음',
    middle: '보통',
    higher: '높음',
    lowerMeaning:
      '이 경향이 비교적 덜 두드러지며, 위에서 설명한 낮은 점수의 양상이 더 잘 맞을 가능성이 큽니다.',
    middleMeaning:
      '양쪽 특징이 모두 나타날 수 있으며, 어느 쪽이 더 잘 맞는지는 상황에 따라 달라질 수 있습니다.',
    higherMeaning:
      '이 경향이 비교적 더 두드러지며, 위에서 설명한 높은 점수의 양상이 더 잘 맞을 가능성이 큽니다.',
    domainGuide: '점수 범위별 구체적인 모습',
    facets: '6개의 하위 특성',
    facetIntro: '이 하위 특성이 설명하는 것',
    viewLevels: '낮음·보통·높음 보기',
    sourcesTitle: '근거와 출처',
    sourcesText:
      '설명은 IPIP-NEO-120 보고서 문구를 바탕으로 합니다. 점수는 별개의 성격 유형이 아니라 연속선상의 위치로 해석합니다.',
    sourceIpip: '개별 척도 점수 해석을 위한 IPIP 안내',
    sourceJohnson: '120문항 IPIP-NEO 성격검사 개발 연구',
    noteTitle: '기억할 점',
    note: '특성은 진단이 아니며 어떤 점수도 그 자체로 좋거나 나쁘지 않습니다. 상황, 목표, 문화, 특성의 조합이 경향의 표현 방식에 영향을 줍니다.'
  },
  pl: {
    title: 'Zrozumieć osobowość',
    seoDescription:
      'Poznaj pięć głównych wymiarów i wszystkie 30 aspektów przy niskich, średnich i wysokich wynikach.',
    intro:
      'Cechy osobowości tworzą kontinuum, a nie osobne szufladki. Sprawdź, co opisuje każdy szeroki wymiar i węższy aspekt oraz jak niskie, średnie i wysokie wyniki mogą przejawiać się na co dzień.',
    scaleTitle: 'Jak czytać poziomy',
    scaleText:
      'Niski, średni i wysoki opisują względne tendencje, a nie stałe typy. Wynik blisko granicy może przypominać oba sąsiednie zakresy.',
    lower: 'Niski',
    middle: 'Średni',
    higher: 'Wysoki',
    lowerMeaning:
      'Ta tendencja jest mniej wyraźna. Bardziej prawdopodobne jest dopasowanie opisanego wyżej wzorca niskiego wyniku.',
    middleMeaning:
      'Mogą pojawiać się obie strony. To, który wzorzec pasuje lepiej, może zależeć od sytuacji.',
    higherMeaning:
      'Ta tendencja jest bardziej wyraźna. Bardziej prawdopodobne jest dopasowanie opisanego wyżej wzorca wysokiego wyniku.',
    domainGuide: 'Jak mogą wyglądać różne zakresy wyników',
    facets: 'Sześć węższych aspektów',
    facetIntro: 'Co opisuje ten aspekt',
    viewLevels: 'Zobacz niski, średni i wysoki',
    sourcesTitle: 'Podstawa i źródła',
    sourcesText:
      'Opisy opierają się na tekście raportu IPIP-NEO-120. Wyniki interpretuje się jako pozycje na kontinuum, a nie oddzielne typy osobowości.',
    sourceIpip: 'Wytyczne IPIP dotyczące interpretacji wyników indywidualnych',
    sourceJohnson: 'Opracowanie 120-pozycyjnego inwentarza osobowości IPIP-NEO',
    noteTitle: 'Pamiętaj',
    note: 'Cechy nie są diagnozami, a żaden wynik nie jest sam w sobie dobry ani zły. Kontekst, cele, kultura i połączenie cech wpływają na sposób wyrażania tendencji.'
  },
  ru: {
    title: 'Понять личность',
    seoDescription:
      'Изучите пять основных измерений и все 30 граней при низких, средних и высоких баллах.',
    intro:
      'Черты личности образуют континуум, а не отдельные категории. Узнайте, что описывает каждое широкое измерение и более узкая грань и как низкие, средние и высокие баллы могут проявляться в повседневной жизни.',
    scaleTitle: 'Как читать уровни',
    scaleText:
      'Низкий, средний и высокий уровни описывают относительные тенденции, а не фиксированные типы. Результат рядом с границей может напоминать оба соседних диапазона.',
    lower: 'Низкий',
    middle: 'Средний',
    higher: 'Высокий',
    lowerMeaning:
      'Эта тенденция выражена слабее. Вероятнее, подходит описанный выше профиль низкого балла.',
    middleMeaning:
      'Могут проявляться обе стороны. То, какой профиль подходит лучше, может зависеть от ситуации.',
    higherMeaning:
      'Эта тенденция выражена сильнее. Вероятнее, подходит описанный выше профиль высокого балла.',
    domainGuide: 'Как могут проявляться разные диапазоны баллов',
    facets: 'Шесть более узких граней',
    facetIntro: 'Что описывает эта грань',
    viewLevels: 'Посмотреть низкий, средний и высокий уровни',
    sourcesTitle: 'Основа и источники',
    sourcesText:
      'Описания основаны на тексте отчёта IPIP-NEO-120. Баллы интерпретируются как позиции на континууме, а не как отдельные типы личности.',
    sourceIpip: 'Руководство IPIP по интерпретации индивидуальных баллов',
    sourceJohnson: 'Разработка 120-пунктового личностного опросника IPIP-NEO',
    noteTitle: 'Обратите внимание',
    note: 'Черты не являются диагнозом, и ни один балл сам по себе не является хорошим или плохим. Контекст, цели, культура и сочетание черт влияют на проявление тенденции.'
  },
  th: {
    title: 'ทำความเข้าใจบุคลิกภาพ',
    seoDescription:
      'ทำความเข้าใจบุคลิกภาพห้ามิติและองค์ประกอบย่อยทั้ง 30 ด้านในช่วงคะแนนต่ำ ปานกลาง และสูง',
    intro:
      'ลักษณะบุคลิกภาพเป็นความต่อเนื่อง ไม่ใช่กล่องแยกประเภท สำรวจว่าแต่ละมิติหลักและองค์ประกอบย่อยอธิบายอะไร และคะแนนต่ำ ปานกลาง และสูงอาจแสดงออกในชีวิตประจำวันอย่างไร',
    scaleTitle: 'วิธีอ่านระดับคะแนน',
    scaleText:
      'ต่ำ ปานกลาง และสูงอธิบายแนวโน้มเชิงสัมพัทธ์ ไม่ใช่ประเภทที่ตายตัว ผลลัพธ์ใกล้เส้นแบ่งอาจคล้ายกับช่วงที่อยู่ติดกันทั้งสองช่วง',
    lower: 'ต่ำ',
    middle: 'ปานกลาง',
    higher: 'สูง',
    lowerMeaning:
      'แนวโน้มนี้เด่นน้อยกว่า และมีแนวโน้มสอดคล้องกับรูปแบบคะแนนต่ำที่อธิบายไว้ข้างต้น',
    middleMeaning:
      'ลักษณะของทั้งสองด้านอาจปรากฏได้ รูปแบบที่ตรงกว่าอาจเปลี่ยนไปตามสถานการณ์',
    higherMeaning:
      'แนวโน้มนี้เด่นมากกว่า และมีแนวโน้มสอดคล้องกับรูปแบบคะแนนสูงที่อธิบายไว้ข้างต้น',
    domainGuide: 'ช่วงคะแนนต่าง ๆ อาจแสดงออกอย่างไร',
    facets: 'องค์ประกอบย่อยหกด้าน',
    facetIntro: 'องค์ประกอบย่อยนี้อธิบายอะไร',
    viewLevels: 'ดูระดับต่ำ ปานกลาง และสูง',
    sourcesTitle: 'หลักการและแหล่งข้อมูล',
    sourcesText:
      'คำอธิบายอ้างอิงจากข้อความรายงาน IPIP-NEO-120 คะแนนถูกตีความเป็นตำแหน่งบนความต่อเนื่อง ไม่ใช่ประเภทบุคลิกภาพที่แยกจากกัน',
    sourceIpip: 'คำแนะนำ IPIP สำหรับการตีความคะแนนรายบุคคล',
    sourceJohnson: 'งานพัฒนาแบบวัดบุคลิกภาพ IPIP-NEO 120 ข้อ',
    noteTitle: 'ข้อควรจำ',
    note: 'ลักษณะบุคลิกภาพไม่ใช่การวินิจฉัย และไม่มีคะแนนใดดีหรือไม่ดีในตัวเอง บริบท เป้าหมาย วัฒนธรรม และการผสมผสานของลักษณะต่าง ๆ ล้วนมีผลต่อการแสดงออกของแนวโน้ม'
  }
};

const arabicDomainResults: Record<string, Record<Score, string>> = {
  O: {
    low: 'تشير الدرجة المنخفضة في الانفتاح إلى تفضيل التفكير الواضح والمباشر والمألوف. وقد يصفك الآخرون بأنك عملي ومحافظ وواقعي.',
    neutral:
      'تشير الدرجة المتوسطة في الانفتاح إلى أنك تستمتع بالمألوف، مع استعداد لتجربة أشياء جديدة. وقد يتغير اهتمامك بالأفكار الجديدة بحسب الموضوع والموقف.',
    high: 'تشير الدرجة المرتفعة في الانفتاح إلى الاستمتاع بالتجديد والتنوع والتغيير، مع فضول وخيال وإبداع أوضح.'
  },
  C: {
    low: 'تشير الدرجة المنخفضة في اليقظة والتفاني إلى ميل أكبر للعيش في اللحظة واتباع ما يبدو مناسبًا الآن، وقد يكون العمل أقل تنظيمًا أو دقة.',
    neutral:
      'تشير الدرجة المتوسطة في اليقظة والتفاني إلى قدر معتدل من الاعتمادية والتنظيم وضبط النفس.',
    high: 'تشير الدرجة المرتفعة في اليقظة والتفاني إلى وضع أهداف واضحة والسعي إليها بإصرار، وغالبًا ما يراك الآخرون موثوقًا ومجتهدًا.'
  },
  E: {
    low: 'تشير الدرجة المنخفضة في الانبساط إلى ميل للهدوء والتحفظ والاستمتاع بالوقت المنفرد، مع دائرة اجتماعية أصغر وأكثر قربًا.',
    neutral:
      'تشير الدرجة المتوسطة في الانبساط إلى الاستمتاع بالوقت مع الآخرين وكذلك بالوقت المنفرد، دون ميل شديد إلى أي من الطرفين.',
    high: 'تشير الدرجة المرتفعة في الانبساط إلى ميل أكبر إلى التواصل الاجتماعي والحيوية والنشاط، وتفضيل الوجود مع الآخرين معظم الوقت.'
  },
  A: {
    low: 'تشير الدرجة المنخفضة في القبول إلى اهتمام أقوى بالاحتياجات الشخصية مقارنة باحتياجات الآخرين، وقد يراك الناس حازمًا وناقدًا وقليل التنازل.',
    neutral:
      'تشير الدرجة المتوسطة في القبول إلى الاهتمام باحتياجات الآخرين في بعض المواقف، من دون استعداد دائم للتضحية بالاحتياجات الشخصية.',
    high: 'تشير الدرجة المرتفعة في القبول إلى اهتمام قوي باحتياجات الآخرين ورفاههم، مع تعاطف وتعاون ولطف أوضح.'
  },
  N: {
    low: 'تشير الدرجة المنخفضة في العصابية إلى هدوء واتزان واضحين، حتى في المواقف التي يراها معظم الناس ضاغطة.',
    neutral:
      'تشير الدرجة المتوسطة في العصابية إلى مستوى معتاد من التفاعل العاطفي؛ قد تزعجك المواقف الضاغطة، لكنك تستطيع غالبًا تجاوز المشاعر والتعامل معها.',
    high: 'تشير الدرجة المرتفعة في العصابية إلى سهولة أكبر في الشعور بالانزعاج أو الضغط أمام متطلبات الحياة اليومية، وقد يراك الآخرون حساسًا وعاطفيًا.'
  }
};

const icelandicFacetOverrides: Record<string, { title: string; text: string }> =
  {
    'O.1': {
      title: 'Ímyndunarafl',
      text: 'Þeir sem skora hátt nota ímyndunaraflið gjarnan til að skapa ríkari og áhugaverðari innri heim. Þeir sem skora lágt beina athyglinni frekar að staðreyndum og því sem er áþreifanlegt.'
    },
    'O.2': {
      title: 'Listáhugi',
      text: 'Þeir sem skora hátt kunna vel að meta fegurð í list og náttúru og geta sökkt sér í slíka upplifun. Hátt skor segir ekki endilega til um listræna þjálfun eða hæfileika. Þeir sem skora lágt hafa yfirleitt minni áhuga á list og fagurfræði.'
    },
    'O.3': {
      title: 'Tilfinninganæmi',
      text: 'Þeir sem skora hátt eiga auðvelt með að greina eigin tilfinningar og veita þeim athygli. Þeir sem skora lágt eru síður meðvitaðir um eigin tilfinningar og tjá þær síður opinskátt.'
    },
    'O.4': {
      title: 'Ævintýraþrá',
      text: 'Þeir sem skora hátt sækjast eftir nýjum athöfnum, stöðum og upplifunum og geta fljótt leiðst rútína. Þeir sem skora lágt kjósa frekar kunnuglegt umhverfi og fyrirsjáanlegar venjur.'
    },
    'O.5': {
      title: 'Vitsmunalegur áhugi',
      text: 'Þeir sem skora hátt hafa gaman af nýjum og óvenjulegum hugmyndum, umræðum, gátum og flóknum viðfangsefnum. Þeir sem skora lágt kjósa frekar að fást við fólk eða áþreifanlega hluti. Þessi þáttur lýsir hugsunarstíl en er ekki það sama og greind eða greindarvísitala.'
    },
    'O.6': {
      title: 'Frjálslyndi',
      text: 'Þeir sem skora hátt eru tilbúnari til að efast um vald, venjur og hefðbundin gildi. Þeir sem skora lágt kjósa frekar öryggi og stöðugleika hefða. Þessi sálfræðilega tilhneiging er ekki það sama og stjórnmálaskoðun.'
    },
    'C.1': {
      title: 'Trú á eigin getu',
      text: 'Þeir sem skora hátt treysta því að þeir hafi skilning, drifkraft og sjálfstjórn til að ljúka verkefnum. Þeir sem skora lágt geta efast um eigin árangur og fundið að þeir hafi lítil áhrif á gang mála.'
    },
    'C.2': {
      title: 'Reglusemi',
      text: 'Þeir sem skora hátt skipuleggja sig vel, kunna að meta rútínu og áætlanir og nota gjarnan lista. Þeir sem skora lágt vinna frjálslegra og geta verið óskipulagðari eða dreifðari.'
    },
    'C.3': {
      title: 'Skyldurækni',
      text: 'Þeir sem skora hátt finna sterkt fyrir skyldu og ábyrgð og taka loforð og reglur alvarlega. Þeir sem skora lágt upplifa slíkar skuldbindingar frekar sem takmarkandi og geta virst óáreiðanlegri.'
    },
    'C.4': {
      title: 'Metnaður',
      text: 'Þeir sem skora hátt stefna að framúrskarandi árangri og halda einbeitingu að krefjandi markmiðum. Mjög hátt skor getur fylgt mikilli vinnusókn. Þeir sem skora lágt eru sáttari við hóflegt álag og einfaldari markmið.'
    },
    'C.5': {
      title: 'Sjálfsagi',
      text: 'Þeir sem skora hátt geta byrjað á erfiðum eða óþægilegum verkefnum og haldið áfram þrátt fyrir truflanir. Þeir sem skora lágt fresta frekar og geta átt erfitt með að ljúka verkefnum, jafnvel þegar þau skipta þá máli.'
    },
    'C.6': {
      title: 'Varkárni',
      text: 'Þeir sem skora hátt íhuga valkosti og afleiðingar áður en þeir ákveða sig. Þeir sem skora lágt bregðast hraðar við og segja eða gera oftar það fyrsta sem kemur upp í hugann.'
    },
    'E.1': {
      title: 'Vinsemd',
      text: 'Þeir sem skora hátt sýna öðrum hlýju, eignast auðveldlega vini og mynda fljótt náin tengsl. Þeir sem skora lágt eru ekki endilega óvinveittir, en leita síður til annarra og geta virst hlédrægir.'
    },
    'E.2': {
      title: 'Félagslyndi',
      text: 'Þeir sem skora hátt fá örvun og ánægju úr félagsskap og fjölmenni. Þeir sem skora lágt geta orðið yfirhlaðnir í hópum og þurfa meiri einveru og næði, án þess að þeim þurfi að líka illa við fólk.'
    },
    'E.3': {
      title: 'Ákveðni',
      text: 'Þeir sem skora hátt tjá sig gjarnan, taka frumkvæði og leiða starf annarra. Þeir sem skora lágt tala minna í hópum og láta aðra frekar leiða.'
    },
    'E.4': {
      title: 'Virkni',
      text: 'Þeir sem skora hátt lifa hröðu og annasömu lífi, hreyfa sig af krafti og taka þátt í mörgu. Þeir sem skora lágt kjósa hægari, rólegri og afslappaðri takt.'
    },
    'E.5': {
      title: 'Spennusókn',
      text: 'Þeir sem skora hátt þurfa meiri örvun, sækjast eftir spennu og geta verið tilbúnari að taka áhættu. Þeir sem skora lágt verða frekar þreyttir á hávaða og ys og sækjast síður eftir spennu.'
    },
    'E.6': {
      title: 'Glaðværð',
      text: 'Þeir sem skora hátt upplifa oftar jákvæðar tilfinningar eins og gleði, eldmóð og bjartsýni. Þeir sem skora lágt upplifa slíka orku og glaðværð síður; þátturinn mælir ekki neikvæðar tilfinningar.'
    },
    'A.1': {
      title: 'Traust',
      text: 'Þeir sem skora hátt gera frekar ráð fyrir að fólk sé sanngjarnt, heiðarlegt og velviljað. Þeir sem skora lágt eru tortryggnari og sjá aðra frekar sem eigingjarna, slæga eða mögulega hættulega.'
    },
    'A.2': {
      title: 'Hreinskilni',
      text: 'Þeir sem skora hátt eru beinskeyttir og einlægir og sjá litla þörf fyrir sýndarmennsku eða stjórnun annarra. Þeir sem skora lágt eru varfærnari í samskiptum og telja stundum nauðsynlegt að segja ekki allan sannleikann. Lágt skor merkir ekki sjálfkrafa siðleysi.'
    },
    'A.3': {
      title: 'Hjálpsemi',
      text: 'Þeir sem skora hátt upplifa það sem gefandi að hjálpa öðrum og bjóða gjarnan fram aðstoð. Þeir sem skora lágt hafa minni ánægju af hjálparhlutverki og geta upplifað beiðnir um aðstoð sem byrði.'
    },
    'A.4': {
      title: 'Samvinna',
      text: 'Þeir sem skora hátt forðast átök og eru tilbúnir að semja eða gefa eftir til að varðveita samlyndi. Þeir sem skora lágt standa fastar á sínu og beita frekar þrýstingi til að ná fram vilja sínum.'
    },
    'A.5': {
      title: 'Hógværð',
      text: 'Þeir sem skora hátt forðast að halda því fram að þeir séu öðrum fremri. Það þarf ekki að endurspegla lágt sjálfsálit. Þeir sem skora lágt eru tilbúnari að leggja áherslu á eigin yfirburði og geta stundum virst hrokafullir.'
    },
    'A.6': {
      title: 'Samkennd',
      text: 'Þeir sem skora hátt finna sterkt til með þjáningu annarra og hrífast auðveldlega til samúðar. Þeir sem skora lágt leggja meiri áherslu á rök, sannleika og hlutlaust réttlæti en miskunn.'
    },
    'N.1': {
      title: 'Kvíði',
      text: 'Þeir sem skora hátt finna oftar fyrir hættu, spennu og óróa, annaðhvort í ákveðnum aðstæðum eða almennt. Þeir sem skora lágt eru að jafnaði rólegri og óttast síður mögulega ógn.'
    },
    'N.2': {
      title: 'Reiði',
      text: 'Þeir sem skora hátt verða auðveldlega reiðir þegar hlutir ganga ekki að óskum og eru næmir fyrir ósanngirni eða svikum. Hvort reiðin er sýnd fer einnig eftir samvinnuþýði. Þeir sem skora lágt reiðast sjaldnar og síður.'
    },
    'N.3': {
      title: 'Depurð',
      text: 'Þeir sem skora hátt eru líklegri til að finna fyrir sorg, niðurdrepandi hugsunum og orkuleysi og geta átt erfitt með að hefja athafnir. Þeir sem skora lágt verða síður fyrir slíkum tilfinningum.'
    },
    'N.4': {
      title: 'Félagsleg sjálfsmeðvitund',
      text: 'Þeir sem skora hátt eru næmir fyrir áliti annarra, óttast höfnun eða háð og geta orðið feimnir eða vandræðalegir. Þeir sem skora lágt finna síður að aðrir séu að fylgjast með og dæma þá og eru afslappaðri í félagslegum aðstæðum.'
    },
    'N.5': {
      title: 'Óhóf',
      text: 'Þeir sem skora hátt finna fyrir sterkum löngunum og hvötum sem erfitt er að standast og velja frekar skammtímaverðlaun en langtímaafleiðingar. Þeir sem skora lágt finna síður fyrir ómótstæðilegum hvötum.'
    },
    'N.6': {
      title: 'Viðkvæmni fyrir álagi',
      text: 'Þeir sem skora hátt geta fundið fyrir skelfingu, ruglingi eða hjálparleysi undir miklu álagi. Þeir sem skora lágt halda frekar ró, sjálfstrausti og skýrri hugsun þegar á reynir.'
    }
  };

export interface PersonalityGuideDomain {
  domain: string;
  title: string;
  shortDescription: string;
  levels: Record<Score, string>;
  facets: ResultTemplate['facets'];
}

export function getPersonalityGuideMessages(
  locale: string
): PersonalityGuideMessages {
  return messages[locale] ?? messages.en;
}

export function getPersonalityGuideDomains(
  locale: string
): PersonalityGuideDomain[] {
  const reportLanguage = getReportLanguage(locale);
  const domainOrder = ['O', 'C', 'E', 'A', 'N'];
  const template = getLocalizedResultTemplate(reportLanguage)
    .slice()
    .sort(
      (first, second) =>
        domainOrder.indexOf(first.domain) - domainOrder.indexOf(second.domain)
    );

  return template.map((domain) => ({
    domain: domain.domain,
    title: domain.title,
    shortDescription: domain.shortDescription,
    levels:
      locale === 'ar'
        ? arabicDomainResults[domain.domain]
        : (Object.fromEntries(
            domain.results.map((result) => [result.score, result.text])
          ) as Record<Score, string>),
    facets: domain.facets.map((facet) => {
      if (locale !== 'is') return facet;

      return {
        ...facet,
        ...icelandicFacetOverrides[`${domain.domain}.${facet.facet}`]
      };
    })
  }));
}
