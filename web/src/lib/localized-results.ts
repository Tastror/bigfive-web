import getResults, { Domain } from '@bigfive-org/results';
import fi from '@/data/result-text/fi.json';
import hi from '@/data/result-text/hi.json';
import ja from '@/data/result-text/ja.json';
import ko from '@/data/result-text/ko.json';
import pl from '@/data/result-text/pl.json';
import ru from '@/data/result-text/ru.json';
import sv from '@/data/result-text/sv.json';
import th from '@/data/result-text/th.json';
import uk from '@/data/result-text/uk.json';
import zhCn from '@/data/result-text/zh-cn.json';
import zhHant from '@/data/result-text/zh-hant.json';

type Score = 'low' | 'neutral' | 'high';
type TranslationFields = Record<string, string>;

interface ResultTemplate {
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
  fi,
  hi,
  ja,
  ko,
  pl,
  ru,
  sv,
  th,
  uk,
  'zh-cn': zhCn,
  'zh-hk': zhHant
};

const domainIds = ['O', 'C', 'E', 'A', 'N'];

const reportLocaleAliases: Record<string, string> = {
  'zh-hans': 'zh-cn',
  'zh-hant': 'zh-hk',
  pt: 'pt-br'
};

const scoreLabels: Record<string, Record<Score, string>> = {
  ar: { low: 'منخفض', neutral: 'متوسط', high: 'مرتفع' },
  da: { low: 'lav', neutral: 'middel', high: 'høj' },
  de: { low: 'niedrig', neutral: 'mittel', high: 'hoch' },
  en: { low: 'low', neutral: 'average', high: 'high' },
  es: { low: 'bajo', neutral: 'medio', high: 'alto' },
  fi: { low: 'matala', neutral: 'keskitaso', high: 'korkea' },
  fr: { low: 'faible', neutral: 'moyen', high: 'élevé' },
  hi: { low: 'निम्न', neutral: 'मध्यम', high: 'उच्च' },
  id: { low: 'rendah', neutral: 'sedang', high: 'tinggi' },
  is: { low: 'lágt', neutral: 'miðlungs', high: 'hátt' },
  it: { low: 'basso', neutral: 'medio', high: 'alto' },
  ja: { low: '低い', neutral: '平均的', high: '高い' },
  ko: { low: '낮음', neutral: '보통', high: '높음' },
  no: { low: 'lav', neutral: 'middels', high: 'høy' },
  pl: { low: 'niski', neutral: 'średni', high: 'wysoki' },
  'pt-br': { low: 'baixo', neutral: 'médio', high: 'alto' },
  ru: { low: 'низкий', neutral: 'средний', high: 'высокий' },
  sv: { low: 'låg', neutral: 'medel', high: 'hög' },
  th: { low: 'ต่ำ', neutral: 'ปานกลาง', high: 'สูง' },
  uk: { low: 'низький', neutral: 'середній', high: 'високий' },
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
    return localizeScoreLabels(language, getResults({ lang: language, scores }));
  }

  return localizeScoreLabels(
    language,
    generateResultFromTemplate(
      scores as ScoreValues,
      createTemplate(translatedReport)
    )
  );
}
