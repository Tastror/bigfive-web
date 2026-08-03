import getResults, { Domain, getTemplate } from '@bigfive-org/results';
import bg from '@/data/result-text/bg.json';
import bn from '@/data/result-text/bn.json';
import ca from '@/data/result-text/ca.json';
import cs from '@/data/result-text/cs.json';
import et from '@/data/result-text/et.json';
import fa from '@/data/result-text/fa.json';
import fi from '@/data/result-text/fi.json';
import he from '@/data/result-text/he.json';
import hi from '@/data/result-text/hi.json';
import hr from '@/data/result-text/hr.json';
import hu from '@/data/result-text/hu.json';
import hy from '@/data/result-text/hy.json';
import ja from '@/data/result-text/ja.json';
import ko from '@/data/result-text/ko.json';
import nl from '@/data/result-text/nl.json';
import pl from '@/data/result-text/pl.json';
import pt from '@/data/result-text/pt.json';
import ptBr from '@/data/result-text/pt-br.json';
import ro from '@/data/result-text/ro.json';
import ru from '@/data/result-text/ru.json';
import sl from '@/data/result-text/sl.json';
import sq from '@/data/result-text/sq.json';
import sr from '@/data/result-text/sr.json';
import ss from '@/data/result-text/ss.json';
import sv from '@/data/result-text/sv.json';
import th from '@/data/result-text/th.json';
import tr from '@/data/result-text/tr.json';
import uk from '@/data/result-text/uk.json';
import ur from '@/data/result-text/ur.json';
import vi from '@/data/result-text/vi.json';
import zhCn from '@/data/result-text/zh-cn.json';
import zhHant from '@/data/result-text/zh-hant.json';

export type Score = 'low' | 'neutral' | 'high';
type TranslationFields = Record<string, string>;

export interface ResultTemplate {
  domain: string;
  title: string;
  shortDescription: string;
  description: string;
  results: { score: Score; text: string }[];
  facets: { facet: number; title: string; text: string }[];
}

type ScoreValues = Record<
  string,
  {
    result: Score;
    count: number;
    score: number;
    facet: Record<string, { result: Score; count: number; score: number }>;
  }
>;

const translatedReports: Record<string, TranslationFields> = {
  bg,
  bn,
  ca,
  cs,
  et,
  fa,
  fi,
  he,
  hi,
  hr,
  hu,
  hy,
  ja,
  ko,
  nl,
  pl,
  pt,
  'pt-br': ptBr,
  ro,
  ru,
  sl,
  sq,
  sr,
  ss,
  sv,
  th,
  tr,
  uk,
  ur,
  vi,
  'zh-cn': zhCn,
  'zh-hk': zhHant
};

const domainIds = ['O', 'C', 'E', 'A', 'N'];

const reportLocaleAliases: Record<string, string> = {
  'zh-hans': 'zh-cn',
  'zh-hant': 'zh-hk'
};

const scoreLabels: Record<string, Record<Score, string>> = {
  ar: { low: 'منخفض', neutral: 'متوسط', high: 'مرتفع' },
  bg: { low: 'нисък', neutral: 'среден', high: 'висок' },
  bn: { low: 'নিম্ন', neutral: 'মাঝারি', high: 'উচ্চ' },
  ca: { low: 'baix', neutral: 'mitjà', high: 'alt' },
  cs: { low: 'nízké', neutral: 'průměrné', high: 'vysoké' },
  da: { low: 'lav', neutral: 'middel', high: 'høj' },
  de: { low: 'niedrig', neutral: 'mittel', high: 'hoch' },
  en: { low: 'low', neutral: 'average', high: 'high' },
  es: { low: 'bajo', neutral: 'medio', high: 'alto' },
  et: { low: 'madal', neutral: 'keskmine', high: 'kõrge' },
  fa: { low: 'پایین', neutral: 'متوسط', high: 'بالا' },
  fi: { low: 'matala', neutral: 'keskitaso', high: 'korkea' },
  fr: { low: 'faible', neutral: 'moyen', high: 'élevé' },
  hi: { low: 'निम्न', neutral: 'मध्यम', high: 'उच्च' },
  he: { low: 'נמוך', neutral: 'ממוצע', high: 'גבוה' },
  hr: { low: 'nisko', neutral: 'prosječno', high: 'visoko' },
  hu: { low: 'alacsony', neutral: 'átlagos', high: 'magas' },
  hy: { low: 'ցածր', neutral: 'միջին', high: 'բարձր' },
  id: { low: 'rendah', neutral: 'sedang', high: 'tinggi' },
  is: { low: 'lágt', neutral: 'miðlungs', high: 'hátt' },
  it: { low: 'basso', neutral: 'medio', high: 'alto' },
  ja: { low: '低い', neutral: '平均的', high: '高い' },
  ko: { low: '낮음', neutral: '보통', high: '높음' },
  nl: { low: 'laag', neutral: 'gemiddeld', high: 'hoog' },
  no: { low: 'lav', neutral: 'middels', high: 'høy' },
  pl: { low: 'niski', neutral: 'średni', high: 'wysoki' },
  pt: { low: 'baixo', neutral: 'médio', high: 'alto' },
  'pt-br': { low: 'baixo', neutral: 'médio', high: 'alto' },
  ro: { low: 'scăzut', neutral: 'mediu', high: 'ridicat' },
  ru: { low: 'низкий', neutral: 'средний', high: 'высокий' },
  sl: { low: 'nizko', neutral: 'povprečno', high: 'visoko' },
  sq: { low: 'i ulët', neutral: 'mesatar', high: 'i lartë' },
  sr: { low: 'nisko', neutral: 'prosečno', high: 'visoko' },
  ss: { low: 'phansi', neutral: 'lokulingene', high: 'phezulu' },
  sv: { low: 'låg', neutral: 'medel', high: 'hög' },
  th: { low: 'ต่ำ', neutral: 'ปานกลาง', high: 'สูง' },
  tr: { low: 'düşük', neutral: 'ortalama', high: 'yüksek' },
  uk: { low: 'низький', neutral: 'середній', high: 'високий' },
  ur: { low: 'کم', neutral: 'اوسط', high: 'زیادہ' },
  vi: { low: 'thấp', neutral: 'trung bình', high: 'cao' },
  'zh-cn': { low: '较低', neutral: '中等', high: '较高' },
  'zh-hk': { low: '較低', neutral: '中等', high: '較高' }
};

export function getReportLanguage(locale: string): string {
  return reportLocaleAliases[locale] ?? locale;
}

function createTemplate(fields: TranslationFields): ResultTemplate[] {
  return domainIds.map((domain) => ({
    domain,
    title: fields[`${domain}.title`],
    shortDescription: fields[`${domain}.shortDescription`],
    description: fields[`${domain}.description`],
    results: Array.from({ length: 3 }, (_, index) => ({
      text: fields[`${domain}.results[${index}].text`],
      score: fields[`${domain}.results[${index}].score`] as Score
    })),
    facets: Array.from({ length: 6 }, (_, index) => ({
      title: fields[`${domain}.facets[${index}].title`],
      facet: Number(fields[`${domain}.facets[${index}].facet`]),
      text: fields[`${domain}.facets[${index}].text`]
    }))
  }));
}

function generateResultFromTemplate(
  scores: ScoreValues,
  template: ResultTemplate[]
): Domain[] {
  return Object.keys(scores).map((domainId) => {
    const score = scores[domainId];
    const domain = template.find((item) => item.domain === domainId);

    if (!domain) throw new Error(`Missing report template for ${domainId}`);

    const result = domain.results.find((item) => item.score === score.result);
    if (!result)
      throw new Error(`Missing ${score.result} result for ${domainId}`);

    return {
      domain: domain.domain,
      title: domain.title,
      shortDescription: domain.shortDescription,
      description: domain.description,
      scoreText: result.score,
      count: score.count,
      score: score.score,
      facets: domain.facets.flatMap((facet) => {
        const facetScore = score.facet[facet.facet.toString()];
        return facetScore
          ? [{ ...facet, ...facetScore, scoreText: facetScore.result }]
          : [];
      }),
      text: result.text
    };
  });
}

function localizeScoreLabels(language: string, results: Domain[]): Domain[] {
  const labels = scoreLabels[language];
  if (!labels) return results;

  return results.map((domain) => {
    const localizedDomain = {
      ...domain,
      scoreText: labels[domain.scoreText as Score] ?? domain.scoreText,
      facets: domain.facets.map((facet) => ({
        ...facet,
        scoreText: labels[facet.scoreText as Score] ?? facet.scoreText
      }))
    };

    // The upstream type restricts scoreText to its English lookup keys even
    // though this is the user-facing, translated label.
    return localizedDomain as unknown as Domain;
  });
}

export function getLocalizedResults(
  language: string,
  scores: Parameters<typeof getResults>[0]['scores']
): Domain[] {
  const translatedReport = translatedReports[language];

  if (!translatedReport) {
    return localizeScoreLabels(
      language,
      getResults({ lang: language, scores })
    );
  }

  return localizeScoreLabels(
    language,
    generateResultFromTemplate(
      scores as ScoreValues,
      createTemplate(translatedReport)
    )
  );
}

export function getLocalizedResultTemplate(language: string): ResultTemplate[] {
  const translatedReport = translatedReports[language];

  if (translatedReport) return createTemplate(translatedReport);

  return getTemplate(language) as ResultTemplate[];
}
